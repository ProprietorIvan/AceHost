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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-gray-300 hover:text-white transition-colors font-light text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-white text-2xl font-bold">Social</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm font-light">
              © {currentYear} AceHost Whistler. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
