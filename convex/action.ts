import { query } from "./_generated/server";
import { v } from "convex/values";
export const getMovies = query({
  args: { type: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("titles")
      .withIndex("type", (q) => q.eq("type", args.type))
      .collect();
  },
});
