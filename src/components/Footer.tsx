import React from "react";
import {
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation("common");

  const footerLinks = [
    {
      title: "Properties",
      links: [
        { text: "Whistler Properties", url: "/properties/whistler" },
        { text: "Vancouver Properties", url: "/properties/vancouver" },
        { text: "Worldwide", url: "/properties/worldwide" },
        { text: "Pets Allowed", url: "/properties/pets-allowed" },
      ],
    },
    {
      title: "Concierge Services",
      links: [
        { text: "VIP Experiences", url: "/concierge/vip-experiences" },
        { text: "Transportation", url: "/concierge/transportation" },
        { text: "Activities", url: "/concierge/activities" },
        { text: "Private Chefs", url: "/concierge/private-chefs" },
      ],
    },
    {
      title: "Luxury Properties",
      links: [
        { text: "View All Properties", url: "/properties" },
        { text: "Featured Properties", url: "/properties/featured" },
        { text: "New Listings", url: "/properties/new" },
      ],
    },
    {
      title: "Property Management",
      links: [
        { text: "Whistler Property Management", url: "/management" },
        { text: "List Your Property", url: "/management/list-property" },
        { text: "Owner Services", url: "/management/owner-services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "/blog" },
        { text: "FAQ's", url: "/faqs" },
        { text: "Our Story", url: "/about" },
        { text: "Contact", url: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com/acehost" },
    { icon: Youtube, url: "https://youtube.com/channel/acehost" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-4xl font-bold">AceHost</span>
            </Link>
            <p className="text-gray-600 max-w-xs mb-6">
              AceHost is a leading Whistler luxury property management company
              offering magnificent vacation rental homes in Whistler, British
              Columbia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/acehost"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/acehost"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gray-900 font-medium mb-4">Properties</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/concierge"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Concierge Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/properties"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Luxury Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/management"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Property Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    FAQ&apos;s
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-medium mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com/acehost"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/acehost"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <p className="text-gray-500 text-sm">
            © {currentYear} AceHost Whistler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
