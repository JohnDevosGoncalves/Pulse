import type { Level, Badge, BadgeCategoryInfo, Platform, Feature, Testimonial, Stat, PricingPlan } from './types';

// ── Levels (source: GamificationService.php) ──────────────────────────────────

export const LEVELS: Level[] = [
  { rank: 1,  title: 'Novice',       xpRequired: 0,    power: 'Découverte',     image: 'novice' },
  { rank: 2,  title: 'Apprenti',     xpRequired: 50,   power: 'Curiosité',      image: 'apprenti' },
  { rank: 3,  title: 'Explorateur',  xpRequired: 150,  power: 'Initiative',     image: 'explorateur' },
  { rank: 4,  title: 'Aventurier',   xpRequired: 300,  power: 'Audace',         image: 'aventurier' },
  { rank: 5,  title: 'Combattant',   xpRequired: 500,  power: 'Ténacité',       image: 'combattant' },
  { rank: 6,  title: 'Spécialiste',  xpRequired: 750,  power: 'Maîtrise',       image: 'specialiste' },
  { rank: 7,  title: 'Expert',       xpRequired: 1050, power: 'Excellence',     image: 'expert' },
  { rank: 8,  title: 'Maître',       xpRequired: 1400, power: 'Sagesse',        image: 'maitre' },
  { rank: 9,  title: 'Champion',     xpRequired: 1800, power: 'Domination',     image: 'champion' },
  { rank: 10, title: 'Légende',      xpRequired: 2300, power: 'Transcendance',  image: 'legende' },
];

// ── Badge categories ──────────────────────────────────────────────────────────

export const BADGE_CATEGORIES: BadgeCategoryInfo[] = [
  { id: 'profile',      label: 'Profil',        color: 'blue' },
  { id: 'applications', label: 'Candidatures',  color: 'purple' },
  { id: 'coaching',     label: 'Coaching',       color: 'green' },
  { id: 'documents',    label: 'Documents',      color: 'orange' },
  { id: 'engagement',   label: 'Engagement',     color: 'cyan' },
];

// ── Badges (source: Badge.php) ────────────────────────────────────────────────

