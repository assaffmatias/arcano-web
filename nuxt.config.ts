// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  pages: true,

  app: {
    head: {
      title: 'Arcano',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com'
          // , crossorigin: true 
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
          rel: 'stylesheet'
        },
        { rel: 'icon', type: 'image/png', href: '/icon.png' }
      ]
    }
  },

  modules: ['@nuxt/ui']

  ,
  css: [
     '~/assets/css/variables.css'
  ]
})