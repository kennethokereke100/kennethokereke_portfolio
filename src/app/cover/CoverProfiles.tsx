"use client";

import ProfileCard from "./ProfileCard";

const profiles = [
  {
    name: "UI/UX Product Design Lovers",
    image: "/images/blueavatar.png",
    type: "uiuxdesign"
  },
  {
    name: "Web Development Lovers", 
    image: "/images/redavatar.png",
    type: "webdevelopment"
  },
  {
    name: "Mobile Development Lovers",
    image: "/images/purpleavatar.png",
    type: "mobiledevelopment"
  }
];

export default function CoverProfiles() {
  const handleProfileClick = (name: string) => {
    console.log(`Selected profile: ${name}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          avatarSrc={profile.image}
          type={profile.type}
          onClick={() => handleProfileClick(profile.name)}
        />
      ))}
    </div>
  );
} 