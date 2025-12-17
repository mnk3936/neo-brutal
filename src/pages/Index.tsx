import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HooksSection from "@/components/HooksSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <HooksSection />
        <ProjectsSection />
        <ReviewsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
