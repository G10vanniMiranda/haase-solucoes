import Link from "next/link";
import { MotionH1, MotionP, MotionSection, ReducedMotion } from "../../components/MotionPrimitives";
import type { AcquisitionContext } from "../../lib/acquisition/context";
import { measurementAttributesForAcquisition } from "../../lib/measurement/acquisition";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const servicesSpecialistContext = {
    page: "services",
    position: "section",
    intent: "talk-to-specialist",
} satisfies AcquisitionContext;

const servicesContactContext = {
    page: "services",
    position: "section",
    intent: "contact",
} satisfies AcquisitionContext;

export default function ServicosPage() {
    return (
        <ReducedMotion>
        <main id="main-content" tabIndex={-1} className="bg-white text-slate-900">
            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <MotionH1
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold md:text-4xl"
                    >
                        Serviços em Segurança do Trabalho, Perícias e Meio Ambiente
                    </MotionH1>

                    <MotionP
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-sm text-slate-600"
                    >
                        A HAASE oferece soluções técnicas completas para empresas, obras e instituições que
                        buscam conformidade legal, segurança operacional e responsabilidade ambiental.
                    </MotionP>
                </div>
            </section>

            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 space-y-10">
                    <ServiceGroup
                        title="Segurança do Trabalho"
                        description="Assessoria e consultoria técnica, acompanhamento de obras, elaboração de documentos legais e treinamentos conforme NR&apos;s."
                        linkHref="/seguranca-do-trabalho"
                        linkLabel="Ver página de Segurança do Trabalho"
                    >
                        <ServiceItem>Assessoria e consultoria em Segurança do Trabalho</ServiceItem>
                        <ServiceItem>Acompanhamento técnico de obras</ServiceItem>
                        <ServiceItem>Documentos legais (PGR, LTCAT, APR, POPs)</ServiceItem>
                        <ServiceItem>Envio de eventos de SST para o eSocial</ServiceItem>
                        <ServiceItem>Implantação e acompanhamento de rotinas conforme NR&apos;s</ServiceItem>
                        <ServiceItem>Gestão de EPI e EPC</ServiceItem>
                        <ServiceItem>DDS - Diálogo Diário de Segurança</ServiceItem>
                        <ServiceItem>Apoio técnico ao SESMT</ServiceItem>
                    </ServiceGroup>

                    <ServiceGroup
                        title="Perícias Judiciais - Insalubridade e Periculosidade"
                        description="Atuação como perita judicial e assistente técnica, com laudos técnicos e pareceres fundamentados em normas legais."
                        linkHref="/pericias-judiciais"
                        linkLabel="Ver página de Perícias Judiciais"
                    >
                        <ServiceItem>Perícias judiciais de insalubridade</ServiceItem>
                        <ServiceItem>Perícias judiciais de periculosidade</ServiceItem>
                        <ServiceItem>Assistência técnica em processos trabalhistas</ServiceItem>
                        <ServiceItem>Laudos, pareceres técnicos, quesitos e impugnações</ServiceItem>
                        <ServiceItem>Avaliação conforme NR 15 e NR 16</ServiceItem>
                    </ServiceGroup>

                    <ServiceGroup
                        title="Meio Ambiente"
                        description="Licenciamento ambiental, auditorias, perícias ambientais, gestão ambiental e programas de sustentabilidade."
                        linkHref="/meio-ambiente"
                        linkLabel="Ver página de Meio Ambiente"
                    >
                        <ServiceItem>Licenciamento ambiental</ServiceItem>
                        <ServiceItem>Auditorias ambientais</ServiceItem>
                        <ServiceItem>Perícias ambientais</ServiceItem>
                        <ServiceItem>Gestão ambiental de empreendimentos</ServiceItem>
                        <ServiceItem>Diagnóstico e controle de impactos ambientais</ServiceItem>
                        <ServiceItem>Programas de sustentabilidade empresarial</ServiceItem>
                    </ServiceGroup>

                    <ServiceGroup
                        title="Ergonomia e Riscos Psicossociais"
                        description="Atuação especializada em ergonomia ocupacional e gestão de riscos psicossociais, com integração ao PGR (NR 01)."
                        linkHref="/ergonomia-e-riscos-psicossociais"
                        linkLabel="Ver página de Ergonomia e Riscos Psicossociais"
                    >
                        <ServiceItem>Análise Ergonômica do Trabalho (AET)</ServiceItem>
                        <ServiceItem>Avaliação de carga mental, ritmo e organização do trabalho</ServiceItem>
                        <ServiceItem>Relatórios técnicos e pareceres</ServiceItem>
                        <ServiceItem>Inclusão de riscos psicossociais no PGR</ServiceItem>
                    </ServiceGroup>
                </div>
            </section>

            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="rounded-2xl border border-emerald-100 bg-white px-6 py-8 shadow-sm md:px-10">
                        <h2 className="text-xl font-bold text-slate-900">
                            Não sabe exatamente de quais serviços sua empresa precisa?
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-600">
                            A HAASE realiza uma análise da realidade da sua empresa e indica, de forma objetiva,
                            quais programas, laudos, licenças e treinamentos são necessários para atender às exigências legais.
                        </p>

                        <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <p className="text-xs text-slate-600 max-w-lg">
                                Você pode enviar um resumo da situação pelo WhatsApp ou agendar um atendimento consultivo.
                                Nossa equipe retorna com as melhores opções para o seu caso.
                            </p>
                            <a
                                href={buildWhatsAppLink(servicesSpecialistContext)}
                                {...measurementAttributesForAcquisition(
                                    servicesSpecialistContext,
                                    "whatsapp_click"
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-800 animate-pulse"
                            >
                                Falar com um especialista
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-emerald-900 text-emerald-50">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-xl font-bold">
                        Vamos colocar a documentação da sua empresa em dia?
                    </h2>
                    <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
                        Entre em contato e receba uma orientação inicial sobre quais serviços são mais indicados
                        para o seu cenário.
                    </p>

                    <a
                        href={buildWhatsAppLink(servicesContactContext)}
                        {...measurementAttributesForAcquisition(
                            servicesContactContext,
                            "whatsapp_click"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100"
                    >
                        Chamar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
        </ReducedMotion>
    );
}

function ServiceGroup({
    title,
    description,
    children,
    linkHref,
    linkLabel,
}: {
    title: string;
    description: string;
    children: React.ReactNode;
    linkHref: string;
    linkLabel: string;
}) {
    return (
        <MotionSection
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
        >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
                    <p className="mt-2 text-xs text-slate-600">{description}</p>
                </div>
                <Link href={linkHref} className="text-xs font-semibold text-emerald-700 hover:text-emerald-900">
                    {linkLabel}
                </Link>
            </div>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 list-disc pl-4">{children}</ul>
        </MotionSection>
    );
}

function ServiceItem({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}

