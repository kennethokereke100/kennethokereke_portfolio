"use client";

import { Play, Info } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pathname = usePathname();

  // Detect current section from pathname
  let currentType = "uiuxdesign"; // default
  if (pathname.includes("webdevelopment")) {
    currentType = "webdevelopment";
  } else if (pathname.includes("mobiledevelopment")) {
    currentType = "mobiledevelopment";
  } else if (pathname.includes("uiuxdesign")) {
    currentType = "uiuxdesign";
  }

  // Video mapping for each portfolio type
  const videoMap = {
    uiuxdesign: [
      "/videos/uiuxdesign/amusementpark.mp4",
      "/videos/uiuxdesign/financial.mp4",
      "/videos/uiuxdesign/track.mp4",
      "/videos/uiuxdesign/walmartvid.mp4"
    ],
    webdevelopment: [
      "/videos/webdevelopment/explosion.mp4",
      "/videos/webdevelopment/maps.mp4",
      "/videos/webdevelopment/money.mp4"
    ],
    mobiledevelopment: [
      "/videos/mobiledevelopment/monkey.mp4",
      "/videos/mobiledevelopment/race.mp4",
      "/videos/mobiledevelopment/soccer.mp4"
    ]
  };

  // Get the correct video array based on portfolio type
  const videos = videoMap[currentType as keyof typeof videoMap] || videoMap.uiuxdesign;

  const handleVideoEnded = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % videos.length;
        return nextIndex;
      });
      setIsFading(false);
    }, 800);
  };

  const handleViewProjects = () => {
    const projectsSection = document.querySelector('section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [currentVideoIndex, videos]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Single Video Element */}
        <video
          ref={videoRef}
          key={currentVideoIndex}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-800 ease-in-out ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
          src={videos[currentVideoIndex]}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen px-8 pt-20">
        <div className="max-w-2xl">
          {/* Caution Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-md mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
            <span className="text-sm font-medium">Caution: High Impact Ahead</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
            {subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-8 max-w-xl leading-relaxed">
            {description}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary Button */}
            <button 
              onClick={handleViewProjects}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105"
            >
              <Play size={16} />
              <span>View Projects</span>
            </button>

            {/* Secondary Button */}
            <button className="flex items-center space-x-2 bg-black/50 border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-black/70 transition-colors transform hover:scale-105">
              <Info size={16} />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 