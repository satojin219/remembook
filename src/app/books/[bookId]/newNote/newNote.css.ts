import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 12,
});

export const button = style({
  padding: "4px 8px",
  fontSize: 18,
  fontWeight: "bold",
  background: "black",
  color: "white",
  borderRadius: 5,
});
