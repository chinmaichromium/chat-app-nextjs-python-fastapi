from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from openai import OpenAI
import socketio
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure Socket.IO with CORS
sio = socketio.AsyncServer(
    async_mode="asgi",
    cors_allowed_origins=["http://localhost:3000"],  # Update with your frontend origin
)
app.mount("/socket.io", socketio.ASGIApp(socketio_server=sio))

# Initialize the OpenAI client
client = OpenAI(
    api_key="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"
)

if not client.api_key:
    raise ValueError("OPENAI_API_KEY is not set in the environment")


@sio.event
async def connect(sid, environ):
    print(f"Client {sid} connected")


@sio.event
async def disconnect(sid):
    print(f"Client {sid} disconnected")


@sio.event
async def user_message(sid, data):
    print(f"Received message from {sid}: {data}")
    try:
        # Use the custom OpenAI client for streaming
        stream = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": data},
            ],
            stream=True,
        )

        # Stream chunks to the frontend
        for chunk in stream:
            if chunk.choices[0].delta.content is not None:
                content = chunk.choices[0].delta.content
                await sio.emit("chat_message", content, to=sid)

        # End of streaming signal
        await sio.emit("chat_message_end", {}, to=sid)

    except Exception as e:
        print(f"Error: {e}")
        await sio.emit(
            "chat_message",
            "Sorry, there was an error processing your request.",
            to=sid,
        )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)