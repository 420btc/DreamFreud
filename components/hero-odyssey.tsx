import React, { useState,useRef,useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import Link from "next/link";

// ... (ElasticHueSliderProps y ElasticHueSlider se mantienen igual que en la versión anterior) ...
interface ElasticHueSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  className?: string;
}

const ElasticHueSlider: React.FC<ElasticHueSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 360,
  step = 1,
  label = 'Adjust Hue',
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const progress = ((value - min) / (max - min)) * 100;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };
  
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    
    // Initial position update on click
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percent = x / rect.width;
      const newValue = min + percent * (max - min);
      onChange(Math.round(newValue / step) * step);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    
    const percent = x / rect.width;
    const newValue = min + percent * (max - min);
    onChange(Math.round(newValue / step) * step);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="flex justify-between items-center mb-1.5">
        {label && <span className="text-xs font-medium text-white/80">{label}</span>}
        <motion.span
          key={value}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xs font-medium bg-white/10 px-2 py-0.5 rounded-md text-white/90"
        >
          {value}°
        </motion.span>
      </div>
      <div className="relative w-full">
        <div 
          ref={sliderRef}
          className="relative h-4 w-full flex items-center group"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="absolute w-full h-1.5 bg-gray-700/80 rounded-full">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
              style={{
                width: `${progress}%`,
                transition: 'width 0.2s ease-out',
              }}
            />
          </div>
          
          <div
            className="absolute w-3 h-3 bg-white rounded-full shadow-lg z-20 border-2 border-white/80 cursor-pointer"
            style={{
              left: `calc(${progress}% - 6px)`,
              transform: isDragging ? 'scale(1.3, 1.3)' : 'scale(1, 1)',
              transition: 'transform 0.1s ease-out',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            }}
          />
          
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className="absolute w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};


interface LightningProps {
  hue?: number;
  xOffset?: number; // Prop para ajuste manual si fuera necesario
  speed?: number;
  intensity?: number;
  size?: number;    // Este 'size' es el que viene de HeroSection
}

const Lightning: React.FC<LightningProps> = ({
  hue = 230,
  xOffset = 0, // Mantenemos xOffset por si se quiere usar para ajustes finos
  speed = 0.2,
  intensity = 1,
  size = 1,    // Valor base de 'size'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const isWebGLAvailable = () => {
      try {
        const testCanvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && 
                 (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    };

    if (!isWebGLAvailable()) {
      console.error("WebGL no está soportado en este dispositivo.");
      return;
    }
    
    const gl = canvas.getContext("webgl", {
        alpha: false, 
        antialias: false, 
        powerPreference: 'high-performance' 
    });

    if (!gl) {
      console.error("No se pudo obtener el contexto WebGL.");
      return;
    }

    const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize; // Este es el 'size' que ajustaremos
      
      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));
          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          uv.x += uXOffset; // uXOffset se mantiene por si se necesita un ajuste manual fino
          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0; // uSize aquí
          float dist = abs(uv.x);
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          col = pow(col, vec3(1.0));
          fragColor = vec4(col, 1.0);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    const compileShader = (source: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");
    const uHueLocation = gl.getUniformLocation(program, "uHue");
    const uXOffsetLocation = gl.getUniformLocation(program, "uXOffset");
    const uSpeedLocation = gl.getUniformLocation(program, "uSpeed");
    const uIntensityLocation = gl.getUniformLocation(program, "uIntensity");
    const uSizeLocation = gl.getUniformLocation(program, "uSize");

    const startTime = performance.now();
    let animationFrameId: number;

    const render = () => {
      if (!canvasRef.current) { // Asegurarse que el canvas sigue montado
        cancelAnimationFrame(animationFrameId);
        return;
      }
      
      // Es importante llamar a resizeCanvas dentro del bucle de render
      // o al menos asegurar que las dimensiones del canvas sean correctas
      // antes de obtenerlas para iResolution y aspectRatio.
      // La llamada a resizeCanvas() ya está fuera y se actualiza en el evento 'resize'.
      // Pero para la primera renderización o cambios de layout que no sean 'resize',
      // es bueno tenerlo aquí o asegurar que clientWidth/Height están actualizados.
      // Si resizeCanvas ya se encarga de actualizar canvas.width y canvas.height, está bien.

      if (canvas.width === 0 || canvas.height === 0) {
        // Si el canvas no tiene dimensiones, se intenta redimensionar.
        // Esto puede pasar si el layout no está listo en el primer frame.
        resizeCanvas(); 
      }

      if (canvas.width > 0 && canvas.height > 0) {
          gl.viewport(0, 0, canvas.width, canvas.height);
          gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
          const currentTime = performance.now();
          gl.uniform1f(iTimeLocation, (currentTime - startTime) / 1000.0);
          gl.uniform1f(uHueLocation, hue);
          gl.uniform1f(uXOffsetLocation, xOffset); // Se pasa el prop xOffset
          gl.uniform1f(uSpeedLocation, speed);
          gl.uniform1f(uIntensityLocation, intensity);

          // --- LÓGICA PARA AJUSTAR 'size' EN MÓVILES ---
          const aspectRatio = canvas.width / canvas.height;
          let adjustedSize = size; // Usa el 'size' de los props por defecto (viene de HeroSection)

          if (aspectRatio < 1.0) { // Pantalla vertical (más alta que ancha) o cuadrada
            // Reduce el 'size' para que el efecto se vea más "alejado" o completo
            // El factor 0.65 es experimental. Puedes ajustarlo (e.g., 0.5, 0.75)
            adjustedSize = size * 0.65; 
          }
          gl.uniform1f(uSizeLocation, adjustedSize);
          // --- FIN DE LA LÓGICA DE AJUSTE ---

          gl.drawArrays(gl.TRIANGLES, 0, 6); 
      }
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      if (gl) {
        gl.deleteProgram(program);
        if (vertexShader) gl.deleteShader(vertexShader);
        if (fragmentShader) gl.deleteShader(fragmentShader);
        if (vertexBuffer) gl.deleteBuffer(vertexBuffer);
      }
    };
  }, [hue, xOffset, speed, intensity, size]); // Dependencias del useEffect

  return <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0 pointer-events-none" />;
};

