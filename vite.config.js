import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/weatherApp/', // Change ce chemin selon le nom de ton dépôt
  plugins: [react()], // Plugin pour utiliser React
  server: {
    port: 3000, // Port sur lequel le serveur de développement va tourner
  },
  build: {
    outDir: 'dist', // Dossier de sortie pour la construction
    sourcemap: true, // Génère une carte source pour le débogage
  },
  resolve: {
    alias: {
      // Alias pour simplifier les imports
      '@': '/src', // Utilise '@/components/MonComposant' pour importer un composant
    },
  },
});
