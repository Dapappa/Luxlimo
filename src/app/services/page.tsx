import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Start and end your journey in comfort and style with our premium airport transfer service. We monitor flight arrivals to ensure we're there waiting for you, regardless of delays. Our professional chauffeurs will assist with your luggage and provide a stress-free ride to or from the airport.",
    features: [
      "Flight monitoring for on-time pickup",
      "Assistance with luggage",
      "Meet and greet service available",
      "Comfortable, luxurious vehicles",
      "Available 24/7",
    ],
    image: "/images/SUV night plane strip.webp",
  },
  {
    id: "wedding-transportation",
    title: "Wedding Transportation",
    description:
      "Make your special day even more memorable with our elegant wedding transportation. Our immaculate vehicles provide the perfect backdrop for wedding photos and ensure you arrive in style. We offer special packages for the wedding party and can coordinate multiple pickups.",
    features: [
      "Elegantly decorated vehicles upon request",
      "Red carpet service available",
      "Coordination of multiple pickups",
      "Special packages for entire wedding party",
      "Professional, formally attired chauffeurs",
    ],
    image: "/images/wedding-limo.jpg",
  },
  {
    id: "special-events",
    title: "Special Events",
    description:
      "Whether it's a birthday, anniversary, graduation, or any other special occasion, our limousine service adds an extra touch of luxury. Make a statement and create lasting memories as you arrive at your destination in style and comfort.",
    features: [
      "Custom itineraries available",
      "Various vehicle options to suit your group size",
      "Amenities like refreshments upon request",
      "Professional, discrete service",
      "Flexible booking options",
    ],
    image: "/images/concert-venue.jpg",
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    description:
      "Impress clients and ensure executives travel in comfort with our corporate transportation services. We understand the importance of punctuality and professionalism in business settings. Our executive service provides a mobile office environment where you can work or prepare between meetings.",
    features: [
      "Professional, uniformed chauffeurs",
      "Wi-Fi enabled vehicles available",
      "Corporate accounts with billing options",
      "Airport meet and greet service",
      "Executive sedans and SUVs",
    ],
    image: "/images/business-meeting.jpg",
  },
  {
    id: "events-charters",
    title: "Events and Charters",
    description:
      "Perfect for concerts, sporting events, theater shows, and group outings. Our fleet can accommodate parties of all sizes, ensuring everyone arrives together without the hassle of parking or coordinating multiple vehicles. Enjoy the event without worrying about transportation logistics.",
    features: [
      "Variety of vehicle sizes for groups",
      "Door-to-door service",
      "No parking hassles",
      "Customizable pickup and drop-off points",
      "Extended waiting time available",
    ],
    image: "/images/Van Picture.webp",
  },
  {
    id: "out-of-town",
    title: "Out of Town Transfer",
    description:
      "Explore Alberta's beautiful destinations like Banff, Canmore, Lake Louise, and beyond in comfort and style. Our long-distance transportation services allow you to enjoy the scenery while we handle the driving. Perfect for tourist excursions or business trips between cities.",
    features: [
      "Comfortable vehicles for long journeys",
      "Professional drivers familiar with all routes",
      "Flexible scheduling",
      "Multiple stops available",
      "Scenic route options upon request",
    ],
    image: "/images/lake-louise.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-secondary-dark pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Experience unmatched luxury and reliability with our comprehensive
            transportation services. Each service is designed to provide
            comfort, elegance, and peace of mind.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`mb-16 pb-16 ${
                index !== services.length - 1 ? "border-b border-gray-800" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-primary">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-gray-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0"
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/booking" className="btn-primary">
                      Book This Service
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden relative shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary p-12 rounded-lg max-w-6xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Custom <span className="text-primary">Transportation</span>{" "}
                Solutions
              </h3>
              <p className="text-gray-300">
                Don&apos;t see exactly what you need? We specialize in creating
                custom transportation solutions tailored to your specific
                requirements. Contact us to discuss your unique needs.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn-secondary">
                  Contact Us for Custom Options
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/luxury-sedan.jpg"
                  alt="Custom Transportation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
