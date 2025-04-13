import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import LanguageSelector from "./LanguageSelector";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({
  currentPage,
  showActions = true,
  transparent = false,
}: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const { t } = useTranslation("common");

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "VIP Concierge Services", url: "/concierge-service" },
    { text: "Whistler Property Management", url: "/management" },
    { text: "About AceHost", url: "/about" },
  ];

  const propertyLinks = [
    { text: "All Properties", url: "/properties" },
    { text: "Whistler Properties", url: "/properties" },
    { text: "Vancouver Properties", url: "/properties" },
    { text: "Worldwide Properties", url: "/properties" },
    { text: "Pets Allowed", url: "/properties" },
  ];

  const resourceLinks = [
    { text: "Blog", url: "/about" },
    { text: "FAQ", url: "/about" },
    { text: "Our Story", url: "/about" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="w-48 h-48 relative">
                <Image
                  src="/logo.png"
                  alt="AceHost Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium transition-colors text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                  className="flex items-center text-sm font-medium transition-colors text-gray-700 hover:text-gray-900"
                >
                  <span>Luxury Properties For Rent</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {isPropertiesOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10">
                    {propertyLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-sm font-medium transition-colors text-gray-700 hover:text-gray-900"
                >
                  {link.text}
                </Link>
              ))}

              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center text-sm font-medium transition-colors text-gray-700 hover:text-gray-900"
                >
                  <span>Resources</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {isResourcesOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {resourceLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 py-3 space-y-1">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Home
              </Link>

              <div className="py-2 px-3">
                <button
                  onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                  className="flex items-center text-base text-gray-700"
                >
                  <span>Luxury Properties For Rent</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {isPropertiesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {propertyLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 px-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.text}
                </Link>
              ))}

              <div className="py-2 px-3">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center text-base text-gray-700"
                >
                  <span>Resources</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {isResourcesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {resourceLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 px-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 mt-2 bg-black text-white hover:bg-gray-800 rounded-md transition-colors"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
