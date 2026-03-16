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
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(17,160,168,0.22),transparent_34%),radial-gradient(circle_at_75%_10%,rgba(95,76,255,0.18),transparent_24%),linear-gradient(180deg,#030712_0%,#050816_48%,#030712_100%)] text-white">
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
