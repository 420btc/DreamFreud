"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, Clock, History, Home, User, Search, Brain } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function AppDock() {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navItems = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/registrar", label: "Registrar", icon: Book },
    { href: "/analizar", label: "Analizar", icon: Brain },
    { href: "/diccionario", label: "Diccionario", icon: Search },
    { href: "/historial", label: "Historial", icon: History },
    { href: "/perfil", label: "Perfil", icon: User },
    { href: "/reloj", label: "Reloj", icon: Clock },
  ]

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50">
      <div 
        className="flex items-center gap-2 bg-black/10 backdrop-blur-sm px-6 py-3 rounded-full"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navItems.map((item, index) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          const isHovered = hoveredIndex === index
          
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className="relative flex flex-col items-center px-3 py-2"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    className="absolute inset-0 bg-white/10 rounded-lg"
                  />
                )}
              </AnimatePresence>
              <motion.div
                className={`relative z-10 flex flex-col items-center ${
                  isActive ? 'text-blue-400' : 'text-foreground/70'
                }`}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              >
                <div className="flex flex-col items-center">
                  <Icon className="h-5 w-5" />
                  <motion.span 
                    className={`text-xs font-medium ${
                      isActive ? 'text-blue-400' : 'text-foreground/60'
                    }`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 2 : -5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </div>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
