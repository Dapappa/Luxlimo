import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-secondary-dark pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Experience the epitome of luxury transportation with Lux Limousine
            Service. We pride ourselves on delivering exceptional service and
            unforgettable journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          <div>
            <div className="aspect-video bg-secondary rounded-lg overflow-hidden relative shadow-lg">
              <Image
                src="/images/Main logo image to use top left corner.webp"
                alt="Lux Limousine Luxury Fleet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-300 mb-4">
              At Lux Limousine Service, we have built our reputation on
              providing the most luxurious and reliable transportation service
              in Alberta. Our fleet stands unmatched with immaculate, thoroughly
              maintained vehicles featuring amenities that far exceed industry
              standards.
            </p>
            <p className="text-gray-300 mb-4">
              We understand that every client has unique needs, which is why we
              offer a personalized approach to our services. Whether you&apos;re
              traveling for business, celebrating a special occasion, or need
              airport transportation, our professional chauffeurs ensure your
              journey is smooth, comfortable, and punctual.
            </p>
            <p className="text-gray-300">
              Our service area extends throughout Alberta, including Calgary,
              Edmonton, Red Deer, Banff, Canmore, and Lethbridge, allowing us to
              provide our premium services to a wide range of clients across the
              province.
            </p>
          </div>
        </div>

        <div className="bg-secondary p-12 rounded-lg max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To provide the highest standard of luxury transportation
                services that exceed our clients&apos; expectations, ensuring
                every journey is characterized by elegance, comfort, safety, and
                punctuality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                Our Values
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0"
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
                  <span>Excellence in every aspect of our service</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0"
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
                  <span>Reliability and punctuality you can count on</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0"
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
                  <span>Safety and comfort as our top priorities</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0"
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
                  <span>Personalized service tailored to your needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-serif font-bold mb-6">
            Ready to Experience Luxury Transportation?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/booking" className="btn-primary">
              Book Now
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
