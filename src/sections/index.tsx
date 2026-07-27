export { Hero } from './Hero';
export { Projects } from './Projects';

import { SectionPlaceholder } from '../components';

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
