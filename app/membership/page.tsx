"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const membershipTypes = [
  { id: "individual", label: "Individual Membership", price: "$101/year", description: "For single individuals" },
  { id: "family", label: "Family Membership", price: "$251/year", description: "For families (up to 5 members)" },
  { id: "senior", label: "Senior Membership", price: "$51/year", description: "For individuals age 65+" },
  { id: "student", label: "Student Membership", price: "$51/year", description: "For full-time students" },
  {
    id: "lifetime",
    label: "Lifetime Membership",
    price: "$2,100 one-time",
    description: "Lifetime membership for a family",
  },
]

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Please enter your full address." }),
  city: z.string().min(2, { message: "Please enter your city." }),
  state: z.string().min(2, { message: "Please select your state." }),
  zipCode: z.string().min(5, { message: "Please enter a valid ZIP code." }),
  membershipType: z.string({
    required_error: "Please select a membership type.",
  }),
  familyMembers: z.string().optional(),
  comments: z.string().optional(),
})

export default function MembershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      membershipType: "",
      familyMembers: "",
      comments: "",
    },
  })

  const selectedMembershipType = form.watch("membershipType")
  const showFamilyMembers = selectedMembershipType === "family" || selectedMembershipType === "lifetime"

  const states = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ]

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">Vedic Center Membership</h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          Join our spiritual community and support the growth of Hindu culture and traditions
        </p>
      </div>

      {isSubmitted ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-orange-900">Membership Application Received</CardTitle>
            <CardDescription className="text-center">
              Thank you for applying for membership at the Vedic Center of Greenville
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <p className="text-orange-800 mb-4">
              Your application has been successfully submitted. Our team will review your application and contact you
              soon.
            </p>
            <p className="text-orange-700">
              If you have any questions, please contact us at membership@vediccentergreenville.org or call (123)
              456-7890.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700" onClick={() => setIsSubmitted(false)}>
              Submit Another Application
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-6">
              <h2 className="text-xl font-semibold text-orange-900 mb-4">Membership Benefits</h2>
              <ul className="space-y-3 text-orange-800">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <span>Free entry to all temple events and celebrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <span>Discounted rates for special pujas and ceremonies</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <span>Access to temple library and educational resources</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <span>Voting rights in temple general body meetings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <span>Regular updates through E-Samachar newsletter</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <span>Opportunity to participate in temple committees</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <span>Community support during important life events</span>
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-orange-900 mt-8 mb-4">Membership Types</h2>
              <div className="space-y-3">
                {membershipTypes.map((type) => (
                  <div key={type.id} className="bg-orange-50 p-3 rounded-md">
                    <div className="font-medium text-orange-900">{type.label}</div>
                    <div className="text-sm text-orange-700">{type.price}</div>
                    <div className="text-xs text-orange-600">{type.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Membership Application Form</CardTitle>
                <CardDescription>
                  Please fill out the form below to apply for membership at the Vedic Center of Greenville
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your street address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>State</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn("justify-between", !field.value && "text-muted-foreground")}
                                  >
                                    {field.value
                                      ? states.find((state) => state.value === field.value)?.label
                                      : "Select state"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="p-0">
                                <Command>
                                  <CommandInput placeholder="Search state..." />
                                  <CommandList>
                                    <CommandEmpty>No state found.</CommandEmpty>
                                    <CommandGroup className="max-h-[300px] overflow-y-auto">
                                      {states.map((state) => (
                                        <CommandItem
                                          value={state.label}
                                          key={state.value}
                                          onSelect={() => {
                                            form.setValue("state", state.value)
                                          }}
                                        >
                                          <Check
                                            className={cn(
                                              "mr-2 h-4 w-4",
                                              state.value === field.value ? "opacity-100" : "opacity-0",
                                            )}
                                          />
                                          {state.label}
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ZIP Code</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter ZIP code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="membershipType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Membership Type</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-1">
                              {membershipTypes.map((type) => (
                                <FormItem key={type.id} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={type.id} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {type.label} - {type.price}
                                    <span className="block text-xs text-muted-foreground">{type.description}</span>
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {showFamilyMembers && (
                      <FormField
                        control={form.control}
                        name="familyMembers"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Family Members</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please list the names and ages of family members to be included in the membership"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>List up to 5 family members for family membership.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="comments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Comments</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any additional information you would like to share"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
