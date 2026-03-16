import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f1b64d]/10 bg-[#07110d]/84 backdrop-blur-xl">
      <Container className="flex min-h-24 items-center justify-between gap-4 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-[88px] w-[260px] sm:h-[94px] sm:w-[320px] lg:h-[102px] lg:w-[380px]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain object-left drop-shadow-[0_0_30px_rgba(167,203,76,0.14)]"
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 320px, 260px"
              priority
            />
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.12em] text-[#d9decf] transition-colors duration-300 hover:text-[#f5efe4]"
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
