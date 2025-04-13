import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Home,
  Bed,
  Users,
  Bath,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";

// Mock data - in a real app, this would come from an API or database
const mockProperties = [
  {
    id: "altitude-retreat-kadenwood-private-butler",
    name: "Altitude Retreat | Kadenwood | Private Butler",
    location: "Whistler, Canada",
    category: "whistler",
    description:
      "Altitude Retreat is situated in the most prestigious ski-in ski-out neighbourhood in Whistler. Located just a stone's throw away from the exclusive Kadenwood residence only gondola makes this property the perfect location for your Whistler vacation! This well equipped property features everything you need for an indulgent stay. Enjoy a workout in the fully spec'd gym then take a dip in the hot tub. Secluded by trees, it doesn't get more private than this!",
    fullDescription: `
      <h3>The Space</h3>
      <p>This magnificent 10,000 sq.ft interior has 7 bedrooms and 5.5 bathrooms. This one-of-a-kind hideaway has features such as a library, luxurious in-home gym, sauna, and ski/board mud room. 560 sq.ft of deck and balcony space and 800 sq ft of outdoor living space with your own private forest and stunning garden setting. This high end residence has a fully equipped gym, a soothing hot tub, and is surrounded by trees for maximum solitude. Altitude Retreat is perfect for an unforgettable Whistler vacation.</p>
      
      <p>Private Butler included: In addition to serving breakfast, lunch, and dinner, the butler is responsible for all food and drink service throughout the day. To create the perfect ambiance, they will set up the hot tub, light the fire, and adjust the music and household functions. Get your daily dose of caffeine from your own personal barista. Overall, the butler is there to make your stay as smooth and comfortable as possible.</p>
      
      <h3>Bedroom Layout</h3>
      <p><strong>Upper Level:</strong> (3 Bedrooms - sleeps 10)</p>
      <p>Master bedroom with king bed and ensuite bathroom with large walk in shower and stand alone bath tub, 12' x 15' walk ensuite walk-in closet. Master Bedroom has a large TV and fireplace, with stunning mountain views. Behind the master bedroom, is the bunk house with 3 queen beds with a large smart TV, spacious games table with a balcony. Access to these room is through the master bedroom and shares the spacious bathroom. Additional large bedroom with king bed, and en suite bathroom on upper floor located at the other end of the corridor.</p>
      
      <p><strong>Main Level:</strong> (2 Bedrooms - Sleeps 4)</p>
      <p>Large bedroom equipped with King Bed and Private Balcony Office fireplace and large view windows and bookshelves. Additional queen bed with closet on this main floor. Main floor bedrooms can use the powder room bathroom plus the shower next to the gym (gym on lower level) if needed. Main floor has 2 bedrooms, sleeps 4. Main floor has a living area, fully equipped kitchen and dining area. Main floor level garage is currently not in service.</p>
      
      <p>(Optional): Additional twin bed can be rented and arranged in the office for a private sleeping room for 1 guest.</p>
      
      <p><strong>Lower Level:</strong> (2 Bedrooms - Sleeps 4)</p>
      <p>Two large master bedrooms with king beds and ensuite bathrooms Lower Level also contains a fully-equipped gym and sauna.</p>
      
      <p>Total Sleeping Capacity: 18 (10 + 4 + 4) Sleeps 18 | 7 bedrooms</p>
      
      <h3>Location</h3>
      <p>Extraordinary retreat located on a private park-like setting that offers fantastic ski-in/ski-out access to Whistler Mountain via your private residents-only Kadenwood gondola.</p>
      
      <p>Take the 5-minute gondola ride, a 5-minute drive, or a quick ski ride down will bring you to all the amenities in Creekside Village. Take advantage of some of Whistler's best restaurants and shops. Enjoy quality coffee and delicious breads and pastries at Rockit Coffee and Bred. Red Door Bistro, Rimrock Cafe, Cure Lounge (my favorite), Creekbread, and Dusty's. Enjoy Creekside's newest restaurant Mekong, this fine-dining Thai restaurant and gorgeous patio is a local favorite. Tuck into delicious authentic food and imaginative cocktails. Shop at 122 West for beautiful home decor and Abigail's for stylish clothing. The Cop-Op gas station in Creekside has a convenience store and is open until 10 pm. For groceries, the Creekside Market is also within walking distance. Included when booking this property, we will help you with all your VIP experiences such as coordinating chefs, chalet hosts/servers, helicopter experiences, transportation to and from the airport, snowmobiling, restaurant reservations and recommendations, hiking recommendations, and more.</p>
    `,
    guests: 18,
    bedrooms: 7,
    beds: 10,
    bathrooms: 5.5,
    priceRange: "$7,500-$10,000 +",
    minStay: "3-4 nights | 7 Christmas/NY",
    airbnbLink: "https://airbnb.com/rooms/example",
    amenities: {
      hotTub: true,
      pool: false,
      sauna: true,
      skiInOut: true,
      fireplace: true,
      petFriendly: false,
      chefKitchen: true,
      butler: true,
      views: true,
      parking: true,
    },
    images: [
      "/assets/properties/altitude-retreat/1.jpg",
      "/assets/properties/altitude-retreat/2.jpg",
      "/assets/properties/altitude-retreat/3.jpg",
      "/assets/properties/altitude-retreat/4.jpg",
      "/assets/properties/altitude-retreat/5.jpg",
    ],
  },
  // Add more mock properties as needed
];

