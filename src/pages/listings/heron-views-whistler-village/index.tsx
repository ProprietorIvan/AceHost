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

const HeronViewsWhistlerVillage = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/3445-Heron-Place/70-3445 Heron Place 27-Edit.jpg",
    "/photos/properties/3445-Heron-Place/69-3445 Heron Place 55-Edit.jpg",
    "/photos/properties/3445-Heron-Place/68-3445 Heron Place 53-Edit.jpg",
    "/photos/properties/3445-Heron-Place/67-3445 Heron Place 52-Edit.jpg",
    "/photos/properties/3445-Heron-Place/66-3445 Heron Place 51-Edit.jpg",
    "/photos/properties/3445-Heron-Place/65-3445 Heron Place 25-Edit.jpg",
    "/photos/properties/3445-Heron-Place/64-3445 Heron Place 24-Edit.jpg",
    "/photos/properties/3445-Heron-Place/63-3445 Heron Place 63.jpg",
    "/photos/properties/3445-Heron-Place/62-3445 Heron Place 62.jpg",
    "/photos/properties/3445-Heron-Place/61-3445 Heron Place 61.jpg",
    "/photos/properties/3445-Heron-Place/60-3445 Heron Place 60.jpg",
    "/photos/properties/3445-Heron-Place/59-3445 Heron Place 59.jpg",
    "/photos/properties/3445-Heron-Place/58-3445 Heron Place 58.jpg",
    "/photos/properties/3445-Heron-Place/54-3445 Heron Place 54.jpg",
    "/photos/properties/3445-Heron-Place/50-3445 Heron Place 50.jpg",
    "/photos/properties/3445-Heron-Place/48-3445 Heron Place 48.jpg",
    "/photos/properties/3445-Heron-Place/47-3445 Heron Place 47.jpg",
    "/photos/properties/3445-Heron-Place/46-3445 Heron Place 46.jpg",
    "/photos/properties/3445-Heron-Place/45-3445 Heron Place 45.jpg",
    "/photos/properties/3445-Heron-Place/44-3445 Heron Place 44.jpg",
    "/photos/properties/3445-Heron-Place/43-3445 Heron Place 43.jpg",
    "/photos/properties/3445-Heron-Place/42-3445 Heron Place 42.jpg",
    "/photos/properties/3445-Heron-Place/41-3445 Heron Place 41.jpg",
    "/photos/properties/3445-Heron-Place/40-3445 Heron Place 40.jpg",
    "/photos/properties/3445-Heron-Place/39-3445 Heron Place 39.jpg",
    "/photos/properties/3445-Heron-Place/38-3445 Heron Place 38.jpg",
    "/photos/properties/3445-Heron-Place/37-3445 Heron Place 37.jpg",
    "/photos/properties/3445-Heron-Place/36-3445 Heron Place 36.jpg",
    "/photos/properties/3445-Heron-Place/35-3445 Heron Place 35.jpg",
    "/photos/properties/3445-Heron-Place/34-3445 Heron Place 34.jpg",
    "/photos/properties/3445-Heron-Place/33-3445 Heron Place 33.jpg",
    "/photos/properties/3445-Heron-Place/32-3445 Heron Place 32.jpg",
    "/photos/properties/3445-Heron-Place/31-3445 Heron Place 31.jpg",
    "/photos/properties/3445-Heron-Place/30-3445 Heron Place 30.jpg",
    "/photos/properties/3445-Heron-Place/29-3445 Heron Place 29.jpg",
    "/photos/properties/3445-Heron-Place/28-3445 Heron Place 28.jpg",
    "/photos/properties/3445-Heron-Place/27-3445 Heron Place 27-Edit.jpg",
    "/photos/properties/3445-Heron-Place/25-3445 Heron Place 25.jpg",
    "/photos/properties/3445-Heron-Place/24-3445 Heron Place 24.jpg",
    "/photos/properties/3445-Heron-Place/23-3445 Heron Place 23.jpg",
    "/photos/properties/3445-Heron-Place/22-3445 Heron Place 22.jpg",
    "/photos/properties/3445-Heron-Place/21-3445 Heron Place 21.jpg",
    "/photos/properties/3445-Heron-Place/19-3445 Heron Place 19.jpg",
    "/photos/properties/3445-Heron-Place/18-3445 Heron Place 18.jpg",
    "/photos/properties/3445-Heron-Place/17-3445 Heron Place 17.jpg",
    "/photos/properties/3445-Heron-Place/16-3445 Heron Place 16.jpg",
    "/photos/properties/3445-Heron-Place/15-3445 Heron Place 15.jpg",
    "/photos/properties/3445-Heron-Place/14-3445 Heron Place 14.jpg",
    "/photos/properties/3445-Heron-Place/13-3445 Heron Place 13.jpg",
    "/photos/properties/3445-Heron-Place/11-3445 Heron Place 11.jpg",
    "/photos/properties/3445-Heron-Place/09-3445 Heron Place 09.jpg",
    "/photos/properties/3445-Heron-Place/08-3445 Heron Place 08.jpg",
    "/photos/properties/3445-Heron-Place/07-3445 Heron Place 07.jpg",
    "/photos/properties/3445-Heron-Place/06-3445 Heron Place 06.jpg",
    "/photos/properties/3445-Heron-Place/05-3445 Heron Place 05.jpg",
    "/photos/properties/3445-Heron-Place/04-3445 Heron Place 04.jpg",
    "/photos/properties/3445-Heron-Place/03-3445 Heron Place 03.jpg",
    "/photos/properties/3445-Heron-Place/02-3445 Heron Place 02.jpg",
    "/photos/properties/3445-Heron-Place/01-3445 Heron Place 01.jpg",
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
        <title>Heron Views | Whistler Village - AceHost</title>
        <meta
          name="description"
          content="Experience Whistler luxury at Heron Views, a beautiful 7,800 sq ft log chalet in Blueberry Hill with breathtaking mountain views, 5 bedrooms, 5.5 baths, and spectacular outdoor spaces including a 14-person hot tub and fire pit."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>11 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $1,200-$3,500</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Heron Views | Whistler Village
            </h1>

            {/* Pricing Information */}
            <div className="flex flex-col items-center mb-8 space-y-2">
              <div className="bg-gray-100 rounded-lg px-6 py-4 max-w-2xl w-full">
                <div className="space-y-2">
                  <p className="text-gray-800 text-center font-medium">
                    $1,200-$3,500 Nightly
                  </p>
                  <p className="text-gray-800 text-center">
                    $1,800-$3,000 Nightly | Winter
                  </p>
                  <p className="text-gray-800 text-center">
                    $3,000-$3,500 Nightly | Christmas & NY
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
                href="https://www.airbnb.ca/rooms/1168163637007998550?guests=1&adults=1&s=67&unique_share_id=8227e964-920d-4bc0-8073-13043963151f"
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
                    alt={`Heron Views interior ${index + 1}`}
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
              Welcome to Heron Views, a beautiful and inviting traditional log
              chalet in the prestigious Blueberry Hill neighborhood. This
              spectacular property offers breathtaking views of the Whistler
              Golf Course, Blackcomb, and Whistler Mountain. Spanning 7,800 sq
              ft, this spacious retreat sleeps 11 guests in 5 large bedrooms and
              5.5 baths.
              <br />
              <br />
              Just a 3–4-minute drive to the village and slopes, or a 15-minute
              walk through trails, with a local bus stop steps away. Enjoy AC
              during summer, a rare find in Whistler.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="Heron Views Interior"
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
                  Outdoor enthusiasts will love the two newly renovated modern
                  and spacious decks, with 2,400 sq ft of space, providing ample
                  room for entertaining and taking in breathtaking views. Enjoy
                  the 14-person hot tub, fire table, and BBQ for unforgettable
                  gatherings.
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <FaBed className="text-gray-600 mr-2" size={20} />
                    <span className="text-gray-800">5 Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="text-gray-600 mr-2" size={20} />
                    <span className="text-gray-800">5.5 Bathrooms</span>
                  </div>
                </div>
                <p className="text-gray-800">
                  Inside, discover soaring ceilings, exposed beams, a modern
                  kitchen with Miele appliances, and a dining room with valley
                  views. The home features a grand living room, five bedrooms, a
                  theater room, and a unique bar area with aquarium, delivering
                  mountain luxury at its finest.
                </p>
              </div>
            </div>
          </div>

          {/* Photos Modal - Show all photos */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white text-xl font-medium">
                  Heron Views - {photos.length} photos
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
                        alt={`Heron Views photo ${index + 1}`}
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
                  alt={`Heron Views photo ${selectedPhotoIndex + 1}`}
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

export default HeronViewsWhistlerVillage;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};
