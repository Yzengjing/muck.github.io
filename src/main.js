/*
 * @Author: zengjing
 * @Date: 2024-09-04 13:43:30
 * @LastEditTime: 2024-11-01 10:23:06
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\main.js
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router';
import App from './App.vue'
import Antd from 'ant-design-vue';
import "./assets/css/base.css"
import 'ant-design-vue/dist/reset.css';
import 'md-editor-v3/lib/style.css';
import suDesignVue from 'su-design-vue' // 或你的库路径
import "../node_modules/su-design-vue/su-design-vue.es.css"
import "su-design-vue/su-design-vue.es.css"; 

const app = createApp(App);
app.use(router)
app.use(Antd)
app.use(suDesignVue)
app.use(createPinia())

app.mount('#app');