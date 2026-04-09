import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const size = {
  width: 256,
  height: 256,
};

export const contentType = "image/png";
export const runtime = "nodejs";

async function getLogoDataUrl() {
  const filePath = path.join(process.cwd(), "public/images/logo dourada.png");
  const buffer = await readFile(filePath);

  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export default async function Icon() {
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(180deg, #FFF9EC 0%, #F9ECCC 100%)",
          borderRadius: "9999px",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "10px solid rgba(192, 160, 95, 0.9)",
            borderRadius: "9999px",
            height: "212px",
            width: "212px",
            position: "absolute",
          }}
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            height: "160px",
            justifyContent: "center",
            width: "160px",
          }}
        >
          <img
            src={logoSrc}
            alt="Logo Clara Didier"
            style={{
              height: "auto",
              width: "150px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
