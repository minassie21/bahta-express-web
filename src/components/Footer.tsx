import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Twitter,
} from "lucide-react";
import logo from "@/assets/bahta-express-logo.png";

export function Footer() {
  return (
    <footer className="px-6 sm:px-12 py-6 text-neutral-600 font-sans">
      <div className="container mx-auto px-6 sm:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 my-4 justify-start">
          <p className="font-bold">Follow us on</p>
          <div className="flex gap-4 text-muted-foreground">
            <a
              href="https://t.me/BahtaExpress"
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
            <p className="font-bold mb-4">Addresses</p>
            <p className="mt-2">
              <span className="font-medium">Head Quarter:</span>{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://maps.app.goo.gl/"
                className="hover:text-orange-500 transition-colors"
              >
                3rd Floor Bethel Bicha Fok Addis Ababa,Ethiopia
              </a>
            </p>
            <p className="mt-2">
              <span className="font-medium">Phone No:</span>{" "}
              +251911282956/+251911258790 (24/7 Hotline)
            </p>
            <p className="mt-2">
              <span className="font-medium">Email:</span> info@bahtaexpress.com
            </p>
          </div>

          <div className="flex-1">
            <p className="font-bold mb-4">Bahta Express</p>
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
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/media"
                  className="hover:text-orange-500 transition-colors"
                >
                  Media
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 mt-8">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Bahta Logo"
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
                Bahta Express
              </a>
              . All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
