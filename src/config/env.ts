// Environment configuration for Lux Limousine
// These values should be configured in your EmailJS dashboard

// EmailJS Configuration
export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_7ycp8am";
export const EMAILJS_TEMPLATE_ID_CONTACT =
  process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_contact";
export const EMAILJS_TEMPLATE_ID_BOOKING =
  process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID || "template_booking";
export const EMAILJS_TEMPLATE_ID_DISCOUNT =
  process.env.NEXT_PUBLIC_EMAILJS_DISCOUNT_TEMPLATE_ID || "template_discount";
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "X4goMuhq2bljUJbgv";

// Contact Information
export const CONTACT_EMAIL = "info@luxlimoservice.ca";
export const BUSINESS_PHONE = "(403) 605-8133";
export const BUSINESS_NAME = "Lux Limousine Service";
