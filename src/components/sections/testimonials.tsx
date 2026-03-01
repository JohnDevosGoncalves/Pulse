'use client';

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { Quote } from 'lucide-react';

/** Testimonials section with quote cards */
export function Testimonials() {
  return (
    <section id="temoignages" className="py-20 sm:py-28" aria-label="Témoignages">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Témoignages"
          title="Ils nous font confiance"
          subtitle="Découvrez comment Pulse transforme l'accompagnement étudiant dans les écoles."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <Quote className="mb-4 h-8 w-8 text-indigo-200 dark:text-indigo-800" aria-hidden="true" />
              <p className="flex-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                &laquo; {testimonial.quote} &raquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                  {testimonial.initials}
                </div>
                <div>
                  <cite className="block text-sm font-semibold not-italic text-gray-900 dark:text-white">
                    {testimonial.name}
                  </cite>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.role} &mdash; {testimonial.school}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