export const BADGES: Badge[] = [
  // Profile
  { id: 'photo_ready',      label: 'Photo Ready',      description: 'Ajouter une photo de profil',              icon: 'image',       xp: 20,  category: 'profile',      color: 'blue',   image: 'photo_ready' },
  { id: 'connected_pro',    label: 'Connected Pro',     description: 'Ajouter LinkedIn + Portfolio + GitHub',    icon: 'link',        xp: 20,  category: 'profile',      color: 'blue',   image: 'connected_pro' },
  { id: 'skill_master',     label: 'Skill Master',      description: 'Ajouter 5 compétences ou plus',            icon: 'tag',         xp: 20,  category: 'profile',      color: 'blue',   image: 'skill_master' },
  { id: 'bio_writer',       label: 'Bio Writer',        description: 'Rédiger sa présentation',                  icon: 'file-text',   xp: 20,  category: 'profile',      color: 'blue',   image: 'bio_writer' },
  { id: 'mobility_ready',   label: 'Mobility Ready',    description: 'Définir ses zones de mobilité',            icon: 'map-pin',     xp: 20,  category: 'profile',      color: 'blue',   image: 'mobility_ready' },
  { id: 'profile_complete', label: 'Profile 100%',      description: 'Compléter tous les champs du profil',      icon: 'check-circle', xp: 50, category: 'profile',      color: 'blue',   image: 'profile_complete' },
  // Applications
  { id: 'first_blood',      label: 'First Blood',       description: 'Première candidature envoyée',             icon: 'target',      xp: 20,  category: 'applications', color: 'purple', image: 'first_blood' },
  { id: 'job_hunter',       label: 'Job Hunter',        description: '5 candidatures envoyées',                  icon: 'briefcase',   xp: 20,  category: 'applications', color: 'purple', image: 'job_hunter' },
  { id: 'serial_applicant', label: 'Serial Applicant',  description: '10 candidatures envoyées',                 icon: 'zap',         xp: 40,  category: 'applications', color: 'purple', image: 'serial_applicant' },
  { id: 'victory_royale',   label: 'Victory Royale',    description: 'Décrocher un stage ou une alternance',     icon: 'star',        xp: 100, category: 'applications', color: 'purple', image: 'victory_royale' },
  // Coaching
  { id: 'first_session',    label: 'First Session',     description: 'Réserver un premier rendez-vous',          icon: 'calendar',    xp: 20,  category: 'coaching',     color: 'green',  image: 'first_session' },
  { id: 'regular',          label: 'Regular',           description: '5 séances de coaching',                    icon: 'users',       xp: 20,  category: 'coaching',     color: 'green',  image: 'regular' },
  { id: 'coaching_pro',     label: 'Coaching Pro',      description: '10 séances de coaching',                   icon: 'award',       xp: 50,  category: 'coaching',     color: 'green',  image: 'coaching_pro' },
  // Documents
  { id: 'first_upload',     label: 'First Upload',      description: 'Premier document uploadé',                 icon: 'upload',      xp: 20,  category: 'documents',    color: 'orange', image: 'first_upload' },
  { id: 'document_ready',   label: 'Document Ready',    description: 'CV + lettre de motivation uploadés',       icon: 'folder',      xp: 20,  category: 'documents',    color: 'orange', image: 'document_ready' },
  { id: 'archive_master',   label: 'Archive Master',    description: '5 documents ou plus dans le dossier',      icon: 'file',        xp: 30,  category: 'documents',    color: 'orange', image: 'archive_master' },
  // Engagement
  { id: 'early_adopter',       label: 'Early Adopter',       description: 'Se connecter dans les 7 premiers jours', icon: 'activity', xp: 20,  category: 'engagement',   color: 'cyan',   image: 'early_adopter' },
  { id: 'notification_master', label: 'Notification Master', description: 'Lire toutes ses notifications',          icon: 'bell',     xp: 20,  category: 'engagement',   color: 'cyan',   image: 'notification_master' },
];

// ── Platforms (source: JobOfferPlatform.php) ───────────────────────────────────

export const PLATFORMS: Platform[] = [
  { id: 'apec',          label: 'Apec',                    shortLabel: 'APEC',  color: '#0053A0', url: 'https://www.apec.fr' },
  { id: 'apecita',       label: 'Apecita',                 shortLabel: 'APECITA', color: '#4CAF50', url: 'https://www.apecita.com' },
  { id: 'fashion_jobs',  label: 'FashionJobs',             shortLabel: 'FJ',    color: '#E91E63', url: 'https://www.fashionjobs.com' },
  { id: 'france_travail', label: 'France Travail',         shortLabel: 'FT',    color: '#1E3A5F', url: 'https://candidat.francetravail.fr' },
  { id: 'hellowork',     label: 'Hellowork',               shortLabel: 'HW',    color: '#FF6B35', url: 'https://www.hellowork.com' },
  { id: 'hosco',         label: 'Hosco',                   shortLabel: 'HOSCO', color: '#00BCD4', url: 'https://www.hosco.com' },
  { id: 'indeed',        label: 'Indeed',                  shortLabel: 'IN',    color: '#2164F3', url: 'https://fr.indeed.com' },
  { id: 'jobagri',       label: 'Jobagri',                 shortLabel: 'JA',    color: '#8BC34A', url: 'https://www.jobagri.com' },
  { id: 'makesense',     label: 'Jobs that Makesense',     shortLabel: 'JMS',   color: '#F9A825', url: 'https://jobs.makesense.org' },
  { id: 'jobteaser',     label: 'Jobteaser',               shortLabel: 'JT',    color: '#6C63FF', url: 'https://www.jobteaser.com' },
  { id: 'jobtransport',  label: 'JobTransport',            shortLabel: 'JTRP',  color: '#FF5722', url: 'https://www.jobtransport.com' },
  { id: 'lesportrecrute', label: 'Le Sport Recrute',       shortLabel: 'LSR',   color: '#4CAF50', url: 'https://www.lesportrecrute.com' },
  { id: 'linkedin',      label: 'LinkedIn',                shortLabel: 'LK',    color: '#0A66C2', url: 'https://www.linkedin.com' },
  { id: 'monster',       label: 'Monster',                 shortLabel: 'MON',   color: '#6E45A5', url: 'https://www.monster.fr' },
  { id: 'profilculture', label: 'ProfilCulture',           shortLabel: 'PC',    color: '#9C27B0', url: 'https://www.profilculture.com' },
  { id: 'sportjobshunter', label: 'Sport Jobs Hunter',     shortLabel: 'SJH',   color: '#FF9800', url: 'https://www.sportjobshunter.com' },
  { id: 'wttj',          label: 'Welcome to the Jungle',   shortLabel: 'WTTJ',  color: '#FFCD00', url: 'https://www.welcometothejungle.com' },
];

