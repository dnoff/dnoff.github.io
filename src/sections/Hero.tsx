import { motion, useReducedMotion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { HeroBackground } from '../components/HeroBackground';
import { SITE, SOCIAL_LINKS } from '../data';
import { scrollToHash } from '../utils';

const github = SOCIAL_LINKS.find((link) => link.id === 'github');
const linkedin = SOCIAL_LINKS.find((link) => link.id === 'linkedin');

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden"
      aria-labelledby="home-heading"
    >
      <HeroBackground />

      <div className="container-site relative z-10 w-full pb-20 pt-28 sm:pb-24 sm:pt-32">
        <motion.div
          className="max-w-3xl"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.h1
            id="home-heading"
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="font-display text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            {SITE.name}
          </motion.h1>

          <motion.p
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="mt-4 font-display text-xl font-medium text-accent-secondary sm:text-2xl lg:text-3xl"
          >
            {SITE.role}
          </motion.p>

          <motion.p
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="mt-3 text-sm text-text-muted sm:text-base"
          >
            {SITE.tagline}
          </motion.p>

          <motion.p
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            {SITE.introduction}
          </motion.p>

          <motion.div
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="mt-10 flex flex-wrap gap-3"
          >
            <motion.a
              href={SITE.resumePath}
              className="btn-primary gap-2"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              <FiFileText className="h-4 w-4" aria-hidden />
              Resume
            </motion.a>

            {github ? (
              <motion.a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary gap-2"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                <FiGithub className="h-4 w-4" aria-hidden />
                GitHub
              </motion.a>
            ) : null}

            {linkedin ? (
              <motion.a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary gap-2"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                <FiLinkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </motion.a>
            ) : null}

            <motion.a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToHash('#contact');
              }}
              className="btn-secondary gap-2"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              <FiMail className="h-4 w-4" aria-hidden />
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
