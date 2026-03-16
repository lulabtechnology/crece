import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f1b64d]/10 bg-[#07100d]/84 backdrop-blur-xl">
      <Container className="flex min-h-24 items-center justify-between gap-4 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-[82px] w-[240px] sm:h-[90px] sm:w-[280px] lg:h-[96px] lg:w-[320px]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="origin-left object-contain object-left scale-[1.14] drop-shadow-[0_0_28px_rgba(167,203,76,0.14)]"
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 240px"
              priority
            />
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-[0.12em] text-[#d4dbc8] transition-colors duration-300 hover:text-[#f3efe3]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="crece-button-primary inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
        >
          Agendar diagnóstico
        </a>
      </Container>
    </header>
  );
}
