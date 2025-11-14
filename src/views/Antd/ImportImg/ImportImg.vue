<template>
  <div class="MarkdownPlug">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="动态引入图片"> <importImg></importImg></a-tab-pane>
      <a-tab-pane key="2" tab="使用说明"><instructions></instructions></a-tab-pane>

      <template #rightExtra>
        <ConfigureThemeColor></ConfigureThemeColor>
      </template>
    </a-tabs>
  </div>
</template>

<script setup>
import importImg from "./components/importImg.vue";
import instructions from "./components/instructions.vue";
const activeKey = ref("1");
</script>

<style lang="scss"></style>
