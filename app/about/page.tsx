import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  const boardMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      role: "President",
      bio: "Dr. Sharma has been leading the Vedic Center since its inception in 2010. He is a respected cardiologist and community leader.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Mrs. Lakshmi Patel",
      role: "Vice President",
      bio: "Mrs. Patel oversees cultural programs and educational initiatives. She has been teaching Indian classical dance for over 20 years.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Mr. Vijay Reddy",
      role: "Treasurer",
      bio: "Mr. Reddy manages the temple finances and fundraising efforts. He is a certified accountant with expertise in non-profit management.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Dr. Anita Desai",
      role: "Secretary",
      bio: "Dr. Desai coordinates temple communications and documentation. She is a professor of Religious Studies at the local university.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Mr. Sanjay Gupta",
      role: "Trustee",
      bio: "Mr. Gupta oversees temple construction and maintenance projects. He is a civil engineer with extensive experience in temple architecture.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Mrs. Priya Singh",
      role: "Trustee",
      bio: "Mrs. Singh leads community outreach and volunteer coordination. She has been actively involved in social service for over 15 years.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const priests = [
    {
      id: 1,
      name: "Pandit Ramakrishna Sastry",
      role: "Head Priest",
      bio: "Pandit Sastry has over 30 years of experience performing Vedic rituals. He specializes in Vastu Shastra and Jyotish.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Pandit Venkatesh Iyer",
      role: "Assistant Priest",
      bio: "Pandit Iyer is trained in traditional Agama Shastra. He conducts daily pujas and special ceremonies at the temple.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">About Vedic Center of Greenville</h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          Learn about our history, mission, and the people who make our temple a spiritual home for the community
        </p>
      </div>

      <Tabs defaultValue="history" className="mb-16">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="mt-6">
          <div className="md:flex gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Our History</h2>
              <div className="space-y-4 text-orange-800">
                <p>
                  The Vedic Center of Greenville was established in 2010 by a group of dedicated Hindu families who saw
                  the need for a spiritual and cultural center in the growing Indian community of Greenville.
                </p>
                <p>
                  What began as small gatherings in community halls and homes quickly grew into a vibrant organization.
                  In 2012, with generous donations from community members, we purchased the land where our current
                  temple stands.
                </p>
                <p>
                  The temple construction began in 2014, with the first phase completed in 2016. The main sanctum was
                  consecrated in a grand ceremony attended by over 1,000 devotees from across the region.
                </p>
                <p>
                  Since then, the Vedic Center has continued to grow, adding educational facilities, a community hall,
                  and expanding our services to meet the spiritual and cultural needs of our diverse community.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Temple history"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="mission" className="mt-6">
          <div className="md:flex gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Our Mission & Vision</h2>
              <div className="space-y-4 text-orange-800">
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Mission</h3>
                  <p>
                    The Vedic Center of Greenville is dedicated to preserving and promoting Hindu culture, traditions,
                    and spiritual practices. We strive to provide a sacred space for worship, learning, and community
                    service.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Vision</h3>
                  <p>
                    Our vision is to be a beacon of Hindu spirituality and Indian culture in the Southeastern United
                    States, fostering understanding, respect, and harmony among diverse communities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Core Values</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Spiritual Growth and Devotion</li>
                    <li>Cultural Preservation and Education</li>
                    <li>Community Service and Outreach</li>
                    <li>Inclusivity and Respect for All</li>
                    <li>Family Values and Youth Development</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Temple mission"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="facilities" className="mt-6">
          <div className="md:flex gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Our Facilities</h2>
              <div className="space-y-4 text-orange-800">
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Main Temple</h3>
                  <p>
                    Our main temple building houses the sanctum with beautiful deities, a spacious prayer hall that can
                    accommodate up to 300 devotees, and auxiliary shrines for various deities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Community Hall</h3>
                  <p>
                    Our multi-purpose community hall is used for cultural programs, weddings, and other celebrations. It
                    includes a fully equipped kitchen for preparing prasadam and community meals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Educational Center</h3>
                  <p>
                    Our educational wing includes classrooms for language classes, Vedic studies, and youth programs. We
                    also have a library with a collection of religious and cultural books.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Outdoor Spaces</h3>
                  <p>
                    Our temple grounds include beautiful gardens, a meditation area, and ample parking for visitors. We
                    also have outdoor spaces for larger festivals and celebrations.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Temple facilities"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="community" className="mt-6">
          <div className="md:flex gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Our Community</h2>
              <div className="space-y-4 text-orange-800">
                <p>
                  The Vedic Center of Greenville serves a diverse community of over 5,000 Hindu families in the greater
                  Greenville area. Our members come from various regions of India, bringing rich cultural traditions and
                  practices.
                </p>
                <p>
                  We actively engage with the broader Greenville community through interfaith dialogues, cultural
                  exhibitions, and community service projects. Our annual cultural festival attracts thousands of
                  visitors from all backgrounds.
                </p>
                <p>
                  Our youth programs help the next generation connect with their cultural roots while thriving in
                  American society. We offer language classes, cultural arts training, and leadership development
                  opportunities.
                </p>
                <p>
                  Through our outreach programs, we partner with local food banks, homeless shelters, and environmental
                  initiatives to give back to the community that has embraced us.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Temple community"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Board Members Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Board of Directors</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member) => (
            <Card key={member.id} className="border-orange-200">
              <div className="flex items-center p-6">
                <div className="mr-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-900">{member.name}</h3>
                  <p className="text-sm text-orange-600">{member.role}</p>
                </div>
              </div>
              <CardContent className="pt-0">
                <p className="text-sm text-orange-800">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Priests Section */}
      <section>
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Our Priests</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {priests.map((priest) => (
            <Card key={priest.id} className="border-orange-200">
              <div className="flex items-center p-6">
                <div className="mr-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={priest.image || "/placeholder.svg"}
                      alt={priest.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-900">{priest.name}</h3>
                  <p className="text-sm text-orange-600">{priest.role}</p>
                </div>
              </div>
              <CardContent className="pt-0">
                <p className="text-sm text-orange-800">{priest.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
