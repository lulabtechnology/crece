import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { BusinessLines } from "@/components/business-lines";
import { InstitutionalOverview } from "@/components/institutional-overview";
import { Benefits } from "@/components/benefits";
import { Services } from "@/components/services";
import { Results } from "@/components/results";
import { Authority } from "@/components/authority";
import { Process } from "@/components/process";
import { SeminarPromo } from "@/components/seminar-promo";
import { Training } from "@/components/training";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="crece-shell relative overflow-hidden text-[#173225]">
      <Header />
      <Hero />
      <BusinessLines />
      <InstitutionalOverview />
      <Services />
      <Benefits />
      <Results />
      <Authority />
      <Process />
      <SeminarPromo />
      <Training />
      <ContactCta />
      <Footer />
    </main>
  );
}
