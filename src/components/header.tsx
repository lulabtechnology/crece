import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/72 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-4 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-11 w-[136px] overflow-hidden rounded-xl border border-white/8 bg-white/5 px-3">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain p-2"
              sizes="136px"
            />
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:bg-cyan-300/16"
        >
          Agendar contacto
        </a>
      </Container>
    </header>
  );
}
