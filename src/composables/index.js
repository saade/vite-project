/**
 * This export is necessary for auto import plugin to work. See vite.confi.js
 * https://github.com/antfu/unplugin-auto-import#configuration
 */
export function composablesAutoImportResolver() {
  // Included separeted to avoid ESM errors.
  return {
    '@/composables/use-notify': [
      ['default', 'useNotify'],
    ],
    '@/composables/use-sleep': [
      ['default', 'useSleep'],
    ],
  }
}
