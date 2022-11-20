import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#172339",
      light: "#0079ff",
      dark: "#0079ff",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#ffffff",
      paper: "#172339",
    },
    text: {
      secondary: "#faf8f6",
      primary: "#172339",
      disabled: "rgba(254,254,254,0.8)",
    },
  },
  typography: {
    fontFamily: '"Space Mono" , sans-serif',
    h1: {
      fontWeight: 400,
      fontSize: 26,
      lineHeight: 1.08,
    },
    h2: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.26,
    },
    h3: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.5,
      color: "#FFFFFF",
    },
    h4: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: -1,
      color: "#26C2AE",
    },
    body1: {
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.32,
      color: "#7F9D9F",
    },
    button: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.32,
    },
    body2: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.5,
    },
  },
  spacing: 8,
});
