"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle, TrendingDown, Users, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { InsightArticles } from "@/components/ui/InsightArticles"

export default function RentalMarketCrisisClientPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
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
              <li className="text-gray-900 dark:text-white">Rental Market Crisis</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  The Rental Market Crisis
                </h1>
                <p className="text-xl text-red-600 dark:text-red-400 mt-2">Understanding the Trust Breakdown</p>
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Scale of the Problem</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Canada's rental market is experiencing an unprecedented trust crisis. International students and
                  relocating professionals are discovering fraudulent listings at alarming rates, losing thousands in
                  deposits to misrepresented properties. Meanwhile, legitimate landlords struggle with unqualified
                  applicants and costly no-shows.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This broken system creates a lose-lose scenario where good tenants can't find reliable housing, and
                  good landlords can't connect with serious applicants. The result is increased vacancy periods, higher
                  rental costs, and a market built on distrust rather than transparency.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">67%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      of remote renters report encountering fraudulent listings
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">$2,400</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">average loss per rental fraud incident</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">45 days</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      average additional vacancy time due to no-shows
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">89%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      of landlords want better tenant verification
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why This Matters Now</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The rental crisis isn't just about individual transactions—it's reshaping how people live and work.
                  Remote work has made location flexibility a necessity, not a luxury. International students and
                  professionals need housing before they arrive in new cities. Traditional viewing methods simply can't
                  keep up with this new reality.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Without a solution, we're creating a two-tier rental market: one for locals who can view in person,
                  and another for remote renters who must take significant risks. This inequality undermines housing
                  accessibility and economic mobility.
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
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Impact Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Young Professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingDown className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Landlords / Property Managers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Students</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#00D7A3]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Families</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">How Proofly Helps</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Our third-party verification system creates trust between remote renters and landlords, eliminating
                  fraud and reducing vacancy periods.
                </p>
                <Link href="/waitlist">
                  <Button className="w-full bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white">Join the Solution</Button>
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

          {/* Featured Resources Header and Cards */}
          <div className="mt-12 mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Featured Resources</h3>
            <InsightArticles
              articles={[
                {
                  image: "https://img.youtube.com/vi/6ZfR-5VYYUU/hqdefault.jpg",
                  url: "https://www.youtube.com/watch?v=6ZfR-5VYYUU"
                },
                {
                  image: "https://img.youtube.com/vi/LSKOfmrHfQ4/hqdefault.jpg",
                  url: "https://www.youtube.com/watch?v=LSKOfmrHfQ4"
                },
                {
                  image: "https://img.youtube.com/vi/8YpPItxqIcM/hqdefault.jpg",
                  url: "https://www.youtube.com/watch?v=8YpPItxqIcM"
                }
              ]}
              cardSize={{ width: 480, height: 300 }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
