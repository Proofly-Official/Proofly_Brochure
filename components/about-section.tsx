"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowDown,
  Flame,
  Lightbulb,
  Target,
  TrendingUp,
  Clock,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("challenge")
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [isControlsHovered, setIsControlsHovered] = useState(false)

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (selectedCard !== null || isControlsHovered) return // Pause when modal is open OR controls are hovered

    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % 5)
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedCard, isControlsHovered])

  const aboutCards = {
    challenge: {
      title: "The Challenge",
      content:
        "Canada's rental market suffers from a trust crisis. International students and relocating professionals discover fraudulent listings or lose deposits to misrepresented properties. Landlords struggle with unqualified applicants and no-shows.",
      icon: <Flame className="w-6 h-6 text-[#00D7A3]" />,
      color: "from-red-500/20 to-orange-500/20",
      link: "/insights/rental-market-crisis",
    },
    insight: {
      title: "Our Insight",
      content:
        "We built Proofly around a simple insight: viewing should happen before paying, not after. Tenants need verified property information before committing deposits. Landlords need pre-qualified, serious applicants.",
      icon: <Lightbulb className="w-6 h-6 text-[#00D7A3]" />,
      color: "from-yellow-500/20 to-amber-500/20",
      link: "/insights/verification-first-approach",
    },
    solution: {
      title: "Our Solution",
      content:
        "Proofly fixes this broken loop through third-party verification. Our network of local 'Proofly Friends' conducts professional property evaluations, providing tenants with verified reports before they make offers.",
      icon: <Target className="w-6 h-6 text-[#00D7A3]" />,
      color: "from-[#00D7A3]/20 to-emerald-500/20",
      link: "/insights/third-party-verification",
    },
    impact: {
      title: "Our Impact",
      content:
        "This scales beyond individual rentals. Property management companies can showcase entire portfolios to remote tenants. Developers can pre-lease units before construction completes. Universities can offer verified housing.",
      icon: <TrendingUp className="w-6 h-6 text-[#00D7A3]" />,
      color: "from-blue-500/20 to-indigo-500/20",
      link: "/insights/scalable-rental-solutions",
    },
    timing: {
      title: "Why Now",
      content:
        "The timing is perfect. Housing affordability forces longer distance moves. Remote work enables location flexibility. Proofly's approach to trust and verification ensures that everyone—Young Professionals, Landlords/Property Managers, Students, and Families—can rent with confidence, no matter where they are.",
      icon: <Clock className="w-6 h-6 text-[#00D7A3]" />,
      color: "from-purple-500/20 to-pink-500/20",
      link: "/insights/perfect-market-timing",
    },
  }

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Proofly</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Building trust in the rental market</p>
        </motion.div>

        {/* Main Content Area - Dynamic Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Main Feature Card - Left Side with Carousel Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-8 lg:col-span-2 h-[500px] flex flex-col justify-between relative group overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${
                currentCarouselIndex === 0
                  ? "#1f2937, #374151"
                  : currentCarouselIndex === 1
                    ? "#7c2d12, #ea580c"
                    : currentCarouselIndex === 2
                      ? "#166534, #16a34a"
                      : currentCarouselIndex === 3
                        ? "#1e40af, #3b82f6"
                        : "#7c2d12, #a21caf"
              })`,
            }}
            onClick={() => {
              console.debug('[AboutSection] Center card clicked, opening modal for index', currentCarouselIndex);
              setSelectedCard(currentCarouselIndex);
            }}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-full h-full"
              >
                {Object.values(aboutCards)[currentCarouselIndex].icon}
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentCarouselIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="mb-4">{Object.values(aboutCards)[currentCarouselIndex].icon}</div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {Object.values(aboutCards)[currentCarouselIndex].title.split(" ")[0]}
                </h3>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {Object.values(aboutCards)[currentCarouselIndex].title.split(" ").slice(1).join(" ") || "Solution"}
                </h3>
                <h3 className="text-4xl font-bold text-white mb-6">Verification</h3>
                <p className="text-gray-300 mb-8">TRUSTED BY THOUSANDS</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-auto relative z-10">
              {/* 'Read More' area now only opens modal, not navigation */}
              <div
                className="bg-white/10 dark:bg-white/5 rounded-xl p-3 inline-flex items-center gap-2 mb-6 hover:bg-white/20 transition-colors duration-200 cursor-pointer"
                onClick={e => {
                  e.stopPropagation();
                  console.debug('[AboutSection] Read More clicked, opening modal for index', currentCarouselIndex);
                  setSelectedCard(currentCarouselIndex);
                }}
              >
                <span className="text-white text-sm">Read More</span>
                <div className="bg-white/20 rounded-full p-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <ArrowDown className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {Object.values(aboutCards)[currentCarouselIndex].title}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {Object.values(aboutCards)[currentCarouselIndex].content}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Cards - Stacked with Dynamic Content */}
          <div className="flex flex-col gap-6">
            {/* Top Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl p-6 flex flex-col justify-between cursor-pointer relative group overflow-hidden"
              style={{
                minHeight: "240px",
                background: `linear-gradient(135deg, ${
                  (currentCarouselIndex + 1) % 5 === 0
                    ? "#f3f4f6, #e5e7eb"
                    : (currentCarouselIndex + 1) % 5 === 1
                      ? "#fef3c7, #fde68a"
                      : (currentCarouselIndex + 1) % 5 === 2
                        ? "#d1fae5, #a7f3d0"
                        : (currentCarouselIndex + 1) % 5 === 3
                          ? "#dbeafe, #bfdbfe"
                          : "#f3e8ff, #e9d5ff"
                })`,
              }}
              onClick={() => {
                console.debug('[AboutSection] Top-right card clicked, opening modal for index', (currentCarouselIndex + 1) % 5);
                setSelectedCard((currentCarouselIndex + 1) % 5);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={(currentCarouselIndex + 1) % 5}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">{Object.values(aboutCards)[(currentCarouselIndex + 1) % 5].icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {Object.values(aboutCards)[(currentCarouselIndex + 1) % 5].title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
                      {Object.values(aboutCards)[(currentCarouselIndex + 1) % 5].content.substring(0, 60)}...
                    </p>
                    <div className="bg-gray-300 dark:bg-gray-600 rounded-full p-2 ml-2">
                      <ArrowRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Bottom Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl p-6 flex flex-col justify-between cursor-pointer relative group overflow-hidden"
              style={{
                minHeight: "240px",
                background: `linear-gradient(135deg, ${
                  (currentCarouselIndex + 2) % 5 === 0
                    ? "#ef4444, #dc2626"
                    : (currentCarouselIndex + 2) % 5 === 1
                      ? "#f59e0b, #d97706"
                      : (currentCarouselIndex + 2) % 5 === 2
                        ? "#10b981, #059669"
                        : (currentCarouselIndex + 2) % 5 === 3
                          ? "#3b82f6, #2563eb"
                          : "#8b5cf6, #7c3aed"
                })`,
              }}
              onClick={() => {
                console.debug('[AboutSection] Bottom-right card clicked, opening modal for index', (currentCarouselIndex + 2) % 5);
                setSelectedCard((currentCarouselIndex + 2) % 5);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={(currentCarouselIndex + 2) % 5}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">{Object.values(aboutCards)[(currentCarouselIndex + 2) % 5].icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {Object.values(aboutCards)[(currentCarouselIndex + 2) % 5].title}
                  </h3>
                  <h2 className="text-2xl font-bold text-white mt-auto">
                    {Object.values(aboutCards)[(currentCarouselIndex + 2) % 5].title.includes("Challenge")
                      ? "Explore"
                      : Object.values(aboutCards)[(currentCarouselIndex + 2) % 5].title.includes("Insight")
                        ? "Discover"
                        : Object.values(aboutCards)[(currentCarouselIndex + 2) % 5].title.includes("Solution")
                          ? "Learn More"
                          : Object.values(aboutCards)[(currentCarouselIndex + 2) % 5].title.includes("Impact")
                            ? "See Impact"
                            : "Why Now"}
                  </h2>
                  <div className="flex justify-end">
                    <div className="bg-white/20 rounded-full p-2 mt-2">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div
          className="flex justify-center items-center gap-4 mb-8"
          onMouseEnter={() => setIsControlsHovered(true)}
          onMouseLeave={() => setIsControlsHovered(false)}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full p-3 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
            onClick={() => setCurrentCarouselIndex((prev) => (prev - 1 + 5) % 5)}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </motion.button>

          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentCarouselIndex === index ? "bg-[#00D7A3] w-6" : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setCurrentCarouselIndex(index)}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full p-3 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
            onClick={() => setCurrentCarouselIndex((prev) => (prev + 1) % 5)}
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </div>

        {/* Modal for expanded information */}
        {selectedCard !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`bg-gradient-to-br ${Object.values(aboutCards)[selectedCard].color} p-4 rounded-xl w-14 h-14 flex items-center justify-center`}
                    >
                      {Object.values(aboutCards)[selectedCard].icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {Object.values(aboutCards)[selectedCard].title}
                    </h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedCard(null)}
                    className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-700"
                  >
                    <X size={18} />
                  </Button>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {Object.values(aboutCards)[selectedCard].content}
                </p>
                <div className="flex justify-center">
                  <Button
                    className="bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                    onClick={() => {
                      console.debug('[AboutSection] Read Full Insight clicked, navigating to', Object.values(aboutCards)[selectedCard].link);
                      window.location.href = Object.values(aboutCards)[selectedCard].link;
                    }}
                  >
                    Read Full Insight
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* About Cards - Inspired by About Card */}

        {/* Card Grid - Inspired by About Card */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#00D7A3]/5 dark:bg-[#00D7A3]/10 p-8 rounded-3xl border border-[#00D7A3]/20 mt-12 text-center"
        >
          <p className="text-xl font-medium text-gray-900 dark:text-white">
            Our Mission: We're building the trust infrastructure that makes remote renting as reliable as local renting.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
