"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, Users, Building, UserCheck, ArrowRight, Zap } from "lucide-react"
import { useState } from "react"

export function PricingOverview() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const pricingPlans = [
    {
      name: "Renter",
      subtitle: "Perfect for finding your next home",
      price: "49",
      period: "per evaluation",
      originalPrice: null,
      popular: false,
      description: "Get verified property reports before you commit",
      features: [
        "Professional property evaluation",
        "Detailed photo and video report",
        "Local market insights",
        "Fraud protection guarantee",
        "24/7 customer support",
        "Mobile app access",
      ],
      cta: "Book Evaluation",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-white dark:bg-gray-800",
      textColor: "text-gray-900 dark:text-white",
    },
    {
      name: "Landlord",
      subtitle: "Expand your reach to remote tenants",
      price: "Free",
      period: "to list properties",
      originalPrice: null,
      popular: true,
      description: "Only pay when you successfully rent your property",
      features: [
        "Unlimited property listings",
        "Access to pre-qualified tenants",
        "Professional property showcasing",
        "Tenant screening reports",
        "Priority customer support",
        "Analytics dashboard",
      ],
      cta: "List Property",
      icon: Building,
      color: "from-[#00D7A3] to-emerald-600",
      bgColor: "bg-gray-900 dark:bg-gray-800",
      textColor: "text-white",
    },
    {
      name: "Evaluator",
      subtitle: "Earn money as a Proofly Friend",
      price: "Competitive",
      period: "viewing fees",
      originalPrice: null,
      popular: false,
      description: "Keep most of what you earn from evaluations",
      features: [
        "Flexible working schedule",
        "Competitive evaluation fees",
        "Professional training provided",
        "Mobile evaluation tools",
        "Weekly payouts",
        "Performance bonuses",
        "Community support",
      ],
      cta: "Apply Now",
      icon: UserCheck,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-white dark:bg-gray-800",
      textColor: "text-gray-900 dark:text-white",
    },
  ]

  return (
    <section id="pricing" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00D7A3]/10 text-[#00D7A3] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Plans that work for everyone
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you're renting, listing, or evaluating properties, we have the perfect plan for your needs.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Cards - All Screen Sizes */}
        <div className="w-full overflow-x-auto scrollbar-hide pb-4 pt-6">
          <div className="flex gap-4 md:gap-6 lg:gap-8 min-w-max px-4 sm:px-6 lg:px-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl border transition-all duration-500 cursor-pointer flex-shrink-0 overflow-visible
          w-72 sm:w-80 md:w-96 lg:w-[400px] xl:w-[420px]
          ${selectedCard === plan.name
                    ? "border-[#00D7A3] ring-4 ring-[#00D7A3]/20 z-10"
                    : plan.popular
                      ? "border-[#00D7A3] ring-2 ring-[#00D7A3]/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-[#00D7A3]/50"
                  } ${plan.bgColor}`}
                onClick={() => setSelectedCard(selectedCard === plan.name ? null : plan.name)}
                whileTap={{ scale: 0.98 }}
              >
                {/* Popular Badge */}
                {(plan.popular || selectedCard === plan.name) && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="relative">
                    <div className="bg-gradient-to-r from-[#00D7A3] to-emerald-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <Star className="w-3 md:w-4 h-3 md:h-4" />
                      {selectedCard === plan.name ? "Selected" : "Most Popular"}
                    </div>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6 md:mb-8">
                  <motion.div
                    className={`w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}
                  >
                    <plan.icon className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 text-white" />
                  </motion.div>
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 ${plan.textColor}`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-4 md:mb-6">{plan.subtitle}</p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {plan.originalPrice && (
                        <span className="text-lg md:text-xl lg:text-2xl text-gray-400 line-through">
                          ${plan.originalPrice}
                        </span>
                      )}
                      <motion.span className={`text-2xl md:text-4xl lg:text-5xl font-bold ${plan.textColor}`}>
                        {plan.name === "Renter"
                          ? "Affordable"
                          : plan.price === "Free"
                            ? "Free"
                            : plan.price === "Competitive"
                              ? "Competitive"
                              : `$${plan.price}`}
                      </motion.span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{plan.period}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <motion.div
                  className="space-y-2 md:space-y-3 lg:space-y-4 mb-6 md:mb-8"
                  animate={{
                    height: selectedCard === plan.name ? "auto" : "160px",
                    overflow: selectedCard === plan.name ? "visible" : "hidden",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center gap-2 md:gap-3"
                    >
                      <motion.div
                        className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#00D7A3]/20 flex items-center justify-center flex-shrink-0"
                        animate={{
                          backgroundColor: selectedCard === plan.name ? "#00D7A3" : "rgba(0, 215, 163, 0.2)",
                        }}
                      >
                        <Check
                          className={`w-2 md:w-3 h-2 md:h-3 ${selectedCard === plan.name ? "text-white" : "text-[#00D7A3]"}`}
                        />
                      </motion.div>
                      <span className={`text-xs md:text-sm ${plan.textColor}`}>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <Link href="/waitlist" className="block">
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`w-full py-3 md:py-4 text-sm md:text-base lg:text-lg font-medium rounded-xl md:rounded-2xl transition-all duration-300 ${selectedCard === plan.name
                        ? "bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white shadow-2xl"
                        : plan.popular
                          ? "bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                        }`}
                    >
                      {selectedCard === plan.name ? `Choose ${plan.name}` : plan.cta}
                      <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
          {/* Scroll Indicator only on small screens */}
          <div className="flex justify-center mt-6 md:hidden">
            <p className="text-sm text-gray-500 dark:text-gray-400">← Swipe to see all plans →</p>
          </div>
        </div>
      </div>
    </section>
  )
}
