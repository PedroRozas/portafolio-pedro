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

type GridProjectCardProps = {
  project: LandingProject;
};

export function GridProjectCard({ project }: GridProjectCardProps) {
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
        minHeight: { xs: 320, md: 380 },
        height: "100%",
        display: "block",
        transition: "transform 220ms ease, border-color 220ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: alpha(portfolioColors.primary, 0.3),
        },
        "&:hover img": {
          transform: "scale(1.05)",
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
          opacity: 0.44,
          transition: "transform 500ms ease, opacity 500ms ease",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(14, 19, 31, 0.04) 0%, rgba(14, 19, 31, 0.72) 48%, rgba(14, 19, 31, 0.94) 100%)",
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
          sx={{
            color: alpha(portfolioColors.text, 0.72),
            fontFamily: "Manrope, sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {getProjectHostLabel(project.href)}
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

        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: alpha(portfolioColors.surfaceHighest, 0.9),
                color: "primary.main",
                fontSize: "0.62rem",
              }}
            />
          ))}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.9}
          sx={{ color: "primary.main" }}
        >
          <Typography
            sx={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.7rem",
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
