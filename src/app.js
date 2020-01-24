import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';

Vue.component('f-button', Button)
Vue.component('f-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: false
  }
})