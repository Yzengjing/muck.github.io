<!--
 * @Author: zengjing
 * @Date: 2024-11-08 15:39:07
 * @LastEditTime: 2024-11-12 11:04:50
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\ThreeJS\ElementaryCourse\Geometry\Geometry.vue
 * @Description: 
-->

<template>
  <div class="threejs-container">
    <div ref="threejsContainer" class="box"></div>
    <div ref="guiContainer" class="operating"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
// import { OrbitControls } from "@three/examples/controls/OrbitControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
const threejsContainer = ref(null);
const guiContainer = ref(null);
// 创建场景
const gui = new GUI({
  name: "my gui",
  autoPlace: false,
  //  width: 30
});
const controlData = {
  rotationSpeed: 0.01, // 物体的旋转速度
  color: "#66ccff", // 物体的颜色
  wireframe: false, // 是否显示线框
  envMap: "无", // 材质选项
  visible: true, // 是否显示物体
  opacity: 1, // 物体透明度
};

onMounted(() => {
  var scene = new THREE.Scene();

  // 初始化相机
  var camera = new THREE.PerspectiveCamera(
    75,
    threejsContainer.value.clientWidth / threejsContainer.value.clientHeight,
    0.1,
    1000
  );

  camera.position.z = 500;
  camera.position.x = 100;
  camera.position.y = 0;
  //相机观察目标指向Threejs 3D空间中某个位置 ,设置跟随模型的位置视野就一直在中间
  camera.lookAt(0, 0, 0); //坐标原点

  // 创建渲染器
  var renderer = new THREE.WebGLRenderer();

  renderer.setSize(
    threejsContainer.value.clientWidth,
    threejsContainer.value.clientHeight
  );

  //你也可以设置WebGL渲染器渲染的Canvas画布背景颜色，如果不设置默认黑色。
  renderer.setClearColor(0x999999);

  // 将渲染器 DOM 元素添加到容器元素中
  threejsContainer.value.appendChild(renderer.domElement);

  const folder = gui.addFolder("几何体配置");
  // folder.add(控制对象, 属性名key, 最小值, 最大值, 步长)
  folder.add(controlData, "rotationSpeed", 0.01, 0.1, 0.01);
  // 挂载GUI到指定位置
  guiContainer.value.appendChild(folder.domElement);

  // 初始化 OrbitControls，并将它与之前创建的相机相关联。
  const controls = new OrbitControls(camera, renderer.domElement);

  // 创建一个立方体
  var geometry = new THREE.BoxGeometry(50, 40, 30);
  var material = new THREE.MeshLambertMaterial({
    color: 0xff2,
    transparent: true, //开启透明
    opacity: 0.8, //设置透明度
  });
  // 两个参数分别为几何体geometry、材质material
  var cube = new THREE.Mesh(geometry, material);
  //设置网格模型在三维空间中的位置坐标，默认是坐标原点
  cube.position.set(0, 0, 0);
  scene.add(cube);

  var geometry1 = new THREE.BoxGeometry(50, 40, 30);
  // .clone()克隆材质,材质对象执行克隆方法.clone()会返回一个新的材质对象，克隆的新材质和原来材质外观一样，但是互不影响
  const material2 = material.clone();
  var cube1 = new THREE.Mesh(geometry1, material2);
  cube1.position.set(100, 0, 0);

  scene.add(cube1);

  // AxesHelper：辅助观察的坐标系
  // three.js坐标轴颜色红R、绿G、蓝B分别对应坐标系的x、y、z轴，对于three.js的3D坐标系默认y轴朝上。
  const axesHelper = new THREE.AxesHelper(200);
  scene.add(axesHelper);

  let pointLight = new THREE.PointLight(0xff2, 100);
  //   pointLight.intensity = 1000; //光照强度
  pointLight.decay = 2.0; //设置光源不随距离衰减
  pointLight.position.set(100, 60, 50);
  scene.add(pointLight); //点光源添加到场景中

  // 光源辅助观察
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
  scene.add(pointLightHelper);

  //环境光:没有特定方向，整体改变场景的光照明暗
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambient);

  // 平行光
  const directionalLight = new THREE.DirectionalLight(0xff2, 50);
  // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
  directionalLight.position.set(80, 100, 50);
  directionalLight.target = cube;
  // 方向光默认指向xyz坐标原点
  scene.add(directionalLight);

  // DirectionalLightHelper：可视化平行光
  const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0xfee);
  scene.add(dirLightHelper);

  // 监听窗口移动
  window.addEventListener("resize", () => {
    // 处理窗口尺寸变化的代码
    // 重置相机输出画布canvas尺寸
    camera.aspect =
      threejsContainer.value.clientWidth / threejsContainer.value.clientHeight;
    // 如果相机视锥体相关参数发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
    camera.updateProjectionMatrix();
    // 重置渲染器输出画布canvas尺寸
    renderer.setSize(
      threejsContainer.value.clientWidth,
      threejsContainer.value.clientHeight
    );
  });

  // 渲染循环 
  function animate() {
    requestAnimationFrame(animate);
    // 立方体旋转动画
    // cube.rotation.x += 0.01;
    cube.rotation.y += controlData.rotationSpeed;
    // pointLight.position.set(400, 200, 300);
    controls.update();
    // 渲染场景和相机
    // cube.rotateY(0.01); //每次绕y轴旋转0.01弧度
    renderer.render(scene, camera);
  }
  animate();
});

// beforeUnmount(() => {
//   // 在组件卸载前移除 resize 事件监听器
//   window.removeEventListener("resize");
// });
</script>
<style scoped lang="scss">
.threejs-container {
  height: 78vh;
  width: 100%;
  border: 1px solid black;

  display: flex;
  .box {
    width: 80%;
  }
  .operating {
    width: 20%;
  }
}
</style>
