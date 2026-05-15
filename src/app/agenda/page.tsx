import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  WA_URL,
  WA_URL_BUSINESS,
  CALENDLY_URL,
  TESTIMONIOS_FORM_URL,
} from "@/lib/contact";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Agenda tu consulta | Laura Aldana · Psicóloga Online",
  description:
    "Reserva tu primera orientación online con Laura Aldana, psicóloga clínica. Elige el horario que mejor se adapte a ti desde un espacio seguro y profesional.",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AgendaPage() {
  return (
    <>
      <Header />
      <main>
        <AgendaHero />
        <CalendlySection />
        <TalleresSection />
        <TestimoniosSection />
        <AvisoEtico />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

function AgendaHero() {
  return (
    <section className="relative bg-[#fafaf7] pt-32 pb-20 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#edf4eb]/60 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-[#f4ebd9]/80 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-5 h-px bg-[#87a87d]" />
          <span className="text-xs font-sans text-[#87a87d] tracking-[0.2em] uppercase">
            Consulta online
          </span>
          <span className="w-5 h-px bg-[#87a87d]" />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl xl:text-[3.25rem] text-[#2d2a26] leading-[1.12] tracking-tight mb-6">
          Agenda tu primera{" "}
          <em className="not-italic text-[#2a4a1b]">orientación online</em>
        </h1>

        <p className="font-sans text-lg text-[#5a554f] leading-relaxed mb-10 max-w-xl mx-auto">
          Elige un horario disponible para iniciar tu proceso terapéutico en
          español, desde un espacio seguro, profesional y humano.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#reserva"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#2a4a1b] text-white font-sans text-sm font-medium hover:bg-[#3a6228] transition-colors duration-200"
          >
            Reservar ahora
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#2a4a1b] text-[#2a4a1b] font-sans text-sm font-medium hover:bg-[#2a4a1b] hover:text-white transition-all duration-200"
          >
            <svg
              width="14"
              height="14"
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
            Hablar por WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e4d9cc] to-transparent" />
    </section>
  );
}

// ─── Calendly ─────────────────────────────────────────────────────────────────

const calendarTrust = [
  "Atención online en español",
  "Horarios gestionados directamente por Laura",
  "Proceso confidencial y profesional",
];

function CalendlySection() {
  return (
    <section id="reserva" className="bg-[#f4ebd9] py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label — izquierda, estilo editorial */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#87a87d]" />
          <span className="text-xs font-sans text-[#87a87d] tracking-[0.2em] uppercase">
            Reserva tu cita
          </span>
        </div>

        {/* Layout dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] gap-7 items-start">

          {/* ── Columna izquierda: tarjeta editorial ── */}
          <div className="bg-[#fafaf7] rounded-3xl p-8 border border-[#e4d9cc] lg:sticky lg:top-28">

            {/* Icono */}
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

            {/* Bullets de confianza */}
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

            {/* Tagline al pie */}
            <div className="pt-6 border-t border-[#e4d9cc]">
              <p className="font-serif text-sm text-[#8c8680] italic leading-relaxed">
                "El primer paso es el más valioso."
              </p>
            </div>
          </div>

          {/* ── Columna derecha: embed Calendly ── */}
          <div className="min-w-0">

            {/* Mini etiqueta sobre el calendario */}
            <div className="flex items-center gap-2 mb-4 px-1">
              <span className="w-4 h-px bg-[#c8dfc3]" />
              <span className="text-[10px] font-sans text-[#8c8680] tracking-[0.2em] uppercase">
                Selecciona tu fecha y hora
              </span>
            </div>

            {/* Contenedor del iframe */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#ede6dc] shadow-[0_8px_40px_-8px_rgba(42,74,27,0.10)]">
              {/*
                EMBED: iframe de Calendly.
                Si no carga por restricciones del navegador o red, el enlace
                de respaldo inferior permite abrir Calendly en nueva pestaña.

                Para cambiar a modo solo-botón (sin iframe):
                  1. Elimina el bloque <iframe> de abajo.
                  2. Descomenta el bloque "Modo botón" más abajo.
              */}
              <iframe
                src={CALENDLY_URL}
                width="100%"
                height="700"
                style={{ border: "none", display: "block" }}
                title="Reservar primera orientación con Laura Aldana"
                loading="lazy"
                allow="camera; microphone"
              />

              {/*
                ── Modo botón (alternativa sin iframe) ──────────────────────
                <div className="flex flex-col items-center justify-center gap-5 py-16 px-6 text-center">
                  <p className="font-sans text-[#5a554f] text-base leading-relaxed max-w-sm">
                    Haz clic en el botón para elegir tu horario en Calendly.
                  </p>
                  <a
                    href="https://calendly.com/laualdanal/primera-orientacion-online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 rounded-full bg-[#2a4a1b] text-white font-sans text-sm font-medium hover:bg-[#3a6228] transition-colors duration-200"
                  >
                    Elegir horario →
                  </a>
                </div>
                ──────────────────────────────────────────────────────────────
              */}
            </div>

            {/* Fallback — siempre visible como opción de respaldo */}
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

// ─── Talleres ─────────────────────────────────────────────────────────────────

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

function TalleresSection() {
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

// ─── Testimonios ──────────────────────────────────────────────────────────────

function TestimoniosSection() {
  return (
    <section className="bg-[#f4ebd9] py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-sans tracking-[0.2em] uppercase text-[#87a87d] mb-4">
          Tu experiencia
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-[#2d2a26] leading-tight mb-5">
          Comparte tu experiencia
        </h2>
        <p className="font-sans text-[#5a554f] text-lg leading-relaxed mb-5 max-w-xl mx-auto">
          Si has realizado un proceso con Laura y deseas compartir tu
          experiencia, puedes enviar tu testimonio para revisión.
        </p>
        <p className="font-sans text-[#8c8680] text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          Por confidencialidad, solo se publicarán testimonios aprobados y sin
          datos personales identificables. Tu nombre nunca se mostrará sin tu
          consentimiento explícito.
        </p>

        <a
          href={TESTIMONIOS_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2a4a1b] text-white font-sans text-sm font-medium hover:bg-[#3a6228] transition-colors duration-200"
        >
          Enviar testimonio
        </a>

        <p className="font-sans text-xs text-[#8c8680] mt-4">
          El formulario abre en una nueva pestaña.
        </p>
      </div>
    </section>
  );
}

// ─── Aviso ético ──────────────────────────────────────────────────────────────

function AvisoEtico() {
  return (
    <section className="bg-[#fafaf7] py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-[#ede6dc] p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#f4ebd9] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#87a87d"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#2d2a26] mb-4 leading-snug">
                Aviso ético e información importante
              </h3>

              <div className="space-y-3">
                <p className="font-sans text-sm text-[#5a554f] leading-relaxed">
                  <strong className="font-medium text-[#2d2a26]">
                    Situaciones de emergencia:{" "}
                  </strong>
                  Este sitio no sustituye servicios de emergencia ni atención
                  médica inmediata. Si estás en una situación de riesgo o
                  emergencia, contacta los servicios de emergencia de tu país
                  (en España: 112 · en Colombia: 123) o acude al centro de
                  salud más cercano.
                </p>

                <div className="h-px bg-[#ede6dc]" />

                <p className="font-sans text-sm text-[#5a554f] leading-relaxed">
                  <strong className="font-medium text-[#2d2a26]">
                    Sobre el proceso terapéutico:{" "}
                  </strong>
                  La reserva de una orientación no garantiza resultados
                  específicos. El proceso terapéutico depende de la situación
                  particular de cada persona, su compromiso y otros factores
                  individuales.
                </p>

                <div className="h-px bg-[#ede6dc]" />

                <p className="font-sans text-sm text-[#5a554f] leading-relaxed">
                  <strong className="font-medium text-[#2d2a26]">
                    Confidencialidad:{" "}
                  </strong>
                  Toda la información compartida en sesión se trata con
                  absoluta confidencialidad, conforme a los principios éticos
                  del ejercicio de la psicología y la legislación vigente de
                  protección de datos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Botón flotante WhatsApp ───────────────────────────────────────────────────

function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Laura Aldana por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#2a4a1b] text-white shadow-[0_8px_24px_-4px_rgba(42,74,27,0.45)] hover:bg-[#3a6228] hover:shadow-[0_12px_32px_-4px_rgba(42,74,27,0.5)] transition-all duration-200"
    >
      {/* WhatsApp icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>

      {/* Text — visible en desktop, oculto en móvil pequeño */}
      <span className="font-sans text-sm font-medium hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
