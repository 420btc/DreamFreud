'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Componente de carga
const Loader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

// Importación dinámica del componente AIMessageBar
const AIMessageBar = dynamic(
  () => import('./AIMessageBar').then((mod) => mod.AIMessageBar),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

// Componente contenedor que maneja el estado de montaje
export default function AIMessageBarWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // No renderizar nada en el servidor
  if (!isMounted) {
    return null;
  }

  return <AIMessageBar />;
}
