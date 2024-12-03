import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#b3d9ff", dark: "#69a3ff" }, // Нежно-голубой и чуть темнее
    secondary: { main: "#ff69b4", dark: "#ff4081" },
  },
  background: {
    main: "linear-gradient(90deg, #87CEFA, #1E90FF)",
    light: "linear-gradient(180deg, #e1f5fe, #ffffff)",
  },

  typography: {
    h1: {
      fontSize: "2.25rem", // 36px
      lineHeight: "2.75rem", // 44px
      fontWeight: 500,
    },
    h2: {
      fontSize: "2.25rem", // 36px
      lineHeight: "1.75rem", // 28px
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.2rem",
      lineHeight: "1.75rem", // 28px
      fontWeight: 700,
    },

    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 14, // 20px
    },

    body1: {
      fontSize: 16,
      wordWrap: "break-word",
      lineHeight: "36px",
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      wordWrap: "break-word",
    },
    button: {
      textTransform: "unset",
    },
  },
});
