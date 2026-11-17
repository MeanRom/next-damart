import Image from "next/image";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nouvelle collection", href: "#nouvelle-collection" },
  { label: "Catalogues", href: "#catalogues" },
];

// 44px tap target on touch screens, icon-sized from sm up
const tap = "grid size-11 place-items-center sm:size-auto";

const iconProps = {
  viewBox: "0 0 24 24",
  className: "size-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
};

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white">
      <nav
        className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-4 sm:px-10"
        aria-label="Main"
      >
        <a href="#accueil" aria-label="Damart – accueil">
          <Image
            src="/logo.svg"
            alt="Damart"
            width={161}
            height={26}
            className="h-6 w-auto sm:h-7"
            priority
          />
        </a>
        <ul className="flex items-center gap-1 text-sm font-medium sm:gap-6">
          {links.map((l) => (
            <li key={l.href} className="hidden sm:block">
              <a href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#compte" aria-label="Mon compte" className={tap}>
              <svg {...iconProps}>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#panier" aria-label="Panier" className={tap}>
              <svg {...iconProps}>
                <path d="M3 4h2l2.5 11h10L20 7H6.5" />
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="17" cy="19" r="1.5" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile menu: native <details>, no JS */}
      <details className="group border-t border-neutral-200 sm:hidden">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between px-6 text-sm font-medium [&::-webkit-details-marker]:hidden">
          Menu
          <span className="text-lg leading-none transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <ul className="flex flex-col border-t border-neutral-200 px-6 pb-2 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block py-3">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </header>
  );
}
