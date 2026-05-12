const testimonials = [
  {
    quote:
      "Llevaba tiempo buscando un espacio donde sentirme realmente escuchada. Con Laura encontré justo eso. El proceso ha sido gradual, honesto y genuinamente transformador.",
    name: "María C.",
    context: "Proceso individual · Ansiedad",
    initial: "M",
  },
  {
    quote:
      "La terapia online me daba mucha desconfianza al principio. Desde la primera sesión sentí una conexión real y un espacio seguro para trabajar mis miedos sin sentirme juzgado.",
    name: "Andrés M.",
    context: "Proceso individual · 28 años",
    initial: "A",
  },
  {
    quote:
      "Mi pareja y yo llegamos en un momento muy difícil. El acompañamiento de Laura nos ayudó a comunicarnos de otra manera y a entender qué nos estaba pasando realmente.",
    name: "Sofía y Pablo",
    context: "Terapia de pareja",
    initial: "S",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#fafaf7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-sans tracking-[0.2em] uppercase text-[#87a87d] mb-4">
            Testimonios
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d2a26] leading-tight">
            Lo que dicen quienes han trabajado conmigo
          </h2>
          <p className="font-sans text-[#8c8680] text-sm mt-4 max-w-sm mx-auto leading-relaxed">
            Testimonios reales, compartidos con permiso. Nombres modificados
            para proteger la confidencialidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, context, initial }) => (
            <div
              key={name}
              className="bg-white rounded-3xl p-8 border border-[#ede6dc] flex flex-col"
            >
              {/* Quote mark */}
              <div className="mb-5">
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 22V13.2C0 9.73333 0.866667 6.8 2.6 4.4C4.33333 2 6.73333 0.533333 9.8 0L11 2.8C9.26667 3.26667 7.9 4.13333 6.9 5.4C5.9 6.66667 5.4 8.06667 5.4 9.6H9.4V22H0ZM16.6 22V13.2C16.6 9.73333 17.4667 6.8 19.2 4.4C20.9333 2 23.3333 0.533333 26.4 0L27.6 2.8C25.8667 3.26667 24.5 4.13333 23.5 5.4C22.5 6.66667 22 8.06667 22 9.6H26V22H16.6Z"
                    fill="#e4d9cc"
                  />
                </svg>
              </div>

              <blockquote className="font-sans text-[#4a4540] text-[15px] leading-[1.75] flex-1 mb-6">
                {quote}
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-[#ede6dc]">
                <div className="w-9 h-9 rounded-full bg-[#edf4eb] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-sm text-[#2a4a1b] font-semibold">
                    {initial}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-[#2d2a26]">
                    {name}
                  </p>
                  <p className="font-sans text-xs text-[#8c8680]">{context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
