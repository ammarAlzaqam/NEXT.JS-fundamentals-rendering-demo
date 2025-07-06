"use client";

import ThemeProviderProps from "@/utils/type";
import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "blue",
    secondary: "gray",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
