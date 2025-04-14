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
      bio: "Hello There, I'm Ben, a Whistler local who has spent almost my whole life between Whistler and Vancouver. Having lived here since I was born, I have witnessed the changes and rapid growth the area has seen in recent years. I enjoy sharing my insider knowledge and contacts with guests so they can truly maximize their experiences here in Whistler. I enjoy connecting in English, Spanish, or French. Like most Whistler locals, I love the outdoors and the beautiful scenery our town offers.\n\nPrior to playing semi-professional tennis, competing at the NCAA collegiate level and achieving All-American status, I was a member of the Whistler Ski Racing team, where I had the opportunity to participate in the famed Whistler Cup events. I enjoy going on road trips, exploring new lakes/mountains all around beautiful BC. Above all, I enjoy my food, so please ask me for recommendations.\n\nMy goal for AceHost is to provide homeowners with a seamless and profitable venture while providing guests with an unforgettable vacation. I am always around to answer any questions, and if time permits, to hit the slopes with guests.",
      image: "/photos/homepage/about/Ben.jpg",
    },
    {
      name: "Max Korkh",
      role: "Director of Operations & Concierge Team",
      bio: "Hi there! My name is Max and I'm a North Shore local. Born in Vancouver, I've spent most of my life living between Vancouver and Moscow, where my family is originally from. AceHost brought me to Whistler in 2023, although I've enjoyed many skiing holidays here in the past. I'm looking forward to making the most of ample outdoor activities that Whistler has to offer all year round.\n\nSimilar to Ben, I grew up playing tennis from the age of 5. After playing pro events and NCAA division 1 at the University of Montana, I stayed active in the tennis community, working as a club professional and the Director of Events at Tennis BC. I still love to smack that fuzzy yellow ball from time to time. When I'm not on court, I love to travel, ski, road bike and eat out.\n\nMy goal at AceHost is to deliver a first-rate experiences for both guests and homeowners. As our business ventures to new heights, it's important that we focus on small details in customer service, communication and administration to ensure healthy, sustainable growth.",
      image: "/photos/homepage/about/Max.jpg",
    },
    {
      name: "Sally Fewson",
      role: "Executive Assistant / Lead Property Manager",
      bio: "I'm Sally, I was born and grew up in Surrey in the UK. The mountains and skiing brought me to Whistler in 2019 and I haven't looked back since! I have spent the past several years working for UHNW individuals in service, housekeeping, kitchens, and personal assistant roles on super yachts and private residences. As a result, I am incredibly detail-orientated with high standards and always strive to provide the best guest experience possible that will exceed 5 star hotels.\n\nWhistler has sucked me in and has since been unable to spit me out. I spend my time enjoying everything this town has to offer. Mountain biking, skiing, hiking, running, and like Ben, I love road tripping and exploring what else BC has to offer. I aim to ensure that your property is kept to the highest standard possible, attend to all guest needs, and make sure they have an incredible stay that will leave them wanting more. No ask is too big or small!",
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
            src="/photos/homepage/WhistlerVacationRental.jpg"
            alt="Whistler Mountain View"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shaping Your Experience
            </h1>
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
                Ben Kirsh founded AceHost in 2021 with the goal of breathing
                life into his vision of combining excellent service and rental
                management. AceHost is known for working around the clock to
                problem solve and ensure that both guests and homeowners have a
                great experience in their dealings with the company. This
                mindset helps AceHost build long lasting relationships with
                homeowners and repeated guest bookings.
              </p>
              <p className="mt-4">
                We are committed to exceeding the expectations of its clients by
                providing unparalleled quality of care. With the mission of
                creating life-long customer relationships, we focus on offering
                a luxurious accommodation experience for guests and a hands-off
                property management service for homeowners.
              </p>
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
            <div className="flex flex-col space-y-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                      <div className="relative h-80 w-full rounded-lg overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-gray-600 font-medium mb-4">
                        {member.role}
                      </p>
                      <div className="prose prose-lg">
                        {member.bio.split("\n\n").map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
