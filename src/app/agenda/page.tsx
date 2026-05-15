import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlySection from "@/components/CalendlySection";
import TalleresSection from "@/components/TalleresSection";
import AvisoEtico from "@/components/AvisoEtico";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WA_URL, TESTIMONIOS_FORM_URL } from "@/lib/contact";

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
