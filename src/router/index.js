import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue'  )
      },{
        path: '/singin',
        name: 'singin',
        component: () => import( /* webpackChunkName: "about" */ '../components/Singin.vue' )
      }, {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "about" */ '../views/Dashboard.vue' )
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
