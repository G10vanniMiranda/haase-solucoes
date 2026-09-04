import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Política de Privacidade",
    description:
        "Conheça as informações de privacidade dos canais digitais da Haase Soluções.",
    path: "/politica-de-privacidade",
});

export default function PoliticaPrivacidade() {
    return (
        <main id="main-content" tabIndex={-1} className="bg-white text-slate-900">
            <div className="mx-auto max-w-4xl px-4 py-12 md:py-20 prose prose-slate">
                <h1 className="text-3xl font-bold text-slate-900">
                    Política de Privacidade
                </h1>
                <p className="text-sm text-slate-600">
                    Última atualização: <strong>2 de setembro de 2026</strong>
                </p>
                <br />

                <p>
                    Esta Política descreve, de forma objetiva, o funcionamento atual dos
                    canais digitais da Haase Soluções em Segurança do Trabalho e Meio
                    Ambiente, sediada em Porto Velho - RO.
                </p>
                <br />

                <h2>1. Canais de contato disponíveis</h2>
                <p>
                    O site oferece links para contato por WhatsApp e e-mail. Atualmente,
                    não existe formulário público ativo no site. Ao escolher um desses
                    canais, você é direcionado ao respectivo serviço externo e decide se
                    deseja enviar uma mensagem.
                </p>
                <br />

                <h2>2. Informações enviadas pelo usuário</h2>
                <p>
                    O simples acesso a uma página do site não envia à Haase o conteúdo de
                    uma mensagem de WhatsApp ou e-mail. Se você iniciar o contato, a Haase
                    poderá receber as informações que você decidir fornecer nesse canal,
                    como seus dados de contato, informações da empresa e o conteúdo da
                    solicitação.
                </p>
                <br />

                <h2>3. Finalidades do contato</h2>
                <p>
                    As informações fornecidas diretamente pelo usuário podem ser usadas
                    para responder à solicitação, prestar esclarecimentos e dar
                    continuidade a pedidos de diagnóstico, serviço ou orçamento.
                </p>
                <br />

                <h2>4. Serviços externos</h2>
                <p>
                    WhatsApp, e-mail, Instagram e outros links externos possuem ambientes
                    e políticas próprios. O tratamento realizado nesses serviços depende
                    do canal escolhido e da interação do usuário. Recomendamos consultar
                    as informações de privacidade do respectivo provedor.
                </p>
                <br />

                <h2>5. Analytics e cookies</h2>
                <p>
                    Atualmente, o site não possui ferramenta externa de analytics ativa e
                    não implementa cookies de analytics. Se uma ferramenta de medição for
                    ativada no futuro, esta Política deverá ser atualizada para informar,
                    de forma correspondente, a finalidade e o tratamento aplicáveis.
                </p>
                <br />

                <h2>6. Direitos e solicitações</h2>
                <p>
                    Conforme aplicável, você pode solicitar informações sobre o
                    tratamento, acesso, correção ou exclusão de dados, além de exercer
                    outros direitos previstos na legislação. Para fazer uma solicitação,
                    envie um e-mail para <strong>haasesolucoes@gmail.com</strong>.
                </p>
                <br />

                <h2>7. Alterações nesta Política</h2>
                <p>
                    Esta Política pode ser atualizada para refletir mudanças no site, nos
                    canais de contato ou nas práticas de tratamento. A data da versão será
                    indicada no início desta página.
                </p>
                <br />

                <h2>8. Contato</h2>
                <p>
                    Em caso de dúvidas, entre em contato pelo e-mail{" "}
                    <strong>haasesolucoes@gmail.com</strong> ou telefone{" "}
                    <strong>(69) 99246-4034</strong>.
                </p>
                <br />

                <h2>9. Controlador</h2>
                <p>
                    Haase Soluções em Segurança do Trabalho e Meio Ambiente - Porto Velho,
                    RO.
                </p>
            </div>
        </main>
    );
}
