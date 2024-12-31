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
    <div className="absolute right-2 bottom-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Palette size={"50px"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="end"
          alignOffset={20}
          className="rounded-lg border border-border"
        >
          <ThemeManager />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSwitcher;
