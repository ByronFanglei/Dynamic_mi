import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Index from '../views/Index/index'
// import Detail from '../views/Detail/detail'
// import Product from '../views/Product/product'
// import Cart from '../views/Cart/cart'
// import Order from '../views/Order/order'
// import OrderList from '../views/Order/components/orderList'
// import OrderPay from '../views/Order/components/orderPay'
// import OrderConfirm from '../views/Order/components/orderConfirm'
// import Alipay from '../views/Order/components/alipay'
// import NotFount from '../views/NotFont/notfount'
// import Login from '../views/Login/login'
// import Register from '../views/Register/register'

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
      component: () => import('../views/Detail/detail.vue')
    }, {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/Product/product.vue')
    }]
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart/cart.vue')
  }, {
    path: '/order',
    name: 'order',
    component: () => import('../views/Order/order.vue'),
    redirect: '/order/confirm',
    children: [{
      path: 'list',
      name: 'order-list',
      component: () => import('../views/Order/components/orderList.vue')
    }, {
      path: 'pay',
      name: 'order-pay',
      component: () => import('../views/Order/components/orderPay.vue')
    }, {
      path: 'confirm',
      name: 'order-confirm',
      component: () => import('../views/Order/components/orderConfirm.vue')
    }, {
      path: 'alipay',
      name: 'alipay',
      component: () => import('../views/Order/components/alipay.vue')
    }]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/login.vue')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/register.vue')
  }, {
    path: '*',
    name: 'not-fount',
    component: () => import('../views/NotFont/notfount.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
