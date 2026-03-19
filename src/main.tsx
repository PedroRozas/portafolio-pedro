import { StrictMode } from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { portfolioTheme } from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={portfolioTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
