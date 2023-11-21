import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "4px 8px",
  fontSize: 18,
  fontWeight: "bold",
  background: "black",
  color: "white",
  borderRadius: 5,
});

export const noteStyle = style({
  background: "#F5F5F5",
  padding: 8,
  borderRadius: 5,
  fontSize: 24,
});

export const noteContainer = style({
  marginTop: 16,
  display: "flex",
  flexDirection: "column",
  gap: 8,
});
