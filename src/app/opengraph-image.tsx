import { ImageResponse } from "next/og";
import { personal, seo } from "@/config/portfolio";

export const alt = `${personal.name} — ${personal.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f4f1e8", color: "#241b2f", padding: 68, fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, rgba(36,27,47,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(36,27,47,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, letterSpacing: 5, color: "#6b5c7e", textTransform: "uppercase" }}>
          <span style={{ width: 14, height: 14, background: "#c8f542" }} />
          {seo.repository.replace("https://github.com/", "")}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, lineHeight: 1.05, letterSpacing: -3 }}>{personal.name}</div>
          <div style={{ fontSize: 43, color: "#7b7c2a", marginTop: 12 }}>{personal.role}</div>
          <div style={{ fontSize: 27, color: "#6b5c7e", marginTop: 22, maxWidth: 950 }}>{personal.tagline}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22, color: "#6b5c7e" }}>
          <span>Java · Backend · Full-Stack · AI</span>
          <span>GitHub · LinkedIn</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
