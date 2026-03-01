'use client';

import { motion } from 'framer-motion';
import { Calendar, FileText, AlertTriangle, Bell, CheckCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const COACHING_FEATURES = [
  { icon: Calendar, text: 'Rendez-vous synchronisés avec Google Calendar' },
  { icon: FileText, text: 'Notes de coaching avec tags contextuels (CV, LinkedIn, Entretien...)' },
  { icon: AlertTriangle, text: 'Analyse de risque : détection des étudiants en décrochage' },
  { icon: Bell, text: 'Alertes proactives pour les interventions prioritaires' },
];

/** Coaching feature section with split layout */
export function Coaching() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28 dark:bg-gray-900/50" aria-label="Coaching intégré">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <SectionHeading
              badge="Coaching"
              title="Un coaching intelligent et humain"
              subtitle="Accompagnez chaque étudiant avec les bons outils, au bon moment."
              centered={false}
            />

            <div className="space-y-4">
              {COACHING_FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
                      <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 pt-1">{feature.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Calendar mockup */}
          <motion.div
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Mars 2026</h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">Agenda coaching</span>
            </div>

            {/* Mini calendar grid */}
            <div className="grid grid-cols-5 gap-1.5 text-center text-xs">
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'].map((d) => (
                <div key={d} className="py-1 font-medium text-gray-500 dark:text-gray-400">{d}</div>
              ))}
              {Array.from({ length: 20 }, (_, i) => {
                const day = i + 1;
                const hasSlot = [3, 5, 8, 10, 12, 15, 17, 19].includes(day);
                const booked = [5, 12, 17].includes(day);
                return (
                  <div
                    key={day}
                    className={`rounded-md py-2 text-xs ${
                      booked
                        ? 'bg-indigo-100 font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300'
                        : hasSlot
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                          : 'text-gray-400 dark:text-gray-500'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" /> Disponible
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-indigo-500" aria-hidden="true" /> Réservé
              </span>
            </div>

            {/* Upcoming appointments */}
            <div className="mt-4 space-y-2 border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="flex items-center gap-2 rounded-lg bg-indigo-50 p-2.5 dark:bg-indigo-900/20">
                <CheckCircle className="h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Alice Martin &mdash; 14h00</p>
                  <p className="text-[0.65rem] text-gray-500 dark:text-gray-400">Préparation entretien Capgemini</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
