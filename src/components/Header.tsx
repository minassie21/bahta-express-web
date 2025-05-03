import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/bahta-express-logo.png";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const handleMobileMenuToggle = () => {
    // Dispatch a custom event to notify the MobileNavigation component
    const event = new CustomEvent("toggle-mobile-menu", {
      detail: { isOpen: true },
    });
    window.dispatchEvent(event);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed inset-x-4 top-2 z-50 h-16 max-w-[1480px] rounded-full backdrop-blur-md bg-white/80 px-4 mx-auto border-2 border-gray-100/50 shadow-sm ring-1 ring-gray-200/20">
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
                      "font-display text-sm font-medium relative inline-block cursor-pointer transition-colors smooth-link",
                      isActive && "text-orange-600 font-semibold"
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
              className="hidden sm:inline-flex font-display rounded-full backdrop-blur-sm bg-white/70 border-gray-100/50 shadow-sm ring-1 ring-gray-200/20 hover:bg-white/90 transition-all"
              aria-label="Call us"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
          </a>

          <Link to="/quote">
            <Button
              aria-label="request a logistics quote"
              className="group shadow-sm relative rounded-full border border-gray-100/50 bg-white/70 backdrop-blur-sm text-sm p-2 font-display font-semibold overflow-hidden ring-1 ring-gray-200/20"
            >
              <span className="absolute inset-0 w-full h-full bg-orange-500/90 backdrop-blur-sm rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
              aria-label="Toggle mobile menu"
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={handleMobileMenuToggle}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
