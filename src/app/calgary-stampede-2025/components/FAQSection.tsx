"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "Where can we drop you at Stampede Park?",
    answer:
      "We drop passengers at designated public entrances including the Main Gate, BMO Centre entrance, and Stampede Trail. During road closures, we use authorized drop-off zones. We are a transportation service only and do not provide special event access.",
  },
  {
    question: "Can you get us special access to events?",
    answer:
      "No, we are strictly a luxury transportation company. We ensure you arrive in comfort and style, but all event tickets and access must be arranged separately through official Stampede channels or venue box offices.",
  },
  {
    question: "Is alcohol allowed in vehicles?",
    answer:
      "Yes, passengers 18+ may consume alcohol in our vehicles. We provide complimentary ice and glassware. Please drink responsibly - our chauffeurs reserve the right to refuse service to intoxicated passengers for safety reasons.",
  },
  {
    question: "What&#39;s your cancellation policy?",
    answer:
      "Cancellations made 48+ hours before your ride receive a full refund. 24-48 hours: 50% refund. Less than 24 hours: no refund. We understand plans change during Stampede, so we offer one free rescheduling if space permits.",
  },
  {
    question: "Do prices surge during peak times?",
    answer:
      "Yes, rates increase during high-demand periods including post-fireworks (11:45 PM), after major concerts, and weekend nights. Book early to lock in better rates. All pricing is transparent at booking.",
  },
  {
    question: "Can we store items in the vehicle during events?",
    answer:
      "Yes! This is a popular service. Your chauffeur will secure your purchases, jackets, and personal items while you enjoy the events. Items remain locked in the vehicle until your return.",
  },
  {
    question: "Do you transport performing artists?",
    answer:
      "Yes! We&#39;ve proudly served numerous artists and their teams with discrete, professional service. We understand the unique needs of performers including equipment transport, tight schedules, and privacy requirements.",
  },
  {
    question: "Can we customize our route?",
    answer:
      "Absolutely! Our chauffeurs are familiar with all Stampede venues and can adjust routes on the fly. Whether you want to hit multiple parties or need to make unexpected stops, we accommodate your plans.",
  },
  {
    question: "What vehicles fit larger groups?",
    answer:
      "Our Mercedes Sprinter Jet-Van seats 12 comfortably, while our Luxury Limo-Bus accommodates up to 20 passengers. Both are perfect for corporate groups or friends traveling together.",
  },
  {
    question: "Do you provide child seats?",
    answer:
      "Yes, we can provide child seats upon request. Please specify the age and number of children when booking so we can ensure proper safety equipment is installed.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about Stampede transportation
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gold/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="mt-12 bg-gradient-to-r from-red-900/20 to-gold/20 rounded-lg p-8 border border-gold/30">
          <h3 className="text-2xl font-bold text-gold mb-4 text-center">
            Still Have Questions?
          </h3>
          <p className="text-gray-300 text-center mb-6">
            Our team is here to help you plan the perfect Stampede
            transportation experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1-403-605-8133"
              className="px-6 py-3 bg-gold text-black rounded-full font-bold hover:bg-gold/90 transition-all text-center"
            >
              Call 1(403) 605-8133
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-black text-gold border-2 border-gold rounded-full font-bold hover:bg-gold hover:text-black transition-all text-center"
            >
              Send us a Message
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
