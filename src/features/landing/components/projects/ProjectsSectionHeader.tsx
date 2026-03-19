import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { portfolioColors } from "../helpers";

type ProjectsSectionHeaderProps = {
  intro: string;
  count: number;
};

export function ProjectsSectionHeader({
  intro,
  count,
}: ProjectsSectionHeaderProps) {
  return (
    <Stack
      gap={{ xs: 4, md: 5 }}
      mb={{ xs: 5, md: 6 }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "minmax(0, 1.35fr) minmax(280px, 0.75fr)",
          },
          gap: { xs: 3, md: 4 },
          alignItems: "end",
        }}
      >
        <Box>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", fontSize: "0.72rem" }}
          >
            Portafolio
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            gap={1.5}
            sx={{ mt: 1.5 }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "2.2rem", md: "3rem" },
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
                maxWidth: 680,
              }}
            >
              Proyectos Destacados
            </Typography>

            <Box
              sx={{
                px: 1.5,
                py: 0.85,
                borderRadius: 999,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <Typography
                sx={{
                  color: "primary.main",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {count} sitios publicados
              </Typography>
            </Box>
          </Stack>

          <Typography
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 640, lineHeight: 1.75 }}
          >
            Una selección de trabajos reales con foco en negocio, claridad
            visual y soluciones que ya están en producción.
          </Typography>
        </Box>

        <Box
          sx={(theme) => ({
            p: { xs: 2.5, md: 3 },
            borderRadius: 3,
            border: "1px solid",
            borderColor: alpha(theme.palette.divider, 0.82),
            background: `linear-gradient(180deg, ${alpha(portfolioColors.surfaceHighest, 0.74)} 0%, ${alpha(portfolioColors.surfaceHigh, 0.5)} 100%)`,
            boxShadow: `inset 0 1px 0 ${alpha("#fff", 0.04)}`,
          })}
        >
          <Typography
            sx={{
              color: "primary.main",
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.68rem",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Seleccion activa
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 1.5,
              lineHeight: 1.75,
            }}
          >
            {intro}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1.25}
            sx={{
              mt: 2.25,
              color: "text.secondary",
              flexWrap: "wrap",
              rowGap: 1,
            }}
          >
            <Box
              sx={{
                px: 1.35,
                py: 0.75,
                borderRadius: 999,
                backgroundColor: alpha(portfolioColors.primary, 0.14),
              }}
            >
              <Typography
                sx={{
                  color: "primary.main",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.66rem",
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {count} en vivo
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Webs, ecommerce y plataformas
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          height: 1,
          background: `linear-gradient(90deg, ${alpha(portfolioColors.primary, 0)} 0%, ${alpha(portfolioColors.primary, 0.38)} 20%, ${alpha(portfolioColors.accent, 0.2)} 100%)`,
        }}
      />
    </Stack>
  );
}
