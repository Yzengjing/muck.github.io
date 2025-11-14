<!--
 * @Author: zengjing
 * @Date: 2024-10-29 16:25:18
 * @LastEditTime: 2024-11-04 14:57:22
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\AboutView\MarkdownPlug-in\components\instructions.vue
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
  "IyMjIOmXrumimOaPj+i/sO+8mgptZC1lZGl0b3ItdjNANC4yMS4yICBodHRwczovL2ltemJmLmdpdGh1Yi5pby9tZC1lZGl0b3ItdjMvemgtQ04vZGVtbyAgCk1hcmtkb3du57yW6L6R5ZmoVnVlM+eJiOacrO+8jOS9v+eUqGpzeOWSjHR5cGVzY3JpcHTor63ms5XlvIDlj5HvvIzmlK/mjIHliIfmjaLkuLvpopjjgIFwcmV0dGllcue+juWMluaWh+acrOetieOAggpiYXNlNjTlnKjnur/lnLDlnYDvvJpodHRwczovL2Jhc2U2NC51cy8KYGBganMKLy8g5a6J6KOFCm5wbSBpbnN0YWxsIG1kLWVkaXRvci12MwpgYGAKYGBganMKLy8g5Zyoc2V0dXDkuK3kvb/nlKgKPHRlbXBsYXRlPgogIDxNZEVkaXRvciB2LW1vZGVsPSd0ZXh0JyAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IHNldHVwPgppbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBNZEVkaXRvciB9IGZyb20gJ21kLWVkaXRvci12Myc7CmltcG9ydCAnbWQtZWRpdG9yLXYzL2xpYi9zdHlsZS5jc3MnOwpjb25zdCB0ZXh0ID0gcmVmKCdIZWxsbyBFZGl0b3IhJyk7Cjwvc2NyaXB0PgpgYGA="
);

console.log(decode(text.value));
</script>
<style scoped lang="scss"></style>
