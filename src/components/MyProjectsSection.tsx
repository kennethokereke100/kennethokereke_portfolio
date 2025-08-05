"use client";

import { useState } from "react";
import ProjectOverlay from "./ProjectOverlay";

interface MyProjectsSectionProps {
  images: string[];
}

export default function MyProjectsSection({ images }: MyProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    tag: { text: string; color: string } | null;
    year: string;
    category: string;
    description: string;
    cast: string;
    location: string;
    challenge: string;
    details?: {
      expertise: string;
      role: string;
      timeline: string;
      team: string;
      tools: string;
    };
  } | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const imageTitles: Record<string, string> = {
    "walmartdesignlogo.png": "Walmart/Sams Club Pays and Benefit Application",
    "walmartpayday.png": "Walmart Manager hub",
    "cvsdesignsystem.png": "Redefining CVS Digital Design System",
    "prudesignsystem.png": "Prudentials Design System - Evolution",
    "prudentialfinancial.png": "Prudential Homepage Redesign",
    "prufinancialassessment.png": "Prudential Financial Wellness Assessment",
    "ncrmarketplace.png": "NCR Marketplace",
    "jukedeck.png": "Jukedeck",
    "Sweepr.png": "Creating a design system for Sweepr",
    "coachme.png": "Creating a Fitness App (Coachme)"
  };

  const getProjectTag = (filename: string) => {
    const mobileApps = ["walmartdesignlogo.png", "coachme.png"];
    const webMobileApps = ["walmartpayday.png", "prudentialfinancial.png", "prufinancialassessment.png", "ncrmarketplace.png", "jukedeck.png"];
    const designSystems = ["cvsdesignsystem.png", "prudesignsystem.png", "Sweepr.png"];

    if (mobileApps.includes(filename)) {
      return { text: "Mobile Application", color: "bg-red-600" };
    } else if (webMobileApps.includes(filename)) {
      return { text: "Web App / Mobile App", color: "bg-green-600" };
    } else if (designSystems.includes(filename)) {
      return { text: "Design System", color: "bg-purple-600" };
    }
    return null;
  };

  const getProjectData = (filename: string) => {
    const tag = getProjectTag(filename);
    const title = imageTitles[filename] || filename.replace(/\.[^/.]+$/, "");
    
    // Mock data for each project
    const projectData = {
      "walmartdesignlogo.png": {
        title,
        tag,
        year: "2023",
        category: "Mobile Development",
        description: "A comprehensive mobile application for Walmart and Sam's Club employees to manage their pays and benefits. The app provides real-time access to payroll information, benefit management, and employee resources.",
        cast: "Kenneth Okereke, UX Team",
        location: "United States",
        challenge: "Complex enterprise requirements with multiple user roles and secure data handling.",
        details: {
          expertise: "Designing wireframe, conducting UX Research",
          role: "Senior UX Designer",
          timeline: "April 2024 - December 2024",
          team: "1 Designer, 3 Developers",
          tools: "Figma, Miro, UserTesting.com, Adobe After Effects"
        }
      },
      "walmartpayday.png": {
        title,
        tag,
        year: "2023",
        category: "Web Development",
        description: "A modern web application serving as the central hub for Walmart managers to oversee operations, employee management, and business analytics.",
        cast: "Kenneth Okereke, Development Team",
        location: "United States",
        challenge: "Creating an intuitive interface for complex managerial workflows."
      },
      "cvsdesignsystem.png": {
        title,
        tag,
        year: "2022",
        category: "Design Systems",
        description: "A comprehensive redesign of CVS's digital design system, establishing consistent patterns and components across all digital touchpoints.",
        cast: "Kenneth Okereke, Design Team",
        location: "United States",
        challenge: "Maintaining brand consistency while improving usability across multiple platforms."
      },
      "prudesignsystem.png": {
        title,
        tag,
        year: "2022",
        category: "Design Systems",
        description: "Evolution of Prudential's design system to support modern digital experiences while maintaining the trusted financial brand identity.",
        cast: "Kenneth Okereke, Design System Team",
        location: "United States",
        challenge: "Balancing innovation with established brand guidelines."
      },
      "prudentialfinancial.png": {
        title,
        tag,
        year: "2022",
        category: "Web Development",
        description: "Complete redesign of Prudential's homepage to improve user engagement and conversion rates while maintaining trust and credibility.",
        cast: "Kenneth Okereke, Web Team",
        location: "United States",
        challenge: "Creating an engaging experience for financial services."
      },
      "prufinancialassessment.png": {
        title,
        tag,
        year: "2022",
        category: "Web Development",
        description: "Interactive financial wellness assessment tool helping users understand and improve their financial health through personalized recommendations.",
        cast: "Kenneth Okereke, Product Team",
        location: "United States",
        challenge: "Making complex financial concepts accessible and engaging."
      },
      "ncrmarketplace.png": {
        title,
        tag,
        year: "2021",
        category: "Web Development",
        description: "Digital marketplace platform for NCR's business solutions, enabling seamless discovery and procurement of retail technology.",
        cast: "Kenneth Okereke, E-commerce Team",
        location: "Global",
        challenge: "Creating a unified marketplace for diverse business solutions."
      },
      "jukedeck.png": {
        title,
        tag,
        year: "2021",
        category: "Web Development",
        description: "Music creation and licensing platform providing AI-generated music for content creators and businesses.",
        cast: "Kenneth Okereke, Music Tech Team",
        location: "United Kingdom",
        challenge: "Simplifying music licensing for non-musicians."
      },
      "Sweepr.png": {
        title,
        tag,
        year: "2021",
        category: "Design Systems",
        description: "Comprehensive design system for Sweepr's field service management platform, ensuring consistency across mobile and web applications.",
        cast: "Kenneth Okereke, Design Team",
        location: "United Kingdom",
        challenge: "Creating a flexible system for complex field service workflows."
      },
      "coachme.png": {
        title,
        tag,
        year: "2020",
        category: "Mobile Development",
        description: "Fitness coaching application that connects users with personal trainers and provides personalized workout plans and progress tracking.",
        cast: "Kenneth Okereke, Fitness Tech Team",
        location: "United States",
        challenge: "Creating an engaging fitness experience that motivates long-term behavior change."
      }
    };

    return projectData[filename as keyof typeof projectData] || {
      title,
      tag,
      year: "2023",
      category: "Project",
      description: "A professional project showcasing innovative design and development solutions.",
      cast: "Kenneth Okereke",
      location: "United States",
      challenge: "Delivering exceptional user experiences through thoughtful design and development."
    };
  };

  const handleProjectClick = (filename: string) => {
    const projectData = getProjectData(filename);
    setSelectedProject(projectData);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <section className="bg-black px-4 md:px-8 lg:px-16 pt-4 pb-6 md:pt-6 md:pb-8">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-6">
        My Projects
      </h2>
      
      {/* Horizontal Scroll Container */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {images.map((file) => {
          const tag = getProjectTag(file);
          return (
            <div
              key={file}
              className="relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(file)}
            >
              <img
                src={`/images/uiuxprojects/${file}`}
                alt={file.replace(/\.[^/.]+$/, "")}
                loading="lazy"
                className="max-h-80 h-auto w-auto object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Category Tag */}
              {tag && (
                <div className={`absolute top-2 left-2 ${tag.color} text-white text-xs font-bold px-2 py-1 rounded-md`}>
                  {tag.text}
                </div>
              )}
              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
              {/* Title */}
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                {imageTitles[file] || file.replace(/\.[^/.]+$/, "")}
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Overlay */}
      <ProjectOverlay
        isOpen={isOverlayOpen}
        onClose={handleCloseOverlay}
        project={selectedProject}
      />
    </section>
  );
} 