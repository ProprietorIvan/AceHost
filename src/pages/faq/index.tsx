import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Plus, Minus } from "lucide-react";

const FAQPage = () => {
  const { t } = useTranslation("common");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqGroups = [
    {
      questions: [
        {
          question:
            "What is AceHost and how does it specialize in luxury vacation rentals in Whistler?",
          answer:
            "AceHost is a leading Whistler luxury property management company. We proudly offer an array of magnificent vacation rental homes in Whistler, British Columbia. We specialize in providing high-end, tailored experiences with VIP Concierge Services, premium amenities, and properties in prime locations, often ski-in/ski-out or near the slopes.",
        },
        {
          question:
            "I am a guest traveling to Whistler for vacation, how do I book with AceHost?",
          answer:
            "Step 1: Please reach out with as many details about your group as possible such as: ages, number of adults, kids under 12, desired dates, number of bedrooms required, if any properties on our website stand out to you (in your range of budget).\n\nStep 2: A member of the AceHost team will then shortly reach out and provide you with as many possible options that best suit your group requirements.\n\nStep 3 (Optional but recommended): Schedule a phone call and discuss any questions you may have on the homes we suggest. Location, amenities, parking, distance from the village, ski in/ski out route, bedroom layout etc..\n\nStep 4: Sign our contract and discuss payment options. A 50% deposit is required to block your desired dates and confirm your reservation. We take Credit Card, Wire payments, PayPal, etc..\n\nStep 5: Our concierge team will get in touch and start recommending and helping you plan your unforgettable Whistler vacation!",
        },
        {
          question: "What is the location of Whistler BC and what is nearby?",
          answer:
            "Whistler is located in British Columbia, Canada, approximately 120 kilometers (75 miles) north of Vancouver. It's nestled in the Coast Mountains and is renowned for its stunning natural beauty. Nearby, you'll find Vancouver, offering urban experiences, as well as other attractions like Squamish (45 minutes south) with rock climbing and outdoor activities, and Pemberton (30 minutes north) known for its farming valleys and outdoor adventures.",
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Are the AceHost luxury vacation rental homes in Whistler professionally cleaned and maintained?",
          answer:
            "AceHost is committed to ensuring the utmost cleanliness and maintenance of all our luxury vacation rental homes in Whistler. Each property is professionally cleaned and carefully inspected by our well-trained team before every guest's arrival to guarantee it meets our strict standards. In addition, we can arrange housekeeping during your stay if not included with the property. Please reach out for a quote and we'd be happy to arrange this for you.",
        },
        {
          question: "What VIP concierge services does AceHost offer?",
          answer:
            "At AceHost, we understand the value of exceptional experiences and strive to create adventures that go above and beyond expectations. Whether you are looking for a unique and extravagant experience, or if you are simply looking for the basics, we will help you with every step of the way.\n\nOur favorite experience below include, but are not limited to:\n\nCustom Heli-tours with a private chef lunch on a glacier \nHeli-tour ice cave adventure\nHeli-drop backcountry skiing\nPrivate chefs including renowned sushi master chef \nPrivate chef experience: oyster shucking & champagne \nDelivery catered meal service\nPrivate butler/host \nPrivate in-home Bartenders \nIn-house massages\nIn-house acupuncture\nIn-house yoga classes\nPrivate in-house hairdresser/stylist\nSki & snowboard rentals in-house fitting and delivery\nDaily housekeeping  \nGrocery delivery \nBaby rental equipment hire\nPrivate drivers\nPrivate luxury vehicle hire\nPrivate luxury airport transfers\nPrivate nannies\nVIP nightlife bottle service and reservations\nDinner reservations\nZiplining\nSnowmobiling \nMountain top chalet fondue dinner by snowmobile \nGourmet steak night at a charming backcountry cabin on Sproatt Mountain\nDog sledding \nVallea Lumina- enchanted forest light installation evening tour\nSpa and wellness reservations \nYukon Breakfast followed by a morning snowmobile tour on Sproatt Mountain\nBearfoot Bistro Vodka Ice Room \nLift pass pick up and delivery\nPrivate ski instructor\nWhite water rafting \nHeli sightseeing \nATVing",
        },
        {
          question: "What does the host/butler service include?",
          answer:
            "In addition to setting up and serving breakfast, lunch, and dinner, the butler is responsible for all food and drink service throughout the day, as well as assisting the chef where needed in providing you a 5-star dining experience. Have someone else empty the dishwasher as you sit back and relax with a drink in hand. To create the perfect ambiance, they will set up the hot tub, light the fire, and adjust the music and household functions. Get your daily dose of caffeine from your own personal barista. Overall, the butler is there to make your stay as smooth and comfortable as possible.",
        },
      ],
    },
    {
      questions: [
        {
          question:
            "What is the cancellation policy for booking a luxury vacation rental home in Whistler with AceHost.ca?",
          answer:
            "Our cancellation policy can vary depending on the property and specific terms set out by the owner. Please carefully read the contract before making a booking.\n\n1. Deposit Requirement: Typically, a 50% deposit is required to reserve the dates for your luxury vacation rental home. An additional 50% may be required 60 days prior to your arrival.\n\n2. Cancellation Period: No cancellations are allowed within 60 days of your scheduled arrival. However, in some cases, dates can be potentially moved subject to mutual agreement. *In the event of a pandemic, restricting border control in Canada, with advance notice (subject to mutual agreement) we are happy to move dates.",
        },
        {
          question:
            "What amenities can I expect in a luxury vacation rental home in Whistler from AceHost.ca?",
          answer:
            "When booking a luxury vacation rental through AceHost you can expect an array of top-of-the-line amenities. Including fully equipped gourmet kitchens and butler's pantries perfect for staff use. Wellness facilities include private hot tubs, heated pools, saunas, steam showers and dedicated massage rooms. Enjoy the convenience of state-of-the-art entertainment systems and premium linens for maximum comfort.",
        },
        {
          question: "Is there a fee for early check-in or late checkout?",
          answer:
            "No, we are very flexible and lenient on check-in and checkout timings at no additional cost. As long as the place is clean and there are no checkouts that day, we are more than happy to accommodate an early check-in. Please contact us with your desired time, and we will try our best to accommodate your needs. We understand the importance of convenience and want to ensure that your travel plans are as stress-free as possible.",
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Which activity tends to be the most frequently booked by our guests?",
          answer:
            "Highest Rated: Our custom heli-day trip with private chef lunch is our highest-rated tour, where you take a heli trip to a nearby glacier, with a chef that's prepared a gourmet catered meal, and a dedicated server awaits ensuring that every moment of your journey is truly exceptional. Sip champagne surrounded by dramatic mountain ranges - truly a one-of-a-kind experience. Round trip this experience takes 3-4 hours. Our guests have consistently mentioned that this was one of if not the coolest experiences of their lives.\n\nMost Frequent: Our most frequent request is booking private chefs. Most groups don't leave their vacation without having at least one meal in the house. Often groups will book the chef's stay for their entire trip! Our chefs are excellent and flexible with availability. If you choose to only have chefs for breakfast some days, and dinner for others, they are flexible in coming up with schedules and pricing that works for you.\n\nTypically the cost of a chef ranges from 400-500 for only breakfast, 600-800 for only dinner, and 800-900 for breakfast and dinner. Pricing depends on the chef/season & availability. Includes grocery shop and chef's time. Ingredients & gratuity are extra.",
        },
        {
          question:
            "What activities are there to do in the Summer in Whistler?",
          answer:
            "During the summer in Whistler, you can enjoy a variety of activities, including mountain biking in the world-class downhill bike park and extensive mountain trail network, ziplining, golf, hiking, and relaxing at the various lakes and luxury spas.\n\nWhistler has some of the most stunning 360 degree views all year round.",
        },
        {
          question:
            "What kind of luxury vacation homes can I find on Acehost.ca?",
          answer:
            "At AceHost, we pride ourselves on offering a diverse array of luxury rental homes in Whistler to suit every taste and requirement. Our selection includes a variety of property types and styles, ensuring that every guest finds their ideal vacation home. Some of the property types you can find on AceHost.ca include:\n\nModern, architecturally designed chalets: These stunning properties feature cutting-edge design, state-of-the-art technology, and luxurious amenities that cater to the most discerning guests.\nSpacious, multi-bedroom condos with stunning views: Perfect for families or groups of friends, these large condos offer ample space, breathtaking views, and convenient access to local attractions and amenities.\nElegant townhouses nestled in exclusive communities: These sophisticated properties provide a perfect blend of luxury and privacy, featuring beautifully designed interiors and access to upscale community facilities.\nCozy mountain cabins with rustic charm: For guests who prefer a more intimate and traditional mountain experience, our cozy cabins offer a warm and inviting atmosphere, complete with charming rustic details.\nSprawling estates with extensive outdoor spaces: Ideal for large groups or special events, our expansive estates offer unparalleled privacy, luxury, and outdoor amenities, such as private pools, tennis courts, and landscaped gardens.",
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Can I find pet-friendly luxury rental vacation homes in Whistler on AceHost.ca?",
          answer:
            "At AceHost, we recognize the significance of pets in many families, and we are delighted to offer a selection of pet-friendly luxury rental homes in Whistler.\n\nTo make your search for the perfect pet-friendly luxury rental home in Whistler as seamless as possible, we have implemented a user-friendly filter on our website. When searching for properties, you can simply select the pet-friendly filter, and our website will display all the available options that welcome pets. \n\nIt is important to note that while we strive to provide the best accommodations for pet owners, some additional fees or deposits may apply for pet-friendly properties. These charges help ensure that the homes are properly maintained and cleaned after each guest and that any potential damages caused by pets can be addressed.",
        },
        {
          question:
            "Is there a minimum stay requirement for Acehost properties?",
          answer:
            "To ensure our guests can fully enjoy our luxurious properties and all the amenities and services we offer, as well as meet the owner's requirements for renting out their home, we have established a minimum stay requirement. The duration may vary depending on the property and rules, but typically it is a 3-4 night minimum stay. During major holidays such as Christmas, New Year's and Presidents Day week, a 6 or 7-night minimum stay may be required. However, we understand that circumstances may vary, and flexibility is possible in many cases. Please feel free to contact us to discuss your specific needs and requirements. We will do our best to accommodate you.",
        },
        {
          question:
            "What are the advantages of using AceHost concierge service?",
          answer:
            "Through our offered services, we've forged strong relationships with the best restaurants, businesses, and tour operators in town. Cultivating personal relationships with local owners and managers has granted us access to the best tables at some of the best restaurants in town. If needed\n\nIn the event of last minute changes on your trip and schedules, strong relationships can sometimes give you access to last minute exclusive reservations and bookings. \n\nWe recommend always booking in advance, however we understand that plans change and no ask is too big or too small. \n\nOur concierge service not only eases the burdens of trip planning but also comes at absolutely no cost to you!",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          FAQ - AceHost | Luxury Vacation Rental Properties in Whistler
        </title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about AceHost luxury vacation rentals in Whistler, our concierge services, and property management."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Hero Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  AceHost FAQ
                </h1>
                <p className="text-xl text-gray-600">
                  Everything you need to know about the product and billing.
                  Can&apos;t find the answer you&apos;re looking for? Please
                  chat to our team.
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Your dream Whistler getaway.
                </h2>
                <p className="text-gray-700 mb-8">
                  Experience the ultimate in luxury living with a Whistler BC
                  rental. Our exclusive selection of high-end properties offer
                  the perfect combination of comfort and convenience. From ski
                  in ski out luxury rentals to nice condos, you&apos;ll find the
                  perfect accommodation for your next getaway. Enjoy
                  breathtaking mountain views, world-class amenities, and easy
                  access to all the best activities and attractions in the area.
                </p>
                <p className="text-gray-700 mb-8">
                  Have a look at our Frequently Asked Questions to find out more
                  about Whistler, things to do in Whistler, and more on AceHost
                  luxury homes and VIP Concierge Services.
                </p>
                <Link
                  href="/properties"
                  className="inline-block bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Find Your Estate
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-8">
                {faqGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="space-y-4">
                    {group.questions.map((item, index) => {
                      const faqIndex = groupIndex * 10 + index;
                      return (
                        <div
                          key={faqIndex}
                          className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm"
                        >
                          <button
                            onClick={() =>
                              setExpandedFaq(
                                expandedFaq === faqIndex ? null : faqIndex
                              )
                            }
                            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-medium text-gray-900 text-left">
                              {item.question}
                            </h3>
                            <span className="text-gray-400 flex-shrink-0 ml-4">
                              {expandedFaq === faqIndex ? (
                                <Minus size={20} />
                              ) : (
                                <Plus size={20} />
                              )}
                            </span>
                          </button>
                          {expandedFaq === faqIndex && (
                            <div className="px-6 py-4 border-t border-gray-100">
                              {item.answer.split("\n\n").map((paragraph, i) => (
                                <p
                                  key={i}
                                  className="text-gray-700 mb-4 whitespace-pre-line"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
    revalidate: 3600, // Revalidate the page every hour
  };
};

export default FAQPage;
