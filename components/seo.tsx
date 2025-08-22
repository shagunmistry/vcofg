import Head from 'next/head'
import { StructuredData, createBreadcrumbSchema } from './structured-data'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  breadcrumbs?: { name: string; url: string }[]
  structuredData?: Record<string, any>
}

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  noindex = false,
  breadcrumbs = [],
  structuredData
}: SEOProps) {
  const breadcrumbSchema = breadcrumbs.length > 0 ? createBreadcrumbSchema(breadcrumbs) : null

  return (
    <>
      {breadcrumbSchema && <StructuredData data={breadcrumbSchema} />}
      {structuredData && <StructuredData data={structuredData} />}
      
      {/* Additional meta tags that might not be covered by Next.js metadata */}
      <Head>
        {canonical && <link rel="canonical" href={canonical} />}
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        {noindex && <meta name="robots" content="noindex,nofollow" />}
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="Vedic Center of Greenville" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="en" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="US-SC" />
        <meta name="geo.placename" content="Mauldin, South Carolina" />
        <meta name="geo.position" content="34.7781;-82.3107" />
        <meta name="ICBM" content="34.7781, -82.3107" />
        
        {/* Additional Open Graph tags */}
        <meta property="og:site_name" content="Vedic Center of Greenville" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:site" content="@vcofg" />
        <meta name="twitter:creator" content="@vcofg" />
        
        {/* Apple specific tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vedic Center" />
        
        {/* Microsoft specific tags */}
        <meta name="msapplication-TileColor" content="#ea580c" />
        <meta name="theme-color" content="#ea580c" />
      </Head>
    </>
  )
}

// Utility function to generate FAQ schema
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Utility function to generate article schema
export function createArticleSchema(article: {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "HinduTemple",
      "name": "Vedic Center of Greenville",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vcofg.org/logo.png"
      }
    },
    "image": article.image || "https://vcofg.org/og-image.jpg"
  }
}