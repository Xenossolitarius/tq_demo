import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import contact_filters from '@/enums/contact_filters'

const Portfolio = () => import(/* webpackChunkName: "sidepages" */ '../views/Portfolio.vue')
const NewPortfolio = () => import(/* webpackChunkName: "sidepages" */ '../views/NewPortfolio.vue')

const Page404 = () => import(/*webpackChunkName: "helppages" */ '../views/404.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/:filter?',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      let filterIsValid = false
      if(to.params.filter){
        Object.values(contact_filters).map( filter => {
          if(filter.ROUTE == to.params.filter){
            filterIsValid = true
          }
        })
        if(filterIsValid){
          next()
        }else{
          next({name: 'Page404'})
        }
      }else{
        next()
      }
      
    }
  },
  {
    path: '/contact/new',
    name: 'NewContact',
    component: NewPortfolio,
  },
  {
    path: '/contact/:shorthand?/:mode?',
    name: 'Contact',
    component: Portfolio,
  },
  {
    path: '*',
    name: 'Page404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
