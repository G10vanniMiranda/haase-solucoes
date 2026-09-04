# Analytics governance

This contract records HG-04 decisions while external analytics remains disabled.

## Commercial decision status

- HG-04 status: `DEFERRED / NO-COST MODE`.
- Active analytics vendor: none.
- External analytics transmission: disabled.
- Active measurement adapter: no-op.
- Current recurring analytics software cost: zero.
- Recommended future vendor: Plausible Cloud Business.
- Plausible is not contracted, configured, authorized for activation, or active.

No recurring analytics cost may be assumed by Giovanni or Mi7anda without a new
commercial decision and explicit client approval.

## Preserved future recommendation

If the decision is reopened and Plausible is selected, the previously evaluated
target remains cookieless and minimized: no analytics cookies, localStorage,
sessionStorage, IndexedDB, persistent identity, profiles, advertising, replay,
autocapture, or cross-site tracking.

The evaluated attribution model remains Plausible-native landing page and referrer,
plus `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term`.
The HAASE application must not persist campaign context or collect a custom
`document.referrer`. The five-year Plausible Business retention remains a known
future trade-off and must be reconfirmed with the commercial decision before any
activation. None of these future constraints authorizes current transmission.

## Future eligibility contract

The active-vendor state, future recommendation, future event eligibility,
dimension allowlists, and field denylist live in
`src/lib/measurement/governance.ts`. Future eligibility is intentionally
independent from the complete `MeasurementEvent` union.

An eligible event is not a currently transmitted event. While
`EXTERNAL_MEASUREMENT_TRANSMISSION_ENABLED` is `false`, every event remains local
and the no-op adapter discards it.

The v1 dimension contracts are:

```text
whatsapp_click
  required: currentPath, position, intent
  optional: page, service

email_click
  required: currentPath, position, intent
  optional: page
```

## Future serialization boundary

If analytics is commercially approved in a future Human Gate, an external adapter
must use this flow:

```text
MeasurementEvent
-> event-specific narrowing
-> explicit dimension allowlist
-> explicit vendor payload mapper
```

It must fail closed for unknown events and fields. It must not spread or generically
serialize a domain event, DOM dataset, URL, query string, contact value, or message.
The domain event discriminator may be translated to a vendor event name, but it is
not copied as an arbitrary `name` property.

## Reopening triggers

The commercial decision may be reopened when one or more of these conditions exist:

- relevant paid media;
- meaningful traffic volume;
- demonstrated attribution need;
- a recurring client contract;
- a real reporting requirement;
- explicit client approval for the investment.

These triggers permit a new decision; they do not activate a vendor.

## Future activation preconditions

Any external vendor must remain inactive until all items below are evidenced and
approved:

1. A new commercial Human Gate authorizes cost and activation.
2. The privacy policy accurately describes the active analytics behavior.
3. The vendor account and configuration are approved.
4. Two-factor authentication is confirmed on the vendor account.
5. The production site/domain is configured.
6. The event-specific mapper is verified to exclude PII and denied fields.
7. Network inspection is prepared for pageviews and custom events.
8. The no-op fallback and non-blocking CTA behavior are preserved.
9. The legal basis applicable to the Brazilian operation is validated.

These are review gates, not runtime booleans. This file does not assert that any
account, domain, legal validation, or activation already exists.

## Failure behavior

Measurement is observability, not a business-critical path. The active adapter is
no-op. A future missing script, blocked request, vendor outage, mapper rejection,
or unexpected value must never block navigation, WhatsApp, e-mail, or any other
CTA.

## Change control

Adding an externally transmitted event or dimension, persistence, raw export,
first-party retention, warehouse, user identity, profile enrichment, advertising,
replay, or autocapture requires a new Human Gate. Cookieless analytics must not be
described as strictly necessary, and this technical contract is not legal advice.

W0-B-06 — Plausible Adapter Foundation is deferred. Analytics work must not resume
without a new commercial decision.
