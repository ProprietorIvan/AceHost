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

const TheNest = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  // Property photos
  const photos = [
    "/photos/properties/Wolverine Crescent/01-2627 Wolverine-01.jpg",
    "/photos/properties/Wolverine Crescent/02-2627 Wolverine-02.jpg",
    "/photos/properties/Wolverine Crescent/03-2627 Wolverine-03.jpg",
    "/photos/properties/Wolverine Crescent/04-2627 Wolverine-04.jpg",
    "/photos/properties/Wolverine Crescent/05-2627 Wolverine-05.jpg",
    "/photos/properties/Wolverine Crescent/06-2627 Wolverine-06.jpg",
    "/photos/properties/Wolverine Crescent/07-2627 Wolverine-07.jpg",
    "/photos/properties/Wolverine Crescent/08-2627 Wolverine-08.jpg",
    "/photos/properties/Wolverine Crescent/09-2627 Wolverine-09.jpg",
    "/photos/properties/Wolverine Crescent/10-2627 Wolverine-10.jpg",
    "/photos/properties/Wolverine Crescent/11-2627 Wolverine-11.jpg",
    "/photos/properties/Wolverine Crescent/12-2627 Wolverine-12.jpg",
    "/photos/properties/Wolverine Crescent/13-2627 Wolverine-13.jpg",
    "/photos/properties/Wolverine Crescent/14-2627 Wolverine-14.jpg",
    "/photos/properties/Wolverine Crescent/15-2627 Wolverine-15.jpg",
    "/photos/properties/Wolverine Crescent/16-2627 Wolverine-16.jpg",
    "/photos/properties/Wolverine Crescent/17-2627 Wolverine-17.jpg",
    "/photos/properties/Wolverine Crescent/18-2627 Wolverine-18.jpg",
    "/photos/properties/Wolverine Crescent/19-2627 Wolverine-19.jpg",
    "/photos/properties/Wolverine Crescent/20-2627 Wolverine-20.jpg",
    "/photos/properties/Wolverine Crescent/21-2627 Wolverine-21.jpg",
    "/photos/properties/Wolverine Crescent/22-2627 Wolverine-22.jpg",
    "/photos/properties/Wolverine Crescent/23-2627 Wolverine-23.jpg",
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
        <title>The Nest | Ski in-Ski out - AceHost</title>
        <meta
          name="description"
          content="Welcome to The Nest, this newly renovated 5-bedroom home is located right next to the ski hill. It's only a short walk to the mountain, and you can ski back to your front door."
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
                <span>Monthly Price Range: $18,000-$29,000</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              The Nest | Ski in-Ski out
            </h1>

            {/* Pricing Information */}
            <div className="flex flex-col items-center mb-8 space-y-2">
              <div className="bg-gray-100 rounded-lg px-6 py-4 max-w-2xl w-full">
                <div className="space-y-2">
                  <p className="text-gray-800 text-center font-medium">
                    Monthly Price Range: $18,000-$29,000
                  </p>
                  <p className="text-gray-800 text-center">90+ day minimum</p>
                  <p className="text-gray-800 text-center">
                    $29,000 Monthly | Winter (Booked until June 15, 2025)
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
                href="https://www.airbnb.ca/rooms/763259660349118016?guests=1&adults=1&s=67&unique_share_id=d18218f6-da74-4763-a199-d5a1dc8c85ff"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                Minimum Stay Requirement: 30 Nights
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
                    alt={`The Nest interior ${index + 1}`}
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
              Welcome to The Nest, this newly renovated 5-bedroom home is
              located right next to the ski hill. It&apos;s only a short walk to
              the mountain, and you can ski back to your front door. This rare
              find is situated in the prestigious and quiet neighborhood of
              Nordic. Experience majestic mountain views and a gorgeous sunset,
              while soaking in the hot tub after skiing.
              <br />
              <br />
              <span className="font-bold">Long-term rentals 90+ days only</span>
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="The Nest Interior"
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
                  Lounge on brand-new high-end furniture, ideal for entertaining
                  a large group or big family. Enjoy ample space in the
                  open-plan living room with a fireplace that adds a touch of
                  coziness for an evening well spent. Finish your day on the
                  mountain with a soak in the private hot tub!
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[8]}
                    alt="The Nest Bedroom"
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
                  <span className="font-medium">Bedroom 1:</span> Master
                  bedroom, located at the end of the top floor corridor. It
                  features a beautiful king-sized bed, large floor-to-ceiling
                  windows that provide ample natural light, and a quaint outdoor
                  private patio. The room also includes a cozy gas fireplace for
                  added warmth and ambiance. The ensuite bathroom in this
                  bedroom is modern and spacious, featuring a light-filled
                  bathtub and a large shower.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2:</span> Situated next
                  to the master bedroom, this tastefully furnished room also
                  offers a stylish king-sized bed. It has private patio access
                  so you can soak up the mountain views. The ensuite bathroom in
                  this room features both a shower and a bath.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 3:</span> Adjacent to
                  bedroom 2, this room boasts a comfortable king-sized bed. It
                  also has an ensuite bathroom with a shower and a bathtub,
                  providing convenience and privacy.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 4:</span> Is located on
                  the lower floor, this bedroom features two twin beds. It is
                  decorated with welcoming and bright furnishings, creating a
                  cheery atmosphere. This room shares a spacious bathroom with
                  bedroom 5, which includes both a shower and a bathtub.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 5:</span> Is situated
                  next to bedroom 4, this room offers a king-sized bed and a
                  twin bed, providing flexible sleeping arrangements. It has a
                  beautiful gas fireplace that adds a homely touch to the space.
                </p>
                <p className="mb-4">
                  Additionally, there is a powder bathroom on the ground floor.
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
                Prime ski-in/ski-out location in the prestigious and quiet
                Nordic neighborhood, providing easy access to the mountain and
                stunning views. Ride the local bus if you don&apos;t want to use
                your car. For Whistler Village it&apos;s an 8-minute walk to the
                Eva Lake Road bus stop, catch the 20, 21, or 25 and the journey
                is only 7 minutes. For Creekside Village walk 9 minutes to
                Highlands bus stop and catch the 20 and 21 buses. The buses come
                every 10 or 15 minutes.
              </p>
              <p className="text-gray-800 max-w-4xl">
                The best part of this chalet is the location! Nordic is a real
                gem. It&apos;s just a short distance from both Creekside and
                Whistler Village! Enjoy just a 7 minute stroll to access the
                Dave Murray Ski trail and ski out to the Creekside Gondola and
                village. The house is just a 3-minute drive to Creekside Village
                or a 17 minutes walk. Easy access to the lakes in the Summer.
                Stroll into Creekside and enjoy delicious coffee and pastries at
                Bred Bakery and Rock-It Coffee co, the creekside market for
                groceries, BC liquor stores, and Dusty&apos;s for Après. Great
                restaurants Rim Rock, Red door, Creekbread and Nita Lake lodge
                located in Creekside. This is the ideal home for your holiday!
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                The Nest - All Photos
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
                        alt={`The Nest ${index + 1}`}
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
                  alt={`The Nest full view ${selectedPhotoIndex + 1}`}
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

export default TheNest;
