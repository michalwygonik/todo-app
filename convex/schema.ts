import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    content: v.string(),
    completed: v.optional(v.boolean()),
  }),
});
