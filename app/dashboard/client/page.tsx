"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  Calendar,
  Clock,
  MessageSquare,
  FileText,
  BarChart3,
  User,
  LogOut,
  PlusCircle,
  CheckCircle,
  Clock3,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ClientDashboardPage() {
  const router = useRouter()

  // Datos de ejemplo para citas
  const appointments = [
    {
      id: 1,
      date: "15 Mayo 2023",
      time: "10:00 AM",
      service: "Desarrollo de Software",
      consultant: "Carlos Rodríguez",
      status: "completed",
    },
    {
      id: 2,
      date: "10 Junio 2023",
      time: "2:30 PM",
      service: "Marketing Digital",
      consultant: "Laura Gómez",
      status: "completed",
    },
    {
      id: 3,
      date: "5 Julio 2023",
      time: "11:00 AM",
      service: "Consultoría Empresarial",
      consultant: "Ana Martínez",
      status: "upcoming",
    },
  ]

  // Datos de ejemplo para solicitudes de servicio
  const serviceRequests = [
    {
      id: 1,
      title: "Desarrollo de Tienda en Línea",
      description: "Desarrollo de una tienda online con integración de pagos",
      date: "20 Abril 2023",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Optimización SEO",
      description: "Mejorar posicionamiento en buscadores para el sitio web",
      date: "15 Junio 2023",
      status: "pending",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 mt-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Barra lateral */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Usuario" />
                    <AvatarFallback>DD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">David Dávila</h2>
                  <p className="text-gray-500 text-sm">david.dev@ejemplo.com</p>
                </div>

                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/client">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Panel
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/client/appointments">
                      <Calendar className="mr-2 h-4 w-4" />
                      Citas
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/client/services">
                      <FileText className="mr-2 h-4 w-4" />
                      Solicitudes
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/client/messages">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Mensajes
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/client/profile">
                      <User className="mr-2 h-4 w-4" />
                      Perfil
                    </Link>
                  </Button>
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() => router.push("/auth/login")}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar Sesión
                  </Button>
                </div>
              </div>

              <Card className="border-none shadow-md bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">¿Necesitas ayuda?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Nuestro equipo está aquí para ayudarte con cualquier pregunta o inquietud.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contactar Soporte
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contenido principal */}
            <div className="md:col-span-3 space-y-6">
              {/* Tarjeta de bienvenida */}
              <Card className="border-none shadow-md bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -mt-10 -mr-10 opacity-50"></div>
                <CardContent className="p-6 relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="text-2xl font-bold mb-2">¡Bienvenido de nuevo, David!</h1>
                      <p className="text-gray-600 mb-4">Aquí tienes un resumen de tu actividad con Velvt Software.</p>
                    </div>
                    <Button
                      className="bg-customPurple hover:bg-opacity-90 btn-glow"
                      onClick={() => router.push("/appointment")}
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Agendar Cita
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tarjetas de estadísticas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Citas Totales</p>
                        <h3 className="text-3xl font-bold">{appointments.length}</h3>
                      </div>
                      <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-customPurple" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Servicios Activos</p>
                        <h3 className="text-3xl font-bold">
                          {serviceRequests.filter((r) => r.status === "in-progress").length}
                        </h3>
                      </div>
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Citas Pendientes</p>
                        <h3 className="text-3xl font-bold">
                          {appointments.filter((a) => a.status === "upcoming").length}
                        </h3>
                      </div>
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pestañas para Citas y Solicitudes de Servicio */}
              <Tabs defaultValue="appointments" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger
                    value="appointments"
                    className="data-[state=active]:bg-customPurple data-[state=active]:text-white"
                  >
                    Citas
                  </TabsTrigger>
                  <TabsTrigger
                    value="services"
                    className="data-[state=active]:bg-customPurple data-[state=active]:text-white"
                  >
                    Solicitudes
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="appointments">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Citas Recientes</CardTitle>
                      <CardDescription>Visualiza y gestiona tus citas programadas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {appointments.map((appointment) => (
                          <div
                            key={appointment.id}
                            className="p-4 border border-gray-200 rounded-lg hover:border-customPurple transition-colors flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                          >
                            <div className="flex items-start gap-4">
                              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                <Calendar className="h-5 w-5 text-customPurple" />
                              </div>
                              <div>
                                <h4 className="font-medium">{appointment.service}</h4>
                                <p className="text-sm text-gray-500">
                                  {appointment.date} a las {appointment.time} con {appointment.consultant}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                className={`${
                                  appointment.status === "completed"
                                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                                    : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                }`}
                              >
                                {appointment.status === "completed" ? (
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                ) : (
                                  <Clock3 className="h-3 w-3 mr-1" />
                                )}
                                {appointment.status === "completed" ? "Completada" : "Pendiente"}
                              </Badge>
                              <Button variant="ghost" size="sm" className="text-gray-500">
                                Detalles
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-customPurple text-customPurple hover:bg-purple-50"
                        onClick={() => router.push("/dashboard/client/appointments")}
                      >
                        Ver Todas las Citas
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="services">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Solicitudes de Servicio</CardTitle>
                      <CardDescription>Sigue el estado de tus solicitudes de servicio</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {serviceRequests.map((request) => (
                          <div
                            key={request.id}
                            className="p-4 border border-gray-200 rounded-lg hover:border-customPurple transition-colors flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                          >
                            <div className="flex items-start gap-4">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <FileText className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-medium">{request.title}</h4>
                                <p className="text-sm text-gray-500">{request.description}</p>
                                <p className="text-xs text-gray-400 mt-1">Solicitado el {request.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                className={`${
                                  request.status === "in-progress"
                                    ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                    : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                }`}
                              >
                                {request.status === "in-progress" ? "En Progreso" : "Pendiente"}
                              </Badge>
                              <Button variant="ghost" size="sm" className="text-gray-500">
                                Detalles
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-customPurple text-customPurple hover:bg-purple-50"
                        onClick={() => router.push("/dashboard/client/services")}
                      >
                        Ver Todas las Solicitudes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}