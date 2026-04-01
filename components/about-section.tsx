"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const features = [
  "Sitios web profesionales y modernos",
  "Optimizados para buscadores (SEO)",
  "Diseños personalizados a tu marca",
  "Soporte continuo post-lanzamiento",
  "Precios accesibles y transparentes",
  "Entrega rápida y eficiente",
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 relative">
      <div className="absolute inset-0 diagonal-lines opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              SOBRE NOSOTROS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Somos </span>
              <span className="gradient-text">AUTOMATIX</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Somos un equipo apasionado por la tecnología y el diseño. Nos especializamos en crear 
              soluciones digitales que ayudan a pequeños y medianos negocios a crecer en el mundo digital.
              Desde páginas web hasta sistemas de gestión, trabajamos para que tu negocio reciba más consultas.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "50+", label: "Proyectos Completados" },
              { number: "100%", label: "Clientes Satisfechos" },
              { number: "24/7", label: "Soporte Disponible" },
              { number: "3+", label: "Años de Experiencia" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <span className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</span>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
