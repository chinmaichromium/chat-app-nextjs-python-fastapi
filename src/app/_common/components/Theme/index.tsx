import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";
import React from "react";
import ThemeManager from "./ThemeManager";

const ThemeSwitcher = () => {
  return (
    <div className="fixed right-4 bottom-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Palette size={"50px"} className="text-primary" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="end"
          alignOffset={20}
          className="rounded-lg p-0 border-none"
        >
          <ThemeManager />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSwitcher;
