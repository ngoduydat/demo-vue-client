import Vue from 'vue';
import Notifications from 'vue-notification';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import fontawesome
import '@/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
// import css
import '@/assets/css/main.scss';

Vue.config.productionTip = false;

Vue.use(Notifications);

Vue.use(Vuelidate);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
