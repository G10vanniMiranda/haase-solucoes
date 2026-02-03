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
                        Ergonomia e Riscos Psicossociais
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-sm text-slate-600"
                    >
                        Soluções completas em ergonomia ocupacional e gestão de riscos psicossociais,
                        em conformidade com a NR 01 - Gerenciamento de Riscos Ocupacionais.
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
                        Falar com especialista em Ergonomia
                    </motion.a>
                </div>
            </section>

            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold">Versão técnica</h2>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        A HAASE oferece atuação especializada em Ergonomia Ocupacional e Gestão de Riscos Psicossociais,
                        atendendo às exigências da NR 01 e às boas práticas técnicas. A ergonomia aplicada visa adequar
                        o trabalho ao ser humano, promovendo saúde, segurança, conforto, eficiência e prevenção de
                        adoecimentos físicos e mentais relacionados ao trabalho.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <InfoCard titulo="Diferencial técnico">
                            <InfoItem>Atuação com ergonomistas qualificados</InfoItem>
                            <InfoItem>Responsável técnica pós-graduanda em Ergonomia</InfoItem>
                            <InfoItem>Integração direta da ergonomia e dos riscos psicossociais ao PGR</InfoItem>
                            <InfoItem>Atuação alinhada às exigências de auditorias, fiscalizações e perícias</InfoItem>
                        </InfoCard>

                        <InfoCard titulo="Serviços em ergonomia">
                            <InfoItem>Análise Ergonômica do Trabalho (AET)</InfoItem>
                            <InfoItem>Avaliação de postos de trabalho administrativos e operacionais</InfoItem>
                            <InfoItem>Avaliação biomecânica e postural</InfoItem>
                            <InfoItem>Análise de layout, mobiliário e equipamentos</InfoItem>
                            <InfoItem>Recomendações técnicas e planos de melhoria ergonômica</InfoItem>
                        </InfoCard>

                        <InfoCard titulo="Gestão de riscos psicossociais">
                            <InfoItem>Identificação e avaliação de fatores psicossociais</InfoItem>
                            <InfoItem>Avaliação da organização do trabalho</InfoItem>
                            <InfoItem>Análise de carga mental, ritmo e pressão por resultados</InfoItem>
                            <InfoItem>Avaliação de fatores organizacionais e relacionais</InfoItem>
                            <InfoItem>Elaboração de relatórios técnicos e pareceres</InfoItem>
                        </InfoCard>

                        <InfoCard titulo="Ergonomia e PGR - NR 01">
                            <InfoItem>Elaboração e atualização do PGR</InfoItem>
                            <InfoItem>Inclusão de riscos ergonômicos</InfoItem>
                            <InfoItem>Inclusão de riscos psicossociais</InfoItem>
                            <InfoItem>Medidas de prevenção e controle</InfoItem>
                            <InfoItem>Monitoramento e revisão contínua</InfoItem>
                        </InfoCard>

                        <InfoCard titulo="Aplicações">
                            <InfoItem>Empresas privadas</InfoItem>
                            <InfoItem>Construção civil</InfoItem>
                            <InfoItem>Clínicas e hospitais</InfoItem>
                            <InfoItem>Atividades administrativas</InfoItem>
                            <InfoItem>Ambientes com alta carga mental ou pressão organizacional</InfoItem>
                        </InfoCard>

                        <InfoCard titulo="Benefícios para o cliente">
                            <InfoItem>Conformidade legal com a NR 01</InfoItem>
                            <InfoItem>Redução de afastamentos e adoecimentos ocupacionais</InfoItem>
                            <InfoItem>Melhoria do desempenho e bem-estar dos trabalhadores</InfoItem>
                            <InfoItem>Redução de passivos trabalhistas</InfoItem>
                            <InfoItem>Respaldo técnico em auditorias e processos judiciais</InfoItem>
                        </InfoCard>
                    </div>
                </div>
            </section>

            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold">Versão comercial</h2>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        A HAASE oferece soluções completas em Ergonomia Ocupacional e Gestão de Riscos Psicossociais,
                        atendendo rigorosamente às exigências da NR 01. Nossa atuação vai além do cumprimento legal:
                        entregamos prevenção real de adoecimentos, redução de passivos trabalhistas e melhoria
                        comprovada do desempenho organizacional.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <InfoCard titulo="Por que sua empresa precisa deste serviço?">
                            <InfoItem>A NR 01 exige a identificação e o controle dos riscos psicossociais no PGR</InfoItem>
                            <InfoItem>O aumento de afastamentos por transtornos mentais é foco de fiscalizações</InfoItem>
                            <InfoItem>Processos trabalhistas e perícias avaliam cada vez mais a ergonomia</InfoItem>
                            <InfoItem>Empresas preventivas reduzem custos, afastamentos e rotatividade</InfoItem>
                        </InfoCard>

                        <InfoCard titulo="O que a HAASE faz por você">
                            <InfoItem>Elaboração e atualização do PGR com inclusão dos riscos psicossociais</InfoItem>
                            <InfoItem>Análises ergonômicas práticas e aplicáveis ao dia a dia da empresa</InfoItem>
                            <InfoItem>Avaliação da carga mental, ritmo, pressão organizacional e exigências cognitivas</InfoItem>
                            <InfoItem>Identificação de fatores de adoecimento físico e mental relacionados ao trabalho</InfoItem>
                            <InfoItem>Recomendações técnicas viáveis, alinhadas à realidade operacional</InfoItem>
                            <InfoItem>Relatórios claros, objetivos e prontos para fiscalizações e auditorias</InfoItem>
                        </InfoCard>

                        <InfoCard titulo="Nosso diferencial competitivo">
                            <InfoItem>Equipe multidisciplinar com ergonomistas, técnicos e engenheiros de segurança</InfoItem>
                            <InfoItem>Responsável técnica pós-graduanda em Ergonomia</InfoItem>
                            <InfoItem>Atuação integrada entre Segurança do Trabalho, Ergonomia e Meio Ambiente</InfoItem>
                            <InfoItem>Experiência em empresas, obras, clínicas, hospitais e setores administrativos</InfoItem>
                            <InfoItem>Comunicação clara com gestores, RH e jurídico</InfoItem>
                        </InfoCard>

                        <InfoCard titulo="Para quem este serviço é ideal?">
                            <InfoItem>Empresas que precisam se adequar à NR 01</InfoItem>
                            <InfoItem>Organizações com afastamentos frequentes ou alta pressão organizacional</InfoItem>
                            <InfoItem>Ambientes administrativos, operacionais e hospitalares</InfoItem>
                            <InfoItem>Empresas que desejam prevenir passivos trabalhistas</InfoItem>
                            <InfoItem>Gestores que buscam saúde ocupacional com respaldo técnico</InfoItem>
                        </InfoCard>

                        <InfoCard titulo="Benefícios diretos para sua empresa">
                            <InfoItem>Conformidade legal e tranquilidade em fiscalizações</InfoItem>
                            <InfoItem>Redução de afastamentos e absenteísmo</InfoItem>
                            <InfoItem>Melhoria do clima organizacional</InfoItem>
                            <InfoItem>Aumento da produtividade e desempenho</InfoItem>
                            <InfoItem>Fortalecimento da imagem institucional</InfoItem>
                        </InfoCard>
                    </div>

                    <p className="mt-6 text-sm text-slate-700">
                        Mais do que um documento, uma solução: a HAASE entrega segurança legal, prevenção de riscos
                        e melhoria real das condições de trabalho, protegendo sua empresa e cuidando das pessoas.
                    </p>
                </div>
            </section>

            <section className="py-14 bg-emerald-900 text-emerald-50">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-xl font-bold">Solicite uma proposta personalizada</h2>
                    <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
                        Fale com a HAASE e implemente Ergonomia e Gestão de Riscos Psicossociais de forma segura,
                        eficiente e conforme a legislação vigente.
                    </p>

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100 animate-pulse"
                    >
                        Falar com especialista em Ergonomia
                    </a>
                </div>
            </section>
        </main>
    );
}

function InfoCard({
    titulo,
    children,
}: {
    titulo: string;
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-xs text-slate-700 shadow-sm"
        >
            <h3 className="text-sm font-semibold text-slate-900">{titulo}</h3>
            <ul className="mt-3 space-y-2 list-disc pl-4">{children}</ul>
        </motion.div>
    );
}

function InfoItem({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}
