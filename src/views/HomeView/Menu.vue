<!--
 * @Author: zengjing
 * @Date: 2024-09-04 18:22:11
 * @LastEditTime: 2024-11-05 10:24:00
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\HomeView\Menu.vue
 * @Description: 
-->
<template>
  <a-menu
    v-model:selectedKeys="state.selectedKeys"
    mode="inline"
    theme="dark"
    :open-keys="state.openKeys"
    :items="menuList"
    @openChange="onOpenChange"
    @click="changeMenu"
  ></a-menu>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import { routesList } from "../../router/index";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = reactive([
  getItem("Antd", "antd", () => h(RadarChartOutlined), [
    getItem("Form表单", "formTable"),
  ]),
]);

const menuList = computed(() => {
  return deepCloneMenu(routesList[0].children);
});

// 组装菜单
const deepCloneMenu = (arr) => {
  const clone = [];
  arr.forEach((item, index) => {
    let { children = [] } = item;
    let obj = JSON.parse(JSON.stringify(item));
    delete obj.children;
    if (children.length > 0) {
      clone[index] = getItem(obj.meta.title, obj.path, () => h(item.meta.Icon));
      clone[index].children = deepCloneMenu(item.children); // 递归克隆数组元素
    } else {
      let Item = getItem(obj.meta.title, obj.path, null);
      clone.push(Item);
    }
  });
  return clone;
};

const state = reactive({
  rootSubmenuKeys: [],
  openKeys: [],
  selectedKeys: [],
});

const onOpenChange = (openKeys) => {
  const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};

const changeMenu = ({ item, key, keyPath }) => {
  router.push("/" + keyPath.join("/"));
};
</script>
