"use client";

import { useChat } from "@/app/_common/hooks/useChat";
import { setInputText, useChatStore } from "@/app/_common/stores/useChatStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RefreshCcwIcon, SendIcon } from "lucide-react";

export default function Chat() {
  const messages = useChatStore((state) => state.messages);
  const streamingMessage = useChatStore((state) => state.streamingMessage);
  const inputText = useChatStore((state) => state.inputText);
  const { chatContainerRef, sendMessage } = useChat();

  return (
    <div className="mx-auto max-w-4xl p-6">
      <Card className="h-[85vh] rounded-lg shadow-lg border border-muted">
        <CardHeader className="text-center">
          <h2 className="text-lg font-semibold">Chat with Bot</h2>
        </CardHeader>
        <CardContent className="h-[70vh]">
          <ScrollArea ref={chatContainerRef} className="h-full pr-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-md px-4 py-2 ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <strong>{msg.sender === "user" ? "You" : "Bot"}</strong>:{" "}
                  {msg.text}
                </div>
              </div>
            ))}
            {streamingMessage && (
              <div className="mb-4 flex justify-start">
                <div className="rounded-md bg-muted px-4 py-2 text-muted-foreground">
                  <strong>Bot:</strong> {streamingMessage}
                </div>
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form onSubmit={sendMessage} className="w-full flex gap-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1"
            />
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => setInputText("")}
            >
              <RefreshCcwIcon />
            </Button>
            <Button type="submit" variant="default" size="icon">
              <SendIcon />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
