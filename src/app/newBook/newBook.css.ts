import { globalStyle, style } from "@vanilla-extract/css";

export const inputContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  width: 500,
});

export const button = style({
  minWidth: "100%",
  padding: "8px 16px",
  fontSize: 16,
  fontWeight: "bold",
  background: "black",
  color: "white",
  borderRadius: 5,
  marginTop: 12,
});

globalStyle("input", {
  width: 500,
  height: 40,
  fontSize: 18,
  padding: 4,
});
globalStyle("label", {
  fontSize: 24,
  fontWeight: "bold",
});
