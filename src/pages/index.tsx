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
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
      id: "altitude-retreat",
      name: "Altitude Retreat | Kadenwood | Private Butler",
      image: "/photos/properties/Altitude New Photos Best/hero2.jpeg",
      guests: 18,
      bedrooms: 7,
      beds: 9,
      bathrooms: 5.5,
      priceRange: "$7,500-$10,000+",
      winterPrice: "$8,000-$10,000+ Nightly | Winter",
      holidayPrice: "$14,500-$19,000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/altitude-retreat-kadenwood",
    },
    {
      id: "two-cedars",
      name: "Two Cedars | Kadenwood | Private Butler",
      image: "/photos/properties/Two Cedars New/OSA_AncientCW1002 Panorama.jpg",
      guests: 17,
      bedrooms: 7,
      beds: 12,
      bathrooms: 8.5,
      priceRange: "$6,500-$9,500+",
      winterPrice: "$8,500-$10,000+ Nightly | Winter",
      holidayPrice: "$17,500-$21,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/two-cedars-kadenwood",
    },
    {
      id: "chalet-la-forja",
      name: "Chalet La Forja | Kadenwood | Private Butler",
      image: "/photos/properties/Chalet La Forja/hero00001.jpg",
      guests: 16,
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
      id: "slopeside-villa",
      name: "Slope Slide Chalet | Kadenwood",
      image:
        "/photos/properties/Slopeside Kadenwood/01-2945 Kadenwood Dr 01.jpg",
      guests: 16,
      bedrooms: 7,
      beds: 12,
      bathrooms: 7.5,
      priceRange: "$2,600-$6,000",
      winterPrice: "$4,500-$6,500+ Nightly | Winter",
      holidayPrice: "$10,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/slopeside-villa-kadenwood",
    },
    {
      id: "panoramic-estate",
      name: "Panoramic Estate | Kadenwood",
      image: "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
      guests: 17,
      bedrooms: 8,
      beds: 10,
      bathrooms: 7,
      priceRange: "$5,800-$9,000+",
      winterPrice: "$8,500-$10,000+ | Winter",
      holidayPrice: "$16,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/panoramic-estate-kadenwood",
    },
    {
      id: "heron-views",
      name: "Heron Views | Whistler Village",
      image: "/photos/properties/3445-Heron-Place/19-3445 Heron Place 19.jpg",
      guests: 11,
      bedrooms: 5,
      beds: 6,
      bathrooms: 6,
      priceRange: "$1,200-$3,500",
      winterPrice: "",
      holidayPrice: "$4,000-$6,800+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/heron-views-whistler-village",
    },
    {
      id: "ravens-nest",
      name: "Raven's Nest | Ski in Ski out | Views",
      image:
        "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05566.jpg",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 3,
      priceRange: "$2,000-$3,500",
      winterPrice: "",
      holidayPrice: "$2,300-$4,000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/ravens-nest-ski-in-ski-out-views",
    },
    {
      id: "falcon-blueberry",
      name: "Falcon | Blueberry Drive",
      image: "/photos/properties/Falcon/01-3595 Falcon Cres-01.jpg",
      guests: 15,
      bedrooms: 7,
      beds: 13,
      bathrooms: 3.5,
      priceRange: "$1,300-$3,500",
      winterPrice: "$2,000-$3,500+ Nightly | Winter",
      holidayPrice: "$4,000-$7,200+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/falcon-blueberry-drive",
    },
    {
      id: "the-nest",
      name: "The Nest | Ski in-Ski out",
      image: "/photos/properties/Wolverine Crescent/01-2627 Wolverine-01.jpg",
      guests: 10,
      bedrooms: 5,
      beds: 6,
      bathrooms: 6,
      priceRange: "$18,000-$29,000",
      winterPrice: "90+ day minimum",
      holidayPrice: "$29,000 Monthly | Winter (Booked until June 15, 2025)",
      location: "whistler",
      link: "/listings/the-nest-ski-in-ski-out",
    },
    {
      id: "snow-pine",
      name: "Snowpine | Creekside",
      image: "/photos/properties/Snowpine 3-bed Saul/01-2040 Karen Cres-01.jpg",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 3.5,
      priceRange: "$10,000 - $12,000",
      winterPrice: "90 night minimum",
      holidayPrice: "$30,000 - 3 months | $40,000- 4 months",
      location: "whistler",
      link: "/listings/snow-pine",
    },
    {
      id: "wedge-mountain-lodge",
      name: "Wedge Mountain Lodge & Spa",
      image:
        "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 1.jpg",
      guests: 26,
      bedrooms: 10,
      beds: 10,
      bathrooms: 13,
      priceRange: "$8,000-$11,500+ per night",
      winterPrice: "Request for Event & Wedding Venue Whistler Pricing",
      holidayPrice: "Request for Nightly rates",
      location: "whistler",
      link: "/listings/wedge-mountain-lodge-spa",
    },
    {
      id: "luxe-cozy",
      name: "Luxe-Cozy 3-Bed Whistler Village",
      image:
        "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 2.5,
      priceRange: "$400-$1,700+",
      winterPrice: "",
      holidayPrice: "",
      location: "whistler",
      link: "/listings/luxe-cozy-3-bed-whistler-village",
    },
    {
      id: "dream-log-chalet",
      name: "Dream Log Chalet | 5 Bedroom | 4 Bath | Creekside",
      image:
        "/photos/properties/Dream Log 5-bedroom Chalet/Dream Log Chalet interior 33.jpg",
      guests: 12,
      bedrooms: 5,
      beds: 6,
      bathrooms: 4,
      priceRange: "6-12 Month Minimum (booked 2025)",
      winterPrice: "90 Nights: $20,000 per month",
      holidayPrice:
        "6-months Winter: $17,000 monthly | 12+ months: $14,000 monthly",
      location: "whistler",
      link: "/listings/dream-log-chalet-5-bedroom-4-bath-creekside",
    },
    {
      id: "whispering-pines",
      name: "The Aspens | Luxe 2-Bed Ski in/Out | On Slopes",
      image: "/photos/properties/The Aspens/4800-Spearhead-Drive-31.JPG",
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      priceRange: "$350-$1,300",
      winterPrice: "",
      holidayPrice: "",
      location: "whistler",
      link: "/listings/whispering-pines-ski-in-ski-out",
    },
    {
      id: "marquise-2-bed",
      name: "Marquise 2-Bed-Ski in Ski out",
      image: "/photos/properties/Marquise 2-bed/Marquise-1.jpg",
      guests: 4,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      priceRange: "$160-450",
      winterPrice: "",
      holidayPrice: "",
      location: "whistler",
      link: "/listings/marquise-2-bed-ski-in-ski-out",
    },
    // Worldwide Properties
    {
      id: "yacht-thailand",
      name: "Yacht Thailand Sea D",
      image: "/photos/properties/worldwide/yacht-thailand.jpg",
      guests: 12,
      bedrooms: 6,
      beds: 6,
      bathrooms: 6,
      priceRange: "On Request",
      winterPrice: "",
      holidayPrice: "",
      location: "worldwide",
      link: "/worldwide-listings/yacht-thailand-sea-d",
    },
    {
      id: "villa-aegean-greece",
      name: "Villa Aegean Mykonos Greece",
      image: "/photos/properties/worldwide/villa-aegean-greece.jpg",
      guests: 14,
      bedrooms: 7,
      beds: 10,
      bathrooms: 7,
      priceRange: "On Request",
      winterPrice: "",
      holidayPrice: "",
      location: "worldwide",
      link: "/worldwide-listings/villa-aegean-mykonos-greece",
    },
    {
      id: "punta-mita",
      name: "Punta Mita Luxury Villa",
      image: "/photos/properties/worldwide/punta-mita.jpg",
      guests: 16,
      bedrooms: 8,
      beds: 10,
      bathrooms: 8,
      priceRange: "On Request",
      winterPrice: "",
      holidayPrice: "",
      location: "worldwide",
      link: "/worldwide-listings/punta-mita-luxury-villa",
    },
  ];

  // Filter properties based on active filter
  const filteredListings =
    activeFilter === "all"
      ? allListings
      : allListings.filter((listing) => listing.location === activeFilter);

  // This ensures only one Two Cedars property is displayed
  const displayedListings = filteredListings.filter(
    (listing) => listing.id !== "two-cedars-duplicate"
  );

  const faqItems = [
    {
      question: "Is there a minimum stay requirement for Acehost properties?",
      answer:
        "To ensure our guests enjoy our luxurious properties, we have a 3-4 night minimum stay requirement. During major holidays such as Christmas and New Year's, a 6-7 night minimum stay may be required.",
    },
    {
      question:
        "Can I find pet-friendly luxury rental vacation homes in Whistler on AceHost.ca?",
      answer:
        "Yes, we offer a selection of pet-friendly luxury rental homes in Whistler. Use our pet-friendly filter when searching for properties to see all available options that welcome pets.",
    },
    {
      question:
        "What amenities can I expect in a luxury vacation rental from AceHost.ca?",
      answer:
        "Our luxury properties feature gourmet kitchens, private hot tubs, heated pools, saunas, steam showers, state-of-the-art entertainment systems, and premium linens for maximum comfort.",
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
              <div className="relative aspect-video w-full h-full overflow-hidden rounded-lg">
                <iframe
                  src="https://player.vimeo.com/video/1053582724?title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="fullscreen; picture-in-picture"
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
              {displayedListings.map((property, index) => (
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

        {/* YouTube Videos Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Experience Whistler Luxury
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Watch our videos to see the AceHost experience and discover the
                beauty of Whistler luxury properties.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Video 1 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/BKK5X_LPd8k"
                    title="Dream Whistler Vacation"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Dream Whistler Vacation
                  </h3>
                  <p className="text-gray-600">
                    Experience the ultimate Whistler vacation with our luxury
                    accommodations and exclusive services.
                  </p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/GOzVT9x08sc"
                    title="Whistler Chef"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Whistler Chef Experience
                  </h3>
                  <p className="text-gray-600">
                    Enjoy exceptional culinary experiences with our private chef
                    services in your luxury Whistler rental.
                  </p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/cNHhE2B8Zeo"
                    title="The Ultimate Luxury Whistler Chalet Winter Road Trip Experience"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Ultimate Luxury Winter Road Trip
                  </h3>
                  <p className="text-gray-600">
                    Discover the perfect winter road trip experience with luxury
                    chalets and breathtaking mountain views.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-medium mb-8 text-center text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                      className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="text-base font-medium text-gray-900 text-left">
                        {item.question}
                      </h3>
                      <span className="text-2xl text-gray-400">
                        {expandedFaq === index ? "−" : "+"}
                      </span>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 py-4 bg-white">
                        <p className="text-sm text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                >
                  <span>Have more questions? Contact us</span>
                  <ArrowRight size={18} className="ml-2" />
                </Link>
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
