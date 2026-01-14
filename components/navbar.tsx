"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const services = [
    { name: "AI-Powered Solutions", href: "/services/ai-powered-solutions" },
    { name: "Excel to AI-Powered Web App", href: "/services/excel-to-web-app" },
    { name: "Web App Development", href: "/services/web-app-development" },
    {
      name: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
    { name: "CMS Based Solutions", href: "/services/cms-solutions" },
    { name: "SEO Solutions", href: "/services/seo-solutions" },
    {
      name: "Social Media Marketing",
      href: "/services/social-media-marketing",
    },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    {
      name: "Application Maintenance & Support",
      href: "/services/maintenance-support",
    },
  ];

  const handleGetStarted = () => {
    if (pathname === "/") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      router.push("/contact");
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group animate-fade-in-down"
          >
            <div
              className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center
                  group-hover:shadow-lg group-hover:shadow-cyan-500/50
                  transition-all duration-300"
            >
              <Image
                src="/NT-icon.png"
                alt="Novaa Tech Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>

            <span className="text-xl font-bold text-navy hover:text-cyan-600 transition-colors">
              Novaa Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown - FIXED */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu with proper hover area */}
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                  isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in-up">
                  {services.map((service, i) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors font-medium"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={handleGetStarted}
            className="hidden md:block px-6 py-2 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 animate-fade-in-down stagger-6"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-cyan-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200 mt-4 pt-4 animate-fade-in-up">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-blue-900 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="block">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-4 py-2 text-gray-700 hover:text-white hover:bg-blue-900 rounded-lg transition-all duration-300 flex items-center justify-between"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-1 mt-2 animate-fade-in-up">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-cyan-600 rounded-lg transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-blue-900 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/projects"
              className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-blue-900 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-blue-900 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <button
              onClick={() => {
                handleGetStarted();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg font-semibold mt-4 hover:bg-cyan-600 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
