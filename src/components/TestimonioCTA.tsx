import { TESTIMONIOS_FORM_URL } from "@/lib/contact";

export default function TestimonioCTA() {
  return (
    <section className="bg-[#f4ebd9] py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-sans tracking-[0.2em] uppercase text-[#87a87d] mb-4">
          Tu experiencia
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#2d2a26] leading-tight mb-4">
          ¿Has trabajado con Laura?
        </h2>
        <p className="font-sans text-[#5a554f] text-base leading-relaxed mb-8 max-w-lg mx-auto">
          Si deseas compartir tu experiencia, puedes enviar tu testimonio para
          revisión. Solo se publican con tu consentimiento y sin datos
          identificables.
        </p>
        <a
          href={TESTIMONIOS_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#2a4a1b] text-[#2a4a1b] font-sans text-sm font-medium hover:bg-[#2a4a1b] hover:text-white transition-all duration-200"
        >
          Compartir mi experiencia
        </a>
      </div>
    </section>
  );
}
