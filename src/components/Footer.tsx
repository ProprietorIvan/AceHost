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
              Leading Whistler luxury property management company offering
              magnificent vacation rental homes and personalized services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/acehost"
                className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/acehost"
                className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Properties
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/properties"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  All Properties
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Whistler Properties
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Private Homes
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/concierge-service"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  VIP Concierge
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/list-property"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  List Your Property
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Our Services
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  About Us
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
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Our Story
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Terms
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Privacy
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-600 text-sm hover:text-black transition-colors flex items-center"
                >
                  Cookies
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} AceHost Whistler. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/terms"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
