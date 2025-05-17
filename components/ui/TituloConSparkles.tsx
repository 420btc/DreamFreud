"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

interface TituloConSparklesProps {
  children: React.ReactNode;
}

export function TituloConSparkles({ children }: TituloConSparklesProps) {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
      {/* Capa de partículas de fondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black/50 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      
      {/* Imagen de fondo dreamer.png */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
        <img 
          src="/dreamer.png" 
          alt="Dreamer" 
          className="h-[115%] w-auto object-contain opacity-50"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
          }}
        />
      </div>
      
     
      
      {/* Espacio para el efecto de partículas */}
      <div className="w-[40rem] h-40 relative">
        {/* Este div mantiene el espacio para el efecto de partículas */}
      </div>
    </div>
  );
}
