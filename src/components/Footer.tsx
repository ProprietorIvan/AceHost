import React from "react";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Branding and Description */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-48 h-16">
                <Image
                  src="/logo.png"
                  alt="AceHost Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-600 mb-8 pr-4">
              AceHost is a leading Whistler luxury property management company
              offering magnificent vacation rental homes in Whistler, British
              Columbia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/acehost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/acehost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-800 transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Properties Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Properties
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/concierge-service"
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
                  href="/list-property"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Property Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
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

          {/* Social Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Social</h3>
            <ul className="space-y-4">
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

        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500">
            © {currentYear} AceHost Whistler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
