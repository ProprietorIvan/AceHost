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

const LeChamoisApartment = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  // Property photos
  const photos = [
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-2.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-3.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-4.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-5.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-6.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-7.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-8.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-9.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-10.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-11.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-12.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-13.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-14.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-15.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-16.jpg",
    "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-17.jpg",
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
        <title>Le Chamois 2 Bed | Walk to Lifts - AceHost</title>
        <meta
          name="description"
          content="Modern apartment in the Le Chamois hotel, situated in the heart of Upper Village and just a short distance from Blackcomb Gondola. This cozy getaway is perfect for skiing and offers 1.5 beds and 2 baths."
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
                <span>Nightly Price Range: $350-1,050</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Le Chamois 2 Bed | Walk to Lifts
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
                href="https://www.airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
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
                    alt={`Le Chamois apartment interior ${index + 1}`}
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
              Welcome to this modern apartment in the Le Chamois hotel, situated in the heart of Upper Village and just a short distance from Blackcomb Gondola. This cozy getaway is perfect for skiing and offers 1.5 beds and 2 baths. The kitchen is equipped with a stove top hob, fridge, air fryer, and microwave.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="Le Chamois Interior"
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
                        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">The Space</h2>
                </div>
                <div className="space-y-5">
                  <p className="text-gray-700">
                    Welcome to this contemporary apartment, with 1.5 beds and 2 baths, conveniently located in the Le Chamois hotel in the heart of Upper Village and just a stones throw from Blackcomb Gondola. Making this cosy spot, the perfect ski in ski out getaway in Whistler!
                  </p>
                  <p className="text-gray-700">
                    <strong>Kitchen Appliances:</strong>
                    <br />
                    Stove top hob
                    <br />
                    Fridge
                    <br />
                    Air Fryer
                    <br />
                    Microwave
                  </p>
                  <p className="text-gray-700">
                    Master bedroom with a stylish queen bed, ensuite bathroom with a spacious walk in shower, brand new Toto Japanese toilet and faucets in both bathrooms. A bright office desk space and large smart TV is also located in this room.
                  </p>
                  <p className="text-gray-700">
                    Murphy double bed is located in the living room and pulls out the wall and can be conveniently stored away when not in use. The second bathroom is located just off the living space and has a shower and bathtub. *Please note that the washer and dryer facility is shared with the hotel and you must pay per load, only $2.50*
                  </p>
                </div>
              </div>
            </div>

            {/* Guest Access Section */}
            <div className="flex flex-col md:flex-row-reverse mb-20">
              <div className="md:w-1/2 pl-0 md:pl-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[4]}
                    alt="Le Chamois facilities"
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
                        d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 3L12 6L9 3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Guest Access
                  </h2>
                </div>
                <div className="space-y-5">
                  <p className="text-gray-700">
                    Use of the whole apartment and hotel facilities, including the gym, outdoor hot tub and pool and personal ski locker.
                  </p>
                </div>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[5]}
                    alt="Le Chamois bedroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-black text-white p-4 rounded-full mr-4">
                    <FaBed size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Bedroom Layout
                  </h2>
                </div>
                <div className="space-y-5">
                  <p className="text-gray-700">
                    Located at the base of Blackcomb Mountain, and only a 10-minute stroll away from the lively energy of Whistler Village. Upper Village offers the perfect balance between peaceful mountain retreat and easy access to the bustling heart of the action. Enjoy an array of restaurants, bars and shops in walking distance from the apartment. Access to the Blackcomb gondola is just a 2 minute walk. The ski out is also located just a 2 minute walk from the apartment.
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="flex flex-col md:flex-row-reverse mb-20">
              <div className="md:w-1/2 pl-0 md:pl-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[8]}
                    alt="Le Chamois amenities"
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
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 6V12L16 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Amenities</h2>
                </div>
                <div className="space-y-5">
                  <p className="text-gray-700">
                    Scenic views, Mountain view, Bathroom, Bathtub, Hair dryer, Cleaning products, Shampoo, Conditioner, Body soap, Hot water, Shower gel, laundry- Paid washer & dryer – In building. Essentials Towels, bed sheets, toilet paper, Hangers, Iron, Entertainment TV, Heating and cooling Central air conditioning, Indoor fireplace, Central heating, Home safety Smoke alarm Carbon monoxide alarm Fire extinguisher First aid kit, Internet and office Wifi, Dedicated workspace, Kitchen and Dining, Kitchen Space where guests can cook their own meals. Refrigerator, Microwave, Dishes and silverware Bowls, chopsticks, plates, cups, etc. Mini fridge, Freezer, Dishwasher, Stove, Hot, kettle, Coffee maker: Nespresso, Wine glasses, Toaster, Dining table.
                  </p>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[10]}
                    alt="Le Chamois location"
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
                        d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Location</h2>
                </div>
                <div className="space-y-5">
                  <h3 className="font-medium text-xl">Getting around</h3>
                  <p className="text-gray-700">
                    Complimentary underground hotel parking available for one vehicle. There is also plenty of paid parking available just a short 1-2 minute drive in lots 1-5. Bus stop also located just outside the hotel.
                  </p>

                  <h3 className="font-medium text-xl">Location features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Ski-in/Ski-out Guests can access ski lifts without driving or taking paid transportation</li>
                    <li>Laundromat nearby</li>
                  </ul>

                  <h3 className="font-medium text-xl">Parking and facilities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Free parking on premises</li>
                    <li>Shared outdoor pool – available all year, open specific hours, heated, lap pool open from 9:00 a.m. to 10:00 p.m.</li>
                    <li>Shared hot tub – available all year</li>
                    <li>Elevator The home or building has an elevator that&apos;s at least 132 centimetres deep and a doorway that&apos;s at least 81 centimetres wide.</li>
                    <li>Shared gym in building</li>
                    <li>Paid street parking off premises</li>
                    <li>Paid parking garage on premises – 1 space</li>
                    <li>Single level home</li>
                    <li>No stairs in home</li>
                  </ul>

                  <h3 className="font-medium text-xl">Services</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Luggage drop-off allowed For guests&apos; convenience when they have early arrival or late departure</li>
                    <li>Long-term stays allowed</li>
                    <li>Allow stay for 28 days or more</li>
                    <li>Self check-in Keypad Check yourself into the home with a door code</li>
                    <li>Cleaning available during stay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* All Photos Modal */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto py-4">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-white text-xl font-medium">
                    All Photos ({photos.length})
                  </h2>
                  <button
                    onClick={closeAllPhotos}
                    className="text-white hover:text-gray-300"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] cursor-pointer"
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`Le Chamois apartment photo ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Full Screen Photo Modal */}
          {selectedPhotoIndex !== null && (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
              <button
                onClick={closeFullScreenPhoto}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>
              <button
                onClick={() => navigatePhoto("prev")}
                className="absolute left-4 text-white hover:text-gray-300 z-10"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 19L8 12L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto">
                <Image
                  src={photos[selectedPhotoIndex]}
                  alt={`Le Chamois apartment photo ${selectedPhotoIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => navigatePhoto("next")}
                className="absolute right-4 text-white hover:text-gray-300 z-10"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LeChamoisApartment;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};
