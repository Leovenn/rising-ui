import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
/** 增强vue setup 语法 */
import VueMacros from 'unplugin-vue-macros/vite'
/** 新增导入类型 */
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// import { createHtmlPlugin } from 'vite-plugin-html'

// import AutoImport from 'unplugin-auto-import/vite'
// import ViteComponents from 'unplugin-vue-components/vite'
// import { VantResolver } from 'unplugin-vue-components/resolvers'

// import pxtovw from 'cnjm-postcss-px-to-viewport'
// import AutoPrefixer from 'autoprefixer'

// import Icons from 'unplugin-icons/vite'
// import { FileSystemIconLoader } from 'unplugin-icons/loaders'
// import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig((configEnv) => {
  // const { VITE_APP_TITLE, VITE_BASE_URL } = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv
  return {
    /**插件 */
    plugins: [
      vue(),
      dts({
        outputDir: resolve(__dirname, 'rising-ui/es'),
        tsConfigFilePath: './tsconfig.json',
        /** 处理生成的类型文件 目录不对应 */
        beforeWriteFile: (filepath, content) => {
          return {
            filePath: filepath.replace('packages', ''),
            content,
          }
        },
      }),
      dts({
        outputDir: resolve(__dirname, 'rising-ui/lib'),
        tsConfigFilePath: './tsconfig.json',
        beforeWriteFile: (filepath, content) => {
          return {
            filePath: filepath.replace('packages', ''),
            content,
          }
        },
      }),
      VueMacros(),
    ],

    /**配置别名 */
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, 'src'),
    //   },
    // },

    /**配置生产环境 */
    build: {
      //   minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      //   outDir: 'mobile',
      target: 'modules',
      // outDir: resolve(__dirname, 'rising-ui/es'),
      minify: false,
      rollupOptions: {
        external: ['vue'],
        input: ['packages/rising-ui/index.ts'],
        preserveEntrySignatures: 'strict',
        output: [
          {
            format: 'es',
            entryFileNames: '[name].mjs',
            preserveModules: true,
            dir: resolve(__dirname, 'rising-ui/es'),
            preserveModulesRoot: 'rising-ui',
          },
          {
            format: 'cjs',
            entryFileNames: '[name].cjs',
            preserveModules: true,
            dir: resolve(__dirname, 'rising-ui/lib'),
            preserveModulesRoot: 'rising-ui',
          },
          {
            global: {
              vue: 'Vue',
            },
          },
        ],
      },
      // lib: {
      //   entry: 'packages/rising-ui/index.ts',
      //   formats: [],
      // },
    },
  }
})
