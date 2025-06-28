"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { supabase, type WaitlistEntry } from "@/lib/supabase"

export default function WaitlistPage() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    userType: "",
    source: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Smooth scroll to the form if the URL contains the anchor
    if (window.location.hash === "#waitlist-form") {
      const element = document.getElementById("waitlist-form")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formState.userType) {
      newErrors.userType = "Please select a user type"
    }

    if (!formState.source) {
      newErrors.source = "Please select how you heard about us"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsLoading(true)

      try {
        // Prepare data for submission
        const waitlistData: WaitlistEntry = {
          name: formState.name,
          email: formState.email,
          role: formState.userType,
        }

        // Submit to Supabase
        const { error: supabaseError } = await supabase.from("waitlist").insert([waitlistData])

        if (supabaseError) {
          console.error("Supabase error:", supabaseError)
        }

        // Submit to Google Apps Script
        try {
          await fetch(
            "https://script.google.com/macros/s/AKfycbw8HPnGQs8Oa8nNTHj_fI4wShjMS2zWDWRg0adrIcuH_JFRpyUwTis6PkwsJ0L_Dis/exec",
            {
              method: "POST",
              mode: "no-cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(waitlistData),
            },
          )
        } catch (gasError) {
          console.error("Google Apps Script error:", gasError)
        }

        setSubmitted(true)
      } catch (error) {
        console.error("Submission error:", error)
        // Still show success to user even if one service fails
        setSubmitted(true)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-gray-950">
      <Navbar />
      <div className="container max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          id="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8"
        >
          {!submitted ? (
            <div id="waitlist-form">
              <div className="mb-8">
                <Button
                  variant="ghost"
                  onClick={() => router.back()}
                  className="mb-6 flex items-center gap-2 text-[#00D7A3] hover:text-[#00D7A3]/90 hover:bg-[#00D7A3]/10"
                >
                  <ArrowLeft size={16} />
                  Back
                </Button>
                <h1 className="text-3xl font-bold text-[#212529] dark:text-white mb-2">Join the Waitlist</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Be the first to know when Proofly launches in your area.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formState.name}
                    onChange={handleChange}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-3">
                  <Label>
                    I am a <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    value={formState.userType}
                    onValueChange={(value) => handleSelectChange("userType", value)}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="renter" id="renter" />
                      <Label htmlFor="renter" className="cursor-pointer">
                        Renter
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="landlord" id="landlord" />
                      <Label htmlFor="landlord" className="cursor-pointer">
                        Landlord
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="evaluator" id="evaluator" />
                      <Label htmlFor="evaluator" className="cursor-pointer">
                        Evaluator
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="source">
                    How did you hear about us? <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formState.source} onValueChange={(value) => handleSelectChange("source", value)}>
                    <SelectTrigger className={errors.source ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="twitter">Twitter/X</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="referral">Friend/Referral</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.source && <p className="text-red-500 text-sm">{errors.source}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Joining...
                    </div>
                  ) : (
                    "Join the waitlist"
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#212529] dark:text-white mb-4">You're on the list!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Thank you for joining our waitlist. We'll notify you when Proofly launches in your area.
              </p>
              <Button onClick={() => router.push("/")} className="bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white">
                Return to Home
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
