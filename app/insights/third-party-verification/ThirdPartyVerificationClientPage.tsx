"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Target, Users, CheckCircle, Star, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { InsightArticles } from "@/components/ui/InsightArticles"

export default function ThirdPartyVerificationClientPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00D7A3]/10 to-emerald-50 dark:from-[#00D7A3]/20 dark:to-emerald-950/20">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#00D7A3]">
                  Home
                </Link>
              </li>
              <li>→</li>
              <li>
                <Link href="/#about" className="hover:text-[#00D7A3]">
                  About
                </Link>
              </li>
              <li>→</li>
              <li className="text-gray-900 dark:text-white">Third-Party Verification</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#00D7A3] rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Third-Party Verification
                </h1>
                <p className="text-xl text-[#00D7A3] dark:text-[#00D7A3] mt-2">Trust Through Independent Evaluation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Power of Independence</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Proofly's solution centers on a simple but powerful concept: independent verification. Our network of
                  local "Proofly Friends" provides unbiased property evaluations that neither landlords nor tenants can
                  manipulate. This third-party approach eliminates conflicts of interest and creates genuine trust.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Unlike traditional property viewings where landlords control the narrative, our evaluators work
                  exclusively for the tenant's benefit. They provide honest, detailed reports that reveal both the
                  positives and negatives of each property, ensuring tenants can make truly informed decisions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">How Our Network Works</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00D7A3] rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Rigorous Evaluator Selection</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        We carefully vet each Proofly Friend through background checks, training programs, and
                        performance evaluations. Only the most reliable and detail-oriented individuals join our
                        network.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00D7A3] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Local Market Knowledge</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Our evaluators are locals who understand neighborhood dynamics, market rates, and common
                        property issues. They provide context that photos and descriptions simply cannot capture.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00D7A3] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Standardized Reporting</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Every evaluation follows our comprehensive checklist, ensuring consistent, thorough reports that
                        cover everything from property condition to neighborhood safety and amenities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00D7A3] rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quality Assurance</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        We continuously monitor evaluator performance through tenant feedback and random quality checks,
                        maintaining the highest standards across our network.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Beyond Individual Rentals</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Our third-party verification model scales beyond individual rental transactions. Property management
                  companies can showcase entire portfolios to remote tenants with confidence. Developers can pre-lease
                  units before construction completes. Universities can offer verified housing options to incoming
                  students.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This creates a new category of rental service—one where trust is built into the system rather than
                  hoped for. It's the foundation for a more transparent, efficient rental market that serves everyone
                  better.
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#00D7A3]/5 border border-[#00D7A3]/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Evaluation Includes</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Property condition assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Neighborhood safety review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Amenity verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Market rate comparison</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Photo and video documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Transportation access</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Become an Evaluator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Join our network of trusted evaluators and earn money helping others make informed rental decisions.
                </p>
                <Link href="/waitlist">
                  <Button className="w-full bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white">Apply to Evaluate</Button>
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <Link href="/#about">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to About
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
