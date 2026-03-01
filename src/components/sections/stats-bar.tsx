'use client';

import { STATS } from '@/lib/constants';
import { AnimatedCounter } from '@/components/ui/animated-counter';

/** Horizontal stats bar with animated counters */
export function StatsBar() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-10 dark:border-gray-800 dark:bg-gray-900/50" aria-label="Chiffres clés">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-indigo-600 sm:text-4xl dark:text-indigo-400">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
