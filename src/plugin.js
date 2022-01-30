import Toast from './toast.vue'

let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message,toastOptions) {
            if(currentToast){
                currentToast.close()
            }
           currentToast =  createToast({Vue,message,propsData:toastOptions,onClose:()=>{currentToast = null}})

        }
    }
}
/*helpers*/
function createToast({Vue,message,propsData,onClose}){
    const Constructor = Vue.extend(Toast)  //创建动态实例
    const toast = new Constructor({
        propsData
    })        //创建动态实例
    toast.$slots.default = [message]    //插槽slot里面写内容
    toast.$mount()//挂
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)   //添加到页面
    return toast
}



