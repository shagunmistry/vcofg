import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import EventCalendar from "@/components/event-calendar"

export default function EventsPage() {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Diwali Celebration",
      date: "November 12, 2025",
      time: "6:00 PM - 10:00 PM",
      description: "Join us for a grand Diwali celebration with puja, cultural performances, and dinner.",
      location: "Main Temple Hall",
    },
    {
      id: 2,
      title: "Yoga & Meditation Workshop",
      date: "May 15, 2025",
      time: "9:00 AM - 12:00 PM",
      description: "Learn traditional yoga and meditation techniques from our experienced gurus.",
      location: "Meditation Room",
    },
    {
      id: 3,
      title: "Holi Festival",
      date: "March 25, 2025",
      time: "11:00 AM - 4:00 PM",
      description: "Celebrate the festival of colors with music, dance, and traditional food.",
      location: "Temple Grounds",
    },
    {
      id: 4,
      title: "Navratri Garba Night",
      date: "October 7, 2025",
      time: "7:00 PM - 11:00 PM",
      description: "Traditional Garba and Dandiya night with live music and refreshments.",
      location: "Community Hall",
    },
    {
      id: 5,
      title: "Vedic Philosophy Class",
      date: "Every Sunday",
      time: "10:00 AM - 11:30 AM",
      description: "Weekly classes on Vedic philosophy and scriptures.",
      location: "Library",
    },
    {
      id: 6,
      title: "Janmashtami Celebration",
      date: "August 15, 2025",
      time: "6:00 PM - 12:00 AM",
      description: "Celebrate Lord Krishna's birthday with bhajans, puja, and prasadam.",
      location: "Main Temple Hall",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">Events & Celebrations</h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          Join us for various cultural and spiritual events throughout the year
        </p>
      </div>

      {/* Calendar View */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Events Calendar</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <EventCalendar events={events} />
        </div>
      </div>

      {/* List View */}
      <div>
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-900">{event.title}</CardTitle>
                <CardDescription className="text-orange-700">{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
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
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Register</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
