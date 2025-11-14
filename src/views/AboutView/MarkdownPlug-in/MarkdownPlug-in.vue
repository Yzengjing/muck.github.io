<!--
 * @Author: zengjing
 * @Date: 2024-10-28 17:52:50
 * @LastEditTime: 2024-11-04 14:40:02
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\AboutView\MarkdownPlug-in\MarkdownPlug-in.vue
 * @Description: 
-->

<template>
  <div class="MarkdownPlug">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="markdown编辑器"> <markdown></markdown></a-tab-pane>
      <a-tab-pane key="2" tab="使用说明"><instructions></instructions></a-tab-pane>

      <template #rightExtra>
        <ConfigureThemeColor></ConfigureThemeColor>
      </template>
    </a-tabs>
  </div>
</template>

<script setup>
import markdown from "./components/markdown.vue";
import instructions from "./components/instructions.vue";
const activeKey = ref("1");
</script>

<style lang="scss"></style>
