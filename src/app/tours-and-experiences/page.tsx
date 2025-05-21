import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours & Experiences | Lux Limousine Service",
  description:
    "Exclusive luxury tours throughout Alberta, including Banff luxury tours, Lake Louise explorer, and Southern Alberta sightseeing experiences with Lux Limousine Service.",
};

// JSON-LD Schema for Tours
const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Banff & Lake Louise Explorer",
  description:
    "A luxury guided tour of Banff National Park and Lake Louise with stops at Johnston Canyon, Emerald Lake, and other scenic locations.",
  touristType: ["Luxury Travelers", "Nature Enthusiasts", "Photographers"],
  offers: {
    "@type": "Offer",
    price: "599.00",
    priceCurrency: "CAD",
  },
};

const heritageSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Southern Alberta Heritage Loop",
  description:
    "A luxury heritage tour exploring Southern Alberta&apos;s cultural and historical sites including museums, national historic sites, and natural attractions.",
  touristType: ["History Buffs", "Culture Enthusiasts", "Photographers"],
  offers: {
    "@type": "Offer",
    price: "649.00",
    priceCurrency: "CAD",
  },
};

const banffItinerary = [
  { time: "08:00", activity: "Pick-up Canmore Inn (4 guests)" },
  { time: "08:25", activity: "Pick-up Bow View Lodge (1 guest)" },
  { time: "09:00", activity: "Johnston Canyon" },
  { time: "11:00", activity: "Lake Louise (skating, photos, lunch)" },
  { time: "13:30", activity: "Emerald Lake" },
  { time: "15:00", activity: "Banff Upper Hot Spring" },
  { time: "16:30", activity: "Canmore Engine Bridge and Reservoir" },
  { time: "18:30", activity: "Estimated drop-off Calgary" },
];

const alternateLoop = [
  "Engine Bridge",
  "Banff Town Sign",
  "Gondola",
  "Bow Falls",
  "Cascade",
  "Lake Louise",
  "Mt Norquay",
  "Lake Minnewanka",
  "Two Jack Lake",
];

const heritageAttractions = [
  {
    title: "Bomber Command Museum",
    town: "Nanton",
    image: "https://images.unsplash.com/photo-1531769349486-52e16d08a2e8?w=800",
    url: "https://www.bombercommandmuseum.ca",
  },
  {
    title: "Bar U Ranch National Historic Site",
    town: "Longview",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800",
    url: "https://parks.canada.ca/lhn-nhs/ab/baru",
  },
  {
    title: "Vulcan Tourism & Trek Station",
    town: "Vulcan",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    url: "https://www.vulcantourism.com",
  },
  {
    title: "Head-Smashed-In Buffalo Jump",
    town: "Fort Macleod",
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800",
    url: "https://headsmashedin.ca",
  },
  {
    title: "Fort Macleod NWMP Museum",
    town: "Fort Macleod",
    image: "https://images.unsplash.com/photo-1572297999114-3e295f730d93?w=800",
    url: "https://www.nwmpmuseum.com",
  },
  {
    title: "Lundbreck Falls",
    town: "Crowsnest River",
    image: "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?w=800",
    url: "#",
  },
  {
    title: "Bellevue Underground Mine",
    town: "Bellevue",
    image: "https://images.unsplash.com/photo-1597075433537-b12b35e5bc43?w=800",
    url: "https://www.bellevuemine.com",
  },
  {
    title: "Frank Slide Interpretive Centre",
    town: "Frank",
    image: "https://images.unsplash.com/photo-1596884005406-8404deee2d65?w=800",
    url: "https://www.frankslide.ca",
  },
  {
    title: "Remington Carriage Museum",
    town: "Cardston",
    image: "https://images.unsplash.com/photo-1621416894569-80f91633a994?w=800",
    url: "https://www.remingtoncarriagemuseum.ca",
  },
  {
    title: "Waterton Lakes National Park",
    town: "Waterton",
    image: "https://images.unsplash.com/photo-1489619243109-4e0ea59cfe10?w=800",
    url: "https://parks.canada.ca/pn-np/ab/waterton",
  },
  {
    title: "Nikka Yuko Japanese Garden",
    town: "Lethbridge",
    image: "https://images.unsplash.com/photo-1546405755-c65633b50d19?w=800",
    url: "https://www.nikkayuko.com",
  },
  {
    title: "Fort Whoop-Up",
    town: "Lethbridge",
    image: "https://images.unsplash.com/photo-1561387381-9f8b3bdc95a3?w=800",
    url: "https://www.lethbridge.ca/arts-culture-events/attractions/fort-whoop-up",
  },
];

