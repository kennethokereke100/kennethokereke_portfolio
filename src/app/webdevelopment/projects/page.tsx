import Header from "../../../components/portfolio/Header";
import HeroSection from "../../../components/portfolio/HeroSection";

export default function WebDevelopmentProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection
        title="Web Development Projects"
        subtitle="Full-Stack Web Developer"
        description="Discover Kenneth's collection of web development projects. From responsive frontends to scalable backends, explore how he builds robust applications that deliver exceptional user experiences."
      />
    </div>
  );
} 