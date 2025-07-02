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

      {/* Calgary Stampede CS Logo */}
      <div className="relative bg-white rounded-full p-3 shadow-2xl animate-pulse">
        <svg
          width="44"
          height="44"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Letter C */}
          <path
            d="M50 15C67.6 15 82 29.4 82 47C82 64.6 67.6 79 50 79C45.2 79 40.7 77.8 36.8 75.7L44.2 63.8C46.7 65.2 48.3 65.5 50 65.5C59.8 65.5 67.5 57.8 67.5 47C67.5 37.2 59.8 28.5 50 28.5C46.8 28.5 43.9 29.7 41.5 31.6L34.1 19.7C39.2 16.8 44.4 15 50 15Z"
            fill="#E53E3E"
          />

          {/* Letter S */}
          <path
            d="M30 55C30 47.8 35.8 42 43 42H47C51.4 42 55 45.6 55 50C55 54.4 51.4 58 47 58H40C36.7 58 34 60.7 34 64C34 67.3 36.7 70 40 70H52C58.6 70 64 75.4 64 82C64 88.6 58.6 94 52 94H38C28.1 94 20 85.9 20 76C20 69.4 24.2 63.9 30 61.2V55Z"
            fill="#E53E3E"
          />

          {/* Highlight/Shine effect */}
          <path
            d="M40 25C42.5 22.5 45.5 21 49 21C55.5 21 61.2 25.2 63.8 31.5C64.5 30.2 65 28.7 65 27C65 22.6 61.4 19 57 19C52.6 19 49 22.6 49 27C49 26.2 44.5 24.8 40 25Z"
            fill="#FF6B6B"
            opacity="0.6"
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
