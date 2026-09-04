import { MotionDiv, MotionH1, MotionP, ReducedMotion } from "../../components/MotionPrimitives";
import type { AcquisitionContext } from "../../lib/acquisition/context";
import { measurementAttributesForAcquisition } from "../../lib/measurement/acquisition";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const aboutWhatsAppContext = {
    page: "about",
    position: "section",
    intent: "contact",
} satisfies AcquisitionContext;

export default function SobrePageClient() {
    return (
        <ReducedMotion>
        <main id="main-content" tabIndex={-1} className="bg-white text-slate-900">
            <section className="border-b border-slate-200 bg-slate-50 py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <MotionH1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold md:text-4xl"
                    >
                        Sobre a HAASE
                    </MotionH1>

                    <MotionP
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-3 max-w-2xl text-sm text-slate-600"
                    >
                        Atuação integrada na prevenção de riscos ocupacionais, na gestão ambiental e na
                        regularização legal de empreendimentos, oferecendo soluções técnicas completas,
                        seguras e alinhadas à legislação vigente.
                    </MotionP>
                </div>
            </section>

            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl font-bold">Apresentação institucional</h2>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            A HAASE - Assessoria e Consultoria em Segurança do Trabalho e Meio Ambiente atua
                            de forma integrada na prevenção de riscos ocupacionais, na gestão ambiental e na
                            regularização legal de empreendimentos, oferecendo soluções técnicas completas,
                            seguras e alinhadas à legislação vigente.
                        </p>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            Com atuação multidisciplinar, a HAASE presta serviços especializados para
                            construção civil, empresas privadas, indústrias, clínicas, hospitais, comércios,
                            órgãos públicos e escritórios jurídicos, garantindo conformidade legal, segurança
                            operacional e sustentabilidade ambiental.
                        </p>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                    >
                        <p className="text-sm text-slate-700 leading-relaxed">
                            A HAASE atua com responsabilidade técnica, compromisso legal e foco na prevenção,
                            oferecendo soluções completas para a segurança do trabalhador e a preservação do
                            meio ambiente, sempre alinhadas às exigências normativas e às boas práticas profissionais.
                        </p>
                    </MotionDiv>
                </div>
            </section>

            <section className="border-b border-slate-200 py-12 md:py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold">Missão, visão e valores</h2>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="text-sm font-semibold text-emerald-700">Missão</h3>
                            <p className="mt-2 text-xs text-slate-700">
                                Promover ambientes de trabalho seguros, saudáveis e ambientalmente responsáveis,
                                por meio de assessoria técnica qualificada, ética profissional e soluções eficazes.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="text-sm font-semibold text-emerald-700">Visão</h3>
                            <p className="mt-2 text-xs text-slate-700">
                                Ser referência regional em Segurança do Trabalho e Meio Ambiente, reconhecida
                                pela excelência técnica, credibilidade e compromisso com a vida, o meio ambiente
                                e a legislação.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6">
                            <h3 className="text-sm font-semibold text-emerald-700">Valores</h3>
                            <p className="mt-2 text-xs text-slate-700">
                                Ética e responsabilidade profissional; compromisso com a legislação e normas técnicas;
                                valorização da vida e do meio ambiente; transparência e confiabilidade; atualização técnica contínua.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-slate-200 py-12 md:py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold">Diferenciais da HAASE</h2>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <Benefit>Atuação integrada em Segurança do Trabalho e Meio Ambiente</Benefit>
                        <Benefit>Experiência prática em obras, empresas e unidades de saúde</Benefit>
                        <Benefit>Forte embasamento técnico e normativo</Benefit>
                        <Benefit>Experiência comprovada em perícias judiciais</Benefit>
                        <Benefit>Atendimento personalizado conforme o tipo de empreendimento</Benefit>
                    </div>
                </div>
            </section>

            <section className="border-b border-slate-200 py-12 md:py-16 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-start">
                    <div>
                        <h2 className="text-xl font-bold">Perfil profissional</h2>
                        <div className="mt-3 text-sm text-slate-700 space-y-1">
                            <p className="font-semibold">Eliana Haase Butzke</p>
                            <p>Técnica em Segurança do Trabalho</p>
                            <p>Bióloga - Especialista em Meio Ambiente</p>
                            <p>Perita Judicial em Insalubridade, Periculosidade e Meio Ambiente</p>
                            <p>Auditora e Gestora Ambiental</p>
                            <p>Responsável Técnica - HAASE Assessoria e Consultoria</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">Público atendido</h2>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                            <li>Construção civil</li>
                            <li>Empresas privadas</li>
                            <li>Indústrias</li>
                            <li>Clínicas e hospitais</li>
                            <li>Comércios</li>
                            <li>Órgãos públicos</li>
                            <li>Escritórios de advocacia</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-emerald-900 text-emerald-50">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-xl font-bold">
                        Entre em contato e receba orientação técnica especializada
                    </h2>
                    <p className="mt-2 text-sm text-emerald-100 max-w-xl mx-auto">
                        Atendimento técnico especializado conforme a necessidade do empreendimento.
                    </p>

                    <a
                        href={buildWhatsAppLink(aboutWhatsAppContext)}
                        {...measurementAttributesForAcquisition(
                            aboutWhatsAppContext,
                            "whatsapp_click"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100 animate-pulse"
                    >
                        Chamar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
        </ReducedMotion>
    );
}

function Benefit({ children }: { children: React.ReactNode }) {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700 shadow-sm"
        >
            {children}
        </MotionDiv>
    );
}
