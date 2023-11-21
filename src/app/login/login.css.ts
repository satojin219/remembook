import { style } from "@vanilla-extract/css";

export const container = style({
  background: "#fff",
  borderRadius: 25,
  padding: "32px 16px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  gap: "24px",
  width: "fit-content",
});

export const button = style({
  padding: "4px 8px",
  fontSize: 18,
  fontWeight: "bold",
  background: "black",
  color: "white",
  borderRadius: 5,
});
