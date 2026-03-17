import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0f4e2f]/8 bg-[rgba(251,251,246,0.94)] backdrop-blur-xl">
      <Container className="flex min-h-[4.7rem] items-center justify-between gap-3 py-2.5 sm:min-h-[5.7rem] sm:gap-4 sm:py-3">
        <a
          href="#consultoria"
          className="flex min-w-0 items-center gap-3 rounded-full border border-[#0f4e2f]/6 bg-white/82 px-3 py-2 shadow-[0_12px_30px_rgba(18,52,34,0.06)] sm:gap-3.5 sm:px-4"
        >
          <div className="relative h-[3.3rem] w-[5.8rem] shrink-0 sm:h-[4.15rem] sm:w-[7.35rem] lg:h-[4.45rem] lg:w-[7.8rem]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain object-left"
              sizes="(min-width: 1024px) 125px, (min-width: 640px) 118px, 92px"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="crece-display truncate text-[0.96rem] font-semibold tracking-[-0.04em] text-[#163126] sm:text-[1.14rem]">
              {siteContent.brand.name}
            </div>
            <div className="truncate text-[0.52rem] uppercase tracking-[0.21em] text-[#6a7b6f] sm:text-[0.66rem] sm:tracking-[0.24em]">
              {siteContent.brand.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.08em] text-[#365240] transition-colors duration-300 hover:text-[#163126]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
