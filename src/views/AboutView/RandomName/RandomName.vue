<!--
 * @Author: zengjing
 * @Date: 2024-10-16 14:04:40
 * @LastEditTime: 2024-11-04 14:33:48
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\AboutView\RandomName\RandomName.vue
 * @Description: 随机网名
-->

<template>
  <div>
    <a-button type="primary" @click="getOneName">随机名称</a-button>
    <div style="width: 360px; margin-top: 10px">
      <!-- <a-input-number :min="2" v-model:value="nameLength" placeholder="请输入名称长度" /> -->
      <a-textarea
        v-model:value="name"
        placeholder="随机名称"
        :auto-size="{ minRows: 5, maxRows: 5 }"
      />
    </div>
  </div>
</template>
<script setup>
const name = ref("");
const nameLength = ref(2);
const getOneName = function () {
  const names =
    "春集木艺草止州朝角曲若境遇雨冷贝雪烟依闻唱沙顾泪圣牛哭鱼舞午登楼渐左录丝叶吉松临藏戏悲敢伊村词森云散迷油旧采九冰素疑余彩灯岁往何度山万边风原失远格音轻深完思切非语元喜飞言流欢约林球运司见明问力理尔文果月十实向光白花乐色";
  const namesArr = Array.from(new Set(names.split("")));
  // console.log(names.length, namesArr.length)
  nameLength.value = Math.floor(Math.random() * 5) + 2;
  name.value = "";
  for (let i = 0; i < nameLength.value; i++) {
    const Index = Math.floor(Math.random() * names.length);
    name.value += namesArr[Index];
  }
};
</script>
<style scoped lang="scss"></style>
