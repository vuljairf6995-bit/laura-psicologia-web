const areas = [
  {
    title: "Ansiedad",
    description:
      "Preocupación constante, tensión, ataques de pánico o miedo que te paraliza. Aprendemos a entender lo que tu mente trata de protegerte y a recuperar la calma.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Depresión",
    description:
      "Tristeza profunda, vacío, pérdida de motivación o sentido. Trabajamos juntas para recuperar el contacto con la vida y contigo misma, a tu ritmo.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Dificultades de pareja",
    description:
      "Conflictos, falta de comunicación, crisis de confianza o momentos de distancia. La terapia de pareja crea un espacio neutral para escucharse y encontrar el camino.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Trastornos alimenticios",
    description:
      "Una relación difícil con la comida o el cuerpo muchas veces esconde un dolor más profundo. Trabajamos desde la compasión, sin juicio, hacia una relación más sana contigo.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Procesos emocionales difíciles",
    description:
      "Duelos, cambios importantes, traumas, transiciones de vida. No tienes que atravesarlos solo/a. La terapia es un lugar seguro para procesar lo que duele.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function AreaCards() {
  return (
    <section className="bg-[#fafaf7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-sans tracking-[0.2em] uppercase text-[#87a87d] mb-4">
            Áreas de trabajo
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d2a26] leading-tight max-w-lg mx-auto">
            Áreas en las que puedo acompañarte
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.slice(0, 3).map(({ title, description, icon }) => (
            <AreaCard key={title} title={title} description={description} icon={icon} />
          ))}
          <div className="sm:col-span-2 lg:col-span-1">
            <AreaCard {...areas[3]} />
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <AreaCard {...areas[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AreaCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group bg-white rounded-3xl p-7 border border-[#ede6dc] hover:border-[#c8dfc3] hover:shadow-[0_8px_32px_-8px_rgba(42,74,27,0.12)] transition-all duration-300">
      <div className="w-11 h-11 rounded-2xl bg-[#f4ebd9] flex items-center justify-center text-[#2a4a1b] mb-5 group-hover:bg-[#edf4eb] transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-[#2d2a26] mb-3">{title}</h3>
      <p className="font-sans text-sm text-[#5a554f] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
