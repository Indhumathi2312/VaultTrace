import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pillars from '@/components/Pillars';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import Chains from '@/components/Chains';
import Resources from '@/components/Resources';
import Faqs from '@/components/Faqs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pillars />
        <HowItWorks />
        <Reviews />
        <Chains />
        <Resources />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
