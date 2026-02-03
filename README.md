# HAASE - Site Institucional

Site institucional da HAASE (Assessoria e Consultoria em Segurança do Trabalho e Meio Ambiente), desenvolvido em Next.js (App Router) com Tailwind CSS e Framer Motion.

## Visão geral

Projeto focado em apresentar serviços, diferenciais e formas de contato, com páginas dedicadas para cada área de atuação.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Estrutura do projeto

- `src/app`: páginas e rotas
- `src/components`: componentes reutilizáveis (Hero, Header, Footer, etc.)
- `src/lib`: constantes e utilidades
- `public`: assets estáticos

## Rotas principais

- `/` Home
- `/sobre` Sobre
- `/servicos` Serviços
- `/seguranca-do-trabalho` Segurança do Trabalho
- `/meio-ambiente` Meio Ambiente
- `/pericias-judiciais` Perícias Judiciais
- `/ergonomia-e-riscos-psicossociais` Ergonomia e Riscos Psicossociais
- `/contato` Contato

## Formulário de contato

O formulário em `/contato` simula envio (validação + mensagem de sucesso), sem envio real de e-mail. Quando houver credenciais SMTP, a integração pode ser adicionada.

## Scripts

- `npm run dev` inicia ambiente de desenvolvimento
- `npm run build` gera build de produção
- `npm run start` executa o build
- `npm run lint` executa lint

## Requisitos

- Node.js 18+ (recomendado)
- NPM

## Observações

- O projeto utiliza `next.config.ts` padrão.
- Não há variáveis de ambiente obrigatórias no momento.
