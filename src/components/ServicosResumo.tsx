import Link from "next/link";

export function ServicosResumo() {
    return (
        <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">

                {/* TÍTULO E LINK */}
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Nossos principais serviços
                        </h2>
                        <p className="mt-2 text-sm text-slate-600 max-w-xl">
                            A Haase oferece assessoria completa em meio ambiente e segurança do trabalho,
                            com foco em regularização, prevenção e sustentabilidade.
                        </p>
                    </div>

                    <Link
                        href="/servicos"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition"
                    >
                        Ver detalhes dos serviços →
                    </Link>
                </div>

                {/* CARDS */}
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <ResumoCard titulo="Programas e laudos em meio ambiente">
                        <li>• Assessoria em meio ambiente</li>
                        <li>• Licenciamento ambiental</li>
                        <li>• Relatórios ambientais</li>
                    </ResumoCard>

                    <ResumoCard titulo="Planos e programas específicos">
                        <li>• PCA – Plano de Controle Ambiental</li>
                        <li>• PGRS – Programa de Gerenciamento de Resíduos Sólidos</li>
                        <li>• PGRSS – Programa de Resíduos de Serviços de Saúde</li>
                        <li>• PRAD – Plano de Recuperação de Áreas Degradadas</li>
                    </ResumoCard>

                    <ResumoCard titulo="Estudos e licenciamento">
                        <li>• EIA/RIMA – Estudo e Relatório de Impacto Ambiental</li>
                        <li>• Supressão vegetal</li>
                        <li>• Regularização junto a órgãos ambientais</li>
                    </ResumoCard>
                </div>

                {/* CTA FINAL */}
                <div className="mt-10 flex flex-col gap-3 rounded-2xl bg-emerald-900 px-6 py-6 text-sm text-emerald-50 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                            Atendimento consultivo
                        </p>
                        <p className="mt-1 font-semibold">
                            Não sabe por onde começar? A Haase analisa a realidade da sua empresa e indica exatamente quais programas e laudos você precisa.
                        </p>
                    </div>

                    {/* BOTÃO PULSANTE */}
                    <Link
                        href="/contato"
                        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold text-emerald-900 shadow-sm hover:bg-emerald-100 transition transform hover:scale-105 animate-pulse"
                    >
                        Falar agora
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ResumoCard({
    titulo,
    children,
}: {
    titulo: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md hover:bg-slate-100">
            <h3 className="text-sm font-semibold text-slate-900">{titulo}</h3>
            <ul className="mt-3 space-y-1 text-xs text-slate-700">
                {children}
            </ul>
        </div>
    );
}
