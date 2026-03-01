'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { KanbanBoard } from '@/components/mockups/kanban-board';
import { Users, Building2, Target, AlertTriangle } from 'lucide-react';

const KPI_CARDS = [
  { label: 'Étudiants', value: '156', icon: Users, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/40' },
  { label: 'Placés', value: '89', icon: Building2, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/40' },
  { label: 'Pistes actives', value: '234', icon: Target, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/40' },
  { label: 'Risque', value: '12', icon: AlertTriangle, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/40' },
];

/** Interactive dashboard mockup section */
export function DashboardMockup() {
  return (
    <section className="py-20 sm:py-28" aria-label="Aperçu du tableau de bord">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tableau de bord"
          title="Un cockpit pour les coachs"
          subtitle="Suivez tous vos étudiants depuis une interface unique, avec KPIs en temps réel et Kanban visuel."
        />

        {/* Browser frame mockup */}
        <motion.div
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Browser toolbar */}
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1 text-xs text-gray-400 dark:bg-gray-900">
              app.studentcrm.fr/dashboard
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-6">
            {/* KPI cards */}
            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {KPI_CARDS.map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={kpi.label}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${kpi.bg}`}>
                      <Icon className={`h-5 w-5 ${kpi.color}`} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{kpi.label}</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">{kpi.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Kanban */}
            <KanbanBoard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