// El componente HeroSection se mantiene igual que en la versión anterior.
// Solo necesitas reemplazar el componente Lightning con esta nueva versión.
export const HeroSection: React.FC = () => {
  const [lightningHue, setLightningHue] = useState(220);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  return (
    <div className="relative w-full bg-black text-white overflow-hidden md:h-screen h-[100dvh] min-h-[600px]">
      {/* Mobile Color Picker */}
      <div className="md:hidden absolute bottom-4 right-4 z-40 w-[calc(100%-2rem)] transition-all duration-500 ease-out group">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-xl border border-white/5 shadow-xl transition-all duration-500 ease-out group-hover:bg-black/70 group-hover:backdrop-blur-none" />
        <div className="relative z-10 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ElasticHueSlider
            value={lightningHue}
            onChange={setLightningHue}
            label="Ajustar Color"
            className="w-full text-xs" 
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white/60 text-xs pointer-events-none group-hover:opacity-0 transition-opacity duration-300 px-2 text-center">
          <span>Toca para ajustar el color</span>
        </div>
      </div>
      
      {/* Desktop Color Picker */}
      <div className="hidden md:block absolute bottom-6 right-6 z-40 w-72 transition-all duration-500 ease-out group">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-xl border border-white/5 shadow-xl transition-all duration-500 ease-out group-hover:bg-black/70 group-hover:backdrop-blur-none" />
        <div className="relative z-10 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ElasticHueSlider
            value={lightningHue}
            onChange={setLightningHue}
            label="Ajustar Color"
            className="w-full text-sm" 
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
          <span>Pasa el ratón para ajustar</span>
        </div>
      </div>
      
      <div className="relative z-30 h-full w-full flex items-center justify-center overflow-y-auto py-4 md:py-0">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center justify-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <div className="mt-8 md:mt-12">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-light mb-2 md:mb-4"
              >
                Ai Dreamer
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-5xl pb-2 md:pb-3 font-light bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent px-2"
              >
                Analiza y registra tus sueños
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-400 mb-6 md:mb-9 max-w-2xl mx-auto px-2 text-sm md:text-base"
              >
                Bienvenido a esta aplicación interactiva para el registro y análisis de tus sueños basada en las teorías de Sigmund Freud, el padre del psicoanálisis.
              </motion.p>

              <Link href="/registrar" className="block">
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 md:mt-24 px-6 md:px-8 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-sm md:text-base"
                >
                  Registrar sueño
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0" 
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:max-w-[800px] aspect-square rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/10 blur-3xl"></div>
        
        <div className="md:hidden">
          <Lightning
              hue={lightningHue}
              xOffset={0}
              speed={1.6} 
              intensity={0.6} 
              size={1.5}
          />
        </div>
        <div className="hidden md:block">
          <Lightning
              hue={lightningHue}
              xOffset={0}
              speed={1.6} 
              intensity={0.6} 
              size={2}
          />
        </div>
      </motion.div>
    </div>
  );
};