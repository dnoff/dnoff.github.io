import { motion, useReducedMotion } from 'framer-motion';

/**
 * Full-bleed animated gradient plane.
 * Replace the gradient layers with a <video> or gameplay capture later
 * without changing the Hero composition.
 */
export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-background-primary" />

      <motion.div
        className="absolute -left-1/4 top-[-20%] h-[70%] w-[70%] rounded-full bg-accent/20 blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 40, -20, 0],
                y: [0, 30, -10, 0],
                scale: [1, 1.08, 0.96, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -right-1/4 bottom-[-10%] h-[65%] w-[65%] rounded-full bg-accent-secondary/15 blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -30, 25, 0],
                y: [0, -25, 15, 0],
                scale: [1, 0.94, 1.06, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.15)_0%,rgba(11,17,32,0.85)_70%,rgba(11,17,32,1)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background-primary to-transparent" />
    </div>
  );
}
