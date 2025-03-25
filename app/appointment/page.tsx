"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2, Clock } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function AppointmentPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    meetingMethod: "zoom",
    time: "",
    details: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular el agendamiento - en una aplicación real sería una llamada API
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 mt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Agendar una Cita</h1>
            <p className="text-gray-600">Reserva una consulta con nuestros expertos</p>
          </div>

          {!submitted ? (
            <Card className="border-none shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle>Detalles de la Cita</CardTitle>
                <CardDescription>Complete el formulario para agendar su cita</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Juan Pérez"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="focus-within:ring-customPurple mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="focus-within:ring-customPurple mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Número de Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="focus-within:ring-customPurple mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="serviceType">Tipo de Servicio</Label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) => handleSelectChange("serviceType", value)}
                          required
                        >
                          <SelectTrigger id="serviceType" className="focus:ring-customPurple mt-1">
                            <SelectValue placeholder="Seleccione un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="software">Desarrollo de Software</SelectItem>
                            <SelectItem value="marketing">Marketing Digital</SelectItem>
                            <SelectItem value="consulting">Consultoría Empresarial</SelectItem>
                            <SelectItem value="cloud">Implementación en la Nube</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Método de Reunión</Label>
                        <RadioGroup
                          value={formData.meetingMethod}
                          onValueChange={(value) => handleSelectChange("meetingMethod", value)}
                          className="flex space-x-4 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="zoom" id="zoom" />
                            <Label htmlFor="zoom" className="cursor-pointer">
                              Zoom
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="google-meet" id="google-meet" />
                            <Label htmlFor="google-meet" className="cursor-pointer">
                              Google Meet
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="in-person" id="in-person" />
                            <Label htmlFor="in-person" className="cursor-pointer">
                              En Persona
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label>Fecha de la Cita</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal mt-1 focus:ring-customPurple"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Seleccione una fecha</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) => {
                                // Deshabilitar fines de semana y fechas pasadas
                                const day = date.getDay()
                                const today = new Date()
                                today.setHours(0, 0, 0, 0)
                                return date < today || day === 0 || day === 6
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label>Horarios Disponibles</Label>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              type="button"
                              variant={formData.time === time ? "default" : "outline"}
                              className={`flex items-center justify-center py-2 ${
                                formData.time === time
                                  ? "bg-customPurple hover:bg-customPurple/90"
                                  : "hover:bg-gray-100"
                              }`}
                              onClick={() => handleSelectChange("time", time)}
                            >
                              <Clock className="h-3 w-3 mr-1" />
                              <span className="text-xs">{time}</span>
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="details">Detalles Adicionales</Label>
                        <Textarea
                          id="details"
                          name="details"
                          placeholder="Por favor comparta cualquier detalle específico o preguntas sobre su proyecto..."
                          value={formData.details}
                          onChange={handleChange}
                          className="focus-within:ring-customPurple mt-1"
                          rows={5}
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-customPurple hover:bg-opacity-90 btn-glow mt-6"
                    disabled={isLoading || !date || !formData.time || !formData.serviceType}
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
                        Agendando...
                      </div>
                    ) : (
                      "Agendar Cita"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-none shadow-lg animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full bg-green-100 animate-pulse"></div>
                    </div>
                    <CheckCircle2 className="h-16 w-16 text-green-500 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">¡Cita Agendada!</h3>
                  <p className="text-gray-600 mb-6 max-w-md">
                    Su cita ha sido agendada para el{" "}
                    <span className="font-medium">{date && format(date, "MMMM d, yyyy")}</span> a las{" "}
                    <span className="font-medium">{formData.time}</span>
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg w-full max-w-md mb-6">
                    <h4 className="font-semibold text-lg mb-4 text-left">Detalles de la Cita</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Servicio:</span>
                        <span className="font-medium">
                          {formData.serviceType === "software"
                            ? "Desarrollo de Software"
                            : formData.serviceType === "marketing"
                              ? "Marketing Digital"
                              : formData.serviceType === "consulting"
                                ? "Consultoría Empresarial"
                                : formData.serviceType === "cloud"
                                  ? "Implementación en la Nube"
                                  : "Soluciones de IA"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Método:</span>
                        <span className="font-medium">
                          {formData.meetingMethod === "zoom"
                            ? "Zoom"
                            : formData.meetingMethod === "google-meet"
                              ? "Google Meet"
                              : "En Persona"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Nombre:</span>
                        <span className="font-medium">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-6">
                    Hemos enviado un correo de confirmación con todos los detalles a su dirección de email.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                    <Button
                      variant="outline"
                      className="flex-1 border-customPurple text-customPurple hover:bg-purple-50"
                      onClick={() => router.push("/")}
                    >
                      Volver al Inicio
                    </Button>
                    <Button
                      className="flex-1 bg-customPurple hover:bg-opacity-90 btn-glow"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          serviceType: "",
                          meetingMethod: "zoom",
                          time: "",
                          details: "",
                        })
                        setDate(undefined)
                      }}
                    >
                      Agendar Otra Cita
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}