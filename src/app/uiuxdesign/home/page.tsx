import Header from "../../../components/portfolio/Header";
import HeroSection from "../../../components/portfolio/HeroSection";
import MyProjectsSectionWrapper from "../../../components/MyProjectsSectionWrapper";

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection
        title="UI/UX Product Design Lovers"
        subtitle="Product Designer"
        description="Kenneth creates intuitive digital experiences that users love. He transforms complex problems into elegant solutions, crafting interfaces that are both beautiful and functional. From wireframes to prototypes, he brings ideas to life with precision and creativity."
      />
      <MyProjectsSectionWrapper />
    </div>
  );
} 