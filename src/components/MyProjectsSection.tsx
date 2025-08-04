"use client";

interface MyProjectsSectionProps {
  images: string[];
}

export default function MyProjectsSection({ images }: MyProjectsSectionProps) {
  const imageTitles: Record<string, string> = {
    "walmartdesignlogo.png": "Walmart/Sams Club Pays and Benefit Application",
    "walmartpayday.png": "Walmart Manager hub",
    "cvsdesignsystem.png": "Redefining CVS Digital Design System",
    "prudesignsystem.png": "Prudentials Design System - Evolution",
    "prudentialfinancial.png": "Prudential Homepage Redesign",
    "prufinancialassessment.png": "Prudential Financial Wellness Assessment",
    "ncrmarketplace.png": "NCR Marketplace",
    "jukedeck.png": "Jukedeck",
    "SweepR.png": "Sweepr",
    "coachme.png": "Creating a Fitness App (Coachme)"
  };

  return (
    <section className="bg-black px-4 md:px-8 lg:px-16 pt-4 pb-6 md:pt-6 md:pb-8">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-6">
        My Projects
      </h2>
      
      {/* Horizontal Scroll Container */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {images.map((file) => (
          <div
            key={file}
            className="relative flex-shrink-0 rounded-lg overflow-hidden"
          >
            <img
              src={`/images/uiuxprojects/${file}`}
              alt={file.replace(/\.[^/.]+$/, "")}
              loading="lazy"
              className="max-h-80 h-auto w-auto object-cover hover:scale-105 transition-transform duration-300"
            />
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
            {/* Title */}
            <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
              {imageTitles[file] || file.replace(/\.[^/.]+$/, "")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 