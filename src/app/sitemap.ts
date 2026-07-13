import { MetadataRoute } from "next"
import { blogArticles } from "@/lib/ai-readable-content"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ax-con.com"
  const now = new Date()
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/ai-transformation`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/services/ai-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/services/ai-education`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/automation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/education`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/industries/sme`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industries/engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industries/manufacturing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/industries/healthcare`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/industries/traditional`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/cases`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog/ai-native-company`, lastModified: now, changeFrequency: "weekly", priority: 0.86 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/llms.txt`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ]

  return [
    ...staticRoutes,
    ...blogArticles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    })),
  ]
}
