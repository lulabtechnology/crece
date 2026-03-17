import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { InstitutionalOverview } from "@/components/institutional-overview";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="crece-shell relative overflow-hidden text-[#173225]">
      <Header />
      <Hero />
      <InstitutionalOverview />
      <ContactCta />
      <Footer />
    </main>
  );
}
