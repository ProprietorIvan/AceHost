import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  Shield,
  Home,
  Clock,
  Users,
  Settings,
  Sparkles,
} from "lucide-react";

// FAQ section interface
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can I Rent my Property with AceHost?",
    answer:
      "Yes, if your property is zoned for nightly rentals and meets our quality standards for luxury vacation rentals. We&apos;ll help you determine if your property qualifies during our initial consultation.",
  },
  {
    question: "What management fee do you charge?",
    answer:
      "Our management fee structure is tailored to each property based on factors like location, size, and amenities. We typically work on a percentage of rental income. Contact us for a personalized rate quote.",
  },
  {
    question: "What are the benefits working with AceHost?",
    answer:
      "Working with AceHost provides you with expert property management, premium marketing on multiple platforms, Airbnb SuperHost status, access to high-end travelers through our exclusive network, professional photography, VIP concierge services for guests, detailed reporting, and a completely hands-off rental experience.",
  },
  {
    question:
      "Are the AceHost luxury vacation rental homes in Whistler professionally cleaned and maintained?",
    answer:
      "Absolutely. We work with professional cleaning teams and property maintenance specialists to ensure every property is impeccably presented before each guest arrival and properly maintained throughout the year.",
  },
];

// Steps in the process
interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Contact Us",
    description:
      "Contact us today. In the meantime, please send us any videos or photos you have of your property, along with some basic information. Ex. Bedroom layout, bathrooms, your rental preferences, etc... Not sure if your property is zoned for nightly rentals? Send us your address and we can help find out for you.",
    icon: MessageSquare,
  },
  {
    number: 2,
    title: "Book a meeting | Show us your home!",
    description:
      "At AceHost we carefully select properties for our portfolio that will appeal to our network of global guests. We would love to see your home and help with any necessary advice or recommendations with regards to home improvements, staging, supplying, etc...",
    icon: Home,
  },
  {
    number: 3,
    title: "Property Assessment & Strategy",
    description:
      "We will assess your property, suggest optimal nightly rental rates and provide a personalized marketing strategy.",
    icon: Settings,
  },
  {
    number: 4,
    title: "Join the AceHost Team",
    description:
      "Call, email, or meet in-person to discuss the terms of your contract. Welcome to the AceHost team! We will arrange a professional photographer and handle all subsequent rentals, guests, cleaning teams, payout information, etc...",
    icon: Users,
  },
];

// Features section
interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "The AceHost Brand",
    description:
      "At AceHost, we strive to build trust and longevity with homeowners. Property management can be a time consuming and stressful feat. AceHost&apos;s rental expertise and quality assurance offers a solution to homeowners, yielding hassle-free and profitable property rental income.",
    icon: Star,
  },
  {
    title: "Luxury Is Our Focus",
    description:
      "We specialize in the management of luxury homes in Whistler. From small condos to luxurious multi-million dollar villas, we deliver first-rate property management for a wide range of homes. AceHost focuses on accommodating luxury homes with full service guest management and cleans, while offering VIP Concierge services, giving homeowners peace of mind in knowing that their home and guests are being looked after with diligence and care.",
    icon: Sparkles,
  },
  {
    title: "Our Relationships",
    description:
      "Our value driver is creating meaningful and lasting relationships with homeowners. We&apos;ve established a business model that relies on clear and frequent communication. Though we are home to Whistler, we have instilled confidence in homeowners and therefore have expanded our services to The United States, The United Kingdom, Spain, Greece, and Mexico. We offer a hands-off experience for homeowners both locally, but also overseas.",
    icon: Users,
  },
];

