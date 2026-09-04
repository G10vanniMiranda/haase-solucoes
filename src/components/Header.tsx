"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import type { AcquisitionContext } from "../lib/acquisition/context";
import { measurementAttributesForAcquisition } from "../lib/measurement/acquisition";
import { buildWhatsAppLink } from "../lib/whatsapp";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MOBILE_MENU_ID = "haase-mobile-navigation";
const MOBILE_MENU_TITLE_ID = "haase-mobile-navigation-title";
const FOCUSABLE_ELEMENT_SELECTOR =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const headerWhatsAppContext = {
    position: "header",
    intent: "talk-to-specialist",
} satisfies AcquisitionContext;

export function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const triggerButtonRef = useRef<HTMLButtonElement>(null);
    const mobileMenuContainerRef = useRef<HTMLDivElement>(null);
    const shouldRestoreFocusRef = useRef(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function openMenu() {
        shouldRestoreFocusRef.current = false;
        setOpen(true);
    }

    function closeMenu(restoreFocus: boolean) {
        shouldRestoreFocusRef.current = restoreFocus;
        setOpen(false);
    }

    function handleMenuExitComplete() {
        if (!shouldRestoreFocusRef.current) return;

        shouldRestoreFocusRef.current = false;
        triggerButtonRef.current?.focus();
    }

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/90 border-b border-slate-200 backdrop-blur">
                <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
                    {/* LOGO */}
                    <Link
                        href="/"
                        className="relative block h-14 w-[9.5rem] shrink-0 overflow-hidden rounded-md group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 md:h-16 md:w-[10.5rem]"
                        aria-label="Ir para a página inicial"
                    >
                        <Image
                            src="/logo.jpg"
                            alt="Haase Soluções"
                            width={1280}
                            height={719}
                            sizes="(max-width: 767px) 430px, 480px"
                            priority
                            className="absolute left-1/2 top-1/2 h-auto w-[26.875rem] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-[30rem]"
                        />
                    </Link>

                    {/* NAV DESKTOP */}
                    <nav
                        className="hidden gap-6 text-sm font-medium text-slate-700 md:flex"
                        aria-label="Navegação principal"
                    >
                        <Link
                            href="/"
                            aria-current={pathname === "/" ? "page" : undefined}
                            className="rounded-sm hover:text-emerald-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Início
                        </Link>
                        <Link
                            href="/sobre"
                            aria-current={pathname === "/sobre" ? "page" : undefined}
                            className="rounded-sm hover:text-emerald-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Sobre
                        </Link>
                        <Link
                            href="/seguranca-do-trabalho"
                            aria-current={pathname === "/seguranca-do-trabalho" ? "page" : undefined}
                            className="rounded-sm hover:text-emerald-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Segurança do Trabalho
                        </Link>
                        <Link
                            href="/meio-ambiente"
                            aria-current={pathname === "/meio-ambiente" ? "page" : undefined}
                            className="rounded-sm hover:text-emerald-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Meio Ambiente
                        </Link>
                        <Link
                            href="/contato"
                            aria-current={pathname === "/contato" ? "page" : undefined}
                            className="rounded-sm hover:text-emerald-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Contato
                        </Link>
                    </nav>

                    {/* BOTÃO DESKTOP */}
                    <a
                        href={buildWhatsAppLink(headerWhatsAppContext)}
                        {...measurementAttributesForAcquisition(
                            headerWhatsAppContext,
                            "whatsapp_click"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors bg-emerald-700 hover:bg-emerald-800 animate-pulse border border-emerald-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 motion-reduce:animate-none motion-reduce:transition-none"
                    >
                        Falar com especialista
                    </a>

                    {/* BOTÃO MOBILE */}
                    <button
                        ref={triggerButtonRef}
                        type="button"
                        onClick={openMenu}
                        className="md:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 hover:bg-slate-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={open}
                        aria-controls={MOBILE_MENU_ID}
                    >
                        <Menu
                            size={26}
                            className="text-slate-800"
                            aria-hidden="true"
                            focusable="false"
                        />
                    </button>
                </div>
            </header>

            <div ref={mobileMenuContainerRef} id={MOBILE_MENU_ID} />

            {/* MENU MOBILE VIA PORTAL – FORA DO HEADER */}
            {mounted && mobileMenuContainerRef.current &&
                createPortal(
                    <MobileMenu
                        open={open}
                        pathname={pathname}
                        onClose={closeMenu}
                        onExitComplete={handleMenuExitComplete}
                    />,
                    mobileMenuContainerRef.current
                )}
        </>
    );
}

type MobileMenuProps = {
    open: boolean;
    pathname: string;
    onClose: (restoreFocus: boolean) => void;
    onExitComplete: () => void;
};

function MobileMenu({ open, pathname, onClose, onExitComplete }: MobileMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);
    const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (!open) return;

        const animationFrame = window.requestAnimationFrame(() => {
            firstMenuLinkRef.current?.focus();
        });

        return () => window.cancelAnimationFrame(animationFrame);
    }, [open]);

    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
        if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            onClose(true);
            return;
        }

        if (event.key !== "Tab" || !menuRef.current) return;

        const focusableElements = Array.from(
            menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENT_SELECTOR)
        );
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements.at(-1);

        if (!firstFocusableElement || !lastFocusableElement) {
            event.preventDefault();
            return;
        }

        if (event.shiftKey && document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
            return;
        }

        if (!event.shiftKey && document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
        }
    }

    return (
        <AnimatePresence onExitComplete={onExitComplete}>
            {open && (
                <motion.div
                    ref={menuRef}
                    key="mobile-menu"
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
                    transition={
                        shouldReduceMotion
                            ? { duration: 0 }
                            : { duration: 0.25, ease: "easeOut" }
                    }
                    className="fixed inset-0 z-9999 bg-white md:hidden overflow-y-auto"
                    aria-modal="true"
                    aria-labelledby={MOBILE_MENU_TITLE_ID}
                    role="dialog"
                    onKeyDown={handleKeyDown}
                >
                    {/* TOPO */}
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 border-b border-slate-200">
                        <span
                            id={MOBILE_MENU_TITLE_ID}
                            className="text-sm font-semibold text-slate-900"
                        >
                            Menu
                        </span>
                        <button
                            type="button"
                            onClick={() => onClose(true)}
                            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                            aria-label="Fechar menu"
                        >
                            <X size={22} aria-hidden="true" focusable="false" />
                        </button>
                    </div>

                    {/* LINKS */}
                    <nav
                        className="mx-auto mt-4 flex max-w-6xl flex-col gap-2 px-4 text-base font-medium text-slate-800"
                        aria-label="Navegação principal no menu móvel"
                    >
                        <Link
                            ref={firstMenuLinkRef}
                            href="/"
                            aria-current={pathname === "/" ? "page" : undefined}
                            onClick={() => onClose(false)}
                            className="flex min-h-11 items-center rounded-md px-2 hover:text-emerald-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Início
                        </Link>
                        <Link
                            href="/sobre"
                            aria-current={pathname === "/sobre" ? "page" : undefined}
                            onClick={() => onClose(false)}
                            className="flex min-h-11 items-center rounded-md px-2 hover:text-emerald-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Sobre
                        </Link>
                        <Link
                            href="/seguranca-do-trabalho"
                            aria-current={pathname === "/seguranca-do-trabalho" ? "page" : undefined}
                            onClick={() => onClose(false)}
                            className="flex min-h-11 items-center rounded-md px-2 hover:text-emerald-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Segurança do Trabalho
                        </Link>
                        <Link
                            href="/meio-ambiente"
                            aria-current={pathname === "/meio-ambiente" ? "page" : undefined}
                            onClick={() => onClose(false)}
                            className="flex min-h-11 items-center rounded-md px-2 hover:text-emerald-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Meio Ambiente
                        </Link>
                        <Link
                            href="/contato"
                            aria-current={pathname === "/contato" ? "page" : undefined}
                            onClick={() => onClose(false)}
                            className="flex min-h-11 items-center rounded-md px-2 hover:text-emerald-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 motion-reduce:transition-none"
                        >
                            Contato
                        </Link>
                    </nav>

                    {/* CTA WHATSAPP */}
                    <div className="mx-auto mt-8 max-w-6xl px-4 pb-10">
                        <a
                            href={buildWhatsAppLink(headerWhatsAppContext)}
                            {...measurementAttributesForAcquisition(
                                headerWhatsAppContext,
                                "whatsapp_click"
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => onClose(false)}
                            className="flex min-h-11 w-full items-center justify-center rounded-full bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 motion-reduce:animate-none motion-reduce:transition-none"
                        >
                            Falar com especialista
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

