import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/** Card container with optional hover effect */
export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 bg-white p-6',
        'dark:border-gray-800 dark:bg-gray-900',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800',
        className,
      )}
    >
      {children}
    </div>
  );
}
