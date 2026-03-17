import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { InstitutionalOverview } from "@/components/institutional-overview";
import { Services } from "@/components/services";
import { Results } from "@/components/results";
import { BusinessLines } from "@/components/business-lines";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="crece-shell relative overflow-hidden text-[#173225]">
      <Header />
      <Hero />
      <InstitutionalOverview />
      <Services />
      <Results />
      <BusinessLines />
      <ContactCta />
      <Footer />
    </main>
  );
}
