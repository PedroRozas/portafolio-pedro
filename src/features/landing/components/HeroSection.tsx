import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { siteConfig } from "../../../lib/site-config";
import { landingContent } from "../content";
import {
  anchorOffsetSx,
  getExternalLinkProps,
  getSocialIcon,
  portfolioColors,
} from "./helpers";

export function HeroSection() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        scrollMarginTop: anchorOffsetSx,
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        px: 2,
        pt: { xs: 14, md: 18 },
        pb: { xs: 12, md: 16 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "18%",
          left: "-10%",
          width: { xs: 240, md: 420 },
          height: { xs: 240, md: 420 },
          borderRadius: "50%",
          backgroundColor: alpha(portfolioColors.primary, 0.08),
          filter: "blur(110px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: "-8%",
          bottom: "18%",
          width: { xs: 220, md: 360 },
          height: { xs: 220, md: 360 },
          borderRadius: "50%",
          backgroundColor: alpha(portfolioColors.primarySoft, 0.12),
          filter: "blur(130px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={5} alignItems="center" textAlign="center">
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.25,
              px: 2,
              py: 1,
              borderRadius: "999px",
              backgroundColor: alpha(portfolioColors.surface, 0.9),
              border: "1px solid",
              borderColor: alpha(portfolioColors.outline, 0.5),
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                boxShadow: "0 0 12px rgba(0, 242, 255, 0.9)",
              }}
            />
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", fontSize: "0.64rem" }}
            >
              {landingContent.heroBadge}
            </Typography>
          </Box>

          <Stack spacing={2.5} alignItems="center">
            <Typography
              sx={{
                color: "text.secondary",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "0.78rem", md: "0.92rem" },
                letterSpacing: "0.32em",
                textTransform: "uppercase",
              }}
            >
              {landingContent.name}
            </Typography>

            <Typography
              component="h1"
              sx={{
                maxWidth: 980,
                fontFamily: "Manrope, sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: "3.2rem",
                  sm: "4.5rem",
                  md: "6.4rem",
                  lg: "7.2rem",
                },
                letterSpacing: "-0.07em",
                lineHeight: { xs: 0.95, md: 0.9 },
              }}
            >
              {landingContent.headline.lead}
              <br />
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${portfolioColors.primarySoft} 0%, ${portfolioColors.primary} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {landingContent.headline.accent}
              </Box>
            </Typography>
          </Stack>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 760,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.75,
            }}
          >
            {landingContent.bio}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2.25}
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              href={siteConfig.servicesUrl}
              endIcon={<ArrowOutwardRounded />}
              {...getExternalLinkProps(siteConfig.servicesUrl)}
              sx={{
                minWidth: { xs: "100%", sm: "auto" },
                px: { xs: 4, md: 5 },
                py: { xs: 2.15, md: 2.35 },
                fontSize: "0.76rem",
              }}
            >
              Ver servicios externos
            </Button>

            <Button
              component="a"
              href="#projects"
              variant="outlined"
              endIcon={<ArrowForwardRounded />}
              sx={{
                minWidth: { xs: "100%", sm: "auto" },
                borderColor: alpha(portfolioColors.outline, 0.7),
                color: "text.primary",
                px: { xs: 4, md: 5 },
                py: { xs: 2.15, md: 2.35 },
                fontSize: "0.76rem",
                "&:hover": {
                  borderColor: "primary.main",
                  backgroundColor: alpha(portfolioColors.primary, 0.06),
                },
              }}
            >
              Ver proyectos
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={1.5}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            sx={{ pt: 1 }}
          >
            {siteConfig.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                underline="none"
                {...getExternalLinkProps(link.href)}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: "999px",
                  backgroundColor: alpha(portfolioColors.surface, 0.9),
                  border: "1px solid",
                  borderColor: alpha(portfolioColors.outline, 0.35),
                  color: "text.secondary",
                  fontSize: "0.85rem",
                  transition:
                    "border-color 180ms ease, color 180ms ease, transform 180ms ease",
                  "&:hover": {
                    color: "primary.main",
                    borderColor: alpha(portfolioColors.primary, 0.6),
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box sx={{ display: "inline-flex", fontSize: "1rem" }}>
                  {getSocialIcon(link.label)}
                </Box>
                <Typography sx={{ fontSize: "0.82rem", fontWeight: 600 }}>
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
