"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { 
  EMAILJS_SERVICE_ID, 
  EMAILJS_TEMPLATE_ID_CONTACT, 
  EMAILJS_PUBLIC_KEY, 
  CONTACT_EMAIL,
  BUSINESS_NAME 
} from "@/config/env";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
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
      // Prepare the email template parameters with professional formatting
      const templateParams = {
        // Email metadata
        to_email: CONTACT_EMAIL,
        from_name: data.name,
        reply_to: data.email,
        subject: `New Contact Inquiry - ${BUSINESS_NAME}`,
        
        // Customer information
        customer_name: data.name,
        customer_email: data.email,
        customer_phone: data.phone || "Not provided",
        
        // Message content
        message: data.message,
        
        // Professional email formatting
        business_name: BUSINESS_NAME,
        inquiry_type: "General Contact",
        submission_date: new Date().toLocaleDateString("en-CA", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Edmonton"
        }),
        
        // Professional footer information
        website: "https://luxlimoservice.ca",
        email_footer: `This inquiry was submitted through the ${BUSINESS_NAME} website contact form.`,
        
        // Follow-up instructions
        follow_up_instructions: `Please respond to this customer inquiry promptly. Customer contact details:\n• Email: ${data.email}\n• Phone: ${data.phone || "Not provided"}\n• Preferred contact method: Email`,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_CONTACT,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Contact form submitted successfully:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "An error occurred while sending your message. Please try again later or contact us directly at " + CONTACT_EMAIL
      );
      console.error("Error sending contact email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-secondary-dark/70 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
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
          <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
          <p className="text-gray-300 mb-6">
            Your message has been sent successfully. We&apos;ll get back to you
            soon.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-primary">
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>

          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
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
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("phone")}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-secondary-light border border-gray-700 rounded focus:outline-none focus:border-primary"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

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
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