const transferServices = [
  {
    title: "Private Airport Transfers",
    description:
      "24/7 service, meet-and-greet, chilled water, luggage assistance.",
    image: "/images/Airport  pickup.png",
  },
  {
    title: "Game-Day Transfers",
    description:
      "Calgary or Edmonton pro games, tournaments up to fifteen passengers.",
    image: "/images/services/executive-service.jpg",
  },
  {
    title: "Sedan & SUV Shuttle",
    description:
      "Weddings, grads, stags & stagettes, birthdays, pub crawls (party bus coming soon).",
    image: "/images/luxury-sedan.jpg",
  },
];

const fleetVehicles = [
  {
    name: "Cadillac Escalade ESV",
    maxPassengers: 6,
    amenities: ["WiFi", "Heated Seats", "Premium Sound", "Privacy Glass"],
    image: "/images/fleet/cadillac-escalade-esv.jpg",
  },
  {
    name: "Mercedes Sprinter",
    maxPassengers: 14,
    amenities: ["WiFi", "Premium Audio", "TV Screens", "Climate Control"],
    image: "/images/fleet/mercedes-sprinter.jpg",
  },
  {
    name: "Executive Coach",
    maxPassengers: 24,
    amenities: ["WiFi", "Restroom", "Entertainment System", "Luxury Seating"],
    image: "/images/fleet/executive-coach.jpg",
  },
];

const testimonials = [
  {
    text: "The Banff & Lake Louise tour was absolutely amazing! Our driver was knowledgeable, professional, and made sure we got the perfect photos at each stop.",
    author: "Jennifer S., Calgary",
  },
  {
    text: "We took the Southern Alberta Heritage Loop for our anniversary and were blown away by the experience. The comfort of traveling in a luxury vehicle while seeing so many attractions was worth every penny.",
    author: "Michael and Patricia K., Edmonton",
  },
  {
    text: "As a history buff, I thoroughly enjoyed the Southern Alberta Heritage Loop. Our driver had incredible knowledge about each location and made the experience so much richer.",
    author: "David L., Vancouver",
  },
];

