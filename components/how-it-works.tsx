"use client"

import React from "react"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  ShoppingCart,
  UserCheck,
  FileText,
  CheckCircle,
  Home,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  Clock,
  Camera,
  Play,
  Download,
  CreditCard,
  Calendar,
  Key,
  Navigation,
  CheckSquare,
  MapPin,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    id: 1,
    title: "Browse for Listing",
    description: "Browse our listings or paste external links to properties you're interested in.",
    icon: Search,
    keyFeature: "Browse verified listings with detailed property information",
  },
  {
    id: 2,
    title: "Add to Cart and Checkout",
    description: "Add listings to your cart, proceed to checkout, and pay the viewing fee.",
    icon: ShoppingCart,
    keyFeature: "Secure payment processing with instant confirmation",
  },
  {
    id: 3,
    title: "Match Order with Evaluator",
    description: "Our system matches your order with a local Proofly Friend who will evaluate the property.",
    icon: UserCheck,
    keyFeature: "AI-powered matching with qualified local evaluators",
  },
  {
    id: 4,
    title: "Evaluation in Progress",
    description: "Watch as your assigned evaluator visits and documents the property in real-time.",
    icon: Navigation,
    keyFeature: "Real-time tracking and live evaluation updates",
  },
  {
    id: 5,
    title: "Submit Rental Offer to Landlord",
    description: "After receiving the evaluation report, submit your rental offer to the landlord.",
    icon: FileText,
    keyFeature: "Professional reports with photos, videos, and insights",
  },
  {
    id: 6,
    title: "Landlord Reviews Your Profile",
    description:
      "Landlord reviews your comprehensive profile including bio, credit report, rental history, and verified references.",
    icon: UserCheck,
    keyFeature: "Complete tenant verification with credit and reference checks",
  },
  {
    id: 7,
    title: "Approved, Sign Lease, and Pay Deposit",
    description: "Once approved, sign the lease and pay the deposit securely through our platform.",
    icon: CheckCircle,
    keyFeature: "Streamlined lease signing with digital verification",
  },
  {
    id: 8,
    title: "Move Into Property",
    description: "Congratulations! You're ready to move into your new home.",
    icon: Home,
    keyFeature: "Move-in support and ongoing assistance",
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)
  const [selectedStepModal, setSelectedStepModal] = useState<number | null>(null)

  const nextStep = () => {
    setActiveStep((prev) => (prev < steps.length ? prev + 1 : prev))
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const openStepModal = (stepId: number) => {
    setSelectedStepModal(stepId)
  }

  const closeStepModal = () => {
    setSelectedStepModal(null)
  }

  return (
    <section id="how-it-works" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our simple process makes remote property evaluations easy and secure.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl"></div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Main Content Area */}
            <div className="w-full aspect-[2/1] bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              <div className="grid grid-cols-2 h-full">
                {/* Left Side - Step Content Carousel */}
                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#00D7A3] rounded-2xl flex items-center justify-center shadow-lg">
                        {React.createElement(steps[activeStep - 1].icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#00D7A3] mb-1">Step {activeStep}</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {steps[activeStep - 1].title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {steps[activeStep - 1].description}
                    </p>

                    {/* Interactive Features */}
                    <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-600/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-[#00D7A3] rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Key Feature</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{steps[activeStep - 1].keyFeature}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side - Interactive Phone Visual */}
                <div className="p-8 flex items-center justify-center bg-gradient-to-br from-[#00D7A3]/5 to-blue-500/5">
                  <PhoneIllustration activeStep={activeStep} />
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-12 gap-4">
              <motion.button
                onClick={prevStep}
                disabled={activeStep === 1}
                className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Previous</span>
              </motion.button>

              <motion.button
                onClick={nextStep}
                disabled={activeStep === steps.length}
                className="flex items-center gap-2 px-6 py-3 bg-[#00D7A3] text-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">Next</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {steps.map((step) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === step.id ? "bg-[#00D7A3] w-8" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Centered Illustration Only */}
        <div className="md:hidden">
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl p-6">
            <div className="flex justify-center">
              <div className="relative">
                <PhoneIllustration activeStep={activeStep} isMobile={true} onStepClick={openStepModal} />

                {/* Mobile Step Labels */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <motion.button
                    onClick={() => openStepModal(activeStep)}
                    className="bg-[#00D7A3] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      {React.createElement(steps[activeStep - 1].icon, { className: "w-3 h-3" })}
                    </div>
                    Step {activeStep}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                onClick={prevStep}
                disabled={activeStep === 1}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex items-center px-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {activeStep} of {steps.length}
                </span>
              </div>

              <Button
                onClick={nextStep}
                disabled={activeStep === steps.length}
                size="sm"
                className="bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Step Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === step.id ? "bg-[#00D7A3] w-6" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Step Detail Modal for Mobile */}
        <AnimatePresence>
          {selectedStepModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeStepModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#00D7A3] rounded-xl flex items-center justify-center">
                        {React.createElement(steps[selectedStepModal - 1].icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#00D7A3]">Step {selectedStepModal}</div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {steps[selectedStepModal - 1].title}
                        </h3>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={closeStepModal} className="rounded-full w-8 h-8">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {steps[selectedStepModal - 1].description}
                  </p>

                  <div className="bg-[#00D7A3]/5 rounded-xl p-4 border border-[#00D7A3]/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-[#00D7A3] rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Key Feature</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {steps[selectedStepModal - 1].keyFeature}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Phone Illustration Component
const PhoneIllustration = React.memo(function PhoneIllustration({
  activeStep,
  isMobile = false,
  onStepClick,
}: {
  activeStep: number
  isMobile?: boolean
  onStepClick?: (stepId: number) => void
}) {
  const stepContent = useMemo(() => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="h-full flex flex-col p-1"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Step 1 - Browse */}
          {activeStep === 1 && (
            <div className="space-y-2 h-full flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-gray-900">Discover</h4>
                <Search className="w-3 h-3 text-[#00D7A3]" />
              </div>

              <div className="bg-gray-100 rounded-lg p-2 flex items-center gap-2">
                <Search className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">Toronto apartments...</span>
              </div>

              <div className="flex-1 space-y-2 overflow-hidden">
                {[
                  { title: "Downtown Loft", price: "$2,500", location: "King St", verified: true },
                  { title: "Suburban House", price: "$3,200", location: "Mississauga", verified: true },
                  { title: "City Condo", price: "$2,800", location: "Yorkville", verified: false },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 relative"
                  >
                    {item.verified && (
                      <div className="absolute top-1 right-1 bg-[#00D7A3] text-white px-1 py-0.5 rounded text-xs flex items-center gap-1">
                        <Shield className="w-2 h-2" />✓
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#00D7A3] flex items-center justify-center">
                        <Home className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-gray-900 text-xs truncate">{item.title}</h5>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-2 h-2 text-gray-400" />
                            <span className="text-xs text-gray-500">{item.location}</span>
                          </div>
                          <span className="text-xs font-bold text-[#00D7A3]">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 - Cart & Checkout */}
          {activeStep === 2 && (
            <div className="space-y-2 h-full flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-gray-900">Checkout</h4>
                <ShoppingCart className="w-3 h-3 text-blue-600" />
              </div>

              <div className="bg-[#00D7A3]/10 rounded-lg p-2 border border-[#00D7A3]/20">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#00D7A3] flex items-center justify-center">
                    <Home className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 text-xs">Downtown Loft</h5>
                    <p className="text-xs text-gray-600">King St • Evaluation</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-2 border border-gray-100 space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Evaluation Fee</span>
                  <span className="text-xs font-medium">$49.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Processing</span>
                  <span className="text-xs font-medium">$2.99</span>
                </div>
                <div className="border-t pt-1 flex justify-between">
                  <span className="text-xs font-medium">Total</span>
                  <span className="text-sm font-bold text-[#00D7A3]">$52.98</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-2 flex items-center gap-2">
                <CreditCard className="w-3 h-3 text-gray-600" />
                <div>
                  <p className="text-xs font-medium">•••• •••• •••• 4242</p>
                  <p className="text-xs text-gray-500">Expires 12/26</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#00D7A3] text-white py-2 rounded-lg font-medium text-xs flex items-center justify-center gap-1"
              >
                <Shield className="w-3 h-3" />
                Pay Securely
              </motion.button>
            </div>
          )}

          {/* Step 3 - Evaluator Matching */}
          {activeStep === 3 && (
            <div className="space-y-2 h-full flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-gray-900">Finding Expert</h4>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <UserCheck className="w-3 h-3 text-purple-600" />
                </motion.div>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#00D7A3] flex items-center justify-center"
                >
                  <Search className="w-5 h-5 text-white" />
                </motion.div>

                {/* Floating Dots Animation */}
                <div className="relative h-4 mb-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                      className="absolute w-1 h-1 bg-[#00D7A3] rounded-full"
                      style={{
                        left: `${40 + i * 8}%`,
                        top: "50%",
                      }}
                    />
                  ))}
                </div>

                <p className="text-xs text-gray-600 mb-1">Matching with expert...</p>
                <p className="text-xs text-gray-500">Analyzing location</p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="bg-white rounded-lg p-2 border border-green-200"
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">SM</span>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-1 h-1 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 text-xs">Sarah Mitchell</h5>
                    <p className="text-xs text-gray-600">Certified Friend</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-2 h-2 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600">4.9 • 2.1km away</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Step 4 - NEW: Evaluation in Progress */}
          {activeStep === 4 && (
            <div className="space-y-2 h-full flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-gray-900">Live Tracking</h4>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Navigation className="w-3 h-3 text-blue-600" />
                </motion.div>
              </div>

              {/* Map Simulation */}
              <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 relative overflow-hidden">
                <div className="text-xs font-medium text-blue-900 mb-1">Sarah's Route</div>

                {/* Simplified Map Grid */}
                <div className="relative h-16 bg-blue-100 rounded-md overflow-hidden">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`v-${i}`}
                        className="absolute border-blue-300"
                        style={{
                          left: `${25 * i}%`,
                          top: 0,
                          width: "1px",
                          height: "100%",
                          borderLeft: "1px solid currentColor",
                        }}
                      />
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={`h-${i}`}
                        className="absolute border-blue-300"
                        style={{
                          top: `${33 * i}%`,
                          left: 0,
                          height: "1px",
                          width: "100%",
                          borderTop: "1px solid currentColor",
                        }}
                      />
                    ))}
                  </div>

                  {/* Properties */}
                  <div className="absolute top-1 left-1 w-2 h-2 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-1 h-1 text-white" />
                  </div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Clock className="w-1 h-1 text-white" />
                  </div>
                  <div className="absolute bottom-1 left-4 w-2 h-2 bg-gray-300 rounded-full"></div>

                  {/* Moving Evaluator */}
                  <motion.div
                    animate={{
                      x: [4, 48, 4],
                      y: [4, 4, 48],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute w-1.5 h-1.5 bg-blue-600 rounded-full"
                  />

                  {/* Route Line */}
                  <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                      d="M 6 6 L 50 6 L 6 50"
                      stroke="#3b82f6"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="1,1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </svg>
                </div>
              </div>

              {/* Property Status */}
              <div className="space-y-1 flex-1">
                {[
                  { name: "Downtown Loft", status: "completed", time: "2:30 PM" },
                  { name: "King St Condo", status: "current", time: "3:15 PM" },
                  { name: "Bay St Apt", status: "pending", time: "4:00 PM" },
                ].map((property, index) => (
                  <motion.div
                    key={property.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`bg-white rounded-md p-1.5 border flex items-center gap-2 ${
                      property.status === "completed"
                        ? "border-green-200"
                        : property.status === "current"
                          ? "border-yellow-200"
                          : "border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        property.status === "completed"
                          ? "bg-green-500"
                          : property.status === "current"
                            ? "bg-yellow-500"
                            : "bg-gray-300"
                      }`}
                    >
                      {property.status === "completed" && <CheckSquare className="w-1.5 h-1.5 text-white" />}
                      {property.status === "current" && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                          className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900 truncate">{property.name}</p>
                      <p className="text-xs text-gray-500">{property.time}</p>
                    </div>
                    {property.status === "completed" && <span className="text-xs text-green-600 font-medium">✓</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 - Report Ready (was step 4) */}
          {activeStep === 5 && (
            <div className="space-y-2 h-full flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-gray-900">Report Ready</h4>
                <FileText className="w-3 h-3 text-green-600" />
              </div>

              <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-md bg-green-500 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 text-xs">Evaluation Complete</h5>
                    <p className="text-xs text-green-600">Property verified & documented</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mb-2">
                  {[
                    { type: "Photos", count: "24", icon: Camera },
                    { type: "Videos", count: "4", icon: Play },
                    { type: "Report", count: "1", icon: Download },
                  ].map((item, index) => (
                    <div key={item.type} className="bg-white rounded-md p-1.5 text-center border border-green-200">
                      <item.icon className="w-2 h-2 text-green-600 mx-auto mb-0.5" />
                      <div className="text-xs font-bold text-green-600">{item.count}</div>
                      <div className="text-xs text-gray-500">{item.type}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-md p-1.5 flex items-center justify-between">
                  <span className="text-xs font-medium">Overall Rating</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-2 h-2 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                    ))}
                    <span className="ml-1 text-xs font-bold">4.8</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#00D7A3] text-white py-2 rounded-lg font-medium text-xs"
              >
                Submit Rental Application
              </motion.button>
            </div>
          )}

          {/* Step 6 - Landlord Review (was step 5) */}
          {activeStep === 6 && (
            <div className="space-y-2 h-full flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-gray-900">Under Review</h4>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Clock className="w-3 h-3 text-blue-600" />
                </motion.div>
              </div>

              <div className="space-y-1">
                {[
                  { label: "Credit Score", status: "750", color: "green" },
                  { label: "References", status: "Verified", color: "green" },
                  { label: "Rental History", status: "Clean", color: "green" },
                  { label: "Background", status: "Clear", color: "green" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-md p-1.5 flex items-center justify-between border border-green-200"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-green-100 flex items-center justify-center">
                        <Shield className="w-2 h-2 text-green-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-900">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-green-600">{item.status}</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                        className="w-1 h-1 bg-green-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-sm bg-blue-500 flex items-center justify-center">
                      <UserCheck className="w-2 h-2 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-blue-900">Landlord Review</span>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-2 h-2 border border-blue-500 border-t-transparent rounded-full"
                  />
                </div>
                <p className="text-xs text-blue-700 mb-1">Profile under review by property owner</p>
                <div className="bg-blue-100 rounded-full h-1 overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500 rounded-full"
                    animate={{ width: ["0%", "75%", "0%"] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
                <p className="text-xs text-blue-600 mt-1">Est. response: 2-4 hours</p>
              </div>
            </div>
          )}

          {/* Step 7 - Lease Signing (was step 6) */}
          {activeStep === 7 && (
            <div className="space-y-2 h-full flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-gray-900">Approved!</h4>
                <CheckCircle className="w-3 h-3 text-green-600" />
              </div>

              <div className="bg-green-50 rounded-lg p-2 border border-green-200 text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-6 h-6 mx-auto mb-1 rounded-full bg-green-500 flex items-center justify-center"
                >
                  <CheckCircle className="w-3 h-3 text-white" />
                </motion.div>
                <h5 className="font-medium text-green-900 text-xs">Application Approved</h5>
                <p className="text-xs text-green-700">Ready to sign your lease</p>
              </div>

              <div className="bg-white rounded-lg p-2 border border-gray-100 space-y-1">
                <h5 className="font-medium text-gray-900 text-xs">Lease Summary</h5>
                <div className="space-y-0.5">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Monthly Rent</span>
                    <span className="text-xs font-medium">$2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Security Deposit</span>
                    <span className="text-xs font-medium">$2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Lease Term</span>
                    <span className="text-xs font-medium">12 months</span>
                  </div>
                  <div className="border-t pt-0.5 flex justify-between">
                    <span className="text-xs font-medium">Move-in Cost</span>
                    <span className="text-sm font-bold text-[#00D7A3]">$5,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-2 flex items-center gap-2">
                <div className="w-4 h-4 rounded-md bg-purple-500 flex items-center justify-center">
                  <FileText className="w-2 h-2 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-900">Digital Lease Agreement</p>
                  <p className="text-xs text-gray-500">Ready for e-signature</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#00D7A3] text-white py-2 rounded-lg font-medium text-xs flex items-center justify-center gap-1"
              >
                <FileText className="w-3 h-3" />
                Sign Lease & Pay Deposit
              </motion.button>
            </div>
          )}

          {/* Step 8 - Move In (was step 7) */}
          {activeStep === 8 && (
            <div className="space-y-2 h-full flex flex-col text-center">
              <div className="flex items-center justify-center mb-1">
                <Key className="w-3 h-3 text-yellow-600" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="relative"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#00D7A3] flex items-center justify-center mb-2">
                  <Home className="w-6 h-6 text-white" />
                </div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                    className="absolute w-1 h-1 bg-[#00D7A3] rounded-full"
                    style={{
                      left: `${20 + (i % 3) * 30}%`,
                      top: `${30 + Math.floor(i / 3) * 20}%`,
                    }}
                  />
                ))}
              </motion.div>

              <h4 className="text-sm font-bold text-gray-900">Welcome Home!</h4>
              <p className="text-xs text-gray-600 mb-2">You're all set to move into your new place</p>

              <div className="bg-[#00D7A3]/10 rounded-lg p-2 border border-[#00D7A3]/20">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-3 h-3 text-[#00D7A3]" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">Move-in Date</p>
                    <p className="text-xs text-gray-600">December 1, 2024</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Key className="w-3 h-3 text-[#00D7A3]" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">Key Pickup</p>
                    <p className="text-xs text-gray-600">Building lobby • 9:00 AM</p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-lg"
              >
                🎉
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    )
  }, [activeStep])

  return (
    <motion.div
      key={activeStep}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${isMobile ? "scale-90" : ""}`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* iPhone-style Frame */}
      <div className="relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[2rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-4 py-2 bg-gray-50 dark:bg-gray-200">
            <span className="text-xs font-medium text-gray-900">9:41</span>
            <div className="flex gap-1">
              <div className="w-3 h-1.5 bg-gray-900 rounded-sm"></div>
              <div className="w-4 h-1.5 bg-gray-900 rounded-sm"></div>
              <div className="w-4 h-1.5 bg-gray-900 rounded-sm"></div>
            </div>
          </div>

          {/* Dynamic Content Based on Step */}
          <div className="p-3 h-[calc(100%-32px)] overflow-hidden">{stepContent}</div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-white rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute -top-3 -right-3 bg-[#00D7A3] text-white p-2 rounded-full shadow-lg"
        style={{ willChange: "transform" }}
      >
        {React.createElement(steps[activeStep - 1].icon, { className: "w-4 h-4" })}
      </motion.div>
    </motion.div>
  )
})
