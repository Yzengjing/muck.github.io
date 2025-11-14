<!--
 * @Author: zengjing
 * @Date: 2024-11-08 15:39:07
 * @LastEditTime: 2024-11-12 18:16:02
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\ThreeJS\ElementaryCourse\Tomato\Tomato.vue
 * @Description: 
-->

<template>
  <div class="threejs-container">
    <div ref="threejsContainer" class="box"></div>
    <div ref="guiContainer" class="operating"></div>
  </div>
</template>
<script setup>
import { PMREMGenerator } from 'three';
import { onMounted, ref } from "vue";
// import { OrbitControls } from "@three/examples/controls/OrbitControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
const threejsContainer = ref(null);
const guiContainer = ref(null);
// 定义渲染器
const renderer = new THREE.WebGLRenderer();
// 创建场景
var scene = new THREE.Scene();
// 定义相机
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
// 创建GLTF加载器对象
const loader = new GLTFLoader();
// 初始化 OrbitControls，并将它与之前创建的相机相关联。
const controls = new OrbitControls(camera, renderer.domElement);
const controlData = {
  rotationSpeed: 0.01, // 物体的旋转速度
  color: "#66ccff", // 物体的颜色
  wireframe: false, // 是否显示线框
  envMap: "无", // 材质选项
  visible: true, // 是否显示物体
  opacity: 1, // 物体透明度
};

// 创建GUI
const setGui = () => {
  const gui = new GUI({
    autoPlace: false, // 关闭自动挂载
  });
  const folder = gui.addFolder("几何体配置");
  // folder.add(控制对象, 属性名key, 最小值, 最大值, 步长)
  folder.add(controlData, "rotationSpeed", 0.01, 0.1, 0.01);
  guiContainer.value.appendChild(folder.domElement);
};

// 渲染器
const setRenderer = () => {
  // 创建渲染器
  renderer.setSize(
    threejsContainer.value.clientWidth,
    threejsContainer.value.clientHeight
  );
  //你也可以设置WebGL渲染器渲染的Canvas画布背景颜色，如果不设置默认黑色。
  renderer.setClearColor(0x999999);
  renderer.physicallyCorrectLights = true;
  // 将渲染器 DOM 元素添加到容器元素中
  threejsContainer.value.appendChild(renderer.domElement);
};

//灯光
const lightingSetting = () => {
  // AxesHelper：辅助观察的坐标系 three.js坐标轴颜色红R、绿G、蓝B分别对应坐标系的x、y、z轴，对于three.js的3D坐标系默认y轴朝上。
  const axesHelper = new THREE.AxesHelper(200);
  scene.add(axesHelper);

  //环境光:没有特定方向，整体改变场景的光照明暗
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambient);
};

const pmremGenerator = new PMREMGenerator(renderer); // 使用hdr作为背景色
pmremGenerator.compileEquirectangularShader();
const rgbeLoader = new RGBELoader();
rgbeLoader.load('/src/assets/threeJs/tomato/studio_small_09_2k.hdr', function (texture) {
  const envMap = pmremGenerator.fromEquirectangular(texture).texture;
  // envMap.isPmremTexture = true;
  pmremGenerator.dispose();

  scene.environment = envMap; // 给场景添加环境光效果
  scene.background = envMap; // 给场景添加背景图
});

// 场景
const sceneSetting = () => {
  camera.aspect =
    threejsContainer.value.clientWidth / threejsContainer.value.clientHeight;
  camera.position.z = 5;
  camera.position.x = 5;
  camera.position.y = 0;
  //相机观察目标指向Threejs 3D空间中某个位置 ,设置跟随模型的位置视野就一直在中间
  camera.lookAt(0, 0, 0); //坐标原点
  camera.updateProjectionMatrix();
  // 加载blender模型
  loader.load("/src/assets/threeJs/tomato/scene.gltf", (gltf) => {
    gltf.scene.position.set(0, 0, 0);
    scene.add(gltf.scene);
  });

  loader.load("/src/assets/threeJs/cicada/scene.gltf", (gltf) => {
    gltf.scene.position.set(3, 0, 0);
    gltf.scene.castShadow = true;

    var cicadaPaint = gltf.scene.children[0];
    gltf.scene.traverse(function (obj) {
      if (obj.isMesh) {
        // 重新设置材质
        console.log('gltf默认材质12345', obj.material.name);
        if (obj.material.name == "CICADA_PAINT") {

        }
      }
    });
    scene.add(gltf.scene);
  });

};

// 渲染循环
const setAnimate = () => {
  requestAnimationFrame(setAnimate);
  controls.update();
  renderer.render(scene, camera);
};
onMounted(() => {
  setGui();
  setRenderer();
  lightingSetting();
  sceneSetting();
  // 监听窗口移动
  window.addEventListener("resize", () => {
    // 处理窗口尺寸变化的代码
    // 重置相机输出画布canvas尺寸
    camera.aspect =
      threejsContainer.value.clientWidth / threejsContainer.value.clientHeight;
    // 如果相机视锥体相关参数发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
    camera.updateProjectionMatrix();
    camera.far = 100;
    camera.near = 0.1;
    // 重置渲染器输出画布canvas尺寸
    renderer.setSize(
      threejsContainer.value.clientWidth,
      threejsContainer.value.clientHeight
    );
  });

  setAnimate();
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
