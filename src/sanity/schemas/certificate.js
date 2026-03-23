import { defineField, defineType } from "sanity";

export default defineType({
  name: "certificate",
  title: "Certificate / Achievement",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "issuer", title: "Issuer / Organisation", type: "string" }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "link", title: "Certificate URL", type: "url" }),
    defineField({ name: "image", title: "Certificate Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }),
    defineField({ name: "type", title: "Type", type: "string", options: { list: ["Certificate", "Achievement", "Award", "Education"] } }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [
    { title: "Date (newest first)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
