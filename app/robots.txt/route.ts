import { MetadataRoute } from 'next'

export function GET(): Response {
  const robotsTxt = `User-agent: *
Allow: /

# Allow all search engines to crawl the site
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Disallow crawling of admin or private areas
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

# Sitemap location
Sitemap: https://vcofg.org/sitemap.xml

# Crawl-delay (optional)
Crawl-delay: 1
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}