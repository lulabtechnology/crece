import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0f4e2f]/10 bg-[linear-gradient(180deg,rgba(252,252,247,.94),rgba(243,248,239,.88))] shadow-[0_18px_60px_rgba(18,52,34,0.08)] backdrop-blur-2xl">
      <Container className="flex min-h-[5.9rem] items-center justify-between gap-4 py-3 sm:min-h-[6.8rem] sm:gap-6 sm:py-4">
        <a
          href="#"
          aria-label={siteContent.brand.name}
          className="crece-brand-shell group relative flex min-w-0 items-center gap-3 sm:gap-5"
        >
          <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.5),rgba(43,122,71,.32),transparent)]" />
          <div className="absolute bottom-0 right-0 h-18 w-18 rounded-full bg-[radial-gradient(circle,rgba(214,139,31,.2),transparent_72%)] blur-2xl" />
          <div className="relative h-[5.4rem] w-[9.2rem] shrink-0 sm:h-[6.6rem] sm:w-[11.4rem] lg:h-[7.4rem] lg:w-[13rem]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain object-left drop-shadow-[0_16px_30px_rgba(18,52,34,0.18)]"
              sizes="(min-width: 1024px) 208px, (min-width: 640px) 182px, 147px"
              priority
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#6f806f] sm:text-[0.68rem]">
              <span>Panamá</span>
              <span className="h-1 w-1 rounded-full bg-[#d68b1f]" />
              <span>Firma financiera</span>
            </div>
            <div className="crece-display mt-1 text-[1.42rem] font-semibold tracking-[-0.075em] text-[#173225] sm:text-[1.95rem] lg:text-[2.25rem]">
              {siteContent.brand.name}
            </div>
            <div className="max-w-[11rem] text-[0.63rem] uppercase tracking-[0.24em] text-[#5e7063] sm:max-w-none sm:text-[0.76rem] lg:text-[0.82rem]">
              {siteContent.brand.tagline}
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          <nav className="crece-nav-shell flex items-center gap-2 rounded-full px-2 py-2">
            {siteContent.navigation.map((item) => (
              <a key={item.href} href={item.href} className="crece-nav-pill">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`https://${siteContent.contact.website}`}
            target="_blank"
            rel="noreferrer"
            className="crece-button-secondary inline-flex items-center gap-2 rounded-full px-4 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.18em]"
          >
            Web principal
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </header>
  );
}
