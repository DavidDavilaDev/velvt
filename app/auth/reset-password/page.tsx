"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular solicitud de restablecimiento - en una app real sería una llamada API
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 mt-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Restablecer Contraseña</h1>
            <p className="text-gray-600">Te enviaremos instrucciones para restablecer tu contraseña</p>
          </div>

          <Card className="border-none shadow-lg animate-fade-in">
            {!submitted ? (
              <>
                <CardHeader>
                  <CardTitle>¿Olvidaste tu contraseña?</CardTitle>
                  <CardDescription>
                    Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="focus-within:ring-customPurple"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-customPurple hover:bg-opacity-90 btn-glow mt-4"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando...
                        </div>
                      ) : (
                        "Enviar Enlace"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </>
            ) : (
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Revisa tu correo</h3>
                  <p className="text-gray-600 mb-6">
                    Hemos enviado un enlace para restablecer tu contraseña a <span className="font-medium">{email}</span>
                  </p>
                  <div
                    className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 w-full"
                    role="alert"
                  >
                    <AlertCircle className="flex-shrink-0 inline w-5 h-5 mr-3" />
                    <span className="text-left">
                      Si no ves el correo, revisa tu carpeta de spam o verifica que la dirección sea correcta.
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-customPurple text-customPurple hover:bg-purple-50 mt-2"
                    onClick={() => setSubmitted(false)}
                  >
                    Probar otro correo
                  </Button>
                </div>
              </CardContent>
            )}
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-gray-600">
                ¿Recuerdas tu contraseña?{" "}
                <Link href="/auth/login" className="text-customPurple hover:underline">
                  Volver al inicio de sesión
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}