import type { MeasurementEventName } from "./events";

export const ACTIVE_ANALYTICS_VENDOR = null;
export const RECOMMENDED_FUTURE_ANALYTICS_VENDOR = "plausible" as const;
export const EXTERNAL_MEASUREMENT_TRANSMISSION_ENABLED = false as const;

export const FUTURE_EXTERNAL_MEASUREMENT_EVENT_NAMES = [
    "whatsapp_click",
    "email_click",
] as const satisfies readonly MeasurementEventName[];

export type FutureExternalMeasurementEventName =
    (typeof FUTURE_EXTERNAL_MEASUREMENT_EVENT_NAMES)[number];

export type ExternalMeasurementDimension =
    | "currentPath"
    | "page"
    | "service"
    | "position"
    | "intent";

type ExternalMeasurementDimensionContract = Readonly<{
    required: readonly ExternalMeasurementDimension[];
    optional: readonly ExternalMeasurementDimension[];
}>;

export const FUTURE_EXTERNAL_MEASUREMENT_DIMENSIONS = {
    whatsapp_click: {
        required: ["currentPath", "position", "intent"],
        optional: ["page", "service"],
    },
    email_click: {
        required: ["currentPath", "position", "intent"],
        optional: ["page"],
    },
} as const satisfies Readonly<
    Record<FutureExternalMeasurementEventName, ExternalMeasurementDimensionContract>
>;

/**
 * Fields that an external measurement mapper must never serialize.
 * `name` means a person's name; the event discriminator is mapped separately.
 * Native campaign attribution is vendor-owned and must not be copied from app state.
 */
export const EXTERNAL_MEASUREMENT_DENIED_FIELDS = [
    "name",
    "email",
    "phone",
    "message",
    "cpf",
    "company",
    "href",
    "rawUrl",
    "query",
    "queryString",
    "referrer",
    "whatsappNumber",
    "userId",
    "clientId",
    "advertisingId",
] as const;

export type ExternalMeasurementDeniedField =
    (typeof EXTERNAL_MEASUREMENT_DENIED_FIELDS)[number];

const externalEventNames: ReadonlySet<string> = new Set(
    FUTURE_EXTERNAL_MEASUREMENT_EVENT_NAMES
);
const deniedFields: ReadonlySet<string> = new Set(EXTERNAL_MEASUREMENT_DENIED_FIELDS);

export function isEligibleForFutureExternalMeasurement(
    value: string
): value is FutureExternalMeasurementEventName {
    return externalEventNames.has(value);
}

export function isEligibleFutureExternalMeasurementDimension(
    eventName: string,
    field: string
): field is ExternalMeasurementDimension {
    if (!isEligibleForFutureExternalMeasurement(eventName)) return false;

    const dimensions: ExternalMeasurementDimensionContract =
        FUTURE_EXTERNAL_MEASUREMENT_DIMENSIONS[eventName];
    return (
        dimensions.required.some((dimension) => dimension === field) ||
        dimensions.optional.some((dimension) => dimension === field)
    );
}

export function isDeniedExternalMeasurementField(
    field: string
): field is ExternalMeasurementDeniedField {
    return deniedFields.has(field);
}
