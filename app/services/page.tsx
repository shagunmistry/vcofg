import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Daily Puja",
      description: "Traditional daily worship rituals performed by our priests.",
      schedule: "Daily, 8:00 AM - 12:00 PM and 5:00 PM - 8:00 PM",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Special Pujas",
      description: "Customized pujas for special occasions and life events.",
      schedule: "By appointment",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Havan & Yagnas",
      description: "Sacred fire ceremonies for purification and blessings.",
      schedule: "Weekends and by appointment",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Weddings",
      description: "Traditional Hindu wedding ceremonies with all rituals.",
      schedule: "By appointment",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Naming Ceremonies",
      description: "Namakaran sanskar for newborns with traditional rituals.",
      schedule: "By appointment",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Grihapravesh",
      description: "House warming ceremonies for new homes.",
      schedule: "By appointment",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const classes = [
    {
      id: 1,
      title: "Yoga Classes",
      description: "Traditional Hatha and Ashtanga yoga classes for all levels.",
      schedule: "Mon, Wed, Fri: 6:00 AM - 7:30 AM",
      instructor: "Guru Sharma",
    },
    {
      id: 2,
      title: "Meditation Sessions",
      description: "Guided meditation sessions for inner peace and mindfulness.",
      schedule: "Tue, Thu: 6:00 PM - 7:00 PM",
      instructor: "Swami Anand",
    },
    {
      id: 3,
      title: "Bhagavad Gita Study",
      description: "In-depth study and discussion of the Bhagavad Gita.",
      schedule: "Saturdays: 10:00 AM - 11:30 AM",
      instructor: "Pandit Rajesh",
    },
    {
      id: 4,
      title: "Sanskrit Classes",
      description: "Learn the ancient language of Sanskrit from beginner to advanced levels.",
      schedule: "Sundays: 9:00 AM - 10:30 AM",
      instructor: "Dr. Vidya Kumar",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">Temple Services</h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          The Vedic Center of Greenville offers a variety of religious services, ceremonies, and educational programs
        </p>
      </div>

      {/* Religious Services Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Religious Services & Ceremonies</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden border-orange-200">
              <div className="h-48 bg-orange-100">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-orange-900">{service.title}</CardTitle>
                <CardDescription className="text-orange-700">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-orange-800">
                  <Clock className="h-4 w-4 mr-2 text-orange-600" />
                  <span>{service.schedule}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Book Service</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Classes & Programs Section */}
      <section>
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Classes & Educational Programs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {classes.map((cls) => (
            <Card key={cls.id} className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-900">{cls.title}</CardTitle>
                <CardDescription className="text-orange-700">{cls.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-orange-800">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                    <span>{cls.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Instructor:</span>
                    <span className="ml-2">{cls.instructor}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-orange-600 border-orange-600 hover:bg-orange-50">
                  Register
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Priest Services Section */}
      <section className="mt-16 bg-orange-50 p-8 rounded-lg">
        <div className="md:flex items-center">
          <div className="md:w-2/3 md:pr-8">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">Request a Priest for Home Services</h2>
            <p className="text-orange-800 mb-6">
              Our priests are available to perform various religious ceremonies at your home, including:
            </p>
            <ul className="list-disc pl-5 text-orange-700 mb-6 space-y-1">
              <li>Grihapravesh (House warming)</li>
              <li>Satyanarayan Puja</li>
              <li>Birthday ceremonies</li>
              <li>Anniversary celebrations</li>
              <li>Shraddha ceremonies</li>
              <li>Car puja</li>
              <li>Business opening ceremonies</li>
            </ul>
            <Button className="bg-orange-600 hover:bg-orange-700">Request a Priest</Button>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Temple priest"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
