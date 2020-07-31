import Vue from 'vue'
import VueRouter from 'vue-router'
import {Tabbar,TabbarItem,NavBar,Grid, GridItem,Tab, Tabs, Col, Row,Button,Icon,Swipe, SwipeItem } from 'vant'
import Login from '../views/login.vue'
import home from '../views/home'
import index from '../views/home/index'
import category from '../views/home/category'
import account from '../views/home/account'

Vue.use(VueRouter)
    .use(Tabbar)
    .use(TabbarItem)
    .use(NavBar)
    .use(Grid)
    .use(GridItem)
    .use(Tab)
    .use(Tabs)
    .use(Col)
    .use(Row)
    .use(Button)
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)


  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    // name: 'home',
    component:home,
    children:[
      {
        path: 'index',
        component:index,
      },
      {
        path: 'category',
        component:category,
      },
      {
        path: 'account',
        component:account,
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
