"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cómo funcionan las sesiones online?",
    a: "Las sesiones se realizan por videollamada a través de una plataforma segura y fácil de usar. Solo necesitas una conexión a internet estable, un dispositivo con cámara y un espacio tranquilo donde puedas hablar con privacidad.",
  },
  {
    q: "¿Cuánto dura cada sesión?",
    a: "Las sesiones individuales tienen una duración de 50 minutos. Las sesiones de pareja son de 60 a 75 minutos. La consulta inicial de exploración dura aproximadamente 40 minutos.",
  },
  {
    q: "¿Cuántas sesiones voy a necesitar?",
    a: "No existe una respuesta única. Depende de lo que estás trabajando, tu historia personal y el ritmo al que quieras ir. Algunos procesos son breves y focalizados; otros son más largos. Lo definimos juntos desde el inicio y lo revisamos a medida que avanzamos.",
  },
  {
    q: "¿Es confidencial la terapia online?",
    a: "Totalmente. La confidencialidad es un principio ético fundamental de la psicología. Todo lo que compartes en sesión queda entre nosotras. Solo existen excepciones muy específicas contempladas por la ley, como riesgo inminente para la vida.",
  },
  {
    q: "¿Puedo empezar si vivo fuera de Colombia?",
    a: "Sí. Trabajo con personas en cualquier país de habla hispana. Las sesiones online eliminan la barrera de la distancia. Si vives en otra zona horaria, encontramos un horario que funcione para los dos.",
  },
  {
    q: "¿Qué pasa si no me siento lista/listo?",
    a: "Sentir que no estás lista/listo es, muchas veces, una señal de que algo sí necesita atención. No necesitas tenerlo todo claro para empezar. La consulta inicial existe precisamente para explorar eso juntas, sin compromisos.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#f4ebd9] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-sans tracking-[0.2em] uppercase text-[#87a87d] mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d2a26] leading-tight">
            Lo que suelen preguntarme
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={q}
                className="bg-white rounded-2xl border border-[#ede6dc] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-sm font-medium text-[#2d2a26] leading-snug">
                    {q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#e4d9cc] flex items-center justify-center text-[#87a87d] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <line
                        x1="5"
                        y1="1"
                        x2="5"
                        y2="9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="1"
                        y1="5"
                        x2="9"
                        y2="5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 border-t border-[#f4ebd9]">
                    <p className="font-sans text-sm text-[#5a554f] leading-relaxed pt-4">
                      {a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
