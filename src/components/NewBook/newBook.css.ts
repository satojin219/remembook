import { style } from "@vanilla-extract/css";

export const container = style({
  background: "#fff",
  borderRadius: 25,
  padding: 16,
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 8,
  textAlign: "center",
});
export const title = style({
  minWidth: 240,
  fontSize: 20,
  fontWeight: "bolder",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
});