// ── Features ──────────────────────────────────────────────────────────────────

export const FEATURES: Feature[] = [
  {
    icon: 'trophy',
    title: 'Gamification engageante',
    description: 'Motivez vos étudiants avec un système de progression à 10 niveaux et 18 badges.',
    details: ['XP et niveaux', '18 badges à débloquer', 'Classement par promo'],
  },
  {
    icon: 'globe',
    title: 'Agrégation d\'offres',
    description: '17 plateformes d\'emploi scannées automatiquement, centralisées en un seul tableau.',
    details: ['Scraping automatisé', 'Déduplication intelligente', 'Filtres avancés'],
  },
  {
    icon: 'calendar',
    title: 'Coaching intégré',
    description: 'Rendez-vous Google Calendar, notes contextuelles et analyse de risque.',
    details: ['Sync Google Calendar', 'Notes de coaching', 'Alertes proactives'],
  },
  {
    icon: 'share-2',
    title: 'Partage de profils',
    description: 'Envoyez des profils étudiants aux recruteurs avec suivi des ouvertures.',
    details: ['Liens trackés', 'Contrôle granulaire', 'Statistiques de vues'],
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marie Dupont',
    role: 'Directrice des Relations Entreprises',
    school: 'École de Commerce Paris',
    quote: 'Depuis que nous utilisons Pulse, le taux de placement de nos étudiants a augmenté de 35%. La gamification les motive à compléter leur profil et postuler activement.',
    initials: 'MD',
  },
  {
    name: 'Thomas Lefèvre',
    role: 'Coach Insertion Professionnelle',
    school: 'Institut Supérieur du Sport',
    quote: 'Le tableau de bord me permet de suivre 120 étudiants efficacement. Les alertes de risque m\'aident à intervenir avant qu\'il ne soit trop tard.',
    initials: 'TL',
  },
  {
    name: 'Sophie Martin',
    role: 'Responsable Pédagogique',
    school: 'Académie du Digital',
    quote: 'Les étudiants adorent le système de badges. Ils se challengent entre eux pour atteindre le niveau Légende. L\'engagement a doublé en trois mois.',
    initials: 'SM',
  },
];

// ── Stats ─────────────────────────────────────────────────────────────────────

export const STATS: Stat[] = [
  { value: 17, label: 'plateformes d\'emploi' },
  { value: 18, label: 'badges à débloquer' },
  { value: 10, label: 'niveaux de progression' },
  { value: 100, suffix: '%', label: 'accessible WCAG' },
];

// ── Badge color mappings for Tailwind ─────────────────────────────────────────

