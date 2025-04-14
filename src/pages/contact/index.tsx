import React, { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import {
  MessageSquare,
  Home,
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Bed,
  Phone,
  Mail,
  ArrowRight,
  Star,
  MapPin,
  User,
  Calendar,
  Check,
  Building,
  Bath,
  Maximize,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

interface PropertyFeature {
  id: string;
  name: string;
  images: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: Feature[];
  location: string;
  sqm?: number;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Keyboard navigation for the gallery - removed
  useEffect(() => {
    // Clean up event listeners
    return () => {
      // No event listeners to clean up
    };
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us | AceHost Whistler</title>
        <meta
          name="description"
          content="Get in touch with AceHost Whistler for luxury property management services, vacation rentals, and VIP concierge services in Whistler."
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <Image
          src="/photos/homepage/pm/cedars full res.jpg"
          alt="AceHost Whistler Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
            Contact AceHost Whistler
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Get in touch with our team for luxury property management services,
            vacation rentals, and VIP concierge in Whistler.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:ben@acehost.ca"
                      className="text-lg text-gray-700 hover:text-black transition-colors"
                    >
                      ben@acehost.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <a
                      href="tel:+16047648919"
                      className="text-lg text-gray-700 hover:text-black transition-colors"
                    >
                      +1 604 764 8919
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-black mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Company</h3>
                    <p className="text-lg text-gray-700">AceHost Whistler</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Luxury Property Management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>VIP Concierge Services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Vacation Rental Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Investment Property Consultations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/acehost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-black transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/channel/acehost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-black transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-6 py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}

                {submitError && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-md">
                    There was an error sending your message. Please try again
                    later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet The Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team of property management professionals is
              dedicated to providing exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative w-full h-80 mb-6 rounded-md overflow-hidden">
                <Image
                  src="/photos/homepage/apartment1/terrasse-1733152883.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Ben Johnson</h3>
              <p className="text-gray-500 mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                With over 15 years of experience in luxury hospitality, Ben
                leads our team with passion and expertise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative w-full h-80 mb-6 rounded-md overflow-hidden">
                <Image
                  src="/photos/homepage/apartment2/004-photopetit-140323-1679310750.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Miller</h3>
              <p className="text-gray-500 mb-4">Property Manager</p>
              <p className="text-gray-600">
                Sarah ensures every property in our portfolio maintains the
                highest standards of quality and guest satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative w-full h-80 mb-6 rounded-md overflow-hidden">
                <Image
                  src="/photos/homepage/apartment2/057-photopetit-140323-1679310813.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
              <p className="text-gray-500 mb-4">Concierge Director</p>
              <p className="text-gray-600">
                Michael coordinates our VIP concierge services, creating
                unforgettable experiences for our guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience the AceHost difference?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Whether you&apos;re a property owner looking for management services
            or a traveler seeking a luxury stay in Whistler, we&apos;re here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/list-property"
              className="bg-white text-black px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              List Your Property
            </Link>
            <Link
              href="/properties"
              className="bg-transparent border border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-colors"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
