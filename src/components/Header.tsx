"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/constants";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <header
                className="sticky top-0 z-50 bg-white/90 border-b border-slate-200 backdrop-blur"
                aria-label="Cabeçalho principal"
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                    {/* LOGO */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                        aria-label="Ir para a página inicial"
                    >
                        <Image
                            src="/logo.jpeg"
                            alt="Logo Haase"
                            width={48}
                            height={48}
                            priority
                            className="h-12 w-12 rounded-md object-contain ring-1 ring-slate-200"
                        />
                    </Link>

                    {/* NAV DESKTOP */}
                    <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
                        <Link href="/" className="hover:text-emerald-800 transition-all">
                            Início
                        </Link>
                        <Link href="/sobre" className="hover:text-emerald-800 transition-all">
                            Sobre
                        </Link>
                        <Link
                            href="/seguranca-do-trabalho"
                            className="hover:text-emerald-800 transition-all"
                        >
                            Segurança do Trabalho
                        </Link>
                        <Link
                            href="/meio-ambiente"
                            className="hover:text-emerald-800 transition-all"
                        >
                            Meio Ambiente
                        </Link>
                        <Link href="/contato" className="hover:text-emerald-800 transition-all">
                            Contato
                        </Link>
                    </nav>

                    {/* BOTÃO DESKTOP */}
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-block rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition bg-emerald-700 hover:bg-emerald-800 animate-pulse border border-emerald-900/30"
                    >
                        Falar com especialista
                    </a>

                    {/* BOTÃO MOBILE */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden p-2 rounded-lg hover:bg-slate-200 transition"
                        aria-label="Abrir menu"
                    >
                        <Menu size={26} className="text-slate-800" />
                    </button>
                </div>
            </header>

            {/* MENU MOBILE VIA PORTAL – FORA DO HEADER */}
            {mounted &&
                createPortal(
                    <MobileMenu open={open} onClose={() => setOpen(false)} />,
                    document.body
                )}
        </>
    );
}

type MobileMenuProps = {
    open: boolean;
    onClose: () => void;
};

function MobileMenu({ open, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="mobile-menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed inset-0 z-9999 bg-white md:hidden overflow-y-auto"
                    aria-modal="true"
                    role="dialog"
                >
                    {/* TOPO */}
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 border-b border-slate-200">
                        <span className="text-sm font-semibold text-slate-900">Menu</span>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                            aria-label="Fechar menu"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {/* LINKS */}
                    <nav className="mx-auto mt-4 flex max-w-6xl flex-col gap-4 px-4 text-base font-medium text-slate-800">
                        <Link
                            href="/"
                            onClick={onClose}
                            className="py-1 hover:text-emerald-700 transition"
                        >
                            InÃ­cio
                        </Link>
                        <Link
                            href="/sobre"
                            onClick={onClose}
                            className="py-1 hover:text-emerald-700 transition"
                        >
                            Sobre
                        </Link>
                        <Link
                            href="/seguranca-do-trabalho"
                            onClick={onClose}
                            className="py-1 hover:text-emerald-700 transition"
                        >
                            SeguranÃ§a do Trabalho
                        </Link>
                        <Link
                            href="/meio-ambiente"
                            onClick={onClose}
                            className="py-1 hover:text-emerald-700 transition"
                        >
                            Meio Ambiente
                        </Link>
                        <Link
                            href="/contato"
                            onClick={onClose}
                            className="py-1 hover:text-emerald-700 transition"
                        >
                            Contato
                        </Link>
                    </nav>

                    {/* CTA WHATSAPP */}
                    <div className="mx-auto mt-8 max-w-6xl px-4 pb-10">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className="flex w-full items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 animate-pulse"
                        >
                            Falar com especialista
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

