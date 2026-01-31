"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function ServicosPage() {
    return (
        <main className="bg-white text-slate-900">
            {/* HERO */}
            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold md:text-4xl"
                    >
                        Serviços em Segurança do Trabalho e Meio Ambiente
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-sm text-slate-600"
                    >
                        Conheça os serviços que a Haase Soluções oferece para manter sua
                        empresa em conformidade legal, reduzir riscos e fortalecer a
                        cultura de segurança e meio ambiente.
                    </motion.p>
                </div>
            </section>

            {/* BLOCOS PRINCIPAIS */}
            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 space-y-10">
                    {/* Programas e Laudos */}
                    <ServiceGroup
                        title="Programas e laudos em Meio Ambiente"
                        description="Elaboração de documentos técnicos e acompanhamento especializado para atender às exigências dos órgãos ambientais e garantir a regularidade do seu empreendimento."
                    >
                        <ServiceItem>Assessoria em meio ambiente</ServiceItem>
                        <ServiceItem>Licenciamento ambiental</ServiceItem>
                        <ServiceItem>Relatórios e pareceres ambientais</ServiceItem>
                        <ServiceItem>
                            Acompanhamento de condicionantes e exigências de órgãos ambientais
                        </ServiceItem>
                    </ServiceGroup>

                    {/* Planos e Programas Específicos */}
                    <ServiceGroup
                        title="Planos e programas específicos"
                        description="Documentos estratégicos para planejamento, controle e gestão ambiental, voltados a resíduos, áreas degradadas e controle de impactos."
                    >
                        <ServiceItem>PCA – Plano de Controle Ambiental</ServiceItem>
                        <ServiceItem>PGRS – Programa de Gerenciamento de Resíduos Sólidos</ServiceItem>
                        <ServiceItem>
                            PGRSS – Programa de Gerenciamento de Resíduos de Serviços de Saúde
                        </ServiceItem>
                        <ServiceItem>
                            PRAD – Plano de Recuperação de Áreas Degradadas
                        </ServiceItem>
                    </ServiceGroup>

                    {/* Estudos e Licenciamento */}
                    <ServiceGroup
                        title="Estudos e licenciamento ambiental"
                        description="Atuação técnica completa para obtenção, renovação ou regularização de licenças e autorizações ambientais."
                    >
                        <ServiceItem>
                            EIA/RIMA – Estudo e Relatório de Impacto Ambiental
                        </ServiceItem>
                        <ServiceItem>Supressão vegetal e autorizações correlatas</ServiceItem>
                        <ServiceItem>
                            Regularização junto a órgãos ambientais municipais, estaduais e federais
                        </ServiceItem>
                    </ServiceGroup>

                    {/* Segurança do Trabalho / Treinamentos */}
                    <ServiceGroup
                        title="Segurança do Trabalho e Treinamentos"
                        description="Apoio técnico para prevenção de acidentes, conformidade com normas de Segurança do Trabalho e capacitação de equipes."
                    >
                        <ServiceItem>
                            Capacitação em segurança do trabalho e boas práticas de prevenção
                        </ServiceItem>
                        <ServiceItem>
                            Treinamentos em gestão de resíduos e boas práticas ambientais
                        </ServiceItem>
                        <ServiceItem>
                            Conscientização em saúde ocupacional e qualidade de vida no trabalho
                        </ServiceItem>
                        <ServiceItem>Treinamentos personalizados por segmento de atuação</ServiceItem>
                    </ServiceGroup>
                </div>
            </section>

            {/* BLOCO CONSULTIVO */}
            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="rounded-2xl border border-emerald-100 bg-white px-6 py-8 shadow-sm md:px-10">
                        <h2 className="text-xl font-bold text-slate-900">
                            Não sabe exatamente de quais documentos sua empresa precisa?
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-600">
                            A Haase realiza uma análise da realidade da sua empresa e indica,
                            de forma objetiva, quais programas, laudos, licenças e
                            treinamentos são necessários para atender às exigências legais e
                            reduzir riscos.
                        </p>

                        <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <p className="text-xs text-slate-600 max-w-lg">
                                Você pode enviar um resumo da situação pelo WhatsApp ou agendar
                                um atendimento consultivo. Nossa equipe retorna com as melhores
                                opções para o seu caso.
                            </p>
                            <a
                                href={WHATSAPP_LINK}
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

            {/* CTA FINAL */}
            <section className="py-14 bg-emerald-900 text-emerald-50">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-xl font-bold">
                        Vamos colocar a documentação da sua empresa em dia?
                    </h2>
                    <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
                        Entre em contato e receba uma orientação inicial sobre quais
                        serviços da Haase são mais indicados para o seu cenário.
                    </p>

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100"
                    >
                        Chamar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}

/* COMPONENTES DE APOIO */

function ServiceGroup({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: React.ReactNode;
}) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
        >
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-xs text-slate-600">{description}</p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 list-disc pl-4">{children}</ul>
        </motion.section>
    );
}

function ServiceItem({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}
