import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { panelSx, portfolioColors } from "../helpers";

type FocusItem = {
  value: string;
  label: string;
};

type FocusAreasCardProps = {
  title: string;
  items: readonly FocusItem[];
  projectCount: number;
};

export function FocusAreasCard({
  title,
  items,
  projectCount,
}: FocusAreasCardProps) {
  return (
    <Stack
      spacing={4}
      sx={(theme) => ({
        ...panelSx(theme),
        gridColumn: { xs: "1 / -1", md: "span 4" },
        minHeight: { xs: "auto", md: 460 },
        justifyContent: "space-between",
        p: { xs: 3.5, md: 4.5 },
        borderLeft: "3px solid",
        borderColor: "primary.main",
        background: `linear-gradient(180deg, ${alpha(portfolioColors.surfaceHighest, 0.92)} 0%, ${alpha(portfolioColors.surfaceHigh, 0.9)} 100%)`,
        position: "relative",
        overflow: "hidden",
      })}
    >
      <Box
        sx={{
          position: "absolute",
          top: -34,
          right: -34,
          width: 150,
          height: 150,
          borderRadius: "50%",
          backgroundColor: alpha(portfolioColors.primary, 0.08),
        }}
      />

      <Stack spacing={1.5} sx={{ position: "relative" }}>
        <Typography
          variant="overline"
          sx={{ color: "primary.main", fontSize: "0.68rem" }}
        >
          Cobertura
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          gap={2}
        >
          <Typography
            component="h3"
            sx={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              letterSpacing: "-0.03em",
              maxWidth: 220,
            }}
          >
            {title}
          </Typography>

          <Box sx={{ textAlign: "right" }}>
            <Typography
              sx={{
                color: "primary.main",
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "1.8rem", md: "2.3rem" },
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 1,
              }}
            >
              {projectCount}
            </Typography>
            <Typography
              sx={{
                mt: 0.75,
                color: "text.secondary",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.64rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              proyectos
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack spacing={3.5} sx={{ position: "relative" }}>
        {items.map((item) => (
          <Box key={item.value}>
            <Typography
              sx={{
                color: "primary.main",
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "2.1rem", md: "2.7rem" },
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              {item.value}
            </Typography>
            <Typography
              sx={{
                mt: 0.75,
                color: "text.secondary",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
