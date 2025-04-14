import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
  const { t } = useTranslation("common");

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Luxury Properties For Rent", url: "/properties" },
    { text: "VIP Concierge Services", url: "/concierge-service" },
    { text: "Whistler Property Management", url: "/list-property" },
    { text: "About AceHost", url: "/our-story" },
    { text: "Resources", url: "/resources" },
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
            <div className="flex items-center gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:text-black transition-colors mx-1"
                >
                  {link.text}
                </Link>
              ))}

              <Link
                href="/contact"
                className="text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:text-black transition-colors mx-1"
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
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 mt-2 text-gray-700 hover:text-black transition-colors"
                >
                  {link.text}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 mt-2 text-gray-700 hover:text-black transition-colors"
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
