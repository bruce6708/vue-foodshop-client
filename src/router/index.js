import Vue from 'vue'
import Router from 'vue-router'
import Msize from '../pages/Msize.vue'
import Search from '../pages/Search.vue'
import Order from '../pages/Order.vue'
import Profile from '../pages/Profile'
import Login from '../pages/Login.vue'
import TestTable from '../components/TestTable.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Msize,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/msize',
      component: Msize,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/test',
      component: TestTable
    }
  ]
})
