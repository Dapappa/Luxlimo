"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Perfect service for our corporate Stampede events. Professional drivers who knew all the best routes.",
    rating: 5,
  },
  {
    name: "Mike T.",
    text: "Booked the party bus for Cowboys concerts - best decision ever! Safe rides all week.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    text: "They transported our wedding party during Stampede week. Flawless coordination!",
    rating: 5,
  },
  {
    name: "David R.",
    text: "Artist transport was discrete and professional. They understand our industry&#39;s needs.",
    rating: 5,
  },
];

const bookingUpdates = [
  "Emily just booked an Escalade for July 7",
  "Corporate group reserved a Sprinter for July 5",
  "Bachelor party booked the Limo-Bus for July 12",
  "Sarah secured parade morning transport",
  "VIP group booked concert crawler package",
];

export default function SocialProof() {
  const [currentUpdate, setCurrentUpdate] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % bookingUpdates.length);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <Container>
        {/* Live Booking Ticker */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-red-600/30">
            <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-white font-medium">
              {bookingUpdates[currentUpdate]}
            </span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-gold">500+</p>
            <p className="text-gray-400">Stampede Rides in 2024</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gold">10,000+</p>
            <p className="text-gray-400">Safe Rides Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gold">5.0</p>
            <p className="text-gray-400">Google Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gold">24/7</p>
            <p className="text-gray-400">Stampede Support</p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )
              )}
            </div>
            <p className="text-lg text-gray-300 mb-4 italic">
              &ldquo;{testimonials[currentTestimonial].text}&rdquo;
            </p>
            <p className="text-gold font-medium">
              - {testimonials[currentTestimonial].name}
            </p>
          </div>
        </div>

        {/* Urgency Messages */}
        <div className="mt-12 grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-gold/10 rounded-lg p-4 border border-gold/30">
            <p className="text-gold font-bold">⚡ Limited Availability</p>
            <p className="text-sm text-gray-300">
              Only 3 Escalades left for Parade Day
            </p>
          </div>
          <div className="bg-gold/10 rounded-lg p-4 border border-gold/30">
            <p className="text-gold font-bold">🎯 Early Bird Special</p>
            <p className="text-sm text-gray-300">
              Book now for 10% off July dates
            </p>
          </div>
          <div className="bg-gold/10 rounded-lg p-4 border border-gold/30">
            <p className="text-gold font-bold">🌟 Artist Approved</p>
            <p className="text-sm text-gray-300">
              Trusted by performers at all major venues
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
