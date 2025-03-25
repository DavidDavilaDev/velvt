import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 pt-20">
        {/* Sección Hero */}
        <section className="marketing-hero-bg py-20 relative">
          <div className="marketing-particles">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="particle marketing-particle"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-2">STRATEGIC</h1>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FFD1D1] via-[#FF5757] to-[#B30000] text-transparent bg-clip-text">
                  MARKETING SOLUTIONS
                </h2>
                <br />
                <p className="text-gray-300 mb-8 max-w-xl">
                  <span className="text-[#FF5757]">Marketing experto</span>,{" "}
                  <span className="text-[#FF5757]">branding</span> y{" "}
                  <span className="text-[#FF5757]">estrategia digital</span> <br />
                  para ayudar a las empresas a construir <br />
                  una presencia de marca poderosa y <br />
                  optimizar su posicionamiento en el mercado.
                </p>

                <div className="flex gap-4 mt-8">
                  <Button
                    variant="default"
                    className="bg-white text-[#B30000] hover:bg-white/90 marketing-shine-effect"
                  >
                    Comenzar
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Saber Más
                  </Button>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="marketing-3d-card">
                  <div className="card-inner">
                    <div className="relative">
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF5757] rounded-full opacity-20 blur-3xl"></div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#B30000] rounded-full opacity-20 blur-3xl"></div>
                      <Image
                        src="/placeholder.svg?height=400&width=500"
                        alt="Soluciones de Marketing"
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

        {/* Marketing Digital y Estrategia */}
        <section className="container mx-auto py-20 px-4 marketing-bg-pattern">
          <h2 className="text-xl font-semibold mb-6 text-right" style={{ marginBottom: "45px", marginTop: "45px" }}>
            MARKETING DIGITAL Y ESTRATEGIA
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="marketing-card p-6 marketing-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Marketing en Redes Sociales</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-md">
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
                    className="text-red-500"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Campañas estratégicas en redes sociales que involucran a tu audiencia, construyen reconocimiento de marca
                y generan interacciones significativas en todas las plataformas.
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
                    className="mr-2 text-[#B30000]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Mayor Compromiso
                </div>
              </div>
            </div>

            <div className="marketing-card p-6 marketing-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Optimización SEO</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-md">
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
                    className="text-orange-500"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Estrategias SEO completas que mejoran tu posicionamiento en buscadores, aumentan el tráfico orgánico
                y mejoran tu visibilidad en línea.
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
                    className="mr-2 text-[#B30000]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Mejor Posicionamiento
                </div>
              </div>
            </div>

            <div className="marketing-card p-6 marketing-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Marketing de Contenidos</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-md">
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
                    className="text-yellow-600"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Estrategias de contenido atractivas que cuentan la historia de tu marca, establecen liderazgo de pensamiento
                y conectan con tu audiencia a un nivel más profundo.
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
                    className="mr-2 text-[#B30000]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Narrativa Compelling
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desarrollo de Marca */}
        <section className="py-20 px-4 marketing-wave-bg bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-xl font-semibold mb-6 text-white" style={{ marginBottom: "45px", marginTop: "45px" }}>
              DESARROLLO DE MARCA
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="marketing-dark-card p-6 rounded-lg text-white">
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold">IDENTIDAD DE MARCA</h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-red-900 rounded-md">
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
                      className="text-red-400"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Desarrollo integral de identidad de marca que crea un lenguaje visual cohesivo, estrategia de mensajería
                  y personalidad de marca.
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
                      className="mr-2 text-red-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Imagen de Marca Memorable
                  </div>
                </div>
              </div>

              <div className="marketing-dark-card p-6 rounded-lg text-white">
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold">INVESTIGACIÓN DE MERCADO</h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-900 rounded-md">
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
                      className="text-orange-400"
                    >
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                      <path d="M9 22h9a2 2 0 0 0 2-2v-7" />
                      <path d="M13 14h4" />
                      <path d="M13 10h4" />
                      <path d="M9 6h1" />
                      <path d="M9 10h1" />
                      <path d="M9 14h1" />
                      <path d="M19 17v5" />
                      <path d="M17 19h4" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Análisis profundo de mercado e investigación de consumidores para identificar oportunidades,
                  entender a tu audiencia e informar decisiones estratégicas.
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
                      className="mr-2 text-orange-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Información de Audiencia
                  </div>
                </div>
              </div>

              <div className="marketing-dark-card p-6 rounded-lg text-white">
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold">ESTRATEGIA DE MARCA</h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-900 rounded-md">
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
                      className="text-yellow-400"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Desarrollo de estrategia de marca integral que posiciona tu negocio para el éxito y crea un
                  camino hacia un crecimiento sostenible.
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
                      className="mr-2 text-yellow-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Posicionamiento Estratégico
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publicidad Digital */}
        <section className="container mx-auto py-20 px-4 marketing-bg-pattern">
          <h2 className="text-xl font-semibold mb-6 text-right" style={{ marginBottom: "45px", marginTop: "45px" }}>
            PUBLICIDAD DIGITAL
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="marketing-card p-6 marketing-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Campañas PPC</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-md">
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
                    className="text-red-500"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Campañas estratégicas de publicidad de pago por clic que se dirigen a tus clientes ideales
                y maximizan el retorno de tu inversión publicitaria.
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
                    className="mr-2 text-[#B30000]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Publicidad Dirigida
                </div>
              </div>
            </div>

            <div className="marketing-card p-6 marketing-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Publicidad Display</h3>
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
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Campañas de anuncios display llamativos que construyen reconocimiento de marca
                y generan engagement en toda la web.
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
                    className="mr-2 text-[#B30000]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Impacto Visual
                </div>
              </div>
            </div>

            <div className="marketing-card p-6 marketing-glow">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Email Marketing</h3>
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Campañas de email marketing dirigidas que nutren leads, construyen relaciones con clientes
                y generan conversiones.
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
                    className="mr-2 text-[#B30000]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Comunicación Personalizada
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#450a0a] to-[#7f1d1d] text-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FF5757]">¿Listo para Elevar tu Marca?</h2>
                <p className="text-gray-300 mb-8">
                  La división de marketing de Velvt Software crea estrategias poderosas para transformar la presencia de tu marca
                  y generar un compromiso significativo con los clientes. Creemos algo extraordinario juntos.
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="default"
                    className="bg-white text-[#B30000] hover:bg-white/90 marketing-shine-effect"
                  >
                    Comenzar
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Saber Más
                  </Button>
                </div>
              </div>

              <div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Únete a Nuestro Equipo</h3>
                  <p className="text-gray-300 mb-6">
                    Únete a nuestro equipo de expertos en marketing innovador que construyen estrategias
                    que impulsan la transformación de marcas.
                  </p>
                  <Button variant="link" className="text-[#FF5757] p-0 mt-2 marketing-shine-effect">
                    Ver vacantes disponibles →
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