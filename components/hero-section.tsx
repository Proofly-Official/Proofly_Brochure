"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f8f9fa] dark:bg-gray-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-[#f8f9fa] to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute top-20 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-[#00D7A3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#00D7A3]/10 text-[#00D7A3] px-3 md:px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6"
            >
              <Star className="w-4 h-4" />
              Join the Movement
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight"
            >
              Rental Evaluations.{" "}
              <span className="text-[#00D7A3] relative">
                Remotely.
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path d="M2 10C100 2 200 2 298 10" stroke="#00D7A3" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              <span className="text-[#00D7A3]">Securely.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Book in-person viewings even when you're not there. Get verified property reports before you send
              deposits. Join the future of remote renting.
            </motion.p>

            {/* CTA Section - Replaces Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center lg:justify-start mb-6 md:mb-8"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#00D7A3]" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Verified Property Evaluations
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                className="w-full sm:w-auto bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                size="lg"
                onClick={() => window.open("https://calendar.app.google/7XZwmUanBu6AqT4v5", "_blank")}
              >
                Book Demo
                <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-300 text-gray-700 hover:border-[#00D7A3] hover:text-[#00D7A3] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full font-medium transition-all duration-300 hover:scale-105 group"
                  size="lg"
                >
                  Join Waitlist
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-200 dark:border-gray-700 hidden lg:block">
              {/* Mock Interface */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#00D7A3]/10 to-blue-500/10 rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold mb-2">Property Evaluation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                    Get verified reports from local Proofly Friends
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 md:w-8 h-6 md:h-8 bg-[#00D7A3] rounded-full flex items-center justify-center">
                      <Shield className="w-3 md:w-4 h-3 md:h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">Verified & Secure</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg md:rounded-xl p-3 md:p-4">
                    <div className="text-xl md:text-2xl font-bold text-[#00D7A3]">✓</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Verified</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg md:rounded-xl p-3 md:p-4">
                    <div className="text-xl md:text-2xl font-bold text-[#00D7A3]">⚡</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Fast Response</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-[#00D7A3] text-white p-2 md:p-3 rounded-full shadow-lg"
              >
                <Star className="w-4 md:w-5 h-4 md:h-5" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 bg-blue-500 text-white p-2 md:p-3 rounded-full shadow-lg"
              >
                <CheckCircle className="w-4 md:w-5 h-4 md:h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
