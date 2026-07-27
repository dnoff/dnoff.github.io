import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { MediaPlaceholder } from './MediaPlaceholder';
import { TechnologyBadge } from './TechnologyBadge';
import type { Project } from '../types';
import { cn } from '../utils';

type ProjectShowcaseProps = {
  project: Project;
  index?: number;
};

export function ProjectShowcase({ project, index = 0 }: ProjectShowcaseProps) {
  const prefersReducedMotion = useReducedMotion();
  const video = project.media.find((item) => item.type === 'video');
  const screenshots = project.media.filter((item) => item.type === 'screenshot');
  const isInDevelopment = project.status === 'in-development';

  return (
    <motion.article
      id={project.id}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
      className={cn(
        'overflow-hidden rounded-2xl border border-white/10 bg-background-secondary/80 shadow-card',
        isInDevelopment && 'ring-1 ring-accent/30',
      )}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="border-b border-white/10 bg-gradient-to-r from-background-card/80 to-transparent px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  'badge',
                  isInDevelopment
                    ? 'border-accent/40 bg-accent/10 text-accent-secondary'
                    : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
                )}
              >
                {project.statusLabel}
              </span>
              {isInDevelopment ? (
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                  Work in progress — actively shipping systems
                </span>
              ) : null}
            </div>

            <h3
              id={`${project.id}-title`}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-base text-accent-secondary sm:text-lg">{project.tagline}</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechnologyBadge key={tech} label={tech} />
              ))}
            </div>
          </div>

          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={`${project.title} cover art`}
              className="h-28 w-28 shrink-0 rounded-2xl border border-white/10 object-cover shadow-soft sm:h-32 sm:w-32"
            />
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          {video ? <MediaPlaceholder media={video} featured /> : null}
          <div className="grid gap-3 sm:grid-cols-3">
            {screenshots.map((shot) => (
              <MediaPlaceholder key={shot.label} media={shot} />
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div>
            <h4 className="font-display text-lg font-semibold text-text-primary">
              Systems & Features
            </h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-lg border border-white/5 bg-background-card/50 px-3 py-2 text-sm text-text-muted"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {(project.links?.playStore || project.links?.github || project.links?.demo) && (
            <div className="flex flex-wrap gap-3">
              {project.links.playStore ? (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View on Google Play
                </a>
              ) : null}
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Source
                </a>
              ) : null}
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Demo
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 sm:px-8 sm:py-8">
        <h4 className="font-display text-lg font-semibold text-text-primary">Feature Highlights</h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.featureCards.map((feature, featureIndex) => (
            <FeatureCard key={feature.title} feature={feature} index={featureIndex} />
          ))}
        </div>
      </div>

      <div className="grid gap-6 border-t border-white/10 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-3">
        <ProjectNotes title="Development Notes" items={project.developmentNotes} />
        <ProjectNotes title="Challenges" items={project.challenges} />
        <ProjectNotes title="Lessons Learned" items={project.lessons} />
      </div>
    </motion.article>
  );
}

type ProjectNotesProps = {
  title: string;
  items: string[];
};

function ProjectNotes({ title, items }: ProjectNotesProps) {
  return (
    <div>
      <h4 className="font-display text-base font-semibold text-text-primary">{title}</h4>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-text-muted">
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
