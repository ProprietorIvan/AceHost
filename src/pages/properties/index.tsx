import React, { useState, useEffect, useCallback, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Bed,
  Building,
  MessageSquare,
  ArrowRight,
  Star,
  MapPin,
  Bath,
  Maximize,
  Coffee,
  Wifi,
  Car,
  UtensilsCrossed,
  Check,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import Footer from "@/components/Footer";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
  features: string[];
  location: string;
  sqm?: number;
  highlights?: string[];
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
  const { category } = router.query;
  const [selectedProperty, setSelectedProperty] =
    useState<PropertyFeature | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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
          },
        ],
      },
      {
        id: "pets-allowed",
        title: "Pets Allowed Properties",
        description:
          "Discover our pet-friendly luxury properties that welcome your furry family members without compromising on style, comfort, or amenities.",
        properties: [
          {
            id: "creekside-retreat",
            name: "Creekside Retreat | Pet Friendly | Hot Tub",
            images: [
              "/assets/properties/creekside-retreat/1.jpg",
              "/assets/properties/creekside-retreat/2.jpg",
              "/assets/properties/creekside-retreat/3.jpg",
              "/assets/properties/creekside-retreat/4.jpg",
            ],
            guests: 8,
            bedrooms: 4,
            bathrooms: 3,
            location: "Creekside, Whistler",
            description:
              "Pet-friendly mountain retreat just steps from Creekside Village and gondola. Features include a fenced yard for pets, private hot tub, and spacious interiors perfect for families traveling with their furry companions.",
            features: [
              "Pet Friendly with Fenced Yard",
              "Private Hot Tub",
              "5-minute Walk to Creekside Gondola",
              "Wood-burning Fireplace",
              "Spacious Deck",
              "Dog Washing Station",
              "Pet Beds & Bowls Provided",
              "Free Parking",
            ],
            highlights: [
              "Pet-Friendly Design",
              "Fenced Outdoor Space",
              "Close to Gondola",
              "Comfortable for Families",
            ],
          },
        ],
      },
      {
        id: "monaco",
        title: "Monaco Luxury Properties",
        description:
          "Experience unparalleled luxury and comfort with our premium selection of properties in Monaco, perfect for exclusive stays in the heart of the Principality.",
        properties: [
          {
            id: "monaco-harbour",
            name: "MONACO HARBOUR - LUXURY FLAT",
            images: [
              "/photos/homepage/apartment2/004-photopetit-140323-1679310750.jpg",
              "/photos/homepage/apartment2/101-photopetit-140323-1679310824.jpg",
              "/photos/homepage/apartment2/057-photopetit-140323-1679310813.jpg",
              "/photos/homepage/apartment2/050-photopetit-140323-1679310801.jpg",
              "/photos/homepage/apartment2/025-photopetit-140323-1679310776.jpg",
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 5,
            location: "Monaco Port",
            sqm: 345,
            description:
              "Located on the port of Monaco in the 'Panorama' residence. This building benefits from a strategic location in the heart of the Principality. La Condamine is a dynamic and residential area. Close to all amenities (shops, schools, restaurants, transport). This unique one-storey flat has a panoramic view of the sea, the port and the Formula 1 Grand Prix. The property has been renovated with high quality materials and fully furnished by interior designers.",
            features: [
              "Panoramic views of the sea, port and Grand Prix circuit",
              "345 sqm terrace surrounding the flat",
              "Renovated with high quality materials",
              "Fully furnished by interior designers",
              "Two master suites with bathrooms and dressing rooms",
              "Four bedrooms with bathrooms",
              "Two offices",
              "Two living rooms",
              "Dining room",
              "Two kitchens",
              "Laundry room",
              "Exceptional cinema room",
              "4 parking spaces",
              "5 renovated cellars",
            ],
            highlights: [
              "Panoramic sea views",
              "345 sqm of living space",
              "Prime Monaco location",
              "5 luxury bedrooms",
            ],
          },
          {
            id: "beverly-palace",
            name: "BEVERLY PALACE - RENOVATED FAMILY FLAT",
            images: [
              "/photos/homepage/apartment1/terrasse-1733152883.jpg",
              "/photos/homepage/apartment1/vue-mer-zoom-1733152893.jpg",
              "/photos/homepage/apartment1/vue-cap-martin-1733152890.jpg",
              "/photos/homepage/apartment1/terrasse-1734108979.jpg",
              "/photos/homepage/apartment1/cuisine-1733152869.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 3,
            location: "Moneghetti, Monaco",
            description:
              "Located in the Moneghetti residential area, in a high-quality, recently refurbished residence with concierge. Just a stone's throw from the dynamic Condamine district and its many amenities, as well as the port of Monaco. This 3-bedroom flat is ideal for a family and has recently been tastefully renovated to a very high standard. The flat comprises an entrance hall, a living room opening onto a terrace with unobstructed views over the town and the Rock and a glimpse of the sea, a separate fully-equipped kitchen, 3 bedrooms with their own bath/shower rooms, and a guest toilet.",
            features: [
              "High-quality, recently refurbished residence with concierge",
              "Tastefully renovated to a very high standard",
              "Terrace with unobstructed views over town and the Rock",
              "Separate fully-equipped kitchen",
              "3 bedrooms with their own bath/shower rooms",
              "Guest toilet",
              "Gym converted from a covered loggia in one bedroom",
              "Partially enclosed terrace with summer kitchen",
              "Perfectly optimized storage space",
              "Dual aspect - can be used as home and/or office",
              "All rooms except children's bedroom have access to terrace",
              "Cellar and large car park in the residence",
            ],
            highlights: [
              "Family-friendly layout",
              "Enclosed summer terrace",
              "Private gym area",
              "3 luxury bedrooms",
            ],
          },
          {
            id: "fontvieille-flat",
            name: "FONTVIEILLE - CONTEMPORARY FLAT, SEA VIEW",
            images: [
              "/photos/homepage/apartment3/chambre-2-1734108955.jpg",
              "/photos/homepage/apartment3/chambre-de-mai-tre-1734108961.jpg",
              "/photos/homepage/apartment3/hall-d-entre-e-1711029792.jpg",
              "/photos/homepage/apartment3/cuisine-1711029788.jpg",
              "/photos/homepage/apartment3/chambre-parentale-1711029780.jpg",
            ],
            guests: 2,
            bedrooms: 1,
            bathrooms: 1,
            location: "Fontvieille, Monaco",
            description:
              "Located in the Fontvieille district, in the 'EDEN STAR' residence, with 24/7 concierge and access to an outdoor swimming pool reserved for residents of a few neighbouring residences. The seafront residence benefits from a quiet environment and several access points, one of which is exclusively pedestrian. Close to all amenities (shops, transport, banks, schools, parks and beaches). This very attractive, contemporary, fully-renovated 2-room apartment boasts superb views of the sea and the Rock.",
            features: [
              "24/7 concierge service",
              "Access to outdoor swimming pool for residents",
              "Quiet seafront environment",
              "Contemporary, fully-renovated design",
              "Superb views of the sea and the Rock",
              "Entrance hall",
              "Living room with open-plan kitchen",
              "South-east-facing terrace",
              "Front-facing bedroom opening onto terrace",
              "Renovated shower room",
              "Guest toilet",
              "Sea-view terrace",
              "Cellar",
              "Parking space",
            ],
            highlights: [
              "Sea view terrace",
              "Access to swimming pool",
              "Contemporary design",
              "Perfect for couples",
            ],
          },
        ],
      },
    ],
    []
  );

  // Filter categories based on URL param if present
  const filteredCategories = useMemo(() => {
    if (!category) return propertyCategories;
    return propertyCategories.filter(
      (cat) => cat.id === category || category === "all"
    );
  }, [category, propertyCategories]);

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
        body: JSON.stringify({
          ...formData,
          propertyInterest: selectedProperty
            ? selectedProperty.name
            : "Not specified",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          {category
            ? `${
                propertyCategories.find((c) => c.id === category)?.title ||
                t("properties.title")
              } | ${t("site_name")}`
            : `${t("properties.title")} | ${t("site_name")}`}
        </title>
        <meta name="description" content={t("properties.subtitle")} />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 text-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/photos/homepage/apartment1/terrasse-1733152883.jpg"
              alt="Luxury Properties in Monaco"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl font-light mb-6 tracking-tight">
              {category
                ? propertyCategories.find((c) => c.id === category)?.title
                : t("properties.title")}
            </h1>
            <p className="text-xl max-w-3xl">{t("properties.subtitle")}</p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-lg font-medium text-gray-900 mr-2">
                Browse by:
              </h3>
              <Link
                href="/properties"
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  !category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                All Properties
              </Link>
              {propertyCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/properties?category=${cat.id}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    category === cat.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCategories.map((category) => (
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
                      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <Link
                        href={`/properties/${property.id}`}
                        className="block"
                      >
                        <div className="relative h-72">
                          <Image
                            src={property.images[0]}
                            alt={property.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-6 left-6">
                            <span className="bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm">
                              {property.location}
                            </span>
                          </div>
                        </div>
                      </Link>

                      <div className="p-6">
                        <Link
                          href={`/properties/${property.id}`}
                          className="block hover:text-blue-600"
                        >
                          <h3 className="text-xl font-medium mb-3">
                            {property.name}
                          </h3>
                        </Link>

                        <div className="flex flex-wrap gap-6 mb-4">
                          <div className="flex items-center text-gray-700">
                            <Users size={18} className="mr-2" />
                            <span>
                              {property.guests} {t("properties.guests")}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Bed size={18} className="mr-2" />
                            <span>
                              {property.bedrooms} {t("properties.beds")}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Bath size={18} className="mr-2" />
                            <span>
                              {property.bathrooms} {t("properties.baths")}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {property.description}
                        </p>

                        <div className="flex justify-between items-center">
                          <Link
                            href={`/properties/${property.id}`}
                            className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium"
                          >
                            {t("properties.view_details")}
                            <ChevronRight size={16} className="ml-1" />
                          </Link>
                          <button
                            onClick={() => {
                              setSelectedProperty(property);
                              setTimeout(() => {
                                const contactForm = document.getElementById(
                                  "property-contact-form"
                                );
                                contactForm?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }, 100);
                            }}
                            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                          >
                            <span>{t("properties.request_info")}</span>
                            <MessageSquare size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-light mb-6 text-gray-900">
                  Contact Us About Our Properties
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Fill out the form below and our team will contact you with a
                  tailored selection of properties based on your requirements
                  and budget.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Call Us Directly
                      </h3>
                      <a
                        href="tel:+377643917618"
                        className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        +377 643917618
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Email Us</h3>
                      <a
                        href="mailto:info@riviera-stays.com"
                        className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        info@riviera-stays.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">WhatsApp</h3>
                      <a
                        href="https://wa.me/+377643917618"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        +377 643917618
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {submitSuccess ? (
                  <div className="bg-green-50 p-8 rounded-lg border border-green-200 text-center">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-medium mb-4 text-gray-900">
                      Thank You!
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Your inquiry has been received. Our team will contact you
                      shortly with a personalized property selection based on
                      your requirements.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="guests"
                          className="block text-gray-700 mb-2"
                        >
                          Number of Guests
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                          <option value="">Select number of guests</option>
                          <option value="1-2">1-2 guests</option>
                          <option value="3-4">3-4 guests</option>
                          <option value="5-6">5-6 guests</option>
                          <option value="7+">7+ guests</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="checkIn"
                          className="block text-gray-700 mb-2"
                        >
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          id="checkIn"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="checkOut"
                          className="block text-gray-700 mb-2"
                        >
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          id="checkOut"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2"
                      >
                        Additional Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Tell us about your budget, preferred location, and any specific requirements you may have."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-6 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Property Information</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    {submitError && (
                      <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                        There was an error submitting your form. Please try
                        again later.
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Property Detail Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl">
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Slider */}
                <div className="relative h-96 lg:h-full">
                  {selectedProperty.images.length > 0 && (
                    <>
                      <Image
                        src={selectedProperty.images[currentImageIndex]}
                        alt={`${selectedProperty.name} - Image ${
                          currentImageIndex + 1
                        }`}
                        fill
                        className="object-cover"
                      />
                      {selectedProperty.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) =>
                                prev === 0
                                  ? selectedProperty.images.length - 1
                                  : prev - 1
                              );
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-colors"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) =>
                                prev === selectedProperty.images.length - 1
                                  ? 0
                                  : prev + 1
                              );
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-colors"
                          >
                            <ChevronRight size={24} />
                          </button>
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                            {selectedProperty.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full ${
                                  currentImageIndex === index
                                    ? "bg-white"
                                    : "bg-white/50"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span>{selectedProperty.location}</span>
                    </div>
                    <h3 className="text-3xl font-medium mb-4">
                      {selectedProperty.name}
                    </h3>

                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Users size={18} className="mr-2" />
                        <span>{selectedProperty.guests} guests</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Bed size={18} className="mr-2" />
                        <span>{selectedProperty.bedrooms} bedrooms</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Bath size={18} className="mr-2" />
                        <span>{selectedProperty.bathrooms} bathrooms</span>
                      </div>
                      {selectedProperty.sqm && (
                        <div className="flex items-center text-gray-700">
                          <Maximize size={18} className="mr-2" />
                          <span>{selectedProperty.sqm} sqm</span>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-medium mb-3">Description</h4>
                      <p className="text-gray-700">
                        {selectedProperty.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-medium mb-3">Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {selectedProperty.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-700"
                          >
                            <Check
                              size={18}
                              className="mr-2 text-green-600 flex-shrink-0 mt-1"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="#contact-form"
                        onClick={() => setSelectedProperty(null)}
                        className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                      >
                        <span>Inquire About This Property</span>
                        <ArrowRight size={18} />
                      </Link>
                      <Link
                        href="https://wa.me/+377643917618"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors text-base font-medium"
                      >
                        <span>WhatsApp Us</span>
                        <MessageSquare size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
  };
};
