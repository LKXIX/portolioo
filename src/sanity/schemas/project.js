import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "type", title: "Type", type: "string", options: { list: ["Personal", "Client", "Agency", "Open Source"] } }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt" }] }),
    defineField({ name: "link", title: "Live URL", type: "url" }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
    defineField({ name: "technologies", title: "Technologies", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Featured first", name: "featuredFirst", by: [{ field: "featured", direction: "desc" }] },
  ],
});
