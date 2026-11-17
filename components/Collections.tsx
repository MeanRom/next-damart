import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";

type Collection = {
  id: string;
  name: string;
  text: string;
  image: string;
  alt: string;
  /** Image on the right and text right-aligned. */
  flip?: boolean;
};

const collections: Collection[] = [
  {
    id: "chaussures",
    name: "CHAUSSURES",
    text: "Parce que l'allure se joue aussi dans les détails, nos chaussures apportent la touche finale à vos looks de mi-saison, entre style et confort !",
    image: "/assets/chaussures.webp",
    alt: "Escarpins à carreaux",
  },
  {
    id: "nuit",
    name: "NUIT",
    text: "Des ensembles de nuit pensés pour allier confort et style, du coucher au réveil.",
    image: "/assets/collection-nuit.webp",
    alt: "Couple en pyjama à carreaux",
    flip: true,
  },
];

function CollectionCard({ c }: { c: Collection }) {
  return (
    <article
      id={c.id}
      className={`flex flex-col items-center gap-8 sm:flex-row sm:gap-12 ${
        c.flip
          ? "sm:flex-row-reverse sm:self-end sm:text-right"
          : "sm:self-start"
      }`}
    >
      <Reveal
        x={c.flip ? 60 : -60}
        y={0}
        className="w-full max-w-[16rem] shrink-0 sm:max-w-xs"
      >
        <Image
          src={c.image}
          alt={c.alt}
          width={411}
          height={524}
          sizes="20rem"
          className="h-auto w-full rounded-3xl"
        />
      </Reveal>

      <Reveal
        delay={0.2}
        className={`flex max-w-sm flex-col gap-4 ${c.flip ? "sm:items-end" : "sm:items-start"}`}
      >
        <h2 className="text-3xl leading-tight lg:text-4xl">
          <span className="block font-light">COLLECTION</span>
          <span className="block font-bold">{c.name}</span>
        </h2>
        <p className="text-sm">{c.text}</p>
        <Button href={`#${c.id}-collection`}>Je découvre</Button>
      </Reveal>
    </article>
  );
}

export default function Collections() {
  return (
    <section
      id="collections"
      className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-20 pt-12 sm:px-10 lg:gap-8 lg:pt-20"
    >
      {collections.map((c) => (
        <CollectionCard key={c.id} c={c} />
      ))}
    </section>
  );
}