interface PropertyData {
  id: string;
  name: string;
  location: string;
  category: string;
  description: string;
  fullDescription: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  priceRange: string;
  minStay: string;
  airbnbLink?: string;
  amenities: {
    hotTub: boolean;
    pool: boolean;
    sauna: boolean;
    skiInOut: boolean;
    fireplace: boolean;
    petFriendly: boolean;
    chefKitchen: boolean;
    butler: boolean;
    views: boolean;
    parking: boolean;
  };
  images: string[];
}

interface PropertyPageProps {
  property: PropertyData | null;
}

const PropertyPage: React.FC<PropertyPageProps> = ({ property }) => {
  const router = useRouter();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (router.isFallback || !property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{property.name} | AceHost</title>
        <meta name="description" content={property.description} />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-16 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {property.name}
                </h1>
                <div className="flex flex-col items-end">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Users className="h-5 w-5 mr-1" />
                    <span>{property.guests} guests</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    Nightly Price Range: {property.priceRange}
                  </div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Property Gallery */}
            <div className="mb-10">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-4">
                <img
                  src={property.images[activeImageIndex]}
                  alt={`${property.name} - Image ${activeImageIndex + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative aspect-[4/3] overflow-hidden rounded-md ${
                      activeImageIndex === index
                        ? "ring-2 ring-blue-500"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.name} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="space-y-10">
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-gray-200 py-6">
                    <div className="flex flex-col items-center text-center">
                      <Bed className="h-6 w-6 text-gray-500 mb-2" />
                      <span className="text-sm text-gray-500">Bedrooms</span>
                      <span className="font-semibold">{property.bedrooms}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Users className="h-6 w-6 text-gray-500 mb-2" />
                      <span className="text-sm text-gray-500">Guests</span>
                      <span className="font-semibold">{property.guests}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Bath className="h-6 w-6 text-gray-500 mb-2" />
                      <span className="text-sm text-gray-500">Bathrooms</span>
                      <span className="font-semibold">
                        {property.bathrooms}
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Calendar className="h-6 w-6 text-gray-500 mb-2" />
                      <span className="text-sm text-gray-500">Min. Stay</span>
                      <span className="font-semibold text-xs">
                        {property.minStay}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Details
                    </h2>
                    <div
                      className="prose prose-blue max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: property.fullDescription,
                      }}
                    ></div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Amenities
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.amenities.hotTub && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Hot Tub</span>
                        </div>
                      )}
                      {property.amenities.pool && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Pool</span>
                        </div>
                      )}
                      {property.amenities.sauna && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Sauna</span>
                        </div>
                      )}
                      {property.amenities.skiInOut && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Ski In/Out</span>
                        </div>
                      )}
                      {property.amenities.fireplace && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Fireplace</span>
                        </div>
                      )}
                      {property.amenities.petFriendly && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Pet Friendly</span>
                        </div>
                      )}
                      {property.amenities.chefKitchen && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Chef Kitchen</span>
                        </div>
                      )}
                      {property.amenities.butler && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Butler Service</span>
                        </div>
                      )}
                      {property.amenities.views && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Mountain Views</span>
                        </div>
                      )}
                      {property.amenities.parking && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <span>Parking</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Contact Us
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Interested in this property? Contact us for availability
                      and booking details.
                    </p>
                    <Link
                      href="/contact"
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Contact Us
                    </Link>
                  </div>

                  {property.airbnbLink && (
                    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Book Online
                      </h3>
                      <a
                        href={property.airbnbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600"
                      >
                        Book on Airbnb
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  )}

                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Property Category
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                      <span className="capitalize">
                        {property.category.replace("-", " ")} Properties
                      </span>
                    </div>
                    <Link
                      href={`/properties?category=${property.category}`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View more {property.category.replace("-", " ")} properties
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const { locale } = context;

  // In a real application, fetch property data from API or database
  // For now, we're using our mock data
  const property = mockProperties.find(
    (p) => p.id === slug || p.id.replace(/\s+/g, "-").toLowerCase() === slug
  );

  // If property not found, return 404
  if (!property) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      property,
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default PropertyPage;
