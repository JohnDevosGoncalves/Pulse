export interface Level {
  rank: number;
  title: string;
  xpRequired: number;
  power: string;
  image: string;
}

export type BadgeCategory = 'profile' | 'applications' | 'coaching' | 'documents' | 'engagement';

export type BadgeColor = 'blue' | 'purple' | 'green' | 'orange' | 'cyan';

export interface Badge {
  id: string;
  label: string;
  description: string;
  icon: string;
  xp: number;
  category: BadgeCategory;
  color: BadgeColor;
  image: string;
}

export interface BadgeCategoryInfo {
  id: BadgeCategory;
  label: string;
  color: BadgeColor;
}

export interface Platform {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  url: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  school: string;
  quote: string;
  initials: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

// ── Pricing ──────────────────────────────────────────────────────────────────

export type PricingTier = 'novice' | 'specialiste' | 'legende';

export type PricingBilling = 'monthly' | 'annual';

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingGlow {
  idle: string;
  hover: string;
  border: string;
  badge: string;
}

export interface PricingPlan {
  id: PricingTier;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  priceLabel: string | null;
  unit: string;
  popular: boolean;
  features: PricingFeature[];
  cta: string;
  glow: PricingGlow;
}
