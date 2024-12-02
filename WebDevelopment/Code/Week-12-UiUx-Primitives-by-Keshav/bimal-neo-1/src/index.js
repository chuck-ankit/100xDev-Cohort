import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Desktop from "./Desktop";

// Create a Material-UI theme
const theme = createTheme({
  palette: {
    orange: {
      100: "#FFE0B2", // Light orange
      200: "#FFCC80", // Medium orange
      600: "#FF7043", // Dark orange
    },
    text: {
      primary: "#000000", // Default text color
    },
    common: {
      white: "#FFFFFF",
    },
  },
});

// Get the root element
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Adds a baseline CSS reset for consistent styles */}
    <Desktop />
  </ThemeProvider>
);
