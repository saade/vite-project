import { resolve } from 'path'
import { defineConfig } from 'vite'
import { Quasar } from 'quasar'
import { composablesAutoImportResolver } from './src/composables'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import { QuasarResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    Vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        composablesAutoImportResolver(),
      ],
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        QuasarResolver(),
      ],
    }),
  ],

  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "@/styles/quasar/variables.sass"\n',
      },
    },
  },

  define: {
    __QUASAR_VERSION__: JSON.stringify(Quasar.version),
    __QUASAR_SSR__: JSON.stringify('import.meta.env.SSR'),
    __QUASAR_SSR_SERVER__: false,
    __QUASAR_SSR_CLIENT__: false,
    __QUASAR_SSR_PWA__: false,
  },

  server: {
    force: true,
  },

  optimizeDeps: {
    exclude: [
      'quasar',
    ],
  },

})
