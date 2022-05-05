import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  
  server: {
    origin: 'http://localhost:3000/frontend/',
    host: '0.0.0.0',
    fs: {
        strict: true,
    }
},
css: {
  preprocessorOptions: {
    scss: { 
       // example : additionalData: `@import "./src/design/styles/variables";`
       // dont need include file extend .scss
       additionalData: '@import "@/styles/index.scss";',
   },
  },
},
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
