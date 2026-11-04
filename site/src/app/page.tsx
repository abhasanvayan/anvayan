import { Header, Footer } from "@/components/shared";
import { Hero } from "@/components/home/hero";
import { ClientTicker, ProofBar } from "@/components/home/proof";
import { Reviews } from "@/components/home/reviews";
import { CaseStudies } from "@/components/home/work";
import { Products } from "@/components/home/products";
import { Approach } from "@/components/home/approach";
import { Team } from "@/components/home/team";
import { FinalCTA } from "@/components/home/final-cta";

/* Page order, built for a senior buyer who decides in a few seconds:
   1. who we are and for whom (hero)
   2. proof at once: client names, numbers, industries, reviews
   3. the work behind the proof (case studies)
   4. what you can buy (three products)
   5. how we work, who you work with, next step */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ClientTicker />
        <ProofBar />
        <Reviews />
        <CaseStudies />
        <Products />
        <Approach />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
