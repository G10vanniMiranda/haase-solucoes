"use client";

import Link from "next/link";
import { WHATSAPP_LINK } from "../lib/constants";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="border-b border-slate-200 bg-linear-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
                {/* COLUNA ESQUERDA */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                        Consultoria ambiental e segurança do trabalho
                    </p>

                    <h1 className="text-3xl font-bold leading-tight md:text-4xl">
                        Soluções completas em Segurança do Trabalho e Meio Ambiente
                        para a sua empresa estar em conformidade e protegida.
                    </h1>

                    <p className="text-sm md:text-base text-emerald-50/90">
                        A Haase Soluções atua com programas, laudos, licenciamento e treinamento,
                        unindo <span className="font-semibold">segurança, saúde ocupacional</span> e{" "}
                        <span className="font-semibold">sustentabilidade</span> para reduzir riscos,
                        evitar multas e garantir tranquilidade ao seu negócio.
                    </p>

                    <ul className="grid gap-3 text-sm md:grid-cols-2">
                        <FeatureItem>Programas e laudos ambientais e ocupacionais</FeatureItem>
                        <FeatureItem>Adequação às normas ambientais e de segurança</FeatureItem>
                        <FeatureItem>Redução de riscos, acidentes e passivos trabalhistas</FeatureItem>
                        <FeatureItem>Treinamentos para equipes e gestores</FeatureItem>
                    </ul>

                    {/* BOTÕES COM ANIMAÇÃO */}
                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                        <motion.a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.07, y: -2 }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm hover:shadow-md transition-colors hover:bg-emerald-50"
                            aria-label="Solicitar orçamento pelo WhatsApp"
                        >
                            Solicitar um orçamento pelo WhatsApp
                        </motion.a>

                        <motion.div
                            whileHover={{ scale: 1.04, y: -1 }}
                            whileTap={{ scale: 0.97, y: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                            className="inline-flex"
                        >
                            <Link
                                href="/servicos"
                                className="inline-flex flex-1 items-center justify-center rounded-full border border-emerald-300 px-6 py-2.5 text-sm font-semibold text-emerald-50 transition-colors hover:bg-emerald-700/90"
                            >
                                Ver todos os serviços
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* COLUNA DIREITA */}
                <AreasDeAtuacao />
            </div>
        </section>
    );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-2">
            <span className="mt-1 inline-block h-5 w-5 rounded-full bg-emerald-600 text-center text-xs font-bold text-white">
                ✓
            </span>
            {children}
        </li>
    );
}

function AreasDeAtuacao() {
    return (
        <div className="flex items-center">
            <motion.div
                className="w-full rounded-2xl bg-white/95 p-6 text-sm text-slate-900 shadow-lg md:p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Áreas de atuação
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                    Segurança, saúde e meio ambiente em um só parceiro.
                </h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <ActuationCard titulo="Segurança do trabalho">
                        Programas e laudos ocupacionais para proteger equipes e reduzir acidentes.
                    </ActuationCard>
                    <ActuationCard titulo="Meio ambiente">
                        Licenciamento, relatórios e planos de controle ambiental para conformidade legal.
                    </ActuationCard>
                    <ActuationCard titulo="Saúde & Sustentabilidade">
                        Gestão de resíduos, supressão vegetal e ações focadas em sustentabilidade.
                    </ActuationCard>
                    <ActuationCard titulo="Treinamentos">
                        Capacitações para colaboradores e gestores, com foco em prevenção e boas práticas.
                    </ActuationCard>
                </div>

                <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-xs text-slate-800">
                    <p className="font-semibold text-emerald-800">Entre em contato:</p>
                    <p>Telefone / WhatsApp: (69) 99246-4034</p>
                    <p>E-mail: haasesolucoes@gmail.com</p>
                    <p className="mt-1 text-[11px] text-slate-600">
                        Atendimento especializado para empresas que buscam segurança jurídica, operacional e ambiental.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

function ActuationCard({ titulo, children }: { titulo: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-emerald-700">{titulo}</p>
            <p className="mt-1 text-xs text-slate-700">{children}</p>
        </div>
    );
}
