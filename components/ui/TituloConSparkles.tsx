"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function TituloConSparkles() {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="relative w-fit mx-auto flex flex-col items-center">
        <h1 className="md:text-4xl text-xl lg:text-5xl font-bold text-center text-white relative z-20">
          La interpretación de los Sueños
        </h1>
        {/* Línea azul exactamente debajo del texto */}
        <div className="mt-2 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm" />
        <div className="-mt-2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="w-[40rem] h-40 relative">
        {/* Sparkles y gradientes secundarios (puedes dejar solo el efecto principal si quieres más limpio) */}

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
