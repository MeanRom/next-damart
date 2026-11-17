import Image from "next/image";
import Button from "./Button";
import Parallax from "./Parallax";
import { SLOW_IN_OUT } from "@/lib/easing";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="nouvelle-collection"
      className="relative isolate flex min-h-[85dvh] items-end overflow-hidden lg:aspect-[16/9] lg:min-h-0 lg:items-center"
    >
      <Image
        src="/assets/room-wood-woman.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      {/* Decorative red shapes, clipped to the hero */}
      <div className="absolute inset-0 overflow-hidden">
        <Parallax
          range={160}
          className="absolute -left-10 top-4 -z-10 w-40 lg:-left-[20rem] lg:top-[3rem] lg:w-auto lg:scale-175"
        >
          <Reveal x={-120} y={0} delay={0.25} duration={1} ease={SLOW_IN_OUT}>
            <Image
              src="/assets/damart-flash-up.svg"
              alt=""
              width={596}
              height={771}
              sizes="34vw"
              priority
            />
          </Reveal>
        </Parallax>
        <Parallax
          range={-160}
          className="absolute -bottom-6 -right-10 -z-10 w-48 lg:-bottom-[18rem] lg:-right-[18rem] lg:w-auto lg:scale-175"
        >
          <Reveal x={120} y={0} delay={0.45} duration={1} ease={SLOW_IN_OUT}>
            <Image
              src="/assets/damart-flash-down.svg"
              alt=""
              width={771}
              height={684}
              sizes="38vw"
              priority
            />
          </Reveal>
        </Parallax>
      </div>

      {/* Big = slow, small = fast: background still, text 90, shapes 160 */}
      <Parallax
        range={90}
        className="relative z-10 ml-auto w-full px-6 pb-10 text-white lg:w-[42%] lg:px-0 lg:pb-0"
      >
        <Reveal x={40} y={0} duration={0.6}>
          <h1 className="text-4xl leading-tight lg:text-6xl">
            <span className="block font-light">NOUVELLE</span>
            <span className="block font-bold">COLLECTION</span>
          </h1>
          <p className="mb-6 mt-4 text-lg">
            Quand style et confort
            <br />
            vous font aimer l&apos;automne
          </p>
          <Button href="#nouveautes">Je découvre les nouveautés</Button>
        </Reveal>
      </Parallax>
    </section>
  );
}
