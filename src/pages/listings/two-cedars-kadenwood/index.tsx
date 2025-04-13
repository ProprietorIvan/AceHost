import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";
import { ArrowLeft, ArrowRight, XCircle } from "lucide-react";

export default function TwoCedarsKadenwood() {
  const { t } = useTranslation("common");
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showFullScreenPhoto, setShowFullScreenPhoto] = useState(false);
  const [fullScreenPhotoIndex, setFullScreenPhotoIndex] = useState(0);

  const propertyImages = Array.from(
    { length: 43 },
    (_, i) =>
      `/photos/properties/Two Cedars New/${String(i + 1).padStart(
        2,
        "0"
      )}-2934 Ancient Cedars-${String(i + 1).padStart(2, "0")}.jpg`
  );

  const showPhoto = (index: number) => {
    setFullScreenPhotoIndex(index);
    setShowFullScreenPhoto(true);
  };

  const nextPhoto = () => {
    setFullScreenPhotoIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevPhoto = () => {
    setFullScreenPhotoIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length
    );
  };

  const closeFullScreenPhoto = () => {
    setShowFullScreenPhoto(false);
  };

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
  };

  return (
    <>
      <Head>
        <title>Two Cedars Kadenwood | 6 Bedroom | 6.5 Bath | AceHost</title>
        <meta
          name="description"
          content="Two Cedars in Kadenwood - Luxury 6 bedroom, 6.5 bathroom property in Whistler's most prestigious neighborhood."
        />
      </Head>

      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Two Cedars Kadenwood
            </h1>
            <p className="text-xl mb-4">6 Bedroom | 6.5 Bath | Kadenwood</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Guests:</span> 12
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Bedrooms:</span> 6
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Bathrooms:</span> 6.5
              </div>
            </div>
            <p className="text-lg font-semibold">Starting at $45,000/month</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowAllPhotos(true)}
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
            >
              View All Photos
            </button>
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
              <button onClick={closeAllPhotos} className="text-white mb-4 p-2">
                <XCircle className="w-6 h-6" />
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

        {showFullScreenPhoto && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <button
              onClick={closeFullScreenPhoto}
              className="absolute top-4 right-4 text-white p-2"
            >
              <XCircle className="w-8 h-8" />
            </button>
            <button
              onClick={prevPhoto}
              className="absolute left-4 text-white p-2"
            >
              <ArrowLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 text-white p-2"
            >
              <ArrowRight className="w-8 h-8" />
            </button>
            <div className="relative w-full h-full max-w-7xl max-h-screen p-4 flex items-center justify-center">
              <Image
                src={propertyImages[fullScreenPhotoIndex]}
                alt={`Two Cedars Kadenwood - Photo ${fullScreenPhotoIndex + 1}`}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                {fullScreenPhotoIndex + 1} / {propertyImages.length}
              </p>
            </div>
          </div>
        )}

        <div id="details" className="space-y-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="mb-4">
              Two Cedars is a luxurious 6-bedroom, 6.5-bathroom property located
              in the prestigious Kadenwood neighborhood, Whistler&apos;s most
              exclusive residential area. This stunning mountain retreat offers
              unparalleled luxury, privacy, and breathtaking views of the
              surrounding mountains and valleys.
            </p>
            <p>
              With over 6,500 square feet of living space, this elegantly
              designed home features soaring ceilings, floor-to-ceiling windows,
              a gourmet kitchen, multiple fireplaces, a home theater, and a
              private outdoor hot tub. The property combines rustic mountain
              charm with modern luxury, creating an unforgettable Whistler
              experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Property Layout</h2>
            <h3 className="text-xl font-semibold mb-2">Main Level</h3>
            <p className="mb-4">
              The main level features an open-concept living area with a grand
              stone fireplace, dining space for 12, and a gourmet kitchen with
              high-end appliances. Floor-to-ceiling windows showcase stunning
              mountain views. This level also includes a powder room and access
              to the expansive deck with outdoor seating and hot tub.
            </p>

            <h3 className="text-xl font-semibold mb-2">Upper Level</h3>
            <p className="mb-4">
              The upper level houses the primary suite with a king bed, gas
              fireplace, walk-in closet, and luxurious ensuite bathroom
              featuring a soaking tub and separate shower. Two additional
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
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
