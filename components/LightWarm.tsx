import Image from "next/image";
import Button from "./Button";
import Parallax from "./Parallax";
import { SLOW_IN_OUT } from "@/lib/easing";
import Reveal from "./Reveal";

const products = [
  {
    name: "Veste polaire à motifs",
    src: "/assets/wl-clothes-1.webp",
    w: 198,
    h: 218,
  },
  {
    name: "Veste polaire grise",
    src: "/assets/wl-clothes-2.webp",
    w: 225,
    h: 218,
  },
  {
    name: "Chemise à carreaux",
    src: "/assets/wl-clothes-3.webp",
    w: 194,
    h: 225,
  },
];

export default function LightWarm() {
  return (
    <section
      id="light-warm"
      className="relative overflow-hidden bg-[#bb2845] text-white"
    >
      {/* Outline of the hero's bottom-right shape, continuing below the hero edge */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Parallax
          range={-160}
          className="absolute -right-[18rem] top-[13rem] -translate-y-full scale-175"
        >
          <Image
            src="/assets/damart-flash-down_outline.svg"
            alt=""
            width={771}
            height={684}
            sizes="38vw"
          />
        </Parallax>
      </div>

      <div className="relative mx-auto grid max-w-[90rem] items-center gap-8 px-6 pt-20 sm:px-10 lg:min-h-[48rem] lg:grid-cols-2 lg:pt-28">
        <div className="pb-28 lg:pb-40">
          <Reveal>
            <h2 className="text-6xl leading-[0.95] text-white lg:text-8xl">
              <span className="block font-light">LIGHT</span>
              <span className="block font-bold">&amp; WARM</span>
            </h2>
            <Image
              className="mt-3 h-auto w-40 sm:absolute sm:mt-0 sm:w-auto sm:-translate-y-5 sm:translate-x-70"
              src="/assets/thermolactyl.svg"
              alt=""
              width={250}
              height={684}
            />
          </Reveal>

          <ul className="my-8 grid max-w-md grid-cols-3 gap-4">
            {products.map((p, i) => (
              <li key={p.name}>
                <Reveal delay={0.1 * i}>
                  <a
                    href="#produit"
                    className="block aspect-square rounded-xl bg-white shadow-sm transition-transform hover:-translate-y-1"
                  >
                    <Image
                      src={p.src}
                      alt={p.name}
                      width={p.w}
                      height={p.h}
                      className="size-full object-contain p-2 scale-125"
                    />
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.3}>
            <Button href="#light-warm-collection">Je découvre</Button>
          </Reveal>
        </div>

        <div className="self-end mx-auto w-64 lg:ml-auto lg:mr-0 lg:w-[30rem]">
          <Reveal x={60} y={0} className="relative aspect-[575/798]">
            <Image
              src="/assets/woman-standalone.webp"
              alt="Pull jacquard Thermolactyl"
              fill
              sizes="(min-width: 64rem) 30rem, 16rem"
              className="object-contain object-bottom"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
