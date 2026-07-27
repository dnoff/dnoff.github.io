import { FiImage, FiPlay } from 'react-icons/fi';
import type { ProjectMedia } from '../types';
import { cn } from '../utils';

type MediaPlaceholderProps = {
  media: ProjectMedia;
  featured?: boolean;
  className?: string;
};

export function MediaPlaceholder({ media, featured = false, className }: MediaPlaceholderProps) {
  const isVideo = media.type === 'video';
  const hasSource = Boolean(media.src);

  return (
    <figure
      className={cn(
        'group relative overflow-hidden rounded-xl border border-white/10 bg-background-card',
        featured
          ? 'min-h-[220px] sm:min-h-[320px] lg:min-h-[380px]'
          : 'min-h-[120px] sm:min-h-[140px]',
        className,
      )}
    >
      {hasSource && isVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={media.src}
          poster={media.poster}
          controls
          playsInline
          preload="metadata"
          aria-label={media.label}
        />
      ) : null}

      {hasSource && !isVideo ? (
        <img
          src={media.src}
          alt={media.caption ?? media.label}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : null}

      {!hasSource ? (
        <>
          <div
            className={cn(
              'absolute inset-0 opacity-80',
              isVideo
                ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_55%),linear-gradient(135deg,#111827,#0B1120)]'
                : 'bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.18),transparent_50%),linear-gradient(160deg,#1F2937,#0B1120)]',
            )}
          />
          <div className="relative flex h-full min-h-[inherit] flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent-secondary transition-transform duration-200 group-hover:scale-105">
              {isVideo ? (
                <FiPlay className="h-5 w-5" aria-hidden />
              ) : (
                <FiImage className="h-5 w-5" aria-hidden />
              )}
            </span>
            <figcaption>
              <p className="text-sm font-medium text-text-primary sm:text-base">{media.label}</p>
              {media.caption ? (
                <p className="mt-1 text-xs text-text-muted sm:text-sm">{media.caption}</p>
              ) : null}
            </figcaption>
          </div>
        </>
      ) : (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background-primary/90 via-background-primary/50 to-transparent px-3 pb-3 pt-10">
          <p className="text-sm font-medium text-text-primary">{media.label}</p>
          {media.caption ? <p className="mt-0.5 text-xs text-text-muted">{media.caption}</p> : null}
        </figcaption>
      )}
    </figure>
  );
}
