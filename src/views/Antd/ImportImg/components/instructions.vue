<!--
 * @Author: zengjing
 * @Date: 2024-10-29 16:25:18
 * @LastEditTime: 2024-12-13 10:51:54
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\Antd\ImportImg\components\instructions.vue
 * @Description: 
-->
<template>
  <MdPreview
    :editorId="id"
    :modelValue="decode(text)"
    :codeTheme="appStore.codeTheme"
    :theme="appStore.theme"
    :previewTheme="appStore.previewTheme"
    :codeFoldable="appStore.codeFoldable"
    :autoFoldThreshold="appStore.autoFoldThreshold"
  />
</template>
<script setup>
import { MdPreview, MdCatalog } from "md-editor-v3";
import { encode, decode } from "js-base64";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const id = "preview-only";
const text = ref(
  "IyMjIOmXrumimOaPj+i/sO+8mgrlnKh2dWXpobnnm67kuK3lvJXlhaXmnKzlnLDlm77niYfnmoTmlrnms5XjgILpgYfliLDov4dgIDxpbWcgOnNyYz0iJy9zcmMvYXNzZXRzL2ltYWdlcy9kdWNrLnBuZyciIGFsdD0iIiAvPmDlvJXlhaXlm77niYfvvIzlnKjlhaznlKjnu4Tku7bkuK3vvIzpgJrov4dB57uE5Lu25omT5byA5by55qGG5Zu+54mH6IO95q2j5bi45pi+56S677yM6YCa6L+HQue7hOS7tuaJk+WNoeWImeS4jeihjOOAguacgOWQjuS9v+eUqGByZXR1cm4gbmV3IFVSTChgdXJs5Zyw5Z2AYCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmYOino+WGs+S6humXrumimOOAggoKYGBgbGFuZ3VhZ2UKPHRlbXBsYXRlPgogIDxoMz7lm77niYfliqjmgIHlvJXlhaU8L2gzPgogIGltcG9ydAogIDxpbWcgOnNyYz0iSWNvbiIgYWx0PSIiIC8+CiAgbmV3IFVSTAogIDxpbWcgOnNyYz0iZ2V0SW1hZ2VVcmwoKSIgYWx0PSIiIC8+CiAgOnNyYwogIDxpbWcgOnNyYz0iJy9zcmMvYXNzZXRzL2ltYWdlcy9kdWNrLnBuZyciIGFsdD0iIiAvPgogIGltZwogIDxpbWcgc3JjPSIvc3JjL2Fzc2V0cy9pbWFnZXMvZHVjay5wbmciIGFsdD0iIiAvPgogIDwhLS0gPGltZyA6c3JjPSJyZXF1aXJlKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2R1Y2sucG5nJykiIGFsdD0iIiAvPiAtLT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBzZXR1cD4KaW1wb3J0IEljb24gZnJvbSAiQC9hc3NldHMvaW1hZ2VzL2R1Y2sucG5nIjsKLy8g5Yqo5oCB5byV5YWl5Zu+54mHCmNvbnN0IGdldEltYWdlVXJsID0gKG5hbWUgPSAiZHVjay5wbmciKSA9PiB7CiAgcmV0dXJuIG5ldyBVUkwoYC9zcmMvYXNzZXRzL2ltYWdlcy8ke25hbWV9YCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmOwp9Owo8L3NjcmlwdD4KPHN0eWxlIHNjb3BlZCBsYW5nPSJzY3NzIj48L3N0eWxlPgpgYGAK"
);
console.log(decode(text.value));
</script>
<style scoped lang="scss"></style>
