"use client";

import ThemeSwitcher from "./_common/components/themes/ThemeSwitcher";
import Chat from "./_common/components/Chat";
import { ThemeWrapper } from "./_common/components/themes/ThemeWrapper";

export default function Home() {
  return (
    <ThemeWrapper>
      <div className="relative w-full h-screen">
        <ThemeSwitcher />
        <Chat />
      </div>
    </ThemeWrapper>
  );
}
