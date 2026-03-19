import { alpha, createTheme } from "@mui/material/styles";

export const portfolioColors = {
  background: "#0E131F",
  surfaceLow: "#161C27",
  surface: "#1A202B",
  surfaceHigh: "#242A36",
  surfaceHighest: "#2F3541",
  text: "#DDE2F3",
  textMuted: "#A7B6CC",
  outline: "#3A494B",
  primary: "#00F2FF",
  primarySoft: "#00DBE7",
  primaryInk: "#002022",
  accent: "#FED83A",
} as const;

export const portfolioTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: portfolioColors.primary,
      light: "#74F5FF",
      contrastText: portfolioColors.primaryInk,
    },
    secondary: {
      main: "#D4E4FA",
    },
    background: {
      default: portfolioColors.background,
      paper: portfolioColors.surface,
    },
    text: {
      primary: portfolioColors.text,
      secondary: portfolioColors.textMuted,
    },
    divider: alpha(portfolioColors.outline, 0.44),
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.06em",
    },
    h2: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.05em",
    },
    h3: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h4: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    button: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 800,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
    },
    overline: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 800,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          colorScheme: "dark",
        },
        body: {
          backgroundColor: portfolioColors.background,
          backgroundImage: `radial-gradient(circle at 18% 18%, ${alpha(portfolioColors.primary, 0.08)} 0, transparent 28%), radial-gradient(circle at 82% 32%, ${alpha(portfolioColors.primarySoft, 0.1)} 0, transparent 24%)`,
          color: portfolioColors.text,
          fontFeatureSettings: '"ss01" 1',
        },
        "#root": {
          minHeight: "100vh",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
        "::selection": {
          backgroundColor: alpha(portfolioColors.primary, 0.28),
          color: portfolioColors.text,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          paddingInline: 24,
          paddingBlock: 14,
          lineHeight: 1,
        },
        containedPrimary: {
          backgroundImage: `linear-gradient(135deg, ${portfolioColors.primarySoft} 0%, ${portfolioColors.primary} 100%)`,
          boxShadow: `0 12px 30px ${alpha(portfolioColors.primary, 0.22)}`,
          "&:hover": {
            backgroundImage: `linear-gradient(135deg, ${portfolioColors.primarySoft} 0%, ${portfolioColors.primary} 100%)`,
            boxShadow: `0 18px 36px ${alpha(portfolioColors.primary, 0.34)}`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontFamily: "Manrope, sans-serif",
          fontWeight: 800,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        },
        label: {
          paddingInline: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
