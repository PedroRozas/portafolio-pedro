import { Box, Container } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { landingContent } from "../content";
import { anchorOffsetSx, portfolioColors } from "./helpers";
import { FeaturedProjectCard } from "./projects/FeaturedProjectCard";
import { GridProjectCard } from "./projects/GridProjectCard";
import { ProjectsSectionHeader } from "./projects/ProjectsSectionHeader";

export function ProjectsSection() {
  const { items } = landingContent.projects;
  const [featuredProject, ...otherProjects] = items;

  if (!featuredProject) {
    return null;
  }

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        px: 2,
        scrollMarginTop: anchorOffsetSx,
        position: "relative",
        background: `linear-gradient(180deg, ${alpha(portfolioColors.surfaceLow, 0.78)} 0%, ${alpha(portfolioColors.background, 0.94)} 100%)`,
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: alpha(portfolioColors.outline, 0.2),
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={(theme) => ({
            position: "relative",
            p: { xs: 3, md: 4.5 },
            borderRadius: { xs: 4, md: 5 },
            backgroundColor: alpha(theme.palette.background.paper, 0.44),
            border: "1px solid",
            borderColor: alpha(theme.palette.divider, 0.8),
            backdropFilter: "blur(12px)",
            overflow: "hidden",
          })}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              insetInline: 0,
              height: 1,
              background: `linear-gradient(90deg, transparent 0%, ${alpha(portfolioColors.primary, 0.34)} 18%, ${alpha(portfolioColors.primarySoft, 0.3)} 82%, transparent 100%)`,
              pointerEvents: "none",
            }}
          />

          <ProjectsSectionHeader
            count={items.length}
            intro={landingContent.projectIntro}
          />

          <Box
            sx={{
              position: "relative",
            }}
          >
            <FeaturedProjectCard project={featuredProject} />

            <Box
              sx={{
                mt: { xs: 3, md: 4 },
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                  xl: "repeat(3, minmax(0, 1fr))",
                },
                gap: 3,
              }}
            >
              {otherProjects.map((project) => (
                <GridProjectCard key={project.title} project={project} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
