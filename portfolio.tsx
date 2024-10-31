import { Github, Linkedin, Mail, Briefcase, Code, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Bilal BEJJA</h1>
          <p className="text-xl text-gray-600">Desarrollador Web</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sobre mí</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Soy un desarrollador web apasionado con experiencia en proyectos de gran escala. 
                Actualmente trabajo en Capgemini, donde he tenido la oportunidad de participar 
                en proyectos importantes y asumir responsabilidades crecientes.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experiencia Laboral</h2>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2" />
                Capgemini
              </CardTitle>
              <CardDescription>2021 - Presente</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600">
                <li>Responsable de una aplicación principal</li>
                <li>Realización de migraciones en múltiples proyectos</li>
                <li>Manejo de incidencias y soporte técnico</li>
                <li>Trabajo en proyectos franceses como CNAM (referencial médico) y CNAF (portal agent flux sortants)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Educación</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2" />
                Formación Profesional en Desarrollo de Aplicaciones Web
              </CardTitle>
              <CardDescription>Finalizado en 2021</CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" />
                  CNAM - Referencial Médico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participación en el desarrollo y mantenimiento del sistema de referencia médica para la CNAM francesa.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" />
                  CNAF - Portal Agent Flux Sortants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Desarrollo de funcionalidades para el portal de agentes de flujos salientes de la CNAF.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
