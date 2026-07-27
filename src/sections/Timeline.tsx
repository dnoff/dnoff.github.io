import { motion, useReducedMotion } from 'framer-motion';
import { TIMELINE } from '../data';
import { cn } from '../utils';

export function Timeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="timeline"
      className="section-padding scroll-mt-24"
      aria-labelledby="timeline-heading"
    >
      <div className="container-site">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="badge mb-4">Journey</p>
          <h2 id="timeline-heading" className="heading-section">
            Timeline
          </h2>
          <p className="mt-3 text-base text-text-muted sm:text-lg">
            From mathematics and shipping games to tutoring, teaching, and pursuing gameplay
            programming full-time.
          </p>
        </motion.div>

        <ol className="relative mx-auto mt-12 max-w-2xl lg:mt-16">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent"
            aria-hidden
          />

          {TIMELINE.map((item, index) => {
            const isLast = index === TIMELINE.length - 1;

            return (
              <motion.li
                key={item.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                className="relative flex gap-6 pb-8 last:pb-0"
              >
                <span
                  className="relative z-10 mt-5 h-3.5 w-3.5 shrink-0 rounded-full bg-accent shadow-glow ring-4 ring-background-primary"
                  aria-hidden
                />

                <div
                  className={cn(
                    'flex-1 rounded-xl border border-white/10 bg-background-card/80 p-5 shadow-soft',
                    isLast && 'ring-1 ring-accent/30',
                  )}
                >
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  {item.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
