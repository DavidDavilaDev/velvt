"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  const isMarketing = pathname === "/marketing"
  const isSoftware = pathname === "/software"
  const isHome = pathname === "/"
  const isDark = isHome

  const accentColor = isMarketing ? "customRed" : "customPurple"

  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#inicio") {
      const inicioSection = document.getElementById("inicio");
      if (inicioSection) {
        inicioSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Check which section is currently in view
      if (isHome) {
        const sections = ["inicio", "servicios", "nosotros", "portafolio", "blog", "contacto", "faq"]

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            // If the section is in view (with some buffer for better UX)
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isHome])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset to account for header
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white shadow-md" : `py-6 ${isDark ? "bg-transparent text-white" : "bg-white"}`
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            {isMarketing ? (
              <>
                <Image
                  src="/images/innova.png"
                  alt="Innovación 360 MKT Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="font-semibold text-lg">Innovación 360 MKT</span>
              </>
            ) : isSoftware ? (
              <>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/velvt_11-TCP01WCXp7jjAUls1FQiKAHwKOsUbr.png"
                  alt="Velvt Software Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="font-semibold text-lg">Velvt Software</span>
              </>
            ) : (
              <>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/velvt_11-TCP01WCXp7jjAUls1FQiKAHwKOsUbr.png"
                  alt="Velvt Software Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="font-semibold text-lg">Velvt</span>
              </>
            )}
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              scrollToSection("inicio");
              setActiveSection("inicio"); // Forzar estado activo
            }
          }}
          className={`text-sm font-medium nav-link ${
            (pathname === "/" && activeSection === "inicio") ? `text-${accentColor} active` : ""
          } ${
            isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`
          }`}
        >
          Inicio
        </Link>
          <button
            onClick={() => scrollToSection("servicios")}
            className={`text-sm font-medium nav-link ${
              activeSection === "servicios" ? `text-${accentColor} active` : ""
            } ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className={`text-sm font-medium nav-link ${
              activeSection === "nosotros" ? `text-${accentColor} active` : ""
            } ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("portafolio")}
            className={`text-sm font-medium nav-link ${
              activeSection === "portafolio" ? `text-${accentColor} active` : ""
            } ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
          >
            Portafolio
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className={`text-sm font-medium nav-link ${
              activeSection === "contacto" ? `text-${accentColor} active` : ""
            } ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
          >
            Contacto
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`text-sm font-medium nav-link flex items-center gap-1 ${
                pathname.includes("/software") || pathname.includes("/marketing") ? `text-${accentColor} active` : ""
              } ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
            >
              Industrias
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/software" className="w-full">
                  Software
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/marketing" className="w-full">
                  Marketing
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
          {/* Se han eliminado los botones de Schedule Appointment y Login */}
        </div>
      </div>
    </header>
  )
}

