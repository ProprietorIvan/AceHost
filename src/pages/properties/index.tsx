import React, { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronRight,
  Users,
  Bed,
  Bath,
  MapPin,
  Search,
  ArrowRight,
  X,
  Filter,
  CheckCircle,
  Coffee,
  Wifi,
  Car,
  ChevronLeft,
  Check,
} from "lucide-react";
import Footer from "@/components/Footer";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PropertyFeature {
  id: string;
  name: string;
  images: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  location: string;
  sqm?: number;
  highlights?: string[];
  priceRange?: string;
}

interface PropertyCategory {
  id: string;
  title: string;
  description?: string;
  properties: PropertyFeature[];
}

export default function Properties() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { category: queryCategoryId } = router.query;
  const [activeCategory, setActiveCategory] = useState<string>("whistler");
  const [filters, setFilters] = useState({
    minBedrooms: 0,
    maxBedrooms: 20,
    minGuests: 0,
    maxGuests: 50,
    amenities: [] as string[],
  });
  const [showFilters, setShowFilters] = useState(false);

  // Structured data for SEO
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [] as Array<{
        "@type": string;
        position: number;
        item: {
          "@type": string;
          name: string;
          image: string;
          description: string;
          accommodationCategory: string;
          numberOfRooms: number;
          amenityFeature: Array<{
            "@type": string;
            name: string;
          }>;
          address: {
            "@type": string;
            addressLocality: string;
          };
        };
      }>,
      numberOfItems: 0,
    }),
    []
  );

  // Property Data
  const propertyCategories = useMemo<PropertyCategory[]>(
    () => [
      {
        id: "whistler",
        title: "Whistler Properties",
        description:
          "Discover our luxury chalets and condos in Whistler, perfect for an unforgettable mountain getaway with world-class ski access and amenities.",
        properties: [
          {
            id: "altitude-retreat-kadenwood",
            name: "Altitude Retreat | Kadenwood | Private Butler",
            images: [
              "/photos/properties/Altitude New Photos Best/hero2.jpeg",
              "/photos/properties/Altitude New Photos Best/altitude retreat-12.jpg",
              "/photos/properties/Altitude New Photos Best/altitude retreat-15.jpg",
              "/photos/properties/Altitude New Photos Best/altitude retreat-17.jpg",
              "/photos/properties/Altitude New Photos Best/altitude retreat-19.jpg",
            ],
            guests: 18,
            bedrooms: 7,
            bathrooms: 5.5,
            location: "Kadenwood, Whistler",
            description:
              "Altitude Retreat is situated in the most prestigious ski-in ski-out neighbourhood in Whistler. Located just a stone's throw away from the exclusive Kadenwood residence only gondola makes this property the perfect location for your Whistler vacation! This well equipped property features everything you need for an indulgent stay.",
            features: [
              "Private Butler Service",
              "Luxury In-Home Gym",
              "Hot Tub",
              "Sauna",
              "Ski-In/Ski-Out Access",
              "Mountain Views",
              "10,000 sq.ft Interior",
              "Private Forest Setting",
            ],
            highlights: [
              "Private Butler Included",
              "Exclusive Kadenwood Location",
              "7 Luxury Bedrooms",
              "Ski-In/Ski-Out Access",
            ],
            priceRange: "$7,500-$10,000+",
          },
          {
            id: "two-cedars-kadenwood",
            name: "Two Cedars | Kadenwood | Private Butler",
            images: [
              "/photos/properties/Two Cedars New/OSA_AncientCW1248.jpg",
              "/photos/properties/Two Cedars New/OSA_AncientCW1002 Panorama.jpg",
              "/photos/properties/Two Cedars New/OSA_AncientCW1248.jpg",
            ],
            guests: 17,
            bedrooms: 7,
            bathrooms: 8.5,
            location: "Kadenwood, Whistler",
            description:
              "Set in exclusive Kadenwood, Two Cedars offers ski-in/ski-out access and breathtaking panoramic views. This premium mountain home features elegant design, a private hot tub, and luxury amenities throughout.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Hot Tub",
              "Panoramic Views",
              "Gourmet Kitchen",
              "Multiple Fireplaces",
              "Large Deck",
              "Media Room",
              "Heated Floors",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Panoramic Mountain Views",
              "Private Hot Tub",
              "Ski-in/Ski-out Access",
            ],
            priceRange: "$6,500-$9,500+",
          },
          {
            id: "chalet-la-forja-kadenwood",
            name: "Chalet La Forja | Kadenwood | Private Butler",
            images: [
              "/photos/properties/Chalet La Forja/hero00001.jpg",
              "/photos/properties/Chalet La Forja/hero00002.jpg",
              "/photos/properties/Chalet La Forja/Forja-3 copy.jpg",
            ],
            guests: 12,
            bedrooms: 7.5,
            bathrooms: 8,
            location: "Kadenwood, Whistler",
            description:
              "Chalet La Forja is a magnificent mountain retreat situated in Whistler's prestigious Kadenwood neighborhood. This luxurious ski-in/ski-out property offers breathtaking views, elegant design, and premium amenities for an unforgettable Whistler experience.",
            features: [
              "Private Hot Tub",
              "Gourmet Kitchen",
              "Ski-In/Ski-Out Access",
              "Mountain Views",
              "Luxury Finishes",
              "Game Room",
              "Heated Floors",
              "Private Balcony",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Ski-In/Ski-Out Access",
              "Hot Tub with Mountain Views",
              "Luxury Design",
            ],
            priceRange: "$7,000-11,000+ | Private Butler Included",
          },
          {
            id: "slopeside-villa-kadenwood",
            name: "Slope Slide Chalet | Kadenwood",
            images: [
              "/photos/properties/Slopeside Kadenwood/01-2945 Kadenwood Dr 01.jpg",
              "/photos/properties/Slopeside Kadenwood/01-2945 Kadenwood Dr 01.jpg",
              "/photos/properties/Slopeside Kadenwood/01-2945 Kadenwood Dr 01.jpg",
            ],
            guests: 16,
            bedrooms: 7,
            bathrooms: 7.5,
            location: "Kadenwood, Whistler",
            description:
              "Experience the height of alpine luxury in this magnificent Kadenwood estate. With direct ski-in/ski-out access and spectacular mountain views, this residence combines exceptional design with premium comfort.",
            features: [
              "Direct Ski-in/Ski-out Access",
              "Private Hot Tub",
              "Outdoor Firepit",
              "Home Theater",
              "Wine Cellar",
              "Gourmet Kitchen",
              "Designer Furnishings",
              "Multiple Fireplaces",
            ],
            highlights: [
              "Exclusive Kadenwood Estate",
              "Direct Slope Access",
              "Luxury Design & Finishes",
              "Panoramic Mountain Views",
            ],
            priceRange: "$2,600-$6,000",
          },
          {
            id: "panoramic-estate-kadenwood",
            name: "Panoramic Estate | Kadenwood",
            images: [
              "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
              "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
              "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
            ],
            guests: 17,
            bedrooms: 8,
            bathrooms: 7,
            location: "Kadenwood, Whistler",
            description:
              "This stunning mountain estate in exclusive Kadenwood offers unparalleled luxury and breathtaking panoramic views. With over 6,500 sq. ft. of living space, this architectural masterpiece features high-end finishes and amenities throughout.",
            features: [
              "Panoramic Mountain Views",
              "Private Hot Tub",
              "Cinema Room",
              "Wine Cellar",
              "Gourmet Kitchen",
              "Ski-in/Ski-out Access",
              "Elevator",
              "Heated Outdoor Living Area",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Panoramic Views",
              "Ski-in/Ski-out Access",
              "Ultimate Luxury Experience",
            ],
            priceRange: "$5,800-$9,000+",
          },
          {
            id: "heron-views-whistler-village",
            name: "Heron Views | Whistler Village",
            images: [
              "/photos/properties/3445-Heron-Place/36-3445 Heron Place 36.jpg",
              "/photos/properties/3445-Heron-Place/01-3445 Heron Place 01.jpg",
              "/photos/properties/3445-Heron-Place/01-3445 Heron Place 01.jpg",
            ],
            guests: 11,
            bedrooms: 5,
            bathrooms: 6,
            location: "Whistler Village, Whistler",
            description:
              "Located in the heart of Whistler Village, this beautifully updated condo offers unparalleled convenience with stunning mountain views. Just steps away from the lifts, restaurants, and village attractions.",
            features: [
              "Village Central Location",
              "Mountain Views",
              "Walk to Lifts",
              "Balcony",
              "Gas Fireplace",
              "Updated Kitchen",
              "Secure Underground Parking",
              "Shared Hot Tub",
            ],
            highlights: [
              "Walk to Whistler & Blackcomb Lifts",
              "Heart of Whistler Village",
              "Mountain Views",
              "Recently Renovated",
            ],
            priceRange: "$1,200-$3,500",
          },
          {
            id: "ravens-nest-ski-in-ski-out-views",
            name: "Raven's Nest | Ski in Ski out | Views",
            images: [
              "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05349.jpg",
              "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05566.jpg",
              "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05566.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 3,
            location: "Creekside, Whistler",
            description:
              "Perched above Whistler Creekside with stunning valley views, this ski-in/ski-out townhome offers perfect mountain access and elegant comfort. Features vaulted ceilings, a stone fireplace, and a private hot tub.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Hot Tub",
              "Valley Views",
              "Vaulted Ceilings",
              "Stone Fireplace",
              "Gourmet Kitchen",
              "Large Deck",
              "Heated Floors",
            ],
            highlights: [
              "True Ski-in/Ski-out",
              "Panoramic Valley Views",
              "Private Hot Tub",
              "Creekside Convenience",
            ],
            priceRange: "$2,000-$3,500",
          },
          {
            id: "falcon-blueberry-drive",
            name: "Falcon | Blueberry Drive",
            images: [
              "/photos/properties/Falcon/15-3595 Falcon Cres-15.jpg",
              "/photos/properties/Falcon/01-3595 Falcon Cres-01.jpg",
              "/photos/properties/Falcon/01-3595 Falcon Cres-01.jpg",
            ],
            guests: 15,
            bedrooms: 7,
            bathrooms: 3.5,
            location: "Blueberry Hill, Whistler",
            description:
              "Perched on Whistler's prestigious Blueberry Hill, Falcon Estate offers panoramic mountain and valley views in a private setting. This spacious mountain home combines luxury with comfort.",
            features: [
              "Private Hot Tub",
              "Panoramic Views",
              "Home Theater",
              "Wine Cellar",
              "Large Deck",
              "Gourmet Kitchen",
              "Wood-Burning Fireplace",
              "Designer Furnishings",
            ],
            highlights: [
              "Panoramic Valley Views",
              "Prestigious Blueberry Location",
              "Home Theater Room",
              "Private Setting",
            ],
            priceRange: "$1,300-$3,500",
          },
          {
            id: "the-nest-ski-in-ski-out",
            name: "The Nest | Ski in Ski out",
            images: [
              "/photos/properties/Wolverine Crescent/06-2627 Wolverine-06.jpg",
              "/photos/properties/Wolverine Crescent/01-2627 Wolverine-01.jpg",
              "/photos/properties/Wolverine Crescent/01-2627 Wolverine-01.jpg",
            ],
            guests: 8,
            bedrooms: 3,
            bathrooms: 3.5,
            location: "Blackcomb Benchlands, Whistler",
            description:
              "Nestled in the Blackcomb Benchlands, this luxury townhome offers true ski-in/ski-out access with stunning views. Recently renovated with designer finishes, a private hot tub, and a spacious layout perfect for families or groups.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Hot Tub",
              "Mountain Views",
              "Designer Furnishings",
              "Gourmet Kitchen",
              "Multiple Decks",
              "Gas Fireplace",
              "Heated Floors",
            ],
            highlights: [
              "True Ski-in/Ski-out",
              "Designer Renovation",
              "Private Hot Tub",
              "Blackcomb Base Location",
            ],
            priceRange: "$1,800-$4,000+",
          },
          {
            id: "snow-pine",
            name: "Snowpine | Creekside",
            images: [
              "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
              "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
              "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 3.5,
            location: "White Gold, Whistler",
            description:
              "This elegant alpine retreat in Whistler's White Gold neighborhood combines luxury with convenience. Just a short walk to the Village and lifts, this beautiful mountain home features high ceilings, a gourmet kitchen, and a private hot tub.",
            features: [
              "Private Hot Tub",
              "Gourmet Kitchen",
              "High Ceilings",
              "Wood-Burning Fireplace",
              "Large Deck",
              "Walk to Village & Lifts",
              "Mountain Views",
              "Heated Floors",
            ],
            highlights: [
              "10-Minute Walk to Village",
              "Private Hot Tub",
              "Spacious Mountain Home",
              "Quiet Neighborhood",
            ],
            priceRange: "Monthly Pricing: $10,000-$12,000",
          },
          {
            id: "wedge-mountain-lodge-spa",
            name: "Wedge Mountain Lodge & Spa",
            images: [
              "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 1.jpg",
              "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 1.jpg",
              "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 1.jpg",
            ],
            guests: 26,
            bedrooms: 10,
            bathrooms: 13,
            location: "Stonebridge, Whistler",
            description:
              "This spectacular mountain lodge in exclusive Stonebridge offers the ultimate in luxury and privacy. With 8,500 sq. ft. of living space, it features a private spa, home theater, and the option for private chef service.",
            features: [
              "Private Spa",
              "Heated Pool",
              "Home Theater",
              "Wine Cellar",
              "Private Chef Available",
              "Multiple Fireplaces",
              "Games Room",
              "Mountain Views",
            ],
            highlights: [
              "Private Spa Facilities",
              "Optional Private Chef",
              "Heated Outdoor Pool",
              "Ultimate Luxury Experience",
            ],
            priceRange: "$8,000-$11,500+ per night",
          },
          {
            id: "luxe-cozy-3-bed-whistler-village",
            name: "Luxe Cozy 3-Bed Whistler Village",
            images: [
              "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/02-1 4668 Blackcomb Way 02-Edit.jpg",
              "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
              "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
            ],
            guests: 8,
            bedrooms: 3,
            bathrooms: 3,
            location: "Whistler Village, Whistler",
            description:
              "This stylish and recently renovated 3-bedroom condo in Whistler Village combines convenient location with modern comfort. Tastefully decorated with a cozy mountain aesthetic and just minutes from the gondolas.",
            features: [
              "Recently Renovated",
              "Modern Design",
              "Village Location",
              "Walk to Lifts",
              "Gas Fireplace",
              "Designer Furnishings",
              "Open Concept Living",
              "Mountain Views",
            ],
            highlights: [
              "Stylish Modern Interior",
              "Steps to Village Restaurants",
              "5-Minute Walk to Gondolas",
              "Fully Equipped Kitchen",
            ],
            priceRange: "$750-$2,200+",
          },
          {
            id: "le-chamoix",
            name: "Le Chamoix | Ski-in/Ski-out | 2 Bedroom",
            images: [
              "/photos/properties/default-property.jpg",
              "/photos/properties/default-property.jpg",
              "/photos/properties/default-property.jpg",
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            location: "Whistler Village, Whistler",
            description:
              "A comfortable and cozy ski-in/ski-out condo offering convenient access to the slopes and village. Features modern amenities and mountain views.",
            features: [
              "Ski-in/Ski-out Access",
              "Village Location",
              "Mountain Views",
              "Modern Amenities",
              "Fully Equipped Kitchen",
              "Cozy Fireplace",
              "Balcony",
              "Shared Hot Tub Access",
            ],
            highlights: [
              "True Ski-in/Ski-out",
              "Village Convenience",
              "Cozy Mountain Retreat",
              "Excellent Value",
            ],
            priceRange: "$350-$900",
          },
          {
            id: "dream-log-chalet-5-bedroom-4-bath-creekside",
            name: "Dream Log Chalet | 5-Bed | 4-Bath | Creekside",
            images: [
              "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00333.jpg",
              "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00635.jpg",
              "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00620.jpg",
            ],
            guests: 11,
            bedrooms: 5,
            bathrooms: 4,
            location: "Creekside, Whistler",
            description:
              "Authentic log cabin charm meets modern luxury in this beautiful 5-bedroom chalet in Whistler's Creekside area. Features vaulted ceilings, a stone fireplace, and convenient access to Creekside Village and lifts.",
            features: [
              "Authentic Log Construction",
              "Stone Fireplace",
              "Hot Tub",
              "Chef's Kitchen",
              "Large Deck",
              "Close to Creekside Gondola",
              "Vaulted Ceilings",
              "Mountain Views",
            ],
            highlights: [
              "Authentic Log Cabin Design",
              "5 Minutes to Creekside Gondola",
              "Family-Friendly Layout",
              "Private Hot Tub",
            ],
            priceRange: "$1,450-$3,500+",
          },
          {
            id: "whispering-pines-ski-in-ski-out",
            name: "The Aspens | Luxe 2-Bed Ski in/Out | On Slopes",
            images: [
              "/photos/properties/The Aspens/4800-Spearhead-Drive-31.JPG",
              "/photos/properties/The Aspens/4800-Spearhead-Drive-31.JPG",
              "/photos/properties/The Aspens/4800-Spearhead-Drive-31.JPG",
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            location: "Horstman Estates, Whistler",
            description:
              "Located in prestigious Horstman Estates on Blackcomb Mountain, this luxury ski-in/ski-out chalet offers direct access to the slopes and stunning views. Features include a private hot tub, vaulted ceilings, and elegant alpine design.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Hot Tub",
              "Mountain Views",
              "Vaulted Ceilings",
              "Stone Fireplace",
              "Gourmet Kitchen",
              "Heated Floors",
              "Large Deck",
            ],
            highlights: [
              "True Ski-in/Ski-out",
              "Prestigious Horstman Location",
              "Private Hot Tub",
              "Luxury Alpine Design",
            ],
            priceRange: "Nightly Price Range: $350-$1,300",
          },
          {
            id: "marquise-2-bed-ski-in-ski-out",
            name: "Marquise | 2 Bed | Ski-in/Ski-out",
            images: [
              "/photos/properties/Marquise 2-bed/Marquise-1.jpg",
              "/photos/properties/Marquise 2-bed/Marquise-1.jpg",
              "/photos/properties/Marquise 2-bed/Marquise-1.jpg",
            ],
            guests: 4,
            bedrooms: 1,
            bathrooms: 1,
            location: "Blackcomb Base, Whistler",
            description:
              "Enjoy true ski-in/ski-out convenience at this welcoming 2-bedroom condo in the desirable Marquise complex at Blackcomb Base. Features a private balcony, gas fireplace, and access to shared pool and hot tub.",
            features: [
              "Ski-in/Ski-out Access",
              "Shared Pool & Hot Tub",
              "Private Balcony",
              "Gas Fireplace",
              "Fully Equipped Kitchen",
              "Mountain Views",
              "Secure Underground Parking",
              "Ideal Blackcomb Location",
            ],
            highlights: [
              "True Ski-in/Ski-out",
              "Pool & Hot Tub",
              "Easy Access to Blackcomb Base",
              "Cozy Mountain Retreat",
            ],
            priceRange: "Nightly Price Range: $160-450",
          },
        ],
      },
      {
        id: "vancouver",
        title: "Vancouver Properties",
        description:
          "Experience the best of Vancouver with our luxury properties located in the city's most desirable neighborhoods, offering urban elegance with stunning views.",
        properties: [
          {
            id: "vancouver-house-corner-unit-30th-floor",
            name: "The Vancouver House, Corner Unit | 30th Floor",
            images: [
              "/photos/properties/vancouver-house/645adc480342565cb5e2cac6_Vancouver_House-12.jpg",
              "/photos/properties/vancouver-house/645adc4803425681d3e2cab2_Vancouver_House-15.jpg",
              "/photos/properties/vancouver-house/645adc4a8fd51115efee7fd0_Vancouver_House-20.jpg",
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            location: "Beach District, Vancouver",
            description:
              "Welcome to this spectacular corner unit on the 30th floor of the iconic Vancouver House. This architectural masterpiece offers breathtaking 270-degree views of False Creek, English Bay, and the North Shore mountains through floor-to-ceiling windows.",
            features: [
              "Floor-to-Ceiling Windows",
              "Large Balcony with Seating",
              "Air Conditioning",
              "High-Speed Wi-Fi",
              "Smart TVs",
              "Designer Furnishings",
              "Fitness Center Access",
              "Indoor Pool & Hot Tub Access",
              "Rooftop Garden Access",
              "24-Hour Concierge",
            ],
            highlights: [
              "270-degree Views",
              "Designer Furnishings",
              "Steps to Seawall",
              "Luxury Building Amenities",
            ],
            priceRange: "$750/night",
          },
        ],
      },
      {
        id: "worldwide",
        title: "Worldwide Properties",
        description:
          "From Mediterranean villas to tropical beach houses, our curated collection of worldwide properties offers exceptional luxury experiences in the most desirable global destinations.",
        properties: [
          {
            id: "mykonos-crystal-villa",
            name: "Mykonos Crystal Villa | Infinity Pool | Sea Views",
            images: [
              "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
              "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
              "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 5,
            location: "Agios Lazaros, Mykonos, Greece",
            description:
              "Perched on a hillside in exclusive Agios Lazaros, Crystal Villa offers breathtaking views of the Aegean Sea and the famous Mykonos sunset. This architectural masterpiece combines traditional Cycladic design with modern luxury.",
            features: [
              "Infinity Pool",
              "Panoramic Sea Views",
              "Private Chef Available",
              "Daily Housekeeping",
              "Concierge Service",
              "Outdoor Dining Areas",
              "Alfresco Lounge",
              "Close to Psarou Beach",
            ],
            highlights: [
              "Stunning Aegean Views",
              "Infinity Pool",
              "Designer Interiors",
              "Close to Top Beaches",
            ],
            priceRange: "$2,500-$5,000",
          },
          {
            id: "super-yacht-thailand",
            name: "Super Yacht Thailand | Luxury Charter | Full Crew",
            images: [
              "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
              "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
              "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
            ],
            guests: 8,
            bedrooms: 4,
            bathrooms: 4,
            location: "Phuket, Thailand",
            description:
              "Experience the height of luxury aboard our 100-foot super yacht in the stunning waters of Thailand. With a full crew including captain, chef, and stewards, explore the breathtaking islands and beaches of the Andaman Sea in complete comfort.",
            features: [
              "Full Professional Crew",
              "Private Chef",
              "Master Suite",
              "Water Sports Equipment",
              "Alfresco Dining",
              "Jacuzzi",
              "Stabilizers",
              "Air Conditioning Throughout",
            ],
            highlights: [
              "Explore Thailand by Sea",
              "Full Professional Crew",
              "All-Inclusive Experience",
              "Ultimate Luxury Adventure",
            ],
            priceRange: "$5,000-$8,000/day",
          },
          {
            id: "punta-mita---casa-juntos",
            name: "Punta Mita - Casa Juntos | Beachfront | Full Staff",
            images: [
              "/photos/properties/Punta Mita/242608_2031 copy.jpg",
              "/photos/properties/Punta Mita/242608_2031 copy.jpg",
              "/photos/properties/Punta Mita/242608_2031 copy.jpg",
            ],
            guests: 12,
            bedrooms: 6,
            bathrooms: 6.5,
            location: "Punta Mita, Mexico",
            description:
              "Located within the exclusive Punta Mita resort community, Casa Juntos is a stunning beachfront villa offering panoramic Pacific Ocean views and direct beach access. With full staff including private chef, this luxury retreat provides the ultimate Mexican Riviera experience.",
            features: [
              "Direct Beach Access",
              "Infinity Pool",
              "Full Staff Including Chef",
              "Golf Club Access",
              "Indoor/Outdoor Living",
              "Home Theater",
              "Fully Equipped Gym",
              "Ocean-View Master Suite",
            ],
            highlights: [
              "Private Beachfront",
              "Full Staff with Chef",
              "Exclusive Resort Access",
              "Spectacular Ocean Views",
            ],
            priceRange: "$3,000-$7,000",
          },
        ],
      },
    ],
    []
  );

  // Update active category based on URL query parameter
  useEffect(() => {
    // Set category from query parameter if available, otherwise default to "whistler"
    if (queryCategoryId && typeof queryCategoryId === "string") {
      setActiveCategory(queryCategoryId);
    } else {
      setActiveCategory("whistler");
    }
  }, [queryCategoryId]);

  // Filter properties based on active filter
  const filteredListings =
    activeCategory === "all"
      ? propertyCategories
      : propertyCategories.filter((category) => category.id === activeCategory);

  // Apply all filters (except search which is removed)
  const displayProperties = filteredListings.map((category) => {
    const filteredProperties = category.properties.filter((property) => {
      const bedroomsMatch =
        property.bedrooms >= filters.minBedrooms &&
        property.bedrooms <= filters.maxBedrooms;
      const guestsMatch =
        property.guests >= filters.minGuests &&
        property.guests <= filters.maxGuests;
      const amenitiesMatch =
        filters.amenities.length === 0 ||
        filters.amenities.every((amenity) =>
          property.features.some((feature) =>
            feature.toLowerCase().includes(amenity.toLowerCase())
          )
        );

      return bedroomsMatch && guestsMatch && amenitiesMatch;
    });

    return { ...category, properties: filteredProperties };
  });

  // Populate structured data with filtered properties for SEO
  useEffect(() => {
    const allProperties = displayProperties.flatMap(
      (category) => category.properties
    );

    structuredData.numberOfItems = allProperties.length;
    structuredData.itemListElement = allProperties.map((property, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Accommodation",
        name: property.name,
        image: property.images[0],
        description: property.description,
        accommodationCategory: "Vacation Rental",
        numberOfRooms: property.bedrooms,
        amenityFeature: property.features.map((feature) => ({
          "@type": "LocationFeatureSpecification",
          name: feature,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: property.location,
        },
      },
    }));
  }, [displayProperties, structuredData]);

  // Add/remove amenity filter
  const toggleAmenityFilter = (amenity: string) => {
    setFilters((prev) => {
      if (prev.amenities.includes(amenity)) {
        return {
          ...prev,
          amenities: prev.amenities.filter((a) => a !== amenity),
        };
      } else {
        return { ...prev, amenities: [...prev.amenities, amenity] };
      }
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      minBedrooms: 0,
      maxBedrooms: 20,
      minGuests: 0,
      maxGuests: 50,
      amenities: [],
    });
  };

  // Common amenities for filter options
  const commonAmenities = [
    "Hot Tub",
    "Pool",
    "Sauna",
    "Ski-In/Ski-Out",
    "Mountain Views",
    "Private Butler",
    "Pet Friendly",
  ];

  // Hero section update
  const Hero = () => {
    return (
      <div className="relative h-80 lg:h-96 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url(/photos/homepage/mountainview.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl mb-4">
            Discover Our Premium Properties
          </h1>
          <p className="text-white/90 max-w-xl text-lg md:text-xl">
            Explore our curated collection of luxury properties in the most
            desirable locations
          </p>
        </div>
      </div>
    );
  };

  // PropertyCard with regular img tag - updated to navigate directly to property page
  const PropertyCard = ({ property }: { property: PropertyFeature }) => {
    const propertyUrl =
      property.id.startsWith("whistler-") ||
      property.id.startsWith("chalet-") ||
      [
        "altitude-retreat-kadenwood",
        "two-cedars-kadenwood",
        "chalet-la-forja-kadenwood",
        "slopeside-villa-kadenwood",
        "panoramic-estate-kadenwood",
        "heron-views-whistler-village",
        "ravens-nest-ski-in-ski-out-views",
        "falcon-blueberry-drive",
        "the-nest-ski-in-ski-out",
        "snow-pine",
        "wedge-mountain-lodge-spa",
        "luxe-cozy-3-bed-whistler-village",
        "le-chamoix",
        "dream-log-chalet-5-bedroom-4-bath-creekside",
        "whispering-pines-ski-in-ski-out",
        "marquise-2-bed-ski-in-ski-out",
      ].includes(property.id)
        ? `/listings/${property.id}`
        : property.id.startsWith("vancouver-")
        ? `/vancouver-listings/${property.id}`
        : `/worldwide-listings/${property.id}`;

    // Mapping property IDs to Airbnb links
    const airbnbLinks: Record<string, string> = {
      "altitude-retreat-kadenwood":
        "https://www.airbnb.ca/rooms/771060491470943213?guests=1&adults=1&s=67&unique_share_id=a8ff5a7a-4bda-4cc7-aaad-e99b178f3a5d",
      "chalet-la-forja-kadenwood":
        "https://www.airbnb.ca/rooms/52655503?guests=1&adults=1&s=67&unique_share_id=f1bb5c2c-51f9-4a82-9aa4-670fb8caa71d",
      "two-cedars-kadenwood":
        "https://www.airbnb.ca/rooms/666613336620375768?guests=1&adults=1&s=67&unique_share_id=0d8a1725-cb02-487a-a033-7cc2940692e4",
      "slopeside-villa-kadenwood":
        "https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0",
      "panoramic-estate-kadenwood":
        "https://www.airbnb.ca/rooms/1104637821836596397?guests=1&adults=1&s=67&unique_share_id=67164555-993c-40dc-b188-23ffe0755654",
      "heron-views-whistler-village":
        "https://www.airbnb.ca/rooms/1168163637007998550?guests=1&adults=1&s=67&unique_share_id=8227e964-920d-4bc0-8073-13043963151f",
      "ravens-nest-ski-in-ski-out-views":
        "https://www.airbnb.ca/rooms/1300258964918876012?guests=1&adults=1&s=67&unique_share_id=41b635e9-00a9-441c-a134-056b2b3814ac",
      "falcon-blueberry-drive":
        "https://www.airbnb.ca/rooms/18060329?guests=1&adults=1&s=67&unique_share_id=0759b67e-0517-4127-9de1-842265c53ff7",
      "the-nest-ski-in-ski-out":
        "https://www.airbnb.ca/rooms/763259660349118016?guests=1&adults=1&s=67&unique_share_id=d18218f6-da74-4763-a199-d5a1dc8c85ff",
      "snow-pine":
        "https://www.airbnb.ca/rooms/744832560480313027?guests=1&adults=1&s=67&unique_share_id=50412c76-d839-4753-bf56-19310f38a4ef",
      "le-chamoix":
        "https://www.airbnb.ca/rooms/1015303987589924725?guests=1&adults=1&s=67&unique_share_id=70e4858b-6c89-41b1-bcfb-fef3fd327b52",
      "whispering-pines-ski-in-ski-out":
        "https://www.airbnb.com/rooms/1072474554447345991?guests=1&adults=1&s=67&unique_share_id=e556b35c-05b5-40b6-91e1-5304ffafc23b",
      "whistler-village-views":
        "https://www.airbnb.ca/rooms/50025973?guests=1&adults=1&s=67&unique_share_id=04ceb090-1b8e-4e32-972f-d616b380a0a8",
      "marquise-2-bed-ski-in-ski-out":
        "https://www.airbnb.ca/rooms/1370367404602078616?guests=1&adults=1&s=67&unique_share_id=eb381b39-e67d-44ea-9d7c-2de2e1b5fa20",
    };

    const airbnbLink = airbnbLinks[property.id];

    return (
      <Link
        href={propertyUrl}
        className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group block h-full"
      >
        <div className="relative h-64 sm:h-72 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={property.images[0]}
            alt={property.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Get property folder name from the ID
              const propertyId = property.id;

              // Try folder variants - check if image exists at typical locations
              let paths = [
                // Using a directory name matching property name patterns
                `/photos/properties/${propertyId}/1.jpg`,
                // Try capitalized first letter
                `/photos/properties/${
                  propertyId.charAt(0).toUpperCase() + propertyId.slice(1)
                }/1.jpg`,
                // Specific override for common properties
                `/photos/properties/Altitude New Photos Best/altitude retreat-12.jpg`,
                `/photos/properties/Chalet La Forja/hero00002.jpg`,
                `/photos/properties/3445-Heron-Place/01-3445 Heron Place 01.jpg`,
                `/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00635.jpg`,
                // Fallback to a default image
                `/photos/homepage/WhistlerVacationRental.jpg`,
              ];

              // Try the first image path
              e.currentTarget.src = paths[paths.length - 1]; // Default to the last (fallback) option
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Book Now Button - only shown if airbnbLink exists */}
          {airbnbLink && (
            <div className="absolute top-4 right-4 z-10">
              <a
                href={airbnbLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Book Now
              </a>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg sm:text-xl font-bold mb-1 line-clamp-2">
            {property.name}
          </h3>
          <p className="flex items-center text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-1 sm:gap-2 flex-wrap">
              <div className="flex items-center text-xs bg-white/20 px-2 py-1 rounded">
                <Bed className="w-3 h-3 mr-1" /> {property.bedrooms}
              </div>
              <div className="flex items-center text-xs bg-white/20 px-2 py-1 rounded">
                <Bath className="w-3 h-3 mr-1" /> {property.bathrooms}
              </div>
              <div className="flex items-center text-xs bg-white/20 px-2 py-1 rounded">
                <Users className="w-3 h-3 mr-1" /> {property.guests}
              </div>
            </div>
            {property.priceRange && (
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {property.priceRange}
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <Head>
        <title>Luxury Vacation Rental Properties | AceHost Whistler</title>
        <meta
          name="description"
          content="Browse our exclusive collection of luxury vacation rental properties in Whistler. From ski-in/ski-out chalets to village condos, find your perfect mountain getaway."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <div className="min-h-screen">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Luxury Vacation Rental Properties
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Browse our exclusive collection of luxury vacation rental
                properties in Whistler. From ski-in/ski-out chalets to village
                condos, find your perfect mountain getaway.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "all"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  All Properties
                </button>
                <button
                  onClick={() => setActiveCategory("whistler")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "whistler"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Whistler
                </button>
                <button
                  onClick={() => setActiveCategory("vancouver")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "vancouver"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Vancouver
                </button>
                <button
                  onClick={() => setActiveCategory("worldwide")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "worldwide"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Worldwide
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Properties Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-semibold">
                  {activeCategory === "all"
                    ? "All Properties"
                    : activeCategory === "whistler"
                    ? "Whistler Properties"
                    : activeCategory === "vancouver"
                    ? "Vancouver Properties"
                    : "Worldwide Properties"}
                </h2>
                <p className="text-gray-600 mt-1">
                  {displayProperties.length}{" "}
                  {displayProperties.length === 1 ? "property" : "properties"}{" "}
                  available
                </p>
              </div>
            </div>

            {/* Property Listings */}
            <div className="w-full">
              {displayProperties.map((category) => (
                <div key={category.id} className="mb-16 sm:mb-20">
                  <div className="mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-light mb-3 sm:mb-4 text-gray-900">
                      {category.title}
                    </h2>
                    {category.description && (
                      <p className="text-base sm:text-lg text-gray-600 max-w-4xl">
                        {category.description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {category.properties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Looking for Something Special?
                </h2>
                <p className="text-gray-300 mb-6">
                  Our concierge team is here to help you find the perfect
                  property for your needs. Let us know what you&apos;re looking
                  for, and we&apos;ll create a personalized recommendation.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  Contact Our Team
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-6">
                  <Coffee className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">
                    Concierge Services
                  </h3>
                  <p className="text-gray-300">
                    Private chefs, butler services, and personalized
                    experiences.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <Wifi className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Smart Homes</h3>
                  <p className="text-gray-300">
                    Modern amenities and tech-enabled luxury experiences.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <Car className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Transportation</h3>
                  <p className="text-gray-300">
                    Airport transfers and luxury vehicle rentals.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <MapPin className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Local Expertise</h3>
                  <p className="text-gray-300">
                    Insider knowledge of the best experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
    // Revalidate the page every 1 hour
    revalidate: 3600,
  };
};
