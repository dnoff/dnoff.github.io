import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useId, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NAV_LINKS, SITE } from '../data';
import { useActiveSection, useBodyScrollLock, useMediaQuery, useScrollPosition } from '../hooks';
import { cn, scrollToHash } from '../utils';

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const scrollY = useScrollPosition();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const activeSection = useActiveSection(SECTION_IDS);
  const isScrolled = scrollY > 24;

  useBodyScrollLock(isMenuOpen && !isDesktop);

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    scrollToHash(href);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-background-primary/85 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container-site flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick('#home');
          }}
          className="font-display text-sm font-semibold tracking-wide text-text-primary transition-colors hover:text-accent-secondary sm:text-base"
        >
          {SITE.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(link.href);
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
                    isActive ? 'text-text-primary' : 'text-text-muted hover:text-text-primary',
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-background-card/60 text-text-primary transition-colors hover:border-accent/40 md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <HiX className="h-5 w-5" aria-hidden />
          ) : (
            <HiMenuAlt3 className="h-5 w-5" aria-hidden />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && !isDesktop ? (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-white/10 bg-background-primary/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-site flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link, index) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavClick(link.href);
                      }}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'block rounded-lg px-3 py-3 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-accent/10 text-text-primary'
                          : 'text-text-muted hover:bg-white/5 hover:text-text-primary',
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
