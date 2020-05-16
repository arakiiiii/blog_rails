import Vue from 'vue'

//vuex
import store from '../stores';

const app = new Vue({
  el: "#vue_app",
  data() {
    return {
      show_menu: true,
    }
  },
  methods: {
    toggleMenu() {
      this.show_menu = !this.show_menu;
      console.log(this.show_menu)
    }
  }
})