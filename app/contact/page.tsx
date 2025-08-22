import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">Contact Us</h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          Get in touch with us for information about our services, events, or to schedule a visit
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Address */}
        <Card className="border-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-orange-900">
              <MapPin className="h-5 w-5 mr-2 text-orange-600" />
              Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-800">
              520 Bethel Dr<br />
              Mauldin, SC 29662<br />
              United States
            </p>
            <p className="text-sm text-orange-600 mt-2">
              Serving the greater Greenville-Spartanburg area
            </p>
          </CardContent>
        </Card>

        {/* Phone */}
        <Card className="border-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-orange-900">
              <Phone className="h-5 w-5 mr-2 text-orange-600" />
              Phone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-800">
              <a href="tel:+18649672852" className="hover:text-orange-600">
                (864) 967-2852
              </a>
            </p>
            <p className="text-sm text-orange-600 mt-2">
              Call us for information about services and events
            </p>
          </CardContent>
        </Card>

        {/* Email */}
        <Card className="border-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-orange-900">
              <Mail className="h-5 w-5 mr-2 text-orange-600" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-800">
              <a href="mailto:vediccentergg@gmail.com" className="hover:text-orange-600">
                vediccentergg@gmail.com
              </a>
            </p>
            <p className="text-sm text-orange-600 mt-2">
              Send us your questions or requests
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Temple Hours */}
      <Card className="border-orange-200 mt-8">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-900">
            <Clock className="h-5 w-5 mr-2 text-orange-600" />
            Temple Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-orange-800 mb-2">Daily Schedule</h3>
              <p className="text-orange-800">
                <strong>Every Day:</strong> 8:30 AM - 8:00 PM
              </p>
              <p className="text-sm text-orange-600 mt-2">
                Daily aarti and darshan available throughout the day
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-800 mb-2">Special Events</h3>
              <p className="text-orange-800">
                Festival celebrations and special programs may have extended hours
              </p>
              <p className="text-sm text-orange-600 mt-2">
                Please contact us for specific event timings
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Directions */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-orange-900 mb-6">Directions</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Getting Here</h3>
            <div className="space-y-3 text-orange-800">
              <p>
                <strong>From Greenville:</strong> Take I-85 South to Exit 44 (Bethel Road). Turn left onto Bethel Road and continue to Bethel Drive.
              </p>
              <p>
                <strong>From Spartanburg:</strong> Take I-85 North to Exit 44 (Bethel Road). Turn right onto Bethel Road and continue to Bethel Drive.
              </p>
              <p>
                <strong>From Anderson:</strong> Take I-85 North to Exit 44 (Bethel Road). Turn right onto Bethel Road and continue to Bethel Drive.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Parking & Accessibility</h3>
            <div className="space-y-3 text-orange-800">
              <p>
                Free parking is available on-site for all visitors and devotees.
              </p>
              <p>
                The temple is wheelchair accessible with ramps and accessible restrooms.
              </p>
              <p>
                For large events, overflow parking may be available nearby. Please follow volunteer directions during special celebrations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Information */}
      <div className="mt-12 bg-orange-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-orange-900 mb-6">Planning Your Visit</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-3">First-Time Visitors</h3>
            <ul className="space-y-2 text-orange-700">
              <li>• All are welcome regardless of background or faith</li>
              <li>• Modest dress is appreciated in the temple</li>
              <li>• Shoes must be removed before entering the main temple area</li>
              <li>• Photography may be restricted in certain areas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Services & Programs</h3>
            <ul className="space-y-2 text-orange-700">
              <li>• Daily aarti and darshan</li>
              <li>• Special festival celebrations</li>
              <li>• Cultural and educational programs</li>
              <li>• Wedding and ceremony services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}