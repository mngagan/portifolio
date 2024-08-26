import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    headerTitle: React.CSSProperties;
    title: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headerTitle?: React.CSSProperties;
    title?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headerTitle: true;
    title: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    custom: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    disabled: {
      background: string;
      text: string;
    };
  }

  interface PaletteOptions {
    disabled?: {
      background?: string;
      text?: string;
    };
  }
}

const black = "#000000";
const pink = "#7161ef";
const white = "#FFFFFF";
const red = "#590d22";
const orange = "#eb5e28";
const green = "#007f5f";

export enum ThemeMode {
  theme1 = black,
  theme2 = pink,
  theme3 = red,
  theme4 = orange,
  theme5 = green,
}

const theme1 = createTheme();

const theme = (mode: ThemeMode) => {
  console.log("in gettint theme", mode);
  return createTheme({
    palette: {
      primary: {
        main: mode,
        // main: black,
      },
      secondary: {
        main: white,
      },
    },
    typography: {
      fontFamily: "Sora",
      title: {
        fontSize: "48px",
        [theme1.breakpoints.down("sm")]: {
          fontSize: "28px",
        },
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontSize: "1.25rem",
          },
        },
      },
    },
  });
};

export default theme;
