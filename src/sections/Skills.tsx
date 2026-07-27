import { motion, useReducedMotion } from 'framer-motion';
import { SkillCard } from '../components/SkillCard';
import { SKILL_CATEGORIES } from '../data';

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="section-padding scroll-mt-24 bg-background-secondary/40"
      aria-labelledby="skills-heading"
    >
      <div className="container-site">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="badge mb-4">Toolkit</p>
          <h2 id="skills-heading" className="heading-section">
            Skills
          </h2>
          <p className="mt-3 text-base text-text-muted sm:text-lg">
            Languages, engines, and tools I use to ship gameplay systems and polished software.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