export default function ToursAndExperiencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heritageSchema) }}
      />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover"
            >
              <source src="/images/Banff_Video_Ready.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow-lg"
            data-aos="fade-up"
          >
            <span className="text-primary">Exclusive Mountain &</span>
            <br /> Heritage Tours
          </h1>
          <div
            className="h-1 w-32 bg-primary mx-auto my-8 shadow-glow"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
            <Link
              href="/booking"
              className="btn-primary text-center text-xl py-5 px-12 rounded-md shadow-glow transform transition-all hover:scale-105 hover:shadow-glow-lg"
            >
              Reserve Your Seat
            </Link>
          </div>
        </div>
      </div>

      {/* Signature Day Tours */}
      <section className="bg-secondary-dark py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-serif font-bold mb-6"
              data-aos="fade-up"
            >
              Signature <span className="text-primary">Day Tours</span>
            </h2>
            <div
              className="h-1 w-24 bg-primary mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Banff & Lake Louise Explorer */}
            <div
              className="bg-secondary rounded-lg overflow-hidden shadow-xl border border-primary/10"
              data-aos="fade-up"
            >
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">
                  Banff & Lake Louise Explorer
                </h3>

                {/* Timeline */}
                <div className="mb-10">
                  <div className="relative pb-8">
                    {banffItinerary.map((item, index) => (
                      <div key={index} className="relative pb-6">
                        <div className="flex items-start">
                          <div className="flex flex-col items-center mr-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-secondary-dark font-medium">
                              {index + 1}
                            </div>
                            {index < banffItinerary.length - 1 && (
                              <div className="w-px h-full bg-primary/30 mt-1" />
                            )}
                          </div>
                          <div className="bg-secondary-light p-4 rounded-lg shadow-inner border border-primary/10 w-full">
                            <div className="font-bold text-primary">
                              {item.time}
                            </div>
                            <div className="text-gray-300">{item.activity}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alternate Loop */}
                <div className="mb-10 bg-secondary-light p-6 rounded-lg shadow-inner border border-primary/10">
                  <h4 className="text-xl font-serif mb-4 text-primary">
                    Alternate photo-focused loop
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {alternateLoop.map((location, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center bg-secondary border border-primary/30 px-3 py-1 rounded-md text-gray-300"
                      >
                        <svg
                          className="h-4 w-4 text-primary mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                        </svg>
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Link
                    href="/booking?tour=banff-lake-louise"
                    className="btn-primary"
                  >
                    Book the Banff Explorer
                  </Link>
                </div>
              </div>
            </div>

            {/* Southern Alberta Heritage Loop */}
            <div
              className="bg-secondary rounded-lg overflow-hidden shadow-xl border border-primary/10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">
                  Southern Alberta Heritage Loop
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {heritageAttractions.map((attraction, index) => (
                    <a
                      key={index}
                      href={attraction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg overflow-hidden shadow-md border border-primary/10 transform transition-all duration-300 hover:scale-105 hover:shadow-glow-lg group"
                    >
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={attraction.image}
                          alt={attraction.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                      </div>
                      <div className="p-3 bg-secondary-light">
                        <h4 className="text-sm font-medium text-white truncate">
                          {attraction.title}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {attraction.town}
                        </p>
                        <div className="mt-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link
                    href="/booking?tour=heritage-loop"
                    className="btn-primary"
                  >
                    Book the Heritage Loop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Transfers & Charters */}
      <section className="py-24 bg-gradient-to-b from-secondary to-secondary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-serif font-bold mb-6"
              data-aos="fade-up"
            >
              Custom <span className="text-primary">Transfers & Charters</span>
            </h2>
            <div
              className="h-1 w-24 bg-primary mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {transferServices.map((service, index) => (
              <div
                key={index}
                className="relative h-96 rounded-lg overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link
                    href={`/booking?service=${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="btn-secondary self-start"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Highlight */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              data-aos="fade-up"
            >
              Our <span className="text-primary">Luxury Fleet</span>
            </h2>
            <div
              className="h-1 w-24 bg-primary mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            ></div>
          </div>

          <div
            className="flex overflow-x-auto pb-8 gap-8 hide-scrollbar"
            data-aos="fade-up"
          >
            {fleetVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-secondary-dark rounded-lg overflow-hidden shadow-xl border border-primary/10"
              >
                <div className="relative h-48">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-gray-300">
                      Up to {vehicle.maxPassengers} passengers
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="text-xs bg-secondary px-2 py-1 rounded-md text-gray-400"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why travel with Lux Limo */}
      <section className="py-24 bg-secondary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Why Travel with <span className="text-primary">Lux Limo</span>
              </h2>
              <div className="h-1 w-24 bg-primary mb-8"></div>

              <div className="space-y-6 text-gray-300">
                <p>
                  At Lux Limousine, we transform ordinary journeys into
                  extraordinary experiences. Our luxury tours combine elegance,
                  comfort, and personalized service to create unforgettable
                  memories of Alberta&apos;s most breathtaking destinations.
                </p>

                <ul className="space-y-3">
                  {[
                    "Expert local guides with deep knowledge of the region",
                    "Luxurious, climate-controlled vehicles for maximum comfort",
                    "Flexible itineraries tailored to your preferences",
                    "Premium refreshments and amenities on board",
                    "Convenient hotel pickup and drop-off service",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href="/about"
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    Learn more about our company
                    <svg
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-4/5 w-4/5 border-2 border-primary/20 rounded-lg"></div>
              </div>

              <div className="bg-secondary rounded-lg shadow-xl p-8 relative">
                <div className="absolute top-4 left-4">
                  <svg
                    className="h-12 w-12 text-primary/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
                  </svg>
                </div>

                <div className="pt-10 space-y-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`${
                        index < testimonials.length - 1
                          ? "border-b border-gray-800 pb-8"
                          : ""
                      }`}
                    >
                      <p className="italic text-gray-300 mb-4">
                        {testimonial.text}
                      </p>
                      <p className="text-primary font-medium">
                        {testimonial.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Enquiry Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-secondary-dark bg-opacity-90 border-t border-primary/20 p-4 z-40 backdrop-blur-sm hidden md:block">
        <div className="container mx-auto flex justify-center gap-6">
          <Link
            href="tel:4036058133"
            className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call
          </Link>
          <a
            href="https://wa.me/4036058133"
            className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <Link
            href="/booking?tour=instant-quote"
            className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Instant Quote
          </Link>
        </div>
      </div>

      {/* Mobile floating action button */}
      <div className="md:hidden fixed bottom-8 right-8 z-50">
        <div className="p-4 bg-primary rounded-full shadow-glow-lg">
          <svg
            className="h-6 w-6 text-secondary-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
