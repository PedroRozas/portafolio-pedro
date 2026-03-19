import StorageRounded from "@mui/icons-material/StorageRounded";
import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { panelSx, portfolioColors } from "../helpers";

type SideProjectCardProps = {
  project: {
    eyebrow: string;
    title: string;
    description: string;
    tags: readonly string[];
  };
};

export function SideProjectCard({ project }: SideProjectCardProps) {
  return (
    <Stack
      spacing={3}
      sx={(theme) => ({
        ...panelSx(theme),
        gridColumn: { xs: "1 / -1", md: "span 4" },
        justifyContent: "center",
        p: { xs: 3, md: 4.5 },
        minHeight: { xs: 280, md: 460 },
      })}
    >
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 64,
          height: 64,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${alpha(portfolioColors.primary, 0.3)} 0%, ${alpha(portfolioColors.primarySoft, 0.08)} 100%)`,
          color: "primary.main",
        }}
      >
        <StorageRounded sx={{ fontSize: 34 }} />
      </Box>

      <Box>
        <Typography
          variant="overline"
          sx={{ color: "primary.main", fontSize: "0.68rem" }}
        >
          {project.eyebrow}
        </Typography>
        <Typography
          component="h3"
          sx={{
            mt: 1.25,
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: { xs: "1.45rem", md: "1.65rem" },
            letterSpacing: "-0.03em",
          }}
        >
          {project.title}
        </Typography>
      </Box>

      <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
        {project.description}
      </Typography>

      <Stack direction="row" spacing={2.25} useFlexGap flexWrap="wrap">
        {project.tags.map((tag) => (
          <Typography
            key={tag}
            sx={{
              color: "text.secondary",
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.68rem",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}
