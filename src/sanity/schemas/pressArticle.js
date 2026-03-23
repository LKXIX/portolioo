import { defineField, defineType } from "sanity";

export default defineType({
  name: "pressArticle",
  title: "Press Article",
  type: "document",
  fields: [
    defineField({ name: "publication", title: "Publication", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Article Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "date", title: "Published Date", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "link", title: "Article URL", type: "url" }),
    defineField({ name: "tag", title: "Tag", type: "string", options: { list: ["Feature", "Startup Feature", "Accelerator", "Interview", "Award"] } }),
    defineField({ name: "logo", title: "Publication Logo", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt" }] }),
  ],
  orderings: [
    { title: "Date (newest first)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
  ],
});
