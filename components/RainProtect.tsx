import Image from "next/image";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function RainProtect() {
  return (
    <section
      id="rain"
      className="relative z-10 -mt-10 bg-[linear-gradient(to_bottom,transparent_5rem,white_5rem)] px-0 pb-8 sm:px-6 lg:pb-16"
    >
      <Parallax
        range={30}
        className="mx-auto max-w-4xl hover:scale-103 transition-all duration-50"
      >
        <Reveal className="relative aspect-[4/3] overflow-hidden sm:aspect-[1716/713] sm:rounded-[2.5rem]">
          <Image
            src="/assets/rain-protection.webp"
            alt="Veste Rain Protect by Damart"
            fill
            sizes="(min-width: 56rem) 56rem, 100vw"
            className="object-cover"
          />

          <Parallax range={60} className="absolute inset-y-[4%] left-0 w-[32%]">
            <div className="relative size-full overflow-hidden rounded-r-3xl border-4 border-l-0 border-white">
              <Image
                src="/assets/bagpack.webp"
                alt="Sac à dos imperméable"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </Parallax>

          <Parallax
            range={110}
            className="absolute left-[46%] top-[40%] w-[22%]"
          >
            <Reveal delay={0.2}>
              <Image
                src="/assets/rain-protection-by-damart.webp"
                alt="Rain Protect by Damart"
                width={754}
                height={579}
                sizes="20vw"
              />
            </Reveal>
          </Parallax>

          <a
            href="/rain-protection"
            aria-label="Découvrir Rain Protect"
            className="absolute bottom-[6%] right-[4%] grid size-12 place-items-center rounded-full text-white ring-2 ring-white transition-transform duration-300 focus-visible:scale-125 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-amber-400 sm:size-14"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5 sm:size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>
      </Parallax>
    </section>
  );
}
