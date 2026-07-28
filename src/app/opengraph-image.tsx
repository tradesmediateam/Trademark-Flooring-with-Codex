import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b1220 0%, #111826 55%, #1c2534 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#d97706",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            T
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 700 }}>Trademark</span>
            <span
              style={{
                fontSize: 16,
                letterSpacing: 4,
                color: "#9caabf",
                textTransform: "uppercase",
              }}
            >
              Flooring
            </span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          Dead-Flat Floors, Built to Last.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#c7d0de",
            marginTop: 24,
            maxWidth: 850,
          }}
        >
          Concrete floor preparation across Metro Vancouver & BC
        </div>
      </div>
    ),
    { ...size }
  );
}
