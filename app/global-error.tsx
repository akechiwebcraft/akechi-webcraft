"use client";

import { useEffect } from "react";

/**
 * Catches errors thrown by the root layout itself, where the normal error
 * boundary cannot render. It replaces the whole document, so it has to supply
 * its own <html>/<body> and cannot rely on the site's stylesheet being present.
 */
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Root layout error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#F8FBFD",
          color: "#0F172A",
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#005A9E",
            }}
          >
            Akechi Webcraft
          </p>
          <h1 style={{ margin: "12px 0 0", fontSize: 28, lineHeight: 1.2 }}>
            The site failed to load
          </h1>
          <p style={{ margin: "16px 0 0", fontSize: 16, lineHeight: 1.6, color: "#475569" }}>
            Something went wrong at our end. Please try again in a moment.
          </p>
          {error.digest && (
            <p style={{ margin: "16px 0 0", fontSize: 13, color: "#475569" }}>
              Reference code: {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={() => unstable_retry()}
            style={{
              marginTop: 28,
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#0078D4",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
          <p style={{ margin: "32px 0 0", fontSize: 14, color: "#475569" }}>
            Need us urgently? Email{" "}
            <a href="mailto:info@akechiwebcraft.com" style={{ color: "#005A9E" }}>
              info@akechiwebcraft.com
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
