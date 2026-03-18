import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0f4e2f]/10 bg-[linear-gradient(180deg,rgba(251,251,246,.96),rgba(246,250,242,.9))] shadow-[0_16px_44px_rgba(18,52,34,0.08)] backdrop-blur-2xl">
      <Container className="flex min-h-[6.2rem] items-center justify-between gap-5 py-3 sm:min-h-[7rem] sm:gap-6 sm:py-4">
        <a href="#" aria-label={siteContent.brand.name} className="crece-brand-shell group relative flex min-w-0 items-center gap-3 sm:gap-5">
          <div className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.38),rgba(43,122,71,.3),transparent)]" />
          <div className="relative h-[5rem] w-[8.4rem] shrink-0 sm:h-[6.1rem] sm:w-[10.5rem] lg:h-[6.9rem] lg:w-[12.6rem]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain object-left drop-shadow-[0_12px_24px_rgba(18,52,34,0.14)]"
              sizes="(min-width: 1024px) 202px, (min-width: 640px) 168px, 134px"
              priority
            />
          </div>

          <div className="min-w-0">
            <div className="crece-display text-[1.2rem] font-semibold tracking-[-0.06em] text-[#163126] sm:text-[1.6rem] lg:text-[1.9rem]">
              {siteContent.brand.name}
            </div>
            <div className="max-w-[10rem] text-[0.6rem] uppercase tracking-[0.24em] text-[#607165] sm:max-w-none sm:text-[0.76rem] sm:tracking-[0.26em] lg:text-[0.84rem]">
              {siteContent.brand.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} className="crece-nav-pill">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
