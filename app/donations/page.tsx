"use client"

import { DollarSign, Heart, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate to Vedic Center - Support Hindu Temple & Community Services",
  description: "Support the Vedic Center of Greenville through secure online donations. Your contributions help maintain our temple and expand community services in the Greenville-Spartanburg area.",
  keywords: ["donate Hindu temple", "temple donations", "Vedic Center donations", "support Hindu temple Greenville", "tax-deductible donations"],
  alternates: {
    canonical: '/donations',
  },
  openGraph: {
    title: "Donate to Vedic Center of Greenville - Support Our Temple Community",
    description: "Your generous donations help us maintain the temple and expand our services to the community. Secure online donations available.",
    url: '/donations',
    images: [
      {
        url: '/og-donations.jpg',
        width: 1200,
        height: 630,
        alt: 'Support Vedic Center of Greenville',
      },
    ],
  },
}

const donationOptions = [
  {
    id: "general",
    title: "General Temple Fund",
    description: "Support the daily operations and maintenance of the temple",
    icon: Heart,
  },
  {
    id: "construction",
    title: "Temple Expansion Project",
    description: "Contribute to our ongoing construction and expansion efforts",
    icon: DollarSign,
  },
  {
    id: "education",
    title: "Educational Programs",
    description: "Support our classes, workshops, and youth programs",
    icon: DollarSign,
  },
  {
    id: "community",
    title: "Community Outreach",
    description: "Help fund our community service and charitable initiatives",
    icon: Heart,
  },
]

export default function DonationsPage() {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">Support the Vedic Center</h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          Your generous donations help us maintain the temple and expand our services to the community
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-6">
            <h2 className="text-xl font-semibold text-orange-900 mb-4">Donation Options</h2>
            <div className="space-y-4">
              {donationOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <div key={option.id} className="bg-orange-50 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      <IconComponent className="h-5 w-5 text-orange-600" />
                      <h3 className="ml-2 font-medium text-orange-900">{option.title}</h3>
                    </div>
                    <p className="text-sm text-orange-700">{option.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-orange-100 p-4 rounded-md">
              <h3 className="font-medium text-orange-900 mb-2">Tax Benefits</h3>
              <p className="text-sm text-orange-800">
                The Vedic Center of Greenville is a registered 501(c)(3) non-profit organization. All donations are
                tax-deductible to the extent allowed by law.
              </p>
            </div>

            <div className="mt-4 bg-orange-100 p-4 rounded-md">
              <h3 className="font-medium text-orange-900 mb-2">Corporate Matching</h3>
              <p className="text-sm text-orange-800">
                Many employers match charitable contributions made by their employees. Please check with your HR
                department to see if your donation can be matched.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-orange-200">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold text-orange-900 mb-4">Make a Donation</h2>
              <p className="text-orange-700 mb-8 text-lg">
                Your contribution supports the maintenance and growth of our temple
              </p>
              
              <div className="space-y-4">
                <p className="text-orange-800">
                  Click the button below to access our secure donation form and make your contribution.
                </p>
                
                <Button
                  onClick={() => window.open('https://vcofg.org/?givewp-route=donation-form-view&form-id=1152&locale=en_US', '_blank')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
                  size="lg"
                >
                  Donate Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-sm text-orange-600 mt-4">
                  You will be redirected to our secure donation platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
