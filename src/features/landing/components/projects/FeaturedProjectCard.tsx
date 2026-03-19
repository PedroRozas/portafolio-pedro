import { Box, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { panelSx, portfolioColors } from "../helpers";

type FeaturedProjectCardProps = {
  project: {
    eyebrow: string;
    title: string;
    description: string;
    tags: readonly string[];
    image: string;
    alt: string;
  };
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Box
      sx={(theme) => ({
        ...panelSx(theme),
        gridColumn: { xs: "1 / -1", md: "span 8" },
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 360, md: 460 },
        transition: "transform 220ms ease, border-color 220ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: alpha(portfolioColors.primary, 0.34),
        },
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
          filter: "grayscale(0.12)",
          opacity: 0.56,
          transition: "transform 500ms ease, opacity 500ms ease",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(14, 19, 31, 0.08) 0%, rgba(14, 19, 31, 0.58) 52%, rgba(14, 19, 31, 0.94) 100%)",
        }}
      />

      <Stack
        spacing={2.25}
        sx={{
          position: "absolute",
          insetInline: 0,
          bottom: 0,
          p: { xs: 3, md: 5 },
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: "primary.main", fontSize: "0.7rem" }}
        >
          {project.eyebrow}
        </Typography>

        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: alpha(portfolioColors.surfaceHighest, 0.92),
                color: "primary.main",
                fontSize: "0.64rem",
              }}
            />
          ))}
        </Stack>

        <Typography
          component="h3"
          sx={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: { xs: "1.7rem", md: "2.2rem" },
            letterSpacing: "-0.04em",
          }}
        >
          {project.title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ maxWidth: 620, lineHeight: 1.7 }}
        >
          {project.description}
        </Typography>
      </Stack>
    </Box>
  );
}
