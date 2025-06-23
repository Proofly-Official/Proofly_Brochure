"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lightbulb, CheckCircle, Shield, Target } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function VerificationFirstClientPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20">
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
              <li className="text-gray-900 dark:text-white">Verification-First Approach</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Verification-First Approach
                </h1>
                <p className="text-xl text-yellow-600 dark:text-yellow-400 mt-2">Viewing Before Paying, Not After</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Core Insight</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Traditional rental processes are backwards. Tenants are expected to commit deposits and sign leases
                  based on photos and descriptions alone, only discovering property issues after it's too late to back
                  out. This creates an inherent power imbalance that favors dishonest actors.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Proofly flips this dynamic by ensuring verification happens before commitment. Our insight is simple
                  but powerful: viewing should happen before paying, not after. This protects tenants from fraud while
                  giving landlords access to serious, pre-qualified applicants.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-[#00D7A3]/5 to-blue-500/5 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  The Traditional vs. Proofly Process
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Traditional Process */}
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-4">❌ Traditional Process</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 text-sm font-bold">1</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">See listing photos</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 text-sm font-bold">2</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Pay deposit blindly</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 text-sm font-bold">3</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Sign lease remotely</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 text-sm font-bold">4</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Discover issues on move-in</span>
                      </div>
                    </div>
                  </div>

                  {/* Proofly Process */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#00D7A3] mb-4">✅ Proofly Process</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#00D7A3]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#00D7A3] text-sm font-bold">1</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Request verification</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#00D7A3]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#00D7A3] text-sm font-bold">2</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Get detailed report</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#00D7A3]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#00D7A3] text-sm font-bold">3</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Make informed decision</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#00D7A3]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#00D7A3] text-sm font-bold">4</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Commit with confidence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why This Works</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  By requiring verification before commitment, we create a system where only legitimate properties and
                  serious applicants participate. Fraudulent listings can't survive scrutiny, and time-wasters are
                  filtered out by the small verification fee.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This approach benefits everyone: tenants get peace of mind, landlords get qualified leads, and
                  evaluators earn income by providing valuable verification services. It's a win-win-win system built on
                  transparency and trust.
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
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Fraud Prevention</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Informed Decisions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Qualified Applicants</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Market Transparency</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Ready to Experience It?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Join our waitlist to be among the first to experience verification-first rental decisions.
                </p>
                <Link href="/waitlist">
                  <Button className="w-full bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white">Get Early Access</Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Back Navigation */}
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
