import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { seoSuggestions, siteConfig } from "@/data/site-content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "nodejs";

async function getLogoDataUrl() {
  const filePath = path.join(process.cwd(), "public/images/logo dourada.png");
  const buffer = await readFile(filePath);

  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #FFF9EC 0%, #F1DFC0 52%, #E3C98F 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(255, 253, 247, 0.9)",
            border: "1px solid rgba(192, 160, 95, 0.35)",
            borderRadius: "40px",
            boxShadow: "0 30px 90px -50px rgba(58, 45, 19, 0.45)",
            display: "flex",
            gap: "44px",
            height: "100%",
            padding: "52px 58px",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              minWidth: "280px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "linear-gradient(180deg, #FFF9EC 0%, #F7EAC4 100%)",
                border: "12px solid rgba(192, 160, 95, 0.9)",
                borderRadius: "9999px",
                display: "flex",
                height: "240px",
                justifyContent: "center",
                width: "240px",
              }}
            >
              <img
                src={logoSrc}
                alt={`Logo ${siteConfig.name}`}
                style={{
                  height: "auto",
                  objectFit: "contain",
                  width: "184px",
                }}
              />
            </div>
          </div>

          <div
            style={{
              color: "#3A2D13",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              lineHeight: 1.1,
            }}
          >
            <div
              style={{
                color: "#7E642E",
                display: "flex",
                fontSize: "28px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Psicologa Online
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "66px",
                fontWeight: 700,
                marginBottom: "18px",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                color: "#5A451F",
                display: "flex",
                fontSize: "34px",
                lineHeight: 1.3,
                marginBottom: "20px",
                maxWidth: "680px",
              }}
            >
              Psicoterapia individual para jovens e adultos com foco em ansiedade, autoestima e relacionamentos.
            </div>
            <div
              style={{
                color: "#7E642E",
                display: "flex",
                fontSize: "28px",
                lineHeight: 1.4,
                maxWidth: "640px",
              }}
            >
              Atendimento online no Brasil e exterior. Agendamento pelo WhatsApp.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
