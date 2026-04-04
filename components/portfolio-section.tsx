"use client"

import { useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PortfolioSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ])
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const images = [
    "/carousel-1.webp",
    "/carousel-2.webp",
    "/carousel-3.webp",
  ]

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/10 to-background" />
      
      {/* Diagonal accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
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

        {/* EMBLA CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl cursor-grab active:cursor-grabbing relative group"
        >
          {/* Subtle glow behind carousel */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50" />
          
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-black/20 backdrop-blur-sm relative z-10" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {images.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0" key={index}>
                   <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] p-2 sm:p-4 lg:p-6">
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl flex items-center justify-center bg-black/40">
                      <Image
                        src={src}
                        alt={`Portfolio automatix slider ${index + 1}`}
                        fill
                        className="object-contain hover:scale-[1.02] transition-transform duration-700 p-2"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Overlay gradient inside carousel for a sleeker look at the bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20 hover:scale-110"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Helper text for user */}
          <div className="text-center mt-6 flex justify-center items-center gap-2 text-muted-foreground text-sm opacity-60">
            <span className="hidden sm:inline">Usa los botones o desliza para ver más diseños</span>
            <span className="sm:hidden">Desliza la pantalla en los bordes ↓</span>
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
              className="glass-card p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-cyan-500/5 hover:border-cyan-500/50 hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.4)]"
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
