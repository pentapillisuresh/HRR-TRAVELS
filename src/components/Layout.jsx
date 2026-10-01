
import { Outlet, NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "./Footer";

const nav = [
  ["/", "Home"],
  ["/cars", "Cars"],
  ["/how-it-works", "How It Works"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-cream">

      {/* =========================================================
          PREMIUM FLOATING / EXPANDING HEADER
      ========================================================= */}

      <header
        className={`
          fixed left-0 right-0 top-0 z-50
          transition-all duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          ${
            scrolled
              ? "px-0 pt-0"
              : "px-3 pt-3 sm:px-5"
          }
        `}
      >
        {/* NAVBAR CONTAINER */}

        <div
          className={`
            mx-auto
            transition-all duration-500
            ease-[cubic-bezier(.22,1,.36,1)]

            ${
              scrolled
                ? `
                  w-full
                  border-b
                  border-white/10
                  bg-[#0B0D0F]/95
                  backdrop-blur-xl
                `
                : `
                  max-w-6xl
                  rounded-full
                  border
                  border-white/10
                  bg-[#0B0D0F]/90
                  px-3
                  shadow-[0_15px_50px_rgba(0,0,0,.25)]
                  backdrop-blur-2xl
                  sm:px-4
                `
            }
          `}
        >

          {/* =====================================================
              NAVBAR INNER
          ===================================================== */}

          <div
            className={`
              mx-auto
              flex
              items-center
              justify-between

              transition-all
              duration-500

              ${
                scrolled
                  ? "container-page h-[76px]"
                  : "h-[62px] max-w-6xl"
              }
            `}
          >

            {/* ===================================================
                LOGO
            =================================================== */}

            <Link
              to="/"
              className="
                group
                flex
                items-center
                gap-2
              "
            >

              {/* Logo Circle */}

              <div
                className={`
                  relative
                  grid
                  place-items-center
                  overflow-hidden
                  rounded-full
                  bg-gold
                  text-ink

                  transition-all
                  duration-500

                  ${
                    scrolled
                      ? "h-10 w-10"
                      : "h-9 w-9"
                  }
                `}
              >

                <span
                  className="
                    font-display
                    text-[12px]
                    font-extrabold
                  "
                >
                  HRR
                </span>

                {/* Shine Animation */}

                <span
                  className="
                    absolute
                    -left-10
                    top-0
                    h-full
                    w-8
                    rotate-12
                    bg-white/40

                    transition-all
                    duration-700

                    group-hover:left-[120%]
                  "
                />

              </div>

              {/* Logo Text */}

              <div
                className={`
                  leading-none
                  transition-all
                  duration-500

                  ${
                    scrolled
                      ? "block"
                      : "hidden sm:block"
                  }
                `}
              >

                <div
                  className="
                    font-display
                    text-xl
                    font-extrabold
                    tracking-tight
                    text-white
                  "
                >
                  HRR
                </div>

                <div
                  className="
                    mt-1
                    text-[7px]
                    font-bold
                    tracking-[.38em]
                    text-gold
                  "
                >
                  TRAVELS
                </div>

              </div>

            </Link>


            {/* ===================================================
                DESKTOP NAVIGATION
            =================================================== */}

            <nav className="hidden lg:flex">

              <div
                className={`
                  flex
                  items-center
                  rounded-full

                  transition-all
                  duration-500

                  ${
                    scrolled
                      ? "gap-1 bg-white/[0.04] p-1"
                      : "gap-1"
                  }
                `}
              >

                {nav.map(([to, label]) => (

                  <NavLink
                    key={to}
                    to={to}
                    className={`
                      group
                      relative
                      rounded-full
                      px-4
                      py-2.5
                      text-[13px]
                      font-medium

                      transition-all
                      duration-300
                    `}
                  >

                    {({ isActive }) => (

                      <>

                        {/* Active Background */}

                        {isActive && (
                          <span
                            className="
                              absolute
                              inset-0
                              rounded-full
                              bg-white/[0.07]
                            "
                          />
                        )}

                        {/* Text */}

                        <span
                          className={`
                            relative
                            z-10

                            transition-colors
                            duration-300

                            ${
                              isActive
                                ? "text-white"
                                : "text-white/60 hover:text-white"
                            }
                          `}
                        >
                          {label}
                        </span>

                        {/* Active Gold Indicator */}

                        <span
                          className={`
                            absolute
                            bottom-[3px]
                            left-1/2
                            h-[2px]
                            -translate-x-1/2
                            rounded-full
                            bg-gold

                            transition-all
                            duration-300

                            ${
                              isActive
                                ? "w-5 opacity-100"
                                : "w-0 opacity-0"
                            }
                          `}
                        />

                      </>

                    )}

                  </NavLink>

                ))}

              </div>

            </nav>


            {/* ===================================================
                DESKTOP ACTION BUTTONS
            =================================================== */}

            <div className="hidden items-center gap-2 sm:flex">

              {/* Search */}

              <Link
                to="/cars"
                aria-label="Search cars"
                className="
                  group
                  grid
                  h-10
                  w-10
                  place-items-center

                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.04]

                  text-white/70

                  transition-all
                  duration-300

                  hover:border-gold/40
                  hover:bg-gold
                  hover:text-ink
                "
              >

                <Search
                  size={17}
                  className="
                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                />

              </Link>


              {/* Login */}

              <Link
                to="/login"
                className="
                  rounded-full

                  border
                  border-white/15

                  bg-white/[0.03]

                  px-5
                  py-2.5

                  text-[13px]
                  font-semibold

                  text-white

                  transition-all
                  duration-300

                  hover:border-white/30
                  hover:bg-white/10
                "
              >
                Login
              </Link>


              {/* Book Car */}

              <Link
                to="/cars"
                className="
                  group

                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  bg-gold

                  px-5
                  py-2.5

                  text-[13px]
                  font-bold

                  text-ink

                  shadow-[0_6px_25px_rgba(246,185,26,.18)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#ffc83d]
                  hover:shadow-[0_10px_35px_rgba(246,185,26,.28)]

                  active:translate-y-0
                "
              >

                Book a Car

                <span
                  className="
                    grid
                    h-5
                    w-5
                    place-items-center
                    rounded-full
                    bg-ink/10

                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                  "
                >
                  <ChevronRight size={13} />
                </span>

              </Link>

            </div>


            {/* ===================================================
                MOBILE MENU BUTTON
            =================================================== */}

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="
                grid
                h-10
                w-10
                place-items-center

                rounded-full

                border
                border-white/10

                bg-white/[0.05]

                text-white

                transition-all
                duration-300

                hover:bg-white/10

                lg:hidden
              "
            >

              <span
                className={`
                  transition-transform
                  duration-300

                  ${
                    open
                      ? "rotate-90"
                      : "rotate-0"
                  }
                `}
              >

                {open ? (
                  <X size={19} />
                ) : (
                  <Menu size={19} />
                )}

              </span>

            </button>

          </div>


          {/* =====================================================
              MOBILE MENU
          ===================================================== */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-500
              lg:hidden

              ${
                open
                  ? "max-h-[650px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >

            <div
              className={`
                px-4
                pb-4
                pt-2

                ${
                  scrolled
                    ? ""
                    : "border-t border-white/10"
                }
              `}
            >

              {/* Mobile Navigation */}

              <div
                className="
                  space-y-1
                  rounded-2xl
                  bg-white/[0.035]
                  p-2
                "
              >

                {nav.map(([to, label]) => (

                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `
                        flex
                        items-center
                        justify-between

                        rounded-xl

                        px-4
                        py-3.5

                        text-sm
                        font-medium

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-gold text-ink"
                            : "text-white/75 hover:bg-white/[0.07] hover:text-white"
                        }
                      `
                    }
                  >

                    {({ isActive }) => (
                      <>
                        <span>{label}</span>

                        {isActive && (
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-ink
                            "
                          />
                        )}
                      </>
                    )}

                  </NavLink>

                ))}

              </div>


              {/* Mobile Buttons */}

              <div className="mt-3 grid grid-cols-2 gap-2">

                <Link
                  to="/login"
                  className="
                    flex
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/15

                    bg-white/[0.04]

                    px-4
                    py-3

                    text-sm
                    font-semibold

                    text-white

                    transition

                    hover:bg-white/10
                  "
                >
                  Login
                </Link>

                <Link
                  to="/cars"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2

                    rounded-full

                    bg-gold

                    px-4
                    py-3

                    text-sm
                    font-bold

                    text-ink

                    transition

                    hover:bg-[#ffc83d]
                  "
                >
                  Book a Car

                  <ChevronRight size={15} />
                </Link>

              </div>


              {/* Quick Contact */}

              <div className="mt-3 grid grid-cols-2 gap-2">

                <a
                  href="tel:+919876543210"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-white/10

                    py-3

                    text-xs
                    font-medium

                    text-white/60

                    transition

                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <Phone size={14} />
                  Call Us
                </a>

                <a
                  href="https://wa.me/919876543210"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-white/10

                    py-3

                    text-xs
                    font-medium

                    text-white/60

                    transition

                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </header>


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

   <main className="relative">
  <Outlet />
</main>


      {/* =========================================================
          FOOTER
      ========================================================= */}

    <Footer />

    </div>
  );
}

