type Props = {
  href?: string;
  children: string;
  /** "light" is a white pill with purple text, for dark backgrounds. */
  variant?: "dark" | "light";
};

const variants = {
  dark: "bg-black text-white hover:bg-neutral-800",
  light: "bg-white text-[#2f2a6b] hover:bg-neutral-100",
};

/** Black pill button with a circled arrow. */
export default function Button({
  href = "#",
  children,
  variant = "dark",
}: Props) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-5 pr-2 text-xs font-medium uppercase transition ${variants[variant]} focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-amber-400 sm:text-sm`}
    >
      {children}
      <span className="grid size-8 place-items-center rounded-full border border-current transition-transform group-hover:translate-x-1">
        <svg
          viewBox="0 0 24 24"
          className="size-4"
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
      </span>
    </a>
  );
}
