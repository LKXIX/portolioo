import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "role", title: "Role / Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "company", title: "Company", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "companyUrl", title: "Company URL", type: "url" }),
    defineField({ name: "startDate", title: "Start Date", type: "date" }),
    defineField({ name: "endDate", title: "End Date", type: "date", description: "Leave empty if current role" }),
    defineField({ name: "current", title: "Current Role", type: "boolean", initialValue: false }),
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "technologies", title: "Technologies / Skills", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Start Date (newest first)", name: "startDateDesc", by: [{ field: "startDate", direction: "desc" }] },
  ],
});
