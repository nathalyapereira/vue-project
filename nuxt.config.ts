// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  components: [{ path: "@/components", pathPrefix: false }],

  app: {
    // baseURL: 'http://localhost:3000/',
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  dir: {
    app: "app",
    assets: "assets",
    layouts: "layouts",
    middleware: "middleware",
    modules: "modules",
    pages: "pages",
    plugins: "plugins",
    public: "public",
    static: "static",
  },

  modules: [
    "@pinia/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],

  pinia: {
    storesDirs: ["./stores/**"],
  },

  tailwindcss: {
    // Options
  },

  typescript: {
    strict: false,
  },
});
