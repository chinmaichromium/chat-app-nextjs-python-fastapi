import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeConfig = {
  baseMode: "light" | "dark" | "system";
  baseColor:
    | "zinc"
    | "slate"
    | "stone"
    | "gray"
    | "neutral"
    | "red"
    | "rose"
    | "orange"
    | "green"
    | "blue"
    | "yellow"
    | "violet";
  baseRadius: number;
  setBaseColor: (baseColor: ThemeConfig["baseColor"]) => void;
  setBaseMode: (baseMode: ThemeConfig["baseMode"]) => void;
  setBaseRadius: (baseRadius: ThemeConfig["baseRadius"]) => void;
};

export const useThemeStore = create(
  persist<ThemeConfig>(
    (set) => ({
      baseColor: "green",
      baseMode: "light",
      baseRadius: 0.5,
      setBaseColor: (baseColor: ThemeConfig["baseColor"]) => set({ baseColor }),
      setBaseMode: (baseMode: ThemeConfig["baseMode"]) => set({ baseMode }),
      setBaseRadius: (baseRadius: ThemeConfig["baseRadius"]) =>
        set({ baseRadius }),
    }),
    {
      name: "them-config",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
