import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaBed, FaBath } from "react-icons/fa";

const AltitudeRetreat = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Altitude New Photos Best/hero2.jpeg",
    "/photos/properties/Altitude New Photos Best/altitude retreat-21.jpg",
    "/photos/properties/Altitude New Photos Best/altitude retreat-19.jpg",
    "/photos/properties/Altitude New Photos Best/altitude retreat-18.jpg",
    "/photos/properties/Altitude New Photos Best/altitude retreat-17.jpg",
    "/photos/properties/Altitude New Photos Best/altitude retreat-15.jpg",
    "/photos/properties/Altitude New Photos Best/altitude retreat-12.jpg",
    "/photos/properties/Altitude New Photos Best/066-2919 Ancient Cedars 2024-53.jpg",
    "/photos/properties/Altitude New Photos Best/065-2919 Ancient Cedars 2024-52.jpg",
    "/photos/properties/Altitude New Photos Best/064-2919 Ancient Cedars 2024-51.jpg",
    "/photos/properties/Altitude New Photos Best/063-2919 Ancient Cedars 2024-50.jpg",
    "/photos/properties/Altitude New Photos Best/062-2919 Ancient Cedars 2024-49.jpg",
    "/photos/properties/Altitude New Photos Best/061-2919 Ancient Cedars 2024-48.jpg",
    "/photos/properties/Altitude New Photos Best/060-2919 Ancient Cedars 2024-47.jpg",
    "/photos/properties/Altitude New Photos Best/059-2919 Ancient Cedars 2024-46.jpg",
    "/photos/properties/Altitude New Photos Best/058-2919 Ancient Cedars 2024-45.jpg",
    "/photos/properties/Altitude New Photos Best/057-2919 Ancient Cedars 2024-44.jpg",
    "/photos/properties/Altitude New Photos Best/056-2919 Ancient Cedars 2024-43.jpg",
    "/photos/properties/Altitude New Photos Best/055-2919 Ancient Cedars 2024-42.jpg",
    "/photos/properties/Altitude New Photos Best/054-2919 Ancient Cedars 2024-41.jpg",
    "/photos/properties/Altitude New Photos Best/053-2919 Ancient Cedars 2024-40.jpg",
    "/photos/properties/Altitude New Photos Best/052-2919 Ancient Cedars 2024-39.jpg",
    "/photos/properties/Altitude New Photos Best/051-2919 Ancient Cedars 2024-38.jpg",
    "/photos/properties/Altitude New Photos Best/050-2919 Ancient Cedars 2024-37.jpg",
    "/photos/properties/Altitude New Photos Best/049-2919 Ancient Cedars 2024-36.jpg",
    "/photos/properties/Altitude New Photos Best/048-2919 Ancient Cedars 2024-35.jpg",
    "/photos/properties/Altitude New Photos Best/047-2919 Ancient Cedars 2024-34.jpg",
    "/photos/properties/Altitude New Photos Best/046-2919 Ancient Cedars 2024-33.jpg",
    "/photos/properties/Altitude New Photos Best/045-2919 Ancient Cedars 2024-32.jpg",
    "/photos/properties/Altitude New Photos Best/044-2919 Ancient Cedars 2024-31.jpg",
    "/photos/properties/Altitude New Photos Best/043-2919 Ancient Cedars 2024-30.jpg",
    "/photos/properties/Altitude New Photos Best/042-2919 Ancient Cedars 2024-29.jpg",
    "/photos/properties/Altitude New Photos Best/041-2919 Ancient Cedars 2024-28.jpg",
    "/photos/properties/Altitude New Photos Best/040-2919 Ancient Cedars 2024-27.jpg",
    "/photos/properties/Altitude New Photos Best/039-2919 Ancient Cedars 2024-26.jpg",
    "/photos/properties/Altitude New Photos Best/038-2919 Ancient Cedars 2024-25.jpg",
    "/photos/properties/Altitude New Photos Best/037-2919 Ancient Cedars 2024-24.jpg",
    "/photos/properties/Altitude New Photos Best/036-2919 Ancient Cedars 2024-23.jpg",
    "/photos/properties/Altitude New Photos Best/035-2919 Ancient Cedars 2024-22.jpg",
    "/photos/properties/Altitude New Photos Best/034-2919 Ancient Cedars 2024-21.jpg",
    "/photos/properties/Altitude New Photos Best/033-2919 Ancient Cedars 2024-20.jpg",
    "/photos/properties/Altitude New Photos Best/032-2919 Ancient Cedars 2024-19.jpg",
    "/photos/properties/Altitude New Photos Best/031-2919 Ancient Cedars 2024-18.jpg",
    "/photos/properties/Altitude New Photos Best/030-2919 Ancient Cedars 2024-17.jpg",
    "/photos/properties/Altitude New Photos Best/029-2919 Ancient Cedars 2024-16.jpg",
    "/photos/properties/Altitude New Photos Best/028-2919 Ancient Cedars 2024-15.jpg",
    "/photos/properties/Altitude New Photos Best/027-2919 Ancient Cedars 2024-14.jpg",
    "/photos/properties/Altitude New Photos Best/026-2919 Ancient Cedars 2024-13.jpg",
    "/photos/properties/Altitude New Photos Best/025-2919 Ancient Cedars 2024-12.jpg",
    "/photos/properties/Altitude New Photos Best/024-2919 Ancient Cedars 2024-11.jpg",
    "/photos/properties/Altitude New Photos Best/023-2919 Ancient Cedars 2024-10.jpg",
    "/photos/properties/Altitude New Photos Best/022-2919 Ancient Cedars 2024-09.jpg",
    "/photos/properties/Altitude New Photos Best/021-2919 Ancient Cedars 2024-08.jpg",
    "/photos/properties/Altitude New Photos Best/018-2919 Ancient Cedars 2024-05.jpg",
    "/photos/properties/Altitude New Photos Best/017-2919 Ancient Cedars 2024-04.jpg",
    "/photos/properties/Altitude New Photos Best/016-2919 Ancient Cedars 2024-03.jpg",
    "/photos/properties/Altitude New Photos Best/015-2919 Ancient Cedars 2024-02.jpg",
    "/photos/properties/Altitude New Photos Best/014-2919 Ancient Cedars 2024-01.jpg",
    "/photos/properties/Altitude New Photos Best/013-2919 Ancient Cedars-74.jpg",
    "/photos/properties/Altitude New Photos Best/012-2919 Ancient Cedars-73.jpg",
    "/photos/properties/Altitude New Photos Best/009-2919 Ancient Cedars-70.jpg",
    "/photos/properties/Altitude New Photos Best/008-2919 Ancient Cedars-69.jpg",
    "/photos/properties/Altitude New Photos Best/007-2919 Ancient Cedars-62.jpg",
    "/photos/properties/Altitude New Photos Best/005-2919 Ancient Cedars-67.jpg",
    "/photos/properties/Altitude New Photos Best/003-2919 Ancient Cedars-65.jpg",
    "/photos/properties/Altitude New Photos Best/002-2919 Ancient Cedars-64.jpg",
    "/photos/properties/Altitude New Photos Best/001-2919 Ancient Cedars-63.jpg",
  ];

  return (
    <>
      <Head>
        <title>Altitude Retreat | Kadenwood | Private Butler - AceHost</title>
        <meta
          name="description"
          content="Experience the ultimate luxury at Altitude Retreat in Kadenwood. This 10,000 sq.ft ski-in/ski-out mansion features a gym, sauna, hot tub, and private butler service, perfect for your Whistler vacation."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>18 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $7,500-$10,000 +</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Altitude Retreat | Kadenwood | Private Butler
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
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white border border-gray-300 text-gray-900 rounded font-medium hover:bg-gray-50 text-sm sm:text-base"
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
                href="https://www.airbnb.ca/rooms/771060491470943213?guests=1&adults=1&s=67&unique_share_id=a8ff5a7a-4bda-4cc7-aaad-e99b178f3a5d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                Minimum Stay Requirement: 3-4 nights | 7 Christmas/NY
              </p>
            </div>

            {/* Featured Video */}
            <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://player.vimeo.com/video/906479830"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Altitude Retreat Property Walkthrough"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => setShowAllPhotos(true)}
                >
                  <Image
                    src={photo}
                    alt={`Altitude Retreat interior ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
              Altitude Retreat is situated in the most prestigious ski-in
              ski-out neighbourhood in Whistler. Located just a stone&apos;s
              throw away from the exclusive Kadenwood residence only gondola
              makes this property the perfect location for your Whistler
              vacation! This well equipped property features everything you need
              for an indulgent stay. Enjoy a workout in the fully spec&apos;d
              gym then take a dip in the hot tub. Secluded by trees, it
              doesn&apos;t get more private than this!
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[3]}
                    alt="Altitude Retreat Interior"
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
                  This magnificent 10,000 sq.ft interior has 7 bedrooms and 5.5
                  bathrooms. This one-of-a-kind hideaway has features such as a
                  library, luxurious in-home gym, sauna, and ski/board mud room.
                  560 sq.ft of deck and balcony space and 800 sq ft of outdoor
                  living space with your own private forest and stunning garden
                  setting. This high end residence has a fully equipped gym, a
                  soothing hot tub, and is surrounded by trees for maximum
                  solitude. Altitude Retreat is perfect for an unforgettable
                  Whistler vacation.
                </p>
                <p className="text-gray-800 mb-6">
                  <span className="font-bold">Private Butler included:</span> In
                  addition to serving breakfast, lunch, and dinner, the butler
                  is responsible for all food and drink service throughout the
                  day. To create the perfect ambiance, they will set up the hot
                  tub, light the fire, and adjust the music and household
                  functions. Get your daily dose of caffeine from your own
                  personal barista. Overall, the butler is there to make your
                  stay as smooth and comfortable as possible.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[12]}
                    alt="Altitude Retreat Bedroom"
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

                <p className="font-bold mb-2">
                  Upper Level: (3 Bedrooms - sleeps 10)
                </p>
                <p className="mb-4">
                  Master bedroom with king bed and ensuite bathroom with large
                  walk in shower and stand alone bath tub, 12&apos; x 15&apos;
                  walk ensuite walk-in closet. Master Bedroom has a large TV and
                  fireplace, with stunning mountain views. Behind the master
                  bedroom, is the bunk house with 3 queen beds with a large
                  smart TV, spacious games table with a balcony. Access to these
                  room is through the master bedroom and shares the spacious
                  bathroom. Additional large bedroom with king bed, and en suite
                  bathroom on upper floor located at the other end of the
                  corridor.
                </p>

                <p className="font-bold mb-2">
                  Main Level: (2 Bedrooms - Sleeps 4)
                </p>
                <p className="mb-4">
                  Large bedroom equipped with King Bed and Private Balcony
                  Office fireplace and large view windows and bookshelves.
                  Additional queen bed with closet on this main floor. Main
                  floor bedrooms can use the powder room bathroom plus the
                  shower next to the gym (gym on lower level) if needed. Main
                  floor has 2 bedrooms, sleeps 4. Main floor has a living area,
                  fully equipped kitchen and dining area. Main floor level
                  garage is currently not in service.
                </p>
                <p className="mb-4">
                  <span className="italic">
                    (Optional): Additional twin bed can be rented and arranged
                    in the office for a private sleeping room for 1 guest.
                  </span>
                </p>

                <p className="font-bold mb-2">
                  Lower Level: (2 Bedrooms - Sleeps 4)
                </p>
                <p className="mb-4">
                  Two large master bedrooms with king beds and ensuite bathrooms
                  Lower Level also contains a fully-equipped gym and sauna.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Total Sleeping Capacity:</span>{" "}
                  18 (10 + 4 + 4) Sleeps 18, 7 bedrooms
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
                Extraordinary retreat located on a private park-like setting
                that offers fantastic ski-in/ski-out access to Whistler Mountain
                via your private residents-only Kadenwood gondola.
              </p>
              <p className="text-gray-800 max-w-4xl">
                Take the 5-minute gondola ride, a 5-minute drive, or a quick ski
                ride down will bring you to all the amenities in Creekside
                Village. Take advantage of some of Whistler&apos;s best
                restaurants and shops. Enjoy quality coffee and delicious breads
                and pastries at Rockit Coffee and Bred. Red Door Bistro, Rimrock
                Cafe, Cure Lounge (my favorite), Creekbread, and Dusty&apos;s.
                Enjoy Creekside&apos;s newest restaurant Mekong, this
                fine-dining Thai restaurant and gorgeous patio is a local
                favorite. Tuck into delicious authentic food and imaginative
                cocktails. Shop at 122 West for beautiful home decor and
                Abigail&apos;s for stylish clothing. The Cop-Op gas station in
                Creekside has a convenience store and is open until 10 pm. For
                groceries, the Creekside Market is also within walking distance.
                Included when booking this property, we will help you with all
                your VIP experiences such as coordinating chefs, chalet
                hosts/servers, helicopter experiences, transportation to and
                from the airport, snowmobiling, restaurant reservations and
                recommendations, hiking recommendations, and more.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Altitude Retreat - All Photos
              </h2>
              <button
                onClick={() => setShowAllPhotos(false)}
                className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/906479830"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Altitude Retreat Property Walkthrough"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="mb-6">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={photo}
                        alt={`Altitude Retreat interior ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        priority={index < 6}
                        loading={index < 6 ? "eager" : "lazy"}
                      />
                    </div>
                    <p className="text-white text-sm mt-2">
                      Altitude Retreat interior {index + 1}
                    </p>
                  </div>
                ))}
              </div>
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

export default AltitudeRetreat;
