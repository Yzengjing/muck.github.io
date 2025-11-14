<!--
 * @Author: zengjing
 * @Date: 2024-09-04 16:20:41
 * @LastEditTime: 2024-10-29 13:57:43
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\HomeView\index.vue
 * @Description: 
-->
<template>
  <a-layout class="home">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="../../assets/images/duck.png" style="width: 30%" />
      </div>
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 8px;">
        <menu-unfold-outlined
          v-if="collapsed"
          :style="{ fontSize: '20px' }"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          :style="{ fontSize: '20px' }"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>

      <a-layout-content>
        <div style="margin: 10px 20px"><Breadcrumb /></div>
        
        <div class="content">
          <router-view /> 
        </div>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import Breadcrumb from "./Breadcrumb.vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import Menu from "./Menu.vue";
const collapsed = ref(false);
</script>
<style lang="less">
.home {
  margin: 0;
  width: 100vw !important;
  height: 100vh;
  overflow-y: auto !important;
  overflow-x: hidden !important;

  .logo {
    margin: 0 auto 0px;
    text-align: center;
    img {
      border-radius: 5px;
      margin: 10px 0;
    }
    // background-color: aqua;
  }

  .content {
    background-color: #fff;
    margin: 0 20px;
    min-height: 92%;
    border-radius: 5px;
    padding: 10px 20px;
  }
}
</style>
