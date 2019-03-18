import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


import Home from './components/home'
import login from './components/login'
export default new Router({
  routes: [
      {path:'/',component:Home},
      {name:"login",path:'/login',component:login}
  ]
})
