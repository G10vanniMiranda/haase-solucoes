import type { AcquisitionContext } from "../../lib/acquisition/context";
import { measurementAttributesForAcquisition } from "../../lib/measurement/acquisition";
import { buildWhatsAppLink } from "../../lib/whatsapp";
import Link from "next/link";
import React from "react";
import { MotionA, MotionDiv, MotionH1, MotionP, ReducedMotion } from "../../components/MotionPrimitives";

const workSafetyHeroContext = {
  page: "work-safety",
  service: "work-safety",
  position: "hero-primary",
  intent: "talk-to-specialist",
} satisfies AcquisitionContext;

const workSafetySectionContext = {
  page: "work-safety",
  service: "work-safety",
  position: "section",
  intent: "talk-to-specialist",
} satisfies AcquisitionContext;

export default function Content() {
  return (
    <ReducedMotion>
    <main id="main-content" tabIndex={-1} className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <MotionH1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Assessoria e Consultoria em SST
          </MotionH1>

          <MotionP
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 max-w-2xl text-sm text-slate-600"
          >
            Gestão completa de Segurança do Trabalho com foco na prevenção de acidentes, conformidade legal
            e melhoria contínua das condições de trabalho.
          </MotionP>

          <MotionA
            href={buildWhatsAppLink(workSafetyHeroContext)}
            {...measurementAttributesForAcquisition(
              workSafetyHeroContext,
              "whatsapp_click"
            )}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 animate-pulse"
          >
            Falar com especialista em Segurança do Trabalho
          </MotionA>
        </div>
      </section>

      <section className="border-b border-slate-200 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-start">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold">Atuação completa em Segurança do Trabalho</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Atuação completa como Técnica em Segurança do Trabalho, desenvolvendo, implementando e
              acompanhando sistemas de prevenção e controle de riscos ocupacionais.
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              A HAASE oferece assessoria técnica qualificada, com foco na conformidade legal e na
              prevenção de acidentes e passivos trabalhistas.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm text-sm text-slate-700"
          >
            <p className="font-semibold text-emerald-800">Principais serviços</p>
            <ul className="mt-3 space-y-2 text-xs list-disc pl-4">
              <li>Assessoria e consultoria em Segurança do Trabalho</li>
              <li>Acompanhamento técnico de obras</li>
              <li>Implantação e acompanhamento de rotinas conforme NR&apos;s</li>
              <li>Investigação e análise de acidentes de trabalho</li>
              <li>Gestão de EPI e EPC</li>
              <li>DDS - Diálogo Diário de Segurança</li>
              <li>Apoio técnico ao SESMT</li>
            </ul>
          </MotionDiv>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold text-slate-900">Documentação legal e programas</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Elaboração e gestão de documentos legais essenciais para o atendimento às normas e à rotina de SST.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <SectionCard titulo="Programas e documentos">
              <Item>PGR - Programa de Gerenciamento de Riscos (NR 01)</Item>
              <Item>LTCAT - Laudo Técnico das Condições Ambientais do Trabalho</Item>
              <Item>APR - Análise Preliminar de Riscos</Item>
              <Item>Permissão de Trabalho (PT)</Item>
            </SectionCard>

            <SectionCard titulo="Procedimentos e registros">
              <Item>Procedimentos Operacionais Padrão (POPs)</Item>
              <Item>Ordens de Serviço de Segurança</Item>
              <Item>Inventário de Riscos Ocupacionais</Item>
            </SectionCard>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-slate-900">Acompanhamento técnico</h2>
            <p className="mt-2 text-sm text-slate-600">
              Acompanhamento contínuo de obras e frentes de trabalho, com inspeções, auditorias internas
              e investigação de acidentes e incidentes.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Acompanhamento de obras e frentes de trabalho</li>
              <li>Inspeções de segurança</li>
              <li>Auditorias internas de SST</li>
              <li>Investigação e análise de acidentes e incidentes</li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-emerald-100 bg-white p-6 text-sm text-slate-800 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Gestão de EPI e EPC</p>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
              <li>Definição e especificação técnica</li>
              <li>Controle e registros</li>
              <li>Orientação e fiscalização do uso</li>
            </ul>
          </MotionDiv>
        </div>
      </section>

      <section className="border-b border-slate-200 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm md:p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900">eSocial - Eventos de SST</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Gestão completa e envio dos eventos S-2210, S-2220 e S-2240 com base técnica nos documentos
                de SST e conformidade com o Manual de Orientação do eSocial.
              </p>
            </div>
            <Link
              href="/esocial"
              className="mt-5 inline-flex rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 md:mt-0"
            >
              Ver detalhes do serviço
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold text-slate-900">Treinamentos - Normas Regulamentadoras</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Integrações e capacitações conforme as principais NR&apos;s, com abordagem prática e alinhada à realidade da empresa.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <SectionCard titulo="Treinamentos e capacitações">
              <Item>Integração de Segurança</Item>
              <Item>NR 01, NR 05, NR 06, NR 07, NR 09</Item>
              <Item>NR 10 (apoio técnico)</Item>
              <Item>NR 12 (noções de segurança em máquinas)</Item>
            </SectionCard>

            <SectionCard titulo="Normas específicas">
              <Item>NR 18 (Construção Civil)</Item>
              <Item>NR 20 (noções conforme grau de risco)</Item>
              <Item>NR 23 (Proteção Contra Incêndios)</Item>
              <Item>NR 33 (Espaços Confinados - apoio)</Item>
              <Item>NR 35 (Trabalho em Altura)</Item>
            </SectionCard>
          </div>
        </div>
      </section>

      <section className="py-14 bg-emerald-900 text-emerald-50">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-xl font-bold">Precisa de apoio em Segurança do Trabalho?</h2>
          <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
            Envie uma mensagem pelo WhatsApp e conte brevemente a situação atual. A HAASE retorna com
            uma orientação inicial e as melhores opções para o seu negócio.
          </p>

          <a
            href={buildWhatsAppLink(workSafetySectionContext)}
            {...measurementAttributesForAcquisition(
              workSafetySectionContext,
              "whatsapp_click"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100 animate-pulse"
          >
            Falar com especialista em Segurança do Trabalho
          </a>
        </div>
      </section>
    </main>
    </ReducedMotion>
  );
}

function SectionCard({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 text-xs text-slate-700 shadow-sm"
    >
      <h3 className="text-sm font-semibold text-slate-900">{titulo}</h3>
      <ul className="mt-3 space-y-2 list-disc pl-4">{children}</ul>
    </MotionDiv>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

