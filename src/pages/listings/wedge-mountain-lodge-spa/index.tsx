import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const WedgeMountainLodgeSpa = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos with descriptive titles
  const photos = [
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 1.jpg",
      title: "Grand Main Entrance",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 2.jpg",
      title: "Exterior View at Dusk",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 3 with model.jpg",
      title: "Exterior with Garden View",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 2.jpg",
      title: "Spacious Great Room",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 3.jpg",
      title: "Great Room with Fireplace",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 4.jpg",
      title: "Great Room Seating Area",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 5.jpg",
      title: "Great Room with Mountain Views",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 6.jpg",
      title: "Great Room Lounge Area",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 7.jpg",
      title: "Great Room from Staircase",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 8.jpg",
      title: "Great Room Full View",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 9.jpg",
      title: "Great Room with Windows",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room Long Table.jpg",
      title: "Great Room Dining Table",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Dining.jpg",
      title: "Formal Dining Area",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Wine Cellar.jpg",
      title: "Wine Cellar",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Elevator and Wine Room.jpg",
      title: "Elevator and Wine Room",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Entry Way 1.jpg",
      title: "Main Entry Way",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Entry way 2.jpg",
      title: "Secondary Entry Way",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Mudroom a.jpg",
      title: "Mudroom",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Reading Loft.jpg",
      title: "Reading Loft",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bedroom 1 Bunks.jpg",
      title: "Bedroom 1 with Bunk Beds",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bedroom 2.jpg",
      title: "Bedroom 2",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bedroom 4.jpg",
      title: "Bedroom 4",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bedroom 5.jpg",
      title: "Bedroom 5",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bedroom 5 Deck.jpg",
      title: "Bedroom 5 Private Deck",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bedroom 6.jpg",
      title: "Bedroom 6",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bedroom 7.jpg",
      title: "Bedroom 7",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bedroom 8.jpg",
      title: "Bedroom 8",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bedroom 9.jpg",
      title: "Bedroom 9",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bathroom 1.jpg",
      title: "Luxury Bathroom 1",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bathroom 5.jpg",
      title: "Luxury Bathroom 5",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bathroom 8a.jpg",
      title: "Luxury Bathroom 8",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Bathroom Powder Room.jpg",
      title: "Powder Room",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Spa 1.jpg",
      title: "Spa Area",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Spa _ Towel Detail.jpg",
      title: "Spa Towel Detail",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Spa _ Yoga.jpg",
      title: "Yoga Studio",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Massage Room 1 .jpg",
      title: "Massage Room 1",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Massage Room 2.jpg",
      title: "Massage Room 2",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Sauna HUM.jpg",
      title: "Sauna",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Sauna_Day bed with models.jpg",
      title: "Sauna with Day Bed",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Cold Plunge with model.jpg",
      title: "Cold Plunge Pool",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Gym 1.jpg",
      title: "Fitness Center",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Movie Theatre 2.jpg",
      title: "Movie Theatre",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Games Room.jpg",
      title: "Games Room",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Kids Playroom.jpg",
      title: "Kids Playroom",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/WML Driveway (Looking North).jpg",
      title: "Driveway View",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/WML Firepit (Looking West).jpg",
      title: "Firepit Area",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/WML Firepit at Night.jpg",
      title: "Firepit at Night",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/WML Garden (Looking East).jpg",
      title: "Garden View East",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/WML Great Room (looking North).jpg",
      title: "Great Room North View",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/WML Great Room (Looking South).jpg",
      title: "Great Room South View",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/WML Pool Deck (Looking South).jpg",
      title: "Pool Deck South View",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/WML Pool Deck (Looking South West).jpg",
      title: "Pool Deck Southwest View",
    },
    {
      src: "/photos/properties/Wedge Mountain Lodge Spa/WML Spa Room (Looking South).jpg",
      title: "Spa Room South View",
    },
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
        <title>Wedge Mountain Lodge & Spa - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Wedge Mountain Lodge & Spa, a beautiful property perfect for weddings and events in Whistler. With 10 bedrooms and 13 bathrooms, this spacious venue can accommodate up to 26 guests for special events."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>26 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>Price Range: $8,000-$11,500+ per night</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Wedge Mountain Lodge & Spa
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
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white border border-gray-700 rounded font-medium hover:bg-gray-800 text-sm sm:text-base"
              >
                Details
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>

            {/* Featured Video */}
            <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://player.vimeo.com/video/982089217"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Wedge Mountain Lodge & Spa Property Walkthrough"
                ></iframe>
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
                    src={photo.src}
                    alt={photo.title}
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
              Wedge Mountain Lodge & Spa offers a luxurious retreat in Whistler,
              perfect for events, weddings, and large gatherings. With 10
              bedrooms and 13 bathrooms, this spacious property can accommodate
              up to 26 guests. This exceptional venue features a spa, wellness
              facilities, and ample space for entertainment.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[3].src}
                    alt={photos[3].title}
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
                  This spectacular lodge features spacious common areas,
                  including a grand great room with high ceilings and
                  spectacular views. The property includes a full spa with
                  massage rooms, sauna, cold plunge, and yoga space, making it
                  perfect for wellness retreats and luxury getaways.
                </p>
                <p className="text-gray-800 mb-6">
                  Additional amenities include a movie theater, games room, kids
                  playroom, fully equipped gym, and outdoor areas with a fire
                  pit. The gourmet kitchen and dining areas are designed for
                  entertaining large groups with ease.
                </p>
                <p className="text-gray-800">
                  This exclusive venue is perfect for special events, corporate
                  retreats, and luxury vacations. Our team can help coordinate
                  all aspects of your stay, from catering and spa services to
                  transportation and activities.
                </p>
              </div>
            </div>

            {/* Facilities Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[32].src}
                    alt={photos[32].title}
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
                  <h2 className="text-2xl font-bold">Facilities</h2>
                </div>

                <p className="mb-2">
                  <span className="font-bold">Spa & Wellness:</span> Full spa
                  area with massage rooms, sauna, cold plunge pool, and yoga
                  space.
                </p>
                <p className="mb-2">
                  <span className="font-bold">Entertainment:</span> Movie
                  theater, games room, and kids playroom.
                </p>
                <p className="mb-2">
                  <span className="font-bold">Outdoor Spaces:</span> Beautiful
                  gardens, fire pit area, and outdoor seating.
                </p>
                <p className="mb-2">
                  <span className="font-bold">Dining:</span> Gourmet kitchen,
                  large dining area, and wine cellar.
                </p>
                <p className="mb-2">
                  <span className="font-bold">Bedrooms:</span> 10 luxurious
                  bedrooms with high-quality furnishings.
                </p>
                <p className="mb-2">
                  <span className="font-bold">Bathrooms:</span> 13 elegant
                  bathrooms with premium fixtures.
                </p>
                <p className="mb-2">
                  <span className="font-bold">Additional Features:</span>{" "}
                  Elevator, reading loft, and fully equipped gym.
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
                Wedge Mountain Lodge & Spa is nestled in a beautiful location in
                Whistler, providing privacy and stunning views. The property
                offers a serene setting while still being accessible to
                Whistler&apos;s amenities and attractions.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl text-white font-medium">
                Wedge Mountain Lodge & Spa - All Photos
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
                        src={photo.src}
                        alt={photo.title}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => navigatePhoto("prev")}
            >
              &larr;
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">
              <div className="relative w-full h-full">
                <Image
                  src={photos[selectedPhotoIndex].src}
                  alt={photos[selectedPhotoIndex].title}
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

export default WedgeMountainLodgeSpa;
