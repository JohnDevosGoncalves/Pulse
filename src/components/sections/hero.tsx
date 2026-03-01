'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlayerCard } from '@/components/mockups/player-card';

/** Hero section with headline, CTAs and player card mockup */
export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24" aria-label="Accueil">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                Nouveau : Gamification int&eacute;gr&eacute;e
              </span>
            </motion.div>

            <motion.h1
              className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transformez l&apos;insertion professionnelle{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                de vos &eacute;tudiants
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              La plateforme qui gamifie la recherche d&apos;emploi et automatise le suivi coaching.
              17 plateformes, 18 badges, 10 niveaux de progression.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" as="a" href="#contact">
                Demander une d&eacute;mo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button variant="secondary" size="lg" as="a" href="#fonctionnalites">
                D&eacute;couvrir
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>

          {/* Player card mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <PlayerCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
