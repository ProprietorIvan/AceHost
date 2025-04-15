import React, { useState, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function TwoCedarsKadenwood() {
  const { t } = useTranslation("common");
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  const propertyImages = [
    "/photos/properties/Two Cedars New/OSA_AncientCW1002 Panorama.jpg",
    "/photos/properties/Two Cedars New/02-2934 Ancient Cedars-02.jpg",
    "/photos/properties/Two Cedars New/03-2934 Ancient Cedars-03.jpg",
    "/photos/properties/Two Cedars New/04-2934 Ancient Cedars-04.jpg",
    "/photos/properties/Two Cedars New/05-2934 Ancient Cedars-05.jpg",
    "/photos/properties/Two Cedars New/06-2934 Ancient Cedars-06.jpg",
    "/photos/properties/Two Cedars New/07-2934 Ancient Cedars-07.jpg",
    "/photos/properties/Two Cedars New/11-2934 Ancient Cedars-11.jpg",
    "/photos/properties/Two Cedars New/12-2934 Ancient Cedars-12.jpg",
    "/photos/properties/Two Cedars New/13-2934 Ancient Cedars-13.jpg",
    "/photos/properties/Two Cedars New/14-2934 Ancient Cedars-14.jpg",
    "/photos/properties/Two Cedars New/15-2934 Ancient Cedars-15.jpg",
    "/photos/properties/Two Cedars New/16-2934 Ancient Cedars-16.jpg",
    "/photos/properties/Two Cedars New/17-2934 Ancient Cedars-17.jpg",
    "/photos/properties/Two Cedars New/18-2934 Ancient Cedars-18.jpg",
    "/photos/properties/Two Cedars New/20-2934 Ancient Cedars-20.jpg",
    "/photos/properties/Two Cedars New/21-2934 Ancient Cedars-21.jpg",
    "/photos/properties/Two Cedars New/24-2934 Ancient Cedars-24.jpg",
    "/photos/properties/Two Cedars New/25-2934 Ancient Cedars-25.jpg",
    "/photos/properties/Two Cedars New/26-2934 Ancient Cedars-26.jpg",
    "/photos/properties/Two Cedars New/28-2934 Ancient Cedars-28.jpg",
    "/photos/properties/Two Cedars New/30-2934 Ancient Cedars-30.jpg",
    "/photos/properties/Two Cedars New/31-2934 Ancient Cedars-31.jpg",
    "/photos/properties/Two Cedars New/32-2934 Ancient Cedars-32.jpg",
    "/photos/properties/Two Cedars New/33-2934 Ancient Cedars-33.jpg",
    "/photos/properties/Two Cedars New/34-2934 Ancient Cedars-34.jpg",
    "/photos/properties/Two Cedars New/35-2934 Ancient Cedars-35.jpg",
    "/photos/properties/Two Cedars New/36-2934 Ancient Cedars-36.jpg",
    "/photos/properties/Two Cedars New/37-2934 Ancient Cedars-37.jpg",
    "/photos/properties/Two Cedars New/38-2934 Ancient Cedars-38.jpg",
    "/photos/properties/Two Cedars New/39-2934 Ancient Cedars-39.jpg",
    "/photos/properties/Two Cedars New/41-2934 Ancient Cedars-41.jpg",
    "/photos/properties/Two Cedars New/42-2934 Ancient Cedars-42.jpg",
    "/photos/properties/Two Cedars New/43-2934 Ancient Cedars-43.jpg",
    "/photos/properties/Two Cedars New/46-2934 Ancient Cedars-46.jpg",
    "/photos/properties/Two Cedars New/48-2934 Ancient Cedars-48.jpg",
    "/photos/properties/Two Cedars New/49-2934 Ancient Cedars-49.jpg",
    "/photos/properties/Two Cedars New/51-2934 Ancient Cedars-51.jpg",
    "/photos/properties/Two Cedars New/52-2934 Ancient Cedars-52.jpg",
    "/photos/properties/Two Cedars New/OSA_AncientCW0864-.jpg",
    "/photos/properties/Two Cedars New/OSA_AncientCW1129.jpg",
    "/photos/properties/Two Cedars New/OSA_AncientCW1248.jpg",
    "/photos/properties/Two Cedars New/OSA_AncientCW1437-Panorama.jpg",
  ];

  const showPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const nextPhoto = () => {
    setSelectedPhotoIndex((prev) =>
      prev === null ? null : (prev + 1) % propertyImages.length
    );
  };

  const prevPhoto = () => {
    setSelectedPhotoIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + propertyImages.length) % propertyImages.length
    );
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Two Cedars Kadenwood | AceHost</title>
        <meta
          name="description"
          content="Luxurious 5-bedroom Chalet in Kadenwood, Whistler offering stunning views and ski-in/ski-out access."
        />
      </Head>
      <Navigation transparent={false} />

      <main className="flex-grow mt-16">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="relative h-[300px] md:h-[500px]">
              <Image
                src={propertyImages[0]}
                alt="Two Cedars Kadenwood - Primary"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: "cover" }}
                onClick={() => showPhoto(0)}
                className="cursor-pointer"
              />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-1">
              {propertyImages.slice(1, 5).map((image, index) => (
                <div key={index} className="relative h-[250px]">
                  <Image
                    src={image}
                    alt={`Two Cedars Kadenwood - Photo ${index + 2}`}
                    fill
                    sizes="25vw"
                    style={{ objectFit: "cover" }}
                    onClick={() => showPhoto(index + 1)}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowAllPhotos(true)}
            className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full font-medium shadow hover:bg-gray-100 transition"
          >
            Show all photos
          </button>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Two Cedars Kadenwood
              </h1>
              <p className="text-gray-600 mb-2">
                5 bedrooms · 5.5 bathrooms · 10 guests
              </p>
              <p className="text-gray-800 font-semibold">
                From $4,000 CAD per night
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
              <a
                href="https://www.airbnb.ca/rooms/658945646684454022"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF5A5F] text-white font-medium py-2 px-6 rounded-full text-center hover:bg-[#FF4348] transition"
              >
                Book on Airbnb
              </a>
            </div>
          </div>

          <div className="sticky top-16 z-30 bg-white border-b mb-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="bg-white text-black border border-gray-300 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition"
              >
                More photos
              </button>
              <a
                href="#details"
                className="bg-white text-black border border-gray-300 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Details
              </a>
              <a
                href="#contact"
                className="bg-white text-black border border-gray-300 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Contact us
              </a>
              <a
                href="https://www.airbnb.ca/rooms/658945646684454022"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black border border-gray-300 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Book on Airbnb
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="mb-4">
                Two Cedars is a luxurious 7-bedroom, 8.5-bathroom property
                located in the prestigious Kadenwood neighborhood,
                Whistler&apos;s most exclusive residential area. This stunning
                mountain retreat offers unparalleled luxury, privacy, and
                breathtaking views of the surrounding mountains and valleys.
                Included with this property is a private butler service to
                ensure your stay is both comfortable and memorable.
              </p>
              <p>
                With over 8,000 square feet of living space, this elegantly
                designed home features soaring ceilings, floor-to-ceiling
                windows, a gourmet kitchen, multiple fireplaces, a home theater,
                and a private outdoor hot tub. The property combines rustic
                mountain charm with modern luxury, creating an unforgettable
                Whistler experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#details">
                <button className="border border-black text-black hover:bg-gray-100 px-4 py-2 rounded">
                  Details
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-black text-black hover:bg-gray-100 px-4 py-2 rounded">
                  Contact
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {propertyImages.slice(0, 8).map((photo, index) => (
              <div
                key={index}
                className="aspect-[4/3] relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => showPhoto(index)}
              >
                <Image
                  src={photo}
                  alt={`Two Cedars Kadenwood - Photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
            {propertyImages.length > 8 && (
              <div className="col-span-full">
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="mt-4 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
                >
                  View All {propertyImages.length} Photos
                </button>
              </div>
            )}
          </div>

          {showAllPhotos && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto p-4 md:p-8">
              <div className="flex justify-end">
                <button
                  onClick={closeAllPhotos}
                  className="text-white mb-4 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {propertyImages.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] relative overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => showPhoto(index)}
                  >
                    <Image
                      src={photo}
                      alt={`Two Cedars Kadenwood - Photo ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedPhotoIndex !== null && (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
              <button
                onClick={closeFullScreenPhoto}
                className="absolute top-4 right-4 text-white p-2 z-[60]"
              >
                <X className="w-8 h-8" />
              </button>
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 z-[60]"
                aria-label="Previous photo"
              >
                <ArrowLeft className="w-8 h-8" />
              </button>
              <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center">
                <Image
                  src={propertyImages[selectedPhotoIndex]}
                  alt={`Two Cedars Kadenwood - Photo ${selectedPhotoIndex + 1}`}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 z-[60]"
                aria-label="Next photo"
              >
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>
          )}
        </div>

        <div id="details" className="space-y-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Property Layout</h2>
            <h3 className="text-xl font-semibold mb-2">Main Level</h3>
            <p className="mb-4">
              The main level features an open-concept living area with a grand
              stone fireplace, dining space for 14, and a gourmet kitchen with
              high-end appliances. Floor-to-ceiling windows showcase stunning
              mountain views. This level also includes a powder room and access
              to the expansive deck with outdoor seating and hot tub.
            </p>

            <h3 className="text-xl font-semibold mb-2">Upper Level</h3>
            <p className="mb-4">
              The upper level houses the primary suite with a king bed, gas
              fireplace, walk-in closet, and luxurious ensuite bathroom
              featuring a soaking tub and separate shower. Three additional
              bedrooms on this floor each have queen beds and ensuite bathrooms.
            </p>

            <h3 className="text-xl font-semibold mb-2">Lower Level</h3>
            <p className="mb-4">
              The lower level contains three more bedrooms: one with a king bed
              and ensuite bathroom, one with a queen bed and ensuite bathroom,
              and a bunk room with two sets of twin bunk beds and an adjacent
              full bathroom. This level also features a media room with a large
              screen TV, games area, and wet bar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <p className="mb-4">
              Situated in Whistler&apos;s most prestigious neighborhood,
              Kadenwood offers unparalleled privacy and exclusivity. Residents
              enjoy access to a private gondola connecting Kadenwood to
              Creekside Village and the Creekside Gondola, providing
              ski-in/ski-out access to Whistler Blackcomb.
            </p>
            <p>
              Creekside Village is just minutes away, offering restaurants,
              shops, and amenities. Whistler Village is a short 5-minute drive,
              where you&apos;ll find world-class dining, shopping, and
              entertainment options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Private outdoor hot tub</li>
              <li>Multiple fireplaces</li>
              <li>Home theater/media room</li>
              <li>Gourmet kitchen with high-end appliances</li>
              <li>Heated floors</li>
              <li>High-speed WiFi</li>
              <li>Smart home technology</li>
              <li>Private access to Kadenwood Gondola (winter operation)</li>
              <li>Ski room with boot warmers</li>
              <li>Laundry facilities</li>
              <li>Garage parking for 2 vehicles</li>
              <li>Additional driveway parking</li>
            </ul>
          </section>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Book This Property</h2>
          <p className="mb-4">
            Two Cedars is available for long-term rentals with a minimum 30-day
            stay requirement. Rates start at $45,000 per month, with prices
            varying by season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded">
                Contact Us
              </button>
            </Link>
            <Link href="/properties">
              <button className="border border-black text-black hover:bg-gray-100 px-4 py-2 rounded">
                View More Properties
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
