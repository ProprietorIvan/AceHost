import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  BookOpen,
  HelpCircle,
  FileText,
  Download,
  Calendar,
  MapPin,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Resources = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const resourceCategories = [
    {
      title: "Frequently Asked Questions",
      description:
        "Find answers to common questions about booking, services, and vacation rentals in Whistler.",
      icon: HelpCircle,
      link: "#faqs",
      image: "/photos/homepage/WhistlerVacationRental.jpg",
    },
    {
      title: "Blog & Articles",
      description:
        "Discover travel tips, seasonal guides, and insider information about Whistler activities and attractions.",
      icon: BookOpen,
      link: "#blog",
      image: "/photos/homepage/ViewOurCollection.jpg",
    },
    {
      title: "Guides & Downloads",
      description:
        "Access helpful guides, checklists, and resources to plan your perfect Whistler vacation.",
      icon: FileText,
      link: "#guides",
      image: "/photos/homepage/WhistlerVipConcierge.jpg",
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
      title: "Whistler Canada | Chef Edit",
      subtitle: "Luxury home all inclusive chef experience",
      date: "December 10, 2023",
      excerpt:
        "Discover the ultimate culinary experience with private chefs in luxury Whistler accommodations.",
      imagePath: "/photos/homepage/WhistlerVacationRental.jpg",
      url: "#",
      featured: true,
    },
    {
      title: "The Dream Whistler Vacation in Luxury!",
      subtitle: "AceHost Whistler Experience Promo",
      date: "November 15, 2023",
      excerpt:
        "Experience the ultimate Whistler vacation with luxury accommodations and personalized concierge services.",
      imagePath: "/photos/homepage/ViewOurCollection.jpg",
      url: "#",
      featured: true,
    },
    {
      title: "Best Skiing Spots in Whistler for Every Skill Level",
      date: "October 15, 2023",
      excerpt:
        "Discover the perfect slopes for beginners, intermediates, and expert skiers across Whistler and Blackcomb mountains.",
      imagePath: "/photos/homepage/WhistlerVipConcierge.jpg",
      url: "#",
    },
    {
      title: "Summer Activities Guide: Beyond Winter Sports in Whistler",
      date: "June 5, 2023",
      excerpt:
        "Explore hiking trails, mountain biking, golf courses, and other exciting summer activities in Whistler.",
      imagePath: "/photos/homepage/1.jpg",
      url: "#",
    },
    {
      title:
        "Luxury Dining in Whistler: Top Restaurants for Memorable Experiences",
      date: "August 22, 2023",
      excerpt:
        "Recommendations for fine dining, local cuisine, and unique culinary experiences in and around Whistler.",
      imagePath: "/photos/homepage/WhistlerVacationRental.jpg",
      url: "#",
    },
  ];

  const guides = [
    {
      title: "Whistler Winter Activity Guide",
      description:
        "A comprehensive guide to winter activities, events, and attractions in Whistler.",
      icon: Calendar,
      downloadUrl: "#",
    },
    {
      title: "Summer in Whistler Checklist",
      description:
        "Essential items to pack and activities to plan for your summer vacation in Whistler.",
      icon: Star,
      downloadUrl: "#",
    },
    {
      title: "Whistler Village Map & Navigation",
      description:
        "Navigate Whistler Village like a local with this comprehensive map and guide.",
      icon: MapPin,
      downloadUrl: "#",
    },
    {
      title: "Luxury Concierge Services Guide",
      description:
        "Explore our premium concierge services available during your stay in Whistler.",
      icon: Download,
      downloadUrl: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>Resources & Information | AceHost Whistler Luxury Rentals</title>
        <meta
          name="description"
          content="Access helpful resources, blogs, FAQs and guides to enhance your Whistler vacation experience with AceHost luxury rentals."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation currentPage="/resources" />

        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="/photos/homepage/1.jpg"
              alt="Resources Hero"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Resources & Useful Information
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Find answers, guides, and helpful information to make the most
                of your Whistler luxury experience.
              </p>
              <Link
                href="#featured"
                className="inline-block px-8 py-4 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Blog Articles */}
        <div id="featured" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Articles</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Discover the latest insights, tips, and recommendations for your
                Whistler experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={post.imagePath}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Link
                          href={post.url}
                          className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                        >
                          Read Article
                        </Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                      <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                      {post.subtitle && (
                        <p className="text-gray-700 font-medium mb-3">
                          {post.subtitle}
                        </p>
                      )}
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>
                      <Link
                        href={post.url}
                        className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Resource Categories - Visual Cards */}
        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Explore Our Resources</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Browse our collection of resources to enhance your Whistler
                experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <div
                  key={index}
                  className="group relative h-96 rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>
                  </div>
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-8 z-10">
                    <category.icon className="w-16 h-16 text-white mb-6" />
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-200 mb-8">{category.description}</p>
                    <Link
                      href={category.link}
                      className="px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors group-hover:scale-105 transform transition-transform duration-300"
                    >
                      Explore {category.title.split(" ")[0]}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div id="blog" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
                <div className="w-24 h-1 bg-black mb-6"></div>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors mt-4 md:mt-0"
              >
                <span>View All Articles</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={post.imagePath}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>
                      <Link
                        href={post.url}
                        className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div id="faqs" className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our luxury properties and
                services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300"
                >
                  <button
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`px-6 pb-4 transition-all duration-300 ${
                      expandedFaq === index ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Us With Questions
              </Link>
            </div>
          </div>
        </div>

        {/* Guides & Downloads Section */}
        <div id="guides" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Guides & Downloads</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access our collection of helpful guides and resources to enhance
                your Whistler experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl text-center shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-black text-white mb-6">
                    <guide.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-6">{guide.description}</p>
                  <Link
                    href={guide.downloadUrl}
                    className="inline-flex items-center justify-center w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Travel Guide Section */}
        <div
          id="travel-guide"
          className="relative py-24 bg-gray-900 text-white"
        >
          <div className="absolute inset-0">
            <Image
              src="/photos/homepage/WhistlerVacationRental.jpg"
              alt="Whistler Travel Guide"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">Whistler Travel Guide</h2>
              <p className="text-xl text-gray-200 mb-8">
                Our comprehensive travel guide provides insider tips, local
                recommendations, and essential information to help you plan the
                perfect Whistler vacation.
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Download Full Guide</span>
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
