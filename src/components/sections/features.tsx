'use client';

import { motion } from 'framer-motion';
import { Trophy, Globe, Calendar, Share2 } from 'lucide-react';
import { FEATURES } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'trophy': Trophy,
  'globe': Globe,
  'calendar': Calendar,
  'share-2': Share2,
};

/** Features overview section with 4 cards */
export function Features() {
  return (
    <section id="fonctionnalites" className="py-20 sm:py-28" aria-label="Fonctionnalités">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Fonctionnalités"
          title="Tout ce qu'il faut pour l'insertion"
          subtitle="Une suite complète d'outils pour accompagner chaque étudiant vers l'emploi."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/40">
                    {Icon && <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  <ul className="mt-4 space-y-1.5" role="list">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
