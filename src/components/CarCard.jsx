import { Link } from "react-router-dom";
import {
  Heart,
  Fuel,
  Users,
  Gauge,
  ArrowRight,
} from "lucide-react";

export default function CarCard({ car, compact = false }) {
  return (
    <article
      data-aos="fade-up"
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden

        rounded-[1.5rem]

        border
        border-line

        bg-white

        shadow-[0_8px_30px_rgba(0,0,0,0.05)]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:border-gold/30
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]
      "
    >

      {/* =========================================================
          IMAGE
      ========================================================= */}

      <div
        className={`
          relative
          overflow-hidden
          bg-[#F4F4F1]

          ${compact ? "h-40" : "h-52"}
        `}
      >

        <img
          src={car.image}
          alt={car.name}
          className="
            h-full
            w-full
            object-cover

            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.07]
          "
        />


        {/* Image overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-24

            bg-gradient-to-t
            from-black/25
            to-transparent

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        />


        {/* =======================================================
            HEART BUTTON
        ======================================================= */}

        <button
          type="button"
          aria-label={`Add ${car.name} to favorites`}
          className="
            absolute
            right-3
            top-3

            grid
            h-9
            w-9
            place-items-center

            rounded-full

            border
            border-white/60

            bg-white/90

            text-ink

            shadow-[0_5px_20px_rgba(0,0,0,.12)]

            backdrop-blur-sm

            transition-all
            duration-300

            hover:scale-110
            hover:bg-gold
            hover:text-ink
          "
        >
          <Heart size={15} strokeWidth={2} />
        </button>


        {/* =======================================================
            BEST SELLER
        ======================================================= */}

        {car.id === "swift-vxi" && (
          <span
            className="
              absolute
              left-3
              top-3

              rounded-full

              border
              border-white/20

              bg-gold

              px-3
              py-1.5

              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.12em]

              text-ink

              shadow-[0_5px_20px_rgba(0,0,0,.12)]
            "
          >
            Best Seller
          </span>
        )}

      </div>


      {/* =========================================================
          CARD CONTENT
      ========================================================= */}

      <div
        className="
          flex
          min-h-[255px]
          flex-1
          flex-col

          p-5
        "
      >

        {/* =======================================================
            TITLE + PRICE
        ======================================================= */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-3
          "
        >

          {/* Car information */}

          <div className="min-w-0">

            <h3
              className="
                line-clamp-1

                font-display
                text-[17px]
                font-bold
                leading-6
                tracking-tight
                text-ink
              "
            >
              {car.name}
            </h3>

            <p
              className="
                mt-1

                text-xs
                font-medium

                text-muted
              "
            >
              {car.brand} <span className="mx-1 text-black/20">•</span> {car.year}
            </p>

          </div>


          {/* Price */}

          <div
            className="
              shrink-0
              text-right
            "
          >

            <div
              className="
                font-display
                text-[18px]
                font-extrabold
                leading-5
                text-goldDark
              "
            >
              ₹{car.price.toLocaleString("en-IN")}
            </div>

            <div
              className="
                mt-1
                text-[9px]
                font-medium
                uppercase
                tracking-wider
                text-muted
              "
            >
              per day
            </div>

          </div>

        </div>


        {/* =======================================================
            SPECS
        ======================================================= */}

        <div
          className="
            mt-5

            grid
            grid-cols-3

            divide-x
            divide-line

            border-y
            border-line

            py-3
          "
        >

          {/* Seats */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-1
              px-1
            "
          >

            <Users
              size={14}
              className="text-goldDark"
            />

            <span
              className="
                text-[10px]
                font-semibold
                text-muted
              "
            >
              {car.seats} Seats
            </span>

          </div>


          {/* Transmission */}

          <div
            className="
              flex
              min-w-0
              flex-col
              items-center
              justify-center
              gap-1
              px-1
            "
          >

            <Gauge
              size={14}
              className="text-goldDark"
            />

            <span
              className="
                max-w-full
                truncate

                text-[10px]
                font-semibold
                text-muted
              "
              title={car.transmission}
            >
              {car.transmission}
            </span>

          </div>


          {/* Fuel */}

          <div
            className="
              flex
              min-w-0
              flex-col
              items-center
              justify-center
              gap-1
              px-1
            "
          >

            <Fuel
              size={14}
              className="text-goldDark"
            />

            <span
              className="
                max-w-full
                truncate

                text-[10px]
                font-semibold
                text-muted
              "
              title={car.fuel}
            >
              {car.fuel}
            </span>

          </div>

        </div>


        {/* =======================================================
            VIEW DETAILS
            mt-auto keeps every button aligned
        ======================================================= */}

        <div className="mt-auto pt-5">

          <Link
            to={`/cars/${car.id}`}
            className="
              group/button

              flex
              w-full
              items-center
              justify-center
              gap-2

              rounded-full

              bg-ink

              px-5
              py-3

              text-[13px]
              font-bold

              text-white

              shadow-[0_6px_20px_rgba(0,0,0,.08)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-gold
              hover:text-ink
              hover:shadow-[0_10px_28px_rgba(246,185,26,.22)]
            "
          >

            <span>
              View Details
            </span>


            {/* Round arrow */}

            <span
              className="
                grid
                h-7
                w-7
                shrink-0
                place-items-center

                rounded-full

                bg-gold

                text-ink

                transition-all
                duration-300

                group-hover/button:bg-ink
                group-hover/button:text-gold
                group-hover/button:translate-x-0.5
              "
            >
              <ArrowRight size={13} />
            </span>

          </Link>

        </div>

      </div>

    </article>
  );
}