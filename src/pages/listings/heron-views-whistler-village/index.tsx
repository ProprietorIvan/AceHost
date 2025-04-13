import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaBed, FaBath } from "react-icons/fa";

const HeronViewsWhistlerVillage = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Property photos
  const photos = [
    "/photos/properties/3445-Heron-Place/01-3445 Heron Place 01.jpg",
    "/photos/properties/3445-Heron-Place/02-3445 Heron Place 02.jpg",
    "/photos/properties/3445-Heron-Place/03-3445 Heron Place 03.jpg",
    "/photos/properties/3445-Heron-Place/04-3445 Heron Place 04.jpg",
    "/photos/properties/3445-Heron-Place/05-3445 Heron Place 05.jpg",
    "/photos/properties/3445-Heron-Place/06-3445 Heron Place 06.jpg",
    "/photos/properties/3445-Heron-Place/07-3445 Heron Place 07.jpg",
    "/photos/properties/3445-Heron-Place/08-3445 Heron Place 08.jpg",
    "/photos/properties/3445-Heron-Place/09-3445 Heron Place 09.jpg",
    "/photos/properties/3445-Heron-Place/11-3445 Heron Place 11.jpg",
    "/photos/properties/3445-Heron-Place/13-3445 Heron Place 13.jpg",
    "/photos/properties/3445-Heron-Place/14-3445 Heron Place 14.jpg",
    "/photos/properties/3445-Heron-Place/15-3445 Heron Place 15.jpg",
    "/photos/properties/3445-Heron-Place/16-3445 Heron Place 16.jpg",
    "/photos/properties/3445-Heron-Place/17-3445 Heron Place 17.jpg",
    "/photos/properties/3445-Heron-Place/18-3445 Heron Place 18.jpg",
    "/photos/properties/3445-Heron-Place/19-3445 Heron Place 19.jpg",
    "/photos/properties/3445-Heron-Place/21-3445 Heron Place 21.jpg",
    "/photos/properties/3445-Heron-Place/22-3445 Heron Place 22.jpg",
    "/photos/properties/3445-Heron-Place/23-3445 Heron Place 23.jpg",
    "/photos/properties/3445-Heron-Place/24-3445 Heron Place 24.jpg",
    "/photos/properties/3445-Heron-Place/25-3445 Heron Place 25.jpg",
    "/photos/properties/3445-Heron-Place/27-3445 Heron Place 27-Edit.jpg",
    "/photos/properties/3445-Heron-Place/28-3445 Heron Place 28.jpg",
    "/photos/properties/3445-Heron-Place/29-3445 Heron Place 29.jpg",
    "/photos/properties/3445-Heron-Place/30-3445 Heron Place 30.jpg",
    "/photos/properties/3445-Heron-Place/31-3445 Heron Place 31.jpg",
    "/photos/properties/3445-Heron-Place/32-3445 Heron Place 32.jpg",
    "/photos/properties/3445-Heron-Place/33-3445 Heron Place 33.jpg",
    "/photos/properties/3445-Heron-Place/34-3445 Heron Place 34.jpg",
    "/photos/properties/3445-Heron-Place/35-3445 Heron Place 35.jpg",
    "/photos/properties/3445-Heron-Place/36-3445 Heron Place 36.jpg",
    "/photos/properties/3445-Heron-Place/37-3445 Heron Place 37.jpg",
    "/photos/properties/3445-Heron-Place/38-3445 Heron Place 38.jpg",
    "/photos/properties/3445-Heron-Place/39-3445 Heron Place 39.jpg",
    "/photos/properties/3445-Heron-Place/40-3445 Heron Place 40.jpg",
    "/photos/properties/3445-Heron-Place/41-3445 Heron Place 41.jpg",
    "/photos/properties/3445-Heron-Place/42-3445 Heron Place 42.jpg",
    "/photos/properties/3445-Heron-Place/43-3445 Heron Place 43.jpg",
    "/photos/properties/3445-Heron-Place/44-3445 Heron Place 44.jpg",
    "/photos/properties/3445-Heron-Place/45-3445 Heron Place 45.jpg",
    "/photos/properties/3445-Heron-Place/46-3445 Heron Place 46.jpg",
    "/photos/properties/3445-Heron-Place/47-3445 Heron Place 47.jpg",
    "/photos/properties/3445-Heron-Place/48-3445 Heron Place 48.jpg",
    "/photos/properties/3445-Heron-Place/50-3445 Heron Place 50.jpg",
    "/photos/properties/3445-Heron-Place/54-3445 Heron Place 54.jpg",
    "/photos/properties/3445-Heron-Place/58-3445 Heron Place 58.jpg",
    "/photos/properties/3445-Heron-Place/59-3445 Heron Place 59.jpg",
    "/photos/properties/3445-Heron-Place/60-3445 Heron Place 60.jpg",
    "/photos/properties/3445-Heron-Place/61-3445 Heron Place 61.jpg",
    "/photos/properties/3445-Heron-Place/62-3445 Heron Place 62.jpg",
    "/photos/properties/3445-Heron-Place/63-3445 Heron Place 63.jpg",
    "/photos/properties/3445-Heron-Place/64-3445 Heron Place 24-Edit.jpg",
    "/photos/properties/3445-Heron-Place/65-3445 Heron Place 25-Edit.jpg",
    "/photos/properties/3445-Heron-Place/66-3445 Heron Place 51-Edit.jpg",
    "/photos/properties/3445-Heron-Place/67-3445 Heron Place 52-Edit.jpg",
    "/photos/properties/3445-Heron-Place/68-3445 Heron Place 53-Edit.jpg",
    "/photos/properties/3445-Heron-Place/69-3445 Heron Place 55-Edit.jpg",
    "/photos/properties/3445-Heron-Place/70-3445 Heron Place 27-Edit.jpg",
  ];

  return (
    <>
      <Head>
        <title>Heron Views | Whistler Village - AceHost</title>
        <meta
          name="description"
          content="Experience Whistler luxury at Heron Views, a beautiful 7,800 sq ft log chalet in Blueberry Hill with breathtaking mountain views, 5 bedrooms, 5.5 baths, and spectacular outdoor spaces including a 14-person hot tub and fire pit."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-black text-white rounded-full py-2 px-6 flex items-center space-x-4">
                <span>11 guests</span>
                <span className="mx-3 text-gray-500">|</span>
                <span>Nightly Price Range: $1,200-$3,500</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Heron Views | Whistler Village
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
                href="https://www.airbnb.ca/rooms/1168163637007998550?guests=1&adults=1&s=67&unique_share_id=8227e964-920d-4bc0-8073-13043963151f"
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
                    alt={`Heron Views interior ${index + 1}`}
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
              Welcome to Heron Views, a beautiful and inviting traditional log
              chalet in the prestigious Blueberry Hill neighborhood. This
              spectacular property offers breathtaking views of the Whistler
              Golf Course, Blackcomb, and Whistler Mountain. Spanning 7,800 sq
              ft, this spacious retreat sleeps 11 guests in 5 large bedrooms and
              5.5 baths. Just a 3–4-minute drive to the village and slopes, or a
              15-minute walk through trails, with a local bus stop steps away.
              Enjoy AC during summer, a rare find in Whistler.
            </p>

            {/* The Space Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[2]}
                    alt="Heron Views Interior"
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
                  Outdoor enthusiasts will love the two newly renovated modern
                  and spacious decks, with 2,400 sq ft of space, providing ample
                  room for entertaining and taking in breathtaking views. The
                  outdoor decks are a true highlight, the top deck features a
                  fire pit table, stylish outdoor furniture, a daybed, and a
                  BBQ, perfect for lounging and enjoying a drink with friends
                  and family. The bottom deck is even more impressive, boasting
                  a large hot tub that seats 14 people, a cozy sunken fire pit,
                  two sun loungers, and deck chairs, all designed to help you
                  soak in the stunning views of the Whistler Golf Course and
                  surrounding mountain views.
                </p>
                <p className="text-gray-800 mb-6">
                  This open-plan living space includes a well-equipped kitchen,
                  appliances including a Vertuo Nespresso machine, Keurig coffee
                  machine, and drip coffee machine, and Smart TV. Enjoy the wet
                  bar located just off the dining room with lots of glassware
                  and a bar fridge. The spacious living room features two
                  seating areas with a Smart TV in one. The ground floor
                  features a large living room with a large Samsung Frame TV.
                  Take your entertaining to the next level and seamlessly blend
                  indoor-outdoor living with the vast wet bar, with lots of
                  countertop space and a fridge, and direct access to the lower
                  deck. Unwind after a day on the hill and enjoy the steam
                  shower.
                </p>
                <p className="text-gray-800">
                  The driveway fits two vehicles and the garage fits one vehicle
                  with plenty of storage for all your ski gear or bikes in the
                  summer. Book your stay at this enchanting log chalet and
                  experience the perfect blend of rustic charm and modern luxury
                  in the heart of Blueberry Hill. Enjoy sweeping views, easy
                  access to the Valley Trail and Whistler Village, and an
                  unforgettable mountain retreat.
                </p>
              </div>
            </div>

            {/* Bedroom Layout Section */}
            <div className="flex flex-col md:flex-row mb-20">
              <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                <div className="relative aspect-[4/3] mb-2">
                  <Image
                    src={photos[10]}
                    alt="Heron Views Bedroom"
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

                <p className="font-bold mb-2">Top Level:</p>
                <p className="mb-4">
                  • <span className="font-medium">Master bedroom 1-</span>{" "}
                  Featuring a king bed with a generously sized ensuite bathroom
                  with a bathtub large walk-in shower and a separate toilet
                  room. Enjoy the convenience of a large closet and private
                  balcony with outdoor seating, wake up, and enjoy your morning
                  coffee in total relaxation and privacy.
                </p>
                <p className="mb-4">
                  • <span className="font-medium">Bedroom 2-</span> This bright
                  and cozy bedroom has a 4-poster king bed, an ensuite bathroom,
                  a bathtub, and a private balcony.
                </p>
                <p className="mb-4">
                  • <span className="font-medium">Bedroom 3-</span> This modern
                  room features a queen bed, a newly renovated ensuite bathroom,
                  and a spacious walk-in shower.
                </p>
                <p className="mb-4">
                  • <span className="font-medium">Bedroom 4-</span> Tucked down
                  the end of the corridor is the bunk room with a queen bed on
                  the bottom and twin on the top. Ensuite bathroom with a
                  bathtub and private balcony. Smart TV in the bedroom.
                </p>

                <p className="font-bold mb-2">Lower level:</p>
                <p className="mb-4">
                  • <span className="font-medium">Bedroom 5-</span> Tucked away
                  at the end of the corridor is this well-appointed cozy bedroom
                  with a queen bed, a large bathroom with a walk-in shower is
                  located just next door. Enjoy easy access to the lower deck
                  with the hot tub and sunken fire pit.
                </p>
                <p className="mb-4">• Steam shower located on this floor.</p>
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
                This chalet&apos;s exceptional location makes it the ideal home
                base for your holiday. Home is a minute&apos;s walk away from
                Whistler Golf Course and the valley trail.
              </p>
            </div>
          </div>
        </main>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
            <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
              <h2 className="text-xl text-white font-medium">
                Heron Views | Whistler Village - All Photos
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
                      alt={`Heron Views photo ${index + 1}`}
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

export default HeronViewsWhistlerVillage;
