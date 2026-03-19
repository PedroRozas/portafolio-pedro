import { Box, Container, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { landingContent } from "../content";
import { anchorOffsetSx, portfolioColors, stackIcons } from "./helpers";

export function StackSection() {
  return (
    <Box
      component="section"
      id="stack"
      sx={{
        py: { xs: 10, md: 14 },
        px: 2,
        scrollMarginTop: anchorOffsetSx,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="Stack Tecnológico"
          title="Capas de trabajo para producto digital"
          align="center"
        />

        <Box
          sx={{
            mt: 8,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
            gap: "1px",
            backgroundColor: alpha(portfolioColors.outline, 0.16),
            border: "1px solid",
            borderColor: alpha(portfolioColors.outline, 0.16),
          }}
        >
          {landingContent.stack.map((item, index) => {
            const Icon = stackIcons[index];

            return (
              <Stack
                key={item.title}
                spacing={2.25}
                sx={{
                  minHeight: { xs: 200, md: 240 },
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  px: { xs: 2.25, md: 3 },
                  py: { xs: 4, md: 5.5 },
                  backgroundColor: portfolioColors.background,
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    color: "text.secondary",
                    fontSize: { xs: "2rem", md: "2.3rem" },
                  }}
                >
                  <Icon fontSize="inherit" />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: "0.82rem", lineHeight: 1.7 }}
                >
                  {item.description}
                </Typography>
              </Stack>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
