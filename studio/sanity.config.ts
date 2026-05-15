import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { kursSchema } from "./schemas/kurs";

export default defineConfig({
  name: "motorradkurse-zuerich",
  title: "Motorradkurse Zürich",
  projectId: "bhak4wmc",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [kursSchema],
  },
});
