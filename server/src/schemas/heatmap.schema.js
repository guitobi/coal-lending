import { z } from "zod";

// Base heatmap event schema
const baseHeatmapSchema = z.object({
  type: z.enum(["click", "scroll", "mouse", "form-focus", "form-change"]),
  timestamp: z.number().optional(),
  url: z.string().url().max(2048).optional(),
  viewport: z
    .object({
      width: z.number().min(0).max(10000),
      height: z.number().min(0).max(10000),
    })
    .optional(),
});

// Click event schema
export const clickHeatmapSchema = baseHeatmapSchema.extend({
  type: z.literal("click"),
  x: z.number().min(0).max(10000),
  y: z.number().min(0).max(10000),
  target: z.string().max(200).optional(),
});

// Scroll event schema
export const scrollHeatmapSchema = baseHeatmapSchema.extend({
  type: z.literal("scroll"),
  scrollY: z.number().min(0).max(100000),
  scrollPercentage: z.number().min(0).max(100).optional(),
});

// Mouse movement schema (limited data to prevent spam)
export const mouseHeatmapSchema = baseHeatmapSchema.extend({
  type: z.literal("mouse"),
  x: z.number().min(0).max(10000),
  y: z.number().min(0).max(10000),
});

// Form focus event schema
export const formFocusHeatmapSchema = baseHeatmapSchema.extend({
  type: z.literal("form-focus"),
  fieldName: z.string().max(100),
  fieldType: z.string().max(50).optional(),
});

// Form change event schema
export const formChangeHeatmapSchema = baseHeatmapSchema.extend({
  type: z.literal("form-change"),
  fieldName: z.string().max(100),
  // Don't store actual field values for privacy
});

// Union type for all heatmap events
export const heatmapSchema = z.discriminatedUnion("type", [
  clickHeatmapSchema,
  scrollHeatmapSchema,
  mouseHeatmapSchema,
  formFocusHeatmapSchema,
  formChangeHeatmapSchema,
]);

export type HeatmapData = z.infer<typeof heatmapSchema>;
