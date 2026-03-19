import { Box, Container } from "@mui/material";
import { landingContent } from "../content";
import { anchorOffsetSx } from "./helpers";
import { FeaturedProjectCard } from "./projects/FeaturedProjectCard";
import { FocusAreasCard } from "./projects/FocusAreasCard";
import { GridProjectCard } from "./projects/GridProjectCard";
import { ProjectsSectionHeader } from "./projects/ProjectsSectionHeader";
import { SideProjectCard } from "./projects/SideProjectCard";

export function ProjectsSection() {
  const { featured, focus, grid, side } = landingContent.projects;

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        px: 2,
        scrollMarginTop: anchorOffsetSx,
      }}
    >
      <Container maxWidth="xl">
        <ProjectsSectionHeader intro={landingContent.projectIntro} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(12, minmax(0, 1fr))",
            },
            gap: 3,
          }}
        >
          <FeaturedProjectCard project={featured} />
          <SideProjectCard project={side} />
          <GridProjectCard project={grid} />
          <FocusAreasCard title={focus.title} items={focus.items} />
        </Box>
      </Container>
    </Box>
  );
}
