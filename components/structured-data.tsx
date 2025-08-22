import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Hindu Temple Organization Schema
export const templeOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "HinduTemple",
  "name": "Vedic Center of Greenville",
  "alternateName": "VCOFG",
  "url": "https://vcofg.org",
  "logo": "https://vcofg.org/logo.png",
  "image": [
    "https://vcofg.org/temple-exterior.jpg",
    "https://vcofg.org/temple-interior.jpg",
    "https://vcofg.org/prayer-hall.jpg"
  ],
  "description": "Hindu temple and spiritual center serving the Greenville-Spartanburg area. Daily worship, cultural programs, and community services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "201 KHYBER WAY",
    "addressLocality": "Mauldin",
    "addressRegion": "SC",
    "postalCode": "29662",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.7781,
    "longitude": -82.3107
  },
  "telephone": "+1-864-288-7320",
  "email": "info@vcofg.org",
  "openingHours": [
    "Mo-Su 08:30-20:00"
  ],
  "sameAs": [
    "https://www.facebook.com/vcofg",
    "https://www.instagram.com/vcofg"
  ],
  "foundingDate": "1995",
  "religion": "Hinduism",
  "denomination": "Hindu",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Temple Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Daily Aarti & Darshan",
          "description": "Daily worship services and temple darshan"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cultural Programs",
          "description": "Traditional Indian cultural events and festivals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Community Services",
          "description": "Community outreach and charitable initiatives"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Educational Programs",
          "description": "Classes, workshops, and youth programs"
        }
      }
    ]
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Hindu Temple Association"
  },
  "nonprofit": true,
  "taxID": "501(c)(3)",
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "DonationOpportunity",
        "name": "Temple Donations",
        "description": "Support temple operations and community services"
      },
      "url": "https://vcofg.org/donations"
    }
  ]
}

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vedic Center of Greenville",
  "url": "https://vcofg.org",
  "description": "Official website of the Vedic Center of Greenville - Hindu temple and spiritual center",
  "publisher": {
    "@type": "HinduTemple",
    "name": "Vedic Center of Greenville"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://vcofg.org/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

// Event Schema (for upcoming events)
export function createEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate || event.startDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Vedic Center of Greenville",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "201 KHYBER WAY",
        "addressLocality": "Mauldin",
        "addressRegion": "SC",
        "postalCode": "29662",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "HinduTemple",
      "name": "Vedic Center of Greenville",
      "url": "https://vcofg.org"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }
}

// Breadcrumb Schema
export function createBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  }
}