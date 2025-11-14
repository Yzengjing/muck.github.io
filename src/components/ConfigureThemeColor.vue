<template>
  <a-space :size="8">
    <a-dropdown placement="bottom" arrow>
      <a-button>默认/暗黑</a-button>
      <template #overlay>
        <a-menu @click="(event) => handleMenuClick(event, 'theme')">
          <a-menu-item key="light">
            <a href="javascript:;">light</a>
          </a-menu-item>
          <a-menu-item key="dark">
            <a href="javascript:;">dark</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <a-dropdown placement="bottom" arrow>
      <a-button>预览主题</a-button>
      <template #overlay>
        <a-menu @click="(event) => handleMenuClick(event, 'previewTheme')">
          <a-menu-item v-for="item in previewTheme" :key="item" >
            <a href="javascript:;">{{ item }}</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <a-dropdown placement="bottom" arrow>
      <a-button>代码主题</a-button>
      <template #overlay>
        <a-menu @click="(event) => handleMenuClick(event, 'codeTheme')">
          <a-menu-item v-for="item in codeTheme" :key="item">
            <a href="javascript:;">{{ item }}</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-space>
</template>
<script setup>
import { useAppStore } from "../stores/app";
const appStore = useAppStore();

const previewTheme = [
  "default",
  "github",
  "vuepress",
  "mk-cute",
  "smart-blue",
  "cyanosis",
  "arknights",
];
const codeTheme = [
  "atom",
  "a11y",
  "github",
  "gradient",
  "kimbie",
  "paraiso",
  "qtcreator",
  "stackoverflow",
];


const handleMenuClick = ({ key } = e, type) => {
  appStore.updatedState({ [type]: key });
};
</script>
<style scoped lang="scss"></style>
