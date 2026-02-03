import Link from "next/link";

export function ServicosResumo() {
    return (
        <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Nossos serviços</h2>
                        <p className="mt-2 text-sm text-slate-600 max-w-xl">
                            A HAASE oferece soluções completas em Segurança do Trabalho, Perícias Judiciais e
                            Meio Ambiente, com atuação técnica, ética e alinhada à legislação vigente.
                        </p>
                        <p className="mt-2 text-xs text-emerald-700">
                            Precisa de ergonomia e riscos psicossociais? Veja em{" "}
                            <Link href="/ergonomia-e-riscos-psicossociais" className="font-semibold hover:text-emerald-900">
                                Ergonomia e Riscos Psicossociais
                            </Link>
                            .
                        </p>
                    </div>
                    <Link
                        href="/contato"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                    >
                        Falar com um especialista →
                    </Link>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <ResumoCard titulo="Segurança do Trabalho" href="/seguranca-do-trabalho">
                        <li>Assessoria e consultoria técnica em SST</li>
                        <li>Acompanhamento técnico de obras</li>
                        <li>Documentos legais (PGR, LTCAT, APR, POPs)</li>
                        <li>Treinamentos conforme NR&apos;s e DDS</li>
                    </ResumoCard>

                    <ResumoCard titulo="Perícias Judiciais" href="/pericias-judiciais">
                        <li>Perícias judiciais de insalubridade</li>
                        <li>Perícias judiciais de periculosidade</li>
                        <li>Assistência técnica em processos trabalhistas</li>
                        <li>Laudos, pareceres, quesitos e impugnações</li>
                    </ResumoCard>

                    <ResumoCard titulo="Meio Ambiente" href="/meio-ambiente">
                        <li>Licenciamento ambiental</li>
                        <li>Auditorias e perícias ambientais</li>
                        <li>Gestão ambiental de empreendimentos</li>
                        <li>Programas, planos de resíduos e sustentabilidade</li>
                    </ResumoCard>
                </div>

                <div className="mt-10 flex flex-col gap-3 rounded-2xl bg-emerald-900 px-6 py-6 text-sm text-emerald-50 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                            Atendimento consultivo
                        </p>
                        <p className="mt-1 font-semibold">
                            Atendimento técnico especializado conforme a necessidade do empreendimento.
                        </p>
                    </div>
                    <Link
                        href="/contato"
                        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100"
                    >
                        Solicitar atendimento
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ResumoCard({
    titulo,
    children,
    href,
}: {
    titulo: string;
    children: React.ReactNode;
    href?: string;
}) {
    const content = (
        <div
            className={`h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md ${href ? "hover:bg-emerald-50 cursor-pointer" : ""
                }`}
        >
            <h3 className="text-sm font-semibold text-slate-900">{titulo}</h3>
            <ul className="mt-3 space-y-1 text-xs text-slate-700 list-disc pl-4">{children}</ul>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block h-full">
                {content}
            </Link>
        );
    }

    return content;
}

