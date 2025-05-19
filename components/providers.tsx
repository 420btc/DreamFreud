'use client'

import { SessionProvider, useSession } from 'next-auth/react'
import type { Session } from 'next-auth'
import { useEffect } from 'react'

interface ProvidersProps {
  children: React.ReactNode
  session: Session | null
}

export function Providers({ children, session: initialSession }: ProvidersProps) {
  useEffect(() => {
    console.log('=== AUTH DEBUG ===')
    console.log('Initial session:', initialSession)
    console.log('Current URL:', window.location.href)
    
    // Check for auth errors in URL
    const params = new URLSearchParams(window.location.search)
    const error = params.get('error')
    const callbackUrl = params.get('callbackUrl')
    
    if (error) {
      console.error('Authentication error:', error)
      console.error('Callback URL:', callbackUrl)
    }
    
    // Check for session in localStorage
    const event = new StorageEvent('storage', {
      key: '__auth',
      newValue: window.localStorage.getItem('__auth')
    });
    window.dispatchEvent(event);
    
    // Log session changes
    const handleStorage = (event: StorageEvent) => {
      if (event.key === '__auth') {
        console.log('Auth state changed:', event.newValue)
      }
    }
    
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [initialSession])

  return (
    <SessionProvider 
      session={initialSession}
      refetchOnWindowFocus={true}
      refetchInterval={60 * 5} // 5 minutes
      refetchWhenOffline={false}
    >
      <AuthDebugger />
      {children}
    </SessionProvider>
  )
}

// Component to help debug auth state
function AuthDebugger() {
  const { data: session, status } = useSession()
  
  useEffect(() => {
    console.log('Session status changed:', { status, session })
  }, [status, session])
  
  return null
}
