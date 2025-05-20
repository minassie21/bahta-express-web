import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/bahta-express-logo.png";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNavigation() {
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
    { name: "Services", path: "/service/all" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
    {
      name: "Login",
      path: "https://dashboard.bahtaexpress.com/dashboard/default",
    },
  ];

  // Listen for header's menu button click
  useEffect(() => {
    const handleMenuToggle = (e: CustomEvent) => {
      setMobileMenuOpen(e.detail.isOpen);
    };

    window.addEventListener("toggle-mobile-menu" as any, handleMenuToggle);

    return () => {
      window.removeEventListener("toggle-mobile-menu" as any, handleMenuToggle);
    };
  }, []);

  return (
    <>
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
              className="fixed inset-0 bg-black/50 z-[999]"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm sm:w-[60%] shadow-xl flex flex-col ring-1 backdrop-blur-md bg-white/80 z-[1000]  ring-gray-200/20 border-l border-gray-100/50"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-100/50 backdrop-blur-md bg-white/80">
                <img
                  src={logo}
                  alt="Bahta Express Logo"
                  className="h-8 w-auto"
                />
                <Button
                  aria-label="Close mobile menu"
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-white/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <nav className="flex flex-col w-full py-4 overflow-y-auto flex-1 backdrop-blur-md bg-white/80">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-4 px-6 hover:bg-white/90 border-b border-gray-100/50 text-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="p-6 border-t border-gray-100/50 mt-auto backdrop-blur-md bg-white/80">
                <a href="tel:+251911282956" className="mb-4 block">
                  <Button
                    aria-label="Call us"
                    variant="outline"
                    size="sm"
                    className="w-full rounded-full mb-3 backdrop-blur-sm bg-white/70 border-gray-100/50 shadow-sm ring-1 ring-gray-200/20 hover:bg-white/90"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Button>
                </a>
                <a
                  href="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                >
                  <Button
                    aria-label="Get a quote"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                  >
                    Get a Quote
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
