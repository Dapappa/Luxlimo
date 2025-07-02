"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

const popularLocations = [
  "Stampede Park - Main Entrance",
  "Stampede Park - BMO Centre",
  "Cowboys Casino",
  "Badlands Music Festival",
  "Nashville North",
  "Big Four Roadhouse",
  "Downtown Hotels",
  "Calgary Airport (YYC)",
];

const stampedeEvents = {
  "2025-07-03": ["Sneak-A-Peek (½ price)", "Cowboys: Zach Top"],
  "2025-07-04": ["Parade (6 AM)", "Free Gate 11-1:30", "Nashville North Opens"],
  "2025-07-05": [
    "Shania Twain (Saddledome)",
    "Badlands: RL Grime & Rudimental",
  ],
  "2025-07-06": ["Tim Hortons Family Day (free until 11)"],
  "2025-07-07": ["Cowboys: Kygo", "Badlands: Lane 8"],
  "2025-07-08": ["Community Day (free 10-2)"],
  "2025-07-09": ["Khalid (Coca-Cola Stage)"],
  "2025-07-10": ["Rodeo Finals Begin"],
  "2025-07-11": ["Evening Show Spectacular"],
  "2025-07-12": ["Alesso (Coca-Cola Stage)", "Badlands: Seven Lions"],
  "2025-07-13": ["Cowboys: Chainsmokers", "Final Night Fireworks"],
};

export default function TripPlanner() {
  const [step, setStep] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [formattedDate, setFormattedDate] = useState("");
  const [tripData, setTripData] = useState({
    date: "",
    pickup: "",
    destinations: [] as string[],
    partySize: 1,
    addOns: [] as string[],
  });

  // Format date on client side to prevent hydration mismatch
  useEffect(() => {
    if (tripData.date) {
      const date = new Date(tripData.date);
      setFormattedDate(
        date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }
  }, [tripData.date]);

  const updateTripData = (field: string, value: string | string[] | number) => {
    setTripData((prev) => ({ ...prev, [field]: value }));

    // Simple price calculation
    let basePrice = 299;
    if (tripData.partySize > 6) basePrice = 499;
    if (tripData.partySize > 12) basePrice = 799;
    if (tripData.destinations.length > 2)
      basePrice += 100 * (tripData.destinations.length - 2);
    if (tripData.addOns.includes("refreshments")) basePrice += 75;
    if (tripData.addOns.includes("photographer")) basePrice += 150;
    setEstimatedPrice(basePrice);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Select Your Date
            </h3>
            <input
              type="date"
              min="2025-07-03"
              max="2025-07-13"
              value={tripData.date}
              onChange={(e) => updateTripData("date", e.target.value)}
              className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-gold focus:outline-none"
            />
            {tripData.date &&
              stampedeEvents[tripData.date as keyof typeof stampedeEvents] && (
                <div className="mt-4 p-4 bg-gold/10 rounded-lg border border-gold/30">
                  <p className="text-sm font-bold text-gold mb-2">
                    Events on this day:
                  </p>
                  <ul className="text-sm text-gray-300">
                    {stampedeEvents[
                      tripData.date as keyof typeof stampedeEvents
                    ].map((event, idx) => (
                      <li key={idx}>• {event}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Choose Pickup Location
            </h3>
            <input
              type="text"
              placeholder="Enter pickup address"
              value={tripData.pickup}
              onChange={(e) => updateTripData("pickup", e.target.value)}
              className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-gold focus:outline-none mb-4"
            />
            <div className="grid grid-cols-2 gap-2">
              {popularLocations.slice(0, 4).map((location) => (
                <button
                  key={location}
                  onClick={() => updateTripData("pickup", location)}
                  className="p-2 text-sm bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Select Destinations
            </h3>
            <div className="space-y-2">
              {popularLocations.map((location) => (
                <label
                  key={location}
                  className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={tripData.destinations.includes(location)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateTripData("destinations", [
                          ...tripData.destinations,
                          location,
                        ]);
                      } else {
                        updateTripData(
                          "destinations",
                          tripData.destinations.filter((d) => d !== location)
                        );
                      }
                    }}
                    className="mr-3"
                  />
                  <span className="text-gray-300">{location}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Party Size & Add-Ons
            </h3>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                Number of Passengers
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={tripData.partySize}
                onChange={(e) =>
                  updateTripData("partySize", parseInt(e.target.value))
                }
                className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-gold focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              {[
                { id: "refreshments", label: "Catered Refreshments (+$75)" },
                { id: "stetsons", label: "Stetson Gift Packs (+$50/person)" },
                {
                  id: "photographer",
                  label: "Professional Photographer (+$150)",
                },
                {
                  id: "redcarpet",
                  label: "Red Carpet Arrival (Complimentary)",
                },
              ].map((addon) => (
                <label
                  key={addon.id}
                  className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={tripData.addOns.includes(addon.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateTripData("addOns", [
                          ...tripData.addOns,
                          addon.id,
                        ]);
                      } else {
                        updateTripData(
                          "addOns",
                          tripData.addOns.filter((a) => a !== addon.id)
                        );
                      }
                    }}
                    className="mr-3"
                  />
                  <span className="text-gray-300">{addon.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Review Your Trip
            </h3>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-400">Date</p>
                <p className="text-white">{formattedDate || tripData.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Pickup</p>
                <p className="text-white">{tripData.pickup}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Destinations</p>
                <ul className="text-white">
                  {tripData.destinations.map((dest, idx) => (
                    <li key={idx}>• {dest}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-400">Party Size</p>
                <p className="text-white">{tripData.partySize} passengers</p>
              </div>
              {tripData.addOns.length > 0 && (
                <div>
                  <p className="text-sm text-gray-400">Add-Ons</p>
                  <ul className="text-white">
                    {tripData.addOns.map((addon, idx) => (
                      <li key={idx}>• {addon}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="pt-4 border-t border-gray-700">
                <p className="text-2xl font-bold text-gold">
                  Estimated: ${estimatedPrice}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Final price confirmed at booking
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Container>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-4">
            Plan Your Stampede Trip
          </h2>
          <p className="text-xl text-gray-300">
            Build your custom itinerary and get an instant quote
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {["Date", "Pickup", "Destinations", "Details", "Review"].map(
              (label, idx) => (
                <span
                  key={idx}
                  className={`text-sm ${
                    idx + 1 <= step ? "text-gold" : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              )
            )}
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-red-600 transition-all duration-500"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-gray-900 rounded-lg p-8">{renderStep()}</div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className={`px-6 py-3 rounded-full font-medium ${
              step === 1
                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            Previous
          </button>

          {step < 5 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={
                (step === 1 && !tripData.date) ||
                (step === 2 && !tripData.pickup) ||
                (step === 3 && tripData.destinations.length === 0)
              }
              className="px-6 py-3 bg-gold text-black rounded-full font-bold hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => (window.location.href = "/booking")}
              className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105"
            >
              Book This Trip
            </button>
          )}
        </div>
      </div>
    </Container>
  );
}
