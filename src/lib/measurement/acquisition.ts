import type { AcquisitionContext } from "../acquisition/context";
import type { MeasurementEventName } from "./events";

export type AcquisitionMeasurementEventName = Extract<
    MeasurementEventName,
    "cta_click" | "whatsapp_click" | "phone_click" | "email_click"
>;

export type AcquisitionMeasurementAttributes = Readonly<{
    "data-measure-event": AcquisitionMeasurementEventName;
    "data-measure-page"?: AcquisitionContext["page"];
    "data-measure-service"?: AcquisitionContext["service"];
    "data-measure-position": AcquisitionContext["position"];
    "data-measure-intent": AcquisitionContext["intent"];
}>;

export function measurementAttributesForAcquisition(
    context: AcquisitionContext,
    eventName: AcquisitionMeasurementEventName
): AcquisitionMeasurementAttributes {
    return {
        "data-measure-event": eventName,
        ...(context.page ? { "data-measure-page": context.page } : {}),
        ...(context.service ? { "data-measure-service": context.service } : {}),
        "data-measure-position": context.position,
        "data-measure-intent": context.intent,
    };
}
