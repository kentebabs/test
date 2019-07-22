import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Socialyears from './components/years/Socialyears'
import Crsyears from './components/years/Crsyears'
import englishyears from './components/years/englishyears'
import governmentyears from './components/years/governmentyears'
import historyyears from './components/years/historyyears'
import literatureyears from './components/years/literatureyears'
import Quiz from './components/Quiz'

Vue.use(VueRouter);

Vue.config.productionTip = false
const routes = [
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup },
  { path: '/board', component: Dashboard },
  { path: '/social', component: Socialyears },
  { path: '/english', component: englishyears },
  { path: '/government', component: governmentyears },
  { path: '/history', component: historyyears },
  { path: '/literature', component: literatureyears},
  { path: '/crs', component: Crsyears },
  { path: '/quiz', component: Quiz },
  { path: '/', component: Home }
] 
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
