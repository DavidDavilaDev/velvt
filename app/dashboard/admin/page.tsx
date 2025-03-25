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
  Users,
  BarChart3,
  User,
  LogOut,
  Settings,
  PlusCircle,
  CheckCircle,
  Clock3,
  MessageSquare,
  Bell,
  Briefcase,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboardPage() {
  const router = useRouter()

  // Datos de ejemplo para citas
  const appointments = [
    {
      id: 1,
      client: "Juan Pérez",
      date: "15 Mayo 2023",
      time: "10:00 AM",
      service: "Desarrollo de Software",
      consultant: "Carlos Rodríguez",
      status: "completed",
    },
    {
      id: 2,
      client: "María González",
      date: "10 Junio 2023",
      time: "2:30 PM",
      service: "Marketing Digital",
      consultant: "Laura Gómez",
      status: "completed",
    },
    {
      id: 3,
      client: "Pedro Martínez",
      date: "5 Julio 2023",
      time: "11:00 AM",
      service: "Consultoría Empresarial",
      consultant: "Ana Martínez",
      status: "upcoming",
    },
    {
      id: 4,
      client: "Ana Sánchez",
      date: "8 Julio 2023",
      time: "3:00 PM",
      service: "Implementación en la Nube",
      consultant: "Miguel Sánchez",
      status: "upcoming",
    },
  ]

  // Datos de ejemplo para clientes
  const clients = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan.perez@ejemplo.com",
      projects: 2,
      status: "active",
    },
    {
      id: 2,
      name: "María González",
      email: "maria.gonzalez@ejemplo.com",
      projects: 1,
      status: "active",
    },
    {
      id: 3,
      name: "Pedro Martínez",
      email: "pedro.martinez@ejemplo.com",
      projects: 3,
      status: "active",
    },
  ]

  // Datos de ejemplo para proyectos
  const projects = [
    {
      id: 1,
      name: "Sitio de E-commerce",
      client: "Juan Pérez",
      startDate: "15 Abril 2023",
      deadline: "30 Julio 2023",
      progress: 65,
      status: "in-progress",
    },
    {
      id: 2,
      name: "Campaña SEO",
      client: "María González",
      startDate: "20 Mayo 2023",
      deadline: "15 Agosto 2023",
      progress: 40,
      status: "in-progress",
    },
    {
      id: 3,
      name: "Desarrollo de App Móvil",
      client: "Pedro Martínez",
      startDate: "10 Marzo 2023",
      deadline: "25 Junio 2023",
      progress: 90,
      status: "in-progress",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 mt-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Barra lateral */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Administrador" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">Admin Panel</h2>
                  <p className="text-gray-500 text-sm">admin@velvtsoftware.com</p>
                  <Badge className="mt-2 bg-customPurple">Administrador</Badge>
                </div>

                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/admin">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/admin/appointments">
                      <Calendar className="mr-2 h-4 w-4" />
                      Citas
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/admin/clients">
                      <Users className="mr-2 h-4 w-4" />
                      Clientes
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/admin/projects">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Proyectos
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/admin/consultants">
                      <User className="mr-2 h-4 w-4" />
                      Consultores
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/admin/messages">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Mensajes
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/admin/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Configuración
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
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Notificaciones</h3>
                    <Badge className="bg-white text-purple-600 hover:bg-white/90">3</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Bell className="h-5 w-5 text-white mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Nueva solicitud de cita</p>
                        <p className="text-xs text-white/70">Hace 5 minutos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Users className="h-5 w-5 text-white mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Nuevo cliente registrado</p>
                        <p className="text-xs text-white/70">Hace 1 hora</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contenido principal */}
            <div className="md:col-span-4 space-y-6">
              {/* Tarjeta de bienvenida */}
              <Card className="border-none shadow-md bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -mt-10 -mr-10 opacity-50"></div>
                <CardContent className="p-6 relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="text-2xl font-bold mb-2">Panel de Administración</h1>
                      <p className="text-gray-600 mb-4">Gestiona citas, clientes y proyectos.</p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="border-customPurple text-customPurple hover:bg-purple-50"
                        onClick={() => router.push("/dashboard/admin/clients/new")}
                      >
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Añadir Cliente
                      </Button>
                      <Button
                        className="bg-customPurple hover:bg-opacity-90 btn-glow"
                        onClick={() => router.push("/appointment")}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Agendar Cita
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tarjetas de estadísticas */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Clientes Totales</p>
                        <h3 className="text-3xl font-bold">{clients.length}</h3>
                      </div>
                      <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-customPurple" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Proyectos Activos</p>
                        <h3 className="text-3xl font-bold">{projects.length}</h3>
                      </div>
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-blue-600" />
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
                        <Calendar className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Consultores</p>
                        <h3 className="text-3xl font-bold">4</h3>
                      </div>
                      <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-yellow-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pestañas para Citas, Clientes y Proyectos */}
              <Tabs defaultValue="appointments" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger
                    value="appointments"
                    className="data-[state=active]:bg-customPurple data-[state=active]:text-white"
                  >
                    Citas
                  </TabsTrigger>
                  <TabsTrigger
                    value="clients"
                    className="data-[state=active]:bg-customPurple data-[state=active]:text-white"
                  >
                    Clientes
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="data-[state=active]:bg-customPurple data-[state=active]:text-white"
                  >
                    Proyectos
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="appointments">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Citas Recientes</CardTitle>
                      <CardDescription>Visualiza y gestiona citas programadas</CardDescription>
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
                                <h4 className="font-medium">{appointment.client}</h4>
                                <p className="text-sm text-gray-500">
                                  {appointment.service} el {appointment.date} a las {appointment.time}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">Consultor: {appointment.consultant}</p>
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
                        onClick={() => router.push("/dashboard/admin/appointments")}
                      >
                        Ver Todas las Citas
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="clients">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Clientes Recientes</CardTitle>
                      <CardDescription>Visualiza y gestiona información de clientes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {clients.map((client) => (
                          <div
                            key={client.id}
                            className="p-4 border border-gray-200 rounded-lg hover:border-customPurple transition-colors flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                          >
                            <div className="flex items-start gap-4">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-purple-100 text-customPurple">
                                  {client.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{client.name}</h4>
                                <p className="text-sm text-gray-500">{client.email}</p>
                                <p className="text-xs text-gray-400 mt-1">{client.projects} proyectos activos</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Activo
                              </Badge>
                              <Button variant="ghost" size="sm" className="text-gray-500">
                                Ver
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
                        onClick={() => router.push("/dashboard/admin/clients")}
                      >
                        Ver Todos los Clientes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="projects">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Proyectos Activos</CardTitle>
                      <CardDescription>Sigue y gestiona proyectos en curso</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {projects.map((project) => (
                          <div
                            key={project.id}
                            className="p-4 border border-gray-200 rounded-lg hover:border-customPurple transition-colors"
                          >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                              <div>
                                <h4 className="font-medium">{project.name}</h4>
                                <p className="text-sm text-gray-500">Cliente: {project.client}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {project.startDate} - {project.deadline}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">En Progreso</Badge>
                                <Button variant="ghost" size="sm" className="text-gray-500">
                                  Detalles
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>Progreso</span>
                                <span>{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-customPurple text-customPurple hover:bg-purple-50"
                        onClick={() => router.push("/dashboard/admin/projects")}
                      >
                        Ver Todos los Proyectos
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