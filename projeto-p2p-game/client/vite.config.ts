import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  server: {
    host: true, // permite acesso externo
    allowedHosts: true, // permite qualquer domínio (ngrok incluso)
  },
  build: {
    rollupOptions: {
      input: {
        controller: "controller.html",
        screen: "screen.html",
      },
    },
  },
});
