import { WA_URL } from "@/lib/contact";

const services = [
  {
    tag: "Más solicitado",
    title: "Terapia Individual",
    description:
      "Un espacio de escucha profunda, sin juicios, donde exploramos juntos lo que te preocupa, lo que sientes y lo que quieres transformar. Cada proceso es único, adaptado a ti.",
    features: [
      "Sesiones de 50 minutos",
      "Frecuencia semanal o quincenal",
      "Plataforma segura por videollamada",
      "Seguimiento entre sesiones si es necesario",
    ],
    highlighted: true,
  },
  {
    tag: "Parejas",
    title: "Terapia de Pareja",
    description:
      "Espacio neutral para dos personas que quieren entenderse mejor, resolver conflictos o atravesar una crisis con herramientas reales. Para crecer juntos o separarse con dignidad.",
    features: [
      "Sesiones de 60-75 minutos",
      "Ambos participan activamente",
      "Objetivos definidos desde el inicio",
      "Sin tomar partido por ninguna parte",
    ],
    highlighted: false,
  },
  {
    tag: "Primer paso",
    title: "Consulta inicial",
    description:
      "Una sesión de exploración sin compromiso para conocernos, entender qué te trae y evaluar si trabajar juntos tiene sentido. Sin presión, con total confidencialidad.",
    features: [
      "Sesión de 40 minutos",
      "Espacio de evaluación mutua",
      "Sin compromiso de continuidad",
      "Confidencial desde el primer momento",
    ],
    highlighted: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#f4ebd9] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-sans tracking-[0.2em] uppercase text-[#87a87d] mb-4">
            Servicios
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d2a26] leading-tight">
            Cómo trabajamos juntos
          </h2>
          <p className="font-sans text-[#5a554f] text-lg mt-4 max-w-lg mx-auto leading-relaxed">
            La terapia no tiene una sola forma. Elige el espacio que más resuena
            con lo que estás viviendo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-3xl p-8 flex flex-col ${
                service.highlighted
                  ? "bg-[#2a4a1b] text-white shadow-[0_24px_64px_-12px_rgba(42,74,27,0.35)]"
                  : "bg-white border border-[#ede6dc]"
              }`}
            >
              <span
                className={`inline-block text-[10px] font-sans tracking-[0.18em] uppercase font-medium mb-5 px-3 py-1 rounded-full w-fit ${
                  service.highlighted
                    ? "bg-white/15 text-white"
                    : "bg-[#edf4eb] text-[#2a4a1b]"
                }`}
              >
                {service.tag}
              </span>

              <h3
                className={`font-serif text-2xl mb-3 ${
                  service.highlighted ? "text-white" : "text-[#2d2a26]"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`font-sans text-sm leading-relaxed mb-6 flex-1 ${
                  service.highlighted ? "text-white/80" : "text-[#5a554f]"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
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
                        stroke={service.highlighted ? "#c8dfc3" : "#87a87d"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`font-sans text-xs leading-relaxed ${
                        service.highlighted ? "text-white/80" : "text-[#4a4540]"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-sans font-medium transition-all duration-200 ${
                  service.highlighted
                    ? "bg-white text-[#2a4a1b] hover:bg-[#edf4eb]"
                    : "bg-[#2a4a1b] text-white hover:bg-[#3a6228]"
                }`}
              >
                Agendar consulta
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
