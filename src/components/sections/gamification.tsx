'use client';

import { SectionHeading } from '@/components/ui/section-heading';
import { BadgeGrid } from '@/components/mockups/badge-grid';
import { LevelTimeline } from '@/components/mockups/level-timeline';

/** Gamification showroom section */
export function Gamification() {
  return (
    <section id="gamification" className="bg-gray-50 py-20 sm:py-28 dark:bg-gray-900/50" aria-label="Système de gamification">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Gamification"
          title="Du Novice à la Légende"
          subtitle="Un système de progression à 10 niveaux et 18 badges qui motive les étudiants à se dépasser."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Level timeline (left, narrower) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">10 niveaux de progression</h3>
            <LevelTimeline />
          </div>

          {/* Badge grid (right, wider) */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">18 badges à débloquer</h3>
            <BadgeGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
