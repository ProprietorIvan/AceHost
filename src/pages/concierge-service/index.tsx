import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaSkiing,
  FaSnowflake,
  FaMountain,
  FaCalendarCheck,
  FaSnowplow,
  FaHiking,
  FaShuttleVan,
  FaGlassCheers,
  FaConciergeBell,
  FaUtensils,
  FaWineGlassAlt,
  FaCar,
  FaPlane,
} from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiSpa, BiDrink, BiHomeAlt } from "react-icons/bi";
import {
  GiDogHouse,
  GiMountainCave,
  GiCookingPot,
  GiFoodTruck,
  GiHouseKeys,
} from "react-icons/gi";
import {
  MdCleaningServices,
  MdSpa,
  MdChildCare,
  MdAirportShuttle,
} from "react-icons/md";

const ConciergeService = () => {
  const mountainServicesRef = useRef<HTMLDivElement>(null);
  const diningServicesRef = useRef<HTMLDivElement>(null);
  const inhomeServicesRef = useRef<HTMLDivElement>(null);
  const transportServicesRef = useRef<HTMLDivElement>(null);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    // Add responsive classes to all carousel items
    const addResponsiveClasses = () => {
      // Add card-image class to all image containers
      document
        .querySelectorAll(".carousel-card .relative.h-56")
        .forEach((el) => {
          el.classList.add("card-image");
        });

      // Add card-title class to all titles
      document.querySelectorAll(".carousel-card h3").forEach((el) => {
        el.classList.add("card-title");
      });

      // Add card-description class to all descriptions
      document.querySelectorAll(".carousel-card p").forEach((el) => {
        el.classList.add("card-description");
      });
    };

    // Call the function after component mount
    addResponsiveClasses();
  }, []);

  const scrollServices = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (!ref.current) return;

    const scrollAmount = 320; // Width of a card plus margin
    const currentScroll = ref.current.scrollLeft;

    ref.current.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Whistler VIP Concierge Services | AceHost</title>
        <meta
          name="description"
          content="Personalized luxury concierge services for your Whistler vacation. From private chefs to heli-skiing, we take care of every detail."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pb-20">
          {/* Hero Section */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Whistler VIP Concierge Services
                  </h1>
                  <div className="space-y-6 text-gray-600 text-lg">
                    <p>
                      When booking Luxury Accommodations with AceHost, we
                      include VIP Concierge Services for your stay. Our
                      Concierge team designs an all-in-one personalized holiday
                      experience to ensure that every aspect of your vacation is
                      taken care of. We don&apos;t just book your trip and send
                      an itinerary - we go above and beyond to ensure your group
                      gets the best tables, service, and time slots. From
                      arrival to departure, we are at your service to plan and
                      execute your concierge itinerary to make sure that your
                      stay is memorable and seamless.
                    </p>
                    <p>
                      Our concierge team is comprised of experienced locals with
                      the best knowledge of Whistler and the surrounding areas.
                      With our connections in town, we are able to get priority
                      access to the best experiences that Whistler has to offer.
                      Whether you need professional last-minute staffing,
                      special requests or privileges at restaurants, insider
                      local knowledge or advice, local secrets for finding the
                      best powder, AceHost is committed to working around the
                      clock to deliver the best luxury concierge service in
                      Whistler. Although our concierge team can plan well ahead
                      with given notice, we can always arrange for last minute
                      requests or changes.
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 pt-4">
                    Explore the Different Services We Offer
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <a
                      href="#mountain"
                      className="block px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        On the Mountain
                      </span>
                    </a>
                    <a
                      href="#dining"
                      className="block px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        Dining and Hosting
                      </span>
                    </a>
                    <a
                      href="#inhome"
                      className="block px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        Additional In-home Services
                      </span>
                    </a>
                    <a
                      href="#transport"
                      className="block px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        VIP Transportation
                      </span>
                    </a>
                  </div>
                </div>

                {/* Instagram Embed */}
                <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b">
                      <h3 className="text-xl font-semibold">
                        The AceHost Experience in Whistler
                      </h3>
                    </div>

                    <div
                      className="aspect-w-9 aspect-h-16 relative"
                      style={{ minHeight: "500px" }}
                    >
                      <iframe
                        src="https://www.instagram.com/reel/DEp1OJ5uYZk/embed/?cr=1&amp;rd=https%3A%2F%2Facehost.ca&amp;v=14&autoplay=1&mute=0"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Instagram video player"
                        referrerPolicy="no-referrer"
                      ></iframe>
                    </div>

                    <div className="p-3 border-t">
                      <a
                        href="https://www.instagram.com/acehost_whistler/"
                        className="text-blue-500 text-sm font-medium block mb-3"
                      >
                        View more on Instagram
                      </a>
                      <div className="flex justify-between mb-2">
                        <div className="flex gap-4">
                          <FaRegHeart className="text-2xl" />
                          <FaRegComment className="text-2xl" />
                          <IoPaperPlaneOutline className="text-2xl" />
                        </div>
                        <FaRegBookmark className="text-2xl" />
                      </div>
                      <p className="font-medium mb-2">195 likes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mountain Activities */}
          <section id="mountain" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mountain Activities
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Experience the best of Whistler&apos;s mountain adventures with
                our curated selection of premium activities, all bookable
                through our concierge service.
              </p>

              <div className="relative">
                <div
                  className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar md:px-0 px-4"
                  ref={mountainServicesRef}
                  style={{
                    scrollSnapType: "x mandatory",
                    scrollPaddingLeft: "1.5rem",
                    scrollPaddingRight: "1.5rem",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {/* Private Ski Instructor */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/PrivateSkiInstructor.jpg"
                        alt="Private Ski Instructor"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSkiing className="text-lg" />
                        </span>
                        Private Ski Instructor
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Private ski lessons are an amazing way to receive
                        customized learning experiences and of course, skip the
                        lines! Arrange a private ski instructor for your group,
                        available for all ages and levels. Private ski lessons
                        can be booked for a half day (3 hours) or a full day (6
                        hours), and can accommodate up to 6 people.
                      </p>
                      <p className="text-gray-600 mb-4">
                        If time permits, our AceHost team would love to show you
                        around the slopes, ski in ski outs, etc... We can show
                        you our favourite runs to give you an authentic
                        Whistler-Blackcomb experience.
                      </p>
                    </div>
                  </div>

                  {/* Whistler Heli-Skiing */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/WhistlerHeli.jpg"
                        alt="Whistler Heli-Skiing"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSkiing className="text-lg" />
                        </span>
                        Whistler Heli-Skiing
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Take your skiing experience to the next level by booking
                        a heli-skiing trip through AceHost. We are partnered
                        with local heli-skiing companies that provide
                        first-class heli trips led by certified ski guides.
                        Contact us to book your heli-skiing experience today.
                      </p>
                    </div>
                  </div>

                  {/* Steak & Fondue Snowmobile Experience */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/SteakFondue.png"
                        alt="Steak & Fondue Snowmobile Experience"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSnowplow className="text-lg" />
                        </span>
                        Steak & Fondue Snowmobile Experience
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Book a snow mobile experience through AceHost and
                        explore the mountain in style. This luxury concierge
                        service offers a guided snowmobile tour through the
                        beautiful landscapes of Whistler-Blackcomb.
                      </p>
                    </div>
                  </div>

                  {/* Ski & Snowboard Rentals */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/SkiRentals.png"
                        alt="Ski & Snowboard Rentals"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSkiing className="text-lg" />
                        </span>
                        Ski & Snowboard Rentals | Black Tie
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Enjoy the convenience of ski/snowboard rentals and
                        fittings with Black Tie&apos;s award-winning delivery
                        service. AceHost arranges Black Tie rentals to come
                        directly to your home between 7:30am-10pm with a
                        selection boots, skis, snowboards, and poles. Black Tie
                        rentals can also bring a selection of socks, gloves and
                        ski goggles, available. The best part is the delivery
                        fee is included!
                      </p>
                    </div>
                  </div>

                  {/* Heli Glacier Meal */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/HeliGlacier Meal.jpg"
                        alt="Heli Glacier Meal"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <GiCookingPot className="text-lg" />
                        </span>
                        Heli Glacier Meal
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        The Heli Glacier Meal is one of AceHost&apos;s most
                        highly rated experiences. Enjoy a private chef prepared
                        meal while taking in the stunning views of the local
                        mountain ranges from a glacier. Our chefs and servers
                        join the heli trips to serve meals and provide a
                        first-rate dining experience. Contact us to get a quote
                        for this experience.
                      </p>
                    </div>
                  </div>

                  {/* Snowmobile Experience */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/Snowmobile Experience.png"
                        alt="Snowmobile Experience"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSnowplow className="text-lg" />
                        </span>
                        Snowmobile Experience
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        For a regular snowmobile experience, AceHost can arrange
                        a tour of the Blackcomb mountain for you and your group.
                        The snowmobile experience offers a variety of levels,
                        for beginners and adventurous riders, and anyone in
                        between. Personalize your trip and choose from a range
                        of scenic options.
                      </p>
                    </div>
                  </div>

                  {/* Ski, Snowboard & Mountain Bike Rentals */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/SkiRentals.png"
                        alt="Ski, Snowboard & Mountain Bike Rentals"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSkiing className="text-lg" />
                        </span>
                        Ski, Snowboard & Mountain Bike Rentals
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Visiting Whistler Village? Stop by Spicy Sports
                        Whistler&apos;s locations for ski & snowboard rentals in
                        the winter and mountain bike rentals in the summer. With
                        a location in both the main and upper village, Spicy
                        Sports&apos; expertise and professional staff will make
                        sure your experience on the mountain is comfortable and
                        safe.
                      </p>
                    </div>
                  </div>

                  {/* Heli Ice Cave Adventure */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/HeliSki.jpeg"
                        alt="Heli Ice Cave Adventure"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <GiMountainCave className="text-lg" />
                        </span>
                        Heli Ice Cave Adventure
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Take a journey through 12,000 - 20,000-year-old ice
                        caves via a scenic helicopter ride through the local
                        mountain range. Soaring over ancient glacier formations,
                        guests can experience a guide-led tour inside ice
                        tunnels and remote ice caves. Elevate your tour
                        experience by adding Bearfoot Bistro&apos;s charcuterie
                        and dessert platters. Contact us for ice cave adventure
                        tour quote.
                      </p>
                    </div>
                  </div>

                  {/* Dog Sledding */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/DogSled.jpg"
                        alt="Dog Sledding"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <GiDogHouse className="text-lg" />
                        </span>
                        Dog Sledding
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Experience an authentic winter activity by booking a dog
                        sled ride through the Callaghan Valley Old Growth
                        Forests. This tour offers a ride through open and
                        winding trails, suitable for families looking to get
                        outdoors and soak in the beauty of local forests.
                      </p>
                    </div>
                  </div>

                  {/* Zipline Tours */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/ZipLine.jpg"
                        alt="Zipline Tours"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaMountain className="text-lg" />
                        </span>
                        Zipline Tours
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Experience a bird&apos;s-eye view of Whistler Mountain
                        when you book a zip-line tour through AceHost. The
                        panoramic views of Whistler can be seen from treetop
                        suspension bridges and sky high viewing platforms. Enjoy
                        this experience year-round experience. Contact us to
                        book your zip-line tour today!
                      </p>
                    </div>
                  </div>

                  {/* Vallea Illumina */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/Valley.jpg"
                        alt="Vallea Illumina"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaHiking className="text-lg" />
                        </span>
                        Vallea Illumina
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        One of the most popular local activities, the Vallea
                        Ilumina night walk is a must do when visiting Whistler.
                        The 30-45 minute walk through an illuminated forest is a
                        sight for sore eyes and fun for the whole family. Join
                        an evening excursion and be enchanted by the stories
                        about the legends of Whistler.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 bg-white p-4 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none"
                  onClick={() => scrollServices(mountainServicesRef, "left")}
                  aria-label="Scroll left"
                >
                  <IoIosArrowBack className="text-2xl md:text-xl text-gray-800" />
                </button>
                <button
                  className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 bg-white p-4 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none"
                  onClick={() => scrollServices(mountainServicesRef, "right")}
                  aria-label="Scroll right"
                >
                  <IoIosArrowForward className="text-2xl md:text-xl text-gray-800" />
                </button>
              </div>
            </div>
          </section>

          {/* Dining Experiences */}
          <section id="dining" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Whistler Dining Experiences
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Indulge in the finest culinary experiences Whistler has to
                offer, from private chefs to exclusive restaurant reservations.
              </p>

              <div className="relative">
                <div
                  className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar md:px-0 px-4"
                  ref={diningServicesRef}
                  style={{
                    scrollSnapType: "x mandatory",
                    scrollPaddingLeft: "1.5rem",
                    scrollPaddingRight: "1.5rem",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {/* Private Chef Service */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/PrivateChef.jpeg"
                        alt="Private Chef Service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <GiCookingPot className="text-lg" />
                        </span>
                        Private Chef Service
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Experience fine dining in the comfort of your
                        accommodations when you book a personalized, private
                        chef service through AceHost. Our partner chefs will
                        prepare a custom menu to curate a dining experience that
                        suits your preferences and dietary needs. Let us suggest
                        a menu theme or simply let us know what you&apos;re
                        craving - our chefs will make it happen!
                      </p>
                    </div>
                  </div>

                  {/* In-Home Private Bartender Service */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/Bartender.jpg"
                        alt="In-Home Private Bartender Service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <BiDrink className="text-lg" />
                        </span>
                        In-Home Private Bartender Service
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Enjoy the luxury of having a private bartender create
                        custom cocktails for your special celebrations. Book a
                        mixologist who specializes in crafting unique drinks
                        suited to your preferences. Whether you&apos;re hosting
                        a family dinner, a cocktail reception, or anything in
                        between, our skilled bartenders add a touch of
                        sophistication to any gathering.
                      </p>
                    </div>
                  </div>

                  {/* Daily Butler & Host Service */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/Butler.jpg"
                        alt="Daily Butler & Host Service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaConciergeBell className="text-lg" />
                        </span>
                        Daily Butler & Host Service
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Breakfast service, meal preparation, and daily general
                        assistance is available to our clients. Book a
                        professional butler through AceHost and enjoy the
                        convenience and luxury that comes with having dedicated
                        staff to assist with your daily needs.
                      </p>
                    </div>
                  </div>

                  {/* Dining and Après-ski */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/Dinningand Apres Ski.jpeg"
                        alt="Dining and Après-ski"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaGlassCheers className="text-lg" />
                        </span>
                        Dining and Après-ski
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Explore the local après-ski and dining scene with
                        recommendations from AceHost. After all, we are the
                        experts! Our company partners with a variety of local
                        restaurants and bars and can help you secure
                        reservations at the best venues in town.
                      </p>
                    </div>
                  </div>

                  {/* VIP Restaurant Reservations */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/WhistlerRestarurants.png"
                        alt="VIP Restaurant Reservations"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaUtensils className="text-lg" />
                        </span>
                        VIP Restaurant Reservations
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Are you looking to dine at Whistler&apos;s most coveted
                        restaurants? AceHost has established relationships with
                        many of the most exclusive restaurants in the area. We
                        can help you secure reservations at sought-after
                        establishments that might otherwise be fully booked. If
                        you have a clear list of restaurants you&apos;d like to
                        visit during your stay, simply send us the list and
                        we&apos;ll do our best to secure your reservations.
                      </p>
                    </div>
                  </div>

                  {/* AceHost TableScaping */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/Tabslescaping.jpeg"
                        alt="AceHost TableScaping"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaUtensils className="text-lg" />
                        </span>
                        AceHost TableScaping
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Elevate your private dinner experience with
                        AceHost&apos;s TableScaping services. Our dedicated team
                        can design and set up a beautiful tablescape for special
                        occasions. From elegant place settings to floral
                        arrangements, our table decorations add a touch of
                        luxury to any private dining experience. This service is
                        highly recommended in combination with our private chef
                        service.
                      </p>
                    </div>
                  </div>

                  {/* Grocery Delivery */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/GroceryDelivery.webp"
                        alt="Grocery Delivery"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <GiFoodTruck className="text-lg" />
                        </span>
                        Grocery Delivery
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        AceHost offers pre-arrival grocery shopping services.
                        Simply provide us with your grocery list, and we&apos;ll
                        ensure that your kitchen is fully stocked upon your
                        arrival. From fresh produce to your favorite snacks and
                        beverages, we take care of the shopping so you can focus
                        on enjoying your vacation.
                      </p>
                    </div>
                  </div>

                  {/* Omakasi & Chef&apos;s Table Experience */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/OmakasiSushi.jpeg"
                        alt="Omakasi & Chef's Table Experience"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <GiCookingPot className="text-lg" />
                        </span>
                        Omakasi & Chef&apos;s Table Experience
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Book through AceHost to arrange a custom meal service
                        that features a chef&apos;s selected set of dishes. This
                        is the ultimate way to elevate your dining experience.
                        Our chef&apos;s table experience offers a multi-course
                        meal tailored to your preferences, with each dish
                        presented and explained by the chef.
                      </p>
                    </div>
                  </div>

                  {/* Sommelier & Wine Pairing Service */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/SommelierWinePairings.webp"
                        alt="Sommelier & Wine Pairing Service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaWineGlassAlt className="text-lg" />
                        </span>
                        Sommelier & Wine Pairing Service
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Enhance your dining experience with a personalized wine
                        pairing service. Our sommeliers can recommend the
                        perfect wines to complement your meals, whether
                        you&apos;re dining in or enjoying a meal prepared by our
                        private chef. This service can also include wine
                        tastings and educational sessions for those interested
                        in learning more about fine wines.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 bg-white p-4 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none"
                  onClick={() => scrollServices(diningServicesRef, "left")}
                  aria-label="Scroll left"
                >
                  <IoIosArrowBack className="text-2xl md:text-xl text-gray-800" />
                </button>
                <button
                  className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 bg-white p-4 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none"
                  onClick={() => scrollServices(diningServicesRef, "right")}
                  aria-label="Scroll right"
                >
                  <IoIosArrowForward className="text-2xl md:text-xl text-gray-800" />
                </button>
              </div>
            </div>
          </section>

          {/* Additional In-Home Services Section */}
          <section id="inhome" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Additional In-Home Services
              </h2>

              <div className="relative">
                <div
                  className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar md:px-0 px-4"
                  ref={inhomeServicesRef}
                  style={{
                    scrollSnapType: "x mandatory",
                    scrollPaddingLeft: "1.5rem",
                    scrollPaddingRight: "1.5rem",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {/* In-House Massages */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/In-House Messages.jpg"
                        alt="In-House Massages"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSkiing className="mr-2" />
                        </span>
                        In-House Massages
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        <span className="service-icon">
                          <FaSnowflake className="mr-2 text-blue-500" />
                        </span>
                        Enjoy the comfort and convenience of a highly skilled
                        masseuse from your luxury chalet. We are happy to
                        arrange an in-home massage for guests staying with
                        AceHost. Choose from a wide selection of relaxing, deep
                        tissue or hot stone massages, with wonderful add-ons
                        such as foot & hair treatments or exfoliating scrubs.
                      </p>
                    </div>
                  </div>

                  {/* In-House Beauty & Wellness */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/In House Beauty and Wellness.jpg"
                        alt="In-House Beauty & Wellness"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSkiing className="mr-2" />
                        </span>
                        In-House Beauty & Wellness
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        <span className="service-icon">
                          <FaSnowflake className="mr-2 text-blue-500" />
                        </span>
                        At AceHost, we are committed to making your stay
                        seamless, right from the comfort of your home. Our VIP
                        concierge team can arrange a variety of beauty &
                        wellness services including in-home acupuncture, yoga
                        instructors, and hairdressers. Contact us to arrange
                        your beauty & wellness services today.
                      </p>
                    </div>
                  </div>

                  {/* Babysitting */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/BabySitting.jpg"
                        alt="Babysitting"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSkiing className="mr-2" />
                        </span>
                        Babysitting
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        <span className="service-icon">
                          <FaSnowflake className="mr-2 text-blue-500" />
                        </span>
                        The AceHost luxury concierge team is happy to arrange
                        babysitting services during your stay our luxury
                        properties. Upon request, we can coordinate a nanny
                        based on guest preference. Our nannies have an active
                        first aid certificate, CPR training and a criminal
                        record check.
                      </p>
                    </div>
                  </div>

                  {/* Daily Housekeeping */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/HouseKeeping.jpg"
                        alt="Daily Housekeeping"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSkiing className="mr-2" />
                        </span>
                        Daily Housekeeping
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        <span className="service-icon">
                          <FaSnowflake className="mr-2 text-blue-500" />
                        </span>
                        AceHost can arrange daily housekeeping at your luxury
                        home upon request. Housekeeping services include the
                        cleaning of common areas, bed-making, bathroom and
                        kitchen cleaning, fresh towels, and garbage removal.
                        Linen change is an additional charge.
                      </p>
                    </div>
                  </div>

                  {/* Private Spa Services */}
                  <div
                    className="min-w-[calc(33.333%-16px)] w-1/3 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/PrivateChef.jpeg"
                        alt="Private Spa Services"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaSkiing className="mr-2" />
                        </span>
                        Private Spa Services
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        <span className="service-icon">
                          <FaSnowflake className="mr-2 text-blue-500" />
                        </span>
                        Transform your luxury accommodation into a private spa
                        with our specialized wellness treatments. We can arrange
                        for skilled professionals to provide a range of spa
                        services including hot stone treatments, facials,
                        aromatherapy sessions, and specialized massage therapy
                        directly in your chalet.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 bg-white p-4 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none"
                  onClick={() => scrollServices(inhomeServicesRef, "left")}
                  aria-label="Scroll left"
                >
                  <IoIosArrowBack className="text-2xl md:text-xl text-gray-800" />
                </button>
                <button
                  className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 bg-white p-4 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none"
                  onClick={() => scrollServices(inhomeServicesRef, "right")}
                  aria-label="Scroll right"
                >
                  <IoIosArrowForward className="text-2xl md:text-xl text-gray-800" />
                </button>
              </div>
            </div>
          </section>

          {/* VIP Transportation Section */}
          <section id="transport" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                VIP Transportation
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Travel in style and comfort with our premium transportation
                services, from airport transfers to private chauffeurs.
              </p>

              <div className="relative">
                <div
                  className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar md:px-0 px-4"
                  ref={transportServicesRef}
                  style={{
                    scrollSnapType: "x mandatory",
                    scrollPaddingLeft: "1.5rem",
                    scrollPaddingRight: "1.5rem",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {/* Airport Transfers */}
                  <div
                    className="min-w-[calc(50%-12px)] w-1/2 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/AirportTransfers.jpg"
                        alt="Airport Transfers"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <MdAirportShuttle className="text-lg" />
                        </span>
                        Airport Transfers
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        We offer a hands-on experience from the moment you
                        arrive at Vancouver International Airport. AceHost
                        offers easy airport transfers with pre-booked Sprinter
                        vans or limousines, depending on the needs of your
                        group.
                      </p>
                      <p className="text-gray-600 mb-4">
                        We have vehicle options for all group sizes including
                        luggage. Contact us to get a quote for transfers to and
                        from your luxury home in Whistler.
                      </p>
                    </div>
                  </div>

                  {/* Private Drivers & Vehicle Rentals */}
                  <div
                    className="min-w-[calc(50%-12px)] w-1/2 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 carousel-card"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="relative h-56 card-image">
                      <Image
                        src="/photos/homepage/concierge-service/PrivateDrivers.jpeg"
                        alt="Private Drivers & Vehicle Rentals"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 card-content">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 card-title">
                        <span className="service-icon">
                          <FaCar className="text-lg" />
                        </span>
                        Private Drivers & Vehicle Rentals
                      </h3>
                      <p className="text-gray-600 mb-4 card-description">
                        Our concierge service offers private drivers for your
                        stay. Be chauffeured around Whistler in the comfort of a
                        GMC Yukon, Escalade, or any vehicle for your group size
                        and budget. We can arrange this for your arrival.
                        Drivers can be arranged daily or for the full duration
                        of your stay.
                      </p>
                      <p className="text-gray-600 mb-4">
                        For the ultimate AceHost experience, reserve a private
                        driver with our new 2024 Land Rover Defender 130. This
                        luxury SUV can be pre-booked with a driver and can sit
                        up to 7+1 driver.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 bg-white p-4 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none"
                  onClick={() => scrollServices(transportServicesRef, "left")}
                  aria-label="Scroll left"
                >
                  <IoIosArrowBack className="text-2xl md:text-xl text-gray-800" />
                </button>
                <button
                  className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 bg-white p-4 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 focus:outline-none"
                  onClick={() => scrollServices(transportServicesRef, "right")}
                  aria-label="Scroll right"
                >
                  <IoIosArrowForward className="text-2xl md:text-xl text-gray-800" />
                </button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Everything you need to know about our concierge services in
                Whistler.
              </p>

              <div className="space-y-4">
                {/* FAQ 1 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 0 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(0)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      What are the advantages of using AceHost concierge
                      service?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 0 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 0
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        AceHost offers personalized, all-in-one concierge
                        services that take care of every aspect of your
                        vacation. With our local connections and expertise, we
                        can secure priority access to the best experiences in
                        Whistler. Our team goes above and beyond to ensure you
                        get the best tables, service, and time slots, making
                        your stay memorable and seamless.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 1 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      What activities are there to do in the Summer in Whistler?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 1 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 1
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        Whistler offers a wide range of summer activities
                        including mountain biking, hiking, zip-lining, golf,
                        fishing, and water sports on the beautiful lakes. Our
                        concierge team can arrange guided tours, equipment
                        rentals, and exclusive experiences to make your summer
                        visit memorable.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 2 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      Which activity tends to be the most frequently booked by
                      our guests?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 2 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 2
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        The Heli Glacier Meal experience is one of our most
                        requested activities, offering an unforgettable private
                        chef prepared meal with stunning mountain views. In
                        winter, our private ski instructor service is extremely
                        popular, providing personalized instruction while
                        avoiding lift lines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 3 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      What does the host/butler service include?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 3 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 3
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        Our host/butler service enhances your luxury stay by
                        serving specialty coffees in the morning and cocktails
                        at night. They manage fireplaces, house cleanliness, and
                        setup of lighting, temperature, and music to your
                        preferences. When paired with our private chef service,
                        they&apos;ll also set, serve, and clean meals, creating
                        a complete 5-star dining experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 4 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      What VIP concierge services does AceHost offer?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 4 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 4
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        AceHost offers a comprehensive range of VIP services
                        including private chefs, in-home bartending, restaurant
                        reservations, ski/snowboard lessons, heli-skiing,
                        snowmobile tours, airport transfers, private drivers,
                        in-home massages and wellness services, babysitting,
                        daily housekeeping, and exclusive mountain experiences
                        designed for luxury travelers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Interested in Concierge Services?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let us enhance your Whistler experience with our premium
                concierge services.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition duration-200 text-lg tracking-tight"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }

        @media (min-width: 768px) {
          .carousel-card {
            width: calc(33.33% - 16px) !important;
            flex: 0 0 calc(33.33% - 16px) !important;
            display: flex !important;
            flex-direction: column !important;
            border-radius: 16px !important;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
          }

          .carousel-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08) !important;
          }
        }

        @media (max-width: 767px) {
          .carousel-card {
            width: calc(100% - 32px) !important;
            flex: 0 0 calc(100% - 32px) !important;
            margin: 0 auto;
            display: flex !important;
            flex-direction: column !important;
            border-radius: 16px !important;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;
          }

          .card-image {
            height: 280px !important;
          }

          .card-title {
            font-size: 1.5rem !important;
            letter-spacing: -0.02em !important;
            font-weight: 600 !important;
          }

          .card-description {
            font-size: 1rem !important;
            line-height: 1.5 !important;
            letter-spacing: -0.01em !important;
            color: rgba(60, 60, 67, 0.85) !important;
          }
        }

        .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 1.5rem !important;
          position: relative;
        }

        .book-now-button {
          background-color: #06c;
          color: white;
          font-weight: 500;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          position: relative;
          bottom: 0;
          letter-spacing: -0.01em;
          font-size: 1rem;
          font-weight: 600;
        }

        .book-now-button:hover {
          background-color: #0055b3;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
        }

        .service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #f2f2f7;
          color: #06c;
          margin-right: 0.5rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        p {
          letter-spacing: -0.01em;
          color: rgba(60, 60, 67, 0.85);
          line-height: 1.6;
        }
      `}</style>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default ConciergeService;
