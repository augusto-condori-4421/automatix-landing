"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Settings, Calendar, Zap, Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description: "Sitios web modernos y responsivos que se adaptan a cualquier dispositivo.",
  },
  {
    icon: Smartphone,
    title: "Diseño Responsive",
    description: "Diseños optimizados para celular y PC con la mejor experiencia de usuario.",
  },
  {
    icon: Calendar,
    title: "Chat Bots",
    description: "Gestión de mensajes, informacion, citas, mejora de atencion a los clientes.",
  },
  {
    icon: Settings,
    title: "Sistemas a Medida",
    description: "Soluciones personalizadas para gimnasios, sistemas de turnos, comercios y pequeños negocios.",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description: "Optimizamos procesos repetitivos para que ahorres tiempo y recursos.",
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Programación de funcionalidades específicas según tus necesidades.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="absolute inset-0 diagonal-lines opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            NUESTROS SERVICIOS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Soluciones </span>
            <span className="gradient-text">Digitales</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creamos páginas web y soluciones simples para que tu negocio reciba más consultas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass-card h-full transition-all duration-300 transform hover:-translate-y-2 hover:bg-cyan-500/5 hover:border-cyan-500/50 hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.4)] group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
