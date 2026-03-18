import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: "0.0.0.0",
    port: 10000,
    allowedHosts: [
      "portfolio-1-hvbd.onrender.com"
    ]
  }
})
