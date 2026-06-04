"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Bot,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Search,
  MessageSquare,
  BarChart3,
  Users,
  Zap,
  FileText,
  PhoneCall,
  Mail,
  Loader2,
  LogIn,
} from "lucide-react"

// ── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP_DEMO =
  "https://wa.me/593992366527/?text=Hola%2C%20vengo%20de%20la%20landing%20de%20CollectUX%20y%20quiero%20agendar%20una%20demo%20de%2015%20minutos."
const APP_URL = "https://app.collectux.com/register"

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#0a1f6e] font-extrabold text-xl tracking-tight">
            <img src="https://app.collectux.com/icon.svg" alt="CollectUX logo" width={26} height={26} />
            CollectUX
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="#como-funciona" className="hover:text-[#0a1f6e] transition-colors">Cómo funciona</Link>
            <Link href="#agentes"       className="hover:text-[#0a1f6e] transition-colors">Agentes IA</Link>
            <Link href="#beneficios"    className="hover:text-[#0a1f6e] transition-colors">Beneficios</Link>
            <Link href="#faq"           className="hover:text-[#0a1f6e] transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://app.collectux.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-gray-800 transition-colors duration-200 text-sm font-medium"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Iniciar Sesión</span>
            </a>
            <Button asChild size="sm"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-xl px-5 shadow">
              <Link href={WHATSAPP_DEMO} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4 mr-2" /> Agendar Demo
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a1f6e] to-[#1e40af] text-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-14">

            {/* Copy */}
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-5 bg-white/15 text-white text-xs px-3 py-1 rounded-full border-0">
                Plataforma SaaS · Ecuador &amp; LATAM
              </Badge>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                Recupera hasta un{" "}
                <span className="text-[#4ade80]">35% más</span> de tu cartera
                vencida sin saturar a tu equipo.
              </h1>

              <p className="text-lg text-blue-100 mb-8 max-w-xl md:mx-0 mx-auto">
                CollectUX automatiza la cobranza masiva con{" "}
                <strong className="text-white">Agentes de IA éticos y multicanal</strong>{" "}
                — WhatsApp, SMS, Voz y Email — que negocian de forma humana,{" "}
                <strong className="text-white">24/7</strong>, respetando horarios regulatorios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
                <Button asChild size="lg"
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold rounded-xl px-8 py-4 text-base shadow-lg shadow-green-900/30">
                  <Link href={WHATSAPP_DEMO} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-5 h-5 mr-2" /> Agendar Demo de 15 min
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg"
                  className="border-white/30 text-white bg-transparent hover:bg-white/10 rounded-xl px-8 py-4 text-base">
                  <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                    Ver la plataforma <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                {[
                  { v: "35%",    l: "más recuperación" },
                  { v: "24/7",   l: "operación continua" },
                  { v: "Lun–Vie",l: "8 AM–6 PM · normativo" },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <p className="text-2xl font-extrabold text-white">{v}</p>
                    <p className="text-xs text-blue-300 mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Phone Mockup */}
            <div className="flex-shrink-0 w-64 md:w-72">
              <div className="relative mx-auto w-64 md:w-72 bg-[#111827] rounded-[2.75rem] shadow-2xl p-3 border-4 border-[#1f2937]">
                <div className="mx-auto mb-2 w-16 h-1.5 bg-[#374151] rounded-full" />
                <div className="rounded-[2rem] overflow-hidden bg-[#e5ddd5]">
                  <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#25d366] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      AI
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold leading-tight">Agente Sofía · CollectUX</p>
                      <p className="text-green-300 text-xs">En línea</p>
                    </div>
                  </div>
                  <div className="p-3 space-y-2 min-h-[280px]">
                    <WaBubble from="bot">
                      Hola, ¿se encuentra <strong>Carlos Andrade</strong> disponible?
                    </WaBubble>
                    <WaBubble from="user">Sí, soy yo.</WaBubble>
                    <WaBubble from="bot">
                      Buenos días Carlos 😊 Le contacto por una deuda pendiente de{" "}
                      <strong>$1,850</strong> con Cooperativa XYZ. ¿Le gustaría conocer las opciones de pago?
                    </WaBubble>
                    <WaBubble from="user">¿Puedo pagarlo en cuotas?</WaBubble>
                    <WaBubble from="bot">
                      ¡Claro! Puede hacer <strong>3 cuotas</strong>. La primera en Banco
                      Pichincha, cta. corriente <strong>2204500201</strong>. ¿Qué fecha le viene bien?
                    </WaBubble>
                  </div>
                </div>
                <div className="mx-auto mt-2 w-20 h-1 bg-[#374151] rounded-full" />
              </div>
            </div>

          </div>
        </section>

        {/* ── TRUST STRIP ─────────────────────────────────────────── */}
        <section className="py-8 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">
              Diseñado para instituciones financieras reguladas
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Cooperativas de Ahorro y Crédito",
                "Bancos Privados",
                "Fintechs",
                "Estudios Jurídicos",
                "Casas Comerciales",
              ].map((label) => (
                <span key={label}
                  className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ───────────────────────────────────────── */}
        <section id="como-funciona" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-3 bg-blue-100 text-[#0a1f6e] border-0">Proceso simple</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                De la cartera vencida al pago en 3 pasos
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Sin implementaciones largas. Sin integraciones complejas. Listo para operar el mismo día.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: <FileText className="w-7 h-7 text-[#0a1f6e]" />,
                  title: "Sube tu cartera",
                  desc: "Importa tus deudores desde un archivo Excel. El sistema procesa nombres, cédulas, montos y notas de forma automática.",
                },
                {
                  step: "02",
                  icon: <Bot className="w-7 h-7 text-[#0a1f6e]" />,
                  title: "El agente IA contacta",
                  desc: "Gemini AI genera mensajes personalizados para cada deudor. El bot negocia por WhatsApp, SMS, email o voz — dentro del horario legal.",
                },
                {
                  step: "03",
                  icon: <CheckCircle2 className="w-7 h-7 text-[#0a1f6e]" />,
                  title: "Supervisa y aprueba",
                  desc: "Los comprobantes de pago llegan al dashboard. Tu equipo aprueba o rechaza con trazabilidad completa — quién, cuándo y por qué.",
                },
              ].map(({ step, icon, title, desc }) => (
                <div key={step} className="relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                  <span className="absolute -top-4 left-6 bg-[#0a1f6e] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Paso {step}
                  </span>
                  <div className="mb-4 mt-2 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AGENTES IA ──────────────────────────────────────────── */}
        <section id="agentes" className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-3 bg-purple-100 text-purple-700 border-0">Agentes como Servicio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Elige el agente según la etapa de tu cartera
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Cada agente está entrenado para una fase específica del cobro. Tu defines la estrategia — ellos ejecutan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AgentCard
                emoji="😊"
                badge="Mora Temprana"
                badgeClass="bg-blue-100 text-blue-700"
                name="Agente Sofía"
                channels={[
                  { icon: <MessageSquare className="w-3.5 h-3.5" />, label: "WhatsApp" },
                  { icon: <Mail className="w-3.5 h-3.5" />, label: "Email" },
                  { icon: <FileText className="w-3.5 h-3.5" />, label: "SMS" },
                ]}
                bullets={[
                  "Recordatorios preventivos y amigables",
                  "Genera compromisos en los primeros 30 días",
                  "Tono cálido que cuida la relación",
                ]}
              />
              <AgentCard
                emoji="🤝"
                badge="Negociación Avanzada"
                badgeClass="bg-purple-100 text-purple-700"
                name="Agente Mateo"
                featured
                channels={[
                  { icon: <MessageSquare className="w-3.5 h-3.5" />, label: "WhatsApp" },
                  { icon: <PhoneCall className="w-3.5 h-3.5" />, label: "Voz" },
                  { icon: <FileText className="w-3.5 h-3.5" />, label: "SMS" },
                ]}
                bullets={[
                  "Maneja objeciones complejas sin presión",
                  "Propone cuotas flexibles con fechas concretas",
                  "Cierra acuerdos de pago estructurados",
                ]}
              />
              <AgentCard
                emoji="✅"
                badge="Validación Automática"
                badgeClass="bg-green-100 text-green-700"
                name="Agente Aurora"
                channels={[
                  { icon: <MessageSquare className="w-3.5 h-3.5" />, label: "WhatsApp" },
                  { icon: <Search className="w-3.5 h-3.5" />, label: "IA-OCR" },
                ]}
                bullets={[
                  "Recibe y analiza comprobantes de pago",
                  "OCR identifica monto, banco y fecha",
                  "Pasa al supervisor con un click para aprobar",
                ]}
              />
            </div>
          </div>
        </section>

        {/* ── BENEFICIOS ──────────────────────────────────────────── */}
        <section id="beneficios" className="py-20 px-6 bg-[#0a1f6e] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-3 bg-white/15 text-white border-0">Por qué CollectUX</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Beneficios concretos para tu institución
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <BarChart3 className="w-6 h-6 text-[#4ade80]" />,
                  title: "Recuperación acelerada",
                  desc: "Más contactos en menos tiempo. El bot no descansa, no olvida y no se frustra — tu cartera se gestiona de forma continua.",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#4ade80]" />,
                  title: "Cumplimiento legal garantizado",
                  desc: "Opera solo Lunes a Viernes de 8 AM a 6 PM. Historial de cada interacción disponible para auditorías de la SEPS o SBS.",
                },
                {
                  icon: <Users className="w-6 h-6 text-[#4ade80]" />,
                  title: "Tu equipo enfocado en lo que importa",
                  desc: "Los gestores se concentran en casos de alto valor. Las tareas repetitivas las hace la IA — sin fatiga, sin errores.",
                },
                {
                  icon: <Search className="w-6 h-6 text-[#4ade80]" />,
                  title: "Skip Tracing para deudores desaparecidos",
                  desc: "¿El número cambió? El módulo de enriquecimiento de datos rastrea teléfonos alternativos por cédula usando créditos prepagados.",
                },
                {
                  icon: <Zap className="w-6 h-6 text-[#4ade80]" />,
                  title: "Listo para operar desde el primer día",
                  desc: "Sin implementaciones de meses. Sube tu cartera en Excel y el sistema opera automáticamente con horarios preconfigurados.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-[#4ade80]" />,
                  title: "Reportes scannables para tu gerencia",
                  desc: "Dashboard con Mora Total, Monto Recuperado, Eficiencia del Bot y Créditos de Rastreo. Lista para presentar en directorio.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title}
                  className="flex gap-5 bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition-colors">
                  <div className="flex-shrink-0 w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CUMPLIMIENTO LEGAL ──────────────────────────────────── */}
        <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-[#0a1f6e] mx-auto mb-5" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              La IA opera dentro de los estándares normativos
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-10">
              Tu institución protegida. Tu reputación intacta.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  emoji: "🕐",
                  title: "Horarios regulatorios",
                  desc: "El bot contacta únicamente de Lunes a Viernes, 8:00 AM – 6:00 PM. Sin fines de semana, sin madrugadas.",
                },
                {
                  emoji: "📋",
                  title: "Auditoría completa",
                  desc: "Cada mensaje, comprobante y decisión queda registrada con fecha, hora y responsable. Lista para inspecciones regulatorias.",
                },
                {
                  emoji: "🤝",
                  title: "Cobranza ética",
                  desc: "El agente de IA no amenaza, no presiona ni negocia condonación de deuda. Respeta las normas de trato digno al deudor.",
                },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl mb-4 block">{emoji}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEAD CAPTURE ────────────────────────────────────────── */}
        <section id="demo" className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-3 bg-green-100 text-green-700 border-0">Acceso anticipado</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para ver CollectUX en acción?
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              Deja tu email y te agendamos una demo personalizada de 15 minutos.
              Sin compromisos — solo resultados concretos para tu cartera.
            </p>
            <LeadCaptureForm />
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section id="faq" className="py-20 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-3 bg-gray-100 text-gray-700 border-0">Preguntas frecuentes</Badge>
              <h2 className="text-3xl font-bold">¿Tienes dudas? Te las resolvemos</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ_ITEMS.map(({ q, a }, i) => (
                <AccordionItem key={i} value={`item-${i}`}
                  className="border border-gray-100 rounded-xl px-5 shadow-sm bg-white data-[state=open]:shadow-md transition-shadow">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── CTA FINAL ───────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-gradient-to-br from-[#0a1f6e] to-[#1e40af] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              ¿Listo para que la IA trabaje en tu cartera?
            </h2>
            <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10">
              Una demo de <strong className="text-white">15 minutos</strong> con pantalla compartida.
              Sin compromisos. Sin jerga técnica. Solo resultados concretos.
            </p>
            <Button asChild size="lg"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-green-900/40">
              <Link href={WHATSAPP_DEMO} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 mr-2" /> Agendar Demo de 15 Minutos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <p className="mt-6 text-blue-300 text-sm">
              O escríbenos:{" "}
              <a href="mailto:info@collectux.com" className="text-white underline hover:text-green-300 transition-colors">
                info@collectux.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#050e30] text-gray-400 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">Cobria S.A.S.</p>
            <p className="text-sm">RUC: 1793227195001</p>
            <p className="text-sm">Quito — Ecuador</p>
            <a href="mailto:info@collectux.com"
              className="text-sm text-gray-400 hover:text-white transition-colors">
              info@collectux.com
            </a>
          </div>
          <div className="text-sm md:text-right">
            <p>&copy; {new Date().getFullYear()} Cobria S.A.S. Todos los derechos reservados.</p>
            <p className="mt-1 text-xs text-gray-500">
              Plataforma SaaS de cobranza con IA · Ecuador &amp; LATAM
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ── Lead Capture Form ─────────────────────────────────────────────────────────

function LeadCaptureForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !name) return

    setStatus("loading")
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://collectux-api.up.railway.app"
      const res = await fetch(`${backendUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company }),
      })

      if (res.ok) {
        setStatus("success")
        setMessage("¡Perfecto! Te contactaremos en menos de 24 horas para agendar tu demo.")
        setEmail("")
        setName("")
        setCompany("")
      } else {
        throw new Error("Error del servidor")
      }
    } catch {
      // Fallback: abrir WhatsApp con los datos
      const text = encodeURIComponent(
        `Hola, me llamo ${name} de ${company || "mi empresa"} y quiero una demo de CollectUX. Mi email: ${email}`
      )
      window.open(`https://wa.me/593992366527/?text=${text}`, "_blank")
      setStatus("success")
      setMessage("Te redirigimos a WhatsApp para coordinar tu demo.")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <p className="text-green-800 font-semibold text-lg">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Tu nombre *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="rounded-xl border-gray-200 h-12 text-base"
      />
      <Input
        type="email"
        placeholder="Tu email corporativo *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded-xl border-gray-200 h-12 text-base"
      />
      <Input
        type="text"
        placeholder="Nombre de tu empresa (opcional)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="rounded-xl border-gray-200 h-12 text-base"
      />
      <Button
        type="submit"
        disabled={status === "loading" || !email || !name}
        size="lg"
        className="bg-[#0a1f6e] hover:bg-[#0d2a8a] text-white font-bold rounded-xl px-8 h-12 text-base shadow-lg"
      >
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...</>
        ) : (
          <>Solicitar mi demo gratis <ArrowRight className="w-4 h-4 ml-2" /></>
        )}
      </Button>
      {status === "error" && (
        <p className="text-red-500 text-sm">{message}</p>
      )}
      <p className="text-xs text-gray-400 mt-1">
        Sin spam. Solo te contactamos para coordinar la demo.
      </p>
    </form>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function WaBubble({
  from,
  children,
}: {
  from: "bot" | "user"
  children: React.ReactNode
}) {
  return (
    <div className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed shadow-sm ${
          from === "bot"
            ? "bg-white text-gray-800 rounded-tl-none"
            : "bg-[#dcf8c6] text-gray-800 rounded-tr-none"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

function AgentCard({
  emoji,
  badge,
  badgeClass,
  name,
  channels,
  bullets,
  featured = false,
}: {
  emoji: string
  badge: string
  badgeClass: string
  name: string
  channels: { icon: React.ReactNode; label: string }[]
  bullets: string[]
  featured?: boolean
}) {
  return (
    <div
      className={`relative flex flex-col bg-white border rounded-2xl p-7 transition-shadow hover:shadow-lg ${
        featured
          ? "border-[#0a1f6e] shadow-lg ring-2 ring-[#0a1f6e]/10"
          : "border-gray-100 shadow-sm"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a1f6e] text-white text-xs font-bold px-4 py-1 rounded-full">
          Más popular
        </span>
      )}
      <span className="text-4xl mb-4 block">{emoji}</span>
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-2 ${badgeClass}`}>
        {badge}
      </span>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{name}</h3>
      <ul className="space-y-2 mb-5 flex-grow">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
        {channels.map(({ icon, label }) => (
          <span key={label}
            className="flex items-center gap-1.5 text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
            {icon} {label}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "¿CollectUX reemplaza a mis gestores de cobranza?",
    a: "No. CollectUX potencia a tu equipo. La IA maneja el contacto masivo y repetitivo, mientras tus gestores se enfocan en casos de alto valor, negociaciones complejas y aprobación de pagos. Es una alianza, no un reemplazo.",
  },
  {
    q: "¿Cuánto tiempo toma implementar CollectUX?",
    a: "El primer día. Registras tu empresa, subes tu cartera en Excel y el sistema opera automáticamente con un horario Lunes–Viernes 8 AM–6 PM preconfigurado. Sin instalaciones, sin IT, sin meses de implementación.",
  },
  {
    q: "¿Es legal contactar deudores por WhatsApp con un bot?",
    a: "Sí, dentro de los límites regulatorios. CollectUX opera exclusivamente en horarios permitidos (Lunes a Viernes, 8:00 AM – 6:00 PM), mantiene trazabilidad completa y el agente de IA nunca amenaza ni presiona. Cumple con los estándares de la SEPS y la SBS.",
  },
  {
    q: "¿Qué pasa si el deudor cambió de número?",
    a: "Ahí entra el módulo de Skip Tracing. Con un crédito prepagado, el sistema busca teléfonos alternativos por cédula y los agrega automáticamente al expediente del deudor. Pagas solo lo que usas.",
  },
  {
    q: "¿Cómo se validan los comprobantes de pago?",
    a: "El deudor envía la foto del comprobante por WhatsApp. El Agente Aurora lo analiza con IA-OCR, verifica monto y banco, y lo pasa al dashboard de tu supervisor con un solo click para aprobarlo o rechazarlo — con trazabilidad de quién aprobó y cuándo.",
  },
  {
    q: "¿Cuánto cuesta CollectUX?",
    a: "Contáctanos para una demo personalizada. Tenemos planes según el volumen de tu cartera y la cantidad de agentes que necesites. Sin contratos de largo plazo — pagas por lo que usas.",
  },
]
