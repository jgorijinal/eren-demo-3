import Toast from './toast.vue'
import Message from  './message.vue'
let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({
                Vue, message, propsData: toastOptions, onClose: () => {
                    currentToast = null
                }
            })
        }
        Vue.prototype.$message = {
            info: (messageOptions) => {
                createMessage( {Vue, messageOptions ,theme:'info'} )
            },
            success: function (messageOptions) {
                createMessage( {Vue, messageOptions ,theme:'success'} )
            },
            warning: function (messageOptions) {
                createMessage( {Vue, messageOptions ,theme:'warning'} )
            },
            error: function (messageOptions) {
                createMessage( {Vue, messageOptions ,theme:'error'} )
            },
        }

}
}

/*helpers*/
function createToast({Vue, message, propsData, onClose}) {
    const Constructor = Vue.extend(Toast)  //创建动态实例
    const toast = new Constructor({
        propsData
    })        //创建动态实例
    toast.$slots.default = [message]    //插槽slot里面写内容
    toast.$mount()//挂
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)   //添加到页面
    return toast
}

function createMessage( {Vue, messageOptions ,theme} ) {
    const Constructor = Vue.extend(Message)
    const message = new Constructor({
        propsData: Object.assign({theme:theme} ,messageOptions )
    })
    message.$mount()
    const messageListDiv = document.querySelector('.gulu-messageList')
    messageListDiv.appendChild(message.$el)
}



