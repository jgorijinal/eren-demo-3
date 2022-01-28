import Toast from './toast.vue'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message,toastOptions) {
            const Constructor = Vue.extend(Toast)  //创建动态实例
            const toast = new Constructor({
                propsData:toastOptions

            })        //创建动态实例
            toast.$slots.default = [message]    //插槽slot里面写内容
            toast.$mount()                         //挂
            document.body.appendChild(toast.$el)   //添加到页面
        }
    }
}