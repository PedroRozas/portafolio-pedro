import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { siteConfig } from "../../../lib/site-config";
import { landingContent } from "../content";
import { getExternalLinkProps, portfolioColors } from "./helpers";

export function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: alpha(portfolioColors.outline, 0.22),
        py: 5,
        px: 2,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            color: "primary.main",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {landingContent.name}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          © {year} {landingContent.name}. {landingContent.footer.blurb}
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {siteConfig.socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="none"
              {...getExternalLinkProps(link.href)}
              sx={{
                color:
                  link.label === "Email" ? "primary.main" : "text.secondary",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.92rem",
                transition: "color 180ms ease",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
