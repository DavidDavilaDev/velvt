"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  const isMarketing = pathname === "/marketing"
  const isSoftware = pathname === "/software"
  const isHome = pathname === "/"
  const isDark = isHome

  const accentColor = isMarketing ? "customRed" : "customPurple"

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
            className={`text-sm font-medium nav-link ${pathname === "/" ? `text-${accentColor}` : ""} ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
          >
            Inicio
          </Link>
          <Link
            href="/#servicios"
            className={`text-sm font-medium nav-link ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
          >
            Servicios
          </Link>
          <Link
            href="/#nosotros"
            className={`text-sm font-medium nav-link ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
          >
            Nosotros
          </Link>
          <Link
            href="/#portafolio"
            className={`text-sm font-medium nav-link ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
          >
            Portafolio
          </Link>
          <Link
            href="/#contacto"
            className={`text-sm font-medium nav-link ${isDark && !scrolled ? "hover:text-white/80" : `hover:text-${accentColor}`}`}
          >
            Contacto
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`text-sm font-medium nav-link flex items-center gap-1 ${
                pathname.includes("/software") || pathname.includes("/marketing") ? `text-${accentColor}` : ""
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
          <Button
            variant="default"
            className={`${
              isDark && !scrolled
                ? "bg-white text-black hover:bg-white/90"
                : `bg-${isMarketing ? "customRed" : "customPurple"} text-white hover:bg-opacity-90`
            } btn-glow`}
          >
            Schedule Appointment
          </Button>
          <Button
            variant="default"
            className={`${
              isDark && !scrolled
                ? "bg-transparent border border-white text-white hover:bg-white/10"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}

