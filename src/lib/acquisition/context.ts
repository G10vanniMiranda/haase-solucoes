export type PageId =
    | "home"
    | "about"
    | "services"
    | "contact"
    | "work-safety"
    | "environment"
    | "judicial-expertise"
    | "ergonomics-and-psychosocial-risks"
    | "esocial";

export type ServiceId =
    | "work-safety"
    | "environment"
    | "judicial-expertise"
    | "ergonomics-and-psychosocial-risks"
    | "esocial"
    | "training";

export type CtaPosition =
    | "header"
    | "hero-primary"
    | "hero-secondary"
    | "service-card"
    | "section"
    | "contact"
    | "footer";

export type CtaIntent =
    | "talk-to-specialist"
    | "request-assessment"
    | "request-quote"
    | "request-service"
    | "ask-question"
    | "contact";

type SharedCtaContext =
    | {
        page?: never;
        position: "header";
    }
    | {
        page?: never;
        position: "footer";
    };

type PageCtaContext = {
    page: PageId;
    position: Exclude<CtaPosition, "header" | "footer">;
};

type AcquisitionDetails = {
    service?: ServiceId;
    intent: CtaIntent;
    /** Attribution-only context. It must not be exposed in the WhatsApp conversation. */
    campaign?: string;
};

export type AcquisitionContext =
    | Readonly<AcquisitionDetails & SharedCtaContext>
    | Readonly<AcquisitionDetails & PageCtaContext>;
