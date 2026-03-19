import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { type LandingProject } from "../../content";
import {
  getExternalLinkProps,
  getProjectHostLabel,
  panelSx,
  portfolioColors,
} from "../helpers";

type FeaturedProjectCardProps = {
  project: LandingProject;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Box
      component="a"
      href={project.href}
      aria-label={`Abrir ${project.title}`}
      {...getExternalLinkProps(project.href)}
      sx={(theme) => ({
        ...panelSx(theme),
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 360, md: 440, lg: 500 },
        display: "block",
        transition: "transform 220ms ease, border-color 220ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: alpha(portfolioColors.primary, 0.34),
        },
        "&:hover img": {
          transform: "scale(1.04)",
          opacity: 0.7,
        },
        "&:focus-visible": {
          outline: `2px solid ${alpha(portfolioColors.primary, 0.9)}`,
          outlineOffset: 4,
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

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.75}
          sx={{
            color: alpha(portfolioColors.text, 0.74),
            fontFamily: "Manrope, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <Typography component="span" sx={{ font: "inherit" }}>
            {getProjectHostLabel(project.href)}
          </Typography>
          <ArrowOutwardRounded sx={{ fontSize: 18 }} />
        </Stack>

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

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.9}
          sx={{ color: "primary.main" }}
        >
          <Typography
            sx={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Ver proyecto
          </Typography>
          <ArrowOutwardRounded sx={{ fontSize: 18 }} />
        </Stack>
      </Stack>
    </Box>
  );
}
