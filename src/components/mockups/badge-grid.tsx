'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BADGES, BADGE_CATEGORIES, BADGE_COLOR_MAP } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { BadgeCategory } from '@/lib/types';
import {
  Image, Link, Tag, FileText, MapPin, CheckCircle,
  Target, Briefcase, Zap, Star,
  Calendar, Users, Award,
  Upload, Folder, File,
  Activity, Bell,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'image': Image, 'link': Link, 'tag': Tag, 'file-text': FileText,
  'map-pin': MapPin, 'check-circle': CheckCircle, 'target': Target,
  'briefcase': Briefcase, 'zap': Zap, 'star': Star, 'calendar': Calendar,
  'users': Users, 'award': Award, 'upload': Upload, 'folder': Folder,
  'file': File, 'activity': Activity, 'bell': Bell,
};

/** Interactive badge grid organized by category */
export function BadgeGrid() {
  const [activeCategory, setActiveCategory] = useState<BadgeCategory | 'all'>('all');

  const filteredBadges = activeCategory === 'all'
    ? BADGES
    : BADGES.filter((b) => b.category === activeCategory);

  return (
    <div>
      {/* Category tabs */}
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Catégories de badges">
        <button
          role="tab"
          aria-selected={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          className={cn(
            'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
            activeCategory === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
          )}
        >
          Tous ({BADGES.length})
        </button>
        {BADGE_CATEGORIES.map((cat) => {
          const count = BADGES.filter((b) => b.category === cat.id).length;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                activeCategory === cat.id
                  ? `${BADGE_COLOR_MAP[cat.color].bg} ${BADGE_COLOR_MAP[cat.color].text}`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
              )}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Badge grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" role="tabpanel">
        {filteredBadges.map((badge, i) => {
          const Icon = ICON_MAP[badge.icon];
          const colors = BADGE_COLOR_MAP[badge.color];
          return (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, boxShadow: `0 8px 30px -8px` }}
              className={cn(
                'group flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all cursor-default',
                colors.bg, colors.border,
              )}
            >
              <div className={cn('flex h-10 w-10 items-center justify-center rounded-full', colors.bg)}>
                {Icon && <Icon className={cn('h-5 w-5', colors.text)} />}
              </div>
              <span className={cn('text-xs font-semibold', colors.text)}>{badge.label}</span>
              <span className="text-[0.65rem] text-gray-500 dark:text-gray-400">+{badge.xp} XP</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
