import Image from "next/image";
import { WA_URL } from "@/lib/contact";

const badges = [
  "+7 años de experiencia",
  "Terapia online",
  "Individual y de pareja",
  "Enfoque humano y clínico",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#fafaf7] flex items-center pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#87a87d]" />
              <span className="text-xs font-sans text-[#87a87d] tracking-[0.2em] uppercase">
                Psicología online en español
              </span>
            </div>

            <h1 className="font-serif text-[2.6rem] md:text-5xl xl:text-[3.5rem] leading-[1.12] tracking-tight text-[#2d2a26] mb-6">
              Un espacio seguro para{" "}
              <em className="not-italic text-[#2a4a1b]">comprender</em>,{" "}
              sanar y volver a ti
            </h1>

            <p className="font-sans text-lg text-[#5a554f] leading-relaxed mb-8 max-w-lg">
              Terapia online en español para ansiedad, depresión, relaciones de
              pareja y bienestar emocional.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#2a4a1b] text-white font-sans text-sm font-medium hover:bg-[#3a6228] transition-colors duration-200"
              >
                Quiero iniciar terapia
              </a>
              <a
                href="#sobre-mi"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#2a4a1b] text-[#2a4a1b] font-sans text-sm font-medium hover:bg-[#2a4a1b] hover:text-white transition-all duration-200"
              >
                Conocer el enfoque
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#edf4eb] text-[#2a4a1b] text-xs font-sans font-medium border border-[#c8dfc3]"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1.5 5L3.8 7.5L8.5 2.5"
                      stroke="#2a4a1b"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -top-6 -right-6 w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-[#edf4eb] -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[#c8dfc3]/50 -z-10" />

              {/* Photo frame */}
              <div className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] lg:w-[380px] lg:h-[480px] rounded-[2rem] overflow-hidden shadow-[0_24px_64px_-12px_rgba(42,74,27,0.18)]">
                <Image
                  src="/images/laura-hero.jpeg"
                  alt="Laura Aldana, psicóloga online"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 380px"
                />
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12)] px-4 py-3 flex items-center gap-2.5 max-w-[200px]">
                <div className="w-8 h-8 rounded-full bg-[#edf4eb] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a4a1b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-sans font-semibold text-[#2d2a26] leading-tight">
                    Espacio seguro
                  </p>
                  <p className="text-[10px] font-sans text-[#8c8680] leading-tight">
                    y confidencial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e4d9cc] to-transparent" />
    </section>
  );
}
