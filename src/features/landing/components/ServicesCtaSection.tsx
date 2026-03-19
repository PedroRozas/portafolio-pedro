import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
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

export function ServicesCtaSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 12, md: 16 },
        px: 2,
        scrollMarginTop: anchorOffsetSx,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={(theme) => ({
            ...panelSx(theme),
            position: "relative",
            overflow: "hidden",
            px: { xs: 3.5, md: 10 },
            py: { xs: 6, md: 10 },
            textAlign: "center",
          })}
        >
          <Box
            sx={{
              position: "absolute",
              top: -120,
              left: -120,
              width: 280,
              height: 280,
              borderRadius: "50%",
              backgroundColor: alpha(portfolioColors.primary, 0.12),
              filter: "blur(110px)",
            }}
          />

          <Stack
            spacing={4.5}
            alignItems="center"
            sx={{ position: "relative", zIndex: 1 }}
          >
            <SectionHeading
              eyebrow="Servicios"
              title={landingContent.cta.title}
              description={landingContent.cta.description}
              align="center"
              descriptionMaxWidth={760}
            />

            <Button
              color="primary"
              variant="contained"
              href={siteConfig.servicesUrl}
              endIcon={<RocketLaunchRounded />}
              {...getExternalLinkProps(siteConfig.servicesUrl)}
              sx={{
                px: { xs: 4.5, md: 6 },
                py: { xs: 2.35, md: 2.75 },
                fontSize: { xs: "0.74rem", md: "0.82rem" },
              }}
            >
              Ver página de servicios
            </Button>

            <Typography
              color="text.secondary"
              sx={{ maxWidth: 560, fontSize: "0.75rem", lineHeight: 1.8 }}
            >
              {landingContent.cta.footnote}
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
