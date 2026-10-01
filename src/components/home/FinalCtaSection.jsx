import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="
            overflow-hidden
            rounded-[1.75rem]
            border
            border-[#1F2225]
            bg-[#0B0D0F]
            px-6
            py-10
            sm:px-10
            sm:py-12
            lg:px-14
            lg:py-14
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-2
              lg:items-center
            "
          >

            {/* LEFT CONTENT */}
            <div
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-gold
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Ready when you are
              </div>

              <h2
                className="
                  mt-4
                  max-w-xl
                  font-display
                  text-3xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-[44px]
                "
              >
                Your next drive
                <br />
                <span className="text-gold">
                  starts here.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-lg
                  text-sm
                  leading-6
                  text-white/55
                  sm:text-[15px]
                "
              >
                Browse our fleet, choose your dates
                and reserve your car in minutes.
              </p>
            </div>

            {/* RIGHT BUTTONS */}
            <div
              data-aos="fade-left"
              data-aos-duration="700"
              className="
                flex
                flex-wrap
                gap-3
                lg:justify-end
              "
            >
              {/* Browse Cars */}
              <Link
                to="/cars"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gold
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-ink
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#FFC52E]
                "
              >
                <span>Browse Cars</span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-ink
                    text-gold
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight size={14} />
                </span>
              </Link>

              {/* Talk to Us */}
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/30
                  hover:bg-white/5
                "
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Bottom divider */}
          <div
            className="
              mt-9
              border-t
              border-white/10
              pt-5
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/30
              "
            >
              <span>Premium Cars</span>

              <span className="h-3 w-px bg-white/10" />

              <span>Easy Booking</span>

              <span className="h-3 w-px bg-white/10" />

              <span>Drive Your Way</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}