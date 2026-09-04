import { Mail, MessageCircle } from "lucide-react";
import type { AcquisitionContext } from "../../lib/acquisition/context";
import { measurementAttributesForAcquisition } from "../../lib/measurement/acquisition";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const CONTACT_EMAIL = "haasesolucoes@gmail.com";
const contactAcquisitionContext = {
    page: "contact",
    position: "contact",
    intent: "contact",
} satisfies AcquisitionContext;

const linkClassName =
    "mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto";

export default function ContactFallback() {
    return (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <MessageCircle aria-hidden="true" className="text-emerald-700" size={24} />
                <h3 className="mt-3 text-lg font-semibold text-slate-900">WhatsApp</h3>
                <p className="mt-2 flex-1 text-sm text-slate-700">
                    Envie uma mensagem para a HAASE pelo WhatsApp.
                </p>
                <a
                    href={buildWhatsAppLink(contactAcquisitionContext)}
                    {...measurementAttributesForAcquisition(
                        contactAcquisitionContext,
                        "whatsapp_click"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Entrar em contato com a HAASE pelo WhatsApp (abre em nova aba)"
                    className={`${linkClassName} bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:outline-emerald-700`}
                >
                    <MessageCircle aria-hidden="true" size={18} />
                    Falar pelo WhatsApp
                </a>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                <Mail aria-hidden="true" className="text-emerald-700" size={24} />
                <h3 className="mt-3 text-lg font-semibold text-slate-900">E-mail</h3>
                <p className="mt-2 flex-1 break-words text-sm text-slate-700">
                    {CONTACT_EMAIL}
                </p>
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    {...measurementAttributesForAcquisition(
                        contactAcquisitionContext,
                        "email_click"
                    )}
                    aria-label={`Enviar e-mail para ${CONTACT_EMAIL}`}
                    className={`${linkClassName} border border-emerald-700 bg-white text-emerald-800 hover:bg-emerald-50 focus-visible:outline-emerald-700`}
                >
                    <Mail aria-hidden="true" size={18} />
                    Enviar e-mail
                </a>
            </article>
        </div>
    );
}
