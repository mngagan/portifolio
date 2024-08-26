import { createContext } from "react";
import { ThemeMode } from "../utils/theme";

// export interface ThemeModeType {
//   mode: "theme1" | "theme2" | "theme3" | "theme4" | "theme5";
// }

interface CustomThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<
  CustomThemeContextType | undefined
>(undefined);
