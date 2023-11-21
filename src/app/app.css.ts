import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  background: "#E9E9E9",
  margin: "0 auto",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#404040",
  "@media": {
    "screen and (max-width: 1440px)": {
      maxWidth: 1200,
    },
    "screen and (max-width: 1024px)": {
      maxWidth: 900,
    },
    "screen and (max-width: 768px)": {
      maxWidth: 680,
    },
    "screen and (max-width: 425px)": {
      maxWidth: 380,
    },
    "screen and (max-width: 320px)": {
      maxWidth: 280,
    },
  },
});

globalStyle("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
  padding: 0,
  appearance: "none",
});
