import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { XCircle, ChevronRight, ChevronLeft, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RavensNest = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const photosRef = useRef<HTMLDivElement>(null);

  // Define photos array for the property
  const photos = [
    "/photos/properties/ravens-nest/1.jpg",
    "/photos/properties/ravens-nest/2.jpg",
    "/photos/properties/ravens-nest/3.jpg",
    "/photos/properties/ravens-nest/4.jpg",
    "/photos/properties/ravens-nest/5.jpg",
    "/photos/properties/ravens-nest/6.jpg",
    "/photos/properties/ravens-nest/7.jpg",
    "/photos/properties/ravens-nest/8.jpg",
    "/photos/properties/ravens-nest/9.jpg",
  ];

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + photos.length) % photos.length
      );
    }
  };

  const handleCloseFullScreen = () => {
    setSelectedPhotoIndex(null);
  };

  const scrollToPhotos = () => {
    photosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Raven&apos;s Nest | Ski-in/Ski-out with Views | AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Raven's Nest in Whistler. Ski-in/ski-out convenience with stunning mountain views. Perfect for your Whistler getaway. Book now!"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Raven&apos;s Nest | Ski-in/Ski-out with Views
              </h1>
              <p className="text-gray-600 mb-6">
                Prime Whistler location with breathtaking mountain views
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="https://www.airbnb.com/luxury/listing/12345"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800"
                >
                  Book on Airbnb
                </Link>
                <button
                  onClick={scrollToPhotos}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                >
                  View Photos
                </button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={photos[0]}
                alt="Raven's Nest Main View"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About this property
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome to Raven&apos;s Nest, a luxurious ski-in/ski-out property
              offering breathtaking mountain views. This stunning home features
              spacious living areas, modern amenities, and direct access to
              Whistler&apos;s world-class ski slopes.
            </p>
            <p className="text-gray-600 mb-4">
              Perfect for families or groups, Raven&apos;s Nest provides the
              ideal setting for your Whistler getaway with its convenient
              location and comfortable accommodations.
            </p>
          </div>

          <div ref={photosRef} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="mb-6">
                  <div
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={photo}
                      alt={`Raven's Nest ${index + 1}`}
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

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              <li className="flex items-center py-2">
                <span className="text-gray-700">Ski-in/Ski-out Access</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Mountain Views</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Hot Tub</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Fully Equipped Kitchen</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Fireplace</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-gray-700">Free Wi-Fi</span>
              </li>
            </ul>
          </div>
        </main>

        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={handleCloseFullScreen}
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
              onClick={handlePrevPhoto}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`Raven's Nest ${selectedPhotoIndex + 1}`}
                fill
                className="object-contain"
                sizes="80vw"
              />
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
              onClick={handleNextPhoto}
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default RavensNest;
