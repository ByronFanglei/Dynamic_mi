import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Index from '../views/Index/index'
import Detail from '../views/Detail/detail'
import Product from '../views/Product/product'
import Cart from '../views/Cart/cart'
import Order from '../views/Order/order'
import OrderList from '../views/Order/components/orderList'
import OrderPay from '../views/Order/components/orderPay'
import OrderConfirm from '../views/Order/components/orderConfirm'
import Alipay from '../views/Order/components/alipay'
import NotFount from '../views/NotFont/notfount'
import Login from '../views/Login/login'
import Register from '../views/Register/register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '/product/:id',
      name: 'product',
      component: Product
    }]
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/order',
    name: 'order',
    component: Order,
    children: [{
      path: 'list',
      name: 'order-list',
      component: OrderList
    }, {
      path: 'pay',
      name: 'order-pay',
      component: OrderPay
    }, {
      path: 'confirm',
      name: 'order-confirm',
      component: OrderConfirm
    }, {
      path: 'alipay',
      name: 'alipay',
      component: Alipay
    }]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '*',
    name: 'not-fount',
    component: NotFount
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
