import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const title = style({
  fontSize: 18,
});

export const description = style({
  fontSize: 16,
});

export const input = style({
  width: 500,
  height: 180,
  fontSize: 18,
  padding: 4,
});
