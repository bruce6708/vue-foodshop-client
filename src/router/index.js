import Vue from 'vue'
import Router from 'vue-router'
import Msize from '../pages/Msize.vue'
import Search from '../pages/Search.vue'
import Order from '../pages/Order.vue'
import Profile from '../pages/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msize',
      component: Msize
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      component: Msize
    }
  ]
})
