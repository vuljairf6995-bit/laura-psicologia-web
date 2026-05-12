import Image from "next/image";

const credentials = [
  "Fundación Santa Fe de Bogotá",
  "Fundación Hablando Solas",
  "ICBF · Línea 141",
  "+7 años de experiencia clínica y acompañamiento emocional",
];

export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#fafaf7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute top-8 -left-4 w-48 h-64 rounded-3xl bg-[#f4ebd9] -z-10" />
            <div className="absolute -bottom-6 right-4 w-32 h-32 rounded-full bg-[#c8dfc3]/40 -z-10" />

            <div className="relative w-[300px] h-[400px] sm:w-[340px] sm:h-[450px] rounded-[2rem] overflow-hidden shadow-[0_24px_64px_-12px_rgba(0,0,0,0.14)]">
              <Image
                src="/images/laura-about.jpeg"
                alt="Laura Aldana, psicóloga clínica"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 300px, 340px"
              />
            </div>

            {/* Floating credential card */}
            <div className="absolute -right-2 sm:-right-6 bottom-8 bg-white rounded-2xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12)] px-5 py-4 max-w-[200px]">
              <p className="font-serif text-sm text-[#2d2a26] leading-snug italic">
                "Cada persona lleva en sí la capacidad de sanar."
              </p>
              <p className="font-sans text-[11px] text-[#87a87d] mt-2 tracking-wide">
                — Laura Aldana
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block text-xs font-sans tracking-[0.2em] uppercase text-[#87a87d] mb-4">
              Sobre mí
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2d2a26] leading-tight mb-6">
              Hola, soy Laura
            </h2>

            <p className="font-sans text-[#5a554f] text-lg leading-relaxed mb-5">
              Soy psicóloga clínica con formación y experiencia en acompañamiento
              emocional, enfocada en crear un espacio donde las personas puedan
              sentirse realmente escuchadas, sin juicio y sin prisa.
            </p>

            <p className="font-sans text-[#5a554f] text-base leading-relaxed mb-5">
              Mi trabajo clínico me ha permitido acompañar personas en momentos
              de profunda vulnerabilidad: desde crisis emocionales hasta procesos
              de largo aliento. He aprendido que cada historia es única y que la
              terapia que transforma es aquella que se adapta a quien la vive.
            </p>

            <p className="font-sans text-[#5a554f] text-base leading-relaxed mb-8">
              Creo en un enfoque humano, honesto y clínicamente sólido. Mi
              objetivo no es darte respuestas, sino acompañarte a encontrarlas.
            </p>

            {/* Credentials */}
            <div className="bg-[#f4ebd9] rounded-2xl p-6 mb-4">
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#8c8680] mb-4">
                Experiencia profesional
              </p>
              <ul className="space-y-2.5">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
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
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formation */}
            <div className="bg-[#f4ebd9] rounded-2xl p-6">
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#8c8680] mb-4">
                Formación académica
              </p>
              <ul className="space-y-2.5">
                {[
                  "Profesional en Psicología · Universidad Politécnico Grancolombiano",
                  "Máster en Psicología General Sanitaria · Universidad de Navarra",
                  "Máster en Terapias de Tercera Generación · Instituto Raimon Gaja S.L.",
                  "Diplomado en Trastornos de la Conducta Alimentaria · Universitaria de Colombia",
                  "Diplomado en Terapia Cognitiva Conductual y Terapia basada en evidencia",
                ].map((f) => (
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
                        stroke="#87a87d"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-sans text-sm text-[#4a4540] leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
