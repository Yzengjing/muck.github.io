<!--
 * @Author: zengjing
 * @Date: 2024-11-08 15:37:39
 * @LastEditTime: 2024-11-12 16:23:56
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\ThreeJS\ElementaryCourse\ElementaryCourse.vue
 * @Description: 
-->

<template>
  <div class="MarkdownPlug">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="几何体"> <Geometry></Geometry></a-tab-pane>
      <a-tab-pane key="2" tab="使用说明"> <instructions></instructions></a-tab-pane>
      <a-tab-pane key="3" tab="一颗番茄"> <Tomato></Tomato></a-tab-pane>
      <template #rightExtra>
        <ConfigureThemeColor></ConfigureThemeColor>
      </template>
    </a-tabs>
  </div>
</template>

<script setup>
import Geometry from "./Geometry/Geometry.vue";
import instructions from "./Geometry/instructions.vue";
import Tomato from "./Tomato/Tomato.vue";
const activeKey = ref("3");
</script>

<style lang="scss"></style>
