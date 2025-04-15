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
import { useTranslation } from "next-i18next";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PanoramicEstate = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation("common");

  // Property photos
  const photos = [
    "/photos/properties/Panoramic Estate/01-2923 Ancient Cedars-01.jpg",
    "/photos/properties/Panoramic Estate/02-2923 Ancient Cedars-02.jpg",
    "/photos/properties/Panoramic Estate/03-2923 Ancient Cedars-03.jpg",
    "/photos/properties/Panoramic Estate/04-2923 Ancient Cedars-04.jpg",
    "/photos/properties/Panoramic Estate/05-2923 Ancient Cedars-05.jpg",
    "/photos/properties/Panoramic Estate/06-2923 Ancient Cedars-06.jpg",
    "/photos/properties/Panoramic Estate/07-2923 Ancient Cedars-07.jpg",
    "/photos/properties/Panoramic Estate/08-2923 Ancient Cedars-08.jpg",
    "/photos/properties/Panoramic Estate/09-2923 Ancient Cedars-09.jpg",
    "/photos/properties/Panoramic Estate/10-2923 Ancient Cedars-10.jpg",
    "/photos/properties/Panoramic Estate/11-2923 Ancient Cedars-11.jpg",
    "/photos/properties/Panoramic Estate/12-2923 Ancient Cedars-12.jpg",
    "/photos/properties/Panoramic Estate/13-2923 Ancient Cedars-13.jpg",
    "/photos/properties/Panoramic Estate/14-2923 Ancient Cedars-14.jpg",
    "/photos/properties/Panoramic Estate/15-2923 Ancient Cedars-15.jpg",
    "/photos/properties/Panoramic Estate/16-2923 Ancient Cedars-16.jpg",
    "/photos/properties/Panoramic Estate/17-2923 Ancient Cedars-17.jpg",
    "/photos/properties/Panoramic Estate/18-2923 Ancient Cedars-18.jpg",
    "/photos/properties/Panoramic Estate/19-2923 Ancient Cedars-19.jpg",
    "/photos/properties/Panoramic Estate/20-2923 Ancient Cedars-20.jpg",
    "/photos/properties/Panoramic Estate/21-2923 Ancient Cedars-21.jpg",
    "/photos/properties/Panoramic Estate/22-2923 Ancient Cedars-22.jpg",
    "/photos/properties/Panoramic Estate/23-2923 Ancient Cedars-23.jpg",
    "/photos/properties/Panoramic Estate/24-2923 Ancient Cedars-24.jpg",
    "/photos/properties/Panoramic Estate/25-2923 Ancient Cedars-25.jpg",
    "/photos/properties/Panoramic Estate/26-2923 Ancient Cedars-26.jpg",
    "/photos/properties/Panoramic Estate/27-2923 Ancient Cedars-27.jpg",
    "/photos/properties/Panoramic Estate/28-2923 Ancient Cedars-28.jpg",
    "/photos/properties/Panoramic Estate/29-2923 Ancient Cedars-29.jpg",
    "/photos/properties/Panoramic Estate/30-2923 Ancient Cedars-30.jpg",
    "/photos/properties/Panoramic Estate/31-2923 Ancient Cedars-31.jpg",
    "/photos/properties/Panoramic Estate/32-2923 Ancient Cedars-32.jpg",
    "/photos/properties/Panoramic Estate/33-2923 Ancient Cedars-33.jpg",
    "/photos/properties/Panoramic Estate/34-2923 Ancient Cedars-34.jpg",
    "/photos/properties/Panoramic Estate/35-2923 Ancient Cedars-35.jpg",
    "/photos/properties/Panoramic Estate/36-2923 Ancient Cedars-36.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_06950.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_06955.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_06960.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_06965.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_06980.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_06985.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_06990.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07000.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07005.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07010.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07020.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07030.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07045.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07050.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07060.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07075.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07080.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07090.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07105.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07115.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07120.jpg",
    "/photos/properties/Panoramic Estate/20241127 A7M3 02 A1_07145.jpg",
    "/photos/properties/Panoramic Estate/20241127 MM4P 01 0196-Edit.jpg",
    "/photos/properties/Panoramic Estate/20241127 MM4P 01 0225-Edit.jpg",
    "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
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
        <title>Panoramic Estate | Kadenwood | Luxury Whistler Rental</title>
        <meta
          name="description"
          content="Experience unparalleled luxury at Panoramic Estate in Kadenwood, Whistler's most exclusive ski-in/ski-out neighborhood. 8 bedrooms, panoramic mountain views, and private gondola access."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <span>17 guests</span>
                <span className="hidden sm:block mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $5,800-$9,000+</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Panoramic Estate | Kadenwood
            </h1>

            {/* Pricing Information */}
            <div className="flex flex-col items-center mb-8 space-y-2">
              <div className="bg-gray-100 rounded-lg px-6 py-4 max-w-2xl w-full">
                <div className="space-y-2">
                  <p className="text-gray-800 text-center font-medium">
                    $5,800-$9,000+
                  </p>
                  <p className="text-gray-800 text-center">
                    $8,500-$10,000+ | Winter
                  </p>
                  <p className="text-gray-800 text-center">
                    $16,000+ Nightly | Christmas & NY
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
                href="https://www.airbnb.ca/rooms/1104637821836596397?guests=1&adults=1&s=67&unique_share_id=67164555-993c-40dc-b188-23ffe0755654"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
              >
                Book on Airbnb
              </a>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-700 text-sm sm:text-base">
                4 Night Minimum | 7 on Holidays
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
                    alt={`Panoramic Estate interior ${index + 1}`}
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
              Welcome to Panoramic Estate in Kadenwood. This ski in ski out
              architectural delight, with 8 bedrooms, 10 beds, and 7 baths,
              accommodating up to 18 guests, is perfect for 1 or 2 large
              families.
              <br />
              <br />
              Offering mountain views, an open-plan kitchen, multiple indoor
              fireplaces, a ping pong table, a sleek hot tub, indoor sauna,
              basement media room, and built-in sound system.
              <br />
              <br />
              Enjoy private elevator access to all levels. Spacious outdoor
              decks and luxurious amenities for the perfect mountain retreat!
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[4]}
                    alt="Panoramic Estate Interior"
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
                  Panoramic Estate is located in the prestigious Kadenwood
                  neighborhood, Whistler&apos;s premier ski-in/ski-out
                  community. This exclusive enclave offers privacy and
                  tranquility while providing convenient access to
                  Whistler&apos;s world-class amenities.
                </p>
                <p className="text-gray-800 mb-6">
                  This architectural masterpiece provides the perfect blend of
                  luxury and comfort, with multiple living spaces spread across
                  several levels, all accessible via a private elevator. The
                  property boasts stunning mountain views from its spacious
                  outdoor decks, creating the perfect setting for your mountain
                  getaway.
                </p>
                <p className="text-gray-800">
                  Modern amenities including a built-in sound system, multiple
                  fireplaces, a state-of-the-art kitchen, and entertainment
                  facilities ensure your stay is both comfortable and memorable,
                  whether you&apos;re visiting for a family reunion, corporate
                  retreat, or a luxury ski vacation.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[14]}
                    alt="Panoramic Estate Bedroom"
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

                <p className="font-bold mb-2">TOP LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">• Master Bedroom 1 -</span> has
                  a beautiful king bed with a walk-in closet, chaise lounge,
                  telescope and outdoor patio. It is located at the end of the
                  corridor for ultimate privacy. With a spacious ensuite walk-in
                  shower and stand alone bathtub.
                </p>
                <p className="mb-4">
                  <span className="font-medium">• Bedroom 2 -</span> Has a plush
                  king bed, with an ensuite bathroom with a walk in shower and
                  outdoor patio. This bedroom has AC.
                </p>
                <p className="mb-4">
                  <span className="font-medium">• Bedroom 3 -</span> Bunk room
                  with two queen beds and an ensuite bathroom with a walk in
                  shower.
                </p>
                <p className="mb-4">
                  <span className="font-medium">• Additional -</span> Washer and
                  dryer located on this floor.
                </p>

                <p className="font-bold mb-2">UPPER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">• Bedroom 4 -</span> Full bed
                  with an ensuite bathroom with a walk in shower and office
                  desk.
                </p>
                <p className="mb-4">
                  <span className="font-medium">• Features:</span> Large open
                  plan kitchen with a big island and pantry. Equipped with a
                  Miele coffee machine, kitchen aid mixer, soda stream and 2
                  drawer freezer. Spacious 7 seater dining room. Main living
                  room with a wood burning fireplace. Media room located just
                  off the living room with a large TV. Spacious outdoor deck
                  space.
                </p>

                <p className="font-bold mb-2">MAIN LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">• Bedroom 5 -</span> Well
                  appointed room with a queen bed.
                </p>
                <p className="mb-4">
                  <span className="font-medium">• Bedroom 6 -</span> A beautiful
                  bedroom with a queen bed and patio access to the hot tub. Both
                  bedrooms 5 and 6 share a bathroom with a walk in shower
                  located in between both rooms.
                </p>
                <p className="mb-4">
                  <span className="font-medium">• Bedroom 8 -</span> (photos not
                  listed) one-bedroom suite with a queen bed - separate bedroom
                  and closet and fully functional kitchen with full-sized
                  appliances. Located just off of the kitchen.
                </p>

                <p className="font-bold mb-2">LOWER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">• Bedroom 7 -</span> is located
                  on the ground floor, it has a bunk bed with two queen beds. An
                  additional queen murphy bed is also in this room.
                </p>
                <p className="mb-4">
                  <span className="font-medium">• Features:</span> Large
                  bathroom on this floor next to the media/bedroom with a walk
                  in shower. Garage fits one car and has a gym area with a
                  peloton, bench press, weights and running machine. Additional
                  laundry space with a washer and dryer. Large mudroom and ski
                  storage area with exit to the garage. Sauna located on this
                  floor by the mudroom.
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
                Kadenwood is considered the most exclusive area to rent or own
                in all of Whistler. You&apos;ll have access to Kadenwood&apos;s
                private gondola, providing quick and convenient access to
                Creekside Village and the Creekside Gondola, connecting you to
                Whistler&apos;s extensive ski terrain.
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                There are less than 20 homes on the rental market in this
                neighbourhood and they tend to book fast. *Vail has spent $320
                million dollars in renovations which include the new Creekside
                Gondola and Red Chair (Red Chair located at the top of Creekside
                Gondola). If you are looking to avoid lines, this is side of
                Whistler you will want to have easy access to. The lines tend to
                get very busy near the village because of all surrounding hotels
                and condo rentals. Kadenwood has easy ski in ski out access to
                the new and improved lifts.*
              </p>
              <p className="text-gray-800 max-w-4xl mb-6">
                The Kadenwood neighborhood is perched on the South side of
                Whistler Mountain, high above Whistler Creekside and is easily
                accessible by road or by private gondola from the base of
                Creekside. Kadenwood provides easy access to ski-in/ski-out
                trails on the edge of an old-growth forest and offers astounding
                Coastal Range views.
              </p>
              <p className="text-gray-800 max-w-4xl">
                The 5 minute gondola ride, 4 minute drive, or a quick ski ride
                down will bring you to all the amenities in Creekside Village
                including access to Whistler Mountain ski hill.
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
                  <h3 className="font-semibold mb-3">Exterior & Access</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Ski-in/ski-out access</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Private Kadenwood gondola</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Mountain views</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Spacious outdoor decks</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Hot tub</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Garage with gym equipment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Interior</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Private elevator to all levels</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Multiple indoor fireplaces</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Indoor sauna</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Media room</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Built-in sound system</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Ping pong table</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Kitchen & Essentials</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Open-plan kitchen with island</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Miele coffee machine</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Multiple laundry facilities</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Ski storage area</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>High-speed WiFi</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>Exercise equipment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-gray-100 p-8 rounded-xl mb-20">
              <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
              <p className="text-gray-800 mb-6">
                Experience the ultimate luxury ski vacation at Panoramic Estate.
                Nightly rates range from $5,800 to $9,000+ depending on the
                season, with a minimum stay of 4 nights (7 nights during
                holidays).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="sm:w-auto px-6 py-3 bg-black hover:bg-gray-900 text-white rounded text-center font-medium"
                >
                  Contact Us to Book
                </Link>
                <a
                  href="https://www.airbnb.ca/rooms/1104637821836596397?guests=1&adults=1&s=67&unique_share_id=67164555-993c-40dc-b188-23ffe0755654"
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
                  <FiX size={24} />
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
                      alt={`Panoramic Estate image ${index + 1}`}
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
                  <FiX size={24} />
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
                  <FiChevronLeft size={24} />
                </button>
                <div className="relative w-full h-full max-h-[80vh]">
                  <Image
                    src={photos[selectedPhotoIndex]}
                    alt={`Panoramic Estate full view ${selectedPhotoIndex + 1}`}
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
                  <FiChevronRight size={24} />
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

export default PanoramicEstate;
