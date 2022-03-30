import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from "./footer";
import plugin from "./plugin";
import Toast from "./toast.vue"
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsItem from './tabs-item.vue'
import TabsBody from './tabs-body.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Demo from './demo.vue'
import Carousel from './carousel.vue'
import CarouselItem from './carousel-item.vue'
Vue.component('g-carousel' , Carousel)
Vue.component('g-carousel-item' , CarouselItem)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.component('g-demo',Demo)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            message: 'hi',
            selectedTab:'Tab1',
            selectedName: ['3','2'],
            selectedSlide:'1',
            selectedSlide2:'2',
            selectedSlide3:'3',
            selectedSlide4:'4',

        }
    },
    methods: {
        message1() {
            this.$message.info({
                content:'这是一条普通的全局提示',
                closable: true,
                background:true
            })
        },
        message2() {
            this.$message.success({
                content:'这是一条成功的全局提示',
                closable: true,
                background:true
            })
        },
        message3() {
            this.$message.warning({
                content:'这是一条警告的全局提示',
                closable: true,
                background:true
            })
        },
        message4() {
            this.$message.error({
                content:'对不起 , 对方不想跟你说法',
                closable: true,
                background:true
            })
        },
        inputChange(e) {
            console.log(e.target.value)
        },
        toast123() {
            this.$toast('很多文字', {
                closeButton: {
                    text: "OK",
                    callback: () => {
                        console.log('用户知道了')
                    }
                },
                autoClose:3,
                enableHtml: true,
                position:'middle'
            })
        }
    },
    created() {
        const div = document.createElement('div')
        div.classList.add('gulu-messageList')
        div.style.position='fixed'
        div.style.top=0 +'px'
        div.style.width = '100%'
        div.style.pointerEvents = 'none'
        document.body.appendChild(div)      //放在
    }
})

