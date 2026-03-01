import type { Metadata } from 'next';
import { MotionConfig } from 'framer-motion';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pulse by StudentCRM — Insertion professionnelle gamifiée',
  description:
    'La plateforme qui gamifie la recherche d\'emploi et automatise le suivi coaching. 17 plateformes, 18 badges, 10 niveaux de progression.',
  keywords: ['insertion professionnelle', 'gamification', 'coaching', 'emploi étudiants', 'alternance', 'stage', 'CRM école'],
  openGraph: {
    title: 'Pulse by StudentCRM',
    description: 'Transformez l\'insertion professionnelle de vos étudiants.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MotionConfig reducedMotion="user">
          {/* Skip to content (a11y) */}
          <a href="#main-content" className="skip-to-content">
            Aller au contenu principal
          </a>
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
