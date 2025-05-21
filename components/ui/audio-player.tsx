"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Play, Pause, Volume2, VolumeX, RotateCcw, RotateCw } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

type AudioPlayerProps = {
  src: string
  title?: string
  className?: string
  variant?: 'default' | 'dark' | 'blue'
}

export function AudioPlayer({ 
  src, 
  title = "Audio", 
  className = "",
  variant = 'default' 
}: AudioPlayerProps) {
  // Estilos basados en la variante
  const variantStyles = {
    default: 'bg-white text-foreground',
    dark: 'bg-gray-900 text-white',
    blue: 'bg-gradient-to-br from-blue-900 to-blue-700 text-white',
  }
  
  // Estados
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(480) // 8 minutos por defecto
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  
  // Referencias
  const audioRef = useRef<HTMLAudioElement>(null)

  // Efecto para configurar el reproductor
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Configurar eventos
    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime
      setCurrentTime(currentTime)
      
      // Detener al llegar a los 8 minutos (480 segundos)
      if (currentTime >= 480) {
        audio.pause()
        setIsPlaying(false)
        setCurrentTime(480)
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    // Configurar volumen inicial
    audio.volume = volume
    audio.muted = isMuted
    audio.playbackRate = playbackRate

    // Agregar event listeners
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [volume, isMuted, playbackRate])

  // Manejar reproducción/pausa
  const togglePlay = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Manejar cambio de posición
  const handleProgressChange = (value: number[]) => {
    if (!audioRef.current) return
    const newTime = Math.min(value[0], 480) // No pasar de 8 minutos
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Manejar cambio de volumen
  const handleVolumeChange = (value: number[]) => {
    if (!audioRef.current) return
    const newVolume = value[0] / 100
    audioRef.current.volume = newVolume
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  // Alternar silencio
  const toggleMute = () => {
    if (!audioRef.current) return
    const newMuted = !isMuted
    audioRef.current.muted = newMuted
    setIsMuted(newMuted)
  }

  // Cambiar velocidad de reproducción
  const changePlaybackRate = () => {
    if (!audioRef.current) return
    const rates = [0.75, 1, 1.25, 1.5, 2]
    const currentIndex = rates.indexOf(playbackRate)
    const nextIndex = (currentIndex + 1) % rates.length
    const newRate = rates[nextIndex]
    
    audioRef.current.playbackRate = newRate
    setPlaybackRate(newRate)
  }

  // Reiniciar la reproducción
  const restart = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime = 0
    setCurrentTime(0)
  }

  // Avanzar/retroceder 15 segundos
  const seek = (seconds: number) => {
    if (!audioRef.current) return
    const newTime = Math.max(0, Math.min(audioRef.current.currentTime + seconds, 480))
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Formatear tiempo (mm:ss)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Calcular tiempo restante
  const remainingTime = 480 - currentTime

  return (
    <div className={`rounded-lg shadow-md p-4 transition-colors ${variantStyles[variant]} ${className}`}>
      {/* Estilos para los controles */}
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: ${variant === 'default' ? '#3b82f6' : '#ffffff'};
          cursor: pointer;
          margin-top: -6px;
          transition: all 0.1s ease;
        }
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        .slider-thumb::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: ${variant === 'default' ? '#3b82f6' : '#ffffff'};
          cursor: pointer;
          border: none;
          transition: all 0.1s ease;
        }
        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.2);
        }
        .slider-thumb::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        .slider-thumb::-moz-range-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
      `}</style>
      
      {/* Elemento de audio oculto */}
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Título */}
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      
      {/* Barra de progreso */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-xs w-12">{formatTime(currentTime)}</span>
          <div className="flex-1">
            <Slider
              value={[currentTime]}
              max={480}
              step={0.1}
              onValueChange={handleProgressChange}
              className="slider-thumb"
            />
          </div>
          <span className="text-xs w-12 text-right">{formatTime(remainingTime)}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>0:00</span>
          <span>8:00</span>
        </div>
      </div>
      
      {/* Controles principales */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => seek(-15)}
            title="Retroceder 15 segundos"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="default" 
            size="icon" 
            className="h-10 w-10 rounded-full"
            onClick={togglePlay}
            title={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => seek(15)}
            title="Adelantar 15 segundos"
          >
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMute}
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          
          <div className="w-24">
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className="slider-thumb"
            />
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={changePlaybackRate}
            className="text-xs"
            title="Velocidad de reproducción"
          >
            {playbackRate}x
          </Button>
        </div>
      </div>
    </div>
  )
}
