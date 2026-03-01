'use client';

import { motion } from 'framer-motion';
import { Star, Trophy, Zap } from 'lucide-react';
import { XpProgressBar } from './xp-progress-bar';
import { ColorBadge } from '@/components/ui/badge';

/** Simulated student player card (gamification showcase) */
export function PlayerCard() {
  return (
    <motion.div
      className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-lg">
          AM
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">Alice Martin</h3>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
            <Trophy className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
            <span>Niveau 7 &mdash; Expert</span>
          </div>
        </div>
      </div>

      {/* XP bar */}
      <div className="mt-5">
        <XpProgressBar current={1150} max={1400} label="Progression" />
      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">1,150</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">XP</div>
        </div>
        <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">12</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Badges</div>
        </div>
        <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
          <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">8</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Candidatures</div>
        </div>
      </div>

      {/* Recent badges */}
      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Derniers badges
        </p>
        <div className="flex flex-wrap gap-1.5">
          <ColorBadge color="purple"><Zap className="h-3 w-3" aria-hidden="true" /> Serial Applicant</ColorBadge>
          <ColorBadge color="blue"><Star className="h-3 w-3" aria-hidden="true" /> Profile 100%</ColorBadge>
          <ColorBadge color="green"><Trophy className="h-3 w-3" aria-hidden="true" /> Coaching Pro</ColorBadge>
        </div>
      </div>
    </motion.div>
  );
}
