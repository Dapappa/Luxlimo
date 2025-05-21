import { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "G7 Summit Transfers | Lux Limousine Alberta",
  description:
    "Premium transportation services for G7 Summit events in Alberta. Secure, professional, and luxurious transport for delegates, staff, and attendees.",
};

export default function G7TransfersPage() {
  return (
    <main>
      <HeroSection
        title="G7 Summit Transfers"
        subtitle="Premium & Secure Transportation for Delegates and Events"
        imageSrc="/images/fleet/escalade.jpg"
        imageAlt="Cadillac Escalade for G7 Summit transportation"
      />

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-secondary-dark">
              Specialized G7 Summit Transportation Services
            </h2>

            <p className="text-lg mb-6 text-gray-700">
              Lux Limousine Alberta is proud to offer specialized transportation
              services for the G7 Summit events. Our fleet of luxury vehicles
              and professional chauffeurs are equipped to handle the unique
              requirements of diplomatic and high-profile transportation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-secondary-dark">
                  For Delegates & Officials
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Secure and confidential transport services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>
                      Experienced chauffeurs with diplomatic transport training
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Strict adherence to schedules and protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Luxury vehicles with privacy features</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-secondary-dark">
                  For Support Staff & Media
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Group transportation solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Equipment transport capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>
                      Flexible scheduling to accommodate changing itineraries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Dedicated coordinators for seamless logistics</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-secondary-dark">
              Our G7 Summit Transportation Commitment
            </h3>

            <p className="text-lg mb-6 text-gray-700">
              At Lux Limousine Alberta, we understand the significance and
              security considerations of G7 Summit events. Our services are
              designed to provide:
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Absolute discretion and professionalism</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Detailed coordination with security teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Flexible solutions for last-minute changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Comprehensive transportation logistics management</span>
              </li>
            </ul>

            <div className="bg-primary bg-opacity-10 p-6 rounded-lg border border-primary my-8">
              <h3 className="text-xl font-semibold mb-3 text-secondary-dark">
                Contact Our G7 Transportation Team
              </h3>
              <p className="mb-4 text-gray-700">
                For inquiries about our G7 Summit transportation services,
                please contact our dedicated team:
              </p>
              <div className="flex items-start mb-3">
                <div className="text-primary mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Phone:{" "}
                    <a
                      href="tel:+14036058133"
                      className="text-primary hover:underline"
                    >
                      1(403) 605-8133
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Available 24/7 for G7 summit transportation
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    Email:{" "}
                    <a
                      href="mailto:info@luxlimoservice.ca"
                      className="text-primary hover:underline"
                    >
                      info@luxlimoservice.ca
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Priority response for G7 inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
