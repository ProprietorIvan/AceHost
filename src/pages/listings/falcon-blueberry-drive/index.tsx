import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaBed, FaBath } from "react-icons/fa";

const FalconBlueberryDrive = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Property photos
  const photos = [
    "/photos/properties/Falcon/01-3595 Falcon Cres-01.jpg",
    "/photos/properties/Falcon/02-3595 Falcon Cres-02.jpg",
    "/photos/properties/Falcon/03-3595 Falcon Cres-03.jpg",
    "/photos/properties/Falcon/04-3595 Falcon Cres-04.jpg",
    "/photos/properties/Falcon/05-3595 Falcon Cres-05.jpg",
    "/photos/properties/Falcon/06-3595 Falcon Cres-06.jpg",
    "/photos/properties/Falcon/07-3595 Falcon Cres-07.jpg",
    "/photos/properties/Falcon/08-3595 Falcon Cres-08.jpg",
    "/photos/properties/Falcon/09-3595 Falcon Cres-09.jpg",
    "/photos/properties/Falcon/10-3595 Falcon Cres-10.jpg",
    "/photos/properties/Falcon/11-3595 Falcon Cres-11.jpg",
    "/photos/properties/Falcon/12-3595 Falcon Cres-12.jpg",
    "/photos/properties/Falcon/13-3595 Falcon Cres-13.jpg",
    "/photos/properties/Falcon/14-3595 Falcon Cres-14.jpg",
    "/photos/properties/Falcon/15-3595 Falcon Cres-15.jpg",
    "/photos/properties/Falcon/16-3595 Falcon Cres-16.jpg",
    "/photos/properties/Falcon/17-3595 Falcon Cres-17.jpg",
    "/photos/properties/Falcon/18-3595 Falcon Cres-18.jpg",
    "/photos/properties/Falcon/19-3595 Falcon Cres-19.jpg",
    "/photos/properties/Falcon/20-3595 Falcon Cres-20.jpg",
    "/photos/properties/Falcon/21-3595 Falcon Cres-21.jpg",
    "/photos/properties/Falcon/22-3595 Falcon Cres-22.jpg",
    "/photos/properties/Falcon/23-3595 Falcon Cres-23.jpg",
  ];

  return (
    <>
      <Head>
        <title>
          Falcon | Blueberry Drive - Luxury Property in Whistler | AceHost
        </title>
        <meta
          name="description"
          content="Experience Whistler luxury at its finest. This beautiful 7-bedroom chalet on Blueberry Drive offers spectacular mountain views, spacious accommodations for up to 15 guests, and is only minutes from Whistler Village."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-6 flex items-center space-x-4">
                <span>15 guests</span>
                <span className="mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $1,300-$3,500</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Falcon | Blueberry Drive
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
                href="https://www.airbnb.ca/rooms/18060329?preview_for_ml=true&source_impression_id=p3_1684112119_tL0LL7QnYLFGOCBI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium"
              >
                Book on Airbnb
              </a>
            </div>

            <div className="text-center mb-16">
              <p className="text-gray-700">
                Minimum Stay Requirement: 2 Nights weekdays | 3 weekends | 7
                Christmas/NY
              </p>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer"
                  onClick={() => setShowAllPhotos(true)}
                >
                  <Image
                    src={photo}
                    alt={`Falcon Blueberry Drive interior ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-16 max-w-4xl">
              Cozy chalet in an amazing location! Beautiful views of the
              mountain in the prestigious, quiet and family orientated Blueberry
              Hill. Perfect for a large group or one family. 25 minute walk to
              the village through the most beautiful trails or catch the local
              bus just two steps away from the front door, which comes by every
              15 minutes.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[1]}
                    alt="Falcon Blueberry Drive Interior"
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
                <p className="text-gray-800">
                  As you enter through the unique West Coast native hand-carved
                  front door, you&apos;ll be greeted by a heated slate entrance.
                  This remarkable property boasts 7 spacious bedrooms, providing
                  ample space and comfort for your stay, with 9 stylish beds and
                  3.5 well-appointed bathrooms. Find comfort and warmth by the
                  crackling wood-burning natural fireplace in the spacious
                  living room, creating an inviting and welcoming ambiance for
                  relaxing after a day of enjoying Whistler&apos;s outdoors.
                  Savour the outdoors with a generous and inviting outdoor
                  dining space with a spacious deck, a dining table, and a
                  barbecue. There is plenty of space in the driveway to fit 4-5
                  vehicles. The garage is not available for use in winter, the
                  garage is available for up to 7 bikes as storage only in the
                  Summer. Not large enough for a vehicle. Whether you opt for al
                  fresco dining, unwind in the hot tub, or gather around the
                  fireplace, this exceptional property offers the perfect spaces
                  for memorable moments.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src="/photos/properties/Falcon/08-3595 Falcon Cres-08.jpg"
                    alt="Falcon Blueberry Drive Bedroom"
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
                  <span className="font-medium">Master Bedroom 1-</span> The
                  spacious master bedroom has a gorgeous king bed and is located
                  on the top floor, with an ensuite large bath and shower, walk
                  in wardrobe and private deck with beautiful mountain views.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2-</span> At the other
                  end of the floor to the master, this beautiful bright and
                  spacious room has a queen bed and large windows allowing for
                  ample natural light.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 3-</span> A stylish
                  queen bed and vast windows with gorgeous views, the room is
                  the same size as bedroom 3. Both bedrooms 2 and 3 share a
                  bathroom with a shower and bath tub.
                </p>

                <p className="font-bold mb-2">MID LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 4-</span> A lovely large
                  bedroom equipped with a gorgeous queen bed, with a sofa for
                  lounging and desk space. Adjacent to the room is a powder
                  bathroom and the outdoor hot tub is accessed through this room
                  on the back deck.
                </p>

                <p className="font-bold mb-2">LOWER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 5-</span> A stylish king
                  bed in this inviting and cozy space.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 6-</span> Twin bunk bed
                  + twin bed. (3 total beds).
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 7-</span> Has a king
                  bed.
                </p>
                <p className="mb-4">
                  All three bedrooms share a spacious bathroom, 1 sink, and a
                  large shower.
                </p>
                <p className="mb-4 italic">* No pets allowed*</p>
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
                The best part of this chalet is the location! A scenic 25-minute
                stroll around the Whistler Golf course brings you straight into
                Whistler Village. Alternatively, it&apos;s a 3-4 minute drive to
                the village, or hop on the local bus a stone&apos;s throw away
                from the front door, running every 10-15 minutes. The drive to
                the village is just 3 minutes away. This is the ideal home for
                your holiday!
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-xl text-white font-medium">
                Falcon | Blueberry Drive - All Photos
              </h2>
              <button
                onClick={() => setShowAllPhotos(false)}
                className="text-white hover:text-gray-300"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="relative aspect-[4/3]">
                    <Image
                      src={photo}
                      alt={`Falcon Blueberry Drive photo ${index + 1}`}
                      fill
                      className="object-cover"
                    />
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

export default FalconBlueberryDrive;
