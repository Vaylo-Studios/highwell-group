import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#16211c",
          color: "#f6f7f5",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#9098c9",
            marginBottom: 24,
          }}
        >
          Highwell Group
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Make it real.
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#215173",
            marginTop: 32,
          }}
        >
          Print. Produce. Fabricate. Deliver.
        </div>
      </div>
    ),
    { ...size },
  );
}
