"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Moon, Brain, Calendar, User, LogOut } from "lucide-react"
import type { Sueno } from "@/types/sueno"
import { Button } from "@/components/ui/button"
import SignInCard2 from "@/components/ui/sign-in-card-2"
import { signOut } from "next-auth/react"
import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"
import Link from "next/link"

// Extender el tipo de next-auth
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } | null;
  }
}

// Tipo para el usuario de la sesión
type SessionUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
} | null;

export default function MiPerfil() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [suenos, setSuenos] = useState<Sueno[]>([])
  const [cargando, setCargando] = useState(true)
  const [nombreUsuario, setNombreUsuario] = useState<string>('')
  const [suenosPorMes, setSuenosPorMes] = useState<Record<string, number>>({})
  
  // Redirigir si no hay sesión
  useEffect(() => {
    if (status === 'unauthenticated' && !session) {
      console.log('No hay sesión, redirigiendo a inicio de sesión');
      router.push('/perfil?error=SessionRequired');
    }
  }, [status, session, router]);

  // Cargar sueños del usuario
  const cargarSuenos = useCallback(async () => {
    if (!session?.user?.email) {
      console.log('No user email found, skipping dream loading')
      return
    }

    try {
      setCargando(true)
      console.log('Loading dreams for user:', session.user.email)
      
      // Simular carga de datos
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Aquí iría la lógica real para cargar los sueños
      // Por ahora usamos datos de ejemplo
      const datosEjemplo: Sueno[] = [
        // ... tus datos de ejemplo ...
      ]
      
      setSuenos(datosEjemplo)
    } catch (error) {
      console.error('Error al cargar los sueños:', error)
    } finally {
      setCargando(false)
    }
  }, [session?.user?.email])

  // Debug log
  useEffect(() => {
    console.log('MiPerfil - Auth state:', { status, session })
    
    if (status === 'authenticated' && session?.user) {
      // Asegurarse de que el nombre de usuario esté actualizado
      if (session.user.name && nombreUsuario !== session.user.name) {
        setNombreUsuario(session.user.name);
      }
      // Load user dreams if needed
      cargarSuenos()
    } else if (status === 'unauthenticated') {
      console.log('User not authenticated')
      setCargando(false)
    }
  }, [status, session, cargarSuenos])
  
  const user = session?.user ?? null;

  // Debug logs
  useEffect(() => {
    console.log('MiPerfil - Session state changed:', { 
      status, 
      hasSession: !!session,
      user: session?.user 
    })
    
    if (status === 'authenticated' && session?.user) {
      console.log('User authenticated:', session.user)
      setNombreUsuario(session.user.name || '')
      cargarSuenos()
    } else if (status === 'unauthenticated') {
      console.log('User not authenticated')
      setCargando(false)
    }
  }, [status, session, cargarSuenos, router])
  
  // Cargar datos del usuario
  useEffect(() => {
    const cargarDatosUsuario = async () => {
      console.log('Iniciando carga de datos...');
      setCargando(true);
      
      try {
        if (status === 'authenticated' && session?.user) {
          console.log('Usuario autenticado:', session.user.email);
          
          // Establecer el nombre de usuario desde Google
          if (session.user.name) {
            setNombreUsuario(session.user.name);
            // Guardar el nombre en localStorage para persistencia
            localStorage.setItem('nombreUsuario', session.user.name);
          }
          
          // Cargar sueños guardados
          try {
            const suenosGuardados = localStorage.getItem("suenos");
            console.log('Sueños en localStorage:', suenosGuardados ? 'encontrados' : 'no encontrados');
            if (suenosGuardados) {
              const suenosParseados = JSON.parse(suenosGuardados);
              setSuenos(Array.isArray(suenosParseados) ? suenosParseados : []);
            } else {
              setSuenos([]);
            }
          } catch (storageError) {
            console.error("Error al leer del localStorage:", storageError);
            setSuenos([]);
          }
        } else {
          console.log('Usuario no autenticado o sesión no disponible');
          setSuenos([]);
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setSuenos([]);
      } finally {
        setCargando(false);
      }
    };
    
    cargarDatosUsuario();
  }, [status, session]) // Se ejecuta cuando cambia el estado de autenticación
  
  // Calcular estadísticas
  const totalSuenos = suenos?.length || 0;
  const promedioCaracteres = useMemo(() => {
    if (!suenos || suenos.length === 0) return 0;
    const totalCaracteres = suenos.reduce((sum, sueno) => sum + (sueno.texto?.length || 0), 0);
    return Math.round(totalCaracteres / suenos.length);
  }, [suenos]);

  // Calcular sueños por mes
  useEffect(() => {
    if (!suenos || suenos.length === 0) {
      setSuenosPorMes({});
      return;
    }
    
    const meses: Record<string, number> = {};
    
    suenos.forEach(sueno => {
      if (sueno.fecha) {
        const fecha = new Date(sueno.fecha);
        const mes = fecha.toLocaleString('es-ES', { month: 'long', year: 'numeric' });
        meses[mes] = (meses[mes] || 0) + 1;
      }
    });
    
    setSuenosPorMes(meses);
  }, [suenos]);

  // Actualizar el nombre del usuario si está disponible
  useEffect(() => {
    if (user?.name && !nombreUsuario) {
      setNombreUsuario(user.name);
    }
  }, [user, nombreUsuario]);

  // Manejadores
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/perfil' });
  }

  const guardarNombre = () => {
    try {
      localStorage.setItem("nombreUsuario", nombreUsuario);
      alert("Nombre guardado correctamente");
    } catch (error) {
      console.error("Error al guardar nombre:", error);
      alert("Error al guardar el nombre");
    }
  }

  // Estados de carga
  console.log('Render - status:', status, 'cargando:', cargando, 'session:', session);

  // Mostrar loading mientras se verifica la autenticación
  if (status === 'loading' || cargando) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-4"></div>
        <p className="text-lg">Cargando tu perfil...</p>
      </div>
    )
  }
  
  // Si no hay sesión, mostrar el formulario de inicio de sesión
  if (status === 'unauthenticated' || !session) {
    return (
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Inicia sesión para ver tu perfil</h2>
        <SignInCard2 />
      </div>
    )
  }

  if (status === 'authenticated' && user) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center mt-20">Mi Perfil</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Columna izquierda - Información personal */}
          <Card className="md:col-span-1">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Información Personal</CardTitle>
                <Button 
                  onClick={handleSignOut}
                  variant="outline" 
                  className="flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Cerrar sesión
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-4">
                {user?.image ? (
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src={user.image} 
                      alt={user.name || 'Usuario'}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                )}
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{user?.name || 'Usuario'}</h2>
                  <p className="text-sm text-muted-foreground">{user?.email || ''}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium">
                  Nombre
                </label>
                <div className="flex gap-2">
                  <input
                    id="nombre"
                    type="text"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <Button onClick={guardarNombre}>Guardar</Button>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-xs text-muted-foreground text-center">
                  Has iniciado sesión con Google
                </p>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Fecha de registro: {new Date().toLocaleDateString("es-ES")}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Columna derecha - Información de sueños */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Tu Historial de Sueños</CardTitle>
              <CardDescription>
                {user?.name ? `${user.name}, ` : ''}aquí está tu actividad de sueños registrados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {user?.email && (
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Información de la cuenta</h3>
                  <div className="space-y-1 text-sm">
                    {user.name && <p><span className="font-medium">Nombre:</span> {user.name}</p>}
                    <p><span className="font-medium">Email:</span> {user.email}</p>
                    <p className="text-muted-foreground text-xs mt-2">
                      Iniciaste sesión con Google
                    </p>
                  </div>
                </div>
              )}
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-4">Estadísticas</h3>
              {totalSuenos > 0 ? (
                <Tabs defaultValue="general">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="tiempo">Tiempo</TabsTrigger>
                    <TabsTrigger value="contenido">Contenido</TabsTrigger>
                  </TabsList>

                  <TabsContent value="general" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium flex items-center">
                            <Moon className="h-4 w-4 mr-2" />
                            Total de Sueños
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">{totalSuenos}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium flex items-center">
                            <Brain className="h-4 w-4 mr-2" />
                            Promedio de Caracteres
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">{promedioCaracteres}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="tiempo" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Sueños por Mes
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {Object.keys(suenosPorMes).length > 0 ? (
                          <ul className="space-y-2">
                            {Object.entries(suenosPorMes).map(([mes, cantidad]) => (
                              <li key={mes} className="flex justify-between">
                                <span className="capitalize">{mes}</span>
                                <span className="font-medium">{cantidad} sueños</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-muted-foreground">No hay datos suficientes</p>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              ) : (
                <p className="text-muted-foreground">No hay sueños registrados</p>
              )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Usuario no autenticado - Mostrar formulario de inicio de sesión
  const isAuthenticated = status === 'authenticated' && session?.user;
  if (!isAuthenticated) {
    console.log('Usuario no autenticado, mostrando formulario de inicio de sesión');
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center mt-20">Mi Perfil</h1>
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Inicia sesión</CardTitle>
              <CardDescription className="text-center">
                Inicia sesión con Google para ver tu perfil y tu historial de sueños
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-6">
              <SignInCard2 />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  
  if (cargando) {
    console.log('Mostrando loader de carga de datos');
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p>Cargando tus datos...</p>
          </div>
        </div>
      </div>
    );
  }

  // El estado de autenticación ya se maneja arriba con status === 'unauthenticated'

  // Renderizado principal
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center mt-20">Mi Perfil</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Columna izquierda - Información personal */}
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Información Personal</CardTitle>
              <Button 
                onClick={handleSignOut}
                variant="outline" 
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Cerrar sesión
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              {user?.image ? (
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img 
                    src={user.image} 
                    alt={user.name || 'Usuario'}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ) : (
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary" />
                </div>
              )}
              <div className="text-center">
                <h2 className="text-xl font-semibold">{user?.name || 'Usuario'}</h2>
                <p className="text-sm text-muted-foreground">{user?.email || ''}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-sm font-medium">
                Nombre
              </label>
              <div className="flex gap-2">
                <input
                  id="nombre"
                  type="text"
                  value={nombreUsuario}
                  onChange={(e) => setNombreUsuario(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button onClick={guardarNombre}>Guardar</Button>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-xs text-muted-foreground text-center">
                Has iniciado sesión con Google
              </p>
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Fecha de registro: {new Date().toLocaleDateString("es-ES")}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Columna derecha - Información de sueños */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Tu Historial de Sueños</CardTitle>
            <CardDescription>
              {user?.name ? `${user.name}, ` : ''}aquí está tu actividad de sueños registrados
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {user?.email && (
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Información de la cuenta</h3>
                <div className="space-y-1 text-sm">
                  {user.name && <p><span className="font-medium">Nombre:</span> {user.name}</p>}
                  <p><span className="font-medium">Email:</span> {user.email}</p>
                  <p className="text-muted-foreground text-xs mt-2">
                    Iniciaste sesión con Google
                  </p>
                </div>
              </div>
            )}
            
            <div className="border-t pt-4">
              <h3 className="font-medium mb-4">Estadísticas</h3>
            {totalSuenos > 0 ? (
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="tiempo">Tiempo</TabsTrigger>
                  <TabsTrigger value="contenido">Contenido</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center">
                          <Moon className="h-4 w-4 mr-2" />
                          Total de Sueños
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">{totalSuenos}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center">
                          <Brain className="h-4 w-4 mr-2" />
                          Promedio de Caracteres
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">{promedioCaracteres}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="tiempo" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Sueños por Mes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {Object.keys(suenosPorMes).length > 0 ? (
                        <ul className="space-y-2">
                          {Object.entries(suenosPorMes).map(([mes, cantidad]) => (
                            <li key={mes} className="flex justify-between">
                              <span className="capitalize">{mes}</span>
                              <span className="font-medium">{cantidad} sueños</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground">No hay datos suficientes</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="contenido" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Análisis de Contenido</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        El análisis detallado de contenido estará disponible cuando tengas más sueños registrados.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="text-center py-8 space-y-4">
                <Moon className="h-16 w-16 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="text-lg font-medium">No hay sueños registrados</h3>
                  <p className="text-muted-foreground mt-2">
                    Aún no has registrado ningún sueño. ¡Comienza ahora!
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/registrar">
                    <Button className="gap-2">
                      <Moon className="h-4 w-4" />
                      Registrar mi primer sueño
                    </Button>
                  </Link>
                </div>
              </div>
            )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
