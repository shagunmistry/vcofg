import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  const boardMembers = [
    {
      id: 1,
      name: "Hari Singh",
      role: "Trustee Chair",
      phone: "864-230-6206",
      bio: "Leading the Board of Trustees and overseeing facility administration for the temple community.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Raj Patel",
      role: "Trustee",
      phone: "864-367-9511",
      bio: "Dedicated trustee contributing to the governance and spiritual mission of the Vedic Center.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Ketan Patel",
      role: "Trustee",
      bio: "Serving the community as a trustee and actively involved in kitchen team operations.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Vinay Patel",
      role: "Trustee",
      bio: "Trustee dedicated to temple governance and community kitchen team coordination.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "H P Rama",
      role: "Trustee",
      phone: "864-201-5892",
      bio: "Experienced trustee providing guidance and leadership for temple operations.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  const supportCommittees = [
    {
      id: 1,
      name: "Religious Team",
      members: [
        "Satish Kinariwala",
        "Daxa Patel",
        "Dr. Geera Desai",
        "Ila Thakor",
        "Kusumben Patel",
      ],
      description:
        "Coordinating religious ceremonies, festivals, and spiritual activities",
    },
    {
      id: 2,
      name: "Youth/Kids Activities",
      members: [
        "Vipul Talati",
        "Hemen Dattani (Bal Vihar Lead)",
        "Chitra Akkoor",
        "Ishwar Patel",
        "Chirag Panchal (HSS Lead)",
        "Prashant Kulkarni",
      ],
      description:
        "Managing youth programs, children's education, and cultural activities",
    },
    {
      id: 3,
      name: "Kitchen Team",
      members: [
        "Jigar Patel (Lead)",
        "Ashok Patel (Lead)",
        "Ketan Patel",
        "Girish Patel",
        "Jay Patel",
        "Kiran Patel",
        "Kaushik Patel",
        "Mitesh Patel",
        "Vinay Patel",
        "Ravindra Patel",
        "Hema Patel",
      ],
      description:
        "Preparing prasadam and community meals for festivals and events",
    },
    {
      id: 4,
      name: "Facility Admin",
      members: ["Hari Singh (Lead)", "Jigar Patel"],
      description:
        "Managing temple facilities, maintenance, and infrastructure",
    },
    {
      id: 5,
      name: "Community Health Services",
      members: ["Satish Gupta", "Dr. Kalpit Devani", "Dr. Kumar Patel"],
      description:
        "Providing health guidance and medical support for the community",
    },
    {
      id: 6,
      name: "Event Support Team",
      members: ["Ashok Patel", "Daxa Patel", "Vinay Agrawal", "Arpit Shah"],
      description:
        "Organizing and coordinating special events and celebrations",
    },
    {
      id: 7,
      name: "Audio/Video Team",
      members: [
        "Venu Sama (Lead)",
        "Arpit Shah",
        "Krut Patel",
        "Karan Patel",
        "Dev Sunkara",
      ],
      description:
        "Managing sound systems, recordings, and audiovisual equipment",
    },
    {
      id: 8,
      name: "Senior Activities",
      members: [
        "Harbir Guram",
        "Rajubhai Desai",
        "Daxa Patel",
        "Kusum Patel",
        "Bhupendra Seth",
        "Nima Buwa",
      ],
      description:
        "Organizing programs and activities for senior community members",
    },
    {
      id: 9,
      name: "Social Media",
      members: ["Rashmi Chaubey"],
      description: "Managing online presence and digital communication",
    },
    {
      id: 10,
      name: "IT",
      members: ["Sanket Agarwal"],
      description:
        "Providing technical support and managing digital infrastructure",
    },
  ];

  const priests = [
    {
      id: 1,
      name: "Bharat Kumar K Joshi",
      role: "Priest",
      phone: "864-275-6799",
      availability: "All Days (8:30 AM - 2:30 PM)",
      bio: "Dedicated priest serving the community with traditional Vedic rituals and daily temple services.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Pratikkumar Dilipbhai Trivedi",
      role: "Priest",
      phone: "864-365-7280",
      availability: "All Days (12:00 PM - 6:00 PM)",
      bio: "Experienced priest conducting pujas, ceremonies, and spiritual guidance for devotees.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Pramod Kumar Gamoth",
      role: "Priest",
      phone: "864-275-6804",
      availability: "All Days (2:30 PM - 8:00 PM)",
      bio: "Devoted priest providing evening services and spiritual guidance to the temple community.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">
          About Vedic Center of Greenville
        </h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          Learn about our history, mission, and the people who make our temple a
          spiritual home for the community
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
          <div className="space-y-8">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">
                  Foundation and Early Years
                </h2>
                <div className="space-y-4 text-orange-800">
                  <p>
                    The roots of the Vedic Center trace back to the mid-1960s
                    when the first generation of Indian immigrants arrived in
                    South Carolina. In 1969, a group of 20-30 Indian families in
                    Greenville formed the India Association to preserve their
                    cultural and religious practices.
                  </p>
                  <p>
                    During the early years, this growing community rented space
                    in churches and community buildings for their gatherings.
                    However, by 1983, the group had grown significantly and
                    began fundraising to purchase a permanent site. A key factor
                    in this decision was comments from their children about
                    having no dedicated place to pray and worship.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex gap-8 items-start">
              <div className="md:w-2/3 md:order-1">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">
                  Construction and Dedication
                </h2>
                <div className="space-y-4 text-orange-800">
                  <p>
                    Through generous community donations, some exceeding $5,000,
                    the community purchased five acres at the corner of Bethel
                    Road and Bethel Drive in 1987. A sacred bhumipuja ("Earth
                    worship") ceremony, comparable to a groundbreaking, was held
                    to dedicate the site.
                  </p>
                  <p>
                    Construction commenced immediately, and the center was
                    completed in 1989, becoming the second Hindu religious
                    center established in South Carolina (after Columbia). The
                    Vedic Center is registered as a charitable institution in
                    South Carolina.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-4">
                Key Milestones
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-orange-800">
                        December 2, 1989
                      </p>
                      <p className="text-orange-700 text-sm">
                        Inauguration service held with deity pictures in place
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-orange-800">
                        May 20-22, 1994
                      </p>
                      <p className="text-orange-700 text-sm">
                        Murti Sthapana - Installation of sacred murtis from
                        India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-orange-800">1991</p>
                      <p className="text-orange-700 text-sm">
                        All construction loans paid off - center became
                        debt-free
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-orange-800">Present</p>
                      <p className="text-orange-700 text-sm">
                        Continuous expansion and growth serving 400+ families
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-900 mb-4">
                Community Growth and Funding
              </h3>
              <div className="space-y-4 text-orange-800">
                <p>
                  The initial capital was raised entirely through community
                  donations, with expansion funding borrowed from First Federal
                  of SC. Within two years, the complete loan was paid off, and
                  the center became debt-free.
                </p>
                <p>
                  The center's main sources of income continue to be community
                  donations, daily prayer collections, religious celebration
                  offerings, and annual maintenance dues from member families.
                  Special fundraising programs are organized throughout the year
                  for facility expansion.
                </p>
                <p>
                  The center's relationship with its surrounding neighborhood
                  has been peaceful throughout its history, encountering little
                  to no difficulties or prejudices from the broader community.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="mission" className="mt-6">
          <div className="md:flex gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">
                Our Mission & Vision
              </h2>
              <div className="space-y-4 text-orange-800">
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">
                    Mission
                  </h3>
                  <p>
                    The Vedic Center of Greenville is dedicated to preserving
                    and promoting Hindu culture, traditions, and spiritual
                    practices. We strive to provide a sacred space for worship,
                    learning, and community service.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">
                    Vision
                  </h3>
                  <p>
                    Our vision is to be a beacon of Hindu spirituality and
                    Indian culture in the Southeastern United States, fostering
                    understanding, respect, and harmony among diverse
                    communities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">
                    Core Values
                  </h3>
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
              <h2 className="text-2xl font-bold text-orange-900 mb-4">
                Our Facilities
              </h2>
              <div className="space-y-4 text-orange-800">
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">
                    Main Temple
                  </h3>
                  <p>
                    Our main temple building houses the sanctum with beautiful
                    deities, a spacious prayer hall that can accommodate up to
                    300 devotees, and auxiliary shrines for various deities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">
                    Community Hall
                  </h3>
                  <p>
                    Our multi-purpose community hall is used for cultural
                    programs, weddings, and other celebrations. It includes a
                    fully equipped kitchen for preparing prasadam and community
                    meals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">
                    Educational Center
                  </h3>
                  <p>
                    Our educational wing includes classrooms for language
                    classes, Vedic studies, and youth programs. We also have a
                    library with a collection of religious and cultural books.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">
                    Outdoor Spaces
                  </h3>
                  <p>
                    Our temple grounds include beautiful gardens, a meditation
                    area, and ample parking for visitors. We also have outdoor
                    spaces for larger festivals and celebrations.
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
          <div className="space-y-8">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">
                  Our Diverse Community
                </h2>
                <div className="space-y-4 text-orange-800">
                  <p>
                    Currently, approximately 400 Indians worship at the Vedic
                    Center, representing a diverse community of immigrants from
                    various parts of India. The majority (over 80%) are Gujarati
                    and Hindi speakers, with worship services conducted in three
                    languages: Gujarati, Hindi, and Sanskrit.
                  </p>
                  <p>
                    The 1990s saw significant growth in Telugu and Tamil
                    communities, now numbering about 45 families who often lead
                    the Venkatesvara festival celebrations. Our multilingual
                    approach ensures all community members can participate fully
                    in religious services.
                  </p>
                  <p>
                    We provide transliterated booklets in all three languages
                    for children (most born in the United States) and visitors,
                    making our traditions accessible to new generations and
                    those unfamiliar with the scripts.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Community diversity"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-orange-900 mb-3">
                  Age Demographics
                </h3>
                <div className="space-y-2 text-orange-800">
                  <div className="flex justify-between">
                    <span>Under 30:</span>
                    <span className="font-semibold">~100 people</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Senior Citizens:</span>
                    <span className="font-semibold">35-40 people</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Children:</span>
                    <span className="font-semibold">Large population</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-orange-900 mb-3">
                  Languages
                </h3>
                <div className="space-y-2 text-orange-800">
                  <div>
                    • <strong>Primary:</strong> Gujarati, Hindi
                  </div>
                  <div>
                    • <strong>Growing:</strong> Telugu, Tamil
                  </div>
                  <div>
                    • <strong>Others:</strong> Bengali, Kannada
                  </div>
                  <div>
                    • <strong>Worship:</strong> Sanskrit, Gujarati, Hindi
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-orange-900 mb-3">
                  Organization
                </h3>
                <div className="space-y-2 text-orange-800">
                  <div>• Executive Committee</div>
                  <div>• Board of Trustees (5 members)</div>
                  <div>• Youth Committee</div>
                  <div>• Balvihar Committee</div>
                  <div>• Maintenance Committee</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-900 mb-4">
                Community Engagement & Outreach
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 text-orange-800">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Educational Outreach
                    </h4>
                    <p>
                      Several times a year, members present information on Hindu
                      religion to schools and local groups. The center regularly
                      hosts students from Furman University and Greenville
                      Technical College studying world religions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Interfaith Relations
                    </h4>
                    <p>
                      We maintain cooperative relationships with area churches
                      and actively participate in Greenville Faith Communities
                      United, promoting interfaith understanding and
                      cooperation.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-orange-800">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Cultural Programs
                    </h4>
                    <p>
                      The India Association of Greater Greenville sponsors
                      various cultural events including dance and musical
                      performances, often held on the Furman University campus.
                      Regional art, music, and dance competitions for children
                      are also organized.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Youth Development
                    </h4>
                    <p>
                      Our Youth Committee sponsors activities for young adults,
                      while Balvihar programs provide cultural and religious
                      education for children, including overnight camps and
                      graduation celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-4">
                Membership Structure
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="text-orange-800">
                  <h4 className="font-semibold mb-2">Annual Membership</h4>
                  <p>
                    $175 per year maintenance fee grants voting rights on all
                    center decisions and policies.
                  </p>
                </div>
                <div className="text-orange-800">
                  <h4 className="font-semibold mb-2">Life Membership</h4>
                  <p>
                    $1,000+ donation grants lifetime voting rights and
                    recognition as a founding supporter.
                  </p>
                </div>
              </div>
              <p className="text-orange-700 mt-4 text-sm">
                Committee members are elected every 1-2 years, with Board of
                Trustees rotating one member annually for 5-year terms. General
                body meetings are held regularly for major decisions and
                elections.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Board Members Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-orange-800 mb-6">
          Board of Trustees
        </h2>
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
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-orange-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-orange-600">{member.role}</p>
                  {member.phone && (
                    <p className="text-sm text-orange-700 mt-1">
                      <strong>Phone:</strong>{" "}
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-orange-600"
                      >
                        {member.phone}
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <CardContent className="pt-0">
                <p className="text-sm text-orange-800">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Support Committees Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-orange-800 mb-6">
          Support Committees
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {supportCommittees.map((committee) => (
            <Card key={committee.id} className="border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">
                  {committee.name}
                </h3>
                <p className="text-sm text-orange-700 mb-4">
                  {committee.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-orange-800">
                    Committee Members:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {committee.members.map((member, index) => (
                      <span
                        key={index}
                        className="inline-block bg-orange-50 text-orange-800 text-xs px-2 py-1 rounded-md border border-orange-200"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-900 mb-3">
            Volunteer Opportunities
          </h3>
          <p className="text-orange-800 mb-4">
            The Vedic Center thrives thanks to the dedicated volunteers who
            contribute their time and skills across various committees. We
            welcome community members to join any of our support teams based on
            their interests and availability.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="font-medium text-orange-800 mb-2">
                How to Get Involved:
              </h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Contact committee leads directly</li>
                <li>• Attend general body meetings</li>
                <li>• Speak with trustees or priests</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-orange-800 mb-2">
                Skills Needed:
              </h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Event planning and coordination</li>
                <li>• Teaching and youth mentoring</li>
                <li>• Technical and IT support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-orange-800 mb-2">
                Time Commitment:
              </h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Flexible based on availability</li>
                <li>• Seasonal event support</li>
                <li>• Ongoing committee participation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Priests Section */}
      <section>
        <h2 className="text-2xl font-bold text-orange-800 mb-6">Our Priests</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-orange-900">
                    {priest.name}
                  </h3>
                  <p className="text-sm text-orange-600">{priest.role}</p>
                  {priest.phone && (
                    <p className="text-sm text-orange-700 mt-1">
                      <strong>Phone:</strong>{" "}
                      <a
                        href={`tel:${priest.phone}`}
                        className="hover:text-orange-600"
                      >
                        {priest.phone}
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <CardContent className="pt-0">
                <p className="text-sm text-orange-800 mb-3">{priest.bio}</p>
                {priest.availability && (
                  <div className="bg-orange-50 p-3 rounded-md">
                    <p className="text-sm font-semibold text-orange-800">
                      Availability:
                    </p>
                    <p className="text-sm text-orange-700">
                      {priest.availability}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-900 mb-3">
            Priest Services
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-orange-800 mb-2">
                Temple Services
              </h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Daily aarti and darshan</li>
                <li>• Special festival pujas</li>
                <li>• Abhishekam ceremonies</li>
                <li>• Bhajan and kirtan sessions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-orange-800 mb-2">
                Personal Services
              </h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Wedding ceremonies</li>
                <li>• Housewarming (Griha Pravesh)</li>
                <li>• Sacred thread ceremonies</li>
                <li>• Other religious ceremonies</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-orange-600 mt-4">
            <strong>Note:</strong> For personal ceremonies and special requests,
            please contact the priests directly during their availability hours.
          </p>
        </div>
      </section>
    </div>
  );
}
