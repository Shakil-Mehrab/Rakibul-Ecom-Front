export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ecomfront",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    script: [],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [
    "@/assets/css/bootstrap/bootstrap.css",
    "@/assets/css/style.css",
    "@/assets/css/mobilemenu/mobilemenu.css"

],
  js: [],
  plugins: [
    '@/plugins/VueFragment',
    '@/plugins/VueObserveVisibility',
    { src: '~/plugins/VueCarousel.js', mode: 'client' },

  ],

  components: true,

  buildModules: [],

  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
