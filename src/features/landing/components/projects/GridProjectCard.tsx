import { Box, Stack, Typography } from "@mui/material";
import { panelSx } from "../helpers";

type GridProjectCardProps = {
  project: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  };
};

export function GridProjectCard({ project }: GridProjectCardProps) {
  return (
    <Box
      sx={(theme) => ({
        ...panelSx(theme),
        gridColumn: { xs: "1 / -1", md: "span 6" },
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 320, md: 380 },
      })}
    >
      <Box
        component="img"
        src={project.image}
        alt={project.alt}
        loading="lazy"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.4,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(14, 19, 31, 0.05) 0%, rgba(14, 19, 31, 0.92) 100%)",
        }}
      />

      <Stack
        spacing={2}
        sx={{
          position: "absolute",
          insetInline: 0,
          bottom: 0,
          p: { xs: 3, md: 4 },
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: "primary.main", fontSize: "0.68rem" }}
        >
          {project.eyebrow}
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: { xs: "1.45rem", md: "1.75rem" },
            letterSpacing: "-0.03em",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 520, lineHeight: 1.7 }}
        >
          {project.description}
        </Typography>
      </Stack>
    </Box>
  );
}