const reasonsSections = [
  {
    title: "The AceHost Team",
    description:
      "Our boutique and professional team has over 15 years of experience in luxury hospitality. AceHost&apos;s refined industry knowledge and high guest & homeowner retention rates set us apart from our competitors. After just under 4 years of business, we can confidently say that we are the fastest growing luxury vacation rental management company in Whistler.",
  },
  {
    title: "Listing & Marketing Strategies",
    description:
      "We are not your average Airbnb management company. Our elevated marketing strategies give homeowners access to additional exposure:",
    bulletPoints: [
      "Airbnb Super Host Status",
      "VRBO Premier Status",
      "Strong relationships with thousands of High-End Travel Agents & Partners",
      "High Google Search Ranking - AceHost ranks high on google search for travels and their agents. Benefit in additional bookings by having your home listed on our site.",
      "Access to a vast network of Returning Guests - Because of the level of service we provide, we have many returning guests looking to book the same or other properties through us. Increase your bookings by offering your home to our loyal returning travellers.",
      "Ad Spending on numerous platforms (no cost to owner)",
      "Social Media Presence",
      "Referrals and Introductions from locals and local businesses",
    ],
  },
  {
    title: "Returning Guest Satisfaction",
    description:
      "Homeowners can benefit from AceHost&apos;s portfolio of returning guests. Our services go above and beyond at no cost to travellers, ensuring that trusted customer base has consistently had their expectations exceeded. We believe in building long term relationships with guests and using their feedback to understand how we can improve their next visit to Whistler. Referrals from past guests who have experienced AceHost hospitality contribute to our growing network of new customers.",
  },
  {
    title: "Hands-Off Homeowner Experience",
    description:
      "We reduce homeowner responsibilities by creating a hands-off rental experience where we take care of all aspects of guest accommodation. AceHost takes an individual approach with property check-ins, check-outs, sweeps for damage, familiarizing guests with each home to ensure that their stay is comfortable.",
  },
  {
    title: "Rental Flexibility",
    description:
      "We understand that rental flexibility is important to homeowners. Depending on homeowner preference, AceHost can adapt to homeowner calendars on year-round basis, seasonally, or for select dates. We are happy to create a personally-curated property rental schedule that works for you and your family.",
  },
  {
    title: "Property Care",
    description:
      "Property care is of upmost priority at AceHost. We carefully inspect all properties before guest arrival and after their departure. Under our supervision, our teams of professional housekeepers are committed to providing a high-quality standard of cleanliness. We regularly visit our homes to ensure that everything is in working order and ready for guest arrival.",
  },
  {
    title: "VIP Concierge Services",
    description:
      "Our luxury hospitality services offer a well curated stay for all guests, ensuring that their Whistler experience is comfortable and entertaining. Our high-end homes are typically staffed with hosts and chefs, giving homeowners a peace of mind that their home is looked after. Included Concierge Services help increase bookings and increase the likelihood of recurring bookings from past guests.",
  },
  {
    title: "Investment Property Consultations",
    description:
      "Are you looking to buy an investment rental property in Whistler? It can be difficult to choose a location for your short term rental property in Whistler, as there are a wide range of neighbourhoods all offering different benefits. At AceHost, we provide one-on-one property consultations to ensure that you are choosing the best luxury property for your needs and investment goals. Whether you want a ski-in ski-out feature, closer proximity to the village, questions about bedrooms, or specific home amenities such as a hot tub or spa facilities, AceHost&apos;s knowledge of luxury investment homes can offer a wide selection of homes.\n\nWe are more than happy to introduce you to our favourite, honest, and hard working local realtors. We will also give you estimates on rental income based on the property, location, bedroom layout etc... We will also give you ideas on what you can do to improve your home to appeal to a larger audience of guests, allowing you to increase your rates, earn more income, and provide more value to your guests.\n\nWe are in the business and we know it well. We can help!",
  },
];

const ListProperty = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>List Your Property | AceHost Whistler Property Management</title>
        <meta
          name="description"
          content="List your luxury property with AceHost and benefit from our premium property management services in Whistler. Maximize your rental income with our expertise."
        />
      </Head>

      <Navigation />

      {/* Hero Section - Full height with gradient overlay and centered content */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <Image
          src="/photos/homepage/WhistlerVacationRental.jpg"
          alt="Luxury Whistler Property"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Luxury Whistler Property
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed font-light">
            AceHost offers vacation rental property management services in
            Whistler, specializing in luxury homes. We handle everything from
            guest management to property maintenance, leveraging our exclusive
            marketing strategies to maximize your bookings.
          </p>
          <Link
            href="#contact"
            className="bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            List Your Property
          </Link>
        </div>
      </div>

      {/* Core Values/Features - Clean cards with icons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose AceHost?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide unparalleled property management services for luxury
              homes in Whistler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                    <feature.icon size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps - Timeline style with large numbers */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple process to get your property listed and earning income.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col md:flex-row items-start md:items-center"
              >
                <div className="md:w-1/4 flex flex-col items-center mb-8 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold mb-4">
                    {step.number}
                  </div>
                  <step.icon size={28} className="text-gray-400" />
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The AceHost Difference - Two column grid with clean cards */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The AceHost Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why property owners choose AceHost for their luxury
              rental management needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {reasonsSections.slice(0, 4).map((section, index) => (
              <div
                key={index}
                className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {section.description}
                </p>

                {section.bulletPoints && (
                  <ul className="space-y-3 mt-6">
                    {section.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {reasonsSections.slice(4).map((section, index) => (
              <div
                key={index}
                className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean accordion style */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We&apos;ve got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="w-full px-8 py-6 text-left font-medium text-xl flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    {activeAccordion === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                {activeAccordion === index && (
                  <div className="px-8 py-6 border-t border-gray-100">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Modern, clean design */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to List Your Property?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today to start maximizing your property&apos;s rental
              potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <h3 className="text-3xl font-bold mb-10">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mr-6">
                      <Mail className="h-6 w-6" />
                    </div>
                    <a
                      href="mailto:ben@acehost.ca"
                      className="text-xl hover:text-black transition-colors"
                    >
                      ben@acehost.ca
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mr-6">
                      <Phone className="h-6 w-6" />
                    </div>
                    <a
                      href="tel:+16047648919"
                      className="text-xl hover:text-black transition-colors"
                    >
                      +1 604 764 8919
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mr-6">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <span className="text-xl">AceHost Whistler</span>
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-3xl font-bold mb-10">
                    What We Need From You
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">
                        Photos or videos of your property
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">
                        Bedroom and bathroom layout
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">
                        Your rental preferences (year-round, seasonal, etc.)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                      <span className="text-lg">
                        Property address to verify zoning for nightly rentals
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-gray-50 p-12 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold mb-10">Send Us a Message</h3>
              <form className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="property-address"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="property-address"
                    name="property-address"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                    placeholder="Tell us about your property..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-5 rounded-xl text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span>Submit</span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ListProperty;
