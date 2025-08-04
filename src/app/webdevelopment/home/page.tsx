import Header from "../../../components/portfolio/Header";
import HeroSection from "../../../components/portfolio/HeroSection";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection
        title="Web Development Lovers"
        subtitle="Full-Stack Web Developer"
        description="Kenneth builds robust web applications that scale. He crafts seamless user experiences from frontend to backend, turning ideas into powerful digital solutions. With expertise in modern frameworks and cloud technologies, he delivers high-performance applications that users rely on."
      />
    </div>
  );
} 