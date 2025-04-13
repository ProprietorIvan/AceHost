import React, { useState } from "react";
import {
  ArrowRight,
  Instagram,
  Youtube,
  MapPin,
  Users,
  Bed,
  Bath,
} from "lucide-react";
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
  const [locationFilter, setLocationFilter] = useState("whistler"); // Default to Whistler

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

  const featuredProperties = [
    {
      name: "Altitude Retreat | Kadenwood | Private Butler",
      image: "/photos/properties/altitude-retreat.jpg",
      guests: 18,
      bedrooms: 7,
      beds: 9,
      bathrooms: 5.5,
      priceRange: "$7,500-$10,000 +",
      winterPrice: "$8,000-$10,000+ Nightly | Winter",
      holidayPrice: "$14,500-$19,000 Nightly | Christmas & NY",
    },
    {
      name: "Two Cedars | Kadenwood | Private Butler",
      image: "/photos/properties/two-cedars.jpg",
      guests: 17,
      bedrooms: 7,
      beds: 12,
      bathrooms: 8.5,
      priceRange: "$6,500-$9,500+",
      winterPrice: "$8,500-$10,000+ Nightly | Winter",
      holidayPrice: "$17,500-$21,000+ Nightly | Christmas & NY",
    },
    {
      name: "Chalet La Forja | Kadenwood | Private Butler",
      image: "/photos/properties/chalet-la-forja.jpg",
      guests: "12+4",
      bedrooms: 7.5,
      beds: 15,
      bathrooms: 8,
      priceRange: "$7,000-11,000+ | Private Butler Included",
      winterPrice: "$8500-$11,000+ Nightly | Winter",
      holidayPrice: "$16,000-$21,000+ Nightly | Christmas & NY",
    },
  ];

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
      image: "/photos/sections/luxury-homes.jpg",
    },
    {
      title:
        "Whistler Vacation Rental Property Management Services with AceHost",
      description:
        "AceHost offers vacation rental property management services in Whistler, specializing in, but not limited to, luxury homes. We handle everything from guest management to property maintenance, while leveraging our Airbnb SuperHost & Premier VRBO status, in addition to our unique and modern marketing strategies to increase your bookings.",
      linkText: "Property Management Services",
      image: "/photos/sections/property-management.jpg",
    },
    {
      title: "Whistler VIP Concierge Services",
      description:
        "AceHost&apos;s VIP Concierge services provide personalized holiday experiences, ensuring guests receive priority access to Whistler&apos;s top restaurants, activities, and events. The service covers everything from restaurant bookings to private chefs, in-home spa treatments, and adventure planning like heli-skiing or snowmobile tours. AceHost&apos;s local expertise and strong connections in town make each stay seamless and memorable, with round-the-clock availability to cater to any request.",
      linkText: "Concierge Services",
      image: "/photos/sections/concierge.jpg",
    },
  ];

  // Define all properties available
  const allProperties = [
    {
      id: "altitude-retreat-kadenwood-private-butler",
      name: "Altitude Retreat | Kadenwood | Private Butler",
      location: "Whistler, Canada",
      category: "whistler",
      image: "/photos/properties/altitude-retreat.jpg",
      guests: 18,
      bedrooms: 7,
      bathrooms: 5.5,
      priceRange: "$7,500-$10,000+",
      minStay: "3-4 nights | 7 during holidays",
      description:
        "Altitude Retreat is situated in the most prestigious ski-in ski-out neighbourhood in Whistler. Located just a stone's throw away from the exclusive Kadenwood residence only gondola makes this property the perfect location for your Whistler vacation!",
    },
    {
      id: "chalet-la-forja-kadenwood-private-butler",
      name: "Chalet La Forja | Kadenwood | Private Butler",
      location: "Whistler, Canada",
      category: "whistler",
      image: "/photos/properties/chalet-la-forja.jpg",
      guests: 16,
      bedrooms: 7.5,
      bathrooms: 8,
      priceRange: "$7,000-$11,000+",
      minStay: "3-4 nights | 7 during holidays",
      description:
        "Chalet La Forja is a true masterpiece of mountain luxury. This extraordinary ski-in/ski-out chalet offers unparalleled alpine views and a sophisticated living space designed for the ultimate Whistler vacation experience.",
    },
    {
      id: "dream-log-chalet-5-bedroom-4-bath-creekside",
      name: "Dream Log Chalet | 5 Bedroom | 4 Bath | Creekside",
      location: "Whistler, Canada",
      category: "whistler",
      image:
        "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00635.jpg",
      guests: 12,
      bedrooms: 5,
      bathrooms: 4,
      priceRange: "$11,500-$17,000 monthly",
      minStay: "90 night minimum",
      description:
        "Welcome to this charming traditional log chalet, located in a quiet residential family-friendly neighborhood in Bayshores, Whistler. This home features 5 bedrooms, 4 baths, and a large backyard with a professionally built treehouse.",
    },
    {
      id: "luxe-cozy-3-bed-whistler-village",
      name: "Luxe Cozy | 3 Bedroom | Whistler Village",
      location: "Whistler, Canada",
      category: "whistler",
      image: "/photos/properties/luxe-cozy.jpg",
      guests: 8,
      bedrooms: 3,
      bathrooms: 2,
      priceRange: "$650-$1,200+",
      minStay: "3-4 nights | 7 during holidays",
      description:
        "Luxurious and cozy 3-bedroom condo right in the heart of Whistler Village, walking distance to the gondolas and all amenities. Enjoy mountain views and premium finishes in this perfectly located retreat.",
    },
    {
      id: "heron-views-whistler-village",
      name: "Heron Views | Whistler Village",
      location: "Whistler, Canada",
      category: "whistler",
      image: "/photos/properties/heron-views.jpg",
      guests: 6,
      bedrooms: 2,
      bathrooms: 2,
      priceRange: "$500-$1,000+",
      minStay: "3 nights minimum",
      description:
        "Heron Views offers a stunning Whistler Village location with beautiful views of the surrounding mountains. This modern 2-bedroom condo is ideally situated for both summer and winter activities.",
    },
    {
      id: "falcon-blueberry-drive",
      name: "Falcon | Blueberry Drive",
      location: "Whistler, Canada",
      category: "whistler",
      image: "/photos/properties/falcon.jpg",
      guests: 10,
      bedrooms: 4,
      bathrooms: 3.5,
      priceRange: "$1,200-$3,000+",
      minStay: "3 nights minimum",
      description:
        "Falcon is a luxurious 4-bedroom chalet located on prestigious Blueberry Drive. Offering spectacular views and premium amenities including a hot tub and gourmet kitchen, it's perfect for families and groups.",
    },
  ];

  // Filter properties based on location
  const filteredProperties = allProperties.filter(
    (property) => property.category === locationFilter
  );

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

        {/* Properties Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Luxury Properties</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our exclusive collection of luxury vacation rental
                properties, each offering premium amenities and exceptional
                locations.
              </p>

              {/* Location Filter Tabs */}
              <div className="flex justify-center mt-8 border-b border-gray-200">
                <button
                  className={`px-6 py-3 font-medium text-lg border-b-2 ${
                    locationFilter === "whistler"
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setLocationFilter("whistler")}
                >
                  Whistler Properties
                </button>
                <button
                  className={`px-6 py-3 font-medium text-lg border-b-2 ${
                    locationFilter === "vancouver"
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setLocationFilter("vancouver")}
                >
                  Vancouver Properties
                </button>
                <button
                  className={`px-6 py-3 font-medium text-lg border-b-2 ${
                    locationFilter === "worldwide"
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setLocationFilter("worldwide")}
                >
                  Worldwide Properties
                </button>
              </div>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Link
                  key={property.id}
                  href={`/listings/${property.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64">
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition-colors">
                        {property.name}
                      </h3>
                      <div className="flex items-center text-gray-500 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-700">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{property.guests} guests</span>
                        </div>
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          <span>{property.bedrooms} beds</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          <span>{property.bathrooms} baths</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {property.description}
                      </p>
                      <div className="text-sm text-gray-500">
                        <div className="font-medium">
                          Price Range: {property.priceRange}
                        </div>
                        <div>Min Stay: {property.minStay}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No properties available in this location yet. Please check
                  back soon!
                </p>
              </div>
            )}

            <div className="text-center mt-10">
              <Link
                href="/properties"
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                <span>View All Properties</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
              <div className="flex justify-center space-x-4 mt-8">
                <button className="px-6 py-2 border-b-2 border-gray-900 text-gray-900 font-medium">
                  View All
                </button>
                <button className="px-6 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors">
                  Whistler Properties
                </button>
                <button className="px-6 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors">
                  Vancouver Properties
                </button>
                <button className="px-6 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors">
                  Worldwide
                </button>
                <button className="px-6 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors">
                  Pets Allowed
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {featuredProperties.map((property, index) => (
                <div
                  key={index}
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
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                        Book Now
                      </button>
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
                      href="/properties"
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

        <Footer />
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
