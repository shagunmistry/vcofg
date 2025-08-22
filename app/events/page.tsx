import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import EventCalendar from "@/components/event-calendar"

export default function EventsPage() {
  // Major festivals and events based on actual celebrations
  const majorFestivals = [
    {
      id: 1,
      title: "Venkatesvara Abhisek",
      date: "Monthly",
      time: "Morning Services",
      description: "Special abhishekam to Lord Venkatesvara performed by Telugu and Tamil families.",
      location: "Main Temple",
      type: "festival"
    },
    {
      id: 2,
      title: "Mahashivratri Abhisek",
      date: "February/March",
      time: "All Day",
      description: "Grand celebration with special abhishekam and all-night vigil for Lord Shiva.",
      location: "Main Temple",
      type: "festival"
    },
    {
      id: 3,
      title: "Holi Puja & Celebration",
      date: "March",
      time: "Morning to Evening",
      description: "Festival of colors with traditional puja followed by community celebration.",
      location: "Temple Grounds",
      type: "festival"
    },
    {
      id: 4,
      title: "Akhand Ramayan & Ram Navmi",
      date: "March/April",
      time: "Continuous Reading",
      description: "Non-stop recitation of Ramayana followed by Ram Navmi celebration.",
      location: "Main Temple",
      type: "festival"
    },
    {
      id: 5,
      title: "Mahavir Jayanti",
      date: "April",
      time: "Morning Services",
      description: "Celebrating the birth of Lord Mahavir with special prayers.",
      location: "Main Temple",
      type: "festival"
    },
    {
      id: 6,
      title: "Hanuman Jayanti",
      date: "April",
      time: "Morning Services",
      description: "Special puja and celebration for Lord Hanuman's birthday.",
      location: "Main Temple",
      type: "festival"
    },
    {
      id: 7,
      title: "Janmashtami - Krishna Janma",
      date: "August",
      time: "Evening to Midnight",
      description: "Celebrate Lord Krishna's birthday with bhajans, dance, and midnight celebration.",
      location: "Main Temple",
      type: "festival"
    },
    {
      id: 8,
      title: "Ganesh Chaturthi",
      date: "August/September",
      time: "10 Days",
      description: "Ten-day celebration of Lord Ganesh with daily pujas and cultural programs.",
      location: "Main Temple",
      type: "festival"
    },
    {
      id: 9,
      title: "Venkatesvara Vivaha",
      date: "Annual",
      time: "Full Day",
      description: "Grand celebration of Lord Venkatesvara's celestial wedding.",
      location: "Main Temple",
      type: "festival"
    },
    {
      id: 10,
      title: "Navaratri",
      date: "September/October",
      time: "9 Days",
      description: "Nine nights of devotion to Divine Mother with Garba dancing and cultural programs.",
      location: "Community Hall",
      type: "festival"
    },
    {
      id: 11,
      title: "Dashera",
      date: "October",
      time: "Full Day",
      description: "Victory of good over evil celebration with special pujas.",
      location: "Main Temple",
      type: "festival"
    },
    {
      id: 12,
      title: "Diwali - Annakutta",
      date: "October/November",
      time: "Multi-day",
      description: "Festival of lights with Lakshmi puja, Annakutta offering, and community celebration.",
      location: "Main Temple & Grounds",
      type: "festival"
    },
    {
      id: 13,
      title: "Tulsi Vivaha",
      date: "November",
      time: "Morning Services",
      description: "Sacred marriage ceremony of Tulsi plant with Lord Vishnu.",
      location: "Temple Gardens",
      type: "festival"
    }
  ]

  const regularEvents = [
    {
      id: 14,
      title: "Daily Aarti & Darshan",
      date: "Every Day",
      time: "8:30 AM - 8:00 PM",
      description: "Daily worship services with morning and evening aarti.",
      location: "Main Temple",
      type: "daily"
    },
    {
      id: 15,
      title: "Ladies Appreciation Luncheon",
      date: "Annual",
      time: "Afternoon",
      description: "Special event honoring the contributions of women in our community.",
      location: "Community Hall",
      type: "community"
    },
    {
      id: 16,
      title: "Graduation Dinner",
      date: "Spring",
      time: "Evening",
      description: "Celebrating our community's graduating children and their achievements.",
      location: "Community Hall",
      type: "community"
    },
    {
      id: 17,
      title: "Balvihar Camp",
      date: "Summer",
      time: "Overnight",
      description: "Educational and fun overnight camp for children attending Balvihar classes.",
      location: "Temple Grounds",
      type: "youth"
    },
    {
      id: 18,
      title: "Spiritual Lectures",
      date: "Periodic",
      time: "Various",
      description: "Visiting speakers present talks on Hindu philosophy, meditation, and yoga.",
      location: "Community Hall",
      type: "educational"
    }
  ]

  const allEvents = [...majorFestivals, ...regularEvents]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">Festivals & Events</h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          Experience the rich traditions and spiritual celebrations at the Vedic Center of Greenville
        </p>
      </div>

      {/* Daily Services */}
      <div className="mb-12">
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-900 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-orange-600" />
              Daily Temple Hours & Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">Temple Hours</h3>
                <p className="text-orange-700">Open daily: 8:30 AM - 8:00 PM</p>
                <p className="text-sm text-orange-600 mt-1">Daily aarti, darshan, and prayers available throughout the day</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">Services Available</h3>
                <p className="text-orange-700">Worship in Gujarati, Hindi, and Sanskrit</p>
                <p className="text-sm text-orange-600 mt-1">Transliterated prayer books available for children and visitors</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Major Festivals */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Major Festivals Celebrated</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {majorFestivals.map((event) => (
            <Card key={event.id} className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-900 text-lg">{event.title}</CardTitle>
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
            </Card>
          ))}
        </div>
      </div>

      {/* Community Events */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Community Events & Programs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {regularEvents.map((event) => (
            <Card key={event.id} className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-900 text-lg flex items-center">
                  {event.type === 'daily' && <Clock className="h-4 w-4 mr-2 text-orange-600" />}
                  {event.type === 'youth' && <span className="text-orange-600 mr-2">👥</span>}
                  {event.type === 'educational' && <span className="text-orange-600 mr-2">📚</span>}
                  {event.type === 'community' && <span className="text-orange-600 mr-2">🏛️</span>}
                  {event.title}
                </CardTitle>
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
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-orange-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-orange-900 mb-6">Event Information</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Community Participation</h3>
            <ul className="space-y-2 text-orange-700">
              <li>• Each family takes turns leading monthly worship services</li>
              <li>• Families provide food and lead ceremonies on rotation</li>
              <li>• Community potluck meals during major festivals</li>
              <li>• Volunteer opportunities for all ages</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Event Facilities</h3>
            <ul className="space-y-2 text-orange-700">
              <li>• Weddings and anniversary celebrations</li>
              <li>• Graduation parties and community gatherings</li>
              <li>• Cultural arts and music competitions</li>
              <li>• Educational lectures and workshops</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white rounded-lg">
          <p className="text-orange-800">
            <strong>Newsletter:</strong> The Vedic Center publishes a periodic newsletter to keep community members informed about upcoming events, special religious holidays, lectures, and an end-of-year activity report.
          </p>
        </div>
      </div>
    </div>
  )
}
