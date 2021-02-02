import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Order from '../views/Order.vue'
import Products from '../views/Poducts.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,

  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
