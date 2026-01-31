"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "../../lib/constants";
import React from "react";

export default function Content() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Segurança do Trabalho para proteger pessoas e empresas em Porto Velho – RO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 max-w-2xl text-sm text-slate-600"
          >
            A Haase Soluções oferece consultoria completa em Segurança do
            Trabalho para empresas de <span className="font-semibold">Porto Velho – RO e região</span>,
            ajudando a reduzir acidentes, prevenir afastamentos, cumprir as normas
            e evitar passivos trabalhistas.
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
            Falar com especialista em Segurança do Trabalho
          </motion.a>
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section className="border-b border-slate-200 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold">Consultoria especializada em Segurança do Trabalho</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Atuamos de forma técnica e personalizada para adequar sua empresa
              às normas de Segurança do Trabalho, reduzir riscos de acidentes,
              afastamentos e autuações, e fortalecer a cultura de prevenção.
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              A Haase auxilia desde o diagnóstico da situação atual até a
              implementação de programas, laudos e treinamentos necessários
              para atender às exigências legais e às melhores práticas de
              segurança.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm text-sm text-slate-700"
          >
            <p className="font-semibold text-emerald-800">Para quem é indicado?</p>
            <ul className="mt-3 space-y-2 text-xs list-disc pl-4">
              <li>Empresas que desejam se adequar às normas de segurança.</li>
              <li>Negócios em expansão que precisam estruturar a área de SST.</li>
              <li>Organizações com risco de autuações ou fiscalizações.</li>
              <li>Empresas que buscam reduzir acidentes e afastamentos.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMAS E LAUDOS */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold text-slate-900">Programas e laudos em Segurança do Trabalho</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            A Haase elabora e atualiza documentos técnicos essenciais para a
            gestão de segurança da sua empresa, de acordo com as normas vigentes
            e o perfil de risco da atividade.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <SectionCard titulo="Documentos e avaliações técnicas">
              <Item>Mapeamento de riscos e identificação de perigos.</Item>
              <Item>Laudos e relatórios técnicos conforme a necessidade da atividade.</Item>
              <Item>Documentos para atendimento a exigências de fiscalizações ou auditorias.</Item>
            </SectionCard>

            <SectionCard titulo="Gestão contínua de Segurança do Trabalho">
              <Item>Acompanhamento periódico das condições de trabalho.</Item>
              <Item>Orientação para adequações estruturais e organizacionais.</Item>
              <Item>Apoio na implementação de medidas corretivas e preventivas.</Item>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* TREINAMENTOS */}
      <section className="border-b border-slate-200 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-slate-900">Treinamentos em Segurança do Trabalho</h2>
            <p className="mt-2 text-sm text-slate-600">
              Treinamentos práticos e objetivos para equipes e lideranças,
              focados na prevenção de acidentes, na correta utilização de
              equipamentos e no cumprimento dos procedimentos de segurança.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Capacitações em segurança do trabalho e prevenção de riscos.</li>
              <li>Conscientização sobre saúde ocupacional e qualidade de vida.</li>
              <li>Treinamentos personalizados conforme o segmento da empresa.</li>
              <li>Orientações para gestores sobre responsabilidades legais.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-emerald-100 bg-white p-6 text-sm text-slate-800 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Benefícios dos treinamentos</p>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
              <li>Redução de acidentes e incidentes internos.</li>
              <li>Equipes mais conscientes e engajadas na prevenção.</li>
              <li>Menos afastamentos e impactos na produtividade.</li>
              <li>Fortalecimento da cultura de segurança na empresa.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS GERAIS */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold text-slate-900">Benefícios para a sua empresa</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <BenefitCard>
              Redução de riscos de acidentes, afastamentos e passivos trabalhistas.
            </BenefitCard>
            <BenefitCard>
              Maior segurança para colaboradores e melhor clima organizacional.
            </BenefitCard>
            <BenefitCard>
              Melhora da imagem institucional perante clientes, parceiros e órgãos fiscalizadores.
            </BenefitCard>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA O ATENDIMENTO */}
      <section className="border-b border-slate-200 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold text-slate-900">
            Como funciona o atendimento da Haase em Segurança do Trabalho
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Nosso atendimento é estruturado para entender a realidade da sua
            empresa e entregar exatamente o que ela precisa, sem exageros e sem
            deixar pontos críticos de fora.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3 text-xs text-slate-700">
            <StepCard numero="1" titulo="Diagnóstico inicial">
              Coleta de informações, análise da atividade e entendimento das principais necessidades e riscos.
            </StepCard>
            <StepCard numero="2" titulo="Plano de ação">
              Definição dos programas, laudos, treinamentos e ajustes necessários para adequação.
            </StepCard>
            <StepCard numero="3" titulo="Execução e acompanhamento">
              Elaboração dos documentos, realização de treinamentos e suporte para implementação das medidas.
            </StepCard>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 bg-emerald-900 text-emerald-50">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-xl font-bold">Quer reforçar a Segurança do Trabalho na sua empresa?</h2>
          <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
            Envie uma mensagem pelo WhatsApp e conte brevemente a situação atual.
            A Haase retorna com uma orientação inicial e as melhores opções para o seu negócio.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100 animate-pulse"
          >
            Falar com especialista em Segurança do Trabalho
          </a>
        </div>
      </section>
    </main>
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

function Item({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

function BenefitCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-700 shadow-sm"
    >
      {children}
    </motion.div>
  );
}

function StepCard({
  numero,
  titulo,
  children,
}: {
  numero: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-[11px] font-semibold text-white">
          {numero}
        </span>
        <p className="text-xs font-semibold text-slate-900">{titulo}</p>
      </div>
      <p className="mt-2 text-[11px] text-slate-700">{children}</p>
    </motion.div>
  );
}
