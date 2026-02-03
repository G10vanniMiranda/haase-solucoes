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
                        HAASE - Assessoria e Consultoria em Segurança do Trabalho e Meio Ambiente
                    </p>

                    <p className="text-xs font-medium text-emerald-100">
                        Atuação técnica e integrada com foco em conformidade legal, segurança
                        operacional e sustentabilidade.
                    </p>

                    <h1 className="text-3xl font-bold leading-tight md:text-4xl">
                        Soluções técnicas completas em Segurança do Trabalho e Meio Ambiente
                    </h1>

                    <p className="text-sm md:text-base text-emerald-50/90">
                        A HAASE atua de forma integrada na gestão de riscos ocupacionais e ambientais,
                        oferecendo assessoria técnica especializada, perícias e regularização legal
                        de empreendimentos.
                    </p>

                    <ul className="grid gap-3 text-sm md:grid-cols-2">
                        <FeatureItem>Atuação integrada em SST e Meio Ambiente</FeatureItem>
                        <FeatureItem>Experiência em obras, empresas e unidades de saúde</FeatureItem>
                        <FeatureItem>Forte embasamento técnico e legal</FeatureItem>
                        <FeatureItem>Atendimento personalizado</FeatureItem>
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
                                Ver serviços
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
                    Segurança do Trabalho, Perícias e Meio Ambiente em um só parceiro.
                </h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:auto-rows-fr">
                    <ActuationCard titulo="Segurança do trabalho" href="/seguranca-do-trabalho">
                        Assessoria e consultoria técnica, documentos legais (PGR, LTCAT, APR, POPs),
                        treinamentos conforme NR's, DDS, gestão de EPI/EPC e apoio ao SESMT.
                    </ActuationCard>
                    <ActuationCard titulo="Perícias judiciais" href="/pericias-judiciais">
                        Perícias e assistência técnica em insalubridade, periculosidade e meio ambiente,
                        com laudos, pareceres e quesitos.
                    </ActuationCard>
                    <ActuationCard titulo="Meio ambiente" href="/meio-ambiente">
                        Licenciamento ambiental, auditorias, perícias ambientais, gestão ambiental,
                        programas e planos de resíduos e sustentabilidade.
                    </ActuationCard>
                    <ActuationCard titulo="Ergonomia e riscos psicossociais" href="/ergonomia-e-riscos-psicossociais">
                        Análises ergonômicas, gestão de riscos psicossociais e integração ao PGR (NR 01).
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

function ActuationCard({
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
            className={`h-full rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md ${href ? "hover:bg-emerald-50 cursor-pointer" : ""
                }`}
        >
            <p className="text-xs font-semibold text-emerald-700">{titulo}</p>
            <p className="mt-1 text-xs text-slate-700">{children}</p>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block">
                {content}
            </Link>
        );
    }

    return content;
}

