import { ImageResponse } from "next/og";

export const alt = "Akechi — Technology That Bridges";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #FFFFFF 0%, #F8FBFD 55%, #EAF7FB 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#0078D4",
            }}
          />
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#005A9E",
            }}
          >
            Akechi Webcraft
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#0F172A",
              maxWidth: 940,
            }}
          >
            We engineer systems that accelerate growth
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.4,
              color: "#475569",
              maxWidth: 880,
            }}
          >
            Strategy, AI, cloud infrastructure, and digital products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 24,
            color: "#475569",
          }}
        >
          <span>akechiwebcraft.com</span>
          <span style={{ color: "#BFD4DE" }}>|</span>
          <span>ISO 27001:2022 · ISO 9001:2015</span>
        </div>
      </div>
    ),
    size
  );
}
