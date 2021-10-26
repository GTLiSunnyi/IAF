import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: 'zh',
	messages: {
		'zh': require('./components/language/zh.js'),
		'en': require('./components/language/en.js'),
	},
});

new Vue({
	i18n,
	render: h => h(App),
}).$mount('#app')