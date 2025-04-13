import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaBed, FaBath } from "react-icons/fa";

const LuxeCozyWhistlerVillage = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Property photos
  const photos = [
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/02-1 4668 Blackcomb Way 02-Edit.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/03-1 4668 Blackcomb Way 03.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/04-1 4668 Blackcomb Way 04-Edit.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/05-1 4668 Blackcomb Way 05.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/06-1 4668 Blackcomb Way 06.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/07-1 4668 Blackcomb Way 07.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/08-1 4668 Blackcomb Way 08.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/09-1 4668 Blackcomb Way 09.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/10-1 4668 Blackcomb Way 10.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/11-1 4668 Blackcomb Way 11.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/12-1 4668 Blackcomb Way 12.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/13-1 4668 Blackcomb Way 13.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/14-1 4668 Blackcomb Way 14.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/15-1 4668 Blackcomb Way 15.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/17-1 4668 Blackcomb Way 16.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/18-1 4668 Blackcomb Way 17.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/19-1 4668 Blackcomb Way 18.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/20-1 4668 Blackcomb Way 19.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/21-1 4668 Blackcomb Way 20.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/22-1 4668 Blackcomb Way 21.jpg",
    "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/23-1 4668 Blackcomb Way 22-Edit.jpg",
  ];

  return (
    <>
      <Head>
        <title>Luxe-Cozy 3-Bed Whistler Village - AceHost</title>
        <meta
          name="description"
          content="Experience Whistler luxury in this stunning 3-bedroom, 3-bathroom townhome located in the heart of Blackcomb. This end unit offers an ideal mountain retreat with easy access to trails and a ski-in location for the perfect getaway."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-6 flex items-center space-x-4">
                <span>6 guests</span>
                <span className="mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $400-$1,700+</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Luxe-Cozy 3-Bed Whistler Village
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
                className="px-8 py-3 bg-white border border-gray-300 text-gray-900 rounded font-medium hover:bg-gray-50"
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
                href="https://www.airbnb.ca/rooms/00011803"
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer"
                  onClick={() => setShowAllPhotos(true)}
                >
                  <Image
                    src={photo}
                    alt={`Luxe-Cozy Whistler Village interior ${index + 1}`}
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
              Welcome to our luxurious 3-bedroom, 3-bathroom townhome located in
              the heart of Blackcomb, Whistler! This end unit offers an ideal
              mountain retreat for those looking for a unique & cozy log chalet
              feel. A peaceful location with easy access to the biking/hiking
              trails at Lost Lake and snowshoe/cross-country trails during the
              winter. SKI In SKI Out home. Walking distance to the main Whistler
              Village and ski lifts.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[4]}
                    alt="Luxe-Cozy Whistler Village Interior"
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
                  Escape to mountain bliss in our stunning 3-bedroom, 3-bathroom
                  townhome nestled in Blackcomb, Whistler. This end unit
                  promises the ultimate retreat with serene surroundings and
                  direct access to the Lost Lake biking and hiking trails. In
                  winter, enjoy the convenience of ski-in access (snow
                  conditions permitting) or hop on the free shuttle to the
                  slopes.
                </p>
                <p className="text-gray-800 mb-6">
                  Step inside to find a spacious, inviting living area featuring
                  a cozy wood-burning fireplace and upscale furnishings. The
                  fully equipped kitchen and dining area are perfect for family
                  meals, and the private patio with BBQ grill offers delightful
                  al fresco dining. After a day of adventure, relax in your
                  private hot tub or explore the nearby trails.
                </p>
                <p className="text-gray-800">
                  Our townhome comfortably accommodates up to 8 guests, with a
                  king bed in the master suite, a queen bed in the second
                  bedroom, and two singles in the third. Additional amenities
                  include EV charging in the garage (note: adaptor not
                  included). For your comfort and convenience, please note that
                  we do not allow pets, smoking, or parties.
                </p>
              </div>
            </div>

            {/* Guest Access Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[9]}
                    alt="Luxe-Cozy Whistler Village Living Area"
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
                        d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Guest Access</h2>
                </div>

                <p className="text-gray-800 mb-6">
                  Escape to mountain bliss in our stunning 3-bedroom, 3-bathroom
                  townhome nestled in Blackcomb, Whistler. This end unit
                  promises the ultimate retreat with serene surroundings and
                  direct access to the Lost Lake biking and hiking trails. In
                  winter, enjoy the convenience of ski-in access (snow
                  conditions permitting) or hop on the free shuttle to the
                  slopes.
                </p>
                <p className="text-gray-800 mb-6">
                  Step inside to find a spacious, inviting living area featuring
                  a cozy wood-burning fireplace and upscale furnishings. The
                  fully equipped kitchen and dining area are perfect for family
                  meals, and the private patio with BBQ grill offers delightful
                  al fresco dining. After a day of adventure, relax in your
                  private hot tub or explore the nearby trails.
                </p>
                <p className="text-gray-800">
                  Our townhome comfortably accommodates up to 8 guests, with a
                  king bed in the master suite, a queen bed in the second
                  bedroom, and two singles in the third. Additional amenities
                  include EV charging in the garage (note: adaptor not
                  included). For your comfort and convenience, please note that
                  we do not allow pets, smoking, or parties.
                </p>
              </div>
            </div>

            {/* Other Things to Note Section */}
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
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Other Things to Note</h2>
              </div>
              <ul className="list-disc pl-5 mb-6 text-gray-800">
                <li className="mb-2">No pets allowed</li>
                <li className="mb-2">No smoking</li>
                <li className="mb-2">No party crowds</li>
              </ul>
              <p className="text-gray-800 font-medium mb-2">
                Registration number
              </p>
              <p className="text-gray-800">00011803</p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-xl text-white font-medium">
                Luxe-Cozy 3-Bed Whistler Village - All Photos
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
                      alt={`Luxe-Cozy Whistler Village photo ${index + 1}`}
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

export default LuxeCozyWhistlerVillage;
