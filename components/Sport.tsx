import Image from "next/image";
import Button from "./Button";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function Sport() {
  return (
    <section id="sport" className="relative z-10 bg-[#2f2a6b] text-white">
      {/* White tab hanging from the previous section; its top half blends into the white above */}
      <Image
        src="/assets/top-empty-card.svg"
        alt=""
        width={1200}
        height={150}
        className="pointer-events-none absolute md:block hidden left-1/2 top-0 w-[90%] max-w-6xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative flex min-h-[38rem] items-center justify-center overflow-hidden px-6 pb-[18rem] pt-24 sm:pb-[24rem] lg:min-h-[46rem] lg:pb-24">
        {/* Outline accent: small = faster than the people */}
        <Parallax
          range={120}
          className="absolute -bottom-[11rem] left-[60%] w-[40%] lg:left-[50rem] lg:w-[30%]"
        >
          <Reveal y={60} duration={0.8}>
            <Image
              src="/assets/damart-flash-down_outline.svg"
              alt=""
              width={771}
              height={684}
              sizes="30vw"
            />
          </Reveal>
        </Parallax>

        <Reveal
          x={-60}
          y={0}
          duration={0.7}
          className="absolute bottom-0 left-0 w-[52%] max-w-[13rem] sm:max-w-[16rem] lg:max-w-[26rem] lg:left-[14rem] lg:w-[30%]"
        >
          <Image
            src="/assets/sport-man.webp"
            alt="Homme en tenue de sport noire"
            width={513}
            height={761}
            sizes="26rem"
            className="h-auto w-full"
          />
        </Reveal>

        <Reveal
          x={60}
          y={0}
          delay={0.15}
          duration={0.7}
          className="absolute bottom-0 right-[6rem] w-[34%] max-w-[9rem] sm:max-w-[11rem] lg:max-w-[16rem] lg:right-[16rem] lg:w-[18%]"
        >
          <Image
            src="/assets/sport-woman.webp"
            alt="Femme en tenue de sport noire"
            width={387}
            height={640}
            sizes="16rem"
            className="h-auto w-full"
          />
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative flex max-w-md flex-col items-start gap-6 lg:ml-12"
        >
          <h2 className="text-5xl leading-none lg:text-7xl">
            <span className="block font-light">DAMART</span>
            <span className="block font-bold">SPORT</span>
          </h2>
          <p className="text-sm">
            Spécialement conçu pour vos activités sportives <br /> intenses
            outdoor ou indoor
          </p>
          <Button href="#sport-collection" variant="light">
            Je découvre
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
