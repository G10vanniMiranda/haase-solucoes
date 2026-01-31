import Link from "next/link";

export function ServicosResumo() {
    return (
        <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Nossas principais soluções
                        </h2>
                        <p className="mt-2 text-sm text-slate-600 max-w-xl">
                            A Haase Soluções atua em{" "}
                            <span className="font-semibold">Segurança do Trabalho</span> e{" "}
                            <span className="font-semibold">Meio Ambiente</span>, oferecendo consultoria,
                            programas, laudos, licenciamento e treinamentos para empresas de{" "}
                            <span className="font-semibold">Porto Velho – RO e região</span> que buscam
                            operar em conformidade e de forma segura.
                        </p>

                    </div>
                    {/* Se quiser, pode remover esse link ou apontar para /contato */}
                    <Link
                        href="/contato"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                    >
                        Falar com um especialista →
                    </Link>
                </div>

                {/* CARDS */}
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <ResumoCard
                        titulo="Segurança do Trabalho"
                        href="/seguranca-do-trabalho"
                    >
                        <li>Consultoria em Segurança do Trabalho</li>
                        <li>Programas e laudos ocupacionais</li>
                        <li>Diagnóstico de riscos e adequações</li>
                        <li>Treinamentos focados em prevenção</li>
                    </ResumoCard>

                    <ResumoCard
                        titulo="Meio Ambiente"
                        href="/meio-ambiente"
                    >
                        <li>Consultoria ambiental completa</li>
                        <li>Licenciamento ambiental</li>
                        <li>Planos e programas (PCA, PGRS, PRAD, PGRSS)</li>
                        <li>Estudos e relatórios ambientais</li>
                    </ResumoCard>

                    <ResumoCard titulo="Treinamentos corporativos">
                        <li>Treinamentos em Segurança do Trabalho</li>
                        <li>Boas práticas ambientais e gestão de resíduos</li>
                        <li>Conscientização em saúde ocupacional</li>
                        <li>Conteúdos adaptados à realidade da empresa</li>
                    </ResumoCard>
                </div>

                {/* BANNER CONSULTIVO */}
                <div className="mt-10 flex flex-col gap-3 rounded-2xl bg-emerald-900 px-6 py-6 text-sm text-emerald-50 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                            Atendimento consultivo
                        </p>
                        <p className="mt-1 font-semibold">
                            Não tem certeza se sua empresa precisa de apoio em Segurança do
                            Trabalho, Meio Ambiente ou ambos? A Haase analisa o seu cenário e
                            indica de forma objetiva quais documentos, programas e treinamentos
                            são necessários.
                        </p>
                    </div>
                    <Link
                        href="/contato"
                        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100"
                    >
                        Solicitar uma avaliação
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
