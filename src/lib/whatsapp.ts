import type { AcquisitionContext, CtaIntent, PageId, ServiceId } from "./acquisition/context";
import { WHATSAPP_BASE_URL } from "./constants";

const INSTITUTIONAL_ORIGIN = "Conheci a HAASE pelo site";

const PAGE_ORIGINS: Record<PageId, string> = {
    home: INSTITUTIONAL_ORIGIN,
    about: "Vim pela página Sobre a HAASE",
    services: "Vim pela página de Serviços",
    contact: "Vim pela página de Contato",
    "work-safety": "Vim pela página de Segurança do Trabalho",
    environment: "Vim pela página de Meio Ambiente",
    "judicial-expertise": "Vim pela página de Perícias Judiciais",
    "ergonomics-and-psychosocial-risks": "Vim pela página de Ergonomia e Riscos Psicossociais",
    esocial: "Vim pela página de eSocial SST",
};

const SERVICE_ORIGINS: Record<ServiceId, string> = {
    "work-safety": "Tenho interesse em Segurança do Trabalho",
    environment: "Tenho interesse em Meio Ambiente",
    "judicial-expertise": "Tenho interesse em Perícias Judiciais",
    "ergonomics-and-psychosocial-risks": "Tenho interesse em Ergonomia e Riscos Psicossociais",
    esocial: "Tenho interesse em eSocial SST",
    training: "Tenho interesse nos treinamentos da HAASE",
};

const INTENT_MESSAGES: Record<CtaIntent, string> = {
    "talk-to-specialist": "gostaria de conversar com a equipe",
    "request-assessment": "gostaria de conversar sobre uma avaliação",
    "request-quote": "gostaria de solicitar um orçamento",
    "request-service": "gostaria de entender como a HAASE pode ajudar",
    "ask-question": "gostaria de tirar uma dúvida",
    contact: "gostaria de entrar em contato",
};

export function buildWhatsAppLink(context: AcquisitionContext): string {
    let origin: string;

    if (context.position === "header") {
        origin = INSTITUTIONAL_ORIGIN;
    } else if (context.position === "footer") {
        origin = INSTITUTIONAL_ORIGIN;
    } else if (context.service) {
        origin = SERVICE_ORIGINS[context.service];
    } else {
        origin = PAGE_ORIGINS[context.page];
    }

    const intent = INTENT_MESSAGES[context.intent];

    // Position and campaign remain attribution-only and never enter the conversation text.
    const message = `Olá! ${origin} e ${intent}.`;

    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
