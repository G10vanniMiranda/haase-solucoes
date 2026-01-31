"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "../lib/constants";

export function TreinamentosSection() {
    return (
        <section className="border-b border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">

                    {/* COLUNA ESQUERDA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-2xl font-bold text-slate-900">
                            Treinamentos que reforçam a cultura de segurança e meio ambiente
                        </h2>

                        <p className="mt-2 text-sm text-slate-600">
                            A Haase realiza treinamentos práticos e atualizados para colaboradores
                            e gestores, alinhados às normas vigentes e à realidade da sua empresa.
                            Os treinamentos fazem parte das nossas soluções de{" "}
                            <span className="font-semibold">Segurança do Trabalho</span> e{" "}
                            <span className="font-semibold">Meio Ambiente</span>.
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                            <li>Capacitação em segurança do trabalho</li>
                            <li>Boas práticas ambientais e gestão de resíduos</li>
                            <li>Conscientização sobre saúde ocupacional</li>
                            <li>Treinamentos personalizados por segmento</li>
                        </ul>

                        {/* CTA PRINCIPAL */}
                        <motion.div
                            whileHover={{ scale: 1.05, x: 3 }}
                            transition={{ type: "spring", stiffness: 240, damping: 18 }}
                            className="inline-flex"
                        >
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition"
                            >
                                Falar sobre treinamentos →
                            </a>
                        </motion.div>

                        {/* MINI LINKS / NOVO FUNIL */}
                        <ul className="mt-4 space-y-1 text-xs font-medium text-emerald-700 list-disc pl-4">
                            <li>
                                <Link
                                    href="/seguranca-do-trabalho"
                                    className="hover:text-emerald-900 transition"
                                >
                                    Ver soluções em Segurança do Trabalho
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/meio-ambiente"
                                    className="hover:text-emerald-900 transition"
                                >
                                    Ver soluções em Meio Ambiente
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* COLUNA DIREITA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        className="rounded-2xl border border-emerald-100 bg-white p-6 text-sm text-slate-800 shadow-sm hover:shadow-md transition"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Benefícios para sua empresa
                        </p>

                        <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                            <li>Redução de acidentes e afastamentos</li>
                            <li>Equipes mais conscientes e engajadas</li>
                            <li>Cumprimento das exigências legais</li>
                            <li>Melhoria da imagem institucional</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
