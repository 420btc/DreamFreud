# Aplicación Registro Sueños Freud

## Tabla de Contenidos
- [Descripción](#descripción)
- [Características Principales](#características-principales)
- [Tech Stack](#tech-stack)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Primeros Pasos](#primeros-pasos)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
  - [Ejecutar el Servidor de Desarrollo](#ejecutar-el-servidor-de-desarrollo)
  - [Build para Producción](#build-para-producción)
- [Scripts Disponibles](#scripts-disponibles)
- [Variables de Entorno](#variables-de-entorno)
- [Componentes Destacados](#componentes-destacados)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción
"Ai Dreamer" es una plataforma web diseñada para que los usuarios registren, analicen y exploren sus sueños desde una perspectiva inspirada en las teorías psicoanalíticas de Sigmund Freud. La aplicación ofrece herramientas interactivas para el trabajo con los sueños, un diccionario de símbolos oníricos y la capacidad de llevar un historial detallado de las experiencias nocturnas.

## Características Principales
*   **Registro de Sueños:** Permite a los usuarios documentar sus sueños de forma detallada.
*   **Análisis del Último Sueño:** Herramienta para enfocarse en la interpretación del sueño más reciente.
*   **Historial de Sueños:** Visualización y gestión del archivo personal de sueños registrados.
*   **Diccionario de Sueños:** Un recurso para consultar el posible significado de símbolos y elementos presentes en los sueños.
*   **Trabajo Interactivo con el Sueño:** Funcionalidades interactivas para profundizar en el análisis e interpretación de los sueños, posiblemente utilizando técnicas freudianas.
*   **Perfil de Usuario (`Mi Perfil`):** Gestión de la información y preferencias del usuario.
*   **Recursos sobre Freud (`Libro Freud`, `Introducción`):** Secciones dedicadas a introducir conceptos de la teoría freudiana de los sueños.
*   **Interfaz Moderna y Personalizable:**
    *   Navegación intuitiva con `Navbar` y `AppDock`.
    *   Secciones visualmente atractivas como `HeroOdyssey` y `FeatureSectionWithBentoGrid`.
    *   Soporte para temas (claro/oscuro) mediante `ThemeProvider` y `ThemeToggle`.
*   **Integración con IA (Potencial):** El uso de la librería `openai` sugiere la posibilidad de análisis o sugerencias generadas por inteligencia artificial.

## Tech Stack
*   **Framework:** [Next.js](https://nextjs.org/) (v15.2.4)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
    *   `tailwindcss-animate`
*   **UI Components:**
    *   [Radix UI](https://www.radix-ui.com/): Un conjunto extenso de primitivas de UI accesibles y personalizables (Accordion, Dialog, DropdownMenu, etc.).
    *   [Lucide React](https://lucide.dev/): Iconos.
    *   [shadcn/ui](https://ui.shadcn.com/) (inferido por `components.json` y el uso de Radix): Componentes bellamente diseñados.
*   **Manejo de Formularios:** [React Hook Form](https://react-hook-form.com/) con [Zod](https://zod.dev/) para validación.
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
*   **Visualización de Datos:** [Recharts](https://recharts.org/) (potencialmente para estadísticas de sueños)
*   **Notificaciones (Toasts):** [Sonner](https://sonner.emilkowal.ski/)
*   **Partículas Animadas:** [tsParticles](https://particles.js.org/)
*   **API OpenAI:** [openai](https://github.com/openai/openai-node) para integración con modelos de IA.
*   **Utilidades:**
    *   `clsx`, `tailwind-merge` para manejo de clases CSS.
    *   `date-fns` para manipulación de fechas.
    *   `uuid` para generación de identificadores únicos.
*   **Gestor de Paquetes:** `pnpm` (inferido por `pnpm-lock.yaml`)
*   **Linting:** ESLint (configuración por defecto de Next.js)
*   **Analytics:** Vercel Analytics (`@vercel/analytics`)

## Estructura del Proyecto
El proyecto sigue la estructura estándar de una aplicación Next.js con el App Router:
```
aplicacion-registro-suenos-freud/
├── app/                       # Rutas principales y layouts (App Router)
├── components/                # Componentes reutilizables de React
│   ├── ui/                    # Componentes de UI (posiblemente de shadcn/ui)
│   └── (otros componentes)
├── public/                    # Archivos estáticos (imágenes, fuentes, etc.)
├── lib/                       # Funciones de utilidad, hooks personalizados, etc.
│   └── utils.ts               # Utilidades generales (ej. cn)
├── hooks/                     # Hooks personalizados de React
├── styles/                    # Estilos globales (si los hay)
├── types/                     # Definiciones de tipos TypeScript
├── .env.local                 # Variables de entorno (no versionar)
├── next.config.mjs            # Configuración de Next.js
├── tailwind.config.ts         # Configuración de Tailwind CSS
├── tsconfig.json              # Configuración de TypeScript
├── package.json               # Dependencias y scripts del proyecto
└── pnpm-lock.yaml             # Lockfile de pnpm
```

## Primeros Pasos

### Prerrequisitos
*   [Node.js](https://nodejs.org/) (v18.x o superior recomendado)
*   [pnpm](https://pnpm.io/installation) (o npm/yarn si se prefiere, ajustando los comandos)

### Instalación
1.  Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/aplicacion-registro-suenos-freud.git
    cd aplicacion-registro-suenos-freud
    ```
2.  Instala las dependencias:
    ```bash
    pnpm install
    ```
3.  Crea un archivo `.env.local` en la raíz del proyecto y configura las variables de entorno necesarias (ver sección [Variables de Entorno](#variables-de-entorno)). Un ejemplo podría ser:
    ```env
    OPENAI_API_KEY=tu_api_key_de_openai
    # Otras variables necesarias
    ```

### Ejecutar el Servidor de Desarrollo
Para iniciar la aplicación en modo de desarrollo:
```bash
pnpm dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Build para Producción
Para compilar la aplicación para producción:
```bash
pnpm build
```
Y para ejecutar la versión de producción:
```bash
pnpm start
```

## Scripts Disponibles
En el archivo `package.json`, puedes encontrar los siguientes scripts:
*   `pnpm dev`: Inicia la aplicación en modo de desarrollo.
*   `pnpm build`: Compila la aplicación para producción.
*   `pnpm start`: Inicia el servidor de producción.
*   `pnpm lint`: Ejecuta el linter (ESLint) para revisar el código.

## Variables de Entorno
La aplicación puede requerir ciertas variables de entorno para su correcto funcionamiento, especialmente para la integración con servicios externos como OpenAI.
Crea un archivo `.env.local` en la raíz del proyecto y añade las claves necesarias. Un ejemplo:
```
# Para la integración con OpenAI (si se utiliza)
OPENAI_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# Otras variables que la aplicación pueda necesitar
# NEXT_PUBLIC_API_URL="https://api.example.com"
```
Asegúrate de no subir el archivo `.env.local` a tu repositorio Git. Ya está incluido en `.gitignore`.

## Componentes Destacados
La carpeta `components/` contiene los bloques de construcción de la interfaz de usuario. Algunos componentes clave identificados son:
*   `analizar-ultimo-sueno.tsx`: Interfaz para el análisis del sueño más reciente.
*   `app-dock.tsx`: Barra de navegación o acceso rápido.
*   `diccionario-suenos.tsx`: Componente para el diccionario de símbolos oníricos.
*   `feature-section-with-bento-grid.tsx`: Sección de presentación de características en formato bento grid.
*   `hero-odyssey.tsx`: Componente principal de la página de inicio (hero section).
*   `historial-suenos.tsx`: Muestra el historial de sueños del usuario.
*   `introduccion.tsx`: Presenta información introductoria (posiblemente sobre Freud o la app).
*   `libro-freud.tsx`: Contenido relacionado con la obra de Freud.
*   `mi-perfil.tsx`: Sección del perfil del usuario.
*   `navbar.tsx`: Barra de navegación principal.
*   `registrar-sueno.tsx`: Formulario o interfaz para registrar nuevos sueños.
*   `theme-provider.tsx` y `theme-toggle.tsx`: Gestionan y permiten cambiar el tema de la aplicación (claro/oscuro).
*   `trabajo-sueno-interactivo.tsx`: Herramienta interactiva para el análisis profundo de los sueños.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor:
1.  Haz un Fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3.  Realiza tus cambios y haz commit (`git commit -am 'Añade nueva característica'`).
4.  Empuja tus cambios a la rama (`git push origin feature/nueva-caracteristica`).
5.  Abre un Pull Request.

## Licencia
Este proyecto fue creado por Carlos Freire, está bajo la Licencia MIT (o la licencia que prefieras). Ver el archivo `LICENSE` para más detalles. (Nota: Deberás añadir un archivo `LICENSE` si aún no existe).
