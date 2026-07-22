/**
 * Lightweight, provider-agnostic analytics wrapper.
 *
 * This is a safe no-op until you activate a provider. To turn it on:
 *
 *  1. Pick a privacy-friendly provider (Plausible, Umami, GoatCounter, ...).
 *  2. Add its snippet to `index.html` (there is a commented placeholder in the
 *     <head> ready to uncomment).
 *  3. That's it — the `track()` calls already wired into the UI will start
 *     reporting automatically. No code changes needed here.
 *
 * `track()` detects whichever provider is present on `window` and forwards the
 * event to it. If none is loaded (e.g. local dev, or before you sign up), it
 * simply does nothing.
 */

type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
    umami?: { track: (event: string, data?: Props) => void };
    goatcounter?: { count: (opts: { path: string; event: boolean }) => void };
  }
}

export function track(event: string, props?: Props): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.plausible === "function") {
      window.plausible(event, props ? { props } : undefined);
    } else if (window.umami?.track) {
      window.umami.track(event, props);
    } else if (window.goatcounter?.count) {
      window.goatcounter.count({ path: event, event: true });
    }
    // No provider loaded -> no-op.
  } catch {
    // Never let analytics break the UI.
  }
}
