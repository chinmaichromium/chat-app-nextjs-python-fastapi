import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_common/providers/theme-provider";

export const metadata: Metadata = {
  title: "Portfolio Chinmai",
  description:
    "This is a portfolio website for Chinmai. Fullstack engineer with 4+ years of experience.",
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
          disableTransitionOnChange
          themes={["light", "dark"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
