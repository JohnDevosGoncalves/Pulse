import { Zap } from 'lucide-react';

const FOOTER_LINKS = {
  Produit: [
    { label: 'Fonctionnalités', href: '#fonctionnalites' },
    { label: 'Gamification', href: '#gamification' },
    { label: 'Plateformes', href: '#plateformes' },
    { label: 'Tarifs', href: '#contact' },
  ],
  Ressources: [
    { label: 'Documentation', href: '#' },
    { label: 'Guide de démarrage', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  Légal: [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'CGU', href: '#' },
    { label: 'RGPD', href: '#' },
  ],
};

/** Site footer with navigation columns */
export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
              <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              Pulse
            </a>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              La plateforme qui transforme l&apos;insertion professionnelle des étudiants.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h3>
              <ul className="mt-3 space-y-2" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Pulse by StudentCRM. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
