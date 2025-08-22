import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-orange-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2">
          <div>
            <h2 className="text-2xl font-bold">Vedic Center of Greenville</h2>
            <p className="mt-2 text-sm leading-6">Promoting Hindu culture, traditions, and spiritual practices</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>520 Bethel Dr, Mauldin, SC 29662</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>(864) 967-2852</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>vediccentergg@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold">Quick Links</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <Link href="/events" className="text-sm hover:text-orange-200">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm hover:text-orange-200">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-sm hover:text-orange-200">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/donations" className="text-sm hover:text-orange-200">
                    Donations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Connect With Us</h3>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-orange-200 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-orange-200 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-orange-200 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-orange-700 py-4 text-center text-xs">
        <p>© {new Date().getFullYear()} Vedic Center of Greenville. All rights reserved.</p>
      </div>
    </footer>
  )
}
