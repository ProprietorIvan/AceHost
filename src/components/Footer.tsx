import React from "react";
import { Instagram, Youtube, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-16">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-10 h-10 mr-3">
                <Image
                  src="/logo.png"
                  alt="AceHost Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">AceHost</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs mb-8 leading-relaxed">
              AceHost is a leading Whistler luxury property management company
              offering magnificent vacation rental homes in Whistler, British
              Columbia.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Properties
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/concierge-service"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Concierge Services
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Luxury Properties
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/list-property"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Property Management
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Blog
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  FAQ&apos;s
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Our Story
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Contact
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Social
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://instagram.com/acehost"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Instagram
                  <ArrowUpRight size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/acehost"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Youtube
                  <ArrowUpRight size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex justify-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} AceHost Whistler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
