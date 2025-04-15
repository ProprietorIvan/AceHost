import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";

// Type for blog post metadata
interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  heroImage?: string; // Add optional heroImage property
}

interface BlogIndexProps {
  blogPosts: BlogPost[];
}

// This hardcoded data is a fallback in case getStaticProps fails
// In a production app, you'd extract metadata from the actual files
const blogPostsData: BlogPost[] = [
  {
    slug: "whistler-snow-report-record-snowfall-marks-the-start-of-the-2024-2025-ski-season",
    title:
      "Whistler Snow Report: Record Snowfall Marks the Start of the 2024/2025 Ski Season",
    category: "Whistler Snow/Weather Report",
    readTime: "11 minute read",
    heroImage: "/photos/post/WinterSnowReport/WinterSnowHero.png",
  },
  {
    slug: "luxury-whistler-vacation-redefined-how-acehost-whistler-caters-to-the-1-in-canadas-ultimate-playground",
    title:
      "Luxury Whistler Vacation Redefined: How AceHost Whistler Caters to the 1% in Canada's Ultimate Playground",
    category: "VIP Concierge | Luxury Vacation",
    readTime: "20 min",
    heroImage: "/photos/post/Luxury Whistler Vacation/Hero.jpg",
  },
  {
    slug: "find-your-dream-long-term-luxury-rental-in-whistler-with-acehost",
    title: "Find Your Dream Long-Term Luxury Rental in Whistler with AceHost",
    category: "Long-term, Property",
    readTime: "10 min read",
    heroImage:
      "/photos/post/find-your-dream-long-term-luxury-rental-in-whistler-with-acehost/Hero.jpg",
  },
  {
    slug: "top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years",
    title:
      "Top 7 of the Most Luxury Vacation Rental Homes in Whistler | Christmas and New Year's",
    category: "Travel Christmas",
    readTime: "15 min read",
    heroImage:
      "/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/Hero.png",
  },
  {
    slug: "whistlers-winter-outlook-2024-from-el-nino-challenges-to-la-nina-promises",
    title:
      "Whistler's Winter Outlook 2024: From El Niño Challenges to La Niña Promises",
    category: "Snow Forecast",
    readTime: "15 min read",
    heroImage:
      "/photos/post/whistlers-winter-outlook-2024-from-el-nino-challenges-to-la-nina-promises/hero.png",
  },
  {
    slug: "highlighting-the-importance-of-a-property-management-company-for-your-whistler-investment-home",
    title:
      "Highlighting the Importance of a Property Management Company For Your Whistler Investment Home",
    category: "Property Management",
    readTime: "15 min read",
    heroImage:
      "/photos/post/highlighting-the-importance-of-a-property-management-company-for-your-whistler-investment-home/hero.jpg",
  },
  {
    slug: "discover-the-ultimate-ski-in-ski-out-luxury-chalet-homes-in-whistler-canada",
    title:
      "Discover the Ultimate Ski-in Ski-out Luxury Chalet Homes in Whistler, Canada",
    category: "Ski in Ski out/Travel",
    readTime: "12 min read",
    heroImage:
      "/photos/post/discover-the-ultimate-ski-in-ski-out-luxury-chalet-homes-in-whistler-canada/hero.jpg",
  },
  {
    slug: "the-best-restaurants-in-whistler-canada-food-coffee-cocktails-more",
    title:
      "The Best Restaurants in Whistler, Canada | Food, Coffee, Cocktails & More",
    category: "Food/Restaurants",
    readTime: "18 min read",
    heroImage:
      "/photos/post/the-best-restaurants-in-whistler-canada-food-coffee-cocktails-more/hero.jpeg",
  },
  {
    slug: "the-best-restaurants-in-whistler-canada-food-coffee-cocktails-and-more",
    title:
      "The Best Restaurants in Whistler, Canada | Food, Coffee, Cocktails And More",
    category: "Food/Restaurants",
    readTime: "18 min read",
    heroImage:
      "/photos/post/the-best-restaurants-in-whistler-canada-food-coffee-cocktails-more/hero.jpeg",
  },
  {
    slug: "acehost-whistler-vip-concierge-services",
    title: "AceHost Whistler VIP Concierge Services",
    category: "VIP Concierge, Luxury Accommodations",
    readTime: "14 min read",
    heroImage: "/photos/post/acehost-whistler-vip-concierge-services/hero.png",
  },
  {
    slug: "high-budget-things-to-do-on-vacation-in-whistler-canada",
    title: "High Budget Things to do on Vacation in Whistler Canada",
    category: "Luxury Travel Experiences",
    readTime: "14 min read",
    heroImage:
      "/photos/post/high-budget-things-to-do-on-vacation-in-whistler-canada/hero.png",
  },
  {
    slug: "10-reasons-why-you-must-visit-whistler-canada-for-your-next-winter-ski-vacation",
    title:
      "10 Reasons Why You Must Visit Whistler Canada For Your Next Winter Ski Vacation",
    category: "Tourism",
    readTime: "15 min read",
    heroImage:
      "/photos/post/10-reasons-why-you-must-visit-whistler-canada-for-your-next-winter-ski-vacation/Hero.jpg",
  },
  {
    slug: "whistler-luxury-home-marketing-strategies",
    title:
      "Whistler Celebrity & Influencer Marketing in Whistler | Luxury Home Marketing Strategies",
    category: "Travel and celebrity marketing",
    readTime: "14 min read",
    heroImage:
      "/photos/post/whistler-luxury-home-marketing-strategies/Hero.png",
  },
  {
    slug: "whistler-luxury-vacation-haven",
    title: "Whistler: Luxury Vacation Haven | 20 reasons to visit Whistler",
    category: "Travel and Destination Guides",
    readTime: "10 min read",
    heroImage: "/photos/post/whistler-luxury-vacation-haven/hero.jpeg",
  },
  {
    slug: "luxury-property-management-investment-opportunities-in-whistler",
    title: "Luxury Property Management & Investment Opportunities in Whistler",
    category: "Property Management",
    readTime: "13 min read",
    heroImage:
      "/photos/post/luxury-property-management-investment-opportunities-in-whistler/hero.jpg",
  },
  {
    slug: "whistlers-dream-rental-homes",
    title: "Top 5 Luxury Vacation Rental Homes/airbnbs in Whistler Canada",
    category: "Travel and Accommodation",
    readTime: "13 min read",
    heroImage: "/photos/post/whistlers-dream-rental-homes/hero.jpg",
  },
  {
    slug: "whistlers-luxury-rental-escapes",
    title:
      "Whistler's Luxury Rental Escapes | Choosing a Luxury Airbnb Vacation",
    category: "Travel and Accommodation",
    readTime: "20 min read",
    heroImage: "/photos/post/whistlers-luxury-rental-escapes/hero.jpg",
  },
];

