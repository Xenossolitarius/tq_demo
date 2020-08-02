import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

const Portfolio = () => import(/* webpackChunkName: "sidepages" */ '../views/Portfolio.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/:filter?',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/contact/:shorthand?/:mode?',
    name: 'Contact',
    component: Portfolio,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
