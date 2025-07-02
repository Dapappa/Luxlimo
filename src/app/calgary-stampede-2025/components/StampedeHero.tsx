"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface StampedeHeroProps {
  daysUntilStampede: number;
}

export default function StampedeHero({ daysUntilStampede }: StampedeHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stampede/calgary-skyline-dusk.jpg"
          alt="Calgary Stampede"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-red-600/20 rounded-full blur-xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <Container className="relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Countdown Timer */}
          {daysUntilStampede > 0 && (
            <div className="mb-6 inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gold/30">
              <span className="text-gold font-medium">🎯</span>
              <span className="text-white font-bold text-lg">
                {daysUntilStampede}
              </span>
              <span className="text-gold">days until Stampede!</span>
            </div>
          )}

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Arrive in Style
            <span className="block text-gold mt-2">Stampede 2025</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-light">
            Luxury Transportation to Every Show, Concert & Event
          </p>

          {/* Trust Badge */}
          <p className="text-lg text-gold mb-8 font-medium">
            Trusted by Artists, Locals & Tourists Since 2015
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/booking"
              className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-full text-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Stampede Ride
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("planner")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 bg-gold/20 backdrop-blur-sm text-gold border-2 border-gold rounded-full text-lg font-bold hover:bg-gold hover:text-black transition-all transform hover:scale-105"
            >
              Get Instant Quote
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-gold">✓</span>
              <span>500+ Safe Stampede Rides in 2024</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-gold">✓</span>
              <span>5-Star Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-gold">✓</span>
              <span>Fully Licensed & Insured</span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-sm text-gray-400">
            Transportation Services Only - Event Tickets Sold Separately
          </p>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
