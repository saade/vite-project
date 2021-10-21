import { createApp } from 'vue'
import installQuasar from 'quasar/src/install-quasar.js'
import iconSet from 'quasar/icon-set/svg-mdi-v6.js'
import lang from 'quasar/lang/pt-BR.js'
import App from './App.vue'

import './styles/quasar/core.sass'

const app = createApp(App)

app.use(installQuasar, {
  config: {
    brand: {
      primary   : '#8B6FAF',
      secondary : '#FFCD00',
      accent    : '#7F66B1',

      dark      : '#0A0A0A',

      positive  : '#21ba45',
      negative  : '#c10015',
      info      : '#0091ea',
      warning   : '#f2c037',
    },
  },
  iconSet,
  lang,
})

app.mount('#app')