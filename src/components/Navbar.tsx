import { Mail } from "lucide-react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-signal text-sm font-bold text-background">
            TR
          </span>
          <span className="hidden sm:inline">Tuti Rahmawati</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:tuti.rahmawati.id@gmail.com"
          className="inline-flex items-center gap-2 rounded-md border border-signal/50 px-3.5 py-2 text-sm font-medium text-signal transition-colors hover:bg-signal hover:text-background"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
