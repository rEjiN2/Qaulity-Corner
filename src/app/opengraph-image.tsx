import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { contactInfo, siteConfig } from "@/lib/constants/site";

export const alt = siteConfig.legalName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public", "logo.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid rgba(201,162,39,0.35)",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={140} height={140} alt="" />

        <div
          style={{
            marginTop: 32,
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name}
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 26,
            color: "#e6c65c",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          Auto Spare Parts Trading L.L.C.
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 22,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {contactInfo.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
