import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Velvt Consultoría",
  description:
    "Soluciones de software expertas y servicios de consultoría, ayudando a empresas a construir productos innovadores y plataformas que impulsan el crecimiento digital.",
    icons: {
      icon: "/https://hebbkx1anhila5yf.public.blob.vercel-storage.com/velvt_11-TCP01WCXp7jjAUls1FQiKAHwKOsUbr.png", // Ruta al favicon
      shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/velvt_11-TCP01WCXp7jjAUls1FQiKAHwKOsUbr.png", // Ruta a una versión alternativa del logo
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}