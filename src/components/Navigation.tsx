import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
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
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("common");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setShowResourcesDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resourcesRef]);

  const resourcesDropdownItems = [
    { text: "Blog", url: "/blog" },
    { text: "FAQs", url: "#faqs" },
    { text: "Guides & Downloads", url: "#guides" },
    { text: "Whistler Travel Guide", url: "/resources#travel-guide" },
  ];

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Luxury Properties For Rent", url: "/properties" },
    { text: "VIP Concierge Services", url: "/concierge-service" },
    { text: "Whistler Property Management", url: "/list-property" },
    { text: "About AceHost", url: "/our-story" },
  ];

  return (
    <nav className={`${transparent ? "bg-transparent" : "bg-white"} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="w-40 h-16 relative">
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
            <div className="flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className={`px-4 py-2 rounded-md text-sm font-semibold ${
                    currentPage === link.url
                      ? "text-black border-b-2 border-black"
                      : "text-gray-700 hover:text-black hover:border-b-2 hover:border-black transition-all duration-200"
                  }`}
                >
                  {link.text}
                </Link>
              ))}

              {/* Resources Dropdown */}
              <div className="relative" ref={resourcesRef}>
                <button
                  onMouseEnter={() => setShowResourcesDropdown(true)}
                  onClick={() =>
                    setShowResourcesDropdown(!showResourcesDropdown)
                  }
                  className={`px-4 py-2 rounded-md text-sm font-semibold flex items-center ${
                    currentPage === "/resources"
                      ? "text-black border-b-2 border-black"
                      : "text-gray-700 hover:text-black hover:border-b-2 hover:border-black transition-all duration-200"
                  }`}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {showResourcesDropdown && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md py-2 z-50"
                    onMouseLeave={() => setShowResourcesDropdown(false)}
                  >
                    {resourcesDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                        onClick={() => setShowResourcesDropdown(false)}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="ml-2 px-5 py-2 bg-black text-white rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors"
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
                  className={`block py-2 px-3 mt-2 rounded-md ${
                    currentPage === link.url
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black hover:bg-gray-50 transition-all"
                  }`}
                >
                  {link.text}
                </Link>
              ))}

              {/* Resources Dropdown Mobile */}
              <div className="mt-2">
                <Link
                  href="/resources"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-3 rounded-md ${
                    currentPage === "/resources"
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black hover:bg-gray-50 transition-all"
                  }`}
                >
                  Resources
                </Link>
                <div className="pl-6 mt-1 space-y-1 border-l-2 border-gray-100">
                  {resourcesDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 px-3 text-sm text-gray-600 hover:text-black"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 mt-3 text-center bg-black text-white rounded-md"
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
