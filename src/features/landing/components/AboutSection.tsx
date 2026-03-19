import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { siteConfig } from "../../../lib/site-config";
import { landingContent } from "../content";
import {
  anchorOffsetSx,
  getExternalLinkProps,
  panelSx,
  portfolioColors,
} from "./helpers";

export function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: alpha(portfolioColors.surfaceLow, 0.92),
        px: 2,
        scrollMarginTop: anchorOffsetSx,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(340px, 0.85fr) minmax(0, 1fr)",
            },
            alignItems: "center",
            gap: { xs: 6, lg: 10 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: { xs: 420, lg: "none" },
              mx: { xs: "auto", lg: 0 },
            }}
          >
            <Box
              sx={(theme) => ({
                ...panelSx(theme),
                position: "relative",
                overflow: "hidden",
              })}
            >
              <Box
                component="img"
                src="/stitch/pedro-portrait.jpg"
                alt="Retrato ilustrado de Pedro Rozas"
                loading="lazy"
                sx={{
                  display: "block",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  filter: "grayscale(1)",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: -16,
                right: -16,
                width: 88,
                height: 88,
                borderTop: "2px solid",
                borderRight: "2px solid",
                borderColor: alpha(portfolioColors.primary, 0.4),
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: -16,
                bottom: -16,
                width: 88,
                height: 88,
                borderLeft: "2px solid",
                borderBottom: "2px solid",
                borderColor: alpha(portfolioColors.primary, 0.4),
              }}
            />
          </Box>

          <Stack spacing={4.5}>
            <SectionHeading
              eyebrow={landingContent.about.eyebrow}
              title={landingContent.about.title}
              description={landingContent.about.body}
            />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                },
                gap: 3,
              }}
            >
              {landingContent.about.points.map((point) => (
                <Box key={point.title}>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 800,
                      fontSize: "1rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {point.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1, lineHeight: 1.7 }}
                  >
                    {point.description}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Link
              href={siteConfig.servicesUrl}
              underline="none"
              {...getExternalLinkProps(siteConfig.servicesUrl)}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                alignSelf: "flex-start",
                color: "primary.main",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 800,
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                transition: "gap 180ms ease",
                "&:hover": {
                  gap: 1.5,
                },
              }}
            >
              Conocer servicios y proceso
              <ArrowForwardRounded fontSize="small" />
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
