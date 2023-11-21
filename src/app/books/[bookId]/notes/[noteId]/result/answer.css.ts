import { globalStyle, style } from "@vanilla-extract/css";

export const queue = style({
  fontSize: 24,
  marginBottom: 24,
  fontWeight: "bold",
});

export const container = style({
  padding: 24,
  fontWeight: "bold",
  borderRadius: 20,
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const score = style({
  padding: 48,
  color: "#8AD596",
});

export const noteContainer = style({
  display: "flex",
  justifyContent: "space-between",
});
globalStyle("h1", {
  fontSize: 32,
});
globalStyle("h2", {
  fontSize: 24,
});
globalStyle("h3", {
  textAlign: "start",
  fontSize: 20,
});
globalStyle("p", {
  fontSize: 16,
});
