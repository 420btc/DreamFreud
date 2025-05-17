"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, Clock, History, Home, Moon, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

interface NavbarProps {
  seccionActiva?: string;
  cambiarSeccion?: (seccion: string) => void;
}

export default function Navbar({ seccionActiva, cambiarSeccion }: NavbarProps) {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/registrar", label: "Registrar Sueño", icon: Book },
    { href: "/analizar", label: "Analizar Sueño", icon: Book },
    { href: "/diccionario", label: "Diccionario", icon: Book },
    { href: "/historial", label: "Historial", icon: History },
    { href: "/perfil", label: "Mi Perfil", icon: User },
    { href: "/reloj", label: "Reloj", icon: Clock },
    { href: "/libro", label: "Libro de Freud", icon: Book },
  ]

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Moon className="h-6 w-6 mr-2" />
              <span className="font-bold text-lg">Ai Dreamer</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center">
            <ThemeToggle />
            <div className="md:hidden ml-4">
              <MobileMenu navItems={navItems} pathname={pathname} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function MobileMenu({ navItems, pathname }: { navItems: any[]; pathname: string }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute top-16 right-0 mt-2 w-48 bg-background border rounded-md shadow-lg z-50">
          <div className="py-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm ${
                    isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

import React from "react"
