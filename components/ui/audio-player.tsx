"use client"

import { useState, useRef, useEffect } from "react"
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
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  // Manejar la reproducción/pausa
  const togglePlay = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Actualizar el tiempo actual
  const updateTime = () => {
    if (!audioRef.current) return
    setCurrentTime(audioRef.current.currentTime)
  }

  // Manejar el cambio manual de posición
  const handleProgressChange = (value: number[]) => {
    if (!audioRef.current) return
    const newTime = value[0]
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Manejar el cambio de volumen
  const handleVolumeChange = (value: number[]) => {
    if (!audioRef.current) return
    const newVolume = value[0] / 100
    audioRef.current.volume = newVolume
    setVolume(newVolume)
    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  // Alternar silencio
  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
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
    audioRef.current.currentTime += seconds
  }

  // Formatear tiempo (mm:ss)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Efectos secundarios
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className={`rounded-lg shadow-md p-4 transition-colors ${variantStyles[variant]} ${className}`}>
      {/* Estilos para los controles */}
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          background-color: ${variant === 'default' ? '#3b82f6' : '#ffffff'};
        }
        .slider-thumb::-moz-range-thumb {
          background-color: ${variant === 'default' ? '#3b82f6' : '#ffffff'};
        }
      `}</style>
      {/* Audio element (hidden) */}
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Título */}
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      {/* Barra de progreso */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <Slider
          value={[currentTime]}
          max={duration || 0}
          step={0.1}
          onValueChange={handleProgressChange}
          className="w-full"
        />
      </div>
      
      {/* Controles principales */}
      <div className="flex items-center justify-between mb-4">
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
            className="h-12 w-12 rounded-full"
            onClick={togglePlay}
            title={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => seek(15)}
            title="Adelantar 15 segundos"
          >
            <RotateCw className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={restart}
            title="Reiniciar"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant={variant === 'default' ? 'ghost' : 'secondary'}
            size="sm" 
            onClick={changePlaybackRate}
            className={`text-xs ${variant !== 'default' ? 'text-white hover:bg-white/20' : ''}`}
            title="Velocidad de reproducción"
          >
            {playbackRate}x
          </Button>
          
          <Button 
            variant={variant === 'default' ? 'ghost' : 'secondary'}
            size="icon" 
            onClick={toggleMute}
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
            className={variant !== 'default' ? 'text-white hover:bg-white/20' : ''}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          
          <div className="w-24">
            <Slider
              value={[isMuted ? 0 : volume * 100]}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