// Get static props to fetch blog post directories at build time
export const getStaticProps: GetStaticProps = async () => {
  try {
    const postsDirectory = path.join(process.cwd(), "src/pages/post");
    const directories = fs
      .readdirSync(postsDirectory)
      .filter((dir) =>
        fs.statSync(path.join(postsDirectory, dir)).isDirectory()
      );

    // Use the hard-coded data as we don't have easy access to content metadata
    // In a real app, you'd parse each post's content to extract metadata
    const availableSlugs = new Set(directories);
    const filteredPosts = blogPostsData.filter((post) =>
      availableSlugs.has(post.slug)
    );

    return {
      props: {
        blogPosts: filteredPosts,
      },
    };
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return {
      props: {
        blogPosts: blogPostsData,
      },
    };
  }
};

const BlogIndex = ({ blogPosts }: BlogIndexProps) => {
  return (
    <>
      <Head>
        <title>
          The AceHost Blog | Luxury Whistler Vacation Rentals & Tips
        </title>
        <meta
          name="description"
          content="Explore the AceHost blog for insights on luxury accommodations in Whistler, property management tips, seasonal ski reports, and exclusive travel experiences."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
              The AceHost Blog
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/post/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={
                          post.heroImage || `/photos/post/${post.slug}/Hero.jpg`
                        }
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Try different extensions and casing if the image fails to load
                          const target = e.target as HTMLImageElement;
                          const originalSrc = target.src;

                          if (originalSrc.toLowerCase().endsWith(".jpg")) {
                            // Try png
                            target.src = originalSrc.replace(/\.jpg$/i, ".png");
                          } else if (
                            originalSrc.toLowerCase().endsWith(".png")
                          ) {
                            // Try jpeg
                            target.src = originalSrc.replace(
                              /\.png$/i,
                              ".jpeg"
                            );
                          } else if (
                            originalSrc.toLowerCase().endsWith(".jpeg")
                          ) {
                            // Try with different casing
                            if (originalSrc.includes("/Hero.")) {
                              target.src = originalSrc.replace(
                                "/Hero.",
                                "/hero."
                              );
                            } else if (originalSrc.includes("/hero.")) {
                              target.src = originalSrc.replace(
                                "/hero.",
                                "/Hero."
                              );
                            }
                          }
                        }}
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                      {post.title}
                    </h2>
                    <Link
                      href={`/post/${post.slug}`}
                      className="inline-flex items-center text-black font-medium hover:underline"
                    >
                      Read post
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogIndex;
