import { cn } from '@/lib/utils';
import type { BadgeColor } from '@/lib/types';

interface BadgeProps {
  color: BadgeColor | 'gray';
  children: React.ReactNode;
  className?: string;
}

const colorStyles: Record<BadgeColor | 'gray', string> = {
  blue:   'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  green:  'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  cyan:   'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  gray:   'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
};

/** Color-coded badge/chip component */
export function ColorBadge({ color, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        colorStyles[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
