import { WHATSAPP_LINK } from "../lib/constants";

export function ContatoRapido() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 text-center shadow-sm md:px-10">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Atendimento técnico especializado conforme a necessidade do empreendimento
                    </h2>

                    <p className="mt-2 mx-auto max-w-2xl text-sm text-slate-600">
                        Envie uma mensagem pelo WhatsApp e conte brevemente a situação da sua empresa.
                        A HAASE retorna com uma orientação inicial e as melhores alternativas para o seu caso.
                    </p>

                    <div className="mt-5 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chamar a HAASE no WhatsApp"
                            className="
                inline-flex items-center justify-center rounded-full
                bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white
                shadow-sm transition
                hover:bg-emerald-800 hover:shadow-md
                transform hover:scale-105
                animate-pulse
              "
                        >
                            Chamar no WhatsApp
                        </a>

                        <div className="text-xs text-slate-600">
                            Ou, se preferir, envie um e-mail para{" "}
                            <span className="font-semibold">haasesolucoes@gmail.com</span>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center text-[11px] text-slate-500">
                    HAASE - Assessoria e Consultoria em Segurança do Trabalho e Meio Ambiente •{" "}
                    <span className="font-medium">
                        Responsabilidade técnica, compromisso legal e foco na prevenção.
                    </span>
                </p>
            </div>
        </section>
    );
}

