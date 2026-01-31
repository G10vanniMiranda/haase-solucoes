"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function Content() {
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
                        Consultoria Ambiental para empresas em conformidade com a legislação
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-sm text-slate-600"
                    >
                        A Haase Soluções apoia sua empresa em todas as etapas da gestão ambiental
                        em <span className="font-semibold">Porto Velho – RO e região</span>: licenciamento, programas,
                        planos, estudos e atendimento às exigências dos órgãos ambientais.
                    </motion.p>

                    <motion.a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 animate-pulse"
                    >
                        Falar com especialista em Meio Ambiente
                    </motion.a>
                </div>
            </section>

            {/* QUEM ATENDEMOS / O QUE FAZEMOS */}
            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl font-bold">Consultoria ambiental técnica e personalizada</h2>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            A Haase atua na estruturação, regularização e acompanhamento ambiental
                            da sua empresa, garantindo que as atividades estejam em conformidade com
                            a legislação e reduzindo o risco de autuações, embargos e sanções.
                        </p>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            Seja para iniciar um empreendimento, renovar licenças ou organizar os
                            programas e planos ambientais, nossa equipe oferece suporte técnico
                            completo, com foco em resultados práticos e segurança jurídica.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm text-sm text-slate-700"
                    >
                        <p className="font-semibold text-emerald-800">Para quais tipos de empresas?</p>
                        <ul className="mt-3 space-y-2 text-xs list-disc pl-4">
                            <li>Empresas que precisam de licenciamento ambiental.</li>
                            <li>Negócios com geração de resíduos e necessidade de PGRS.</li>
                            <li>Empreendimentos sujeitos a controle de supressão vegetal.</li>
                            <li>Organizações que buscam estruturar a gestão ambiental.</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* PROGRAMAS E PLANOS AMBIENTAIS */}
            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold text-slate-900">Programas e planos ambientais</h2>
                    <p className="mt-2 max-w-2xl text-sm text-slate-600">
                        Elaboração e implementação de planos e programas ambientais que atendem às
                        exigências legais e contribuem para uma gestão mais sustentável.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <SectionCard titulo="Planejamento e controle ambiental">
                            <Item>PCA – Plano de Controle Ambiental.</Item>
                            <Item>PGRS – Programa de Gerenciamento de Resíduos Sólidos.</Item>
                            <Item>PGRSS – Programa de Gerenciamento de Resíduos de Serviços de Saúde.</Item>
                        </SectionCard>

                        <SectionCard titulo="Recuperação e mitigação de impactos">
                            <Item>PRAD – Plano de Recuperação de Áreas Degradadas.</Item>
                            <Item>Planos de mitigação de impactos conforme condicionantes ambientais.</Item>
                            <Item>Acompanhamento de medidas compensatórias e corretivas.</Item>
                        </SectionCard>
                    </div>
                </div>
            </section>

            {/* ESTUDOS E LICENCIAMENTO */}
            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold text-slate-900">Estudos e licenciamento ambiental</h2>
                    <p className="mt-2 max-w-2xl text-sm text-slate-600">
                        Apoio completo na condução de processos de licenciamento ambiental,
                        elaboração de estudos e atendimento às exigências de órgãos ambientais
                        municipais, estaduais e federais.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <SectionCard titulo="Estudos ambientais">
                            <Item>EIA/RIMA – Estudo e Relatório de Impacto Ambiental.</Item>
                            <Item>Relatórios ambientais específicos conforme a atividade.</Item>
                            <Item>Estudos técnicos para atendimento de condicionantes de licenças.</Item>
                        </SectionCard>

                        <SectionCard titulo="Processos de licenciamento">
                            <Item>Suporte na obtenção, renovação e regularização de licenças ambientais.</Item>
                            <Item>Regularização de empreendimentos junto a órgãos ambientais.</Item>
                            <Item>Acompanhamento de exigências e respostas a notificações e pareceres.</Item>
                        </SectionCard>
                    </div>
                </div>
            </section>

            {/* GESTÃO DE RESÍDUOS E SUSTENTABILIDADE */}
            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl font-bold text-slate-900">Gestão de resíduos e práticas sustentáveis</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Estruturação de processos para manejo adequado de resíduos, redução
                            de impactos ambientais e promoção de uma cultura interna voltada à
                            sustentabilidade.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                            <li>Orientação para segregação e destinação correta de resíduos.</li>
                            <li>Adequação aos requisitos legais e normativos sobre resíduos.</li>
                            <li>Implementação de rotinas de controle e registro.</li>
                            <li>Ações de conscientização para equipes e gestores.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl border border-emerald-100 bg-white p-6 text-sm text-slate-800 shadow-sm"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Benefícios ambientais e estratégicos</p>
                        <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                            <li>Redução de risco de autuações e sanções ambientais.</li>
                            <li>Melhoria da imagem institucional e responsabilidade ESG.</li>
                            <li>Uso mais eficiente de recursos e redução de desperdícios.</li>
                            <li>Maior controle sobre impactos ambientais do negócio.</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* COMO FUNCIONA O ATENDIMENTO */}
            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold text-slate-900">Como funciona o atendimento ambiental da Haase</h2>
                    <p className="mt-2 max-w-2xl text-sm text-slate-600">
                        O atendimento é conduzido de forma técnica e acessível, para que você
                        saiba exatamente em que ponto sua empresa está e quais passos precisam
                        ser dados para a regularização e melhoria da gestão ambiental.
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-3 text-xs text-slate-700">
                        <StepCard numero="1" titulo="Entendimento do cenário">
                            Levantamento da atividade, histórico ambiental e situação atual de licenças, programas e condicionantes.
                        </StepCard>
                        <StepCard numero="2" titulo="Planejamento e estratégia">
                            Definição dos estudos, planos, programas e ações necessárias para adequação e melhoria da gestão ambiental.
                        </StepCard>
                        <StepCard numero="3" titulo="Execução e acompanhamento">
                            Elaboração de documentos, apoio em processos de licenciamento e acompanhamento das medidas implementadas.
                        </StepCard>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-14 bg-emerald-900 text-emerald-50">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-xl font-bold">Precisa de apoio para regularizar a área ambiental da sua empresa?</h2>
                    <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
                        Envie uma mensagem pelo WhatsApp e conte brevemente a situação atual.
                        A Haase retorna com uma orientação inicial e as melhores alternativas para o seu caso.
                    </p>

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100 animate-pulse"
                    >
                        Falar com especialista em Meio Ambiente
                    </a>
                </div>
            </section>
        </main>
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
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-xs text-slate-700 shadow-sm"
        >
            <h3 className="text-sm font-semibold text-slate-900">{titulo}</h3>
            <ul className="mt-3 space-y-2 list-disc pl-4">{children}</ul>
        </motion.div>
    );
}

function Item({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}

function StepCard({
    numero,
    titulo,
    children,
}: {
    numero: string;
    titulo: string;
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
        >
            <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-[11px] font-semibold text-white">
                    {numero}
                </span>
                <p className="text-xs font-semibold text-slate-900">{titulo}</p>
            </div>
            <p className="mt-2 text-[11px] text-slate-700">{children}</p>
        </motion.div>
    );
}
