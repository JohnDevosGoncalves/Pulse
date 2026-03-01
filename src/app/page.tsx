import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { StatsBar } from '@/components/sections/stats-bar';
import { Features } from '@/components/sections/features';
import { Gamification } from '@/components/sections/gamification';
import { Platforms } from '@/components/sections/platforms';
import { DashboardMockup } from '@/components/sections/dashboard-mockup';
import { Coaching } from '@/components/sections/coaching';
import { Testimonials } from '@/components/sections/testimonials';
import { Cta } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <Features />
        <Gamification />
        <Platforms />
        <DashboardMockup />
        <Coaching />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
