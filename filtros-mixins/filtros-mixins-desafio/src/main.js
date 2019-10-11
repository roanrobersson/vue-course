import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contar', function(value) {
    let array = value.split(' ');
    array.forEach(function(value, index, array){
        array[index] = array[index].concat(' (' + value.length + ') ')
    })
    return array.join(' ');
});

new Vue({
	render: h => h(App),
}).$mount('#app')
