/*
 * @Author: zengjing
 * @Date: 2024-09-04 13:43:30
 * @LastEditTime: 2025-11-19 10:49:57
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\vite.config.js
 * @Description: 
 */
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

import IconsResolver from "unplugin-icons/resolver";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path" // 需安装此模块
export default defineConfig({
  base: './',
  devServer: {
    port: 5000,//端口号
    open: true, //是否自启动
  },
  resolve: {
    alias: {
      // 在Vue.js项目中设置"@"别名，可以简化文件引用路径，提高开发效率。
      "@": path.resolve(__dirname, "./src"),
      '@three/examples': path.resolve(__dirname, 'node_modules/three/examples/jsm'),
    },
  },
  plugins: [
    vue(),
    // 自动导入ref、onmounted等等
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'axios': [
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
        }
      ],
      dts: false,
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
          // 按需引入图标
          resolveIcons: true
        }),
      ],
      dts: false,
    }),
  ],

  css: {
    preprocessorOptions: {
      // 如果'modern-compiler'不管用，可换成"modern"
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
})
