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
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
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
              "/photos/properties/Altitude New Photos Best/1.jpg",
              "/photos/properties/Altitude New Photos Best/2.jpg",
              "/photos/properties/Altitude New Photos Best/3.jpg",
              "/photos/properties/Altitude New Photos Best/4.jpg",
              "/photos/properties/Altitude New Photos Best/5.jpg",
            ],
            guests: 18,
            bedrooms: 7,
            bathrooms: 5,
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
            id: "chalet-la-forja-kadenwood",
            name: "Chalet La Forja | Kadenwood | Private Hot Tub",
            images: [
              "/photos/properties/Chalet La Forja/1.jpg",
              "/photos/properties/Chalet La Forja/2.jpg",
              "/photos/properties/Chalet La Forja/3.jpg",
            ],
            guests: 12,
            bedrooms: 5,
            bathrooms: 5.5,
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
            priceRange: "$2,500-$5,000",
          },
          {
            id: "dream-log-chalet-5-bedroom-4-bath-creekside",
            name: "Dream Log Chalet | 5 Bedroom | Creekside",
            images: [
              "/photos/properties/Dream Log Chalet/1.jpg",
              "/photos/properties/Dream Log Chalet/2.jpg",
              "/photos/properties/Dream Log Chalet/3.jpg",
            ],
            guests: 10,
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
            priceRange: "$900-$2,200",
          },
          {
            id: "falcon-blueberry-drive",
            name: "Falcon Estate | Blueberry | Hot Tub",
            images: [
              "/photos/properties/Falcon Blueberry/1.jpg",
              "/photos/properties/Falcon Blueberry/2.jpg",
              "/photos/properties/Falcon Blueberry/3.jpg",
            ],
            guests: 12,
            bedrooms: 5,
            bathrooms: 4.5,
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
            priceRange: "$1,500-$3,500",
          },
          {
            id: "heron-views-whistler-village",
            name: "Heron Views | Whistler Village | Walk to Lifts",
            images: [
              "/photos/properties/Heron Views/1.jpg",
              "/photos/properties/Heron Views/2.jpg",
              "/photos/properties/Heron Views/3.jpg",
            ],
            guests: 8,
            bedrooms: 3,
            bathrooms: 3,
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
            priceRange: "$650-$1,500",
          },
          {
            id: "luxe-cozy-3-bed-whistler-village",
            name: "Luxe & Cozy | 3 Bed | Whistler Village",
            images: [
              "/photos/properties/Luxe Cozy/1.jpg",
              "/photos/properties/Luxe Cozy/2.jpg",
              "/photos/properties/Luxe Cozy/3.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 2,
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
            priceRange: "$450-$1,100",
          },
          {
            id: "marquise-2-bed-ski-in-ski-out",
            name: "Marquise | 2 Bed | Ski-in/Ski-out",
            images: [
              "/photos/properties/Marquise/1.jpg",
              "/photos/properties/Marquise/2.jpg",
              "/photos/properties/Marquise/3.jpg",
            ],
            guests: 6,
            bedrooms: 2,
            bathrooms: 2,
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
            priceRange: "$350-$900",
          },
          {
            id: "nordic-escape",
            name: "Nordic Escape | Family Friendly | Hot Tub",
            images: [
              "/photos/properties/nordic-estate/1.jpg",
              "/photos/properties/nordic-estate/2.jpg",
              "/photos/properties/nordic-estate/3.jpg",
              "/photos/properties/nordic-estate/4.jpg",
            ],
            guests: 10,
            bedrooms: 4,
            bathrooms: 3,
            location: "Nordic Estates, Whistler",
            description:
              "Located in the desirable Nordic Estates neighborhood, this spacious family-friendly home offers mountain views, a private hot tub, and easy access to Whistler's trails and amenities. Perfect for larger families or groups looking for comfort and convenience.",
            features: [
              "Private Hot Tub",
              "Family Room with Fireplace",
              "Fully Equipped Kitchen",
              "Spacious Deck",
              "Mountain Views",
              "5-minute Drive to Whistler Village",
              "Free Parking",
              "High-Speed WiFi",
            ],
            highlights: [
              "Family Friendly Layout",
              "Private Hot Tub",
              "Close to Valley Trail",
              "Mountain Views",
            ],
            priceRange: "$800-$2,500",
          },
          {
            id: "panoramic-estate-kadenwood",
            name: "Panoramic Estate | Kadenwood | Luxury",
            images: [
              "/photos/properties/Panoramic Estate/1.jpg",
              "/photos/properties/Panoramic Estate/2.jpg",
              "/photos/properties/Panoramic Estate/3.jpg",
            ],
            guests: 14,
            bedrooms: 6,
            bathrooms: 6.5,
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
            priceRange: "$5,000-$12,000+",
          },
          {
            id: "ravens-nest-ski-in-ski-out-views",
            name: "Raven's Nest | Ski-in/Ski-out | Views",
            images: [
              "/photos/properties/Ravens Nest/1.jpg",
              "/photos/properties/Ravens Nest/2.jpg",
              "/photos/properties/Ravens Nest/3.jpg",
            ],
            guests: 8,
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
            priceRange: "$750-$1,800",
          },
          {
            id: "slopeside-villa-kadenwood",
            name: "Slopeside Villa | Kadenwood | Luxury",
            images: [
              "/photos/properties/Slopeside Villa/1.jpg",
              "/photos/properties/Slopeside Villa/2.jpg",
              "/photos/properties/Slopeside Villa/3.jpg",
            ],
            guests: 12,
            bedrooms: 5,
            bathrooms: 5.5,
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
            priceRange: "$4,000-$9,000+",
          },
          {
            id: "snow-pine",
            name: "Snow Pine | Alpine Elegance | Hot Tub",
            images: [
              "/photos/properties/Snow Pine/1.jpg",
              "/photos/properties/Snow Pine/2.jpg",
              "/photos/properties/Snow Pine/3.jpg",
            ],
            guests: 8,
            bedrooms: 4,
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
            priceRange: "$800-$2,000",
          },
          {
            id: "the-nest-ski-in-ski-out",
            name: "The Nest | Ski-in/Ski-out | Luxury Views",
            images: [
              "/photos/properties/The Nest/1.jpg",
              "/photos/properties/The Nest/2.jpg",
              "/photos/properties/The Nest/3.jpg",
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
            priceRange: "$900-$2,200",
          },
          {
            id: "two-cedars-kadenwood",
            name: "Two Cedars | Kadenwood | Hot Tub & Views",
            images: [
              "/photos/properties/Two Cedars/1.jpg",
              "/photos/properties/Two Cedars/2.jpg",
              "/photos/properties/Two Cedars/3.jpg",
            ],
            guests: 10,
            bedrooms: 4,
            bathrooms: 4.5,
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
            priceRange: "$3,000-$7,000+",
          },
          {
            id: "wedge-mountain-lodge-spa",
            name: "Wedge Mountain Lodge & Spa | Private Chef",
            images: [
              "/photos/properties/Wedge Mountain/1.jpg",
              "/photos/properties/Wedge Mountain/2.jpg",
              "/photos/properties/Wedge Mountain/3.jpg",
            ],
            guests: 16,
            bedrooms: 6,
            bathrooms: 7,
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
            priceRange: "$6,000-$15,000+",
          },
          {
            id: "whispering-pines-ski-in-ski-out",
            name: "Whispering Pines | Ski-in/Ski-out | Hot Tub",
            images: [
              "/photos/properties/Whispering Pines/1.jpg",
              "/photos/properties/Whispering Pines/2.jpg",
              "/photos/properties/Whispering Pines/3.jpg",
            ],
            guests: 10,
            bedrooms: 4,
            bathrooms: 4,
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
            priceRange: "$1,200-$3,000",
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
              "/photos/properties/Mykonos Villa/1.jpg",
              "/photos/properties/Mykonos Villa/2.jpg",
              "/photos/properties/Mykonos Villa/3.jpg",
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
              "/photos/properties/Yacht Thailand/1.jpg",
              "/photos/properties/Yacht Thailand/2.jpg",
              "/photos/properties/Yacht Thailand/3.jpg",
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
              "/photos/properties/Punta Mita/1.jpg",
              "/photos/properties/Punta Mita/2.jpg",
              "/photos/properties/Punta Mita/3.jpg",
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
          {
            id: "french-riviera-villa",
            name: "French Riviera Villa | Private Pool | Sea View",
            images: [
              "/photos/properties/french-riviera/1.jpg",
              "/photos/properties/french-riviera/2.jpg",
              "/photos/properties/french-riviera/3.jpg",
              "/photos/properties/french-riviera/4.jpg",
            ],
            guests: 12,
            bedrooms: 6,
            bathrooms: 6,
            location: "Saint-Jean-Cap-Ferrat, French Riviera",
            description:
              "Exquisite Mediterranean villa nestled on the prestigious Cap Ferrat peninsula with breathtaking sea views, lush gardens, and a private infinity pool. This luxurious property offers the ultimate Côte d'Azur experience.",
            features: [
              "Panoramic Mediterranean Views",
              "Private Infinity Pool",
              "Landscaped Gardens",
              "Outdoor Dining Area",
              "Wine Cellar",
              "Home Cinema",
              "Private Beach Access",
              "Full Staff Available",
            ],
            highlights: [
              "Prestigious Location",
              "Mediterranean Sea Views",
              "Private Infinity Pool",
              "Full Staff Service Available",
            ],
            priceRange: "$2,400-$5,600",
          },
        ],
      },
      // Keep other property categories
    ],
    []
  );

  // Update active category based on URL query parameter
  useEffect(() => {
    if (queryCategoryId) {
      const categoryId = Array.isArray(queryCategoryId)
        ? queryCategoryId[0]
        : queryCategoryId;
      setActiveCategory(categoryId);
    } else {
      setActiveCategory("all");
    }
  }, [queryCategoryId]);

  // Filter properties based on activeCategory and search filters
  const filteredCategories = useMemo(() => {
    let results = [...propertyCategories];

    // Filter by category
    if (activeCategory !== "all") {
      results = results.filter((category) => category.id === activeCategory);
    }

    // Apply search term and other filters to properties within categories
    results = results.map((category) => {
      const filteredProperties = category.properties.filter((property) => {
        // Apply search term
        if (
          searchTerm &&
          !property.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !property.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !property.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return false;
        }

        // Apply bedroom filter
        if (
          property.bedrooms < filters.minBedrooms ||
          property.bedrooms > filters.maxBedrooms
        ) {
          return false;
        }

        // Apply guest filter
        if (
          property.guests < filters.minGuests ||
          property.guests > filters.maxGuests
        ) {
          return false;
        }

        // Apply amenity filters if any are selected
        if (filters.amenities.length > 0) {
          const propertyFeatures = property.features.map((f) =>
            f.toLowerCase()
          );
          const hasAllAmenities = filters.amenities.every((amenity) =>
            propertyFeatures.some((feature) =>
              feature.includes(amenity.toLowerCase())
            )
          );
          if (!hasAllAmenities) {
            return false;
          }
        }

        return true;
      });

      return { ...category, properties: filteredProperties };
    });

    // Remove empty categories
    results = results.filter((category) => category.properties.length > 0);

    return results;
  }, [propertyCategories, activeCategory, searchTerm, filters]);

  // Populate structured data with filtered properties for SEO
  useEffect(() => {
    const allProperties = filteredCategories.flatMap(
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
  }, [filteredCategories, structuredData]);

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
    setSearchTerm("");
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
      property.id.startsWith("whistler-") || property.id.startsWith("chalet-")
        ? `/listings/${property.id}`
        : property.id.startsWith("vancouver-")
        ? `/vancouver-listings/${property.id}`
        : `/worldwide-listings/${property.id}`;

    return (
      <Link
        href={propertyUrl}
        className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group block"
      >
        <div className="relative h-64 overflow-hidden">
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
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1 line-clamp-2">
            {property.name}
          </h3>
          <p className="flex items-center text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
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
              <span className="text-sm font-medium">{property.priceRange}</span>
            )}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <Head>
        <title>Luxury Vacation Properties | AceHost Whistler</title>
        <meta
          name="description"
          content="Explore our exclusive collection of luxury vacation rental properties in Whistler, Vancouver, and worldwide destinations. Find your perfect getaway with AceHost."
        />
        <meta
          name="keywords"
          content="luxury vacation rentals, Whistler chalets, Vancouver properties, ski-in ski-out, luxury accommodations"
        />
        <meta
          property="og:title"
          content="Luxury Vacation Properties | AceHost Whistler"
        />
        <meta
          property="og:description"
          content="Explore our exclusive collection of luxury vacation rental properties in Whistler, Vancouver, and worldwide destinations."
        />
        <meta
          property="og:image"
          content="https://acehost.ca/photos/homepage/hero.jpg"
        />
        <meta property="og:url" content="https://acehost.ca/properties" />
        <link rel="canonical" href="https://acehost.ca/properties" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="relative py-16 bg-gray-900 text-white">
          <div className="absolute inset-0">
            <img
              src="/photos/homepage/1.jpg"
              alt="Luxury Properties"
              className="object-cover opacity-30 w-full h-full"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Discover Your Perfect Luxury Retreat
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Explore our curated collection of extraordinary vacation
                properties in Whistler, Vancouver, and exclusive global
                destinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-4 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-6 py-4 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Filter className="mr-2" />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-4 -mb-px space-x-8 scrollbar-hide">
              <button
                className={`whitespace-nowrap px-1 py-4 border-b-2 font-medium text-sm ${
                  activeCategory === "all"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => {
                  setActiveCategory("all");
                  router.push("/properties", undefined, { shallow: true });
                }}
              >
                All Properties
              </button>
              {propertyCategories.map((category) => (
                <button
                  key={category.id}
                  className={`whitespace-nowrap px-1 py-4 border-b-2 font-medium text-sm ${
                    activeCategory === category.id
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    router.push(
                      `/properties?category=${category.id}`,
                      undefined,
                      { shallow: true }
                    );
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Panel */}
        {showFilters && (
          <section className="bg-gray-50 py-6 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Refine Your Search</h3>
                <button
                  onClick={resetFilters}
                  className="text-sm text-gray-600 hover:text-black underline"
                >
                  Reset All Filters
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bedrooms Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bedrooms
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, "5+"].map((num, index) => (
                      <button
                        key={index}
                        className={`py-2 px-4 border rounded-md ${
                          filters.minBedrooms ===
                          (index === 4 ? 5 : Number(num))
                            ? "bg-black text-white border-black"
                            : "bg-white border-gray-300 hover:border-gray-400"
                        }`}
                        onClick={() =>
                          setFilters({
                            ...filters,
                            minBedrooms: index === 4 ? 5 : Number(num),
                          })
                        }
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guests Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guests
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {[2, 4, 6, 10, "12+"].map((num, index) => (
                      <button
                        key={index}
                        className={`py-2 px-4 border rounded-md ${
                          filters.minGuests === (index === 4 ? 12 : Number(num))
                            ? "bg-black text-white border-black"
                            : "bg-white border-gray-300 hover:border-gray-400"
                        }`}
                        onClick={() =>
                          setFilters({
                            ...filters,
                            minGuests: index === 4 ? 12 : Number(num),
                          })
                        }
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amenities Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amenities
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {commonAmenities.map((amenity) => (
                      <button
                        key={amenity}
                        className={`py-2 px-4 border rounded-md text-left flex items-center ${
                          filters.amenities.includes(amenity)
                            ? "bg-black text-white border-black"
                            : "bg-white border-gray-300 hover:border-gray-400"
                        }`}
                        onClick={() => toggleAmenityFilter(amenity)}
                      >
                        {filters.amenities.includes(amenity) ? (
                          <CheckCircle className="mr-2 h-4 w-4" />
                        ) : null}
                        {amenity}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Property Listings */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-4">
                  No properties found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn&apos;t find any properties matching your criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div key={category.id} className="mb-20">
                  <div className="mb-10">
                    <h2 className="text-3xl font-light mb-4 text-gray-900">
                      {category.title}
                    </h2>
                    {category.description && (
                      <p className="text-lg text-gray-600 max-w-4xl">
                        {category.description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.properties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </div>
              ))
            )}
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
