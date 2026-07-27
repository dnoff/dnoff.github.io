export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function scrollToHash(href: string): void {
  if (!href.startsWith('#')) {
    return;
  }

  const target = document.querySelector(href);
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
