import { SectionPlaceholder } from '../components';
import { SITE } from '../data';

export function Hero() {
  return (
    <section
      id="home"
      className="section-padding scroll-mt-24 pt-28 sm:pt-32"
      aria-labelledby="home-heading"
    >
      {' '}
      <div className="container-site">
        <div className="glass-panel p-8 sm:p-12">
          <p className="badge mb-4">Architecture ready</p>
          <h1 id="home-heading" className="heading-display">
            {SITE.name}
          </h1>
          <p className="mt-3 text-xl text-accent-secondary sm:text-2xl">{SITE.role}</p>
          <p className="mt-2 text-sm text-text-muted sm:text-base">{SITE.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {SITE.introduction}
          </p>
          <p className="mt-8 text-sm text-text-muted">
            Hero polish, motion, and CTAs arrive in Milestone 5.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <SectionPlaceholder
      id="projects"
      title="Projects"
      description="Steam-style featured project pages for Racer and Slay the Streamer will be built in Milestone 6."
    />
  );
}

export function Skills() {
  return (
    <SectionPlaceholder
      id="skills"
      title="Skills"
      description="Animated skill cards for programming, game development, and tools will land after Projects."
    />
  );
}

export function Timeline() {
  return (
    <SectionPlaceholder
      id="timeline"
      title="Timeline"
      description="Career and education journey from Occidental College to seeking a gameplay programming role."
    />
  );
}

export function About() {
  return (
    <SectionPlaceholder
      id="about"
      title="About"
      description="Professional biography covering mathematics, tutoring, gameplay programming, and continuous learning."
    />
  );
}

export function Contact() {
  return (
    <SectionPlaceholder
      id="contact"
      title="Contact"
      description="GitHub, LinkedIn, email, and resume download will be wired here once content links are finalized."
    />
  );
}
