"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular inicio de sesión - en producción sería una llamada API
    setTimeout(() => {
      setIsLoading(false)
      // Redirección según rol (determinado por la respuesta del backend)
      if (email.includes("admin")) {
        router.push("/dashboard/admin")
      } else if (email.includes("consultant")) {
        router.push("/dashboard/consultant")
      } else {
        router.push("/dashboard/client")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 mt-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Bienvenido de nuevo</h1>
            <p className="text-gray-600">Inicia sesión para acceder a tu cuenta</p>
          </div>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger 
                value="email" 
                className="data-[state=active]:bg-customPurple data-[state=active]:text-white"
                aria-label="Iniciar con correo electrónico"
              >
                Correo
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="data-[state=active]:bg-customPurple data-[state=active]:text-white"
                aria-label="Iniciar con redes sociales"
              >
                Redes Sociales
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <Card className="border-none shadow-lg animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl">Iniciar Sesión</CardTitle>
                  <CardDescription>Ingresa tus credenciales para acceder</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ejemplo@dominio.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="focus-within:ring-customPurple"
                        aria-describedby="email-help"
                      />
                      <p id="email-help" className="text-xs text-gray-500">
                        Ingresa el correo con el que te registraste
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Contraseña</Label>
                        <Link 
                          href="/auth/reset-password" 
                          className="text-sm text-customPurple hover:underline"
                          aria-label="Recuperar contraseña"
                        >
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="focus-within:ring-customPurple"
                        minLength={8}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" aria-label="Recordar mis datos" />
                      <Label htmlFor="remember" className="text-sm">
                        Recordar mis datos
                      </Label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-customPurple hover:bg-opacity-90 btn-glow"
                      disabled={isLoading}
                      aria-busy={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
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
                          Iniciando sesión...
                        </div>
                      ) : (
                        "Iniciar Sesión"
                      )}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="text-center text-sm text-gray-600">
                    ¿No tienes una cuenta?{" "}
                    <Link 
                      href="/auth/register" 
                      className="text-customPurple hover:underline"
                      aria-label="Registrarse"
                    >
                      Regístrate aquí
                    </Link>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-customPurple text-customPurple hover:bg-purple-50"
                    onClick={() => router.push("/appointment")}
                    aria-label="Agendar una cita"
                  >
                    Agendar Cita
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="social">
              <Card className="border-none shadow-lg animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl">Inicio con Redes Sociales</CardTitle>
                  <CardDescription>Continúa con tu cuenta preferida</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/dashboard/admin">
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center space-x-2 h-12 border-gray-300 hover:bg-gray-50"
                      onClick={() => setIsLoading(true)}
                      aria-label="Continuar con Google"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      <span>Continuar con Google</span>
                    </Button>
                  </Link>
                  
                  <Link href="/dashboard/client" >
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center space-x-2 h-12 border-gray-300 hover:bg-gray-50"
                      onClick={() => setIsLoading(true)}
                      aria-label="Continuar con Facebook"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path
                          d="M24 12.073C24 5.446 18.627 0.073 12 0.073C5.373 0.073 0 5.446 0 12.073C0 18.063 4.388 23.027 10.125 23.927V15.542H7.078V12.072H10.125V9.43C10.125 6.423 11.917 4.761 14.658 4.761C15.97 4.761 17.344 4.996 17.344 4.996V7.949H15.83C14.34 7.949 13.875 8.874 13.875 9.823V12.073H17.203L16.67 15.543H13.875V23.928C19.612 23.027 24 18.062 24 12.073Z"
                          fill="#1877F2"
                        />
                      </svg>
                      <span>Continuar con Facebook</span>
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center space-x-2 h-12 border-gray-300 hover:bg-gray-50"
                    onClick={() => setIsLoading(true)}
                    aria-label="Continuar con Apple"
                    disabled
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path
                        d="M17.2239 12.9253C17.2068 12.2466 17.3936 11.5773 17.7674 11.0013C18.1411 10.4253 18.6849 9.97179 19.3239 9.70131C18.9477 9.16331 18.4436 8.71631 17.8541 8.39531C17.2646 8.07431 16.6057 7.88931 15.9339 7.85531C14.4519 7.69731 13.0159 8.74931 12.2559 8.74931C11.4799 8.74931 10.3119 7.87731 9.05991 7.90131C8.26722 7.92557 7.49993 8.15753 6.83991 8.57531C6.17989 8.99309 5.65078 9.58109 5.31191 10.2773C4.25191 12.4493 5.00791 15.6973 6.01591 17.4493C6.51991 18.3093 7.12791 19.2613 7.94391 19.2253C8.73591 19.1853 9.09591 18.7133 10.0559 18.7133C11.0039 18.7133 11.3399 19.2253 12.1679 19.2013C13.0159 19.1853 13.5399 18.3453 14.0279 17.4733C14.6079 16.4653 14.8959 15.4813 14.9159 15.4093C14.8959 15.3973 12.7559 14.6053 12.7359 12.4493C12.7159 10.6053 14.4159 9.65331 14.4959 9.59931C13.7959 8.54931 12.7119 8.39931 12.2559 8.36331C10.8119 8.24931 9.53991 9.17331 8.83191 9.17331C8.12391 9.17331 7.05591 8.36331 5.83191 8.36331C5.83191 8.36331 5.83191 8.36331 5.83191 8.36331Z"
                        fill="black"
                      />
                      <path
                        d="M15.1401 6.4413C15.5761 5.9013 15.8081 5.2093 15.7881 4.5013C15.0881 4.5253 14.4241 4.8013 13.9401 5.2813C13.4561 5.7613 13.1881 6.4413 13.2201 7.1253C13.9801 7.1373 14.6801 6.9813 15.1401 6.4413Z"
                        fill="black"
                      />
                    </svg>
                    <span>Continuar con Apple</span>
                  </Button>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="text-center text-sm text-gray-600">
                    ¿No tienes cuenta?{" "}
                    <Link 
                      href="/auth/register" 
                      className="text-customPurple hover:underline"
                      aria-label="Crear una cuenta"
                    >
                      Crear cuenta
                    </Link>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-customPurple text-customPurple hover:bg-purple-50"
                    onClick={() => router.push("/appointment")}
                    aria-label="Agendar una cita"
                  >
                    Agendar Cita
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}