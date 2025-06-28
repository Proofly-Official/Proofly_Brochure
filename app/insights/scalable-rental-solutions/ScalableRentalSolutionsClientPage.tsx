"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Building, GraduationCap, Globe, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { InsightArticles } from "@/components/ui/InsightArticles"

export default function ScalableRentalSolutionsClientPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
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
              <li className="text-gray-900 dark:text-white">Scalable Rental Solutions</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Scalable Rental Solutions
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 mt-2">Beyond Individual Rentals</p>
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Bigger Picture</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  While Proofly starts with individual rental verification, our impact extends far beyond single
                  transactions. We're building infrastructure that transforms how entire property portfolios,
                  institutional housing, and rental markets operate at scale.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This scalability isn't just about handling more volume—it's about creating systematic trust that
                  enables new business models and market opportunities that were previously impossible.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Scale Applications</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Property Management</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Showcase entire portfolios to remote tenants with verified property data and virtual tours.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">University Housing</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Provide verified housing options to incoming students before they arrive on campus.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Globe className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Corporate Relocation</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Enable companies to offer verified housing options to relocating employees.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Pre-Construction Sales</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Allow developers to pre-lease units with verified comparable properties and neighborhood data.
                        </p>
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Market Transformation</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  By providing systematic verification at scale, Proofly enables the creation of truly global rental
                  markets. A student in India can confidently rent an apartment in Toronto. A company in New York can
                  relocate employees to Vancouver with verified housing ready on arrival.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  This isn't just about making existing processes more efficient—it's about enabling entirely new ways
                  of thinking about housing, mobility, and trust in the digital economy.
                </p>

                <div className="bg-[#00D7A3]/5 border border-[#00D7A3]/20 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Network Effect</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    As our evaluator network grows, we can offer faster response times, more specialized expertise, and
                    better coverage. Each new market we enter makes the entire system more valuable for everyone.
                  </p>
                </div>
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
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Scale Metrics</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00D7A3] mb-1">500+</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Properties in pipeline</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00D7A3] mb-1">15</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Cities planned for launch</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00D7A3] mb-1">3</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">University partnerships</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00D7A3] mb-1">24h</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Average response time</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Enterprise Solutions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Interested in implementing Proofly verification for your property portfolio or organization?
                </p>
                <Link href="/waitlist">
                  <Button className="w-full bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white">Contact Sales</Button>
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
