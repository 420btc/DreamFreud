import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppDock } from "@/components/app-dock"
import { Providers } from "@/components/providers"
import { Badge } from "@/components/ui/badge"
import { getServerSession } from "@/lib/auth"

const inter = Inter({ subsets: ["latin"] })

// Get the session on the server side
export const dynamic = 'force-dynamic' // Ensure this layout is dynamic

export const metadata: Metadata = {
  title: "Ai Dreamer",
  description: "Aplicación para registrar y analizar sueños basada en la teoría de Sigmund Freud",
  generator: 'Carlosfreire',
  icons: {
    icon: '/aidream.png',
    apple: '/aidream.png',
    shortcut: '/aidream.png',
  },
  manifest: '/site.webmanifest',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  console.log('RootLayout - Getting server session...')

  let session = null;
  try {
    session = await getServerSession()
    console.log('RootLayout - Server session:', session ? 'Authenticated' : 'Not authenticated')
  } catch (error) {
    console.error('Error getting server session:', error)
  }

  // Agregar headers para evitar caché en desarrollo
  const cacheControl = process.env.NODE_ENV === 'development'
    ? 'no-store, no-cache, must-revalidate, proxy-revalidate'
    : 'public, max-age=0, s-maxage=3600'

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} dark bg-background`}>
        <Providers session={session}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <div className="min-h-screen flex flex-col">
              <main className="flex-1">
                {children}
                <Analytics />
              </main>
              <AppDock />
              <footer className="py-8 border-t border-white/10 bg-black/40 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_40px_rgba(0,0,0,0.5)]">
                <div className="container mx-auto flex flex-col items-center justify-center gap-4">
                  <p className="text-sm text-gray-300 text-center">
                    By{' '}
                    <a
                      href="https://x.com/CarlosFreire0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                      Carlos Freire
                    </a>
                    {' '}in May 2025
                  </p>
                  <a href="https://carlosfr.es" target="_blank" rel="noopener noreferrer">
                    <Badge variant="outline" className="bg-white/5 hover:bg-white/10 text-gray-300 border-white/20 transition-colors">
                      carlosfr.es
                    </Badge>
                  </a>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
