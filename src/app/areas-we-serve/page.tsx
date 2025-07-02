"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AreasWeServePage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    {
      name: "Calgary",
      description:
        "Our home base, providing luxury limousine and transportation services throughout Calgary and surrounding areas.",
      landmarks: [
        "Calgary International Airport",
        "Downtown Calgary",
        "Stampede Park",
        "All Calgary Hotels",
      ],
      image: "/images/locations/calgary-skyline.jpg",
    },
    {
      name: "Banff",
      description:
        "Experience the breathtaking beauty of Banff in style with our luxury transportation services in this iconic mountain destination.",
      landmarks: [
        "Banff National Park",
        "Banff Springs Hotel",
        "Lake Minnewanka",
        "Banff Gondola",
      ],
      image: "/images/locations/banff-mountains.jpg",
    },
    {
      name: "Canmore",
      description:
        "Travel in comfort to this picturesque mountain town nestled in the Canadian Rockies, perfect for outdoor enthusiasts.",
      landmarks: [
        "Canmore Nordic Centre",
        "Silvertip Resort",
        "Three Sisters Mountains",
        "Downtown Canmore",
      ],
      image: "/images/locations/canmore-engine-bridge.jpg",
    },
    {
      name: "Lake Louise",
      description:
        "Visit one of the most beautiful lakes in the world with our premium transportation services to this stunning destination.",
      landmarks: [
        "Lake Louise Ski Resort",
        "Fairmont Chateau Lake Louise",
        "Moraine Lake",
        "Plain of Six Glaciers",
      ],
      image: "/images/locations/lake-louise.jpg",
    },
    {
      name: "Jasper",
      description:
        "Journey to the largest national park in the Canadian Rockies with our comfortable, reliable luxury transportation.",
      landmarks: [
        "Jasper National Park",
        "Athabasca Falls",
        "Columbia Icefield",
        "Maligne Lake",
      ],
      image: "/images/locations/jasper-national-park.jpg",
    },
    {
      name: "Waterton Lakes",
      description:
        "Experience the spectacular beauty where the mountains meet the prairies with our luxury transportation to this unique UNESCO World Heritage Site.",
      landmarks: [
        "Waterton Lakes National Park",
        "Prince of Wales Hotel",
        "Cameron Falls",
        "Red Rock Canyon",
      ],
      image: "/images/locations/waterton-lakes.jpg",
    },
    {
      name: "Elk Island",
      description:
        "Visit this sanctuary of aspen parkland and home to free-roaming bison with our comfortable transportation services.",
      landmarks: [
        "Elk Island National Park",
        "Astotin Lake",
        "Bison Loop Road",
        "Beaver Pond Trail",
      ],
      image: "/images/locations/elk-island.jpg",
    },
    {
      name: "Kananaskis",
      description:
        "Explore this stunning provincial park system with pristine wilderness areas and recreational opportunities through our premium transportation service.",
      landmarks: [
        "Kananaskis Country",
        "Nakiska Ski Resort",
        "Kananaskis Village",
        "Peter Lougheed Provincial Park",
      ],
      image: "/images/locations/kananaskis.jpg",
    },
    {
      name: "Red Deer",
      description:
        "Central Alberta's major urban centre, our services cover all transportation needs in and around Red Deer.",
      landmarks: [
        "Red Deer Regional Airport",
        "Westerner Park",
        "Heritage Ranch",
        "Canyon Ski Resort",
      ],
      image: "/images/locations/red-deer-city.jpg",
    },
    {
      name: "Lethbridge",
      description:
        "Serving Southern Alberta's commercial center with our premium transportation services for any occasion.",
      landmarks: [
        "Lethbridge Airport",
        "University of Lethbridge",
        "Henderson Lake",
        "Fort Whoop-Up",
      ],
      image: "/images/locations/lethbridge-high-level-bridge.jpg",
    },
  ];

  const popularRoutes = [
    { from: "Calgary", to: "Banff", duration: "Approximately 1.5 hours" },
    { from: "Calgary", to: "Lake Louise", duration: "Approximately 2 hours" },
    { from: "Calgary", to: "Canmore", duration: "Approximately 1 hour" },
    { from: "Calgary", to: "Kananaskis", duration: "Approximately 1 hour" },
    {
      from: "Calgary",
      to: "Waterton Lakes",
      duration: "Approximately 2.5 hours",
    },
    { from: "Banff", to: "Lake Louise", duration: "Approximately 40 minutes" },
  ];

  return (
    <div className="bg-secondary-dark">
      {/* Hero Section with Video Background */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover"
            >
              <source
                src="/images/Generated File May 20, 2025 - 7_18PM.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Areas We <span className="text-primary">Serve</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Lux Limousine provides premium transportation services across
            Alberta. From urban centers to breathtaking mountain destinations,
            we&apos;ve got you covered in style.
          </p>
        </div>
      </div>

      {/* Location Grid and Details */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {selectedLocation ? (
            // Detailed view of a selected location
            <div className="mb-16">
              {locations
                .filter((loc) => loc.name === selectedLocation)
                .map((location, index) => (
                  <div
                    key={index}
                    className="bg-secondary rounded-lg overflow-hidden"
                  >
                    <div className="relative h-80 md:h-96 w-full">
                      <Image
                        src={location.image}
                        alt={location.name}
                        fill
                        unoptimized={location.image.startsWith(
                          "https://placehold.co"
                        )}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-8">
                          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                            {location.name}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-gray-300 text-lg mb-6">
                        {location.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-white text-xl font-medium mb-4">
                          Popular Landmarks:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                          {location.landmarks.map((landmark, lIndex) => (
                            <li key={lIndex} className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-primary mr-3 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {landmark}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setSelectedLocation(null)}
                          className="btn-secondary"
                        >
                          Back to All Locations
                        </button>
                        <Link href="/booking" className="btn-primary">
                          Book Transportation
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            // Grid view of all locations
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-lg overflow-hidden border border-gray-800 hover:border-primary/30 transition-all cursor-pointer"
                  onClick={() => setSelectedLocation(location.name)}
                >
                  <div className="relative h-48">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      unoptimized={location.image.startsWith(
                        "https://placehold.co"
                      )}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-serif font-bold mb-3 text-primary">
                      {location.name}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {location.description}
                    </p>
                    <button className="text-primary flex items-center font-medium">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bg-secondary p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">
              Popular <span className="text-primary">Routes</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-primary">From</th>
                    <th className="text-left py-3 px-4 text-primary">To</th>
                    <th className="text-left py-3 px-4 text-primary">
                      Travel Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {popularRoutes.map((route, index) => (
                    <tr
                      key={index}
                      className={
                        index !== popularRoutes.length - 1
                          ? "border-b border-gray-800"
                          : ""
                      }
                    >
                      <td className="py-3 px-4 text-gray-300">{route.from}</td>
                      <td className="py-3 px-4 text-gray-300">{route.to}</td>
                      <td className="py-3 px-4 text-gray-300">
                        {route.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300 mb-4">
                Need transportation between cities or to a destination not
                listed here? We provide custom routes throughout Alberta.
              </p>
              <Link href="/contact" className="btn-secondary inline-block">
                Contact Us for Custom Routes
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Ready to Travel in <span className="text-primary">Style</span>?
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Book your luxury transportation today and experience the comfort,
              reliability, and sophistication that Lux Limousine is known for.
            </p>
            <Link href="/booking" className="btn-primary inline-block">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
