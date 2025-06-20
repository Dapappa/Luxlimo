"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_PUBLIC_KEY,
  BUSINESS_NAME,
} from "@/config/env";

interface SpinWheelProps {
  isVisible: boolean;
  onClose: () => void;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Wheel segments with rigged odds
  const segments = [
    { display: "30%", actual: "5%", color: "#ff6b6b", chance: 20 },
    { display: "5%", actual: "5%", color: "#4ecdc4", chance: 30 },
    { display: "25%", actual: "3%", color: "#45b7d1", chance: 15 },
    { display: "10%", actual: "5%", color: "#f9ca24", chance: 25 },
    { display: "Try Again", actual: "Try Again", color: "#a4b0be", chance: 10 },
  ];

  const spin = async () => {
    if (!email) return;

    setShowEmailForm(false);
    setIsSpinning(true);

    // Rigged selection - never more than 5%
    const rand = Math.random() * 100;
    let selectedSegment;

    if (rand < 70) {
      // 70% chance to win a discount (but max 5%)
      const discountSegments = segments.filter((s) => s.actual !== "Try Again");
      selectedSegment =
        discountSegments[Math.floor(Math.random() * discountSegments.length)];
    } else {
      // 30% chance for "Try Again"
      selectedSegment = segments.find((s) => s.actual === "Try Again")!;
    }

    const segmentIndex = segments.indexOf(selectedSegment);
    const segmentAngle = 360 / segments.length;
    const targetAngle = segmentIndex * segmentAngle + segmentAngle / 2;
    const spins = 5;
    const finalRotation = spins * 360 + targetAngle;

    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      setResult(selectedSegment.actual);

      if (selectedSegment.actual !== "Try Again") {
        sendDiscountEmail(selectedSegment.actual);
      }
    }, 3000);
  };

  const sendDiscountEmail = async (discount: string) => {
    try {
      const discountCode = `LUXSPIN${discount.replace("%", "")}${Math.random()
        .toString(36)
        .substr(2, 4)
        .toUpperCase()}`;

      const templateParams = {
        to_email: email,
        customer_name: email.split("@")[0],
        discount_amount: discount,
        discount_code: discountCode,
        business_name: BUSINESS_NAME,
        expiry_date: new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ).toLocaleDateString(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        "template_discount",
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  const handleTryAgain = () => {
    setHasSpun(false);
    setResult(null);
    setShowEmailForm(true);
    setRotation(0);
  };

  const handleClose = () => {
    onClose();
    setHasSpun(false);
    setResult(null);
    setShowEmailForm(true);
    setEmail("");
    setRotation(0);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
            >
              ×
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">🎰 Spin to Win!</h2>
              <p className="text-gray-600">
                Get up to 30% off your next luxury ride!
              </p>
            </div>

            {showEmailForm && (
              <div className="mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg mb-4"
                />
                <button
                  onClick={spin}
                  disabled={!email}
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 disabled:bg-gray-400"
                >
                  Spin the Wheel! 🎯
                </button>
              </div>
            )}

            {!showEmailForm && (
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-gray-800"></div>
                  </div>

                  <motion.div
                    className="w-48 h-48 rounded-full border-4 border-gray-800 relative"
                    animate={{ rotate: rotation }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    style={{
                      background: `conic-gradient(${segments
                        .map(
                          (segment, index) =>
                            `${segment.color} ${
                              index * (360 / segments.length)
                            }deg ${(index + 1) * (360 / segments.length)}deg`
                        )
                        .join(", ")})`,
                    }}
                  >
                    {segments.map((segment, index) => (
                      <div
                        key={index}
                        className="absolute text-white font-bold text-xs"
                        style={{
                          top: "20px",
                          left: "50%",
                          transform: `rotate(${
                            index * (360 / segments.length) +
                            360 / segments.length / 2
                          }deg) translateX(-50%)`,
                          transformOrigin: "50% 76px",
                        }}
                      >
                        {segment.display}
                      </div>
                    ))}
                  </motion.div>
                </div>

                {isSpinning && (
                  <p className="text-lg font-bold animate-pulse">
                    Spinning... 🎰
                  </p>
                )}

                {hasSpun && result && (
                  <div className="text-center">
                    {result === "Try Again" ? (
                      <div>
                        <p className="text-xl font-bold mb-4">
                          Almost there! 🎯
                        </p>
                        <button
                          onClick={handleTryAgain}
                          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                        >
                          Try Again
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-2xl font-bold text-green-600 mb-2">
                          🎉 You Won!
                        </p>
                        <p className="text-xl mb-4">
                          {result} off your next ride!
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          Check your email for the discount code!
                        </p>
                        <button
                          onClick={handleClose}
                          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                        >
                          Book Now
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpinWheel;
