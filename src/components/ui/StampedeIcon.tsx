"use client";

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

      {/* Calgary Stampede Cowboy Hat icon */}
      <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-full p-4 shadow-2xl animate-pulse">
        <svg
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          {/* Cowboy Hat Brim */}
          <ellipse
            cx="24"
            cy="38"
            rx="20"
            ry="6"
            fill="currentColor"
            className="drop-shadow-lg"
          />
          {/* Hat Crown */}
          <path
            d="M12 32C12 32 14 12 24 12C34 12 36 32 36 32"
            fill="currentColor"
            stroke="#8B4513"
            strokeWidth="1"
          />
          {/* Hat Band */}
          <ellipse cx="24" cy="30" rx="12" ry="2" fill="#8B4513" />
          {/* Hat Crown Top */}
          <ellipse cx="24" cy="18" rx="8" ry="12" fill="currentColor" />
          {/* Hat Highlight */}
          <ellipse cx="20" cy="20" rx="2" ry="6" fill="#FFD700" opacity="0.7" />
          {/* Western Star on Hat */}
          <path
            d="M24 22L25.236 26.764L30 25L26.764 24L30 23L25.236 21.236L24 16L22.764 21.236L18 23L21.236 24L18 25L22.764 26.764L24 22Z"
            fill="#FFD700"
          />
        </svg>
      </div>

      {/* "2025" badge with enhanced styling */}
      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black text-sm font-bold px-3 py-1 rounded-full shadow-xl border-2 border-white animate-bounce">
        2025
      </div>
    </div>
  );
}
