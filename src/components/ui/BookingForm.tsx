"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
// Import emailjs only when we have actual credentials to use
// import emailjs from "emailjs-com";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  pickup: string;
  dropoff: string;
  passengers: string;
  vehicle: string;
  specialRequests: string;
};

const vehicleOptions = [
  "Select Vehicle Type",
  "Luxury Sedan",
  "SUV",
  "Stretch Limousine",
  "Party Bus",
  "Executive Van",
];

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError("");

    try {
      // Log the data to console for development
      console.log("Booking submitted with data:", data);

      // This is where you'd normally configure your EmailJS with actual service/template IDs
      // You'll need to sign up for EmailJS and create a template
      // const templateParams = {
      //   from_name: data.name,
      //   reply_to: data.email,
      //   phone: data.phone,
      //   date: data.date,
      //   time: data.time,
      //   pickup: data.pickup,
      //   dropoff: data.dropoff,
      //   passengers: data.passengers,
      //   vehicle: data.vehicle,
      //   special_requests: data.specialRequests,
      //   to_email: "luxlimocontact@gmail.com" // The recipient email as specified
      // };

      // This is a placeholder - you need to replace with real EmailJS credentials
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');

      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "An error occurred while processing your booking. Please try again later or contact us directly."
      );
      console.error("Error sending booking:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-secondary-dark p-8 rounded-lg border border-gray-800">
      {isSubmitted ? (
        <div className="text-center py-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-primary mx-auto mb-4"
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
          <h3 className="text-2xl font-bold text-primary mb-2">
            Booking Received!
          </h3>
          <p className="text-gray-300 mb-6">
            Thank you for your booking request. We&apos;ll confirm your
            reservation shortly.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-primary">
            Make Another Booking
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-primary mb-6">
            Book Your Luxury Transportation
          </h3>

          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded text-red-200">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-300 mb-2">
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-300 mb-2">
                Date <span className="text-primary">*</span>
              </label>
              <input
                id="date"
                type="date"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-300 mb-2">
                Time <span className="text-primary">*</span>
              </label>
              <input
                id="time"
                type="time"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("time", { required: "Time is required" })}
              />
              {errors.time && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.time.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="pickup" className="block text-gray-300 mb-2">
                Pickup Location <span className="text-primary">*</span>
              </label>
              <input
                id="pickup"
                type="text"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("pickup", {
                  required: "Pickup location is required",
                })}
              />
              {errors.pickup && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.pickup.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="dropoff" className="block text-gray-300 mb-2">
                Dropoff Location <span className="text-primary">*</span>
              </label>
              <input
                id="dropoff"
                type="text"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("dropoff", {
                  required: "Dropoff location is required",
                })}
              />
              {errors.dropoff && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.dropoff.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="passengers" className="block text-gray-300 mb-2">
                Number of Passengers <span className="text-primary">*</span>
              </label>
              <input
                id="passengers"
                type="number"
                min="1"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("passengers", {
                  required: "Number of passengers is required",
                })}
              />
              {errors.passengers && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.passengers.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="vehicle" className="block text-gray-300 mb-2">
                Vehicle Type <span className="text-primary">*</span>
              </label>
              <select
                id="vehicle"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("vehicle", {
                  required: "Vehicle type is required",
                  validate: (value) =>
                    value !== "Select Vehicle Type" ||
                    "Please select a vehicle type",
                })}
              >
                {vehicleOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.vehicle && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.vehicle.message}
                </p>
              )}
            </div>

            <div className="mb-4 md:col-span-2">
              <label
                htmlFor="specialRequests"
                className="block text-gray-300 mb-2"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                rows={4}
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("specialRequests")}
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Book Now"
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
