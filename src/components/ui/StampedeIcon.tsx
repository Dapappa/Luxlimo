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
      {/* Pulsing background effect */}
      <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse opacity-30" />
      <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20" />

      {/* Calgary Stampede Logo-inspired icon */}
      <div className="relative bg-red-600 rounded-full p-3 shadow-lg">
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          {/* Western Star */}
          <path
            d="M16 2L18.472 12.056L28 8L21.944 16L28 24L18.472 19.944L16 30L13.528 19.944L4 24L10.056 16L4 8L13.528 12.056L16 2Z"
            fill="currentColor"
          />
          {/* Inner star detail */}
          <path
            d="M16 6L17.236 13.764L24 12L19.764 16L24 20L17.236 18.236L16 26L14.764 18.236L8 20L12.236 16L8 12L14.764 13.764L16 6Z"
            fill="#FFD700"
          />
          {/* Center circle */}
          <circle cx="16" cy="16" r="4" fill="currentColor" />
          <circle cx="16" cy="16" r="2" fill="#FFD700" />
        </svg>
      </div>

      {/* "2025" badge */}
      <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
        2025
      </div>
    </div>
  );
}
