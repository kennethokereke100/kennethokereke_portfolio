"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProfileCardProps {
  name: string;
  avatarSrc: string;
  onClick: () => void;
  type: string;
}

export default function ProfileCard({ name, avatarSrc, onClick, type }: ProfileCardProps) {
  const router = useRouter();

  const handleClick = () => {
    onClick();
    router.push(`/${type}/home`);
  };

  return (
    <div 
      className="flex flex-col items-center cursor-pointer group"
      onClick={handleClick}
    >
      <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-110">
        <Image
          src={avatarSrc}
          alt={`${name} profile`}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>
      <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-200 text-center">
        {name}
      </span>
    </div>
  );
} 