"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "E-Samachar Signup", href: "/e-samachar" },
  { name: "Events", href: "/events" },
  { name: "Services", href: "/services" },
  { name: "Idols", href: "/idols" },
  { name: "VC Membership", href: "/membership" },
  { name: "About Us", href: "/about" },
  { name: "Vedic Center Donations", href: "/donations" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-orange-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Vedic Center of Greenville</span>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">VC</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-orange-800">Vedic Center of Greenville</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-orange-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-orange-900 hover:text-orange-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Link href="/donations">Donate Now</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Vedic Center of Greenville</span>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">VC</span>
                </div>
                <span className="ml-2 text-lg font-semibold text-orange-800">Vedic Center</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-orange-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-orange-900 hover:bg-orange-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/donations" className="w-full">
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
