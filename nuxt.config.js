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
    script: [
      {src:'https://kit.fontawesome.com/bb2f33706c.js'}
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: [
    "@/assets/css/bootstrap/bootstrap.css",
    "@/assets/css/style.css",
    "@/assets/css/header/topheader.css",
    "@/assets/css/header/lowerheader.css",
    "@/assets/css/index/index.css",
    "@/assets/css/detail/detail.css",
    "@/assets/css/cart/cart.css",
    "@/assets/css/footer/footer.css",
    "@/assets/css/mobilemenu/mobilemenu.css",
    "@/assets/css/mediascreen/mediascreen.css",
],
  js: [],
  plugins: [
    '@/plugins/VueFragment',
    '@/plugins/VueObserveVisibility',
    { src: '~/plugins/VueCarousel.js', mode: 'client' },
    '@/plugins/VueZoomOnHover',

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
