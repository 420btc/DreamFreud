import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppDock } from "@/components/app-dock"
import { Providers } from "@/components/providers"
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
      <body className={inter.className}>
        <Providers session={session}>
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
        </Providers>
      </body>
    </html>
  )
}
