import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import plugin from './plugin.js'

Vue.component("f-button", Button);
Vue.component("f-icon", Icon);
Vue.component("f-button-group", ButtonGroup);
Vue.component('f-input', Input)
Vue.component('f-row', Row)
Vue.component('f-col', Col)
Vue.component('f-layout', Layout)
Vue.component('f-header', Header)
Vue.component('f-sider', Sider)
Vue.component('f-content', Content)
Vue.component('f-footer', Footer)
Vue.component('f-toast', Toast)
Vue.use(plugin)

new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false,
    loading3: false,
    message: 'hi'
  },
  created() {

  },
  methods: {
    showToast() {
      this.$toast(`你的智商为${parseInt(Math.random()*100)}`, {
        closeButton: {
          text: '关闭',
          callback(toast) {},
        },
        autoClose: false,
        enableHtml: false,
        position: 'bottom'
      })
    }
  }
});