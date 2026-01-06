import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectModal from "@/components/ProjectModal";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Portfolio Home Page
 * 
 * Design Philosophy:
 * - Dark, modern aesthetic with warm gold accents
 * - Clean, minimal layout with generous whitespace
 * - Friendly and approachable tone
 * - Focus on showcasing projects and skills
 * - Smooth scrolling navigation
 * 
 * Brand: Steadfast, Reliable, User-Focused
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ProjectModal />
        <TestimonialSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
