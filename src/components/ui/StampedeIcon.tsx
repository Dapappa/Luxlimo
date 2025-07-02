"use client";

import Image from "next/image";

export default function StampedeIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {/* Enhanced pulsing background effects */}
      <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse opacity-40" />
      <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-30" />
      <div className="absolute inset-0 bg-yellow-500 rounded-full animate-pulse opacity-20 animation-delay-500" />

      {/* Calgary Stampede Logo Image */}
      <div className="relative rounded-full overflow-hidden shadow-2xl animate-pulse border-4 border-white">
        <Image
          src="/images/Stampede logo.jpeg"
          alt="Calgary Stampede Logo"
          width={80}
          height={80}
          className="rounded-full object-cover w-full h-full"
          priority
        />
      </div>

      {/* "2025" badge with enhanced styling */}
      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black text-sm font-bold px-3 py-1 rounded-full shadow-xl border-2 border-white animate-bounce">
        2025
      </div>
    </div>
  );
}
