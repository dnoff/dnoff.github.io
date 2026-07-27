import { cn } from '../utils';

type TechnologyBadgeProps = {
  label: string;
  className?: string;
};

export function TechnologyBadge({ label, className }: TechnologyBadgeProps) {
  return <span className={cn('badge', className)}>{label}</span>;
}
