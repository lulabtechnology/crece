import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ValueFusion } from "@/components/value-fusion";
import { Benefits } from "@/components/benefits";
import { Services } from "@/components/services";
import { Training } from "@/components/training";
import { Results } from "@/components/results";
import { Authority } from "@/components/authority";
import { Process } from "@/components/process";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="crece-shell relative overflow-hidden text-white">
      <Header />
      <Hero />
      <ValueFusion />
      <Benefits />
      <Services />
      <Training />
      <Results />
      <Authority />
      <Process />
      <ContactCta />
      <Footer />
    </main>
  );
}
