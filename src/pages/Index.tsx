import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import StorySection from "@/components/StorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApparelSection from "@/components/ApparelSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogoSection />
        <StorySection />
        <TestimonialsSection />
        <ApparelSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
