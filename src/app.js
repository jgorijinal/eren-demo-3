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


new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            message: 'hi',
            selectedTab:'sports'
        }
    },
    methods: {
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
})

