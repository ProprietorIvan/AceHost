import React, { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
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
  const [selectedProperty, setSelectedProperty] =
    useState<PropertyFeature | null>(null);

  // Structured data for SEO
  const structuredData: {
    "@context": string;
    "@type": string;
    itemListElement: Array<{
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
    }>;
    numberOfItems: number;
  } = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [],
    numberOfItems: 0,
  };

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
            id: "altitude-retreat",
            name: "Altitude Retreat | Kadenwood | Private Butler",
            images: [
              "/assets/properties/altitude-retreat/1.jpg",
              "/assets/properties/altitude-retreat/2.jpg",
              "/assets/properties/altitude-retreat/3.jpg",
              "/assets/properties/altitude-retreat/4.jpg",
              "/assets/properties/altitude-retreat/5.jpg",
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
            id: "nordic-escape",
            name: "Nordic Escape | Family Friendly | Hot Tub",
            images: [
              "/assets/properties/nordic-estate/1.jpg",
              "/assets/properties/nordic-estate/2.jpg",
              "/assets/properties/nordic-estate/3.jpg",
              "/assets/properties/nordic-estate/4.jpg",
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
          // Add more Whistler properties as needed
        ],
      },
      {
        id: "vancouver",
        title: "Vancouver Properties",
        description:
          "Experience the best of Vancouver with our luxury properties located in the city's most desirable neighborhoods, offering urban elegance with stunning views.",
        properties: [
          {
            id: "coal-harbour-penthouse",
            name: "Coal Harbour Penthouse | City & Ocean Views",
            images: [
              "/assets/properties/coal-harbour/1.jpg",
              "/assets/properties/coal-harbour/2.jpg",
              "/assets/properties/coal-harbour/3.jpg",
              "/assets/properties/coal-harbour/4.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 2,
            location: "Coal Harbour, Vancouver",
            description:
              "Stunning penthouse in the heart of Coal Harbour with panoramic views of the ocean, mountains, and city skyline. This contemporary space features floor-to-ceiling windows, a gourmet kitchen, and luxury finishes throughout.",
            features: [
              "Panoramic Ocean & Mountain Views",
              "Private Rooftop Terrace",
              "Gourmet Chef's Kitchen",
              "Floor-to-Ceiling Windows",
              "Concierge Service",
              "Fitness Center Access",
              "Secure Parking",
              "Steps to Seawall",
            ],
            highlights: [
              "Breathtaking Views",
              "Private Rooftop Terrace",
              "Central Location",
              "Luxury Finishes",
            ],
            priceRange: "$600-$1,200",
          },
          // Add more Vancouver properties as needed
        ],
      },
      {
        id: "worldwide",
        title: "Worldwide Properties",
        description:
          "From Mediterranean villas to tropical beach houses, our curated collection of worldwide properties offers exceptional luxury experiences in the most desirable global destinations.",
        properties: [
          {
            id: "french-riviera-villa",
            name: "French Riviera Villa | Private Pool | Sea View",
            images: [
              "/assets/properties/french-riviera/1.jpg",
              "/assets/properties/french-riviera/2.jpg",
              "/assets/properties/french-riviera/3.jpg",
              "/assets/properties/french-riviera/4.jpg",
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
          // Add more worldwide properties as needed
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
  }, [filteredCategories]);

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

  // View property details
  const viewPropertyDetails = (property: PropertyFeature) => {
    setSelectedProperty(property);
    // Use history.pushState to update URL without navigation
    window.history.pushState({}, "", `/properties/${property.id}`);
  };

  // Close property details
  const closePropertyDetails = () => {
    setSelectedProperty(null);
    // Reset URL
    window.history.pushState({}, "", "/properties");
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
            <Image
              src="/photos/homepage/1.jpg"
              alt="Luxury Properties"
              fill
              className="object-cover opacity-30"
              priority
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

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {category.properties.map((property) => (
                      <div
                        key={property.id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                      >
                        <div className="relative">
                          <div className="relative h-72">
                            <Image
                              src={property.images[0]}
                              alt={property.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                              <span className="bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm">
                                {property.location}
                              </span>
                            </div>
                          </div>

                          {/* Property features overlay */}
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end pointer-events-none">
                            <div className="flex flex-wrap gap-3">
                              {property.highlights
                                ?.slice(0, 3)
                                .map((highlight, idx) => (
                                  <span
                                    key={idx}
                                    className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs"
                                  >
                                    {highlight}
                                  </span>
                                ))}
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-medium mb-4 text-gray-900 line-clamp-2">
                            {property.name}
                          </h3>

                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-gray-700">
                                <Users className="h-5 w-5 mr-1" />
                                <span>{property.guests}</span>
                              </div>
                              <div className="flex items-center text-gray-700">
                                <Bed className="h-5 w-5 mr-1" />
                                <span>{property.bedrooms}</span>
                              </div>
                              <div className="flex items-center text-gray-700">
                                <Bath className="h-5 w-5 mr-1" />
                                <span>{property.bathrooms}</span>
                              </div>
                            </div>
                          </div>

                          {property.priceRange && (
                            <p className="text-gray-900 font-semibold mb-4">
                              {property.priceRange}{" "}
                              <span className="text-gray-500 font-normal text-sm">
                                / night
                              </span>
                            </p>
                          )}

                          <button
                            onClick={() => viewPropertyDetails(property)}
                            className="w-full py-3 px-4 border border-black text-black rounded-md hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                          >
                            <span>View Details</span>
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Property Detail Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl">
              <button
                onClick={closePropertyDetails}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Gallery */}
                <div className="relative h-96 lg:h-full">
                  <Image
                    src={selectedProperty.images[0]}
                    alt={selectedProperty.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button
                      className="bg-white rounded-full p-2 shadow-lg text-gray-800 hover:text-gray-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Previous image logic
                      }}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      className="bg-white rounded-full p-2 shadow-lg text-gray-800 hover:text-gray-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Next image logic
                      }}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-2">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-gray-600 mr-2" />
                      <span className="text-gray-600">
                        {selectedProperty.location}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {selectedProperty.name}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                      <Users className="h-5 w-5 text-gray-700 mr-2" />
                      <span>{selectedProperty.guests} guests</span>
                    </div>
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                      <Bed className="h-5 w-5 text-gray-700 mr-2" />
                      <span>{selectedProperty.bedrooms} bedrooms</span>
                    </div>
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                      <Bath className="h-5 w-5 text-gray-700 mr-2" />
                      <span>{selectedProperty.bathrooms} bathrooms</span>
                    </div>
                  </div>

                  {selectedProperty.priceRange && (
                    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-lg">
                        {selectedProperty.priceRange}{" "}
                        <span className="text-gray-500 font-normal text-sm">
                          / night
                        </span>
                      </p>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      Description
                    </h3>
                    <p className="text-gray-700">
                      {selectedProperty.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                      Property Features
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                      {selectedProperty.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-gray-700 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/properties/${selectedProperty.id}`}
                    className="block text-center bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors mb-4 font-medium"
                  >
                    Book This Property
                  </Link>

                  <Link
                    href="/contact"
                    className="block text-center border border-black text-black py-3 px-4 rounded-md hover:bg-gray-100 transition-colors font-medium"
                  >
                    Contact Us About This Property
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

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
