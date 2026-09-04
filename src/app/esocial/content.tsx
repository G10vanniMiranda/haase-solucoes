import React from "react";
import { MotionA, MotionDiv, MotionH1, MotionP, ReducedMotion } from "../../components/MotionPrimitives";
import type { AcquisitionContext } from "../../lib/acquisition/context";
import { measurementAttributesForAcquisition } from "../../lib/measurement/acquisition";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const esocialHeroContext = {
    page: "esocial",
    service: "esocial",
    position: "hero-primary",
    intent: "request-assessment",
} satisfies AcquisitionContext;

const esocialSectionContext = {
    page: "esocial",
    service: "esocial",
    position: "section",
    intent: "request-assessment",
} satisfies AcquisitionContext;

export default function Content() {
    return (
        <ReducedMotion>
        <main id="main-content" tabIndex={-1} className="bg-white text-slate-900">
            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <MotionH1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold md:text-4xl"
                    >
                        Envio de Eventos de SST para o eSocial
                    </MotionH1>

                    <MotionP
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-sm text-slate-600"
                    >
                        Segurança jurídica, conformidade legal e tranquilidade para sua empresa com a gestão
                        completa dos eventos de Saúde e Segurança do Trabalho.
                    </MotionP>

                    <MotionA
                        href={buildWhatsAppLink(esocialHeroContext)}
                        {...measurementAttributesForAcquisition(
                            esocialHeroContext,
                            "whatsapp_click"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 animate-pulse"
                    >
                        Solicitar avaliação técnica
                    </MotionA>
                </div>
            </section>

            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-start">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl font-bold">Gestão completa dos eventos de SST</h2>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            A HAASE realiza a gestão técnica e o envio dos eventos de SST ao eSocial, garantindo
                            aderência à legislação trabalhista e previdenciária, além das exigências do sistema.
                        </p>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            O serviço é preventivo e estratégico, reduzindo riscos de multas, autuações,
                            notificações e passivos trabalhistas.
                        </p>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm text-sm text-slate-700"
                    >
                        <p className="font-semibold text-emerald-800">Eventos de SST atendidos</p>
                        <ul className="mt-3 space-y-2 text-xs list-disc pl-4">
                            <li>
                                <span className="font-semibold">S-2210</span> - Comunicação de Acidente de Trabalho (CAT)
                            </li>
                            <li>
                                <span className="font-semibold">S-2220</span> - Monitoramento da Saúde do Trabalhador
                            </li>
                            <li>
                                <span className="font-semibold">S-2240</span> - Condições Ambientais do Trabalho
                            </li>
                        </ul>
                    </MotionDiv>
                </div>
            </section>

            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold text-slate-900">Como funciona nosso serviço</h2>
                    <p className="mt-2 max-w-2xl text-sm text-slate-600">
                        Fluxo técnico estruturado para garantir informações corretas, prazos atendidos e
                        documentação alinhada ao eSocial.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <SectionCard titulo="Etapas principais">
                            <Item>Análise técnica da empresa e das atividades exercidas</Item>
                            <Item>Conferência e compatibilização de PGR, PCMSO, LTCAT e correlatos</Item>
                            <Item>Validação conforme o Manual de Orientação do eSocial (MOS)</Item>
                            <Item>Envio correto dos eventos dentro dos prazos legais</Item>
                        </SectionCard>

                        <SectionCard titulo="Suporte contínuo">
                            <Item>Suporte técnico especializado durante todo o processo</Item>
                            <Item>Integração entre documentos técnicos e eventos do eSocial</Item>
                            <Item>Redução de inconsistências e riscos legais</Item>
                        </SectionCard>
                    </div>
                </div>
            </section>

            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl font-bold text-slate-900">Diferenciais da HAASE</h2>
                        <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                            <li>Equipe multidisciplinar especializada em SST e Meio Ambiente</li>
                            <li>Atuação forte em construção civil, saúde, indústria e serviços</li>
                            <li>Integração entre documentos técnicos e eventos do eSocial</li>
                            <li>Atendimento personalizado e responsável</li>
                        </ul>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl border border-emerald-100 bg-white p-6 text-sm text-slate-800 shadow-sm"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Por que manter o eSocial em dia?
                        </p>
                        <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                            <li>Multas administrativas</li>
                            <li>Autos de infração</li>
                            <li>Bloqueio de certidões</li>
                            <li>Passivos trabalhistas e previdenciários</li>
                        </ul>
                        <p className="mt-4 text-xs text-slate-600">
                            Com a HAASE, sua empresa atua de forma preventiva, segura e em conformidade
                            com a legislação.
                        </p>
                    </MotionDiv>
                </div>
            </section>

            <section className="py-14 bg-emerald-900 text-emerald-50">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-xl font-bold">Fale com a HAASE</h2>
                    <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
                        Atendimento técnico especializado, com atuação regional e nacional, para manter
                        o eSocial da sua empresa em dia.
                    </p>

                    <a
                        href={buildWhatsAppLink(esocialSectionContext)}
                        {...measurementAttributesForAcquisition(
                            esocialSectionContext,
                            "whatsapp_click"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100"
                    >
                        Solicitar avaliação técnica
                    </a>
                </div>
            </section>
        </main>
        </ReducedMotion>
    );
}

function SectionCard({
    titulo,
    children,
}: {
    titulo: string;
    children: React.ReactNode;
}) {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-xs text-slate-700 shadow-sm"
        >
            <h3 className="text-sm font-semibold text-slate-900">{titulo}</h3>
            <ul className="mt-3 space-y-2 list-disc pl-4">{children}</ul>
        </MotionDiv>
    );
}

function Item({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}
