import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-ink text-white">

      {/* =====================================================
          FOOTER BACKGROUND IMAGE
      ===================================================== */}
      <img
        src="/images/footer.png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Simple dark overlay - NO GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-[#0B0D0F]/55
        "
      />

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}
      <div className="relative z-10">

        <div
          className="
            container-page
            grid
            gap-10
            py-14
            sm:py-16
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}
          <div>

            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
              "
            >
              {/* Logo */}
              <div
                className="
                  grid
                  h-11
                  w-11
                  place-items-center
                  rounded-full
                  bg-gold
                  font-display
                  font-extrabold
                  text-ink
                "
              >
                HRR
              </div>

              {/* Brand name */}
              <div>
                <div
                  className="
                    font-display
                    text-xl
                    font-extrabold
                    leading-none
                  "
                >
                  HRR
                </div>

                <div
                  className="
                    mt-1
                    text-[7px]
                    font-bold
                    tracking-[.35em]
                    text-gold
                  "
                >
                  TRAVELS
                </div>
              </div>
            </Link>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-white/70
              "
            >
              Premium self-drive car rentals in
              Visakhapatnam. Well-maintained cars,
              transparent pricing and a simple booking
              experience.
            </p>

            {/* Social / Contact */}
            <div className="mt-6 flex gap-2">

              {/* Phone */}
              <a
                href="tel:+919876543210"
                aria-label="Call HRR Travels"
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/20
                  text-white/70
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-gold
                  hover:bg-gold
                  hover:text-ink
                "
              >
                <Phone size={15} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp HRR Travels"
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/20
                  text-white/70
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-gold
                  hover:bg-gold
                  hover:text-ink
                "
              >
                <MessageCircle size={15} />
              </a>

            </div>
          </div>


          {/* =================================================
              EXPLORE
          ================================================= */}
          <div>

            <h3
              className="
                font-display
                text-base
                font-bold
                text-white
              "
            >
              Explore
            </h3>

            {/* Gold line */}
            <div
              className="
                mt-3
                h-[2px]
                w-8
                rounded-full
                bg-gold
              "
            />

            <div
              className="
                mt-5
                space-y-3
                text-sm
                text-white/65
              "
            >

              <Link
                to="/cars"
                className="
                  group
                  flex
                  items-center
                  gap-1
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-gold
                "
              >
                All Cars
                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </Link>

              <Link
                to="/how-it-works"
                className="
                  group
                  flex
                  items-center
                  gap-1
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-gold
                "
              >
                How It Works
                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </Link>

              <Link
                to="/about"
                className="
                  group
                  flex
                  items-center
                  gap-1
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-gold
                "
              >
                About Us
                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </Link>

            </div>
          </div>


          {/* =================================================
              SUPPORT
          ================================================= */}
          <div>

            <h3
              className="
                font-display
                text-base
                font-bold
                text-white
              "
            >
              Support
            </h3>

            <div
              className="
                mt-3
                h-[2px]
                w-8
                rounded-full
                bg-gold
              "
            />

            <div
              className="
                mt-5
                space-y-3
                text-sm
                text-white/65
              "
            >

              <Link
                to="/faq"
                className="
                  group
                  flex
                  items-center
                  gap-1
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-gold
                "
              >
                FAQs
                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </Link>

              <Link
                to="/contact"
                className="
                  group
                  flex
                  items-center
                  gap-1
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-gold
                "
              >
                Contact Us
                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </Link>

              <Link
                to="/my-bookings"
                className="
                  group
                  flex
                  items-center
                  gap-1
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-gold
                "
              >
                My Bookings
                <ArrowUpRight
                  size={13}
                  className="
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </Link>

            </div>
          </div>


          {/* =================================================
              CONTACT
          ================================================= */}
          <div>

            <h3
              className="
                font-display
                text-base
                font-bold
                text-white
              "
            >
              Contact
            </h3>

            <div
              className="
                mt-3
                h-[2px]
                w-8
                rounded-full
                bg-gold
              "
            />

            <div
              className="
                mt-5
                space-y-4
                text-sm
                text-white/65
              "
            >

              {/* Location */}
              <div className="flex items-start gap-3">

                <MapPin
                  size={17}
                  className="
                    mt-0.5
                    shrink-0
                    text-gold
                  "
                />

                <span>
                  Visakhapatnam,
                  <br />
                  Andhra Pradesh
                </span>

              </div>


              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="
                  flex
                  items-center
                  gap-3
                  transition-colors
                  duration-300
                  hover:text-gold
                "
              >
                <Phone
                  size={16}
                  className="shrink-0 text-gold"
                />

                <span>
                  +91 98765 43210
                </span>
              </a>


              {/* Email */}
              <a
                href="mailto:hello@hrrtravels.com"
                className="
                  flex
                  items-center
                  gap-3
                  transition-colors
                  duration-300
                  hover:text-gold
                "
              >
                <Mail
                  size={16}
                  className="shrink-0 text-gold"
                />

                <span>
                  hello@hrrtravels.com
                </span>
              </a>

            </div>
          </div>

        </div>


     {/* =====================================================
    FOOTER BOTTOM
===================================================== */}
<div
  className="
    border-t
    border-white/15
    bg-[#0B0D0F]/50
  "
>
  <div
    className="
      container-page
      flex
      flex-col
      justify-between
      gap-3
      py-5
      text-xs
      text-white/45
      sm:flex-row
      sm:items-center
    "
  >
    {/* Copyright */}
    <span>
      © 2026 HRR Travels. All rights reserved.
    </span>

    {/* Developed By */}
    <div className="flex flex-wrap items-center gap-4">
      <span>
        Self-drive car rentals • Visakhapatnam
      </span>

      <span className="hidden h-3 w-px bg-white/15 sm:block" />

      <span>
        Developed by{" "}
        <a
          href="https://enfynex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold
            text-white/70
            transition-colors
            duration-300
            hover:text-gold
          "
        >
          Enfynex
        </a>
      </span>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}