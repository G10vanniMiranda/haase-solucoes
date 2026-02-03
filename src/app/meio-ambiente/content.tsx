"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function Content() {
    return (
        <main className="bg-white text-slate-900">
            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold md:text-4xl"
                    >
                        Meio Ambiente: regularização, gestão e controle de impactos
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-sm text-slate-600"
                    >
                        Atuação como Perita, Auditora e Gestora Ambiental, com foco na regularização
                        ambiental, sustentabilidade e controle de impactos.
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

            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl font-bold">Atuação ambiental técnica e completa</h2>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            A HAASE oferece suporte completo para regularização ambiental, sustentabilidade e
                            atendimento às exigências dos órgãos ambientais, garantindo segurança jurídica e
                            controle de impactos.
                        </p>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            Licenciamento ambiental, auditorias, perícias e gestão ambiental de empreendimentos
                            com foco em resultados práticos e conformidade legal.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm text-sm text-slate-700"
                    >
                        <p className="font-semibold text-emerald-800">Principais serviços ambientais</p>
                        <ul className="mt-3 space-y-2 text-xs list-disc pl-4">
                            <li>Licenciamento ambiental</li>
                            <li>Auditorias ambientais</li>
                            <li>Perícias ambientais</li>
                            <li>Gestão ambiental de empreendimentos</li>
                            <li>Diagnóstico e controle de impactos ambientais</li>
                            <li>Programas de sustentabilidade empresarial</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold text-slate-900">Programas e documentos ambientais</h2>
                    <p className="mt-2 max-w-2xl text-sm text-slate-600">
                        Elaboração de programas, planos e relatórios técnicos para atendimento às exigências legais
                        e gestão sustentável das atividades.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <SectionCard titulo="Planos e programas">
                            <Item>PCA - Plano de Controle Ambiental</Item>
                            <Item>PGRS - Plano de Gerenciamento de Resíduos Sólidos</Item>
                            <Item>PGRCC - Resíduos da Construção Civil</Item>
                            <Item>PRAD - Plano de Recuperação de Áreas Degradadas</Item>
                        </SectionCard>

                        <SectionCard titulo="Relatórios e projetos">
                            <Item>Programas de Educação Ambiental</Item>
                            <Item>Relatórios Técnicos Ambientais</Item>
                            <Item>Diagnóstico e controle de impactos ambientais</Item>
                            <Item>Gestão ambiental de empreendimentos</Item>
                        </SectionCard>
                    </div>
                </div>
            </section>

            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold text-slate-900">Licenciamento e regularização</h2>
                    <p className="mt-2 max-w-2xl text-sm text-slate-600">
                        Apoio completo na condução de processos de licenciamento e regularização, com atendimento
                        às exigências de órgãos ambientais e acompanhamento técnico especializado.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <SectionCard titulo="Licenciamento ambiental">
                            <Item>Obtenção, renovação e regularização de licenças</Item>
                            <Item>Acompanhamento de exigências e condicionantes</Item>
                            <Item>Suporte técnico junto a órgãos ambientais</Item>
                        </SectionCard>

                        <SectionCard titulo="Perícias e auditorias">
                            <Item>Auditorias ambientais</Item>
                            <Item>Perícias ambientais</Item>
                            <Item>Laudos técnicos e pareceres</Item>
                        </SectionCard>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-emerald-900 text-emerald-50">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-xl font-bold">Precisa de apoio para regularizar a área ambiental?</h2>
                    <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
                        Envie uma mensagem pelo WhatsApp e conte brevemente a situação atual. A HAASE retorna
                        com uma orientação inicial e as melhores alternativas para o seu caso.
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

