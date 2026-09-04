import ContactFallback from "./ContactFallback";

export default function ContatoContent() {
    return (
        <main id="main-content" tabIndex={-1} className="bg-white text-slate-900">
            <section className="border-b border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Contato
                        </p>
                        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                            Fale com a Haase Soluções
                        </h1>
                        <p className="mt-3 text-sm text-slate-600">
                            Entre em contato com nossa equipe pelos canais abaixo.
                        </p>
                    </div>
                </div>
            </section>

            <section aria-labelledby="contact-channels-title" className="bg-white">
                <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                    <div className="max-w-3xl">
                        <h2 id="contact-channels-title" className="text-xl font-semibold text-slate-900">
                            Canais de contato
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Escolha WhatsApp ou e-mail para falar com a HAASE.
                        </p>
                    </div>

                    <ContactFallback />
                </div>
            </section>
        </main>
    );
}
