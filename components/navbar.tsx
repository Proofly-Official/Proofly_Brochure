"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const scrollToSection = (id: string) => {
    closeMenu();

    // If we're on the waitlist page, navigate to home first
    if (pathname === "/waitlist") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust this value to match your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.location.hash = `#${id}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Proofly Logo" width={100} height={100} className="h-25 w-25" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group cursor-pointer"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group cursor-pointer"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group cursor-pointer"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("who-its-for")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group cursor-pointer"
            >
              Who It's For
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group cursor-pointer"
            >
              Roadmap
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium transition-all duration-300 relative group cursor-pointer"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D7A3] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Get Started Button - Hidden on mobile/tablet, shown on desktop, and hidden on waitlist page */}
            {pathname !== "/waitlist" && (
              <div className="hidden lg:block">
                <Link href="/waitlist">
                  <Button className="bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/20"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              <button
                onClick={() => {
                  closeMenu();
                  if (pathname !== "/") {
                    router.push("/#home");
                  } else {
                    const element = document.getElementById("home");
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                      window.location.hash = "#home";
                    }
                  }
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800 text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  closeMenu();
                  if (pathname !== "/") {
                    router.push("/#about");
                  } else {
                    const element = document.getElementById("about");
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                      window.location.hash = "#about";
                    }
                  }
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800 text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  closeMenu();
                  if (pathname !== "/") {
                    router.push("/#how-it-works");
                  } else {
                    const element = document.getElementById("how-it-works");
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                      window.location.hash = "#how-it-works";
                    }
                  }
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800 text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => {
                  closeMenu();
                  if (pathname !== "/") {
                    router.push("/#who-its-for");
                  } else {
                    const element = document.getElementById("who-its-for");
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                      window.location.hash = "#who-its-for";
                    }
                  }
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800 text-left"
              >
                Who It's For
              </button>
              <button
                onClick={() => {
                  closeMenu();
                  if (pathname !== "/") {
                    router.push("/#roadmap");
                  } else {
                    const element = document.getElementById("roadmap");
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                      window.location.hash = "#roadmap";
                    }
                  }
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800 text-left"
              >
                Roadmap
              </button>
              <button
                onClick={() => {
                  closeMenu();
                  if (pathname !== "/") {
                    router.push("/#pricing");
                  } else {
                    const element = document.getElementById("pricing");
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                      window.location.hash = "#pricing";
                    }
                  }
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-[#00D7A3] font-medium py-3 transition-colors border-b border-gray-100 dark:border-gray-800 text-left"
              >
                Pricing
              </button>
              {pathname !== "/waitlist" && (
                <Link href="/waitlist" className="w-full">
                  <Button className="w-full bg-[#00D7A3] hover:bg-[#00D7A3]/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
