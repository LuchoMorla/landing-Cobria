import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Bot, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="flex items-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            <img src="https://cobria.vercel.app/icon.svg" /> Cobria
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#tools" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Herramientas
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Cobranza Extrajudicial Inteligente
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Optimice su proceso de cobranza con nuestra solución automatizada por IA, diseñada para eficiencia y
              bienestar.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              <Link href="https://cobria.vercel.app/" className="flex items-center">
                Comenzar ahora <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Bot className="w-12 h-12 text-blue-600 dark:text-blue-400" />}
                title="Automatización IA"
                description="Utilice la inteligencia artificial para automatizar y optimizar sus procesos de cobranza de manera ética y eficiente."
              />
              <ServiceCard
                icon={<BarChart2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />}
                title="Análisis Predictivo"
                description="Identifique patrones y prediga comportamientos de pago para mejorar la eficiencia y la experiencia del cliente."
              />
              <ServiceCard
                icon={<Zap className="w-12 h-12 text-blue-600 dark:text-blue-400" />}
                title="Comunicación Personalizada"
                description="Genere mensajes personalizados para cada deudor, aumentando las tasas de respuesta y la satisfacción."
              />
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Beneficios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitCard
                title="Mayor Eficiencia"
                description="Reduzca el tiempo y los recursos necesarios para la cobranza, permitiendo a su equipo enfocarse en tareas de alto valor."
              />
              <BenefitCard
                title="Mejores Resultados"
                description="Aumente las tasas de recuperación con estrategias basadas en datos y aprendizaje continuo de la IA."
              />
              <BenefitCard
                title="Experiencia del Cliente"
                description="Mejore la satisfacción del cliente con un enfoque más personalizado y comprensivo en el proceso de cobranza."
              />
              <BenefitCard
                title="Cumplimiento Legal"
                description="Asegure el cumplimiento de las regulaciones de cobranza en todo momento con nuestro sistema actualizado constantemente."
              />
            </div>
          </div>
        </section>

        <section id="tools" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Herramientas de Análisis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ToolCard
                title="Dashboards Interactivos"
                description="Visualice sus datos de cobranza en tiempo real con dashboards personalizables e interactivos."
              />
              <ToolCard
                title="Segmentación Avanzada"
                description="Agrupe a sus deudores en segmentos significativos para estrategias de cobranza más efectivas."
              />
              <ToolCard
                title="Análisis Predictivo"
                description="Utilice modelos de machine learning para predecir la probabilidad de pago y optimizar sus esfuerzos."
              />
              <ToolCard
                title="Reportes Automatizados"
                description="Reciba informes detallados y personalizados automáticamente en su bandeja de entrada."
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contáctenos</h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto">
              ¿Listo para revolucionar su proceso de cobranza con un enfoque ético y eficiente? Póngase en contacto con
              nosotros hoy mismo.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              <Link href="mailto:info@cobria.com" className="flex items-center">
                Contactar <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Cobria. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

function ToolCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

