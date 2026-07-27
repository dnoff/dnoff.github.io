import { NAV_LINKS, SITE } from '../data';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background-primary/80 backdrop-blur-md">
      <nav className="container-site flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="font-display text-sm font-semibold tracking-wide sm:text-base">
          {SITE.name}
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
