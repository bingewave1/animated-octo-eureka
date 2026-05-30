import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  genres: defineTable({
    name: v.string(),
    slug: v.string(),
    poster: v.optional(v.string()),
    status: v.boolean(),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  }).index("slug", ["slug"]),

  titles: defineTable({
    type: v.string(),
    name: v.string(),
    alt_names: v.optional(v.string()),
    original_name: v.string(),
    description: v.string(),
    slug: v.string(),
    has_seasons: v.boolean(),
    poster_path: v.string(),
    backdrop_path: v.string(),
    trailer: v.string(),
    runtime: v.string(),
    lang: v.string(),
    release_date: v.string(),
    tagline: v.string(),
    total_episodes: v.optional(v.string()),
    total_seasons: v.optional(v.string()),
    rating: v.optional(v.number()),
    access: v.string(),
    enabled: v.boolean(),
    status: v.string(),
    aired: v.optional(v.string()),
    source: v.optional(v.string()),
    shows_videos: v.boolean(),
    seo: v.boolean(),
    seo_title: v.optional(v.string()),
    seo_description: v.optional(v.string()),
    seo_img: v.optional(v.string()),
    seo_keywords: v.optional(v.string()),
    seo_url: v.optional(v.string()),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
    analytics: v.optional(v.id("titleAnalytics")),
  })
    .index("slug", ["slug"])
    .index("type", ["type"]),

  titleAnalytics: defineTable({
    title_id: v.id("titles"),
    page_views: v.number(),
    last_updated: v.number(),
  })
    .index("by_title_id", ["title_id"])
    .index("by_page_views", ["page_views"]),

  seasons: defineTable({
    title_id: v.id("titles"),
    name: v.string(),
    slug: v.string(),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
    release_date: v.optional(v.string()),
    enabled: v.optional(v.boolean()),
  }).index("title_id", ["title_id"]),

  videos: defineTable({
    name: v.optional(v.string()),
    title_id: v.id("titles"),
    season_id: v.optional(v.id("seasons")),
    episode: v.optional(v.string()),
    duration: v.string(),
    quality: v.optional(v.string()),
    skip_intro: v.optional(v.string()),
    url: v.string(),
    description: v.optional(v.string()),
    access: v.optional(v.string()),
    enabled: v.boolean(),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
    release_date: v.optional(v.string()),
  }).index("title_id", ["title_id"]),

  genresId: defineTable({
    title_id: v.id("titles"),
    genre_id: v.id("genres"),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  })
    .index("genre_id", ["genre_id"])
    .index("title_id", ["title_id"]),

  slider: defineTable({
    title_id: v.id("titles"),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  }).index("title_id", ["title_id"]),
});
