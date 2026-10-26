import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#0B0D0F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C6F36B",
          fontWeight: 900,
          borderRadius: "6px",
          border: "1.5px solid #303635",
        }}
      >
        P
      </div>
    ),
    { ...size }
  );
}
