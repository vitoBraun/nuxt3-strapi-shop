// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: ["nuxt-icon"],
  runtimeConfig: {
    public: {
      API_HOST: process.env.API_HOST,
      API_PORT: process.env.API_PORT,
    },
  },
});
