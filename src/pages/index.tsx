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
import { FaUser, FaBed, FaBath } from "react-icons/fa";
import { Users, Bed, Bath } from "lucide-react";

const Home = () => {
  const { t } = useTranslation("common");
  const [activeFilter, setActiveFilter] = useState("whistler"); // Set Whistler as default
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Structured data for rich snippets - Enhanced for better SEO
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
      streetAddress: "4308 Main Street",
      addressLocality: "Whistler",
      addressRegion: "BC",
      postalCode: "V8E 1B2",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.instagram.com/acehost_whistler",
      "https://www.youtube.com/acehost",
    ],
    offers: {
      "@type": "AggregateOffer",
      description: "Luxury Vacation Rental Properties in Whistler Canada",
      areaServed: "Whistler, British Columbia",
      offerCount: "15+",
      priceCurrency: "CAD",
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 09:00-21:00",
  };

  // Website schema for search appearance
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AceHost Whistler Luxury Rentals",
    url: "https://acehost.ca",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://acehost.ca/properties?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Render optimized property card directly
  const renderPropertyCard = (property: any, index: number) => (
    <div
      key={property.id}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="relative h-64">
        <Link href={property.link}>
          <Image
            src={property.image}
            alt={property.title || property.name}
            fill
            className="object-cover cursor-pointer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={index < 3 ? "eager" : "lazy"}
            quality={85}
          />
        </Link>
        {property.isPetFriendly && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-md z-10">
            Pet Friendly
          </div>
        )}
        <div className="absolute bottom-4 right-4">
          {property.airbnbLink ? (
            <a
              href={property.airbnbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Book Now
            </a>
          ) : (
            <Link
              href={property.link}
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Book Now
            </Link>
          )}
        </div>
      </div>
      <div className="p-6">
        {/* Property details */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.guests && (
            <span className="bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-md">
              {property.guests}{" "}
              {typeof property.guests === "number" && property.guests === 1
                ? "Guest"
                : "Guests"}
            </span>
          )}
          {property.bedrooms && (
            <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
              {property.bedrooms}{" "}
              {typeof property.bedrooms === "number" && property.bedrooms === 1
                ? "Bedroom"
                : "Bedrooms"}
            </span>
          )}
          {property.beds && (
            <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
              {property.beds}{" "}
              {typeof property.beds === "number" && property.beds === 1
                ? "Bed"
                : "Beds"}
            </span>
          )}
          {property.bathrooms && (
            <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
              {property.bathrooms}{" "}
              {typeof property.bathrooms === "number" &&
              property.bathrooms === 1
                ? "Bathroom"
                : "Bathrooms"}
            </span>
          )}
        </div>

        {/* Property name */}
        <h3 className="text-xl font-medium mb-4 text-gray-900">
          {property.name}
        </h3>

        {/* Pricing information */}
        <div className="space-y-2 mb-6">
          {property.priceRange && (
            <p className="text-gray-600">{property.priceRange}</p>
          )}
          {property.winterPrice && (
            <p className="text-gray-600">{property.winterPrice}</p>
          )}
          {property.holidayPrice && (
            <p className="text-gray-600">{property.holidayPrice}</p>
          )}
        </div>

        {/* View property link */}
        <Link
          href={property.link}
          className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
        >
          <span>View Property</span>
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );

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
      airbnbLink:
        "https://www.airbnb.ca/rooms/771060491470943213?guests=1&adults=1&s=67&unique_share_id=a8ff5a7a-4bda-4cc7-aaad-e99b178f3a5d",
    },
    {
      id: "two-cedars",
      name: "Two Cedars | Kadenwood | Private Butler",
      image: "/photos/properties/Two Cedars New/OSA_AncientCW1248.jpg",
      guests: 17,
      bedrooms: 7,
      beds: 12,
      bathrooms: 8.5,
      priceRange: "$6,500-$9,500+",
      winterPrice: "$8,500-$10,000+ Nightly | Winter",
      holidayPrice: "$17,500-$21,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/two-cedars-kadenwood",
      airbnbLink:
        "https://www.airbnb.ca/rooms/666613336620375768?guests=1&adults=1&s=67&unique_share_id=0d8a1725-cb02-487a-a033-7cc2940692e4",
    },
    {
      id: "chalet-la-forja",
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
      airbnbLink:
        "https://www.airbnb.ca/rooms/52655503?guests=1&adults=1&s=67&unique_share_id=f1bb5c2c-51f9-4a82-9aa4-670fb8caa71d",
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
      airbnbLink:
        "https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0",
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
      airbnbLink:
        "https://www.airbnb.ca/rooms/1104637821836596397?guests=1&adults=1&s=67&unique_share_id=67164555-993c-40dc-b188-23ffe0755654",
    },
    {
      id: "heron-views",
      name: "Heron Views | Whistler Village",
      image: "/photos/properties/3445-Heron-Place/36-3445 Heron Place 36.jpg",
      guests: 11,
      bedrooms: 5,
      beds: 6,
      bathrooms: 6,
      priceRange: "$1,200-$3,500",
      winterPrice: "",
      holidayPrice: "$4,000-$6,800+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/heron-views-whistler-village",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1168163637007998550?guests=1&adults=1&s=67&unique_share_id=8227e964-920d-4bc0-8073-13043963151f",
    },
    {
      id: "ravens-nest",
      name: "Raven's Nest | Ski in Ski out | Views",
      image:
        "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05349.jpg",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 3,
      priceRange: "$2,000-$3,500",
      winterPrice: "",
      holidayPrice: "$2,300-$4,000 Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/ravens-nest-ski-in-ski-out-views",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1300258964918876012?guests=1&adults=1&s=67&unique_share_id=41b635e9-00a9-441c-a134-056b2b3814ac",
    },
    {
      id: "falcon-blueberry",
      name: "Falcon | Blueberry Drive",
      image: "/photos/properties/Falcon/15-3595 Falcon Cres-15.jpg",
      guests: 15,
      bedrooms: 7,
      beds: 13,
      bathrooms: 3.5,
      priceRange: "$1,300-$3,500",
      winterPrice: "$2,000-$3,500+ Nightly | Winter",
      holidayPrice: "$4,000-$7,200+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/falcon-blueberry-drive",
      airbnbLink:
        "https://www.airbnb.ca/rooms/18060329?guests=1&adults=1&s=67&unique_share_id=0759b67e-0517-4127-9de1-842265c53ff7",
    },
    {
      id: "the-nest",
      name: "The Nest | Ski in Ski out",
      image: "/photos/properties/Wolverine Crescent/06-2627 Wolverine-06.jpg",
      guests: 8,
      bedrooms: 3,
      beds: 4,
      bathrooms: 3,
      priceRange: "$1,800-$4,000+",
      winterPrice: "$1,800-$2,800+ Nightly | Winter",
      holidayPrice: "$3,000-$4,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/the-nest-ski-in-ski-out",
      airbnbLink:
        "https://www.airbnb.ca/rooms/763259660349118016?guests=1&adults=1&s=67&unique_share_id=d18218f6-da74-4763-a199-d5a1dc8c85ff",
    },
    {
      id: "snow-pine",
      name: "Snowpine | Creekside",
      image: "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 3.5,
      priceRange: "Monthly Pricing: $10,000-$12,000",
      winterPrice: "$10,000-$12,000 Monthly | Winter",
      location: "whistler",
      link: "/listings/snow-pine",
      airbnbLink:
        "https://www.airbnb.ca/rooms/744832560480313027?guests=1&adults=1&s=67&unique_share_id=50412c76-d839-4753-bf56-19310f38a4ef",
      isPetFriendly: true,
    },
    {
      id: "wedge-mountain-lodge",
      name: "Wedge Mountain Lodge & Spa",
      image:
        "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 1.jpg",
      guests: "20+6",
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
      id: "luxe-cozy-3-bed-whistler-village",
      name: "Luxe Cozy 3-Bed Whistler Village",
      image:
        "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/02-1 4668 Blackcomb Way 02-Edit.jpg",
      guests: 8,
      bedrooms: 3,
      beds: 5,
      bathrooms: 3,
      priceRange: "$750-$2,200+",
      winterPrice: "$750-$1,500+ Nightly | Winter",
      holidayPrice: "$1,800-$2,200+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/luxe-cozy-3-bed-whistler-village",
      airbnbLink:
        "https://www.airbnb.ca/rooms/50025973?guests=1&adults=1&s=67&unique_share_id=04ceb090-1b8e-4e32-972f-d616b380a0a8",
    },
    {
      id: "dream-log-chalet",
      name: "Dream Log Chalet | 5-Bed | 4-Bath | Creekside",
      image:
        "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00333.jpg",
      guests: 11,
      bedrooms: 5,
      beds: 5,
      bathrooms: 4,
      priceRange: "$1,450-$3,500+",
      winterPrice: "$1,500-$3,000+ Nightly | Winter",
      holidayPrice: "$3,000-$3,500+ Nightly | Christmas & NY",
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
      priceRange: "Nightly Price Range: $350-$1,300",
      winterPrice: "",
      holidayPrice: "",
      location: "whistler",
      link: "/listings/whispering-pines-ski-in-ski-out",
      airbnbLink:
        "https://www.airbnb.com/rooms/1072474554447345991?guests=1&adults=1&s=67&unique_share_id=e556b35c-05b5-40b6-91e1-5304ffafc23b",
    },
    {
      id: "marquise-2-bed",
      name: "Marquise 2-Bed-Ski in Ski out",
      image: "/photos/properties/Marquise 2-bed/Marquise-1.jpg",
      guests: 4,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      priceRange: "Nightly Price Range: $160-450",
      winterPrice: "",
      holidayPrice: "",
      location: "whistler",
      link: "/listings/marquise-2-bed-ski-in-ski-out",
      airbnbLink:
        "https://www.airbnb.ca/rooms/1370367404602078616?guests=1&adults=1&s=67&unique_share_id=eb381b39-e67d-44ea-9d7c-2de2e1b5fa20",
    },
    {
      id: "two-cedars-pets",
      name: "Two Cedars | Kadenwood | Private Butler",
      image: "/photos/properties/Two Cedars New/OSA_AncientCW1248.jpg",
      guests: 16,
      bedrooms: 7,
      beds: 12,
      bathrooms: 8.5,
      priceRange: "Nightly Price Range: $6,500-$9,500+",
      winterPrice: "$8,500-$10,000+ Nightly | Winter",
      holidayPrice: "$17,500-$21,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/two-cedars-kadenwood",
      airbnbLink:
        "https://www.airbnb.ca/rooms/666613336620375768?guests=1&adults=1&s=67&unique_share_id=0d8a1725-cb02-487a-a033-7cc2940692e4",
    },
    {
      id: "slope-slide-pets",
      name: "Slope Slide Chalet | Kadenwood",
      image:
        "/photos/properties/Slopeside Kadenwood/01-2945 Kadenwood Dr 01.jpg",
      guests: 10,
      bedrooms: 5,
      beds: 6,
      bathrooms: 6,
      priceRange: "Nightly Price Range: $2,600-$6,000",
      winterPrice: "$4,500-$6,500+ Nightly | Winter",
      holidayPrice: "$10,000+ Nightly | Christmas & NY",
      location: "whistler",
      link: "/listings/slopeside-villa-kadenwood",
      airbnbLink:
        "https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0",
      isPetFriendly: true,
    },
    {
      id: "the-nest-pets",
      name: "The Nest | Ski in-Ski out",
      image: "/photos/properties/Wolverine Crescent/06-2627 Wolverine-06.jpg",
      guests: 10,
      bedrooms: 5,
      beds: 6,
      bathrooms: 6,
      priceRange: "Monthly Price Range: $18,000-$29,000",
      winterPrice: "$29,000 Monthly | Winter (Booked until June 15, 2025)",
      holidayPrice: "90+ day minimum",
      location: "whistler",
      link: "/listings/the-nest-ski-in-ski-out",
      airbnbLink:
        "https://www.airbnb.ca/rooms/763259660349118016?guests=1&adults=1&s=67&unique_share_id=d18218f6-da74-4763-a199-d5a1dc8c85ff",
      isPetFriendly: true,
    },
    {
      id: "ski-in-ski-out-walk-to-lifts-2-bed",
      name: "Le Chamois 2 Bed | Walk to Lifts",
      image:
        "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois.jpg",
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      priceRange: "Nightly Price Range: $350-$1,050",
      winterPrice: "",
      holidayPrice: "",
      location: "whistler",
      link: "/listings/ski-in-ski-out-walk-to-lifts-2-bed",
      airbnbLink: "https://www.airbnb.com",
    },
    // Worldwide Properties
    {
      id: "yacht-thailand",
      name: "Yacht Thailand Sea D",
      image: "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
      guests: 12,
      bedrooms: 6,
      beds: 6,
      bathrooms: 6,
      priceRange: "On Request",
      winterPrice: "",
      holidayPrice: "",
      location: "worldwide",
      link: "/worldwide-listings/super-yacht-thailand",
    },
    {
      id: "villa-aegean-greece",
      name: "Villa Aegean Mykonos Greece",
      image:
        "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
      guests: 14,
      bedrooms: 7,
      beds: 10,
      bathrooms: 7,
      priceRange: "On Request",
      winterPrice: "",
      holidayPrice: "",
      location: "worldwide",
      link: "/worldwide-listings/mykonos-crystal-villa",
    },
    {
      id: "punta-mita",
      name: "Punta Mita Luxury Villa",
      image: "/photos/properties/Punta Mita/242608_2031 copy.jpg",
      guests: 16,
      bedrooms: 8,
      beds: 10,
      bathrooms: 8,
      priceRange: "On Request",
      winterPrice: "",
      holidayPrice: "",
      location: "worldwide",
      link: "/worldwide-listings/punta-mita---casa-juntos",
    },
    // Vancouver Properties
    {
      id: "vancouver-house",
      name: "The Vancouver House, Corner Unit | 30th Floor",
      image:
        "/photos/properties/vancouver-house/645adc4aca79d22167763483_Vancouver_House-03.jpg",
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
      priceRange: "Nightly Price Range: $400-$700",
      winterPrice: "",
      holidayPrice: "",
      location: "vancouver",
      link: "/vancouver-listings/vancouver-house-corner-unit-30th-floor",
    },
    
  ];

  // Filter properties based on active filter
  const filteredListings =
    activeFilter === "all"
      ? allListings
      : activeFilter === "pets"
      ? allListings.filter((listing) => listing.isPetFriendly === true)
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
      question: "Is there a fee for early check-in or late checkout?",
      answer:
        "Early check-in and late checkout options may be available depending on the property and booking schedule, and may include an additional fee. Please contact us in advance to inquire about these options for your stay.",
    },
    {
      question:
        "What amenities can I expect in a luxury vacation rental home in Whistler from AceHost.ca?",
      answer:
        "Our luxury properties feature gourmet kitchens, private hot tubs, heated pools, saunas, steam showers, state-of-the-art entertainment systems, and premium linens for maximum comfort.",
    },
    {
      question:
        "What is the cancellation policy for booking a luxury vacation rental home in Whistler with AceHost.ca?",
      answer:
        "Our cancellation policies vary by property and season. Generally, cancellations made 60+ days before arrival receive a full refund minus service fees. For specific details, please refer to the terms of your booking agreement or contact our team directly.",
    },
  ];

  // Featured sections for services
  const sections = [
    {
      title: "Luxury Vacation Properties",
      description:
        "AceHost offers a variety of luxury Airbnb vacation rental properties to choose from in Whistler, designed to provide guests with high-end, tailored experiences. Our chalets include VIP Concierge Services, premium amenities, stunning views, prime locations, often located in ski in ski out neighbourhoods, or near the slopes.",
      image: "/photos/homepage/ViewOurCollection.jpg",
      linkText: "Find Your Luxury Rental",
    },
    {
      title: "Property Management Services",
      description:
        "AceHost offers vacation rental property management services in Whistler, specializing in, but not limited to, luxury homes. We handle everything from guest management to property maintenance, while leveraging our Airbnb SuperHost & Premier VRBO status, in addition to our unique and modern marketing strategies to increase your bookings.",
      image: "/photos/homepage/WhistlerVacationRental.jpg",
      linkText: "Explore Our Management",
    },
    {
      title: "Concierge Services",
      description:
        "AceHost's VIP Concierge services provide personalized holiday experiences, ensuring guests receive priority access to Whistler's top restaurants, activities, and events. The service covers everything from restaurant bookings to private chefs, in-home spa treatments, and adventure planning like heli-skiing or snowmobile tours. AceHost's local expertise and strong connections in town make each stay seamless and memorable, with round-the-clock availability to cater to any request.",
      image: "/photos/homepage/WhistlerVipConcierge.jpg",
      linkText: "View Concierge Options",
    },
  ];

  return (
    <>
      <Head>
        <title>AceHost | Luxury Vacation Rental Properties in Whistler</title>
        <meta
          name="description"
          content="AceHost offers luxury rental properties in Whistler, VIP concierge services, and property management. Explore our exclusive collection of Whistler chalets and homes."
        />
        <meta
          name="keywords"
          content="Whistler vacation rentals, luxury whistler chalet, whistler accommodations, whistler property management, whistler concierge, luxury rental"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AceHost | Luxury Vacation Rental Properties in Whistler"
        />
        <meta
          property="og:description"
          content="AceHost offers luxury rental properties in Whistler, VIP concierge services, and property management. Explore our exclusive collection of Whistler chalets and homes."
        />
        <meta
          property="og:image"
          content="https://acehost.ca/photos/homepage/hero.jpg"
        />
        <meta property="og:url" content="https://acehost.ca" />
        <link rel="canonical" href="https://acehost.ca" />
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AceHost Whistler",
              url: "https://acehost.ca",
              logo: "https://acehost.ca/logo.png",
              description:
                "AceHost offers luxury rental properties in Whistler, VIP concierge services, and property management.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4557 Blackcomb Way",
                addressLocality: "Whistler",
                addressRegion: "BC",
                postalCode: "V8E 0Y2",
                addressCountry: "CA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-604-962-6262",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.instagram.com/acehost",
                "https://www.youtube.com/acehost",
              ],
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://acehost.ca/properties?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Google Fonts preconnect for performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Optimize core web vitals */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/photos/homepage/hero.jpg" as="image" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="relative py-16 bg-white">
          <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:w-1/3 lg:w-1/3 pr-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
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
              <p className="text-sm text-gray-700 mb-6 max-w-xl">
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
                className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                View Luxury Rental Properties
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:w-2/3 lg:w-2/3">
              <div className="relative aspect-video w-full h-full overflow-hidden rounded-lg">
                <iframe
                  src="https://player.vimeo.com/video/1053582724?title=0&byline=0&portrait=0&autoplay=0&loop=1&background=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="AceHost Whistler Concierge Experience"
                  loading="lazy"
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
                  <Link href="/properties">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </Link>
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
              {displayedListings.map((property, index) =>
                renderPropertyCard(property, index)
              )}
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
    // Add revalidation for ISR
    revalidate: 3600, // Revalidate every hour
  };
};

export default Home;
