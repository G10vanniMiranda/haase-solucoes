import type { MeasurementEvent } from "./events";

export interface MeasurementAdapter {
    track(event: MeasurementEvent): void;
}

export class NoopMeasurementAdapter implements MeasurementAdapter {
    track(event: MeasurementEvent): void {
        void event;
    }
}

const measurementAdapter: MeasurementAdapter = new NoopMeasurementAdapter();

export function trackEvent(event: MeasurementEvent): void {
    measurementAdapter.track(event);
}
