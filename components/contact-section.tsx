"use client"

import { motion } from "framer-motion"
import { Phone, Instagram, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "3815714332",
    href: "tel:+543815714332",
  },
  {
    icon: Instagram,
    label: "@AUTOMAT1X",
    href: "https://instagram.com/AUTOMAT1X",
  },
  {
    icon: Mail,
    label: "automatix.empresa@gmail.com",
    href: "mailto:automatix.empresa@gmail.com",
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background with diagonal accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-cyan-950/20 to-background" />
      <div className="absolute inset-0 diagonal-lines" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            AUTOMATIX STUDIO
          </p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-2"
          >
            ¿Tenés una idea?
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">CONTACTANOS</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-10"
          >
            Creamos páginas web y soluciones simples para que tu negocio reciba más consultas.
          </motion.p>

          {/* WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 px-8 py-6 text-lg rounded-full"
            >
              <a
                href="https://wa.me/543815714332?text=Hola!%20Quiero%20consultar%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 w-full"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <info.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm break-all">{info.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
