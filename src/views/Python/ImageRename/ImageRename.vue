<!--
 * @Author: zengjing
 * @Date: 2024-12-19 16:14:32
 * @LastEditTime: 2024-12-19 16:17:59
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\Python\ImageRename\ImageRename.vue
 * @Description: 
-->
<template>
  <div class="MarkdownPlug">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="2" tab="使用说明"><instructions></instructions></a-tab-pane>
      <template #rightExtra>
        <ConfigureThemeColor></ConfigureThemeColor>
      </template>
    </a-tabs>
  </div>
</template>

<script setup>
import instructions from "./components/instructions.vue";
const activeKey = ref("2");
</script>

<style lang="scss"></style>
