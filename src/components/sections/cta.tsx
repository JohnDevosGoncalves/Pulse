import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** Final call-to-action section */
export function Cta() {
  return (
    <section id="contact" className="cta-gradient py-20 sm:py-28" aria-label="Contact">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Prêt à transformer votre école ?
        </h2>
        <p className="mt-4 text-lg text-indigo-100">
          Rejoignez les établissements qui utilisent Pulse pour maximiser
          l&apos;insertion professionnelle de leurs étudiants.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-indigo-700 hover:bg-indigo-50 shadow-lg"
            as="a"
            href="mailto:contact@studentcrm.fr"
          >
            Demander une démo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-white border border-white/30 hover:bg-white/10"
            as="a"
            href="mailto:contact@studentcrm.fr"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
