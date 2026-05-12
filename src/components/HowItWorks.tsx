import { WA_URL } from "@/lib/contact";

const steps = [
  {
    number: "01",
    title: "Primer contacto",
    description:
      "Escríbeme para contarme brevemente qué te trae. Sin compromisos, sin formularios largos. Solo un primer paso para saber si podemos trabajar juntas.",
    detail: "Te respondo en menos de 48 horas",
  },
  {
    number: "02",
    title: "Consulta inicial",
    description:
      "En una sesión de exploración nos conocemos, te escucho con atención y evaluamos juntas si la terapia conmigo es el camino adecuado para lo que estás viviendo.",
    detail: "40 minutos · Sin compromiso de continuidad",
  },
  {
    number: "03",
    title: "Tu proceso terapéutico",
    description:
      "Definimos objetivos claros y comenzamos el trabajo terapéutico. Las sesiones son semanales o quincenales, siempre adaptadas a tu ritmo y a lo que estás necesitando.",
    detail: "Sesiones de 50 min · Continuidad flexible",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#f4ebd9] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-sans tracking-[0.2em] uppercase text-[#87a87d] mb-4">
            El proceso
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d2a26] leading-tight">
            Cómo empezar tu proceso
          </h2>
          <p className="font-sans text-[#5a554f] text-lg mt-4 max-w-lg mx-auto leading-relaxed">
            Simple, humano y sin burocracia. Así es como funciona la terapia
            conmigo.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px bg-[#e4d9cc]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-white border border-[#e4d9cc] flex items-center justify-center shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
                    <span className="font-serif text-2xl text-[#2a4a1b]">
                      {step.number}
                    </span>
                  </div>
                  {/* Arrow (mobile) */}
                  {i < 2 && (
                    <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8dfc3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="font-serif text-xl text-[#2d2a26] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#5a554f] leading-relaxed mb-4 max-w-xs md:max-w-none">
                  {step.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-sans text-[#87a87d] font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#2a4a1b] text-white font-sans text-sm font-medium hover:bg-[#3a6228] transition-colors duration-200"
          >
            Dar el primer paso
          </a>
        </div>
      </div>
    </section>
  );
}
