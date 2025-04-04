import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/bahta-express-logo.png";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed inset-x-4 top-2 z-50 h-16 max-w-[1480px] rounded-full border bg-white px-4 mx-auto">
      <div className="flex h-full items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Bahta Express Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden ml-2 lg:ml-12 md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "relative inline-block cursor-pointer transition-colors smooth-link",
                      isActive && "text-orange-600 font-medium"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+251911282956">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex rounded-full"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
          </a>

          <Link to="/contact">
            <Button className="group shadow-sm relative rounded-full border border-gray-200 bg-white text-sm p-2 font-semibold overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center transition-transform duration-200 ease-in-out group-hover:translate-x-28">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span className="relative left-4 z-10 whitespace-nowrap px-8 font-semibold text-black transition-all duration-200 ease-in-out group-hover:-left-3 group-hover:text-white">
                Get a quote
              </span>
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/50 z-50"
                    onClick={() => setMobileMenuOpen(false)}
                  />

                  {/* Slide-in Menu */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="fixed top-0 right-0 bottom-0 w-[60%] bg-white z-50 shadow-xl flex flex-col"
                  >
                    <div className="flex justify-between items-center p-4 border-b">
                      <img
                        src={logo}
                        alt="Bahta Express Logo"
                        className="h-8 w-auto"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-full hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <nav className="flex flex-col w-full py-4 overflow-y-auto flex-1">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-4 px-6 hover:bg-gray-50 border-b border-gray-100 text-lg"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="p-6 border-t mt-auto">
                      <a href="tel:+251911282956" className="mb-4 block">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-full mb-3"
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Call Us
                        </Button>
                      </a>
                      <Link to="/contact" className="block">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                          Get a Quote
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
