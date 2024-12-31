import { FormEvent, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import {
  addMessage,
  setInputText,
  setStreamingMessage,
  useChatStore,
} from "../stores/useChatStore";

let socket: Socket;

export const useChat = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const streamingMessageRef = useRef<string>("");
  const messages = useChatStore((state) => state.messages);
  const streamingMessage = useChatStore((state) => state.streamingMessage);
  const inputText = useChatStore((state) => state.inputText);

  useEffect(() => {
    socket = io(process.env.NEXT_PUBLIC_FASTAPI_URL, {
      path: "/socket.io",
      reconnection: true,
    });

    socket.on("chat_message", (chunk: string) => {
      const updatedMessage = streamingMessageRef.current + chunk;
      streamingMessageRef.current = updatedMessage;
      setStreamingMessage(updatedMessage);
    });

    socket.on("chat_message_end", () => {
      const finalMessage = streamingMessageRef.current.trim();
      if (finalMessage) addMessage({ sender: "bot", text: finalMessage });
      streamingMessageRef.current = "";
      setStreamingMessage("");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, streamingMessage]);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      addMessage({ sender: "user", text: inputText });
      socket.emit("user_message", inputText);
      setInputText("");
    }
  };

  return { chatContainerRef, sendMessage, streamingMessageRef };
};
