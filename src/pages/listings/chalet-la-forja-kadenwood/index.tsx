import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaBed, FaBath } from "react-icons/fa";

const ChaletLaForja = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Property photos
  const photos = [
    "/photos/properties/Chalet La Forja/hero00001.jpg",
    "/photos/properties/Chalet La Forja/hero00002.jpg",
    "/photos/properties/Chalet La Forja/02-2950 Heritage Peaks Trail-02.jpg",
    "/photos/properties/Chalet La Forja/03-2950 Heritage Peaks Trail-03.jpg",
    "/photos/properties/Chalet La Forja/04-2950 Heritage Peaks Trail-04.jpg",
    "/photos/properties/Chalet La Forja/05-2950 Heritage Peaks Trail-05.jpg",
    "/photos/properties/Chalet La Forja/07-2950 Heritage Peaks Trail-07.jpg",
    "/photos/properties/Chalet La Forja/08-2950 Heritage Peaks Trail-08.jpg",
    "/photos/properties/Chalet La Forja/09-2950 Heritage Peaks Trail-09.jpg",
    "/photos/properties/Chalet La Forja/10-2950 Heritage Peaks Trail-10.jpg",
    "/photos/properties/Chalet La Forja/11-2950 Heritage Peaks Trail-11.jpg",
    "/photos/properties/Chalet La Forja/12-2950 Heritage Peaks Trail-12.jpg",
    "/photos/properties/Chalet La Forja/13-2950 Heritage Peaks Trail-13.jpg",
    "/photos/properties/Chalet La Forja/14-2950 Heritage Peaks Trail-14.jpg",
    "/photos/properties/Chalet La Forja/15-2950 Heritage Peaks Trail-15.jpg",
    "/photos/properties/Chalet La Forja/16-2950 Heritage Peaks Trail-16.jpg",
    "/photos/properties/Chalet La Forja/17-2950 Heritage Peaks Trail-17.jpg",
    "/photos/properties/Chalet La Forja/19-2950 Heritage Peaks Trail-19.jpg",
    "/photos/properties/Chalet La Forja/20-2950 Heritage Peaks Trail-20.jpg",
    "/photos/properties/Chalet La Forja/22-2950 Heritage Peaks Trail-22.jpg",
    "/photos/properties/Chalet La Forja/24-2950 Heritage Peaks Trail-24.jpg",
    "/photos/properties/Chalet La Forja/25-2950 Heritage Peaks Trail-25.jpg",
    "/photos/properties/Chalet La Forja/26-2950 Heritage Peaks Trail-26.jpg",
    "/photos/properties/Chalet La Forja/27-2950 Heritage Peaks Trail-27.jpg",
    "/photos/properties/Chalet La Forja/28-2950 Heritage Peaks Trail-28.jpg",
    "/photos/properties/Chalet La Forja/29-2950 Heritage Peaks Trail-29.jpg",
    "/photos/properties/Chalet La Forja/30-2950 Heritage Peaks Trail-30.jpg",
    "/photos/properties/Chalet La Forja/31-2950 Heritage Peaks Trail-31.jpg",
    "/photos/properties/Chalet La Forja/32-2950 Heritage Peaks Trail-32.jpg",
    "/photos/properties/Chalet La Forja/33-2950 Heritage Peaks Trail-33.jpg",
    "/photos/properties/Chalet La Forja/34-2950 Heritage Peaks Trail-34.jpg",
    "/photos/properties/Chalet La Forja/2950 Heritage Peaks Trail 4 Large.png",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb01.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb22.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb23.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb29.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb30.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb32.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb33.jpg",
    "/photos/properties/Chalet La Forja/2950HeritagePeaks3Feb45.jpg",
  ];

  return (
    <>
      <Head>
        <title>Chalet La Forja | Kadenwood | Private Butler - AceHost</title>
        <meta
          name="description"
          content="Experience the ultimate luxury at Chalet La Forja in Kadenwood. This 10,000+ square foot ski-in/ski-out mansion features a pool, hot tub, gym, private gondola, and a private butler. Ranked one of VRBO's Top 10 vacation rentals in 2023."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-6 flex items-center space-x-4">
                <span>12+4 guests</span>
                <span className="mx-3 text-gray-500">|</span>
                <span>
                  Nightly Price Range: $7,000-11,000+ | Private Butler Included
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Chalet La Forja | Kadenwood | Private Butler
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
                href="https://www.airbnb.ca/rooms/52655503?guests=1&adults=1&s=67&unique_share_id=f1bb5c2c-51f9-4a82-9aa4-670fb8caa71d"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium"
              >
                Book on Airbnb
              </a>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-700">
                Minimum Stay Requirement: 4 Nights | 7 Christmas & NY
              </p>
            </div>

            {/* Featured Video */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/922794848"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Chalet La Forja Property Walkthrough"
                ></iframe>
              </div>
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
                    alt={`Chalet La Forja interior ${index + 1}`}
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
              Luxury Ski-In/Out | Pool | Hot tub | Gym | Gondola; Welcome to
              Chalet La Forja in Kadenwood. This 10,000+ square foot home
              amongst the locals is considered one of, if not the most
              prestigious luxury rental in all of Whistler. Perfect for 1 or 2
              families seeking their own bedrooms.
              <br />
              <br />
              Ranked one of VRBO&apos;s Top 10 vacation rentals in 2023.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[6]}
                    alt="Chalet La Forja Interior"
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
                  This luxurious home includes a gourmet chefs kitchen with a
                  butlers pantry, two private offices, state of the art
                  electronics with built in Sonos speaker systems in every room,
                  gym, hot-tub, heated pool, steam shower, private gondola, and
                  access to and from the ski-hill from your front door. Full 7
                  bedroom home, with an additional single bed in a smaller
                  private room with a window.
                </p>
                <p className="text-gray-800 mb-6">
                  <span className="font-bold">Private Butler:</span> In addition
                  to serving breakfast, lunch, and dinner, the butler is
                  responsible for all food and drink service throughout the day.
                  To create the perfect ambiance, they will set up the hot tub,
                  light the fire, and adjust the music and household functions.
                  Get your daily dose of caffeine from your own personal
                  barista. Overall, the butler is there to make your stay as
                  smooth and comfortable as possible.
                </p>
                <p className="text-gray-800 mb-6">
                  Complimentary housekeeping included every other day.
                </p>
                <p className="text-gray-800">
                  Included when booking this property, we will help you with all
                  your VIP experiences such as coordinating chefs, chalet
                  hosts/servers, helicopter experiences, transportation to and
                  from airport, snowmobiling, restaurant reservations and
                  recommendations, hiking recommendations, and more.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[15]}
                    alt="Chalet La Forja Bedroom"
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
                  <span className="font-medium">Bedroom 1-</span> Master bedroom
                  with a beautiful king bed with an ensuite shower and bathtub
                  as well as a private patio with 2 day lounge beds.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 2-</span> Second master
                  bedroom situated next to the master. It has a king bed with an
                  ensuite bathroom that has a shower and bath with private patio
                  access.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 3-</span> Located at the
                  end of the corridor the room has a king bed, an ensuite
                  bathroom that has a shower and bath and private patio access.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 4-</span> Very large
                  room with a king bed, ensuite bathroom with a shower and is
                  located next to bedroom 3.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 7-</span> This hybrid
                  office space has a twin bed, large window and connects to
                  bedroom 2. It has its own private entrance leading from the
                  hallway and shares a bathroom with bedroom 2.
                </p>

                <p className="font-bold mb-2">MID LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 5-</span> Located on its
                  own level this bunk bed room has 6 queen beds with a spacious
                  ensuite bathroom that has a shower and a bath.
                </p>

                <p className="font-bold mb-2">LOWER LEVEL:</p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 6-</span> Has a king bed
                  and 2 twins and is tucked away down on the lower level for
                  ultimate privacy with an ensuite bathroom and shower. Enjoy
                  private access to the pool, hot tub and backyard.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Bedroom 8-</span> Has a king bed
                  and is connected with bedroom 6 (walk through bedroom 6 to
                  exit the rooms into the rec room) They share the same
                  bathroom. Option for one of these rooms to use the large
                  shower with a steam function located in the rec room just off
                  these bedrooms.
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
                The Kadenwood neighbourhood is perched on the south side of
                Whistler Mountain, high above Whistler Creekside and is easily
                accessible by road or 5 minutes by private gondola from the base
                of Creekside. Kadenwood provides easy access to ski-in/ski-out
                trails on the edge of an old-growth forest and offers astounding
                Coastal Range views.
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
              <h2 className="text-xl text-white font-medium">
                Chalet La Forja | Kadenwood - All Photos
              </h2>
              <button
                onClick={() => setShowAllPhotos(false)}
                className="text-white hover:text-gray-300"
              >
                Close
              </button>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4">
              <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/922794848"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Chalet La Forja Property Walkthrough"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="relative aspect-[4/3]">
                    <Image
                      src={photo}
                      alt={`Chalet La Forja photo ${index + 1}`}
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

export default ChaletLaForja;
