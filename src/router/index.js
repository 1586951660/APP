import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Test from '@/views/Test'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    children:[
      {
        path: 'test',
        name: 'Test',
        // component:Test
        component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
      }
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
