import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
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
  const [showMobileResourcesDropdown, setShowMobileResourcesDropdown] =
    useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("common");

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setShowResourcesDropdown(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(
          'button[aria-label="Toggle menu"]'
        )
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resourcesRef, mobileMenuRef]);

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
    <nav
      className={`${
        transparent ? "bg-transparent" : "bg-white"
      } shadow-md relative z-40`}
    >
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
                  priority
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
              className="p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fixed position with overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={mobileMenuRef}
            className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white shadow-lg z-40 overflow-y-auto max-h-[calc(100vh-5rem)]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center py-3 px-4 rounded-md text-base ${
                    currentPage === link.url
                      ? "bg-gray-100 text-black font-semibold"
                      : "text-gray-700 hover:text-black hover:bg-gray-50 transition-all"
                  }`}
                >
                  {link.text}
                </Link>
              ))}

              {/* Resources Dropdown Mobile */}
              <div className="rounded-md overflow-hidden">
                <button
                  onClick={() =>
                    setShowMobileResourcesDropdown(!showMobileResourcesDropdown)
                  }
                  className={`flex justify-between items-center w-full py-3 px-4 rounded-md text-base ${
                    currentPage === "/resources"
                      ? "bg-gray-100 text-black font-semibold"
                      : "text-gray-700 hover:text-black hover:bg-gray-50 transition-all"
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      showMobileResourcesDropdown ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {showMobileResourcesDropdown && (
                  <div className="mt-1 ml-4 pl-4 border-l-2 border-gray-100 space-y-2">
                    {resourcesDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        onClick={() => {
                          setShowMobileResourcesDropdown(false);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center py-3 px-4 text-base text-gray-600 hover:text-black rounded-md"
                      >
                        <ChevronRight className="h-4 w-4 mr-2" />
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center py-4 px-4 mt-4 text-center bg-black text-white rounded-md text-base font-medium"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
