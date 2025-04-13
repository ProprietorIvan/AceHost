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

const SlopesideVilla = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Slopeside Kadenwood/01-2945 Kadenwood Dr 01.jpg",
    "/photos/properties/Slopeside Kadenwood/02-2945 Kadenwood Dr 02.jpg",
    "/photos/properties/Slopeside Kadenwood/03-2945 Kadenwood Dr 03.jpg",
    "/photos/properties/Slopeside Kadenwood/04-2945 Kadenwood Dr 04.jpg",
    "/photos/properties/Slopeside Kadenwood/05-2945 Kadenwood Dr 05.jpg",
    "/photos/properties/Slopeside Kadenwood/06-2945 Kadenwood Dr 06.jpg",
    "/photos/properties/Slopeside Kadenwood/07-2945 Kadenwood Dr 07.jpg",
    "/photos/properties/Slopeside Kadenwood/08-2945 Kadenwood Dr 08.jpg",
    "/photos/properties/Slopeside Kadenwood/09-2945 Kadenwood Dr 09.jpg",
    "/photos/properties/Slopeside Kadenwood/10-2945 Kadenwood Dr 10.jpg",
    "/photos/properties/Slopeside Kadenwood/11-2945 Kadenwood Dr 11.jpg",
    "/photos/properties/Slopeside Kadenwood/12-2945 Kadenwood Dr 12.jpg",
    "/photos/properties/Slopeside Kadenwood/13-2945 Kadenwood Dr 13.jpg",
    "/photos/properties/Slopeside Kadenwood/14-2945 Kadenwood Dr 14.jpg",
    "/photos/properties/Slopeside Kadenwood/15-2945 Kadenwood Dr 15.jpg",
    "/photos/properties/Slopeside Kadenwood/16-2945 Kadenwood Dr 16.jpg",
    "/photos/properties/Slopeside Kadenwood/17-2945 Kadenwood Dr 17.jpg",
    "/photos/properties/Slopeside Kadenwood/18-2945 Kadenwood Dr 18.jpg",
    "/photos/properties/Slopeside Kadenwood/19-2945 Kadenwood Dr 19.jpg",
    "/photos/properties/Slopeside Kadenwood/22-2945 Kadenwood Dr 22.jpg",
    "/photos/properties/Slopeside Kadenwood/23-2945 Kadenwood Dr 23.jpg",
    "/photos/properties/Slopeside Kadenwood/24-2945 Kadenwood Dr 24.jpg",
    "/photos/properties/Slopeside Kadenwood/25-2945 Kadenwood Dr 25.jpg",
    "/photos/properties/Slopeside Kadenwood/26-2945 Kadenwood Dr 26.jpg",
    "/photos/properties/Slopeside Kadenwood/27-2945 Kadenwood Dr 27.jpg",
    "/photos/properties/Slopeside Kadenwood/28-2945 Kadenwood Dr 28.jpg",
    "/photos/properties/Slopeside Kadenwood/29-2945 Kadenwood Dr 29.jpg",
    "/photos/properties/Slopeside Kadenwood/30-2945 Kadenwood Dr 30.jpg",
    "/photos/properties/Slopeside Kadenwood/31-2945 Kadenwood Dr 31.jpg",
    "/photos/properties/Slopeside Kadenwood/32-2945 Kadenwood Dr 32.jpg",
    "/photos/properties/Slopeside Kadenwood/33-2945 Kadenwood Dr 33.jpg",
    "/photos/properties/Slopeside Kadenwood/34-2945 Kadenwood Dr 34.jpg",
    "/photos/properties/Slopeside Kadenwood/35-2945 Kadenwood Dr 35.jpg",
    "/photos/properties/Slopeside Kadenwood/36-2945 Kadenwood Dr 36.jpg",
    "/photos/properties/Slopeside Kadenwood/37-2945 Kadenwood Dr 37.jpg",
    "/photos/properties/Slopeside Kadenwood/38-2945 Kadenwood Dr 38.jpg",
    "/photos/properties/Slopeside Kadenwood/39-2945 Kadenwood Dr 39.jpg",
    "/photos/properties/Slopeside Kadenwood/40-2945 Kadenwood Dr 40.jpg",
    "/photos/properties/Slopeside Kadenwood/41-2945 Kadenwood Dr 41.jpg",
    "/photos/properties/Slopeside Kadenwood/42-2945 Kadenwood Dr 42.jpg",
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
        <title>Slope Side Chalet | Kadenwood | Ski-in/Ski-out - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Slope Side Chalet in Kadenwood. This 7-bedroom chalet offers ski-in/ski-out access, stunning valley views, hot tub, steam shower, and home gym. Perfect for large groups with 12 beds accommodating up to 16 guests."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>16 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $2,600-$6,000</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Slope Side Chalet | Kadenwood
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
                href="https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                Minimum Stay Requirement: 3 Nights | 7 Christmas & NY
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
                    alt={`Slope Side Chalet interior ${index + 1}`}
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
              This luxurious and cozy home provides a warm comforting space for
              your group, offering ski-in, ski-out access directly from your
              door step (the ski trail literally runs off of the stairs from the
              ski room in the home). Magnificent views can be enjoyed from every
              floor with its soaring high ceilings and large picture windows.
              The warmth from the stone heated floors and indoor fireplace make
              it the ideal space to curl up and relax after a long day on the
              hill.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[5]}
                    alt="Slope Side Chalet Interior"
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
                  This sprawling luxury chalet is the perfect mountain retreat.
                  With 7 bedrooms, 12 beds and 7.5 bathrooms this property is
                  the perfect choice for large groups and families. Unwind and
                  enjoy the large steam shower and take a soak in the outdoor
                  hot tub after a day of skiing with direct views overlooking
                  the valley and lake.
                </p>
                <p className="text-gray-800 mb-6">
                  If you still have energy after skiing, keep up with your
                  fitness routine in the large home gym equipped with yoga mats,
                  weights and cardio machines.
                </p>
                <p className="text-gray-800">
                  NEW*: There is now a very large HD screen TV located in the
                  living room, with access to Netflix, Amazon Prime, and a TSN
                  subscription for live sports.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[15]}
                    alt="Slope Side Chalet Bedroom"
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
                  <span className="font-medium">Master Bedroom 1 -</span> has a
                  beautiful king bed with a walk-in closet, located at the end
                  of the corridor for ultimate privacy. With a spacious ensuite
                  walk-in shower and bathtub.
                </p>

                <p className="font-bold mb-2">MID LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2 -</span> The room
                  includes one queen and one twin bed with an ensuite shower.
                  This floor is located one level below the upper. This room is
                  accessed through the den room and next to bedroom 3.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 3 -</span> Has a queen
                  and a bunk bed with a twin bed on top and a queen below.
                  Ensuite bathroom with a shower and bathtub.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Additional -</span> cozy queen
                  bed on the mezzanine loft above the den room.
                </p>

                <p className="font-bold mb-2">MAIN LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 4 -</span> Is located on
                  the main floor beside the living room with a plush king bed.
                  There is a powder bathroom on this floor and the ground floor
                  bathroom with a walk-in shower can be used.
                </p>

                <p className="font-bold mb-2">LOWER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 5 -</span> Located on
                  the ground floor, it has a bunk bed with a bottom double bed
                  and a top twin bed with an ensuite bathroom with a shower. It
                  is next to bedroom 5.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 6 -</span> Has a queen
                  bed with an ensuite bathroom with a shower. A spacious room
                  with beautiful views from the patio doors with access to the
                  backyard.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 7 -</span> Has a queen
                  bed with an ensuite bathroom and shower. Direct access to the
                  hot tub.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Additional -</span> There is an
                  additional large bathroom on this floor that includes a large
                  steam shower.
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
              <p className="text-gray-800 max-w-4xl mb-6">
                Located in the exclusive Kadenwood neighbourhood, high on the
                Southside of Whistler mountain. All of the amenities in
                Creekside Village are just a 5-minute gondola ride, a 5-minute
                drive, or a quick ski ride down will bring you to all the
                amenities in Creekside Village.
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                Take advantage of some of Whistler&apos;s best restaurants and
                shops. Enjoy quality coffee and delicious breads and pastries at
                Rockit Coffee and Bred. Red Door Bistro, Rimrock Cafe, Cure
                Lounge (my favorite), Creekbread, and Dusty&apos;s. Enjoy
                Creekside&apos;s newest restaurant Mekong, this fine-dining Thai
                restaurant and gorgeous patio is a local favorite. Tuck into
                delicious authentic food and imaginative cocktails.
              </p>
              <p className="text-gray-800 max-w-4xl">
                Shop at 122 West for beautiful home decor and Abigail&apos;s for
                stylish clothing. The Cop-Op gas station in Creekside has a
                convenience store and is open until 10 pm. For groceries, the
                Creekside Market is also within walking distance. Included when
                booking this property, we will help you with all your VIP
                experiences such as coordinating chefs, chalet hosts/servers,
                helicopter experiences, transportation to and from the airport,
                snowmobiling, restaurant reservations and recommendations,
                hiking recommendations, and more.
              </p>
            </div>

            {/* Amenities Section */}
            <div className="mb-20">
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
                      d="M22 9V7H20V5C20 4.45 19.55 4 19 4H15C14.45 4 14 4.45 14 5V7H12V5C12 4.45 11.55 4 11 4H7C6.45 4 6 4.45 6 5V7H4V9H6V11H4V13H6V15H4V17H6V19C6 19.55 6.45 20 7 20H11C11.55 20 12 19.55 12 19V17H14V19C14 19.55 14.45 20 15 20H19C19.55 20 20 19.55 20 19V17H22V15H20V13H22V11H20V9H22ZM18 18H16V16H18V18ZM18 14H16V12H18V14ZM18 10H16V8H18V10ZM12 18H10V16H12V18ZM12 14H10V12H12V14ZM12 10H10V8H12V10ZM18 6V5H16V6H18ZM8 5V6H10V5H8ZM8 18H10V17H8V18ZM8 14H10V13H8V14ZM8 10H10V9H8V10Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Amenities</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold mb-3">Outdoor</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Private outdoor hot tub</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Ski-in/ski-out access</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Mountain views</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Private deck/patio</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Interior</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Heated stone floors</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Large steam shower</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Fully equipped gym</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Indoor fireplace</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Large HD screen TV</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Essentials</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>High-speed WiFi</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Washer & dryer</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Fully equipped kitchen</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Dedicated ski room</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-gray-100 p-8 rounded-xl mb-20">
              <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
              <p className="text-gray-800 mb-6">
                Experience the ultimate luxury ski vacation at Slope Side
                Chalet. Nightly rates range from $2,600 to $6,000 depending on
                the season, with a minimum stay of 3 nights (7 nights during
                Christmas and New Year).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="sm:w-auto px-6 py-3 bg-black hover:bg-gray-900 text-white rounded text-center font-medium"
                >
                  Contact Us to Book
                </Link>
                <a
                  href="https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:w-auto px-6 py-3 border border-black text-black hover:bg-gray-50 rounded text-center font-medium"
                >
                  View on Airbnb
                </a>
              </div>
            </div>
          </div>

          {/* All Photos Modal */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 p-4 overflow-y-auto flex flex-col">
              <div className="sticky top-0 flex justify-between items-center mb-4 z-10 bg-black bg-opacity-75 p-2 rounded-lg">
                <h3 className="text-white text-xl font-bold">
                  All Photos ({photos.length})
                </h3>
                <button
                  onClick={closeAllPhotos}
                  className="text-white hover:text-gray-300 p-2"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={photo}
                      alt={`Slope Side Chalet image ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Screen Photo View */}
          {selectedPhotoIndex !== null && (
            <div
              className="fixed inset-0 bg-black z-50 flex flex-col"
              onClick={closeFullScreenPhoto}
            >
              <div className="flex justify-between items-center p-4 bg-black bg-opacity-75">
                <span className="text-white">
                  {selectedPhotoIndex + 1} / {photos.length}
                </span>
                <button
                  onClick={closeFullScreenPhoto}
                  className="text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>
              <div
                className="flex-1 flex items-center justify-center p-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto("prev");
                  }}
                  className="absolute left-4 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <div className="relative w-full h-full max-h-[80vh]">
                  <Image
                    src={photos[selectedPhotoIndex]}
                    alt={`Slope Side Chalet full view ${
                      selectedPhotoIndex + 1
                    }`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto("next");
                  }}
                  className="absolute right-4 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </main>

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

export default SlopesideVilla;
