"use client";

import { Search, Bell, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const portfolioTypes = [
  {
    type: "uiuxdesign",
    name: "UI/UX Product Design Lovers",
    avatar: "/images/blueavatar.png"
  },
  {
    type: "webdevelopment",
    name: "Web Development Lovers",
    avatar: "/images/redavatar.png"
  },
  {
    type: "mobiledevelopment",
    name: "Mobile Development Lovers",
    avatar: "/images/purpleavatar.png"
  }
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect current portfolio type and page from route
  const pathSegments = pathname.split('/');
  const currentType = pathSegments[1]; // e.g., "uiuxdesign" from "/uiuxdesign/home"
  const currentPage = pathSegments[2] || 'home'; // e.g., "home" from "/uiuxdesign/home"
  const currentProfile = portfolioTypes.find(p => p.type === currentType) || portfolioTypes[0];

  // Get other profiles (not the current one)
  const otherProfiles = portfolioTypes.filter(p => p.type !== currentType);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileSelect = (type: string) => {
    router.push(`/${type}/home`);
    setIsDropdownOpen(false);
  };

  // Helper function to check if a tab is active
  const isActiveTab = (tabName: string) => {
    return currentPage === tabName;
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <h1 className="text-red-600 font-bold text-xl tracking-wide">
            KENNETH OKEREKE
          </h1>
          
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <Link 
              href={`/${currentType}/home`}
              className={`text-white hover:text-gray-300 transition-colors pb-1 ${
                isActiveTab('home') ? 'border-b-2 border-red-600' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href={`/${currentType}/projects`}
              className={`text-white hover:text-gray-300 transition-colors pb-1 ${
                isActiveTab('projects') ? 'border-b-2 border-red-600' : ''
              }`}
            >
              Projects
            </Link>
            <Link 
              href={`/${currentType}/contact`}
              className={`text-white hover:text-gray-300 transition-colors pb-1 ${
                isActiveTab('contact') ? 'border-b-2 border-red-600' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right side - Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <Search size={20} />
          </button>
          
          {/* Bell Icon with Notification Badge */}
          <button className="text-white hover:text-gray-300 transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* Profile Avatar with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={handleAvatarClick}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-200">
                <Image
                  src={currentProfile.avatar}
                  alt={`${currentProfile.name} avatar`}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-black/95 backdrop-blur rounded-lg shadow-xl border border-gray-800 py-2">
                {otherProfiles.map((profile) => (
                  <button
                    key={profile.type}
                    onClick={() => handleProfileSelect(profile.type)}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-white/10 transition-colors transform hover:scale-105"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={profile.avatar}
                        alt={`${profile.name} avatar`}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{profile.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 