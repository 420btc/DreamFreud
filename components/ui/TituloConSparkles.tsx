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
      
    
      
     
      
      {/* Espacio para el efecto de partículas */}
      <div className="w-full h-[20rem] relative flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <p className="text-3xl md:text-5xl font-light text-white/90 italic mb-2">
            "Los sueños son la vía regia hacia el inconsciente."
          </p>
          <p className="text-xl text-gray-300">Sigmund Freud</p>
        </div>
      </div>
    </div>
  );
}
