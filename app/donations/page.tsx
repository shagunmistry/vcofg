"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, CreditCard, DollarSign, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const donationOptions = [
  {
    id: "general",
    title: "General Temple Fund",
    description: "Support the daily operations and maintenance of the temple",
    icon: <Heart className="h-5 w-5 text-orange-600" />,
  },
  {
    id: "construction",
    title: "Temple Expansion Project",
    description: "Contribute to our ongoing construction and expansion efforts",
    icon: <DollarSign className="h-5 w-5 text-orange-600" />,
  },
  {
    id: "education",
    title: "Educational Programs",
    description: "Support our classes, workshops, and youth programs",
    icon: <DollarSign className="h-5 w-5 text-orange-600" />,
  },
  {
    id: "community",
    title: "Community Outreach",
    description: "Help fund our community service and charitable initiatives",
    icon: <Heart className="h-5 w-5 text-orange-600" />,
  },
]

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  donationType: z.string({
    required_error: "Please select a donation type.",
  }),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid amount.",
  }),
  paymentMethod: z.enum(["credit", "ach", "check"], {
    required_error: "Please select a payment method.",
  }),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
  nameOnCard: z.string().optional(),
  comments: z.string().optional(),
})

export default function DonationsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      donationType: "general",
      amount: "",
      paymentMethod: "credit",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
      nameOnCard: "",
      comments: "",
    },
  })

  const paymentMethod = form.watch("paymentMethod")
  const showCardFields = paymentMethod === "credit"

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const suggestedAmounts = ["51", "101", "251", "501", "1001", "2501"]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-900 sm:text-4xl">Support the Vedic Center</h1>
        <p className="mt-4 text-lg text-orange-700 max-w-2xl mx-auto">
          Your generous donations help us maintain the temple and expand our services to the community
        </p>
      </div>

      {isSubmitted ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-orange-900">Donation Received</CardTitle>
            <CardDescription className="text-center">
              Thank you for your generous contribution to the Vedic Center of Greenville
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <p className="text-orange-800 mb-4">
              Your donation has been successfully processed. A receipt has been sent to your email address.
            </p>
            <p className="text-orange-700">
              Your support helps us maintain our temple and continue our spiritual and cultural programs. We are
              grateful for your generosity.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700" onClick={() => setIsSubmitted(false)}>
              Make Another Donation
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-6">
              <h2 className="text-xl font-semibold text-orange-900 mb-4">Donation Options</h2>
              <div className="space-y-4">
                {donationOptions.map((option) => (
                  <div key={option.id} className="bg-orange-50 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      {option.icon}
                      <h3 className="ml-2 font-medium text-orange-900">{option.title}</h3>
                    </div>
                    <p className="text-sm text-orange-700">{option.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-orange-100 p-4 rounded-md">
                <h3 className="font-medium text-orange-900 mb-2">Tax Benefits</h3>
                <p className="text-sm text-orange-800">
                  The Vedic Center of Greenville is a registered 501(c)(3) non-profit organization. All donations are
                  tax-deductible to the extent allowed by law.
                </p>
              </div>

              <div className="mt-4 bg-orange-100 p-4 rounded-md">
                <h3 className="font-medium text-orange-900 mb-2">Corporate Matching</h3>
                <p className="text-sm text-orange-800">
                  Many employers match charitable contributions made by their employees. Please check with your HR
                  department to see if your donation can be matched.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Make a Donation</CardTitle>
                <CardDescription>Your contribution supports the maintenance and growth of our temple</CardDescription>
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
                      name="donationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Donation Purpose</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select donation purpose" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {donationOptions.map((option) => (
                                <SelectItem key={option.id} value={option.id}>
                                  {option.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Donation Amount ($)</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="Enter amount" {...field} />
                          </FormControl>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {suggestedAmounts.map((amount) => (
                              <Button
                                key={amount}
                                type="button"
                                variant="outline"
                                size="sm"
                                className="text-orange-600 border-orange-300 hover:bg-orange-50"
                                onClick={() => form.setValue("amount", amount)}
                              >
                                ${amount}
                              </Button>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Payment Method</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="credit" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer flex items-center">
                                  <CreditCard className="h-4 w-4 mr-2" />
                                  Credit/Debit Card
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="ach" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">ACH Bank Transfer</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="check" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">Mail a Check</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {showCardFields && (
                      <div className="space-y-4 border border-orange-200 rounded-md p-4">
                        <FormField
                          control={form.control}
                          name="nameOnCard"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name on Card</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter name as it appears on card" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter card number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="cardExpiry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expiration Date</FormLabel>
                                <FormControl>
                                  <Input placeholder="MM/YY" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="cardCvc"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CVC</FormLabel>
                                <FormControl>
                                  <Input placeholder="CVC" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    )}

                    <FormField
                      control={form.control}
                      name="comments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Comments (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any special instructions or comments"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : "Complete Donation"}
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
