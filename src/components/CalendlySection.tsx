import { CALENDLY_URL } from "@/lib/contact";

const calendarTrust = [
  "Atención online en español",
  "Horarios gestionados directamente por Laura",
  "Proceso confidencial y profesional",
];

interface CalendlySectionProps {
  bg?: string;
}

export default function CalendlySection({
  bg = "bg-[#f4ebd9]",
}: CalendlySectionProps) {
  return (
    <section id="reserva" className={`${bg} py-20 scroll-mt-24`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#87a87d]" />
          <span className="text-xs font-sans text-[#87a87d] tracking-[0.2em] uppercase">
            Reserva tu cita
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] gap-7 items-start">
          {/* Columna izquierda */}
          <div className="bg-[#fafaf7] rounded-3xl p-8 border border-[#e4d9cc] lg:sticky lg:top-28">
            <div className="w-11 h-11 rounded-2xl bg-[#edf4eb] flex items-center justify-center text-[#2a4a1b] mb-6">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>

            <h2 className="font-serif text-[1.75rem] text-[#2d2a26] leading-tight mb-4">
              Tu primera orientación
            </h2>

            <p className="font-sans text-sm text-[#5a554f] leading-relaxed mb-8">
              Este primer espacio te permite dar el paso inicial con calma y
              claridad. Podrás elegir un horario disponible y recibirás los
              detalles de la sesión online tras confirmar tu cita.
            </p>

            <ul className="space-y-3 mb-8">
              {calendarTrust.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7L5.5 10.5L12 3.5"
                      stroke="#87a87d"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-sans text-sm text-[#4a4540] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#e4d9cc]">
              <p className="font-serif text-sm text-[#8c8680] italic leading-relaxed">
                "El primer paso es el más valioso."
              </p>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-4 px-1">
              <span className="w-4 h-px bg-[#c8dfc3]" />
              <span className="text-[10px] font-sans text-[#8c8680] tracking-[0.2em] uppercase">
                Selecciona tu fecha y hora
              </span>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-[#ede6dc] shadow-[0_8px_40px_-8px_rgba(42,74,27,0.10)]">
              <iframe
                src={CALENDLY_URL}
                width="100%"
                height="700"
                style={{ border: "none", display: "block" }}
                title="Reservar primera orientación con Laura Aldana"
                loading="lazy"
                allow="camera; microphone"
              />
            </div>

            <p className="mt-4 font-sans text-xs text-[#8c8680] text-right">
              ¿No se visualiza el calendario?{" "}
              <a
                href="https://calendly.com/laualdanal/primera-orientacion-online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a4a1b] underline underline-offset-2 hover:text-[#3a6228] transition-colors duration-200"
              >
                Abrir en nueva pestaña →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
