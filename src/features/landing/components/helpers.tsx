import CloudQueueRounded from "@mui/icons-material/CloudQueueRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";
import SettingsEthernetRounded from "@mui/icons-material/SettingsEthernetRounded";
import StorageRounded from "@mui/icons-material/StorageRounded";
import { alpha, type Theme } from "@mui/material/styles";
import { portfolioColors } from "../../../theme";

export const anchorOffsetSx = { xs: 88, md: 96 } as const;

export const navigationItems = [
  { label: "Inicio", href: "#home" },
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mi", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Servicios", href: "#services" },
] as const;

export const stackIcons = [
  CodeRounded,
  SettingsEthernetRounded,
  CloudQueueRounded,
  StorageRounded,
] as const;

export function getExternalLinkProps(href: string) {
  if (href.startsWith("mailto:")) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}

export function getProjectHostLabel(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

export function getSocialIcon(label: string) {
  if (label === "GitHub") {
    return <GitHub fontSize="inherit" />;
  }

  if (label === "LinkedIn") {
    return <LinkedIn fontSize="inherit" />;
  }

  return <MailOutlineRounded fontSize="inherit" />;
}

export function panelSx(theme: Theme) {
  return {
    backgroundColor: alpha(theme.palette.background.paper, 0.78),
    border: "1px solid",
    borderColor: alpha(theme.palette.divider, 0.96),
    boxShadow: `0 28px 60px ${alpha(theme.palette.common.black, 0.18)}`,
  };
}

export { portfolioColors };
