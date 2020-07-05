// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content: 'Tax,Taxes,CRA,Revenue,Personal'
  })

  head.meta.push({
    name: 'description',
    content: 'Corporate website for KTC Taxes'
  })

  head.meta.push({
    name: 'author',
    content: 'SBD Systems By Design Inc.'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
    // TODO GW add Open+Sans:400,700 - also check tailwind.config.js
    // see node_modules/tailwindcss/stubs/defaultConfig.stub.js for OOT classes
  })
}


