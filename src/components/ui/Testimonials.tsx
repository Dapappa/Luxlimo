"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Professional, prompt, and luxurious—Lux Limousine exceeded all our expectations for our corporate event. Highly recommended!",
    author: "David R.",
  },
  {
    content:
      "Lux Limousine Calgary made our wedding day truly unforgettable. The service was impeccable and the vehicle was stunning!",
    author: "Sarah & Michael T.",
  },
  {
    content:
      "Our prom night was magical thanks to Lux Limousine. The attention to detail and comfort made it a night to remember.",
    author: "Emily J.",
  },
  {
    content:
      "From booking to the ride itself, Lux Limousine provided top-notch service. Their reliability and class are unmatched.",
    author: "Jason K.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-secondary-dark section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            <span className="text-primary">TESTIMONIALS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            What Clients Say About Lux Limo Service
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1 bg-primary mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg border border-gray-800 hover:border-primary/30 transition-all"
            >
              <div className="mb-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 opacity-75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <p className="text-primary font-medium">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
