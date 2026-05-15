export default function AvisoEtico() {
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
