import type { ContactMethod, NavLink, SocialLink } from '../types';

export const SITE = {
  name: 'David Nissenoff',
  role: 'Gameplay Programmer',
  tagline: 'Unity Developer • Mathematics Graduate • Software Engineer',
  introduction:
    'I build engaging gameplay experiences, software tools, and interactive systems with a passion for polished design and technical problem solving.',
  email: 'mailto:davidin1995@gmail.com',
  resumePath: '/resume.pdf',
} as const;

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/dnoff' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/david-nissenoff-680453133',
  },
];

export const CONTACT_METHODS: ContactMethod[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/dnoff', external: true },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/david-nissenoff-680453133',
    external: true,
  },
  { id: 'email', label: 'Email', href: SITE.email },
  { id: 'resume', label: 'Resume', href: SITE.resumePath },
];
