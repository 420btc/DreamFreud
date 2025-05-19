/** @type {import('next').NextConfig} */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com'],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'tu-clave-secreta-aqui',
    // Las credenciales deben estar en variables de entorno, no hardcodeadas
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  webpack: (config, { isServer }) => {
    // Añadir el plugin solo en el cliente
    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[id].[contenthash].css',
        })
      );

      // Asegurarse de que las reglas de CSS usen MiniCssExtractPlugin
      const cssRules = config.module.rules.find(rule => 
        rule.test && rule.test.toString().includes('css')
      );
      
      if (cssRules) {
        const cssLoader = cssRules.oneOf?.find(rule => 
          rule.sideEffects && rule.use && 
          rule.use.some(use => use.loader && use.loader.includes('css-loader'))
        );
        
        if (cssLoader) {
          const miniCssExtractLoader = {
            loader: MiniCssExtractPlugin.loader,
          };
          
          // Reemplazar el style-loader con mini-css-extract-plugin
          cssLoader.use = [miniCssExtractLoader].concat(
            cssLoader.use?.filter(use => 
              !use.loader || !use.loader.includes('style-loader')
            ) || []
          );
        }
      }
    }
    
    return config;
  },
};

export default nextConfig;
