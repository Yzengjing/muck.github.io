<!--
 * @Author: zengjing
 * @Date: 2024-10-29 11:26:11
 * @LastEditTime: 2024-11-04 17:59:37
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\AboutView\MarkdownPlug-in\components\markdown.vue
 * @Description: md-editor-v3编辑器
-->

<template>
  <div class="markdown">
    <MdEditor
      v-model="text"
      :codeTheme="appStore.codeTheme"
      :theme="appStore.theme"
      :previewTheme="appStore.previewTheme"
      :codeFoldable="false"
      :autoFoldThreshold="appStore.autoFoldThreshold"
    />
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
import { MdEditor } from "md-editor-v3";
import { ref } from "vue";
const text = ref("");

// :formatCopiedText="formatCopiedText"
const formatCopiedText = (text) => {
  return `${text}  - from md-editor-v3`;
};
</script>

<style lang="scss">
.markdown {
  height: 78vh;
  .md-editor {
    height: 100% !important;
  }
}
</style>
