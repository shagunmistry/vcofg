import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hindu Temple & Spiritual Center in Mauldin, SC",
  description: "Welcome to Vedic Center of Greenville - a vibrant Hindu temple and spiritual center serving the Greenville-Spartanburg area. Daily worship, cultural events, and community services.",
  keywords: ["Hindu temple Greenville", "Hindu temple Spartanburg", "Indian temple Mauldin SC", "Hindu worship services", "cultural programs", "spiritual center"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vedic Center of Greenville - Hindu Temple & Spiritual Center",
    description: "Welcome to our vibrant Hindu temple and spiritual center serving the Greenville-Spartanburg area. Join us for daily worship, cultural events, and community services.",
    url: '/',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Vedic Center of Greenville Temple Building',
      },
    ],
  },
}

export default function Home() {
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Daily Aarti & Darshan",
      date: "Every Day",
      time: "8:30 AM - 8:00 PM",
      description: "Join us for daily prayers and darshan. Temple hours are 8:30 AM to 8:00 PM daily.",
    },
    {
      id: 2,
      title: "Diwali Celebration",
      date: "November 2025",
      time: "6:00 PM - 10:00 PM",
      description: "Grand Diwali celebration with puja, cultural performances, and community dinner.",
    },
    {
      id: 3,
      title: "Holi Festival",
      date: "March 2025",
      time: "11:00 AM - 4:00 PM",
      description: "Celebrate the festival of colors with music, dance, and traditional food.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-800/70" />
        <div className="relative h-[500px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center z-[-1]"
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Vedic Center of Greenville
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-orange-100">
              Hindu temple serving the Greenville-Spartanburg area with daily worship, cultural programs, and community services
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/events">Upcoming Events</Link>
              </Button>
              <Button variant="outline" className="bg-white text-orange-800 hover:bg-orange-50">
                <Link href="/membership">Become a Member</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Welcome</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-orange-900 sm:text-4xl">
              Our Spiritual Community
            </p>
            <p className="mt-4 max-w-2xl text-xl text-orange-800 lg:mx-auto">
              Located in Mauldin, SC, the Vedic Center of Greenville serves the Hindu community throughout the Greenville-Spartanburg area with daily worship services, cultural programs, and spiritual guidance.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-orange-200 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Temple worship"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-orange-900">Daily Worship</h3>
                  <p className="mt-2 text-orange-700">
                    Experience traditional pujas and rituals performed by our priests.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-orange-200 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Cultural programs"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-orange-900">Cultural Programs</h3>
                  <p className="mt-2 text-orange-700">
                    Participate in music, dance, and art programs celebrating Indian heritage.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-orange-200 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Community service"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-orange-900">Community Service</h3>
                  <p className="mt-2 text-orange-700">Join our seva activities to give back to the local community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-orange-900">Upcoming Events</h2>
            <p className="mt-4 text-lg text-orange-700">Join us for these special events and celebrations</p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-orange-900">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-orange-700 mb-4">{event.description}</CardDescription>
                  <div className="space-y-2 text-sm text-orange-800">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-orange-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                      <span>520 Bethel Dr, Mauldin, SC</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-orange-600 border-orange-600 hover:bg-orange-50">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-orange-900">Join Our Community</h2>
          <p className="mt-4 text-lg text-orange-800 max-w-2xl mx-auto">
            Become a member of the Vedic Center of Greenville and be part of our growing spiritual family.
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Link href="/membership">Become a Member</Link>
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              <Link href="/e-samachar">Subscribe to E-Samachar</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
