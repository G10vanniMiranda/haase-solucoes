"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/measurement/client";
import { createMeasurementEvent } from "../lib/measurement/context";

const MEASUREMENT_SELECTOR = "[data-measure-event]";

export default function MeasurementBridge() {
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (!(event.target instanceof Element)) return;

            const measuredElement = event.target.closest<HTMLElement>(MEASUREMENT_SELECTOR);
            if (!measuredElement) return;

            const measurementEvent = createMeasurementEvent(
                {
                    name: measuredElement.dataset.measureEvent,
                    page: measuredElement.dataset.measurePage,
                    service: measuredElement.dataset.measureService,
                    position: measuredElement.dataset.measurePosition,
                    intent: measuredElement.dataset.measureIntent,
                },
                window.location.pathname
            );

            if (!measurementEvent) return;
            trackEvent(measurementEvent);
        }

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return null;
}
