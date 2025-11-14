<!--
 * @Author: zengjing
 * @Date: 2024-09-04 13:43:30
 * @LastEditTime: 2024-10-29 13:46:39
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\App.vue
 * @Description: 
-->

<!--通过修改算法可以快速生成风格迥异的主题，4.0 版本中默认提供三套预设算法，
分别是默认算法 theme.defaultAlgorithm、暗色算法 theme.darkAlgorithm 和紧凑算法 theme.compactAlgorithm。
你可以通过修改 ConfigProvider 中 theme 属性的 algorithm 属性来切换算法。
-->
<template>
  <a-config-provider
    :locale="zhCN"
    :theme="{
      token: {
        // colorPrimary:'#f530ed',
        // wireframe:true,
      },
    }"
  >
    <router-view v-slot="{ Component }">
      <div>
        <component :is="Component" />
      </div>
    </router-view>
  </a-config-provider>
</template>
<script setup>
import { theme } from "ant-design-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import ConfigureThemeColor from "./components/ConfigureThemeColor.vue";
</script>
<style scoped lang="less"></style>
