import {
  Clock3,
  CreditCard,
  MapPin,
  ShieldCheck,
  Users,
  Headphones,
} from "lucide-react";

import SectionHeading from "../SectionHeading";

const features = [
  [
    ShieldCheck,
    "Well Maintained Cars",
    "Every vehicle is checked and prepared before your booking.",
  ],
  [
    CreditCard,
    "Affordable Prices",
    "Clear rental pricing with no confusing surprises.",
  ],
  [
    Clock3,
    "Easy Online Booking",
    "Select your dates, upload documents and confirm online.",
  ],
  [
    Headphones,
    "24/7 Customer Support",
    "Get assistance before, during and after your rental.",
  ],
  [
    MapPin,
    "Flexible Pickup",
    "Convenient pickup options around Visakhapatnam.",
  ],
  [
    Users,
    "Personal Experience",
    "Drive at your pace with a car chosen for your trip.",
  ],
];

export default function WhyHrrSection() {
  return (
    <section className="bg-[#FAFAF7] py-16 sm:py-20">
      <div className="container-page">

        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <SectionHeading
            eyebrow="Why HRR Travels"
            title="A better way to rent a car"
            text="Everything you need for a smooth and reliable self-drive experience."
          />
        </div>

        {/* Main 50 / 50 Layout */}
        <div
          className="
            mt-10
            grid
            overflow-hidden
            rounded-[1.75rem]
            border
            border-line
            bg-white
            shadow-[0_18px_50px_rgba(11,13,15,0.07)]
            lg:grid-cols-2
          "
        >

          {/* ================= LEFT IMAGE ================= */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="
              relative
              min-h-[300px]
              overflow-hidden
              sm:min-h-[360px]
              lg:min-h-[430px]
            "
          >
            <img
              src="/images/left.png"
              alt="Premium HRR Travels car"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1600ms]
                hover:scale-105
              "
            />

            {/* Subtle image overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-transparent
                to-transparent
              "
            />

            {/* Image label */}
            <div
              className="
                absolute
                bottom-5
                left-5
                rounded-full
                border
                border-white/20
                bg-black/45
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                backdrop-blur-md
                sm:bottom-6
                sm:left-6
              "
            >
              Premium Self Drive
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="
              flex
              flex-col
              justify-center
              p-6
              sm:p-8
              lg:p-9
              xl:p-10
            "
          >

            {/* Small heading */}
            <div className="mb-6">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-goldDark
                "
              >
                Why choose us
              </p>

              <h3
                className="
                  mt-2
                  font-display
                  text-2xl
                  font-bold
                  tracking-tight
                  text-ink
                  sm:text-[28px]
                "
              >
                Designed around
                <span className="text-goldDark"> your journey.</span>
              </h3>
            </div>

            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-2">

              {features.map(
                ([Icon, title, description], index) => (
                  <div
                    key={title}
                    data-aos="fade-up"
                    data-aos-duration="650"
                    data-aos-delay={index * 80}
                    className="
                      group
                      rounded-xl
                      border
                      border-line
                      bg-[#FAFAF7]
                      p-4
                      transition-all
                      duration-400
                      hover:-translate-y-0.5
                      hover:border-gold/40
                      hover:bg-white
                      hover:shadow-[0_10px_28px_rgba(11,13,15,0.06)]
                    "
                  >
                    <div className="flex items-start gap-3">

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-gold/15
                          text-goldDark
                          transition-all
                          duration-300
                          group-hover:bg-gold
                          group-hover:text-ink
                        "
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.9}
                        />
                      </div>

                      {/* Text */}
                      <div>
                        <h4
                          className="
                            font-display
                            text-sm
                            font-bold
                            leading-5
                            text-ink
                          "
                        >
                          {title}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            leading-5
                            text-muted
                          "
                        >
                          {description}
                        </p>
                      </div>

                    </div>
                  </div>
                )
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}