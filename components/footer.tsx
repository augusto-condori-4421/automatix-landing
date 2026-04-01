"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/AUTOMAT1X",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:automatix.empresa@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+543815714332",
    label: "Teléfono",
  },
]

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/automatix-logo.png"
                alt="AUTOMATIX"
                width={140}
                height={40}
                className="h-10 w-auto rounded-2xl"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Creamos páginas web y soluciones simples para que tu negocio reciba más consultas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+543815714332"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  3815714332
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/AUTOMAT1X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  @AUTOMAT1X
                </a>
              </li>
              <li>
                <a
                  href="mailto:automatix.empresa@gmail.com"
                  className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="break-all">automatix.empresa@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} AUTOMATIX Studio. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
