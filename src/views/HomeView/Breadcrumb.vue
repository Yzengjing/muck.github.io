<!--
 * @Author: zengjing
 * @Date: 2024-09-04 18:18:34
 * @LastEditTime: 2024-11-04 17:44:08
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\HomeView\Breadcrumb.vue
 * @Description: 配置面包屑
-->
<template>
  <a-breadcrumb>
    <a-breadcrumb-item href="">
      <home-outlined />
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in breadArr" :key="item.path">{{
      item.meta.title
    }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script setup>
import { onMounted } from "vue";
import { routesList } from "../../router/index";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const breadArr = computed(() => {
  return deepCloneBreadCrumb(routesList[0].children);
});
// 组装面包屑
const deepCloneBreadCrumb = (arr = [], clone = []) => {
  arr.forEach((item, index) => {
    if (route.path.includes(item.path)) {
      clone.push(item);
      let { children = [] } = item;
      if (children.length > 0) {
        deepCloneBreadCrumb(item.children, clone); // 递归克隆数组元素
      }
    }
  });
  return clone;
};

// onMounted(() => {
//   deepCloneBreadCrumb(routesList[0].children);
// });
</script>
<style scoped lang="scss"></style>
