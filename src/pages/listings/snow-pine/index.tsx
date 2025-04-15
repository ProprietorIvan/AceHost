import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaBed, FaBath } from "react-icons/fa";
import { X } from "lucide-react";

const SnowPine = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  // Property photos
  const photos = [
    "/photos/properties/Snowpine 3-bed Saul/01-2040 Karen Cres-01.jpg",
    "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
    "/photos/properties/Snowpine 3-bed Saul/03-2040 Karen Cres-03.jpg",
    "/photos/properties/Snowpine 3-bed Saul/04-2040 Karen Cres-04.jpg",
    "/photos/properties/Snowpine 3-bed Saul/05-2040 Karen Cres-05.jpg",
    "/photos/properties/Snowpine 3-bed Saul/06-2040 Karen Cres-06.jpg",
    "/photos/properties/Snowpine 3-bed Saul/07-2040 Karen Cres-07.jpg",
    "/photos/properties/Snowpine 3-bed Saul/08-2040 Karen Cres-08.jpg",
    "/photos/properties/Snowpine 3-bed Saul/09-2040 Karen Cres-09.jpg",
    "/photos/properties/Snowpine 3-bed Saul/10-2040 Karen Cres-10.jpg",
    "/photos/properties/Snowpine 3-bed Saul/11-2040 Karen Cres-11.jpg",
    "/photos/properties/Snowpine 3-bed Saul/12-2040 Karen Cres-12.jpg",
    "/photos/properties/Snowpine 3-bed Saul/13-2040 Karen Cres-13.jpg",
    "/photos/properties/Snowpine 3-bed Saul/14-2040 Karen Cres-14.jpg",
    "/photos/properties/Snowpine 3-bed Saul/15-2040 Karen Cres-15.jpg",
    "/photos/properties/Snowpine 3-bed Saul/16-2040 Karen Cres-16.jpg",
    "/photos/properties/Snowpine 3-bed Saul/17-2040 Karen Cres-17.jpg",
    "/photos/properties/Snowpine 3-bed Saul/18-2040 Karen Cres-18.jpg",
    "/photos/properties/Snowpine 3-bed Saul/19-2040 Karen Cres-19.jpg",
    "/photos/properties/Snowpine 3-bed Saul/20-2040 Karen Cres-20.jpg",
    "/photos/properties/Snowpine 3-bed Saul/21-2040 Karen Cres-21.jpg",
    "/photos/properties/Snowpine 3-bed Saul/22-2040 Karen Cres-22.jpg",
    "/photos/properties/Snowpine 3-bed Saul/23-2040 Karen Cres-23.jpg",
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
        <title>Snowpine | Creekside - AceHost</title>
        <meta
          name="description"
          content="This home is a rare find and ideally located in Creekside, just a 7-minute walk from the Creekside Gondola, making this the perfect location for your family ski getaway!"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>6 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>Monthly Price Range: $10,000 - $12,000</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Snowpine | Creekside
            </h1>

            {/* Pricing Information */}
            <div className="flex flex-col items-center mb-8 space-y-2">
              <div className="bg-gray-100 rounded-lg px-6 py-4 max-w-2xl w-full">
                <div className="space-y-2">
                  <p className="text-gray-800 text-center font-medium">
                    Monthly Price Range: $10,000 - $12,000
                  </p>
                  <p className="text-gray-800 text-center">90 night minimum</p>
                  <p className="text-gray-800 text-center">
                    $30,000 - 3 months | $40,000- 4 months
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
                href="https://www.airbnb.ca/rooms/744832560480313027?guests=1&adults=1&s=67&unique_share_id=50412c76-d839-4753-bf56-19310f38a4ef"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                Minimum Stay Requirement: 90 Nights
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
                    alt={`Snowpine interior ${index + 1}`}
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
              This home is a rare find and ideally located in Creekside, just a
              7-minute walk from the Creekside Gondola, making this the perfect
              location for your family ski getaway! The large open-concept
              living area is spacious but homely and it&apos;s tastefully
              furnished with a cozy fireplace. Relax on the large covered patio
              deck, while using the BBQ and outdoor fire pit.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="Snowpine Interior"
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
                  This contemporary duplex boasts modern finishes and appliances
                  to match. It is well equipped with everything you need for a
                  comfortable stay. The kitchen, dining, and living areas flow
                  seamlessly together in the open plan living space. In
                  addition, this natural light filled property is beautifully
                  complimented by the bright and spacious 3 bedrooms.
                </p>
                <p className="text-gray-800 mb-6">
                  Sleeping 6 comfortably in 3 bedrooms with 3.5 bathrooms.
                </p>
                <p className="text-gray-800 mb-6 font-bold">
                  BONUS: Ski locker available for your use located at the base
                  of Creekside just off the ski slopes. No need to carry your
                  equipment back and forth from the home!
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[8]}
                    alt="Snowpine Bedroom"
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
                        d="M7 13C8.66 13 10 11.66 10 10C10 8.34 8.66 7 7 7C5.34 7 4 8.34 4 10C4 11.66 5.34 13 7 13ZM19 13C20.66 13 22 11.66 22 10C22 8.34 20.66 7 19 7C17.34 7 16 8.34 16 10C16 11.66 17.34 13 19 13ZM7 15C4.67 15 0 16.17 0 18.5V20H14V18.5C14 16.17 9.33 15 7 15ZM19 15C18.71 15 18.38 15.02 18.03 15.05C19.19 15.89 20 17.02 20 18.5V20H24V18.5C24 16.17 21.33 15 19 15Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Bedroom Layout</h2>
                </div>

                <p className="font-bold mb-2">UPPER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Master bedroom 1:</span> Located
                  off the kitchen, this cozy bedroom has a plush king bed,
                  ensuite bathroom with a large walk-in shower and heated
                  floors. Access to a private balcony.
                </p>
                <p className="mb-4">Powder room located on this floor.</p>

                <p className="font-bold mb-2">LOWER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2:</span> On the ground
                  floor set near the back of the house is a spacious bedroom
                  with a king bed, office desk space and an ensuite bathroom
                  with a shower and bathtub. Access to the hot tub is via this
                  room on the balcony.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 3:</span> Next to
                  bedroom 3 is a comfortable room with a queen sized bed and
                  ensuite bathroom with a shower and bathtub.
                </p>
                <p className="mb-4">
                  Single car garage with a dedicated Tesla Charge and lots of
                  storage for all your equipment.
                </p>
              </div>
            </div>

            {/* Location Section */}
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
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Location</h2>
              </div>
              <p className="text-gray-800 max-w-4xl">
                This home is in a prime location just walking distance from
                Creekside Gondola! Enjoy a 2-minute stroll on the valley trail
                to Nita Lake and another 5-minute walk to Alpha Lake. On your
                doorstep, you have some of Whistler&apos;s best restaurants, Red
                Door Bistro, Rimrock Cafe, Cure Lounge (my favorite),
                Creekbread, and Dusty&apos;s are also just a short walk away!
                The Co-Op gas station and convenience store is just a block
                away. For groceries, the Creekside Market is also walking
                distance.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Snowpine - All Photos
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
                        alt={`Snowpine ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => navigatePhoto("prev")}
            >
              &larr;
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">
              <div className="relative w-full h-full">
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Snowpine full view ${selectedPhotoIndex + 1}`}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
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

export default SnowPine;
