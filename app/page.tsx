"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CalendlyWidget from "@/components/CalendlyWidget"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated")
          }
        })
      },
      { threshold: 0.1 },
    )

    const scrollElements = document.querySelectorAll(".scroll-animate")
    scrollElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* 1. Inicio - Sección Hero */}
        <section id="inicio" className="hero-section min-h-[90vh] flex items-center">
          <div className="hero-shapes"></div>
          <div className="container mx-auto px-4 py-20 hero-content">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate">
                <h1 className="hero-heading">
                  Boost your
                  <br />
                  business.
                </h1>
                <p className="hero-description mb-8">
                  En Velvt, creamos soluciones personalizadas que abordan las necesidades únicas de tu negocio,
                  mejorando el rendimiento, la eficiencia y dándote una ventaja competitiva en un mundo digital en
                  constante cambio.
                </p>

                <div className="flex gap-4 mt-12">
                  <Button
                    variant="default"
                    className="bg-customPurple text-white hover:bg-opacity-90 px-8 py-6 text-lg btn-glow"
                  >
                    Comenzar
                  </Button>
                  <Link href="#servicios">
                    <Button
                      variant="outline"
                      className="px-8 py-6 text-lg border-white text-white bg-transparent hover:bg-white/10"
                    >
                      Explorar Servicios
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden md:flex justify-center scroll-animate" style={{ animationDelay: "0.3s" }}>
                <div className="relative w-full max-w-md floating-animation">
                  <div className="blob-bg left-0 top-0"></div>
                  <div className="blob-bg right-0 bottom-0" style={{ animationDelay: "-5s" }}></div>
                  <div className="relative z-10 glass-card p-8 rounded-xl">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-white/70">velvt-consultory.com</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-6 bg-white/10 rounded w-3/4"></div>
                      <div className="h-6 bg-white/10 rounded"></div>
                      <div className="h-6 bg-white/10 rounded w-5/6"></div>
                      <div className="h-20 bg-white/10 rounded mt-4"></div>
                      <div className="flex justify-end mt-4">
                        <div className="h-8 bg-purple-500/80 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-indicator">
              <span className="text-sm text-white/70 mb-2">Desplázate</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/70"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* 2. Servicios */}
        <section id="servicios" className="py-24 px-4 parallax-bg">
          <div className="container mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
              <div className="w-24 h-1 bg-customPurple mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ofrecemos soluciones integrales para impulsar tu negocio en el mundo digital, desde desarrollo de
                software hasta estrategias de marketing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Desarrollo de Software */}
              <div
                className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-100 scroll-animate"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-600"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-100 rounded-full opacity-20"></div>
                <div className="p-6 relative z-10">
                  <div className="w-14 h-14 mb-6 rounded-lg bg-purple-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-customPurple"
                    >
                      <path d="m18 16-4-4 4-4" />
                      <path d="m6 8 4 4-4 4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3">Desarrollo de Software</h3>
                  <ul className="text-sm text-gray-600 space-y-3 mb-6">
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-purple-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customPurple"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Aplicaciones Móviles
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-purple-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customPurple"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Desarrollo Web
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-purple-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customPurple"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      E-commerce
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-purple-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customPurple"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Integraciones API
                    </li>
                  </ul>
                  <Link href="/software">
                    <Button
                      variant="outline"
                      className="w-full border-customPurple text-customPurple hover:bg-purple-50"
                    >
                      Ver Más
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Marketing Digital */}
              <div
                className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-100 scroll-animate"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-red-100 rounded-full opacity-20"></div>
                <div className="p-6 relative z-10">
                  <div className="w-14 h-14 mb-6 rounded-lg bg-red-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-customRed"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3">Marketing Digital</h3>
                  <ul className="text-sm text-gray-600 space-y-3 mb-6">
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-red-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customRed"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      SEO y Posicionamiento
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-red-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customRed"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Publicidad Digital
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-red-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customRed"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Branding
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-red-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customRed"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Gestión de Redes Sociales
                    </li>
                  </ul>
                  <Link href="/marketing">
                    <Button variant="outline" className="w-full border-customRed text-customRed hover:bg-red-50">
                      Ver Más
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Consultoría y Estrategia */}
              <div
                className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-100 scroll-animate"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
                <div className="p-6 relative z-10">
                  <div className="w-14 h-14 mb-6 rounded-lg bg-blue-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v2" />
                      <path d="M13 17v2" />
                      <path d="M13 11v2" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3">Consultoría y Estrategia</h3>
                  <ul className="text-sm text-gray-600 space-y-3 mb-6">
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Optimización de Procesos
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Automatización
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Transformación Digital
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-600"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      Análisis de Datos
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Ver Más
                  </Button>
                </div>
              </div>
            </div>

            {/* Casos de Éxito */}
            <div className="mt-24">
              <div className="text-center mb-16 scroll-animate">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Casos de Éxito</h3>
                <div className="w-20 h-1 bg-customPurple mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Descubre cómo hemos ayudado a empresas a alcanzar sus objetivos y superar sus expectativas.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="h-48 relative">
                    <Image src="/placeholder.svg?height=200&width=400" alt="Proyecto 1" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <span className="text-xs font-medium bg-customPurple px-2 py-1 rounded">E-commerce</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">Plataforma E-commerce</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Incremento de ventas en un 150% para una tienda de moda tras la implementación de nuestra solución
                      digital.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Completado en 3 meses</span>
                      <Button variant="link" className="p-0 text-customPurple">
                        Ver Caso →
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="h-48 relative">
                    <Image src="/placeholder.svg?height=200&width=400" alt="Proyecto 2" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <span className="text-xs font-medium bg-customRed px-2 py-1 rounded">Marketing</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">Campaña de Marketing</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Aumento del 200% en leads cualificados para una empresa de servicios financieros.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Completado en 2 meses</span>
                      <Button variant="link" className="p-0 text-customRed">
                        Ver Caso →
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="h-48 relative">
                    <Image src="/placeholder.svg?height=200&width=400" alt="Proyecto 3" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <span className="text-xs font-medium bg-blue-600 px-2 py-1 rounded">Consultoría</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">Automatización de Procesos</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Reducción del 40% en costos operativos para una empresa manufacturera mediante la implementación
                      de sistemas automatizados.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Completado en 4 meses</span>
                      <Button variant="link" className="p-0 text-blue-600">
                        Ver Caso →
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Tecnologías */}
        <section className="gradient-section py-24 px-4 text-center text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow scroll-animate">
              Tecnologías que Utilizamos
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-12"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Frontend", icon: "layout", items: ["React", "Angular", "Next.js"] },
                { name: "Backend", icon: "server", items: ["Node.js", "Python", "Java"] },
                { name: "Base de Datos", icon: "database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
                { name: "Nube", icon: "cloud", items: ["AWS", "Google Cloud", "Vercel"] },
              ].map((stack, i) => (
                <div
                  key={i}
                  className="glass-card p-6 rounded-xl scroll-animate"
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {stack.icon === "layout" && (
                        <>
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="M3 9h18" />
                          <path d="M9 21V9" />
                        </>
                      )}
                      {stack.icon === "server" && (
                        <>
                          <rect width="20" height="8" x="2" y="2" rx="2" />
                          <rect width="20" height="8" x="2" y="14" rx="2" />
                          <path d="M6 6h.01" />
                          <path d="M6 18h.01" />
                        </>
                      )}
                      {stack.icon === "database" && (
                        <>
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </>
                      )}
                      {stack.icon === "cloud" && (
                        <>
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </>
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{stack.name}</h3>
                  <ul className="space-y-2">
                    {stack.items.map((item, j) => (
                      <li key={j} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Nosotros */}
        <section id="nosotros" className="py-24 px-4 parallax-bg">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosotros</h2>
              <div className="w-24 h-1 bg-customPurple mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conoce más sobre nuestra empresa, nuestra historia y el equipo detrás de Velvt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="scroll-animate">
                  <h3 className="text-2xl font-bold mb-6">Nuestra Historia</h3>
                  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <p className="text-gray-600">
                      Fundada en 2025, Velvt nació con la misión de transformar la manera en que las empresas abordan
                      sus desafíos digitales. Lo que comenzó como un pequeño equipo de consultores tecnológicos, ha
                      evolucionado en una firma integral que ofrece soluciones de software y marketing para empresas de
                      todos los tamaños.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-md scroll-animate" style={{ animationDelay: "0.1s" }}>
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-customPurple mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      Misión
                    </h4>
                    <p className="text-gray-600">
                      Potenciar el crecimiento de nuestros clientes a través de soluciones digitales innovadoras y
                      estratégicas.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md scroll-animate" style={{ animationDelay: "0.2s" }}>
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-customPurple mr-2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                      </svg>
                      Visión
                    </h4>
                    <p className="text-gray-600">
                      Ser reconocidos como líderes en transformación digital, creando un impacto positivo en cada
                      negocio con el que colaboramos.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md scroll-animate" style={{ animationDelay: "0.3s" }}>
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-customPurple mr-2"
                      >
                        <path d="m3 11 18-5v12L3 14v-3z" />
                        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                      </svg>
                      Valores
                    </h4>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <div className="w-5 h-5 mr-2 flex items-center justify-center bg-purple-100 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-customPurple"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        Innovación constante
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 mr-2 flex items-center justify-center bg-purple-100 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-customPurple"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        Excelencia en el servicio
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 mr-2 flex items-center justify-center bg-purple-100 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-customPurple"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        Integridad y transparencia
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 mr-2 flex items-center justify-center bg-purple-100 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-customPurple"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        Colaboración y trabajo en equipo
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-8 scroll-animate">Nuestro Equipo</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { name: "Miguel Moran", role: "CEO & Fundador" },
                      { name: "David Dávila", role: "CTO & Fundador" },
                      { name: "Alan Muñoz", role: "Director de Marketing" },
                      { name: "Perla Gomez", role: "Gerente de Estrategia Digital" },
                    ].map((member, i) => (
                      <div key={i} className="text-center scroll-animate" style={{ animationDelay: `${0.1 * i}s` }}>
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 gradient-border p-1">
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=96&width=96"
                              alt={member.name}
                              width={96}
                              height={96}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <h4 className="font-bold text-lg">{member.name}</h4>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <div className="flex justify-center space-x-2 mt-2">
                          {["linkedin", "twitter"].map((social) => (
                            <a
                              key={social}
                              href="#"
                              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-purple-100 transition-colors"
                            >
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
                                className="text-gray-600 hover:text-customPurple transition-colors"
                              >
                                {social === "linkedin" && (
                                  <>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                  </>
                                )}
                                {social === "twitter" && (
                                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                )}
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md scroll-animate">
                  <h4 className="font-bold text-lg mb-4">¿Quieres unirte a nuestro equipo?</h4>
                  <p className="text-gray-600 mb-4">
                    Estamos siempre en búsqueda de talento apasionado por la tecnología y la innovación.
                  </p>
                  <Button variant="outline" className="border-customPurple text-customPurple hover:bg-purple-50">
                    Ver Posiciones Abiertas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Portafolio / Proyectos */}
        <section id="portafolio" className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Portafolio</h2>
              <div className="w-24 h-1 bg-customPurple mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explora nuestros proyectos más destacados y descubre cómo hemos ayudado a empresas a alcanzar sus
                objetivos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card
                  key={i}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group scroll-animate"
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div className="h-64 relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Proyecto ${i + 1}`}
                      alt={`Proyecto ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="default"
                        className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                      >
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-lg">Proyecto {i + 1}</h4>
                      <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
                        {i % 3 === 0 ? "Software" : i % 3 === 1 ? "Marketing" : "Consultoría"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {i % 2 === 0
                        ? "Desarrollo de software personalizado para optimizar procesos internos."
                        : "Estrategia de marketing digital para incrementar la presencia online."}
                    </p>
                    <Button variant="link" className="p-0 text-customPurple">
                      Ver detalles →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Testimonios */}
            <div className="mt-24">
              <div className="text-center mb-16 scroll-animate">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Testimonios</h3>
                <div className="w-20 h-1 bg-customPurple mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">Lo que nuestros clientes dicen sobre nosotros.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Juan Pérez",
                    company: "TechSolutions Inc.",
                    text: "Trabajar con Velvt transformó completamente nuestra presencia digital. Su equipo entendió perfectamente nuestras necesidades y entregó resultados que superaron nuestras expectativas.",
                  },
                  {
                    name: "María López",
                    company: "Fashion Retail",
                    text: "Nuestra tienda online ha experimentado un crecimiento exponencial desde que implementamos las estrategias de marketing digital diseñadas por Velvt. Altamente recomendados.",
                  },
                  {
                    name: "Roberto García",
                    company: "Industrias RG",
                    text: "La automatización de procesos implementada por Velvt nos ha permitido reducir costos y aumentar la eficiencia. Un socio estratégico para cualquier empresa.",
                  },
                ].map((testimonial, i) => (
                  <Card
                    key={i}
                    className="p-8 testimonial-card scroll-animate"
                    style={{ animationDelay: `${0.1 * i}s` }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-500"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg
                          key={j}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-yellow-400 mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mt-4">"{testimonial.text}"</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Blog / Recursos */}
        <section id="blog" className="py-24 px-4 parallax-bg">
          <div className="container mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
              <div className="w-24 h-1 bg-customPurple mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Artículos, guías y recursos para mantenerte al día con las últimas tendencias en tecnología y marketing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tendencias en Desarrollo Web para 2023",
                  category: "Tecnología",
                  date: "15 Jun 2023",
                },
                {
                  title: "Cómo Implementar una Estrategia de SEO Efectiva",
                  category: "Marketing Digital",
                  date: "28 May 2023",
                },
                {
                  title: "Automatización de Procesos: Guía para Empresas",
                  category: "Consultoría",
                  date: "10 May 2023",
                },
              ].map((post, i) => (
                <Card
                  key={i}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group scroll-animate"
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div className="h-48 relative">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Blog ${i + 1}`}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <span className="text-xs font-medium bg-customPurple px-2 py-1 rounded">{post.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-xs text-gray-500">5 min lectura</span>
                    </div>
                    <h4 className="font-bold text-lg mb-3">{post.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                    <Button variant="link" className="p-0 text-customPurple">
                      Leer más →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 scroll-animate">
              <Button variant="outline" className="border-customPurple text-customPurple hover:bg-purple-50">
                Ver Todos los Artículos
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Contacto */}
        <section id="contacto" className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
              <div className="w-24 h-1 bg-customPurple mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ¿Tienes alguna pregunta o proyecto en mente? Contáctanos y te responderemos a la brevedad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="gradient-border scroll-animate">
                <div className="gradient-border-content p-8 bg-white rounded-lg">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nombre
                        </label>
                        <Input
                          id="name"
                          placeholder="Tu nombre"
                          className="border-gray-300 focus:border-customPurple focus:ring-customPurple"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          className="border-gray-300 focus:border-customPurple focus:ring-customPurple"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        placeholder="Asunto de tu mensaje"
                        className="border-gray-300 focus:border-customPurple focus:ring-customPurple"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={5}
                        className="border-gray-300 focus:border-customPurple focus:ring-customPurple"
                      />
                    </div>

                    <Button className="w-full bg-customPurple hover:bg-opacity-90 btn-glow">Enviar Mensaje</Button>
                  </form>
                </div>
              </div>

              <div>
                <div className="bg-white p-8 rounded-lg shadow-sm mb-8 scroll-animate">
                  <h3 className="font-bold text-xl mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-customPurple mr-2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Información de Contacto
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-md mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customPurple"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Teléfono</h4>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-md mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customPurple"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Email</h4>
                        <p className="text-gray-600">velvtconsultoria@outlook.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-md mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-customPurple"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Dirección</h4>
                        <p className="text-gray-600">123 Calle Principal, Ciudad, País</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm scroll-animate">
                  <h3 className="font-bold text-xl mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-customPurple mr-2"
                    >
                      <path d="M18 16.8a7.14 7.14 0 0 0 2.24-3.22 6.624 6.624 0 0 0 .76-3.58 6.479 6.479 0 0 0-2.38-4.67 6.6 6.6 0 0 0-4.62-1.33 6.913 6.913 0 0 0-6.13 9.09 6.431 6.431 0 0 0 3.13 3.44 6.485 6.485 0 0 0 5.24.24" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    Síguenos
                  </h3>
                  <div className="flex space-x-4">
                    {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-600 hover:text-customPurple transition-colors"
                        >
                          {social === "facebook" && (
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          )}
                          {social === "twitter" && (
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          )}
                          {social === "instagram" && (
                            <>
                              <rect width="20" height="20" x="2" y="2" rx="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </>
                          )}
                          {social === "linkedin" && (
                            <>
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </>
                          )}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ / Preguntas Frecuentes */}
        <section id="faq" className="py-24 px-4 parallax-bg">
          <div className="container mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
              <div className="w-24 h-1 bg-customPurple mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Respuestas a las preguntas más comunes sobre nuestros servicios.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "¿Cuánto tiempo toma desarrollar un proyecto de software?",
                    answer:
                      "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que aplicaciones más complejas pueden requerir 3-6 meses. Durante nuestra consulta inicial, proporcionaremos un cronograma detallado basado en sus requisitos específicos.",
                  },
                  {
                    question: "¿Qué metodología utilizan para el desarrollo de software?",
                    answer:
                      "Utilizamos metodologías ágiles como Scrum y Kanban, que permiten un desarrollo iterativo y entregas incrementales. Esto nos permite adaptarnos rápidamente a cambios en los requisitos y proporcionar valor de forma continua durante el desarrollo.",
                  },
                  {
                    question: "¿Cómo miden el éxito de una campaña de marketing?",
                    answer:
                      "Definimos KPIs específicos al inicio de cada campaña, que pueden incluir tasa de conversión, ROI, tráfico web, engagement en redes sociales, entre otros. Utilizamos herramientas analíticas avanzadas para monitorear estos indicadores y realizar ajustes en tiempo real para optimizar resultados.",
                  },
                  {
                    question: "¿Ofrecen mantenimiento después de finalizar un proyecto?",
                    answer:
                      "Sí, ofrecemos planes de mantenimiento y soporte continuo para todos nuestros proyectos. Estos planes incluyen actualizaciones de seguridad, corrección de errores, mejoras de rendimiento y soporte técnico según las necesidades de cada cliente.",
                  },
                  {
                    question: "¿Trabajan con empresas de cualquier tamaño?",
                    answer:
                      "Absolutamente. Tenemos experiencia trabajando con startups, pequeñas y medianas empresas, así como con grandes corporaciones. Adaptamos nuestras soluciones y servicios según las necesidades y presupuesto de cada cliente.",
                  },
                ].map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border rounded-lg bg-white shadow-sm scroll-animate"
                    style={{ animationDelay: `${0.1 * i}s` }}
                  >
                    <AccordionTrigger className="text-left font-medium px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-t-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 8. Página de Cotización / Agendar Cita */}
        <section id="cotizacion" className="py-24 px-4 hero-section">
          <div className="hero-shapes" style={{ opacity: 0.3 }}></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">¿Listo para impulsar tu negocio?</h2>
              <p className="text-white/80 mb-12 text-lg">
                Agenda una consulta gratuita con nuestros expertos y descubre cómo podemos ayudarte a alcanzar tus
                objetivos.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-customPurple hover:bg-opacity-90 px-8 py-6 text-lg btn-glow">
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </section>
        <CalendlyWidget />
      </main>

      <SiteFooter />
    </div>
  )
}

