import Image from "next/image";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nouvelle collection", href: "#nouvelle-collection" },
  { label: "Catalogues", href: "#catalogues" },
];

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
        <ul className="flex items-center gap-4 text-sm font-medium sm:gap-6">
          {links.map((l) => (
            <li key={l.href} className="hidden sm:block">
              <a href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#compte" aria-label="Mon compte">
              <svg {...iconProps}>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#panier" aria-label="Panier">
              <svg {...iconProps}>
                <path d="M3 4h2l2.5 11h10L20 7H6.5" />
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="17" cy="19" r="1.5" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
