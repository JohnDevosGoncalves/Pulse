'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PRICING_PLANS, ANNUAL_DISCOUNT } from '@/lib/constants';
import type { PricingBilling, PricingPlan } from '@/lib/types';

// ── Billing Toggle ───────────────────────────────────────────────────────────

interface BillingToggleProps {
  billing: PricingBilling;
  onToggle: (billing: PricingBilling) => void;
}

function BillingToggle({ billing, onToggle }: BillingToggleProps) {
  const isAnnual = billing === 'annual';

  return (
    <div className="mb-12 flex items-center justify-center gap-3">
      <span
        className={cn(
          'text-sm font-medium transition-colors',
          !isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
        )}
      >
        Mensuel
      </span>

      <button
        role="switch"
        aria-checked={isAnnual}
        aria-label="Basculer vers la facturation annuelle"
        onClick={() => onToggle(isAnnual ? 'monthly' : 'annual')}
        className={cn(
          'relative inline-flex h-7 w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950',
          isAnnual ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700',
        )}
      >
        <span
          className={cn(
            'pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-lg ring-0 transition-transform duration-200',
            isAnnual ? 'translate-x-[26px]' : 'translate-x-0.5',
          )}
        />
      </button>

      <span
        className={cn(
          'text-sm font-medium transition-colors',
          isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
        )}
      >
        Annuel
      </span>

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isAnnual ? 1 : 0.5, scale: isAnnual ? 1 : 0.95 }}
        className="ml-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
      >
        -{Math.round(ANNUAL_DISCOUNT * 100)}%
      </motion.span>
    </div>
  );
}

// ── Price Display ────────────────────────────────────────────────────────────

interface PriceDisplayProps {
  plan: PricingPlan;
  billing: PricingBilling;
}

function PriceDisplay({ plan, billing }: PriceDisplayProps) {
  if (plan.priceLabel && plan.monthlyPrice === null) {
    return (
      <div className="mb-6">
        <span className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {plan.priceLabel}
        </span>
      </div>
    );
  }

  if (plan.monthlyPrice === 0) {
    return (
      <div className="mb-6">
        <span className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Gratuit
        </span>
      </div>
    );
  }

  const basePrice = plan.monthlyPrice ?? 0;
  const displayPrice = billing === 'annual'
    ? +(basePrice * (1 - ANNUAL_DISCOUNT)).toFixed(2)
    : basePrice;

  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-1">
        <motion.span
          key={`${plan.id}-${billing}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          {displayPrice}€
        </motion.span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {plan.unit}
        </span>
      </div>
      {billing === 'annual' && basePrice > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-1 text-xs text-gray-500 dark:text-gray-400"
        >
          au lieu de <span className="line-through">{basePrice}€</span>{plan.unit}
        </motion.p>
      )}
    </div>
  );
}

// ── Pricing Card ─────────────────────────────────────────────────────────────

interface PricingCardProps {
  plan: PricingPlan;
  billing: PricingBilling;
  index: number;
}

function PricingCard({ plan, billing, index }: PricingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{
        boxShadow: plan.glow.hover,
        borderColor: plan.glow.border,
      }}
      style={{ boxShadow: plan.glow.idle }}
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 transition-colors duration-300 sm:p-8',
        plan.popular
          ? 'border-indigo-300 bg-white dark:border-indigo-700 dark:bg-gray-900'
          : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/80',
      )}
      aria-label={`Offre ${plan.name}`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white shadow-md">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Plus Populaire
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <span className={cn('inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider', plan.glow.badge)}>
          {plan.name}
        </span>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {plan.tagline}
        </p>
      </div>

      {/* Price */}
      <PriceDisplay plan={plan} billing={billing} />

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3" role="list" aria-label={`Fonctionnalités du ${plan.name}`}>
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2.5">
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600" aria-hidden="true" />
            )}
            <span
              className={cn(
                'text-sm',
                feature.included
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-400 dark:text-gray-600',
              )}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={plan.popular ? 'primary' : 'secondary'}
        size="lg"
        className="w-full"
        aria-label={`${plan.cta} — ${plan.name}`}
      >
        {plan.id === 'legende' ? (
          <>
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            {plan.cta}
          </>
        ) : (
          <>
            {plan.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </motion.article>
  );
}

// ── Pricing Section ──────────────────────────────────────────────────────────

/** Pricing section with billing toggle and tiered cards */
export function Pricing() {
  const [billing, setBilling] = useState<PricingBilling>('monthly');

  return (
    <section id="tarifs" className="py-20 sm:py-28" aria-label="Tarifs et abonnements">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tarifs"
          title="Un plan pour chaque ambition"
          subtitle="De la structure débutante au réseau d'écoles national, Pulse s'adapte à votre échelle."
        />

        <BillingToggle billing={billing} onToggle={setBilling} />

        <div className="grid gap-8 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} billing={billing} index={i} />
          ))}
        </div>

        {/* Trust line */}
        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Pas de carte bancaire requise pour l&apos;essai gratuit. Annulable à tout moment.
        </p>
      </div>
    </section>
  );
}
