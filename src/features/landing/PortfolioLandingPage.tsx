import { Box } from "@mui/material";
import { AboutSection } from "./components/AboutSection";
import { LandingFooter } from "./components/LandingFooter";
import { LandingHeader } from "./components/LandingHeader";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesCtaSection } from "./components/ServicesCtaSection";
import { StackSection } from "./components/StackSection";

export function PortfolioLandingPage() {
  return (
    <Box component="main" sx={{ overflowX: "hidden" }}>
      <LandingHeader />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <StackSection />
      <ServicesCtaSection />
      <LandingFooter />
    </Box>
  );
}
