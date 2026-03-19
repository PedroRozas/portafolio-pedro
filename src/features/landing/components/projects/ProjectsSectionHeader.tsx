import { Box, Stack, Typography } from "@mui/material";

type ProjectsSectionHeaderProps = {
  intro: string;
};

export function ProjectsSectionHeader({ intro }: ProjectsSectionHeaderProps) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "flex-start", md: "flex-end" }}
      gap={4}
      mb={8}
    >
      <Box>
        <Typography
          variant="overline"
          sx={{ color: "primary.main", fontSize: "0.72rem" }}
        >
          Portafolio
        </Typography>
        <Typography
          component="h2"
          sx={{
            mt: 1.5,
            fontFamily: "Manrope, sans-serif",
            fontSize: { xs: "2.2rem", md: "3rem" },
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.05em",
          }}
        >
          Proyectos Destacados
        </Typography>
      </Box>

      <Typography
        color="text.secondary"
        sx={{ maxWidth: 460, lineHeight: 1.7 }}
      >
        {intro}
      </Typography>
    </Stack>
  );
}
