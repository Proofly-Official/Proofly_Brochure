"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, TrendingUp, Wifi, Shield, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { InsightArticles } from "@/components/ui/InsightArticles"

export default function PerfectMarketTimingClient() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
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
              <li className="text-gray-900 dark:text-white">Perfect Market Timing</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Perfect Market Timing</h1>
                <p className="text-xl text-purple-600 dark:text-purple-400 mt-2">The Convergence of Trends</p>
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Perfect Storm</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Proofly emerges at the intersection of three powerful trends that are reshaping how people live and
                  work. Housing affordability forces longer distance moves. Remote work enables location flexibility.
                  Proofly's approach to trust and verification makes secure renting possible for everyone, no matter where they are.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  These aren't separate trends—they're interconnected forces that create both the need for our solution
                  and the technology to deliver it. The timing isn't just good; it's essential.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Converging Trends</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Housing Affordability Crisis</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        Rising housing costs force people to consider locations they've never visited. The average
                        Canadian now considers rentals 200+ km from their current location.
                      </p>
                      <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-3">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Creates massive demand for remote rental verification
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Wifi className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Remote Work Revolution</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        Remote work has made location independence a reality for millions. Workers can now live anywhere
                        with good internet, fundamentally changing housing decisions.
                      </p>
                      <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-3">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Enables people to move without visiting first
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00D7A3] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fintech & Trust Technology</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        Digital identity and secure payment systems, combined with Proofly's unique verification process, create trust between strangers across distances.
                      </p>
                      <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-3">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Provides the infrastructure to make remote verification trustworthy for Young Professionals, Landlords/Property Managers, Students, and Families.
                        </div>
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Not Earlier?</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Five years ago, remote work was still niche. Ten years ago, digital payments weren't ubiquitous.
                  Fifteen years ago, smartphones couldn't capture high-quality photos and videos. Each piece of the
                  puzzle needed to be in place for Proofly to work.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Today, all the enabling technologies have matured while the market need has exploded. We're not just
                  riding one trend—we're at the convergence point where multiple trends create a perfect market
                  opportunity.
                </p>

                <div className="bg-[#00D7A3]/5 border border-[#00D7A3]/20 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Window of Opportunity</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Market timing windows don't stay open forever. As the rental market adapts to remote-first reality,
                    early movers will establish the trust infrastructure that becomes the new standard.
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
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Market Indicators</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">95% smartphone adoption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">42% remote work capability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Digital payment ubiquity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Housing mobility increase</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Be Part of the Timing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Join the movement that's reshaping how people find and secure housing in the remote-first economy.
                </p>
                <Link href="/waitlist">
                  <Button className="w-full bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white">Join Early Adopters</Button>
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
