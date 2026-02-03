"use client";

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
                        Perícias Judiciais - Insalubridade e Periculosidade
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-sm text-slate-600"
                    >
                        Atuação como Perita Judicial e Assistente Técnica, com elaboração de laudos técnicos
                        fundamentados em normas legais e metodologias reconhecidas.
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
                        Falar com especialista em Perícias Judiciais
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
                        <h2 className="text-xl font-bold">Serviços periciais</h2>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            Atuação técnica em processos trabalhistas, com análise criteriosa de ambientes e
                            atividades, garantindo fundamentação legal e clareza nas conclusões.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                            <li>Perícias judiciais de insalubridade</li>
                            <li>Perícias judiciais de periculosidade</li>
                            <li>Assistência técnica em processos trabalhistas</li>
                            <li>Elaboração de laudos, pareceres, quesitos e impugnações</li>
                            <li>Avaliação conforme NR 15 e NR 16</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm text-sm text-slate-700"
                    >
                        <p className="font-semibold text-emerald-800">Diferenciais na atuação pericial</p>
                        <ul className="mt-3 space-y-2 text-xs list-disc pl-4">
                            <li>Forte embasamento técnico e normativo</li>
                            <li>Experiência prática em empresas e obras</li>
                            <li>Relatórios claros, objetivos e fundamentados</li>
                            <li>Atendimento personalizado conforme o caso</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="py-14 bg-emerald-900 text-emerald-50">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-xl font-bold">Precisa de apoio em perícias judiciais?</h2>
                    <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
                        Envie uma mensagem pelo WhatsApp e conte brevemente a situação. A HAASE retorna com
                        orientação técnica e as melhores alternativas para o seu caso.
                    </p>

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100 animate-pulse"
                    >
                        Falar com especialista em Perícias Judiciais
                    </a>
                </div>
            </section>
        </main>
    );
}
