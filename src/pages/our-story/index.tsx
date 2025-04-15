import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

// Interface for team members
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imagePath: string;
}

// Define team members
const teamMembers: TeamMember[] = [
  {
    name: "Ben Kirsh",
    role: "Founder & CEO",
    bio: "Ben founded AceHost with a vision to transform the vacation rental experience in Whistler. With over a decade of experience in luxury hospitality, he personally oversees each property to ensure it meets our premium standards.",
    imagePath: "/photos/homepage/about/Ben.jpg",
  },
  {
    name: "Max Korkh",
    role: "Co-Founder & Head of Operations",
    bio: "Max brings extensive operational expertise to AceHost, managing our day-to-day operations and ensuring each guest receives exceptional service. His attention to detail is unmatched in the industry.",
    imagePath: "/photos/homepage/about/Max.jpg",
  },
  {
    name: "Sally Fewson",
    role: "Director of Guest Experience",
    bio: "Sally's passion for creating unforgettable experiences drives our concierge services. She works closely with each guest to curate personalized itineraries that showcase the best of Whistler.",
    imagePath: "/photos/homepage/about/Sally.jpeg",
  },
];

// Company values
const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, from property selection to guest experience.",
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency are fundamental to our relationships with both property owners and guests.",
  },
  {
    title: "Innovation",
    description:
      "We continuously seek innovative ways to enhance the vacation rental experience in Whistler.",
  },
  {
    title: "Personal Touch",
    description:
      "We believe that personalized service is what sets us apart in the luxury vacation rental market.",
  },
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Story | AceHost Whistler Luxury Vacation Rentals</title>
        <meta
          name="description"
          content="Learn about the AceHost team and our mission to provide exceptional luxury vacation rental experiences in Whistler."
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Dedicated to providing exceptional luxury vacation rental
              experiences in Whistler since 2018.
            </p>
          </div>
        </div>
      </div>

      {/* About AceHost Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About AceHost</h2>
              <p className="text-gray-700 mb-6">
                AceHost was founded on a simple principle: to provide a luxury
                vacation rental experience that exceeds expectations. We started
                with a small portfolio of premium properties in Whistler and
                have grown to become a trusted name in luxury accommodations.
              </p>
              <p className="text-gray-700 mb-6">
                Our team&apos;s deep knowledge of Whistler and passion for
                hospitality allows us to offer a personalized service that large
                rental companies simply cannot match. We carefully select each
                property in our collection, ensuring it meets our high standards
                for quality, comfort, and location.
              </p>
              <p className="text-gray-700 mb-8">
                Beyond just providing beautiful properties, we offer
                comprehensive concierge services to create truly memorable
                vacations for our guests. From arranging private chefs to
                organizing exclusive experiences, we&apos;re committed to making
                every stay special.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors group"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/photos/homepage/WhistlerVacationRental.jpg"
                alt="AceHost Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of hospitality experts is dedicated to
              creating exceptional experiences for our guests and property
              owners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-500 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core principles that guide everything we do at AceHost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Journey Section */}
      <div className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re looking for a luxury vacation rental, want to
            list your property with us, or are interested in our concierge
            services, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/properties"
              className="bg-white text-black px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
