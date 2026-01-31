"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function ContatoPage() {
    return (
        <main className="bg-white text-slate-900">
            {/* HERO / INTRO */}
            <section className="border-b border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Contato
                        </p>
                        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                            Fale com a Haase Soluções
                        </h1>
                        <p className="mt-3 text-sm text-slate-600">
                            Precisa de apoio em{" "}
                            <span className="font-semibold">Segurança do Trabalho</span>,{" "}
                            <span className="font-semibold">Meio Ambiente</span> ou
                            treinamentos para sua equipe? Envie uma mensagem e vamos entender
                            a realidade da sua empresa em{" "}
                            <span className="font-semibold">Porto Velho – RO e região</span>{" "}
                            para indicar as melhores soluções.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONTEÚDO PRINCIPAL */}
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-[1.4fr,1.2fr] md:items-start">
                    {/* COLUNA ESQUERDA – WHATS PRINCIPAL + DICAS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                Canal principal
                            </p>
                            <h2 className="mt-2 text-lg font-semibold text-slate-900">
                                Atendimento direto pelo WhatsApp
                            </h2>
                            <p className="mt-2 text-sm text-slate-700">
                                O jeito mais rápido de falar com a Haase é pelo WhatsApp.
                                Envie uma mensagem resumindo a situação da sua empresa e, se
                                possível, informe:
                            </p>
                            <ul className="mt-3 space-y-1 text-xs text-slate-700 list-disc pl-4">
                                <li>Ramo de atividade da empresa;</li>
                                <li>Cidade/estado onde a empresa atua;</li>
                                <li>Se já possui programas, laudos ou licenças;</li>
                                <li>Se há alguma fiscalização, prazo ou exigência em aberto.</li>
                            </ul>

                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 animate-pulse"
                            >
                                Falar com um especialista pelo WhatsApp
                            </a>

                            <p className="mt-2 text-[11px] text-emerald-900/80">
                                Seu contato é avaliado por um profissional da área para indicar
                                os próximos passos com clareza e objetividade.
                            </p>
                        </div>

                        {/* BLOCO – QUEM SE BENEFICIA */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-800">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                Para quem é indicado
                            </p>
                            <ul className="mt-3 space-y-2 list-disc pl-4">
                                <li>Empresas que precisam colocar a documentação em dia.</li>
                                <li>Negócios em expansão que vão iniciar novas atividades.</li>
                                <li>Empreendimentos com exigências de órgãos ambientais.</li>
                                <li>Organizações que querem reduzir riscos e passivos.</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* COLUNA DIREITA – BLOCO DE CONTATO / FORMULARIO SIMPLES */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* DADOS DE CONTATO */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-800">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                Informações de contato
                            </p>

                            <div className="mt-3 space-y-2">
                                <p className="flex items-center gap-2">
                                    <Phone size={14} className="text-emerald-600" />
                                    <span>(69) 99246-4034</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Mail size={14} className="text-emerald-600" />
                                    <span>haasesolucoes@gmail.com</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <MapPin size={14} className="mt-0.5 text-emerald-600" />
                                    <span>
                                        Atendemos empresas em{" "}
                                        <span className="font-semibold">
                                            Porto Velho – RO e região.
                                        </span>
                                    </span>
                                </p>
                            </div>

                            <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-900/90 px-3 py-3 text-[11px] text-slate-100">
                                <MessageCircle size={14} className="text-emerald-300" />
                                <p>
                                    Se preferir, você também pode enviar um e-mail descrevendo a
                                    situação. A equipe da Haase retorna com uma análise inicial.
                                </p>
                            </div>
                        </div>

                        {/* FORMULÁRIO SIMPLES (APENAS UI) */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-800 shadow-sm">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                Enviar mensagem
                            </p>
                            <p className="mt-2 text-[11px] text-slate-600">
                                Preencha os campos abaixo e, se preferir, copie esta mensagem e
                                envie diretamente pelo WhatsApp.
                            </p>

                            <form className="mt-4 space-y-3">
                                <div className="space-y-1">
                                    <label className="block text-[11px] font-medium text-slate-700">
                                        Nome completo
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs outline-none ring-emerald-500/30 focus:border-emerald-500 focus:ring"
                                        placeholder="Digite seu nome"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-[11px] font-medium text-slate-700">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs outline-none ring-emerald-500/30 focus:border-emerald-500 focus:ring"
                                        placeholder="Nome da empresa"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-[11px] font-medium text-slate-700">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs outline-none ring-emerald-500/30 focus:border-emerald-500 focus:ring"
                                        placeholder="email@empresa.com"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-[11px] font-medium text-slate-700">
                                        Descreva brevemente a situação da sua empresa
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs outline-none ring-emerald-500/30 focus:border-emerald-500 focus:ring resize-none"
                                        placeholder="Ex.: Precisamos regularizar documentação de segurança do trabalho / licenciamento ambiental / atender exigência de fiscalização..."
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                                >
                                    Enviar (exemplo de formulário – integrar depois)
                                </button>
                            </form>

                            <p className="mt-3 text-[10px] text-slate-500">
                                Este formulário é apenas ilustrativo. Para um retorno mais
                                rápido, utilize o atendimento pelo WhatsApp.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
