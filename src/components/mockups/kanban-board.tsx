'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface KanbanCard {
  company: string;
  status: string;
}

interface KanbanColumnData {
  title: string;
  color: string;
  cards: KanbanCard[];
}

const COLUMNS: KanbanColumnData[] = [
  {
    title: 'À traiter',
    color: 'border-t-amber-500',
    cards: [
      { company: 'Google', status: 'Stage dev fullstack' },
      { company: 'Airbus', status: 'Alternance data analyst' },
      { company: 'BNP Paribas', status: 'Stage finance' },
    ],
  },
  {
    title: 'Entretien planifié',
    color: 'border-t-blue-500',
    cards: [
      { company: 'Capgemini', status: 'Entretien le 15/03' },
      { company: 'Thales', status: 'Entretien le 20/03' },
    ],
  },
  {
    title: 'Accepté',
    color: 'border-t-emerald-500',
    cards: [
      { company: 'Dassault', status: 'Offre signée' },
    ],
  },
];

/** Simulated Kanban board for the dashboard mockup */
export function KanbanBoard() {
  return (
    <div className="grid grid-cols-3 gap-3" role="region" aria-label="Tableau Kanban de suivi">
      {COLUMNS.map((col, colIdx) => (
        <motion.div
          key={col.title}
          className={cn(
            'rounded-lg border border-t-4 bg-gray-50 p-3 dark:bg-gray-800/50 dark:border-gray-700',
            col.color,
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: colIdx * 0.15 }}
        >
          <h4 className="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            {col.title} ({col.cards.length})
          </h4>
          <div className="space-y-2">
            {col.cards.map((card, cardIdx) => (
              <motion.div
                key={card.company}
                className="rounded-md border border-gray-200 bg-white p-2.5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: colIdx * 0.15 + cardIdx * 0.1 }}
              >
                <p className="text-xs font-semibold text-gray-900 dark:text-white">{card.company}</p>
                <p className="text-[0.65rem] text-gray-500 dark:text-gray-400">{card.status}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
