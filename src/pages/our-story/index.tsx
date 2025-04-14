import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";

const OurStory = () => {
  const teamMembers = [
    {
      name: "Ben Kirsh",
      role: "Founder & CEO",
      bio: "Ben Kirsh has been in the Whistler real estate scene for over a decade, managing high-end properties and developing a deep understanding of the local market. His vision for AceHost stems from recognizing the need for a truly premium property management service in Whistler – one that combines exceptional attention to detail with personalized service for both property owners and guests.",
      image: "/photos/homepage/about/Ben.jpg",
    },
    {
      name: "Max Korkh",
      role: "Director of Operations",
      bio: "Max brings extensive experience in luxury hospitality from his previous roles at five-star hotels across Europe. His meticulous approach to operations ensures that every AceHost property maintains the highest standards of quality and service. Max oversees all operational aspects, from property maintenance to guest relations, ensuring seamless experiences for owners and visitors alike.",
      image: "/photos/homepage/about/Max.jpg",
    },
    {
      name: "Sally Fewson",
      role: "Executive Assistant",
      bio: "With a background in both hospitality and administration, Sally expertly manages the day-to-day operations at AceHost. Her organizational skills and attention to detail are invaluable in coordinating property viewings, managing bookings, and ensuring smooth communication between owners, guests, and the AceHost team. Sally's warm personality makes her the perfect first point of contact for all AceHost inquiries.",
      image: "/photos/homepage/about/Sally.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Story | AceHost Whistler</title>
        <meta
          name="description"
          content="Learn about AceHost Whistler's story, our team, and our commitment to providing exceptional property management and concierge services in Whistler."
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/photos/homepage/1.jpg"
            alt="Whistler Mountain View"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-amber-500">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Redefining luxury property management in Whistler
            </p>
          </div>
        </div>
      </div>

      {/* About AceHost Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8">About AceHost</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Founded in 2020, AceHost was born from a vision to elevate the
                standard of property management in Whistler. We recognized a gap
                in the market for truly personalized, high-end property
                management services that cater to the unique needs of luxury
                property owners and their guests.
              </p>
              <p className="mt-4">
                Our approach combines local expertise with exceptional attention
                to detail. We understand that your Whistler property is not just
                an investment – it&apos;s a cherished retreat that deserves the
                highest level of care and management. Whether you&apos;re an
                owner seeking hassle-free property management or a guest looking
                for an extraordinary Whistler experience, AceHost delivers a
                level of service that exceeds expectations.
              </p>
              <p className="mt-4">
                What sets us apart is our commitment to personalization. Unlike
                larger property management companies, we deliberately maintain a
                select portfolio of premium properties, allowing us to provide
                each owner and guest with dedicated, attentive service. We
                don&apos;t just manage properties – we build lasting
                relationships based on trust, transparency, and shared
                appreciation for excellence.
              </p>
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-amber-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We are committed to excellence in every aspect of our service,
                  from property maintenance to guest experiences. We
                  continuously strive to exceed expectations and set new
                  standards in Whistler&apos;s luxury property management
                  sector.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Personalization</h3>
                <p className="text-gray-700">
                  We recognize that each property and owner has unique needs.
                  Our tailored approach ensures that we provide customized
                  solutions rather than one-size-fits-all services.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-700">
                  We operate with complete transparency and honesty. Our clients
                  can trust us to act in their best interests and to maintain
                  the highest ethical standards in all our dealings.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Local Expertise</h3>
                <p className="text-gray-700">
                  Our deep knowledge of Whistler&apos;s market, regulations, and
                  attractions allows us to provide informed advice and services
                  that maximize your property&apos;s potential and enhance guest
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
