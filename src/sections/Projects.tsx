import { motion, useReducedMotion } from 'framer-motion';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { PROJECTS } from '../data';

export function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="section-padding scroll-mt-24 bg-background-primary"
      aria-labelledby="projects-heading"
    >
      <div className="container-site">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="badge mb-4">Featured Work</p>
          <h2 id="projects-heading" className="heading-section">
            Projects
          </h2>
          <p className="mt-3 text-base text-text-muted sm:text-lg">
            Deep dives into shipped and in-development games — systems, challenges, and the
            decisions behind the gameplay.
          </p>
        </motion.div>

        <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
