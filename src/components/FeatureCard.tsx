import { motion, useReducedMotion } from 'framer-motion';
import type { ProjectFeature } from '../types';

type FeatureCardProps = {
  feature: ProjectFeature;
  index?: number;
};

export function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      className="rounded-xl border border-white/10 bg-background-card/80 p-5 shadow-soft"
    >
      <h4 className="font-display text-base font-semibold text-text-primary">{feature.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{feature.description}</p>
    </motion.article>
  );
}