export const BADGE_COLOR_MAP: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  blue:   { bg: 'bg-blue-50 dark:bg-blue-950',     text: 'text-blue-600 dark:text-blue-400',     border: 'border-blue-200 dark:border-blue-800',     glow: 'shadow-blue-500/25' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-950',  text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800', glow: 'shadow-purple-500/25' },
  green:  { bg: 'bg-emerald-50 dark:bg-emerald-950', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800', glow: 'shadow-emerald-500/25' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-950',  text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800', glow: 'shadow-orange-500/25' },
  cyan:   { bg: 'bg-cyan-50 dark:bg-cyan-950',      text: 'text-cyan-600 dark:text-cyan-400',     border: 'border-cyan-200 dark:border-cyan-800',     glow: 'shadow-cyan-500/25' },
};

// ── Pricing Plans (Gami-SaaS) ────────────────────────────────────────────────

export const ANNUAL_DISCOUNT = 0.2;

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'novice',
    name: 'Pack Novice',
    tagline: 'Pour les structures débutantes',
    monthlyPrice: 0,
    annualPrice: 0,
    priceLabel: 'Gratuit',
    unit: '',
    popular: false,
    features: [
      { label: 'CRM de base', included: true },
      { label: 'Gestion documentaire standard', included: true },
      { label: 'Limite à 50 étudiants', included: true },
      { label: 'Support communautaire', included: true },
      { label: 'Moteur Pulse', included: false },
      { label: 'Badges & gamification', included: false },
      { label: 'Dashboard alternance', included: false },
    ],
    cta: 'Démarrer gratuitement',
    glow: {
      idle: '0 0 0 1px rgba(180, 120, 80, 0.15)',
      hover: '0 0 40px 8px rgba(180, 120, 80, 0.25), 0 0 80px 16px rgba(180, 120, 80, 0.1)',
      border: 'rgba(180, 120, 80, 0.4)',
      badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    },
  },
  {
    id: 'specialiste',
    name: 'Pack Spécialiste',
    tagline: "Le c\u0153ur de l'offre",
    monthlyPrice: 4,
    annualPrice: null,
    priceLabel: null,
    unit: '/étudiant/mois',
    popular: true,
    features: [
      { label: 'Moteur Pulse complet', included: true },
      { label: '16 badges Harry Potter standards', included: true },
      { label: 'Dashboard de suivi d\'alternance', included: true },
      { label: 'Support 24/7', included: true },
      { label: 'CRM complet & illimité', included: true },
      { label: 'Agrégation 17 plateformes', included: true },
      { label: 'Coaching intégré', included: true },
    ],
    cta: 'Essai gratuit 14 jours',
    glow: {
      idle: '0 0 0 1px rgba(168, 162, 186, 0.2)',
      hover: '0 0 40px 8px rgba(168, 162, 186, 0.3), 0 0 80px 16px rgba(192, 192, 220, 0.15)',
      border: 'rgba(168, 162, 186, 0.5)',
      badge: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
    },
  },
  {
    id: 'legende',
    name: 'Pack Légende',
    tagline: 'Pour les réseaux d\'écoles',
    monthlyPrice: null,
    annualPrice: null,
    priceLabel: 'Sur Devis',
    unit: '',
    popular: false,
    features: [
      { label: 'Marque blanche totale', included: true },
      { label: 'Design de badges 8K sur-mesure', included: true },
      { label: 'API d\'intégration LMS', included: true },
      { label: 'Marketplace de badges premium', included: true },
      { label: 'Tout le Pack Spécialiste', included: true },
      { label: 'Account manager dédié', included: true },
      { label: 'SLA 99.9% garanti', included: true },
    ],
    cta: 'Contacter l\'équipe',
    glow: {
      idle: '0 0 0 1px rgba(212, 175, 55, 0.15)',
      hover: '0 0 40px 8px rgba(212, 175, 55, 0.3), 0 0 80px 16px rgba(212, 175, 55, 0.12), 0 0 120px 24px rgba(168, 85, 247, 0.08)',
      border: 'rgba(212, 175, 55, 0.5)',
      badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
    },
  },
];
