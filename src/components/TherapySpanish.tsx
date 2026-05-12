export default function TherapySpanish() {
  return (
    <section className="bg-[#2a4a1b] py-24 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/[0.03] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-5 h-px bg-[#87a87d]" />
            <span className="text-xs font-sans text-[#87a87d] tracking-[0.2em] uppercase">
              En tu idioma
            </span>
            <span className="w-5 h-px bg-[#87a87d]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
            Terapia en tu idioma.{" "}
            <em className="not-italic text-[#c8dfc3]">En tu cultura.</em>
          </h2>

          <p className="font-sans text-white/70 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            El idioma no es solo palabras. Es el lugar desde donde sientes,
            piensas y te conectas con tu propia experiencia. Expresarte en
            español te permite decir exactamente lo que quieres decir, con
            todos sus matices.
          </p>

          <p className="font-sans text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            La terapia que transforma ocurre cuando puedes ser completamente tú
            mismo/a, en tu lengua, desde tu contexto cultural, sin tener que
            traducirte ni explicarte de más.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-[#2a4a1b] font-sans text-sm font-medium hover:bg-[#edf4eb] transition-colors duration-200"
            >
              Quiero empezar
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center px-8 py-3.5 rounded-full border border-white/30 text-white font-sans text-sm font-medium hover:border-white/60 transition-colors duration-200"
            >
              Ver cómo funciona
            </a>
          </div>

          {/* Features strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
            {[
              {
                title: "Desde donde estés",
                desc: "Sesiones online para cualquier país de habla hispana",
              },
              {
                title: "A tu ritmo",
                desc: "Horarios flexibles adaptados a tu zona horaria",
              },
              {
                title: "Con tu contexto",
                desc: "Una psicóloga que entiende tu cultura y tu forma de sentir",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="text-center">
                <p className="font-serif text-white text-lg mb-1.5">{title}</p>
                <p className="font-sans text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
