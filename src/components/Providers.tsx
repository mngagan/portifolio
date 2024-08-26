import { ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { CustomThemeContext } from "../context/themeContext";
import theme, { ThemeMode } from "../utils/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const storedMode = localStorage.getItem("themeMode");
    return storedMode ? (storedMode as ThemeMode) : ThemeMode.theme1;
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleTheme = () => {
    console.log("toggleTheme");
    setMode((prevMode) =>
      prevMode === ThemeMode.theme1
        ? ThemeMode.theme2
        : prevMode === ThemeMode.theme2
        ? ThemeMode.theme3
        : prevMode === ThemeMode.theme3
        ? ThemeMode.theme4
        : prevMode === ThemeMode.theme4
        ? ThemeMode.theme5
        : ThemeMode.theme1
    );
  };

  return (
    <CustomThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme(mode)}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default Providers;
