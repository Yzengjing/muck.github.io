/*
 * @Author: zengjing
 * @Date: 2024-09-04 16:19:34
 * @LastEditTime: 2025-11-19 10:48:58
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\router\index.js
 * @Description: 
 */
import { createMemoryHistory, createWebHistory, createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView/index.vue'
import SubLayout from '../views/HomeView/SubLayout.vue'
import { RadarChartOutlined, AlertOutlined, BugOutlined } from '@ant-design/icons-vue';

export const routesList = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
        redirect: '/antd/formTable',
        children: [
            {
                path: "antd",
                name: "antd",
                component: SubLayout,
                redirect: '/antd/formTable',
                meta: {
                    title: "Antd",
                    Icon: RadarChartOutlined,
                },
                children: [
                    {
                        path: "formTable",
                        name: 'formTable',
                        component: () => import("@/views/Antd/FormTable/FormTable.vue"),
                        meta: {
                            title: "Form表单",
                        },
                    },
                    {
                        path: "importImg",
                        name: 'importImg',
                        component: () => import("@/views/Antd/ImportImg/importImg.vue"),
                        meta: {
                            title: "图片引入",
                        },
                    },
                ]
            },
            {
                path: "aboutView",
                name: "aboutView",
                component: SubLayout,
                meta: {
                    title: "aboutView",
                    Icon: AlertOutlined,
                },
                children: [
                    {
                        path: "randomName",
                        name: 'randomName',
                        component: () => import("@/views/AboutView/RandomName/RandomName.vue"),
                        meta: {
                            title: "随机网名",
                        },
                    },
                    {
                        path: "markdownPlug-in",
                        name: 'markdownPlug-in',
                        component: () => import("@/views/AboutView/MarkdownPlug-in/MarkdownPlug-in.vue"),
                        meta: {
                            title: "md-editor-v3插件",
                        },
                    },
                    {
                        path: "gallery-component",
                        name: 'gallery-component',
                        component: () => import("@/views/AboutView/GalleryComponent/GallleryComponent.vue"),
                        meta: {
                            title: "插件",
                        },
                    },
                ],
            },
            {
                path: "threeJs",
                name: "threeJs",
                component: SubLayout,
                meta: {
                    title: "ThreeJs",
                    Icon: BugOutlined,
                },
                children: [
                    {
                        path: "elementaryCourse",
                        name: 'elementaryCourse',
                        component: () => import("../views/ThreeJS/ElementaryCourse/ElementaryCourse.vue"),
                        meta: {
                            title: "入门练习",
                        },
                    },
                ],
            },
            {
                path: "python",
                name: "python",
                component: SubLayout,
                meta: {
                    title: "Python",
                    Icon: BugOutlined,
                },
                children: [
                    {
                        path: "image-rename",
                        name: 'image-rename',
                        component: () => import("../views/Python/ImageRename/ImageRename.vue"),
                        meta: {
                            title: "图片重命名",
                        },
                    },
                ],
            },
        ]
    },
]

export const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes: routesList,
})
