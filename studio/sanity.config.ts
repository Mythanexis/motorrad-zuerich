import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { kursSchema } from "./schemas/kurs";
import { motorradSchema } from "./schemas/motorrad";

export default defineConfig({
  name: "motorradkurse-zuerich",
  title: "Motorradkurse Zürich",
  projectId: "bhak4wmc",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [kursSchema, motorradSchema],
  },
});
