import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-slate-400 sm:flex-row sm:items-center">
        <p>{siteContent.footer.legal}</p>
        <div className="flex items-center gap-4">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-300 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
