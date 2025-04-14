import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, HelpCircle, FileText } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Frequently Asked Questions",
      description:
        "Find answers to common questions about booking, services, and vacation rentals in Whistler.",
      icon: HelpCircle,
      link: "#faqs",
    },
    {
      title: "Blog & Articles",
      description:
        "Discover travel tips, seasonal guides, and insider information about Whistler activities and attractions.",
      icon: BookOpen,
      link: "#blog",
    },
    {
      title: "Guides & Downloads",
      description:
        "Access helpful guides, checklists, and resources to plan your perfect Whistler vacation.",
      icon: FileText,
      link: "#guides",
    },
  ];

  const faqs = [
    {
      question: "What is the minimum stay requirement?",
      answer:
        "Most of our luxury properties require a minimum stay of 3-4 nights. During peak holiday periods such as Christmas and New Year's, a 7-night minimum stay is typically required.",
    },
    {
      question: "Are pets allowed in your rental properties?",
      answer:
        "Some of our properties are pet-friendly. Please check the individual property listings for specific pet policies or contact us directly to discuss your needs.",
    },
    {
      question: "What amenities can I expect in your luxury properties?",
      answer:
        "Our luxury properties feature premium amenities such as gourmet kitchens, private hot tubs, heated pools, saunas, steam showers, state-of-the-art entertainment systems, and high-quality linens.",
    },
    {
      question: "How do I make a reservation?",
      answer:
        "You can make a reservation through our website by selecting your desired property and dates, or by contacting our concierge team directly for personalized assistance.",
    },
    {
      question: "What services does your property management include?",
      answer:
        "Our property management services include marketing and listing, guest screening, check-in/check-out handling, cleaning and maintenance, 24/7 guest support, and regular property inspections.",
    },
  ];

  const blogPosts = [
    {
      title: "Best Skiing Spots in Whistler for Every Skill Level",
      date: "October 15, 2023",
      excerpt:
        "Discover the perfect slopes for beginners, intermediates, and expert skiers across Whistler and Blackcomb mountains.",
      imagePath: "/photos/homepage/WhistlerVacationRental.jpg",
    },
    {
      title: "Summer Activities Guide: Beyond Winter Sports in Whistler",
      date: "June 5, 2023",
      excerpt:
        "Explore hiking trails, mountain biking, golf courses, and other exciting summer activities in Whistler.",
      imagePath: "/photos/homepage/WhistlerVipConcierge.jpg",
    },
    {
      title:
        "Luxury Dining in Whistler: Top Restaurants for Memorable Experiences",
      date: "August 22, 2023",
      excerpt:
        "Recommendations for fine dining, local cuisine, and unique culinary experiences in and around Whistler.",
      imagePath: "/photos/homepage/ViewOurCollection.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/photos/homepage/1.jpg"
            alt="Resources Hero"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Resources & Useful Information
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers, guides, and helpful information to make the most of
              your Whistler experience.
            </p>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-white"
              >
                <div className="flex flex-col items-center text-center">
                  <category.icon className="w-12 h-12 text-black mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <Link
                    href={category.link}
                    className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                  >
                    View Resources
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div id="faqs" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.imagePath}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="text-black font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guides Section */}
      <div id="guides" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Guides & Downloads</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access our collection of helpful guides and resources to enhance
              your Whistler experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Whistler Winter Activity Guide
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to winter activities, events, and
                attractions in Whistler.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Download PDF
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Summer in Whistler Checklist
              </h3>
              <p className="text-gray-600 mb-4">
                Essential items to pack and activities to plan for your summer
                vacation in Whistler.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
