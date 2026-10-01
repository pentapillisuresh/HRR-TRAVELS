import SectionHeading from "../SectionHeading";
import {
  Search,
  CarFront,
  CreditCard,
  KeyRound,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Search a Car",
    description:
      "Choose your location, dates and preferred vehicle.",
    icon: Search,
  },
  {
    number: "02",
    title: "Select Your Car",
    description:
      "Compare pricing, features, seats and transmission.",
    icon: CarFront,
  },
  {
    number: "03",
    title: "Make Payment",
    description:
      "Complete your booking with secure online payment.",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Pick Up & Drive",
    description:
      "Collect the car and enjoy your journey.",
    icon: KeyRound,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-page relative z-10">
        {/* Heading */}
        <div data-aos="fade-up" data-aos-duration="800">
          <SectionHeading
            eyebrow="Simple Process"
            title="How It Works"
            text="From choosing your car to hitting the road, everything is simple."
          />
        </div>

        {/* Steps */}
        <div className="relative mt-14 sm:mt-16">
          {/* Connecting line - desktop */}
          <div
            className="
              pointer-events-none
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[38px]
              hidden
              h-px
              bg-line
              md:block
            "
          >
            <div
              className="
                absolute
                left-0
                top-0
                h-px
                w-full
                origin-left
                bg-gradient-to-r
                from-gold/20
                via-gold
                to-gold/20
              "
            />
          </div>

          <div className="grid gap-6 md:grid-cols-4 md:gap-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 130}
                  className="group relative"
                >
                  {/* Number / Icon */}
                  <div className="relative z-10 flex justify-center">
                    <div
                      className="
                        relative
                        flex
                        h-[76px]
                        w-[76px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-line
                        bg-white
                        shadow-[0_8px_30px_rgba(11,13,15,0.07)]
                        transition-all
                        duration-500
                        ease-out
                        group-hover:-translate-y-1
                        group-hover:border-gold
                        group-hover:shadow-[0_15px_40px_rgba(246,185,26,0.18)]
                      "
                    >
                      {/* Gold ring */}
                      <div
                        className="
                          absolute
                          inset-[5px]
                          rounded-full
                          border
                          border-gold/15
                          transition-all
                          duration-500
                          group-hover:inset-[3px]
                          group-hover:border-gold/50
                        "
                      />

                      {/* Icon */}
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                        className="
                          relative
                          z-10
                          text-ink
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:text-goldDark
                        "
                      />

                      {/* Number */}
                      <span
                        className="
                          absolute
                          -right-2
                          -top-2
                          flex
                          h-7
                          min-w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white
                          bg-ink
                          px-1.5
                          font-display
                          text-[9px]
                          font-bold
                          tracking-wider
                          text-gold
                          shadow-sm
                          transition-all
                          duration-500
                          group-hover:bg-gold
                          group-hover:text-ink
                        "
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="
                      mt-7
                      rounded-[1.5rem]
                      border
                      border-transparent
                      px-5
                      py-6
                      text-center
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:border-line
                      group-hover:bg-[#FAFAF7]
                      group-hover:shadow-[0_15px_45px_rgba(11,13,15,0.06)]
                    "
                  >
                    <h3
                      className="
                        font-display
                        text-lg
                        font-bold
                        tracking-tight
                        text-ink
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mx-auto
                        mt-3
                        max-w-[230px]
                        text-sm
                        leading-6
                        text-muted
                      "
                    >
                      {step.description}
                    </p>

                    {/* Step arrow */}
                    {index < steps.length - 1 && (
                      <div
                        className="
                          mt-5
                          hidden
                          justify-center
                          md:flex
                          opacity-0
                          transition-all
                          duration-500
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      >
                        <ArrowRight
                          size={16}
                          className="text-goldDark"
                        />
                      </div>
                    )}
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div
                      className="
                        absolute
                        bottom-[-24px]
                        left-1/2
                        h-6
                        w-px
                        -translate-x-1/2
                        bg-gradient-to-b
                        from-gold
                        to-line
                        md:hidden
                      "
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom reassurance */}
        <div
          data-aos="fade-up"
          data-aos-delay="550"
          className="
            mx-auto
            mt-14
            flex
            max-w-fit
            items-center
            gap-2
            rounded-full
            border
            border-line
            bg-cream
            px-4
            py-2
            text-[11px]
            font-medium
            text-muted
            shadow-sm
            sm:mt-16
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span>Simple booking. Premium driving experience.</span>
        </div>
      </div>
    </section>
  );
}