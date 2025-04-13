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

const MarquiseSkiInSkiOut = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  // Property photos - adjust paths when photos are available
  const photos = [
    "/photos/properties/Marquise 2-bed/marquise-1.jpg",
    "/photos/properties/Marquise 2-bed/marquise-2.jpg",
    "/photos/properties/Marquise 2-bed/marquise-3.jpg",
    "/photos/properties/Marquise 2-bed/marquise-4.jpg",
    "/photos/properties/Marquise 2-bed/marquise-5.jpg",
    "/photos/properties/Marquise 2-bed/marquise-6.jpg",
    "/photos/properties/Marquise 2-bed/marquise-7.jpg",
    "/photos/properties/Marquise 2-bed/marquise-8.jpg",
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
        <title>Marquise 2-Bed Ski-in Ski-out - AceHost</title>
        <meta
          name="description"
          content="Experience luxury & prime location at this ski-in/ski-out condo in the Marquise. Located on the main floor with brand-new Puffy Royal King bed, Queen pull-out couch, and access to gym, hot tub, and heated pool."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-6 flex items-center space-x-4">
                <span>4 guests</span>
                <span className="mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $160-$450</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Marquise 2-Bed Ski-in Ski-out
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium"
              >
                More Photos
              </button>
              <Link
                href="#details"
                className="px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium"
              >
                Details
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium"
              >
                Contact Us
              </Link>
              <a
                href="https://www.airbnb.ca/rooms/1370367404602078616?guests=1&adults=1&s=67&unique_share_id=eb381b39-e67d-44ea-9d7c-2de2e1b5fa20"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium"
              >
                Book on Airbnb
              </a>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Marquise Ski-in Ski-out interior ${index + 1}`}
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
              Experience luxury & prime location at this ski-in/ski-out condo in
              the Marquise. Located on the main floor, this retreat features a
              brand-new Puffy Royal King bed, a Queen pull-out couch, a bidet
              toilet, and ski storage for easy gear access. Enjoy the gym, hot
              tub, and heated pool after a day on the slopes. In winter, ski
              right to Blackcomb gondola and back from your front door, and in
              summer, walk to the village in under 15 minutes to explore
              Whistler&apos;s best restaurants in the main Village.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[0]}
                    alt="Marquise Ski-in Ski-out Interior"
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
                  Welcome to your luxury ski-in/ski-out retreat at the Marquise,
                  offering unbeatable access to Whistler&apos;s world-class
                  slopes and vibrant village life. Whether you&apos;re here to
                  ski fresh powder in winter or hike and bike through scenic
                  trails in summer, this condo provides the perfect blend of
                  comfort and convenience.
                </p>
                <p className="text-gray-800 mb-6">
                  <span className="font-medium">Bedroom Layout</span>
                  <br />
                  ✔ Master Suite: Sleep in absolute comfort on a brand-new Puffy
                  Royal King mattress, designed for an exceptional night&apos;s
                  rest.
                  <br />
                  <br />
                  ✔ Living Room (Second Bedroom by Night): A Queen pull-out
                  couch easily converts the living space into a second bedroom
                  for extra guests.
                  <br />
                  <br />
                  ✔ Luxury Comfort: A bidet toilet in the bathroom adds a touch
                  of spa-like relaxation.
                  <br />
                  <br />✔ Ski Storage: Secure in-unit ski storage lets you keep
                  gear out of your living space.
                </p>
                <p className="text-gray-800">
                  ✔ Year-Round Amenities: Unwind in the heated outdoor pool, hot
                  tub, and gym after a day of adventure.
                  <br />
                  <br />
                  ✔ Perfect Location: Ski directly to Blackcomb in winter, or
                  enjoy a scenic 15-minute walk to Whistler Village in summer,
                  with easy access to top dining, shopping, and outdoor
                  activities.
                  <br />
                  <br />
                  ✔ Convenient Parking: Plenty of paid parking is available in
                  the building for easy access.
                  <br />
                  <br />
                  With top-tier amenities and an unbeatable location, this condo
                  is ideal for couples, families, and friends looking for a
                  high-end Whistler experience in any season.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery Modal */}
          {showAllPhotos && (
            <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
              <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
                <h2 className="text-lg sm:text-xl text-white font-medium">
                  Marquise Ski-in Ski-out - All Photos
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
                          alt={`Marquise Ski-in Ski-out interior ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          priority={index < 6}
                          loading={index < 6 ? "eager" : "lazy"}
                        />
                      </div>
                      <p className="text-white text-sm mt-2">
                        Marquise Ski-in Ski-out interior {index + 1}
                      </p>
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
                    alt={`Marquise Ski-in Ski-out full view ${
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

export default MarquiseSkiInSkiOut;
