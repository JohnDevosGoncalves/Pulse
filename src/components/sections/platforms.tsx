'use client';

import { PLATFORMS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';

/** Infinite scrolling platform logo carousel */
export function Platforms() {
  const doubled = [...PLATFORMS, ...PLATFORMS];

  return (
    <section id="plateformes" className="py-20 sm:py-28 overflow-hidden" aria-label="Plateformes d'emploi intégrées">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Intégrations"
          title="17 plateformes d'emploi centralisées"
          subtitle="Toutes les offres de vos étudiants, agrégées et dédupliquées automatiquement."
        />
      </div>

      {/* Row 1 — scroll left */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-950" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-950" aria-hidden="true" />
        <div className="carousel-track flex w-max gap-6" role="list" aria-label="Plateformes d'emploi">
          {doubled.map((platform, i) => (
            <div
              key={`${platform.id}-${i}`}
              className="flex h-14 items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 dark:border-gray-800 dark:bg-gray-900"
              role="listitem"
            >
              <div
                className="h-3 w-3 rounded-full shrink-0"
                style={{ backgroundColor: platform.color }}
                aria-hidden="true"
              />
              <span className="whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300">
                {platform.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-950" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-950" aria-hidden="true" />
        <div className="carousel-track-reverse flex w-max gap-6" role="list" aria-label="Plateformes d'emploi (suite)">
          {[...doubled].reverse().map((platform, i) => (
            <div
              key={`${platform.id}-rev-${i}`}
              className="flex h-14 items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 dark:border-gray-800 dark:bg-gray-900"
              role="listitem"
            >
              <div
                className="h-3 w-3 rounded-full shrink-0"
                style={{ backgroundColor: platform.color }}
                aria-hidden="true"
              />
              <span className="whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300">
                {platform.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
