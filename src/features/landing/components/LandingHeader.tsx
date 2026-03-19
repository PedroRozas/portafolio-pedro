import CloseRounded from "@mui/icons-material/CloseRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useState } from "react";
import { siteConfig } from "../../../lib/site-config";
import { landingContent } from "../content";
import {
  getExternalLinkProps,
  navigationItems,
  portfolioColors,
} from "./helpers";

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          insetInline: 0,
          top: 0,
          zIndex: 20,
          borderBottom: "1px solid",
          borderColor: alpha(portfolioColors.outline, 0.22),
          backgroundColor: alpha(portfolioColors.background, 0.86),
          backdropFilter: "blur(22px)",
          boxShadow: "0 20px 50px rgba(0, 242, 255, 0.04)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            py: { xs: 1.5, sm: 2, md: 2.5 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1.05rem" },
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {landingContent.name}
          </Typography>

          <Stack direction="row" spacing={1.25} alignItems="center">
            <Stack
              direction="row"
              spacing={4}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  underline="none"
                  sx={{
                    pb: 0.75,
                    color: "text.secondary",
                    borderBottom: "2px solid transparent",
                    borderColor: "transparent",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    transition: "color 180ms ease, border-color 180ms ease",
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>

            <Button
              color="primary"
              variant="contained"
              href={siteConfig.servicesUrl}
              size="small"
              {...getExternalLinkProps(siteConfig.servicesUrl)}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                minWidth: "fit-content",
                px: { sm: 2, md: 2.5 },
                py: { sm: 1.2, md: 1.45 },
                fontSize: "0.68rem",
              }}
            >
              Servicios
            </Button>

            <IconButton
              aria-label="Abrir navegacion"
              onClick={() => setIsMenuOpen(true)}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                border: "1px solid",
                borderColor: alpha(portfolioColors.outline, 0.48),
                color: "text.primary",
              }}
            >
              <MenuRounded />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={closeMenu}
        PaperProps={{
          sx: {
            width: { xs: "min(88vw, 320px)", sm: 360 },
            px: 3,
            py: 2.5,
            backgroundColor: alpha(portfolioColors.surfaceLow, 0.96),
            backgroundImage: "none",
            borderLeft: "1px solid",
            borderColor: alpha(portfolioColors.outline, 0.3),
            backdropFilter: "blur(24px)",
          },
        }}
      >
        <Stack spacing={3} sx={{ height: "100%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 800,
                fontSize: "0.88rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {landingContent.name}
            </Typography>
            <IconButton
              aria-label="Cerrar navegacion"
              onClick={closeMenu}
              sx={{ color: "text.primary" }}
            >
              <CloseRounded />
            </IconButton>
          </Stack>

          <Divider sx={{ borderColor: alpha(portfolioColors.outline, 0.3) }} />

          <List disablePadding sx={{ display: "grid", gap: 0.5 }}>
            {navigationItems.map((item) => (
              <ListItemButton
                key={item.href}
                component="a"
                href={item.href}
                onClick={closeMenu}
                sx={{
                  px: 0,
                  py: 1.5,
                  borderBottom: "1px solid",
                  borderColor: alpha(portfolioColors.outline, 0.18),
                  borderRadius: 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </Typography>
              </ListItemButton>
            ))}
          </List>

          <Box sx={{ mt: "auto" }}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              href={siteConfig.servicesUrl}
              {...getExternalLinkProps(siteConfig.servicesUrl)}
              onClick={closeMenu}
              sx={{ py: 1.65, fontSize: "0.72rem" }}
            >
              Ver servicios externos
            </Button>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
