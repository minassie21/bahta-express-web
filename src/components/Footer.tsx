import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Twitter,
} from "lucide-react";
import logo from "@/assets/bahta-express-logo.png";
import OurClients from "./OurClients";

export function Footer() {
  return (
    <>
      <OurClients />
      <footer className="relative px-6 sm:px-12 py-6 text-neutral-600 font-sans border-t-2 border-neutral-200/70">
        {/* Orange circle positioned behind the footer */}
        <div className="absolute top-2 -left-6 w-64 h-64 rounded-full bg-orange-500 opacity-30 z-0"></div>
        <div className="absolute top-20 left-6 w-64 h-64 rounded-full bg-blue-500 opacity-30 z-0"></div>
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-orange-500 opacity-30 z-0"></div>
        <div className="absolute top-24 right-40 w-96 h-64 rounded-full bg-pink-500 opacity-30 z-0"></div>

        {/* Semi-transparent background with blur */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/80 z-10"></div>

        <div className="container mx-auto px-6 sm:px-12 py-8 relative z-20">
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 my-4 justify-start">
            <p className="font-display font-bold">Connect With Us</p>
            <div className="flex gap-4 text-muted-foreground">
              <a
                href="https://t.me/bahta_express"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="hover:text-orange-500 transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/BahtaExpress"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-orange-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bahtaexpress/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-orange-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/bahtaexpress"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-orange-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/bahta-express/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex-1">
              <p className="font-display font-bold mb-4">Our Locations</p>
              <p className="mt-2">
                <span className="font-medium">Headquarters:</span>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://maps.app.goo.gl/"
                  className="hover:text-orange-500 transition-colors"
                >
                  3rd Floor, Bethel Bicha Building, Addis Ababa, Ethiopia
                </a>
              </p>
              <p className="mt-2">
                <span className="font-medium">24/7 Support:</span> +251911282956
                / +251911258790
              </p>
              <p className="mt-2">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@bahtaexpress.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  info@bahtaexpress.com
                </a>
              </p>
            </div>

            <div className="flex-1">
              <p className="font-display font-bold mb-4">Quick Links</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Logistics Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/media"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Media Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quote"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Request Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 mt-8">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Bahta Express Logo"
                className="w-24 object-contain grayscale"
                width={96}
                height={39}
              />
              <span className="text-muted-foreground">
                © {new Date().getFullYear()}{" "}
                <a
                  target="_blank"
                  className="hover:underline"
                  href="/"
                  rel="noreferrer"
                >
                  Bahta Express Logistics
                </a>
                . All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
