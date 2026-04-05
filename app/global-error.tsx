"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const message = error?.message || "";

    const isChunkError =
      message.includes("ChunkLoadError") ||
      message.includes("Loading chunk") ||
      message.includes("Failed to fetch dynamically imported module") ||
      message.includes("client-side exception");

    if (isChunkError) {
      const alreadyReloaded = sessionStorage.getItem("chunk-reload-attempted");

      if (!alreadyReloaded) {
        sessionStorage.setItem("chunk-reload-attempted", "true");
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            maxWidth: "500px",
          }}
        >
          <h2>Something went wrong</h2>
          <p>Please try again.</p>
          <button
            onClick={() => {
              sessionStorage.removeItem("chunk-reload-attempted");
              reset();
            }}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}