import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/llms.txt", "/faq", "/blog/", "/services/", "/industries/", "/case-studies"],
      disallow: ["/api/"],
    },
    sitemap: "https://ax-con.com/sitemap.xml",
  }
}
