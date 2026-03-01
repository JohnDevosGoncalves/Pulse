'use client';

import { motion } from 'framer-motion';
import { LEVELS } from '@/lib/constants';
import { cn } from '@/lib/utils';

/** Vertical timeline showing all 10 gamification levels */
export function LevelTimeline() {
  return (
    <div className="relative" role="list" aria-label="Niveaux de progression">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-amber-500 sm:left-8" aria-hidden="true" />

      {LEVELS.map((level, i) => {
        const isHighlight = i === 0 || i === 4 || i === 6 || i === 9;
        return (
          <motion.div
            key={level.rank}
            className="relative mb-6 flex items-start gap-4 pl-14 sm:pl-20 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            role="listitem"
          >
            {/* Node */}
            <div
              className={cn(
                'absolute left-4 flex h-5 w-5 items-center justify-center rounded-full border-2 sm:left-6',
                isHighlight
                  ? 'border-indigo-500 bg-indigo-500 shadow-md shadow-indigo-500/30'
                  : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800',
              )}
              aria-hidden="true"
            >
              {isHighlight && <div className="h-2 w-2 rounded-full bg-white" />}
            </div>

            {/* Content */}
            <div className={cn(
              'flex-1 rounded-lg border p-3',
              isHighlight
                ? 'border-indigo-200 bg-indigo-50/50 dark:border-indigo-800 dark:bg-indigo-950/30'
                : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900',
            )}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    'inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold',
                    isHighlight
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
                  )}>
                    {level.rank}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">{level.title}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{level.xpRequired} XP</span>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Pouvoir : <span className="font-medium text-gray-700 dark:text-gray-300">{level.power}</span>
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
