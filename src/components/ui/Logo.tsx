"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  size?: "small" | "medium" | "large";
  animated?: boolean;
}

export default function Logo({ size = "medium", animated = true }: LogoProps) {
  const sizeClasses = {
    small: "h-16",
    medium: "h-24",
    large: "h-32",
  };

  const imageSizes = {
    small: { width: 100, height: 60 },
    medium: { width: 150, height: 90 },
    large: { width: 200, height: 120 },
  };

  const LogoContent = () => (
    <div className={`flex flex-col items-center ${sizeClasses[size]}`}>
      {/* Image Logo */}
      <Image
        src="/images/Main logo image to use top left corner.webp"
        alt="Lux Limousine"
        width={imageSizes[size].width}
        height={imageSizes[size].height}
        className="object-contain"
        priority
      />
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
}
