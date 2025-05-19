import NextAuth, { type NextAuthOptions, type DefaultSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { JWT } from "next-auth/jwt"

export type { Session } from "next-auth"

// Extend the built-in session and user types
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
    } | null
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    name?: string | null
    email?: string | null
    picture?: string | null
  }
}

// NextAuth configuration
const authOptions: NextAuthOptions = {
  // Authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: 'openid email profile',
        },
      },
    }),
  ],
  
  // Session configuration
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  
  // Custom pages
  pages: {
    signIn: "/perfil",
    signOut: "/perfil",
    error: "/perfil",
  },
  
  // Callbacks
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('signIn callback', { user, account, profile });
      
      if (user) {
        user.id = user.id || user.email?.split('@')[0] || '';
        user.name = user.name || user.email?.split('@')[0] || '';
      }
      
      return true;
    },
    
    async redirect({ url, baseUrl }) {
      console.log('redirect callback', { url, baseUrl });
      
      // Redirect to profile after sign in
      if (url.startsWith(baseUrl)) return url;
      if (url.startsWith('/api/auth/signin')) return `${baseUrl}/perfil`;
      return baseUrl;
    },
    
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub || token.id || '';
        session.user.name = token.name || null;
        session.user.email = token.email || null;
        session.user.image = token.picture || null;
      }
      return session;
    },
    
    async jwt({ token, user, account }) {
      console.log('jwt callback', { token, user, account });
      
      if (user) {
        token.id = user.id;
        token.name = user.name || null;
        token.email = user.email || null;
        token.picture = user.image || null;
      }
      
      return token;
    },
  },
  
  // Debug mode in development
  debug: process.env.NODE_ENV === 'development',
  
  // Secret for signing tokens
  secret: process.env.NEXTAUTH_SECRET,
  
  // Use secure cookies in production
  useSecureCookies: process.env.NODE_ENV === 'production',
}

// Handler para las rutas de API de autenticación
const handler = NextAuth(authOptions)

// Exportar los manejadores de ruta estándar
export { handler as GET, handler as POST, authOptions }

// Función para obtener la sesión en el servidor
export async function getServerSession() {
  const { getServerSession } = await import('next-auth/next')
  return getServerSession(authOptions)
}

// Función para obtener la sesión en el cliente
export function useAuth() {
  // Importar dinámicamente para evitar problemas de hidratación
  const { data: session, status } = require('next-auth/react').useSession()
  
  // Debug log
  console.log('useAuth - status:', status, 'session:', session)
  
  return { 
    session: session || null, 
    status 
  }
}
