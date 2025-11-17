"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function SobrePage() {
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
                        Sobre a Haase Soluções
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-sm text-slate-600"
                    >
                        Especialistas em Segurança do Trabalho e Meio Ambiente, cuidando da
                        proteção das pessoas, da sua empresa e da responsabilidade ambiental.
                    </motion.p>
                </div>
            </section>

            {/* QUEM SOMOS */}
            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl font-bold">Quem somos</h2>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            A Haase Soluções é uma empresa especializada em Segurança do Trabalho
                            e Meio Ambiente, oferecendo consultoria profissional para negócios
                            que desejam operar em conformidade com as normas vigentes e promover
                            ambientes mais seguros e sustentáveis.
                        </p>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            Atuamos com programas, laudos técnicos, treinamentos, licenciamento
                            ambiental e assessoria completa — sempre com foco em prevenção,
                            responsabilidade legal e proteção de colaboradores e gestores.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                    >
                        <p className="text-sm text-slate-700 leading-relaxed">
                            A Haase tem compromisso com a integridade, a conformidade legal e o
                            cuidado com pessoas. Nosso objetivo é entregar soluções técnicas
                            eficientes e personalizadas para cada cliente.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* MISSÃO, VISÃO, VALORES */}
            <section className="border-b border-slate-200 py-12 md:py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold">Nossa identidade</h2>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="text-sm font-semibold text-emerald-700">Missão</h3>
                            <p className="mt-2 text-xs text-slate-700">
                                Promover segurança, saúde ocupacional e sustentabilidade por meio
                                de soluções eficientes e acessíveis para empresas de todos os
                                portes.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="text-sm font-semibold text-emerald-700">Visão</h3>
                            <p className="mt-2 text-xs text-slate-700">
                                Ser referência regional em consultoria ambiental e de segurança do
                                trabalho, reconhecida pela excelência técnica e atendimento
                                humanizado.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="text-sm font-semibold text-emerald-700">Valores</h3>
                            <p className="mt-2 text-xs text-slate-700">
                                Ética, responsabilidade, compromisso legal, cuidado com pessoas,
                                transparência e sustentabilidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* POR QUE ESCOLHER */}
            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold">Por que escolher a Haase?</h2>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <Benefit>Atendimento direto com especialista</Benefit>
                        <Benefit>Soluções sob medida para cada empresa</Benefit>
                        <Benefit>Redução de riscos, multas e passivos trabalhistas</Benefit>
                        <Benefit>Treinamentos atualizados e eficientes</Benefit>
                        <Benefit>Consultoria contínua e acompanhamento</Benefit>
                        <Benefit>Compromisso com segurança, saúde e meio ambiente</Benefit>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-14 bg-emerald-900 text-emerald-50">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-xl font-bold">
                        Entre em contato e proteja sua empresa hoje mesmo
                    </h2>
                    <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
                        Fale com um especialista e descubra quais programas, laudos e
                        treinamentos sua empresa realmente precisa.
                    </p>

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100 animate-pulse"
                    >
                        Chamar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}

function Benefit({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700 shadow-sm"
        >
            {children}
        </motion.div>
    );
}
