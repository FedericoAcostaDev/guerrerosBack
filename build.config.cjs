import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    treeShaking: true,
    minifyWhitespace: true,
    minifySyntax: true,
    minifyIdentifiers: true,
    legalComments: 'none'
  },
  build: {
    minify: 'esbuild',
    outDir: 'build',
    lib: {
      entry: path.resolve(__dirname, '/src/server.js'),
      name: 'UniversalLabsCss',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      strictDeprecations: true,
      makeAbsoluteExternalsRelative: 'ifRelativeSource',
      treeshake: true,
      output: {
        extend: true,
        externalImportAssertions: true
      },
    },
    emptyOutDir: false
  }
})
