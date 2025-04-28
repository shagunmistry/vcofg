import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IdolsPage() {
  const deities = [
    {
      id: 1,
      name: "Lord Ganesha",
      description: "The remover of obstacles and god of beginnings, worshipped first in any Hindu ritual.",
      significance:
        "Lord Ganesha is invoked before beginning any new venture or ritual. He represents wisdom, intelligence, and the removal of obstacles.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Goddess Lakshmi",
      description: "The goddess of wealth, fortune, and prosperity, both material and spiritual.",
      significance:
        "Goddess Lakshmi represents abundance, purity, and generosity. Her blessings are sought for prosperity and well-being.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Lord Shiva",
      description: "The destroyer and transformer among the Trimurti, the Hindu trinity.",
      significance:
        "Lord Shiva represents the cosmic functions of creation, maintenance, and destruction. He is the lord of yoga, meditation, and arts.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Lord Krishna",
      description: "The eighth avatar of Lord Vishnu, known for his teachings in the Bhagavad Gita.",
      significance:
        "Lord Krishna represents divine love, wisdom, and the importance of righteous action. His life and teachings guide devotees on the path of dharma.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Goddess Durga",
      description: "The warrior goddess who combats evil and demonic forces that threaten peace.",
      significance:
        "Goddess Durga symbolizes the divine protective mother, representing strength, protection, and maternal care.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Lord Hanuman",
      description: "The monkey deity known for his devotion to Lord Rama and incredible strength.",
      significance:
        "Lord Hanuman represents devotion, strength, and selfless service. He is worshipped for courage and protection.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">Temple Deities</h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          Learn about the divine deities worshipped at the Vedic Center of Greenville
        </p>
      </div>

      {/* Main Temple Sanctum Description */}
      <section className="mb-16 bg-orange-50 p-8 rounded-lg">
        <div className="md:flex items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">Main Temple Sanctum</h2>
            <p className="text-orange-800 mb-4">
              The main sanctum of our temple houses beautifully crafted idols of various Hindu deities. Each deity has
              been installed with proper Vedic rituals and is worshipped daily according to traditional practices.
            </p>
            <p className="text-orange-800">
              Our temple follows the Pancharatra Agama tradition for daily worship rituals. The deities receive daily
              offerings of flowers, fruits, and prasadam, along with recitation of Vedic mantras and bhajans.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Temple sanctum"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deities Grid */}
      <section>
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Our Deities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deities.map((deity) => (
            <Card key={deity.id} className="overflow-hidden border-orange-200">
              <div className="h-64 bg-orange-100 flex items-center justify-center">
                <Image
                  src={deity.image || "/placeholder.svg"}
                  alt={deity.name}
                  width={300}
                  height={300}
                  className="object-contain h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-orange-900">{deity.name}</CardTitle>
                <CardDescription className="text-orange-700">{deity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-800">{deity.significance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Worship Schedule */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Daily Worship Schedule</h2>
        <div className="bg-white border border-orange-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-orange-200">
            <thead className="bg-orange-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-900 uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-900 uppercase tracking-wider"
                >
                  Ritual
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-orange-900 uppercase tracking-wider"
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-orange-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-800">6:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-900">
                  Temple Opening & Suprabhatam
                </td>
                <td className="px-6 py-4 text-sm text-orange-700">Morning awakening ritual with prayers and hymns</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-800">8:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-900">Abhishekam</td>
                <td className="px-6 py-4 text-sm text-orange-700">
                  Ritual bathing of the deities with water, milk, honey, etc.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-800">9:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-900">Alankaram & Archana</td>
                <td className="px-6 py-4 text-sm text-orange-700">
                  Decoration of deities and offering of flowers with mantras
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-800">12:00 PM</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-900">
                  Madhyahnika Puja & Prasadam
                </td>
                <td className="px-6 py-4 text-sm text-orange-700">Midday worship and food offering to deities</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-800">5:00 PM</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-900">Sandhya Arati</td>
                <td className="px-6 py-4 text-sm text-orange-700">Evening lamp offering ceremony</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-800">8:00 PM</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-900">
                  Shayan Arati & Temple Closing
                </td>
                <td className="px-6 py-4 text-sm text-orange-700">Final worship and ritual for deities' rest</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
