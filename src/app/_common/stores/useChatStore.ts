import { create } from "zustand";

export type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

type Chat = {
  messages: ChatMessage[];
  streamingMessage: string | null;
  inputText: string;
};

export const useChatStore = create<Chat>(() => ({
  inputText: "",
  messages: [],
  streamingMessage: "",
}));

export const setInputText = (inputText: string) =>
  useChatStore.setState({ inputText });

export const addMessage = (message: Chat["messages"][0]) => {
  useChatStore.setState((state) => ({
    messages: [...state.messages, message],
  }));
};

export const setStreamingMessage = (streamingMessage: string) =>
  useChatStore.setState({ streamingMessage });
