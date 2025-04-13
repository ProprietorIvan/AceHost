import React, { useState } from "react";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home = () => {
  const { t } = useTranslation("common");
  const [activeFilter, setActiveFilter] = useState("whistler"); // Set Whistler as default

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AceHost",
    description:
      "Luxury Vacation Rental Properties in Whistler Canada | Property Management & VIP Concierge Services",
    url: "https://acehost.ca",
    logo: "https://acehost.ca/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Whistler",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.instagram.com/acehost",
      "https://www.youtube.com/acehost",
    ],
    offers: {
      "@type": "Offer",
      description: "Luxury Vacation Rental Properties in Whistler Canada",
      areaServed: "Whistler, British Columbia",
    },
  };

  // Define all property listings
  const allListings = [
    {
      id: "altitude-retreat-kadenwood",
      name: "Altitude Retreat | Kadenwood | Private Butler",
      image: "/photos/properties/Altitude New Photos Best/hero2.jpeg",
      guests: 18,
      bedrooms: 7,
      beds: 9,
      bathrooms: 5.5,
      priceRange: "$7,500-$10,000 +",
      winterPrice: "$8,000-$10,000+ Nightly | Winter",
      holidayPrice: "$14,500-$19,000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/altitude-retreat-kadenwood",
    },
    {
      id: "chalet-la-forja-kadenwood",
      name: "Chalet La Forja | Kadenwood | Private Butler",
      image: "/photos/properties/Chalet La Forja/hero00001.jpg",
      guests: "12+4",
      bedrooms: 7.5,
      beds: 15,
      bathrooms: 8,
      priceRange: "$7,000-11,000+ | Private Butler Included",
      winterPrice: "$8500-$11,000+ Nightly | Winter",
      holidayPrice: "$16,000-$21,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/chalet-la-forja-kadenwood",
    },
    {
      id: "dream-log-chalet",
      name: "Dream Log Chalet | 5 Bedroom | 4 Bath | Creekside",
      image:
        "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00575-Edit.jpg",
      guests: 12,
      bedrooms: 5,
      beds: 7,
      bathrooms: 4,
      priceRange: "$13,000-$17,000/month",
      winterPrice: "$17,000/month | Winter",
      holidayPrice: "$11,500/month | Summer",
      location: "whistler",
      link: "/listings/dream-log-chalet-5-bedroom-4-bath-creekside",
    },
    {
      id: "falcon-blueberry",
      name: "Falcon Blueberry Drive | 3 Bedroom | 3 Bath",
      image: "/photos/properties/Falcon/01-3595 Falcon Cres-01.jpg",
      guests: 8,
      bedrooms: 3,
      beds: 4,
      bathrooms: 3,
      priceRange: "$450-$950 +",
      winterPrice: "$750-$950+ Nightly | Winter",
      holidayPrice: "$1,200-$1,500 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/falcon-blueberry-drive",
    },
    {
      id: "heron-views",
      name: "Heron Views | Whistler Village | 1 Bedroom",
      image: "/photos/properties/3445-Heron-Place/01-3445 Heron Place 01.jpg",
      guests: 4,
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      priceRange: "$250-$450 +",
      winterPrice: "$350-$450+ Nightly | Winter",
      holidayPrice: "$550-$650 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/heron-views-whistler-village",
    },
    {
      id: "luxe-cozy",
      name: "Luxe Cozy | 3 Bedroom | Whistler Village",
      image:
        "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 2,
      priceRange: "$350-$650 +",
      winterPrice: "$550-$650+ Nightly | Winter",
      holidayPrice: "$850-$950 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/luxe-cozy-3-bed-whistler-village",
    },
  ];

  // Filter properties based on active filter
  const filteredListings =
    activeFilter === "all"
      ? allListings
      : allListings.filter((listing) => listing.location === activeFilter);

  const faqItems = [
    {
      question: "Is there a minimum stay requirement for Acehost properties?",
      answer:
        "To ensure our guests can fully enjoy our luxurious properties and all the amenities and services we offer, as well as meet the owner&apos;s requirements for renting out their home, we have established a minimum stay requirement. The duration may vary depending on the property and rules, but typically it is a 3-4 night minimum stay. During major holidays such as Christmas, New Year&apos;s and Presidents Day week, a 6 or 7-night minimum stay may be required. However, we understand that circumstances may vary, and flexibility is possible in many cases. Please feel free to contact us to discuss your specific needs and requirements. We will do our best to accommodate you.",
    },
    {
      question:
        "Can I find pet-friendly luxury rental vacation homes in Whistler on AceHost.ca?",
      answer:
        "At AceHost, we recognize the significance of pets in many families, and we are delighted to offer a selection of pet-friendly luxury rental homes in Whistler. To make your search for the perfect pet-friendly luxury rental home in Whistler as seamless as possible, we have implemented a user-friendly filter on our website. When searching for properties, you can simply select the pet-friendly filter, and our website will display all the available options that welcome pets. It is important to note that while we strive to provide the best accommodations for pet owners, some additional fees or deposits may apply for pet-friendly properties. These charges help ensure that the homes are properly maintained and cleaned after each guest and that any potential damages caused by pets can be addressed.",
    },
    {
      question: "Is there a fee for early check-in or late checkout?",
      answer:
        "No, we are very flexible and lenient on check-in and checkout timings at no additional cost. As long as the place is clean and there are no checkouts that day, we are more than happy to accommodate an early check-in. Please contact us with your desired time, and we will try our best to accommodate your needs. We understand the importance of convenience and want to ensure that your travel plans are as stress-free as possible.",
    },
    {
      question:
        "What amenities can I expect in a luxury vacation rental home in Whistler from AceHost.ca?",
      answer:
        "When booking a luxury vacation rental through AceHost you can expect an array of top-of-the-line amenities. Including fully equipped gourmet kitchens and butler&apos;s pantries perfect for staff use. Wellness facilities include private hot tubs, heated pools, saunas, steam showers and dedicated massage rooms. Enjoy the convenience of state-of-the-art entertainment systems and premium linens for maximum comfort.",
    },
    {
      question:
        "What is the cancellation policy for booking a luxury vacation rental home in Whistler with AceHost.ca?",
      answer:
        "Our cancellation policy can vary depending on the property and specific terms set out by the owner. Please carefully read the contract before making a booking. 1. Deposit Requirement: Typically, a 50% deposit is required to reserve the dates for your luxury vacation rental home. An additional 50% may be required 60 days prior to your arrival. 2. Cancellation Period: No cancellations are allowed within 60 days of your scheduled arrival. However, in some cases, dates can be potentially moved subject to mutual agreement. *In the event of a pandemic, restricting border control in Canada, with advance notice (subject to mutual agreement) we are happy to move dates.",
    },
  ];

  const sections = [
    {
      title: "View Our Collection of Luxury Chalet Rental Homes in Whistler",
      description:
        "AceHost offers a variety of luxury Airbnb vacation rental properties to choose from in Whistler, designed to provide guests with high-end, tailored experiences. Our chalets include VIP Concierge Services, premium amenities, stunning views, prime locations, often located in ski in ski out neighbourhoods, or near the slopes.",
      linkText: "Luxury Vacation Properties",
      image: "/photos/homepage/ViewOurCollection.jpg",
    },
    {
      title:
        "Whistler Vacation Rental Property Management Services with AceHost",
      description:
        "AceHost offers vacation rental property management services in Whistler, specializing in, but not limited to, luxury homes. We handle everything from guest management to property maintenance, while leveraging our Airbnb SuperHost & Premier VRBO status, in addition to our unique and modern marketing strategies to increase your bookings.",
      linkText: "Property Management Services",
      image: "/photos/homepage/WhistlerVacationRental.jpg",
    },
    {
      title: "Whistler VIP Concierge Services",
      description:
        "AceHost&apos;s VIP Concierge services provide personalized holiday experiences, ensuring guests receive priority access to Whistler&apos;s top restaurants, activities, and events. The service covers everything from restaurant bookings to private chefs, in-home spa treatments, and adventure planning like heli-skiing or snowmobile tours. AceHost&apos;s local expertise and strong connections in town make each stay seamless and memorable, with round-the-clock availability to cater to any request.",
      linkText: "Concierge Services",
      image: "/photos/homepage/WhistlerVipConcierge.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Luxury Vacation Rental Properties in Whistler Canada | AceHost
        </title>
        <meta
          name="description"
          content="AceHost offers luxury vacation rental properties in Whistler, Canada with premium amenities and VIP concierge services. Experience the ultimate in comfort and convenience."
        />
        <meta
          name="keywords"
          content="luxury rentals, Whistler properties, vacation rental, ski chalets, concierge services, property management"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Luxury Vacation Rental Properties in Whistler Canada | AceHost"
        />
        <meta
          property="og:description"
          content="AceHost offers luxury vacation rental properties in Whistler, Canada with premium amenities and VIP concierge services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acehost.ca" />
        <meta property="og:image" content="https://acehost.ca/og-image.jpg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Luxury Vacation Rental Properties in Whistler Canada | AceHost"
        />
        <meta
          name="twitter:description"
          content="AceHost offers luxury vacation rental properties in Whistler, Canada with premium amenities and VIP concierge services."
        />
        <meta
          name="twitter:image"
          content="https://acehost.ca/twitter-image.jpg"
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="relative py-16 bg-white">
          <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:w-1/2 lg:w-1/2 pr-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Luxury Vacation
                <br />
                Rental Properties in
                <br />
                Whistler Canada |<br />
                Property
                <br />
                Management & VIP
                <br />
                Concierge Services
              </h1>
              <p className="text-lg text-gray-700 mb-10 max-w-xl">
                AceHost is a leading Whistler luxury property management
                company. We proudly offer an array of magnificent vacation
                rental homes in Whistler, British Columbia. Offering a seamless
                experience for property owners looking to rent out their homes
                and earn, while offering guests the perfect vacation in a
                luxurious property. Explore our exclusive collection of luxury
                ski chalets, and ask us how we can make your next stay
                exceptional!
              </p>
              <Link
                href="/properties"
                className="inline-block bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
              >
                View Luxury Rental Properties
              </Link>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 lg:w-1/2">
              <div className="aspect-video w-full h-full overflow-hidden rounded-lg shadow-xl">
                <iframe
                  src="https://player.vimeo.com/video/1053582724?autoplay=1&loop=1&title=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="AceHost Whistler Concierge Experience"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6 h-48 relative overflow-hidden rounded-lg">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-gray-900">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <Link
                  href="/properties"
                  className="inline-block text-gray-900 font-medium border-b-2 border-gray-900 hover:border-gray-600 hover:text-gray-600 transition-colors"
                >
                  {section.linkText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-light mb-6 text-gray-900">
                View Our Full Collection Of Luxury Vacation Rental Properties
              </h2>
              <div className="flex justify-center flex-wrap space-x-2 mt-8">
                <button
                  className={`px-6 py-2 border-b-2 ${
                    activeFilter === "all"
                      ? "border-gray-900 text-gray-900 font-medium"
                      : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors"
                  }`}
                  onClick={() => setActiveFilter("all")}
                >
                  View All
                </button>
                <button
                  className={`px-6 py-2 border-b-2 ${
                    activeFilter === "whistler"
                      ? "border-gray-900 text-gray-900 font-medium"
                      : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors"
                  }`}
                  onClick={() => setActiveFilter("whistler")}
                >
                  Whistler Properties
                </button>
                <button
                  className={`px-6 py-2 border-b-2 ${
                    activeFilter === "vancouver"
                      ? "border-gray-900 text-gray-900 font-medium"
                      : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors"
                  }`}
                  onClick={() => setActiveFilter("vancouver")}
                >
                  Vancouver Properties
                </button>
                <button
                  className={`px-6 py-2 border-b-2 ${
                    activeFilter === "worldwide"
                      ? "border-gray-900 text-gray-900 font-medium"
                      : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors"
                  }`}
                  onClick={() => setActiveFilter("worldwide")}
                >
                  Worldwide
                </button>
                <button
                  className={`px-6 py-2 border-b-2 ${
                    activeFilter === "pets"
                      ? "border-gray-900 text-gray-900 font-medium"
                      : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors"
                  }`}
                  onClick={() => setActiveFilter("pets")}
                >
                  Pets Allowed
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredListings.map((property, index) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 right-4">
                      <Link
                        href={property.link}
                        className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-md">
                        {property.guests} Guests
                      </span>
                      <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
                        {property.bedrooms} Bedrooms
                      </span>
                      <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
                        {property.beds} Beds
                      </span>
                      <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
                        {property.bathrooms} Bathrooms
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-4 text-gray-900">
                      {property.name}
                    </h3>
                    <div className="space-y-2 mb-6">
                      <p className="text-gray-600">
                        Nightly Price Range: {property.priceRange}
                      </p>
                      <p className="text-gray-600">{property.winterPrice}</p>
                      <p className="text-gray-600">{property.holidayPrice}</p>
                    </div>
                    <Link
                      href={property.link}
                      className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
                    >
                      <span>View Property</span>
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-16 text-center text-gray-900">
                Have Questions? Here&apos;s a few FAQ&apos;s to help!
              </h2>

              <div className="space-y-8">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-8">
                    <h3 className="text-xl font-medium mb-4 text-gray-900 flex items-center justify-between">
                      {item.question}
                      <span className="text-gray-400">+</span>
                    </h3>
                    <div className="text-gray-600">{item.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between mb-16">
              <div className="mb-8 md:mb-0">
                <Link href="/" className="flex items-center mb-6">
                  <span className="text-4xl font-bold">AceHost</span>
                </Link>
                <p className="text-gray-600 max-w-xs mb-6">
                  AceHost is a leading Whistler luxury property management
                  company offering magnificent vacation rental homes in
                  Whistler, British Columbia.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/acehost"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://youtube.com/acehost"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-gray-900 font-medium mb-4">Properties</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/concierge"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Concierge Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/properties"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Luxury Properties
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/management"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Property Management
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-900 font-medium mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/blog"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        FAQ&apos;s
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-900 font-medium mb-4">Social</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://instagram.com/acehost"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/acehost"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <p className="text-gray-500 text-sm">
                © 2021 AceHost Whistler. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default Home;
