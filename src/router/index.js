import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../views/Home'
//Category
import clist from '../views/CategoryList'
import cadd from '../views/CategoryItemAdd'
import cedit from '../views/CategoryItemEdit'
//User
import ulist from '../views/UserList'
//Member
import mlist from '../views/MemberList'
import madd from '../views/MemberItemAdd'
import medit from '../views/MemberItemEdit'
import dash from '../views/Dashboard'
import info from '../views/Information'
import pw from '../views/Password'
const routes = [


  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Home',
    name: 'home',
    component: home
  },
  {
    path: '/Dashboard',
    name: 'dashboard',
    component:dash
  },
  //Category
  {
    path: '/Category/List',
    name: 'clist',
    component: clist
  },
  {
    path: '/Category/Item/Add',
    name: 'cadd',
    component: cadd,
    children:[
      {
        path: '/Category/Item/Edit/:c',
        name: 'cedit',
        component: cedit
      },
    ]
  },
  {
    path: '/Category/Item/Edit/:c',
    name: 'cedit',
    component: cedit
  },
  //User
  {
    path: '/User/List',
    name: 'ulist',
    component: ulist
  },
  //Member
  {
    path: '/Member/List',
    name: 'mlist',
    component: mlist
  },
  {
    path: '/Member/Item/Add',
    name: 'madd',
    component: madd
  },
  {
    path: '/Member/Item/Edit/:i?',
    name: 'medit',
    component: medit
  },
  {
    path: '/Password',
    name: 'pw',
    component: pw
  },
  {
    path: '/Info',
    name: 'info',
    component: info
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router