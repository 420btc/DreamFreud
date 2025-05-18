import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppDock } from "@/components/app-dock"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ai Dreamer",
  description: "Aplicación para registrar y analizar sueños basada en la teoría de Sigmund Freud",
  generator: 'Carlosfreire'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
              <Analytics />
            </main>
            <AppDock />
            <footer className="py-4 border-t">
              <div className="container mx-auto text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold">By Carlos Freire</span>
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
