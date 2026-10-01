import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import { cars } from "../../data/cars";
import CarCard from "../CarCard";
import SectionHeading from "../SectionHeading";

export default function PopularCarsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-cream
        py-20
        sm:py-24
        lg:py-28
      "
    >

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-72
          w-72
          rounded-full
          bg-gold/5
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-10
          h-64
          w-64
          rounded-full
          bg-black/5
          blur-[100px]
        "
      />


      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="container-page relative z-10">


        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="120"
          className="
            mb-10
            flex
            flex-col
            gap-6

            lg:mb-12
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* LEFT */}

          <div>

            {/* Eyebrow */}

            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="
                mb-4
                flex
                items-center
                gap-2
              "
            >

              <span
                className="
                  grid
                  h-7
                  w-7
                  place-items-center

                  rounded-full

                  bg-gold/15
                  text-goldDark
                "
              >
                <Sparkles size={13} />
              </span>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-goldDark
                "
              >
                Our Fleet
              </span>

            </div>


            {/* Title */}

            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="
                max-w-2xl

                font-display
                text-3xl
                font-bold
                leading-tight
                tracking-[-0.035em]
                text-ink

                sm:text-4xl

                lg:text-5xl
              "
            >
              Choose your ride.
              <span className="text-goldDark">
                {" "}Drive your way.
              </span>
            </h2>


            {/* Description */}

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="
                mt-4
                max-w-2xl

                text-sm
                leading-6
                text-muted

                sm:text-[15px]
                sm:leading-7
              "
            >
              Explore our most popular self-drive cars,
              selected for comfort, reliability and
              everyday adventures around Visakhapatnam.
            </p>

          </div>


          {/* =====================================================
              DESKTOP VIEW ALL BUTTON
          ===================================================== */}

          <Link
            to="/cars"
            data-aos="fade-left"
            data-aos-delay="300"
            className="
              group
              hidden
              shrink-0
              items-center
              gap-3

              rounded-full

              border
              border-ink/10

              bg-white

              px-5
              py-3

              text-[13px]
              font-bold

              text-ink

              shadow-[0_8px_30px_rgba(0,0,0,.05)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-gold
              hover:bg-gold
              hover:shadow-[0_12px_35px_rgba(246,185,26,.18)]

              sm:inline-flex
            "
          >

            <span>
              View All Cars
            </span>

            <span
              className="
                grid
                h-7
                w-7
                place-items-center

                rounded-full

                bg-ink

                text-white

                transition-all
                duration-300

                group-hover:bg-ink
                group-hover:text-gold
                group-hover:translate-x-0.5
              "
            >
              <ArrowRight size={14} />
            </span>

          </Link>

        </div>


        {/* =========================================================
            CAR GRID
        ========================================================= */}

        <div
          className="
            grid
            gap-5

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {cars.slice(0, 4).map((car, index) => (

            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={100 + index * 120}
              data-aos-offset="100"
              className="
                h-full

                transition-transform
                duration-500
              "
            >

              <div
                className="
                  h-full

                  transition-all
                  duration-500

                  hover:-translate-y-2
                "
              >

                <CarCard
                  car={car}
                />

              </div>

            </div>

          ))}

        </div>


        {/* =========================================================
            MOBILE VIEW ALL
        ========================================================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-8 sm:hidden"
        >

          <Link
            to="/cars"
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-3

              rounded-full

              bg-ink

              px-6
              py-3.5

              text-sm
              font-bold

              text-white

              shadow-[0_10px_30px_rgba(0,0,0,.10)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#171A1D]
            "
          >

            View All Cars

            <span
              className="
                grid
                h-6
                w-6
                place-items-center

                rounded-full

                bg-gold
                text-ink

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              <ArrowRight size={13} />
            </span>

          </Link>

        </div>


        {/* =========================================================
            BOTTOM TRUST LINE
        ========================================================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-2

            text-[10px]
            font-medium
            uppercase
            tracking-[0.12em]
            text-muted

            sm:mt-12
          "
        >

          <span>
            Clean & Maintained
          </span>

          <span
            className="
              hidden
              h-1
              w-1
              rounded-full
              bg-gold

              sm:block
            "
          />

          <span>
            Transparent Pricing
          </span>

          <span
            className="
              hidden
              h-1
              w-1
              rounded-full
              bg-gold

              sm:block
            "
          />

          <span>
            Easy Booking
          </span>

        </div>

      </div>

    </section>
  );
}