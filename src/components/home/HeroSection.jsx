import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroReady(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative
        flex
        min-h-[100svh]
        items-center
        overflow-hidden
        bg-[#080A0C]
      "
    >

      {/* Background Video */}

      <div className="absolute inset-0">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=2200&q=90"
          className="
            h-full
            w-full
            object-cover
            scale-[1.02]
          "
        >
          <source
            src="/images/bg.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

      </div>


      {/* Main Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-black/48
        "
      />


      {/* Left Dark Overlay */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full
          bg-gradient-to-r
          from-black/75
          via-black/45
          to-transparent

          lg:w-[72%]
        "
      />


      {/* Bottom Overlay */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-56
          bg-gradient-to-t
          from-black/75
          via-black/25
          to-transparent
        "
      />


      {/* Top Overlay */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-black/25
          to-transparent
        "
      />


      {/* Gold Light */}

      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[42%]
          h-32
          w-32
          rounded-full
          bg-[#F6B91A]/8
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[8%]
          h-40
          w-40
          rounded-full
          bg-[#F6B91A]/5
          blur-[110px]
        "
      />


      {/* Hero Content */}

      <div
        className="
          container-page
          relative
          z-10
          flex
          min-h-[100svh]
          items-center
          pb-24
          pt-24

          sm:pb-28
          sm:pt-28

          lg:pb-20
        "
      >

        <div className="max-w-3xl">

          {/* Brand */}

          <div
            className={`
              mb-5
              flex
              items-center
              gap-3

              transition-all
              duration-700
              ease-out

              ${
                heroReady
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >

            <span
              className="
                h-px
                w-8
                bg-[#F6B91A]

                sm:w-10
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#F6B91A]/90

                sm:text-[11px]
              "
            >
              HRR Travels
            </span>

          </div>


          {/* Title */}

          <h1
            className="
              font-display
              font-bold
              tracking-[-0.045em]
              text-white

              text-[3.4rem]
              leading-[0.95]

              sm:text-6xl
              sm:leading-[0.94]

              md:text-7xl

              lg:text-[5.9rem]
              lg:leading-[0.92]

              xl:text-[6.5rem]
            "
          >

            <span
              className={`
                block

                transition-all
                duration-[900ms]
                ease-[cubic-bezier(.22,1,.36,1)]

                ${
                  heroReady
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }
              `}
            >
              Drive Vizag.
            </span>

            <span
              className={`
                mt-2
                block
                font-medium
                text-[#F6B91A]

                transition-all
                delay-200
                duration-[1000ms]
                ease-[cubic-bezier(.22,1,.36,1)]

                ${
                  heroReady
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }
              `}
            >
              Your Way.
            </span>

          </h1>


          {/* Subtitle */}

          <p
            className={`
              mt-6
              max-w-xl

              text-sm
              font-normal
              leading-6
              tracking-[0.01em]

              text-white

              sm:mt-7
              sm:text-base
              sm:leading-7

              lg:text-[17px]
              lg:leading-7

              transition-all
              delay-400
              duration-[900ms]

              ${
                heroReady
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            Premium self-drive cars for city escapes,
            coastal drives and weekend getaways in
            Visakhapatnam.
          </p>


          {/* CTA */}

          <div
            className={`
              mt-8

              transition-all
              delay-[600ms]
              duration-[900ms]

              ${
                heroReady
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >

            <Link
              to="/cars"
              className="
                group
                inline-flex
                items-center
                gap-3

                rounded-full

                bg-[#F6B91A]

                px-6
                py-3.5

                text-[13px]
                font-bold

                text-[#0B0D0F]

                shadow-[0_10px_35px_rgba(246,185,26,.18)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#FFC83D]
                hover:shadow-[0_15px_45px_rgba(246,185,26,.28)]
              "
            >

              Explore Cars

              <span
                className="
                  grid
                  h-6
                  w-6
                  place-items-center
                  rounded-full
                  bg-black/10

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={14} />
              </span>

            </Link>

          </div>


          {/* Trust Line */}

          <div
            className={`
              mt-7
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2

              text-[11px]
              text-white/50

              transition-all
              delay-[750ms]
              duration-700

              ${
                heroReady
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F6B91A]" />
              Well maintained cars
            </span>

            <span className="hidden h-3 w-px bg-white/20 sm:block" />

            <span>
              Transparent pricing
            </span>

            <span className="hidden h-3 w-px bg-white/20 sm:block" />

            <span>
              Easy booking
            </span>

          </div>

        </div>

      </div>


      {/* Scroll Indicator */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2

          text-[8px]
          font-semibold
          uppercase
          tracking-[0.28em]
          text-white/35

          sm:flex
        "
      >

        <span>
          Scroll
        </span>

        <span
          className="
            relative
            h-8
            w-px
            overflow-hidden
            bg-white/20
          "
        >

          <span
            className="
              absolute
              left-0
              top-0
              h-3
              w-px
              bg-[#F6B91A]

              animate-[scrollLine_1.8s_ease-in-out_infinite]
            "
          />

        </span>

      </div>

    </section>
  );
}