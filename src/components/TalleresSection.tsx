import { WA_URL_BUSINESS } from "@/lib/contact";

const talleres = [
  {
    title: "Ansiedad y estrés laboral",
    description:
      "Herramientas para reconocer señales de ansiedad, regular el estrés y fortalecer recursos de afrontamiento en contextos de alta demanda.",
    icon: (
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
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Depresión, motivación y bienestar emocional",
    description:
      "Espacios psicoeducativos para comprender el impacto emocional del agotamiento, la desmotivación y el malestar persistente.",
    icon: (
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
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    title: "TCA y relación con la alimentación",
    description:
      "Charlas orientadas a sensibilizar sobre la conducta alimentaria, la imagen corporal y la prevención de riesgos en entornos educativos o laborales.",
    icon: (
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
        <path d="M17 8C8 10 5.9 16.17 3.82 19.34L5.71 21c1-1 2-3 3-3 1.5 0 3 1.5 4.5 1.5 3.5 0 6-4.5 6-9C19.29 8.09 18.08 8 17 8z" />
        <line x1="3" y1="21" x2="8.5" y2="15.5" />
      </svg>
    ),
  },
  {
    title: "Comunicación emocional y prevención del burnout",
    description:
      "Estrategias para promover conversaciones saludables, límites emocionales y cuidado psicológico dentro de los equipos.",
    icon: (
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function TalleresSection() {
  return (
    <section className="bg-[#fafaf7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-sans tracking-[0.2em] uppercase text-[#87a87d] mb-4">
            Para organizaciones
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d2a26] leading-tight mb-4">
            Talleres y charlas para empresas
          </h2>
          <p className="font-sans text-[#5a554f] text-lg leading-relaxed max-w-2xl mx-auto">
            Laura ofrece espacios psicoeducativos para empresas, equipos y
            organizaciones que desean promover el bienestar emocional, prevenir
            el estrés y abrir conversaciones responsables sobre ansiedad,
            depresión y conducta alimentaria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {talleres.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group bg-white rounded-3xl p-7 border border-[#ede6dc] hover:border-[#c8dfc3] hover:shadow-[0_8px_32px_-8px_rgba(42,74,27,0.12)] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#f4ebd9] flex items-center justify-center text-[#2a4a1b] mb-5 group-hover:bg-[#edf4eb] transition-colors duration-300">
                {icon}
              </div>
              <h3 className="font-serif text-xl text-[#2d2a26] mb-3 leading-snug">
                {title}
              </h3>
              <p className="font-sans text-sm text-[#5a554f] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA_URL_BUSINESS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2a4a1b] text-white font-sans text-sm font-medium hover:bg-[#3a6228] transition-colors duration-200 shadow-[0_8px_24px_-6px_rgba(42,74,27,0.35)]"
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
            Solicitar información para empresas
          </a>
        </div>
      </div>
    </section>
  );
}
