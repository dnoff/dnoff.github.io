import { SITE, SOCIAL_LINKS } from '../data';
import { scrollToHash } from '../utils';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background-secondary">
      <div className="container-site flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-text-muted">
          © {year} {SITE.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            scrollToHash('#home');
          }}
          className="text-sm text-accent transition-colors hover:text-accent-secondary"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
