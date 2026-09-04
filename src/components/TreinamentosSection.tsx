import Link from "next/link";
import type { AcquisitionContext } from "../lib/acquisition/context";
import { measurementAttributesForAcquisition } from "../lib/measurement/acquisition";
import { buildWhatsAppLink } from "../lib/whatsapp";
import { MotionDiv, ReducedMotion } from "./MotionPrimitives";

const trainingWhatsAppContext = {
    page: "home",
    position: "section",
    intent: "talk-to-specialist",
} satisfies AcquisitionContext;

export function TreinamentosSection() {
    return (
        <ReducedMotion>
        <section className="border-b border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-2xl font-bold text-slate-900">Diferenciais da HAASE</h2>

                        <p className="mt-2 text-sm text-slate-600">
                            Atuamos de forma integrada em Segurança do Trabalho, Perícias e Meio Ambiente,
                            com forte embasamento técnico, experiência prática e atendimento personalizado.
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                            <li>Atuação integrada em SST e Meio Ambiente</li>
                            <li>Experiência prática em obras, empresas e unidades de saúde</li>
                            <li>Forte embasamento técnico e normativo</li>
                            <li>Experiência comprovada em perícias judiciais</li>
                            <li>Atendimento personalizado conforme o tipo de empreendimento</li>
                        </ul>

                        <MotionDiv
                            whileHover={{ scale: 1.05, x: 3 }}
                            transition={{ type: "spring", stiffness: 240, damping: 18 }}
                            className="inline-flex"
                        >
                            <a
                                href={buildWhatsAppLink(trainingWhatsAppContext)}
                                {...measurementAttributesForAcquisition(
                                    trainingWhatsAppContext,
                                    "whatsapp_click"
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition"
                            >
                                Falar com um especialista →
                            </a>
                        </MotionDiv>

                        <ul className="mt-4 space-y-1 text-xs font-medium text-emerald-700 list-disc pl-4">
                            <li>
                                <Link href="/seguranca-do-trabalho" className="hover:text-emerald-900 transition">
                                    Ver soluções em Segurança do Trabalho
                                </Link>
                            </li>
                            <li>
                                <Link href="/pericias-judiciais" className="hover:text-emerald-900 transition">
                                    Ver soluções em Perícias Judiciais
                                </Link>
                            </li>
                            <li>
                                <Link href="/meio-ambiente" className="hover:text-emerald-900 transition">
                                    Ver soluções em Meio Ambiente
                                </Link>
                            </li>
                        </ul>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        className="rounded-2xl border border-emerald-100 bg-white p-6 text-sm text-slate-800 shadow-sm hover:shadow-md transition"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Público atendido
                        </p>

                        <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                            <li>Construção civil</li>
                            <li>Empresas privadas e indústrias</li>
                            <li>Clínicas e hospitais</li>
                            <li>Comércios e órgãos públicos</li>
                            <li>Escritórios de advocacia</li>
                        </ul>
                    </MotionDiv>
                </div>
            </div>
        </section>
        </ReducedMotion>
    );
}

