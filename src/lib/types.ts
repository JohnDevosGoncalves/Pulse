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
