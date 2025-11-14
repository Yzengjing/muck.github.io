<!--
 * @Description:
 * @Author: xiaolong.Zhang
 * @Date: 2022-07-17 23:59:20
 * @LastEditTime: 2024-09-05 13:27:40
 * @LastEditors: Please set LastEditors
-->
<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
<script setup></script>
<style lang="less" scoped></style>
