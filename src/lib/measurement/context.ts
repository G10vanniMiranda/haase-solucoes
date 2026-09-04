import type {
    CtaIntent,
    CtaPosition,
    PageId,
    ServiceId,
} from "../acquisition/context";
import type { MeasurementContext, MeasurementEvent } from "./events";

const PAGE_IDS: ReadonlySet<string> = new Set([
    "home",
    "about",
    "services",
    "contact",
    "work-safety",
    "environment",
    "judicial-expertise",
    "ergonomics-and-psychosocial-risks",
    "esocial",
]);

const SERVICE_IDS: ReadonlySet<string> = new Set([
    "work-safety",
    "environment",
    "judicial-expertise",
    "ergonomics-and-psychosocial-risks",
    "esocial",
    "training",
]);

const CTA_POSITIONS: ReadonlySet<string> = new Set([
    "header",
    "hero-primary",
    "hero-secondary",
    "service-card",
    "section",
    "contact",
    "footer",
]);

const CTA_INTENTS: ReadonlySet<string> = new Set([
    "talk-to-specialist",
    "request-assessment",
    "request-quote",
    "request-service",
    "ask-question",
    "contact",
]);

export type MeasurementAttributes = Readonly<{
    name?: string;
    page?: string;
    service?: string;
    position?: string;
    intent?: string;
}>;

/** Normalizes pathnames only. Absolute URLs are intentionally outside this contract. */
export function normalizePathname(pathname: string): string {
    const trimmed = pathname.trim();
    const boundaryIndexes = [trimmed.indexOf("?"), trimmed.indexOf("#")].filter(
        (index) => index >= 0
    );
    const boundary = boundaryIndexes.length > 0 ? Math.min(...boundaryIndexes) : trimmed.length;
    const pathOnly = trimmed.slice(0, boundary);
    const withLeadingSlash = pathOnly.startsWith("/") ? pathOnly : `/${pathOnly}`;
    const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/, "");

    return withoutTrailingSlash || "/";
}

function isPageId(value: string): value is PageId {
    return PAGE_IDS.has(value);
}

function isServiceId(value: string): value is ServiceId {
    return SERVICE_IDS.has(value);
}

function isCtaPosition(value: string): value is CtaPosition {
    return CTA_POSITIONS.has(value);
}

function isCtaIntent(value: string): value is CtaIntent {
    return CTA_INTENTS.has(value);
}

export function createMeasurementEvent(
    attributes: MeasurementAttributes,
    pathname: string
): MeasurementEvent | null {
    let page: PageId | undefined;
    let service: ServiceId | undefined;
    let position: CtaPosition | undefined;
    let intent: CtaIntent | undefined;

    if (attributes.page !== undefined) {
        if (!isPageId(attributes.page)) return null;
        page = attributes.page;
    }

    if (attributes.service !== undefined) {
        if (!isServiceId(attributes.service)) return null;
        service = attributes.service;
    }

    if (attributes.position !== undefined) {
        if (!isCtaPosition(attributes.position)) return null;
        position = attributes.position;
    }

    if (attributes.intent !== undefined) {
        if (!isCtaIntent(attributes.intent)) return null;
        intent = attributes.intent;
    }

    const context = {
        currentPath: normalizePathname(pathname),
        ...(page ? { page } : {}),
        ...(service ? { service } : {}),
        ...(position ? { position } : {}),
        ...(intent ? { intent } : {}),
    } satisfies MeasurementContext;

    switch (attributes.name) {
        case "cta_click":
            return { name: "cta_click", ...context };
        case "whatsapp_click":
            return { name: "whatsapp_click", ...context };
        case "phone_click":
            return { name: "phone_click", ...context };
        case "email_click":
            return { name: "email_click", ...context };
        case "form_start":
            return { name: "form_start", ...context };
        case "form_submit_success":
            return { name: "form_submit_success", ...context };
        case "form_submit_error":
            return { name: "form_submit_error", ...context };
        default:
            return null;
    }
}
