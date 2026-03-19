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
};

export function FocusAreasCard({ title, items }: FocusAreasCardProps) {
  return (
    <Stack
      spacing={4}
      sx={(theme) => ({
        ...panelSx(theme),
        gridColumn: { xs: "1 / -1", md: "span 6" },
        p: { xs: 3.5, md: 4.5 },
        borderLeft: "3px solid",
        borderColor: "primary.main",
        backgroundColor: alpha(portfolioColors.surfaceHighest, 0.88),
      })}
    >
      <Typography
        component="h3"
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 800,
          fontSize: { xs: "1.4rem", md: "1.8rem" },
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </Typography>

      <Stack spacing={4}>
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
