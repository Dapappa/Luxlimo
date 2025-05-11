import Hero from "@/components/ui/Hero";
import Features from "@/components/ui/Features";
import Services from "@/components/ui/Services";
import Testimonials from "@/components/ui/Testimonials";
import ContactForm from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-dark">
      <Hero />

      <Features />

      <Services />

      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Seamless <span className="text-primary">Luxury</span> Awaits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover a world of effortless elegance with Lux Limousine
              Calgary. Our streamlined booking process and 24/7 support ensure
              your journey is as smooth and stylish as the ride itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-secondary-dark p-8 rounded-lg border border-gray-800">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-primary/10 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-primary"
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
              </div>
              <h3 className="text-primary text-xl font-bold text-center mb-4">
                Call Us For Booking
              </h3>
              <p className="text-2xl text-center font-bold mb-6">
                (403) 605-8133
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="text-primary text-3xl font-bold mb-1">
                    98%
                  </div>
                  <div className="text-gray-400 text-sm">
                    Instant Confirmation
                  </div>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="text-primary text-3xl font-bold mb-1">
                    100%
                  </div>
                  <div className="text-gray-400 text-sm">
                    24/7 Customer Support
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
