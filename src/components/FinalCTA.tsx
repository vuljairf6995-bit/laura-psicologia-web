import { WA_URL, EMAIL } from "@/lib/contact";

export default function FinalCTA() {
  return (
    <section id="contacto" className="bg-[#edf4eb] py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-5 h-px bg-[#87a87d]" />
          <span className="text-xs font-sans text-[#87a87d] tracking-[0.2em] uppercase">
            El primer paso
          </span>
          <span className="w-5 h-px bg-[#87a87d]" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-[#2d2a26] leading-tight mb-5">
          ¿Lista para dar el primer paso?
        </h2>

        <p className="font-sans text-[#5a554f] text-lg leading-relaxed mb-4 max-w-xl mx-auto">
          El proceso de sanación comienza con una sola decisión: la de buscar
          ayuda. No tienes que tenerlo todo claro para empezar.
        </p>

        <p className="font-sans text-[#8c8680] text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Escríbeme y conversamos. Sin formularios complicados, sin esperas
          largas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2a4a1b] text-white font-sans text-sm font-medium hover:bg-[#3a6228] transition-colors duration-200 shadow-[0_8px_24px_-6px_rgba(42,74,27,0.4)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Escribirme un mensaje
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#2a4a1b] text-[#2a4a1b] font-sans text-sm font-medium hover:bg-[#2a4a1b] hover:text-white transition-all duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.48 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Contactar por WhatsApp
          </a>
        </div>

        {/* Reassurance strip */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-[#c8dfc3]">
          {[
            "Respondo en menos de 48 horas",
            "Totalmente confidencial",
            "Sin compromiso inicial",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 font-sans text-xs text-[#5a554f]"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.5 6L4.5 9L10.5 3"
                  stroke="#87a87d"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
