import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export default function SoftwarePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 pt-20">
        {/* Sección Hero */}
        <section className="software-hero-bg py-20 relative">
          <div className="software-particles">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="particle software-particle"
                style={{
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto py-16 px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">END TO END</h1>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#B4C6DC] via-[#9698C3] to-[#2B2261] text-transparent bg-clip-text">
                  TECH SOLUTIONS
                </h2>
                <br />
                <p className="text-gray-300 mb-8 max-w-xl">
                  <span className="text-[#9698C3]">Software experto</span>,{" "}
                  <span className="text-[#9698C3]">consultoría industrial</span> y de{" "}
                  <span className="text-[#9698C3]">marketing</span> <br />
                  ayudando a empresas a construir <br />
                  aplicaciones escalables y optimizar <br />
                  su presencia digital.
                </p>

                <div className="flex gap-4 mt-8">
                  <Button variant="default" className="bg-white text-[#2B2261] hover:bg-white/90 software-shine-effect">
                    Comenzar
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Saber más
                  </Button>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="software-3d-card">
                  <div className="card-inner">
                    <div className="relative">
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#9698C3] rounded-full opacity-20 blur-3xl"></div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2B2261] rounded-full opacity-20 blur-3xl"></div>
                      <Image
                        src="/placeholder.svg?height=400&width=500"
                        alt="Desarrollo de Software"
                        width={500}
                        height={400}
                        className="rounded-lg shadow-2xl relative z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desarrollo y Diseño de Software */}
        <section className="container mx-auto py-20 px-4 software-bg-pattern">
          <h2 className="text-xl font-semibold mb-6 text-right" style={{ marginBottom: "45px", marginTop: "45px" }}>
            DESARROLLO Y DISEÑO DE SOFTWARE
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="software-card p-6 software-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Desarrollo de Software a Medida</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-md">
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
                    className="text-[#634D99]"
                  >
                    <path d="M18 16.98h-6l-2 2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10.98a1 1 0 0 1-1 1Z" />
                    <path d="M12 9v4" />
                    <path d="M10 11h4" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Consultores expertos crean soluciones personalizadas para las necesidades de tu negocio, ayudándote a mantenerte
                competitivo en un panorama digital en rápida evolución.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
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
                    className="mr-2 text-[#634D99]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Adaptado a tus necesidades
                </div>
              </div>
            </div>

            <div className="software-card p-6 software-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">QA y Testing</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-md">
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
                    className="text-[#634D99]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Equipos expertos en software e ingeniería aseguran que tus aplicaciones sean robustas, confiables y ofrezcan una
                experiencia de usuario excepcional.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
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
                    className="mr-2 text-[#634D99]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Pruebas exhaustivas
                </div>
              </div>
            </div>

            <div className="software-card p-6 software-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Desarrollo de Software Empresarial</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-md">
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
                    className="text-[#634D99]"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Desarrolla soluciones empresariales escalables y robustas que optimicen operaciones e impulsen el crecimiento
                empresarial a gran escala.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
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
                    className="mr-2 text-[#634D99]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Soluciones escalables
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soluciones de IA */}
        <section className="py-20 px-4 software-wave-bg bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-xl font-semibold mb-6 text-white" style={{ marginBottom: "45px", marginTop: "45px" }}>
              SOLUCIONES DE IA
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="software-dark-card p-6 rounded-lg text-white">
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold">CHATBOTS</h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-900 rounded-md">
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
                      className="text-blue-400"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Soluciones tecnológicas y de software experto que aprovechan la IA para crear chatbots inteligentes que mejoran
                  el servicio al cliente y optimizan operaciones.
                </p>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center text-sm text-gray-400">
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
                      className="mr-2 text-blue-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Soporte al Cliente 24/7
                  </div>
                </div>
              </div>

              <div className="software-dark-card p-6 rounded-lg text-white">
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold">AGENTES INTELIGENTES</h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-900 rounded-md">
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
                      className="text-purple-400"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Soluciones tecnológicas y de software experto que aprovechan la IA para crear agentes inteligentes que automatizan
                  tareas y mejoran la toma de decisiones.
                </p>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center text-sm text-gray-400">
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
                      className="mr-2 text-purple-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Flujos de Trabajo Automatizados
                  </div>
                </div>
              </div>

              <div className="software-dark-card p-6 rounded-lg text-white">
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold">ANÁLISIS EMPRESARIAL</h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-green-900 rounded-md">
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
                      className="text-green-400"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Aprovecha el poder del análisis de datos para obtener información valiosa, optimizar operaciones y tomar
                  decisiones estratégicas empresariales.
                </p>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center text-sm text-gray-400">
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
                      className="mr-2 text-green-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Decisiones Basadas en Datos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementación en la Nube */}
        <section className="container mx-auto py-20 px-4 software-bg-pattern">
          <h2 className="text-xl font-semibold mb-6 text-right" style={{ marginBottom: "45px", marginTop: "45px" }}>
            IMPLEMENTACIÓN EN LA NUBE
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="software-card p-6 software-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">AWS</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
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
                    className="text-gray-500"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Equipos expertos en software y nube implementan soluciones AWS para mejorar la escalabilidad, seguridad y
                rendimiento de tus aplicaciones empresariales.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
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
                    className="mr-2 text-[#634D99]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Infraestructura Escalable
                </div>
              </div>
            </div>

            <div className="software-card p-6 software-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">SaaS</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-md">
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
                    className="text-blue-500"
                  >
                    <path d="M7 16a4 4 0 0 1-4-4 7 7 0 0 1 7-7 6 6 0 0 1 6 6c0 2 2 4 4 4" />
                    <path d="M10 20a3 3 0 0 1-3-3 5 5 0 0 1 5-5 4 4 0 0 1 4 4 3 3 0 0 1-3 3" />
                    <path d="M2 20a2 2 0 0 1-2-2c0-2 2-4 4-4a3 3 0 0 1 3 3c0 1.7-1.3 3-3 3Z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Equipos expertos en software e ingeniería desarrollan e implementan soluciones SaaS que ofrecen entrega de software
                escalable, accesible y rentable.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
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
                    className="mr-2 text-[#634D99]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Modelo basado en suscripción
                </div>
              </div>
            </div>

            <div className="software-card p-6 software-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">BIG DATA</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-md">
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
                    className="text-green-500"
                  >
                    <path d="M21 6H3" />
                    <path d="M10 12H3" />
                    <path d="M10 18H3" />
                    <circle cx="17" cy="15" r="3" />
                    <path d="m21 19-1.9-1.9" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Desarrolla soluciones de datos escalables y robustas que transforman grandes conjuntos de datos en información
                procesable para la toma de decisiones estratégicas.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
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
                    className="mr-2 text-[#634D99]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Información Basada en Datos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#9698C3]">
                  ¿Listo para Transformar tu Negocio?
                </h2>
                <p className="text-gray-300 mb-8">
                  Velvt Software está creando soluciones poderosas para transformar negocios con aplicaciones de IA de última generación
                  y soluciones en la nube. Construyamos algo increíble juntos.
                </p>
                <div className="flex gap-4">
                  <Button variant="default" className="bg-white text-[#2B2261] hover:bg-white/90 software-shine-effect">
                    Comenzar
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Saber más
                  </Button>
                </div>
              </div>

              <div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Únete a Nuestro Equipo</h3>
                  <p className="text-gray-300 mb-6">
                    Únete a nuestro equipo de expertos en tecnología innovadora que construyen soluciones que impulsan la transformación digital.
                  </p>
                  <Button variant="link" className="text-[#9698C3] p-0 mt-2 software-shine-effect">
                    Ver posiciones abiertas →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}