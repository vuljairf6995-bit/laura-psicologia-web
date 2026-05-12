import { WA_URL, EMAIL } from "@/lib/contact";

const footerLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2d2a26] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-white italic mb-2">
              Laura Aldana
            </p>
            <p className="font-sans text-[11px] text-white/40 tracking-[0.18em] uppercase mb-4">
              Psicóloga clínica · Terapia en español
            </p>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs">
              Un espacio seguro para comprender, sanar y volver a ti. Terapia
              online en español.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[10px] text-white/40 tracking-[0.2em] uppercase mb-4">
              Navegación
            </p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {footerLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] text-white/40 tracking-[0.2em] uppercase mb-4">
              Contacto
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {EMAIL}
              </a>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.48 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                WhatsApp · +44 7594 841995
              </a>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://www.instagram.com/laura_aldana.psicologa?igsh=MWNpZnJkMGcxY2g0YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                  aria-label="Instagram de Laura Aldana"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>

                <a
                  href="https://www.tiktok.com/@laura_aldana10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                  aria-label="TikTok de Laura Aldana"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.53a8.16 8.16 0 0 0 4.77 1.52V7.6a4.85 4.85 0 0 1-1-.91z" />
                  </svg>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">
            © {new Date().getFullYear()} Laura Aldana. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-white/30">
            Psicología online · Confidencial · Ética profesional
          </p>
        </div>
      </div>
    </footer>
  );
}
