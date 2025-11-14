<template>
  <div class="MarkdownPlug">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Form表单校验"> <formTable></formTable></a-tab-pane>
      <a-tab-pane key="2" tab="使用说明"><instructions></instructions></a-tab-pane>

      <template #rightExtra>
        <ConfigureThemeColor></ConfigureThemeColor>
      </template>
    </a-tabs>
  </div>
</template>

<script setup>
import formTable from "./components/formTable.vue";
import instructions from "./components/instructions.vue";
const activeKey = ref("1");
</script>

<style lang="scss"></style>
