import { motion, useReducedMotion } from 'framer-motion';
import { SITE } from '../data';

const HIGHLIGHTS = [
  'Mathematics degree with a Computer Science minor',
  '10+ years tutoring and mentoring students',
  'Gameplay programming and interactive systems focus',
  'Strong foundation in software architecture and problem solving',
  'Continuous learner building shipped and in-progress games',
];

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="section-padding scroll-mt-24 bg-background-secondary/40"
      aria-labelledby="about-heading"
    >
      <div className="container-site">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <p className="badge mb-4">About</p>
            <h2 id="about-heading" className="heading-section">
              Building systems that feel good to play
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted sm:text-lg">
              <p>
                I&apos;m {SITE.name}, a gameplay programmer and software engineer with a mathematics
                degree and a computer science minor. I care about the intersection of elegant
                systems, player feel, and technical problem solving.
              </p>
              <p>
                Across more than a decade of tutoring, I&apos;ve learned how to break difficult
                problems into clear steps — the same habit I bring to gameplay architecture, tools,
                and debugging complex interactive systems.
              </p>
              <p>
                Whether shipping a published mobile game or iterating on a roguelite combat loop, I
                focus on polished design, maintainable code, and continuous learning.
              </p>
            </div>
          </motion.div>

          <motion.ul
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="space-y-3"
          >
            {HIGHLIGHTS.map((item, index) => (
              <motion.li
                key={item}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-xl border border-white/10 bg-background-card/80 px-4 py-3 text-sm text-text-muted shadow-soft"
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
