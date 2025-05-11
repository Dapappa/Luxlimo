import BookingForm from "@/components/ui/BookingForm";

export default function BookingPage() {
  return (
    <div className="bg-secondary-dark pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Book Your <span className="text-primary">Luxury</span>{" "}
            Transportation
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Experience the pinnacle of comfort and style with our premium
            limousine services. Complete the form below to reserve your journey
            with Lux Limousine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-medium mb-6">
            Prefer to book by phone?
          </h3>
          <div className="flex flex-col items-center">
            <p className="text-primary text-lg md:text-xl font-bold">
              Call us at
            </p>
            <p className="text-2xl md:text-3xl font-bold mb-4">
              (403) 605-8133
            </p>
            <p className="text-gray-400">
              We&apos;re available 24/7 to assist with your booking needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
