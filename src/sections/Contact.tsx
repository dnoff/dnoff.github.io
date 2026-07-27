import { motion, useReducedMotion } from 'framer-motion';
import { FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { CONTACT_METHODS, SITE } from '../data';

const CONTACT_ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  resume: FiFileText,
} as const;

export function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="section-padding scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="badge mb-4">Contact</p>
          <h2 id="contact-heading" className="heading-section">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted sm:text-lg">
            Open to gameplay programming roles and collaborations. Reach out through any of the
            channels below — I&apos;d love to talk about games, systems, and opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
          className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          {CONTACT_METHODS.map((method, index) => {
            const Icon = CONTACT_ICONS[method.id as keyof typeof CONTACT_ICONS] ?? FiMail;
            const isResume = method.id === 'resume';

            return (
              <motion.a
                key={method.id}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                download={isResume ? true : undefined}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-background-card/80 p-5 shadow-soft transition-colors hover:border-accent/40 hover:shadow-glow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-background-secondary text-accent-secondary transition-colors group-hover:border-accent/30">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-left">
                  <span className="block font-display text-base font-semibold text-text-primary">
                    {method.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-text-muted">
                    {method.id === 'email'
                      ? SITE.email.replace('mailto:', '')
                      : method.id === 'resume'
                        ? 'Download PDF'
                        : 'Open profile'}
                  </span>
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
