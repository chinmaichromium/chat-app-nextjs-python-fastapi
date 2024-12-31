import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_common/providers/theme-provider";

export const metadata: Metadata = {
  title: "Chat with Bot",
  description:
    "Python FastAPI Chatbot with WebSockets, Next.js, Tailwind CSS and Zustand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
