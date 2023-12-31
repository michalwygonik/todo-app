import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: {
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Not authenticated");

    const todo = await ctx.db.insert("todos", {
      content: args.content,
      completed: false,
    });
    return todo;
  },
});

export const get = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const todos = await ctx.db.query("todos").order("desc").collect();

    return todos;
  },
});

export const getRecentTasks = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const todos = await ctx.db.query("todos").order("desc").take(5);

    return todos;
  },
});
