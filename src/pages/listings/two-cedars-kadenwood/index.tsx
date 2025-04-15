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

const TwoCedarsKadenwood = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Two Cedars New/OSA_AncientCW1002 Panorama.jpg",
    "/photos/properties/Two Cedars New/02-2934 Ancient Cedars-02.jpg",
    "/photos/properties/Two Cedars New/03-2934 Ancient Cedars-03.jpg",
    "/photos/properties/Two Cedars New/04-2934 Ancient Cedars-04.jpg",
    "/photos/properties/Two Cedars New/05-2934 Ancient Cedars-05.jpg",
    "/photos/properties/Two Cedars New/06-2934 Ancient Cedars-06.jpg",
    "/photos/properties/Two Cedars New/07-2934 Ancient Cedars-07.jpg",
    "/photos/properties/Two Cedars New/11-2934 Ancient Cedars-11.jpg",
    "/photos/properties/Two Cedars New/12-2934 Ancient Cedars-12.jpg",
    "/photos/properties/Two Cedars New/13-2934 Ancient Cedars-13.jpg",
    "/photos/properties/Two Cedars New/14-2934 Ancient Cedars-14.jpg",
    "/photos/properties/Two Cedars New/15-2934 Ancient Cedars-15.jpg",
    "/photos/properties/Two Cedars New/16-2934 Ancient Cedars-16.jpg",
    "/photos/properties/Two Cedars New/17-2934 Ancient Cedars-17.jpg",
    "/photos/properties/Two Cedars New/18-2934 Ancient Cedars-18.jpg",
    "/photos/properties/Two Cedars New/20-2934 Ancient Cedars-20.jpg",
    "/photos/properties/Two Cedars New/21-2934 Ancient Cedars-21.jpg",
    "/photos/properties/Two Cedars New/24-2934 Ancient Cedars-24.jpg",
    "/photos/properties/Two Cedars New/25-2934 Ancient Cedars-25.jpg",
    "/photos/properties/Two Cedars New/26-2934 Ancient Cedars-26.jpg",
    "/photos/properties/Two Cedars New/28-2934 Ancient Cedars-28.jpg",
    "/photos/properties/Two Cedars New/30-2934 Ancient Cedars-30.jpg",
    "/photos/properties/Two Cedars New/31-2934 Ancient Cedars-31.jpg",
    "/photos/properties/Two Cedars New/32-2934 Ancient Cedars-32.jpg",
    "/photos/properties/Two Cedars New/33-2934 Ancient Cedars-33.jpg",
    "/photos/properties/Two Cedars New/34-2934 Ancient Cedars-34.jpg",
    "/photos/properties/Two Cedars New/35-2934 Ancient Cedars-35.jpg",
    "/photos/properties/Two Cedars New/36-2934 Ancient Cedars-36.jpg",
    "/photos/properties/Two Cedars New/37-2934 Ancient Cedars-37.jpg",
    "/photos/properties/Two Cedars New/38-2934 Ancient Cedars-38.jpg",
    "/photos/properties/Two Cedars New/39-2934 Ancient Cedars-39.jpg",
    "/photos/properties/Two Cedars New/41-2934 Ancient Cedars-41.jpg",
    "/photos/properties/Two Cedars New/42-2934 Ancient Cedars-42.jpg",
    "/photos/properties/Two Cedars New/43-2934 Ancient Cedars-43.jpg",
    "/photos/properties/Two Cedars New/46-2934 Ancient Cedars-46.jpg",
    "/photos/properties/Two Cedars New/48-2934 Ancient Cedars-48.jpg",
    "/photos/properties/Two Cedars New/49-2934 Ancient Cedars-49.jpg",
    "/photos/properties/Two Cedars New/51-2934 Ancient Cedars-51.jpg",
    "/photos/properties/Two Cedars New/52-2934 Ancient Cedars-52.jpg",
    "/photos/properties/Two Cedars New/OSA_AncientCW0864-.jpg",
    "/photos/properties/Two Cedars New/OSA_AncientCW1129.jpg",
    "/photos/properties/Two Cedars New/OSA_AncientCW1248.jpg",
    "/photos/properties/Two Cedars New/OSA_AncientCW1437-Panorama.jpg",
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
        <title>Two Cedars | Kadenwood | AceHost</title>
        <meta
          name="description"
          content="Experience the ultimate luxury at Two Cedars in Kadenwood. This 8,000+ square foot ski-in/ski-out mansion features a hot tub, private views, and exclusive amenities."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>10 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $4,000-$7,000</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Two Cedars | Kadenwood
            </h1>

            {/* Pricing Information */}
            <div className="flex flex-col items-center mb-8 space-y-2">
              <div className="bg-gray-100 rounded-lg px-6 py-4 max-w-2xl w-full">
                <div className="space-y-2">
                  <p className="text-gray-800 text-center font-medium">
                    $4,000-$7,000 Nightly
                  </p>
                  <p className="text-gray-800 text-center">
                    $4,000-$6,000 Nightly | Winter
                  </p>
                  <p className="text-gray-800 text-center">
                    $6,000-$7,000 Nightly | Christmas & NY
                  </p>
                </div>
              </div>
            </div>

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
                href="https://www.airbnb.ca/rooms/658945646684454022"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                Minimum Stay Requirement: 3-4 Nights | 6-7 Christmas & NY
              </p>
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
                    alt={`Two Cedars interior ${index + 1}`}
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

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Two Cedars is a luxurious 7-bedroom, 8.5-bathroom property located
              in the prestigious Kadenwood neighborhood, Whistler&apos;s most
              exclusive residential area. This stunning mountain retreat offers
              unparalleled luxury, privacy, and breathtaking views of the
              surrounding mountains and valleys.
              <br />
              <br />
              With over 8,000 square feet of living space, this elegantly
              designed home features soaring ceilings, floor-to-ceiling windows,
              a gourmet kitchen, multiple fireplaces, a home theater, and a
              private outdoor hot tub.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[6]}
                    alt="Two Cedars Interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-black text-white p-4 rounded-full mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">The Space</h2>
                </div>
                <p className="text-gray-800 mb-6">
                  The property combines rustic mountain charm with modern
                  luxury, creating an unforgettable Whistler experience. Located
                  in Kadenwood, guests enjoy access to a private gondola that
                  provides exclusive ski-in/ski-out access to Whistler Mountain.
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <FaBed className="text-gray-600 mr-2" size={20} />
                    <span className="text-gray-800">7 Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="text-gray-600 mr-2" size={20} />
                    <span className="text-gray-800">8.5 Bathrooms</span>
                  </div>
                </div>
                <p className="text-gray-800">
                  Perfect for large groups or multiple families, Two Cedars
                  offers the ultimate luxury getaway in Whistler&apos;s most
                  coveted location.
                </p>
              </div>
            </div>
          </div>

          {/* Photos Modal - Show all photos */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white text-xl font-medium">
                  Two Cedars - {photos.length} photos
                </h3>
                <button
                  onClick={closeAllPhotos}
                  className="text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] relative cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Two Cedars photo ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:opacity-95 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Full Screen Photo View */}
          {selectedPhotoIndex !== null && (
            <div
              className="fixed inset-0 bg-black z-50 flex items-center justify-center"
              onClick={closeFullScreenPhoto}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("prev");
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="relative h-screen w-screen flex items-center justify-center">
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Two Cedars photo ${selectedPhotoIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain p-4"
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("next");
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <button
                onClick={closeFullScreenPhoto}
                className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 z-10"
              >
                <X size={24} />
              </button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TwoCedarsKadenwood;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};
