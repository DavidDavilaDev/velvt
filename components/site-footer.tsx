"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteFooter() {
  const pathname = usePathname()
  const isMarketing = pathname === "/marketing"
  const accentColor = isMarketing ? "customRed" : "customPurple"

  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/velvt_11-TCP01WCXp7jjAUls1FQiKAHwKOsUbr.png"
                alt="Logo de Velvt"
                width={22}
                height={22}
                className="object-contain"
              />
              <span className="font-semibold text-lg">Velvt</span>
            </div>
            <p className="text-sm text-gray-600">
              Soluciones de software expertas y servicios de consultoría, ayudando a empresas a construir productos innovadores.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <div className="space-y-2">
              <Link href="/software" className={`text-sm text-gray-600 hover:text-${accentColor} block`}>
                Desarrollo de Software
              </Link>
              <Link href="/marketing" className={`text-sm text-gray-600 hover:text-${accentColor} block`}>
                Marketing Digital
              </Link>
              <Link href="#" className={`text-sm text-gray-600 hover:text-${accentColor} block`}>
                Consultoría
              </Link>
              <Link href="#" className={`text-sm text-gray-600 hover:text-${accentColor} block`}>
                Soluciones en la Nube
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <div className="space-y-2">
              <Link href="#nosotros" className={`text-sm text-gray-600 hover:text-${accentColor} block`}>
                Sobre Nosotros
              </Link>
              <Link href="#portafolio" className={`text-sm text-gray-600 hover:text-${accentColor} block`}>
                Portafolio
              </Link>
              <Link href="#blog" className={`text-sm text-gray-600 hover:text-${accentColor} block`}>
                Blog
              </Link>
              <Link href="#" className={`text-sm text-gray-600 hover:text-${accentColor} block`}>
                Carreras
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-gray-600 mb-2">velvtconsultoria@outlook.com</p>
            <p className="text-sm text-gray-600 mb-4">+1 (555) 123-4567</p>

            <div className="flex space-x-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className={`w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-${accentColor} hover:text-white transition-colors`}
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

        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
          <div>© {new Date().getFullYear()} Velvt. Todos los derechos reservados.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}