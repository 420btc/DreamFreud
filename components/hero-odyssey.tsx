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
  // const sliderRef = useRef<HTMLDivElement>(null); // No se usa, se puede quitar si no es necesario para ElasticHueSlider

  const progress = ((value - min) / (max - min));
  const thumbPosition = progress * 100; // Percentage

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className={`relative w-full ${className}`}>
      {label && <label className="block text-xs text-gray-400 mb-1">{label}</label>}
      
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          WebkitAppearance: 'none',
          appearance: 'none',
        }}
      />
      
      <div className="relative h-1.5 w-full bg-gray-600 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-600 rounded-full"></div>
        <motion.div
          className="absolute left-0 top-0 bottom-0 bg-white rounded-full"
          style={{
            width: `${thumbPosition}%`,
            transition: isDragging ? 'none' : 'width 0.15s ease-out',
          }}
        >
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full shadow-md z-10"
        style={{
          left: `calc(${thumbPosition}% - 8px)`,
          transition: isDragging ? 'none' : 'left 0.30s ease-out',
        }}
      />

       <AnimatePresence mode="wait">
         <motion.div
           key={value}
           initial={{ opacity: 0, y: -5 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 5 }}
           transition={{ duration: 0.2 }}
           className="text-xs text-gray-300 mt-2"
         >
           {value}°
         </motion.div>
       </AnimatePresence>
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
    <div className="relative w-full bg-black text-white overflow-hidden h-screen">
      <div className="absolute bottom-4 right-4 z-40">
        <ElasticHueSlider
          value={lightningHue}
          onChange={setLightningHue}
          label="Ajustar Tono"
          className="w-32" 
        />
      </div>
      
      <div className="relative z-30 h-full w-full flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center justify-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <div className="mt-12">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-9xl font-light mb-4"
              >
                Ai Dreamer
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-5xl pb-3 font-light bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent"
              >
                Analiza y registra tus sueños
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-400 mb-9 max-w-2xl mx-auto"
              >
                Bienvenido a esta aplicación interactiva para el registro y análisis de tus sueños basada en las teorías de Sigmund Freud, el padre del psicoanálisis.
              </motion.p>

              <Link href="/registrar">
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-24 px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
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
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/10 blur-3xl"></div>
        
        <Lightning
            hue={lightningHue}
            xOffset={0} // Pasamos el xOffset base (0 por defecto)
            speed={1.6} 
            intensity={0.6} 
            size={2}    // Este es el 'size' base que se ajustará internamente en Lightning
        />
      </motion.div>
    </div>
  );
};