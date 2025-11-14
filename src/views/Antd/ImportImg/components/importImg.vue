<!--
 * @Author: zengjing
 * @Date: 2024-09-04 16:40:37
 * @LastEditTime: 2024-12-13 10:44:40
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\Antd\ImportImg\components\importImg.vue
 * @Description: 学习form+table
-->
<template>
  <h3>图片动态引入</h3>
  import
  <img :src="Icon" alt="" />
  new URL
  <img :src="getImageUrl()" alt="" />
  :src
  <img :src="'/src/assets/images/duck.png'" alt="" />
  img
  <img src="/src/assets/images/duck.png" alt="" />
  <!-- <img :src="require('../../../../assets/images/duck.png')" alt="" /> -->
</template>
<script setup>
import Icon from "@/assets/images/duck.png";
// 动态引入图片
const getImageUrl = (name = "duck.png") => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href;
};
</script>
<style scoped lang="scss"></style>
