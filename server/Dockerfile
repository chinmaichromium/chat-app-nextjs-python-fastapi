FROM python:3.9.6-slim

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

# DEV this line not needed
CMD uvicorn main:app --port=8000 --host=0.0.0.0