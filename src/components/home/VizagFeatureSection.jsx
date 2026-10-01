import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function VizagFeatureSection() {
  return (
    <section className="container-page pb-16">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[2rem]
          bg-ink
        "
      >
        {/* Premium Car Image */}
        <img
          src="/images/cta.png"
          alt="Premium car on the Visakhapatnam coast"
          className="
            h-[320px]
            w-full
            object-cover
            object-center
            opacity-100
            transition-transform
            duration-[2s]
            group-hover:scale-105
            sm:h-[400px]
          "
        />

        {/* Dark only on left side */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/80
            via-black/45
            via-55%
            to-transparent
          "
        />

        {/* Content */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            p-7
            sm:p-12
          "
        >
          <div className="max-w-xl text-white">

            {/* Eyebrow */}
            <p
              className="
                inline-flex
                rounded-sm
                bg-gold
                px-2
                py-0.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-ink
              "
            >
              Made for Vizag
            </p>

            {/* Heading */}
            <h2
              className="
                mt-3
                font-display
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              Explore Visakhapatnam
              <br />
              with your{" "}
              <span className="text-gold">
                premium car.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-6
                text-white/80
              "
            >
              From Rushikonda to Araku, pick a car
              that fits your plan and drive on your
              own schedule.
            </p>

            {/* Button */}
            <Link
              to="/cars"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
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
                hover:shadow-[0_10px_30px_rgba(246,185,26,0.25)]
              "
            >
              <span>Explore Cars</span>

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
                  hover:translate-x-1
                "
              >
                <ArrowRight size={14} />
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}