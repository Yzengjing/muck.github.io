/*
 * @Author: zengjing
 * @Date: 2024-10-31 10:51:57
 * @LastEditTime: 2024-11-04 14:58:59
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\stores\app.js
 * @Description: 
 */
import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
    state: () => {
        return {
            theme: "light",
            codeTheme: 'atom',
            previewTheme: 'vuepress',
            codeFoldable: true, // 是否开启折叠代码功能
            autoFoldThreshold: 60, // 触发自动折叠代码的行数阈值
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        // 修改state数据
        updatedState(payload) {
            // 在 Pinia 中，直接替换整个 this.$state 对象是不推荐的做法，而且实际上也不会按预期工作，因为 Pinia 使用 Proxy 来代理 state，直接替换 $state 可能会破坏这个代理，导致一些不可预见的问题
            // this.$state = {
            //     ...this.$state,
            //     ...payload,
            // }
            if (payload) {
                Object.keys(payload).forEach(key => {
                    this[key] = payload[key]; // 直接修改 state 的属性
                });
            }
            console.log(this.$state, "仓库修改数据")
        },
    },
})