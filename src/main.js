import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import setDevice from './assets/js/rem.js'
import './assets/css/reset.css'
import './assets/css/style.css'
import fastclick from 'fastclick'
fastclick.attach(document.body)
Vue.config.productionTip = false
setDevice(750)
Vue.use(MintUI)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
