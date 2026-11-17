import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";

// Cover in front, pages stacked behind it. Each page is shifted right by
// `--gap` × its index, and hovering the book widens `--gap`.
const pages = [
  {
    src: "/assets/ecatalogue/cover.webp",
    alt: "Couverture du catalogue Damart",
    w: 860,
    cls: "z-40",
  },
  {
    src: "/assets/ecatalogue/page-1.webp",
    alt: "Page 1",
    w: 840,
    cls: "z-30 translate-x-[calc(var(--gap)*1)]",
  },
  {
    src: "/assets/ecatalogue/page-2.webp",
    alt: "Page 2",
    w: 813,
    cls: "z-20 translate-x-[calc(var(--gap)*2)]",
  },
  {
    src: "/assets/ecatalogue/page-3.webp",
    alt: "Page 3",
    w: 818,
    cls: "z-10 translate-x-[calc(var(--gap)*3)]",
  },
];

function Book() {
  return (
    <a
      href="#catalogue-download"
      aria-label="Feuilleter le catalogue"
      className="group relative block aspect-[860/1091] w-48 [--gap:0.6rem] focus-visible:outline-4 focus-visible:outline-offset-8 focus-visible:outline-amber-400 sm:w-60 sm:hover:[--gap:2.5rem] sm:focus-visible:[--gap:2.5rem]"
    >
      {pages.map((p) => (
        <Image
          key={p.src}
          src={p.src}
          alt={p.alt}
          width={p.w}
          height={1091}
          sizes="15rem"
          className={`absolute left-0 top-0 h-full w-auto shadow-lg transition-transform duration-500 ease-in-out ${p.cls}`}
        />
      ))}
    </a>
  );
}

export default function Catalogue() {
  return (
    <section
      id="catalogues"
      className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-12 px-6 py-24 sm:flex-row sm:px-10 lg:py-32"
    >
      <Reveal className="flex flex-col items-start gap-4">
        <h2 className="text-3xl leading-tight lg:text-4xl">
          <span className="block font-light">NOUVEAU</span>
          <span className="block font-bold">E-CATALOGUE</span>
        </h2>
        <p className="max-w-xs text-sm">
          Découvrez notre dernier catalogue interactif
        </p>
        <Button href="#catalogue-download">Je télécharge</Button>
      </Reveal>

      {/* Right padding leaves room for the pages to fan out on hover */}
      <Reveal x={60} y={0} delay={0.2} className="pr-12 sm:pr-24">
        <Book />
      </Reveal>
    </section>
  );
}
