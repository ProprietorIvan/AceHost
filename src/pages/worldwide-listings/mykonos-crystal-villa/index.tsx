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

const MykonosCrystalVilla = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/Header4-TRG_4163.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/Header5-TRG_5803.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/Header7-TRG_4164-2.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4106.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4124.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4130.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4246.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4268.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4274.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4292.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4293.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4306.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4312.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4330.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4339.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4356.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4374.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4381.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4397.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4435.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_4439.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_5438.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_5441.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_5553.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_5583.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_5591.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_5619.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_5792.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_5800.jpg",
    "/photos/properties/Villa Aegean Mykonos Greece/TRG_5825.jpg",
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
        <title>Villa Aegean | Mykonos, Greece - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Villa Aegean in Mykonos, Greece. This private luxury estate offers 10 bedrooms for up to 20 guests, stunning sea views, infinity pool, and is just a five-minute drive from Mykonos Town."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>20 guests</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Villa Aegean
            </h1>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                Minimum Stay Requirement: 4 Nights
              </p>
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
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white border border-gray-700 rounded font-medium hover:bg-gray-800 text-sm sm:text-base"
              >
                Details
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book Now
              </Link>
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
                    alt={`Villa Aegean Mykonos ${index + 1}`}
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
              Nestled above the port of Mykonos and just a five-minute drive
              from Mykonos Town, Villa Imperial is a private luxury estate
              surrounded by the island&apos;s cosmopolitan vibes, world-famous
              restaurants, and vibrant social life. The villa&apos;s unique
              style epitomizes the traditional Cycladic architecture
              complemented with modern touches, creating a cozy and laid-back
              luxury retreat.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[0]}
                    alt="Villa Aegean Mykonos - Exterior View"
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
                  The villa opens into ample bright spaces with all-white walls,
                  wooden floors and ceilings, large windows with stunning
                  vistas, exquisite décor, and state-of-the-art furniture — the
                  perfect place to withdraw and relax after a full day exploring
                  Mykonos&apos; treasures.
                </p>
                <p className="text-gray-800 mb-6">
                  The private villa offers ten bedrooms and can comfortably
                  accommodate up to 20 guests, constituting an ideal choice for
                  large families or groups of friends. All bedrooms are stylish
                  and comfortable, they have modern en-suite bathrooms, and most
                  of them enjoy magical sea and sunset views from their private
                  verandas.
                </p>
                <p className="text-gray-800">
                  The villa&apos;s outdoors spaces enjoy breathtaking panoramic
                  views of the Aegean Sea and the magical sunsets of Mykonos,
                  and consist of an infinity swimming pool, shaded sitting and
                  lounge areas, an elegant outdoor living room with a fireplace,
                  barbecue facilities, two dining areas, as well as an outdoor
                  shower and pool bathroom. Diving in the crystal clear
                  turquoise waters of the pool, lying on a lounger to bask in
                  the sun, savouring private alfresco dinners and drinks or
                  enjoying casual barbecue days with family and friends will be
                  some of the things you will most enjoy during your stay. Enjoy
                  private, carefree and memorable holidays at Villa Imperial!
                </p>
              </div>
            </div>

            {/* Additional Rules Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[4]}
                    alt="Villa Aegean Mykonos - Pool Area"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 order-2 md:order-1">
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
                        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM11 16H13V18H11V16ZM11 6H13V14H11V6Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Additional Rules</h2>
                </div>

                <p className="mb-2">
                  <span className="font-bold">Suitable for Infants:</span> Less
                  than 3 years old
                </p>
                <p className="mb-2">
                  <span className="font-bold">Smoking Policy:</span> No Smoking
                  on Indoor Areas
                </p>
                <p className="mb-2">
                  <span className="font-bold">Pets:</span> Not Allowed
                </p>
                <p className="mb-2">
                  <span className="font-bold">Events:</span> Allowed for Parties
                  or Events Upon Request
                </p>
                <p className="mb-2">
                  <span className="font-bold">Booking:</span> Flexible Booking
                  Days
                </p>
                <p className="mb-2">
                  <span className="font-bold">Check-in/Check-out:</span> Check
                  in time is 14:00 Hrs and check out time is 12:00 Hrs.
                </p>
                <p className="mb-2">
                  <span className="font-bold">Late check-out:</span> Possible
                  upon availability at an extra charge.
                </p>
                <p className="mb-2">
                  <span className="font-bold">Rates:</span> Calculated per
                  night. Include VAT & City Taxes and can be changed in case of
                  tax modification.
                </p>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="mb-16">
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
                      d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Amenities</h2>
              </div>
              <p className="text-gray-800 max-w-4xl mb-6">
                <span className="font-bold">Transportation:</span> VAN 24h with
                Chauffeur, Butler, Chef, VIP Security Guard 24 hours,
                Complimentary Breakfast (Groceries on Guest), Daily Maid Service
                (Cleaning, Serving, Linens 4h Everyday/Cleaner), Complimentary
                High Speed WiFi, Concierge Services (Arrangement of Various
                Activities)
              </p>
              <p className="text-gray-800 max-w-4xl">
                <span className="font-bold">Entertainment & Comfort:</span>{" "}
                Internet Access (WiFi), TV Theater, Satellite TV – Netflix,
                Generator (in case of power cut), Underfloor Heating
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Villa Aegean Mykonos - All Photos
              </h2>
              <button
                onClick={closeAllPhotos}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Villa Aegean Mykonos interior ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority={index < 6}
                        loading={index < 6 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Full-screen Photo View */}
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center">
            <div className="absolute top-4 right-4 flex space-x-4">
              <button
                onClick={closeFullScreenPhoto}
                className="text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-[60]"
              onClick={() => navigatePhoto("prev")}
            >
              &larr;
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">
              <div className="relative w-full h-full">
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Villa Aegean Mykonos full view ${
                    selectedPhotoIndex + 1
                  }`}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors z-[60]"
              onClick={() => navigatePhoto("next")}
            >
              &rarr;
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm">
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};

export default MykonosCrystalVilla;
