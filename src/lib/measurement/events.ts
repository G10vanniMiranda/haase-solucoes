import type {
    CtaIntent,
    CtaPosition,
    PageId,
    ServiceId,
} from "../acquisition/context";

export const MEASUREMENT_EVENT_NAMES = [
    "cta_click",
    "whatsapp_click",
    "phone_click",
    "email_click",
    "form_start",
    "form_submit_success",
    "form_submit_error",
] as const;

export type MeasurementEventName = (typeof MEASUREMENT_EVENT_NAMES)[number];

export type CampaignContext = Readonly<{
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
}>;

export type MeasurementContext = Readonly<{
    currentPath: string;
    page?: PageId;
    service?: ServiceId;
    position?: CtaPosition;
    intent?: CtaIntent;
    landingPath?: string;
    referrer?: string;
    campaign?: CampaignContext;
}>;

type ForbiddenMeasurementPii = {
    email?: never;
    phone?: never;
    message?: never;
    cpf?: never;
    company?: never;
};

type NamedMeasurementEvent<Name extends MeasurementEventName> = Readonly<
    MeasurementContext & ForbiddenMeasurementPii & { name: Name }
>;

export type CtaClickEvent = NamedMeasurementEvent<"cta_click">;
export type WhatsAppClickEvent = NamedMeasurementEvent<"whatsapp_click">;
export type PhoneClickEvent = NamedMeasurementEvent<"phone_click">;
export type EmailClickEvent = NamedMeasurementEvent<"email_click">;
export type FormStartEvent = NamedMeasurementEvent<"form_start">;
export type FormSubmitSuccessEvent = NamedMeasurementEvent<"form_submit_success">;
export type FormSubmitErrorEvent = NamedMeasurementEvent<"form_submit_error">;

export type MeasurementEvent =
    | CtaClickEvent
    | WhatsAppClickEvent
    | PhoneClickEvent
    | EmailClickEvent
    | FormStartEvent
    | FormSubmitSuccessEvent
    | FormSubmitErrorEvent;
