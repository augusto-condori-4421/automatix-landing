"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/10 to-background" />
      
      {/* Diagonal accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 transform -skew-y-3" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            AUTOMATIX STUDIO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-muted-foreground">HACEMOS</span>
            <br />
            <span className="text-foreground">DISEÑOS </span>
            <span className="gradient-text">PERSONALIZADOS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[16/10] max-w-5xl mx-auto">
            <Image
              src="/portfolio-designs.png"
              alt="Portfolio de diseños personalizados"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "01", title: "Diseño Único", description: "Cada proyecto es único y personalizado" },
            { number: "02", title: "Responsive", description: "Adaptado a todos los dispositivos" },
            { number: "03", title: "Moderno", description: "Últimas tendencias en diseño web" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <span className="text-primary font-mono text-sm">{item.number}</span>
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
