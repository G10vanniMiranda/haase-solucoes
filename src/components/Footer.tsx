"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
            {/* PARTE PRINCIPAL */}
            <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
                <div className="grid gap-10 md:grid-cols-[2fr,1.5fr,1.5fr]">
                    {/* BLOCO INSTITUCIONAL */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-11 w-11 overflow-hidden rounded-md bg-white/90 ring-1 ring-emerald-800/50 flex items-center justify-center">
                                <Image
                                    src="/logo.jpeg"
                                    alt="Logo Haase Soluções"
                                    width={44}
                                    height={44}
                                    className="h-10 w-10 object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">
                                    Haase Soluções
                                </p>
                                <p className="text-xs text-slate-300">
                                    Segurança do Trabalho & Meio Ambiente
                                </p>
                            </div>
                        </div>

                        <p className="text-xs text-slate-300 max-w-sm">
                            Consultoria especializada em programas, laudos, licenciamento
                            ambiental e treinamentos, atendendo empresas em{" "}
                            <span className="font-semibold">Porto Velho – RO e região</span>.
                            Soluções completas para quem busca segurança jurídica, operacional
                            e ambiental.
                        </p>

                        <p className="text-xs font-medium text-emerald-300">
                            Cuidando de pessoas, empresas e do meio ambiente.
                        </p>
                    </div>

                    {/* NAVEGAÇÃO */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Navegação
                        </h3>
                        <nav className="mt-3 flex flex-col gap-2 text-xs text-slate-300">
                            <Link
                                href="/"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                Início
                            </Link>
                            <Link
                                href="/sobre"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                Sobre a Haase
                            </Link>
                            <Link
                                href="/seguranca-do-trabalho"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                Segurança do Trabalho
                            </Link>
                            <Link
                                href="/meio-ambiente"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                Meio Ambiente
                            </Link>
                            <Link
                                href="/contato"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                Contato
                            </Link>
                            <Link
                                href="/politica-de-privacidade"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                Política de Privacidade
                            </Link>
                            <Link
                                href="/termos-de-uso"
                                className="hover:text-emerald-300 transition-colors"
                            >
                                Termos de Uso
                            </Link>
                        </nav>
                    </div>

                    {/* CONTATO / REDES */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Contato
                        </h3>
                        <div className="mt-3 space-y-2 text-xs text-slate-300">
                            <p className="flex items-center gap-2">
                                <Phone size={14} className="text-emerald-300" />
                                <span>(69) 99246-4034</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail size={14} className="text-emerald-300" />
                                <span>haasesolucoes@gmail.com</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <MapPin size={14} className="mt-0.5 text-emerald-300" />
                                <span>
                                    Atendemos empresas em{" "}
                                    <span className="font-semibold">
                                        Porto Velho – RO e região.
                                    </span>
                                </span>
                            </p>
                        </div>

                        <div className="mt-4">
                            <p className="text-xs font-semibold text-white">
                                Redes sociais
                            </p>
                            <div className="mt-2 flex items-center gap-3">
                                <a
                                    href="https://www.instagram.com/haase.sstma"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram da Haase Soluções"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-100 transition"
                                >
                                    <Instagram size={16} />
                                </a>
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp da Haase Soluções"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-100 transition"
                                >
                                    <MessageCircle size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA RÁPIDO NO RODAPÉ */}
                <div className="mt-8 rounded-2xl border border-emerald-800/40 bg-emerald-900/40 px-4 py-4 text-xs text-emerald-50 md:px-6 md:py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="font-semibold">
                            Precisa colocar a documentação da sua empresa em dia?
                        </p>
                        <p className="text-[11px] text-emerald-100/80">
                            Fale com um especialista da Haase em{" "}
                            <span className="font-semibold">Porto Velho – RO</span> e receba
                            uma orientação inicial sem compromisso sobre programas, laudos
                            ou licenciamento.
                        </p>
                    </div>
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-sm hover:bg-emerald-400 transition"
                    >
                        Falar com um especialista
                    </a>
                </div>
            </div>

            {/* BARRA INFERIOR */}
            <div className="border-t border-slate-800 bg-slate-950">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-400 md:flex-row">
                    <p>
                        © {currentYear} Haase Soluções em Segurança do Trabalho e Meio
                        Ambiente. Todos os direitos reservados.
                    </p>
                    <p>
                        Desenvolvido por{" "}
                        <a
                            href="https://giovannimiranda.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-emerald-300 hover:text-emerald-200 transition"
                        >
                            Mi7anda - Agência de Marketing
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
}
