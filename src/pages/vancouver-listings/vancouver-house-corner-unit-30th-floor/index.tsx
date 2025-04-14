import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaBed, FaBath } from "react-icons/fa";
import { X } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const VancouverHouseCornerUnit = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/vancouver-house/645adc4aca79d22167763483_Vancouver_House-03.jpg",
    "/photos/properties/vancouver-house/645adc49fb32ea8384334e2e_Vancouver_House-05.jpg",
    "/photos/properties/vancouver-house/645adc48fb32ea2543334d52_Vancouver_House-13.jpg",
    "/photos/properties/vancouver-house/645adc480342565cb5e2cac6_Vancouver_House-12.jpg",
    "/photos/properties/vancouver-house/645adc4803425681d3e2cab2_Vancouver_House-15.jpg",
    "/photos/properties/vancouver-house/645adc486c42a14dc2279913_Vancouver_House-18.jpg",
    "/photos/properties/vancouver-house/645adc48fb32ea7415334d5f_Vancouver_House-19.jpg",
    "/photos/properties/vancouver-house/645adc4a8fd51115efee7fd0_Vancouver_House-20.jpg",
    "/photos/properties/vancouver-house/645adc48fb32ea9b24334d60_Vancouver_House-21.jpg",
    "/photos/properties/vancouver-house/645adc4a44759e465d596517_Vancouver_House-23.jpg",
    "/photos/properties/vancouver-house/645adc4a8ac76bef6df533ed_Vancouver_House-25.jpg",
    "/photos/properties/vancouver-house/645adc4aca79d28dfd76348b_Vancouver_House-27.jpg",
    "/photos/properties/vancouver-house/645add450dd1f71139a57bb7_Vancouver_House-45.jpg",
  ];

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;

    if (direction === "prev") {
      setSelectedPhotoIndex(
        selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1
      );
    } else {
      setSelectedPhotoIndex(
        selectedPhotoIndex === photos.length - 1 ? 0 : selectedPhotoIndex + 1
      );
    }
  };

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>The Vancouver House, Corner Unit | 30th Floor - AceHost</title>
        <meta
          name="description"
          content="Experience luxury living in this stunning corner unit on the 30th floor of the iconic Vancouver House. Panoramic views, designer furnishings, and all amenities."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>4 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>
                  Nightly Price Range: $400-$700 | Luxury Building Amenities
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              The Vancouver House, Corner Unit | 30th Floor
            </h1>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                More Photos
              </button>
              <Link
                href="#details"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium hover:bg-gray-800 text-sm sm:text-base"
              >
                Details
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <a
                href="https://www.airbnb.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                Minimum Stay Requirement: 2 Nights | 4 Nights in Peak Season
              </p>
            </div>

            {/* Featured Video/Photo */}
            <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={photos[0]}
                  alt="Vancouver House Corner Unit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Vancouver House interior ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 4}
                  />
                </div>
              ))}
            </div>
            {photos.length > 8 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="inline-flex items-center px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium"
                >
                  View all {photos.length} photos
                </button>
              </div>
            )}
          </div>

          {/* Property Details */}
          <div id="details" className="max-w-7xl mx-auto px-4 mb-16 sm:mb-20">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Property Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6">
                    Welcome to this spectacular corner unit on the 30th floor of
                    the iconic Vancouver House. This architectural masterpiece
                    offers breathtaking 270-degree views of False Creek, English
                    Bay, and the North Shore mountains through floor-to-ceiling
                    windows.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Featuring 2 bedrooms and 2 bathrooms across 1,200 square
                    feet of thoughtfully designed living space, this luxury
                    apartment combines modern elegance with ultimate comfort.
                    The unit has been professionally decorated with high-end
                    designer furnishings throughout, creating a sophisticated
                    yet comfortable atmosphere.
                  </p>
                  <p className="text-gray-700 mb-6">
                    The open-concept living area flows seamlessly onto a large
                    balcony, perfect for enjoying your morning coffee while
                    taking in the spectacular views. The gourmet kitchen
                    features premium Miele appliances, quartz countertops, and
                    everything you need to prepare delicious meals.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 mb-6">
                    As a guest, you&apos;ll have access to the building&apos;s
                    exceptional amenities, including a fitness center, indoor
                    pool and hot tub, and the stunning rooftop garden. The
                    building also offers 24-hour concierge service for added
                    convenience and security.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Located in the heart of Vancouver&apos;s Beach District,
                    you&apos;ll be steps away from the Seawall, Granville
                    Island, and countless restaurants, shops, and entertainment
                    options. This prime location makes it the perfect base for
                    exploring everything Vancouver has to offer.
                  </p>
                  <div className="flex items-center space-x-8 mt-6">
                    <div className="flex items-center">
                      <FaBed className="text-gray-700 mr-2 text-xl" />
                      <span className="text-gray-700">2 Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="text-gray-700 mr-2 text-xl" />
                      <span className="text-gray-700">2 Bathrooms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Details */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Room Layout
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Primary Bedroom
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Spacious primary bedroom with king-sized bed, premium
                    linens, ample closet space, and an ensuite bathroom
                    featuring a walk-in shower. Floor-to-ceiling windows offer
                    stunning city and water views.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Second Bedroom
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Comfortable second bedroom with queen-sized bed, desk
                    workspace, closet, and access to the main bathroom with a
                    soaking tub/shower combination.
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Full Kitchen with High-End Appliances</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>In-Suite Washer & Dryer</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Floor-to-Ceiling Windows</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Large Balcony with Seating</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Smart TVs</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Designer Furnishings</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Fitness Center Access</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Indoor Pool & Hot Tub Access</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Rooftop Garden Access</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-900 mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>24-Hour Concierge</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Location
              </h2>
              <p className="text-gray-700 mb-6">
                Located in Vancouver&apos;s Beach District, you&apos;ll be
                perfectly positioned to explore the city. The Vancouver House is
                just:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Steps from the Seawall walking/biking path</li>
                <li>5-minute walk to Granville Island</li>
                <li>10-minute walk to Yaletown restaurants and shops</li>
                <li>15-minute walk to English Bay Beach</li>
                <li>Close to public transit options</li>
                <li>25-minute drive from Vancouver International Airport</li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Contact Us About This Property
              </h2>
              <ContactForm property="Vancouver House Corner Unit" />
            </div>
          </div>
        </main>

        {/* Photo Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="relative min-h-screen flex flex-col justify-center">
              <button
                onClick={closeAllPhotos}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-20 text-3xl"
              >
                <X size={32} />
              </button>
              <div className="p-4 sm:p-8">
                <h2 className="text-white text-2xl font-bold mb-6">
                  All Photos ({photos.length})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] relative cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Vancouver House interior ${index + 1}`}
                        fill
                        className="object-cover hover:opacity-90 transition-opacity rounded-lg"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Screen Photo */}
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <button
              onClick={closeFullScreenPhoto}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-20 text-3xl"
            >
              <X size={32} />
            </button>
            <button
              onClick={() => navigatePhoto("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => navigatePhoto("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`Vancouver House interior ${selectedPhotoIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {selectedPhotoIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default VancouverHouseCornerUnit;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};
