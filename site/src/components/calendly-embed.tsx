"use client";

import { useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/abhas-anvayan/15-min-system-audit?hide_gdpr_banner=1&background_color=f7f5f0&text_color=182139&primary_color=182139";

/**
 * Calendly inline widget. Loads Calendly's script once the component mounts
 * and removes it on unmount so that client-side navigation back to /contact
 * re-initialises the widget cleanly.
 */
export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden border border-soft-grey/60"
      data-url={CALENDLY_URL}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
