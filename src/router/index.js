import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../components/Home'
//Category
import clist from '../components/CategoryList'
import cadd from '../components/CategoryItemAdd'
import cedit from '../components/CategoryItemEdit'
//User
import ulist from '../components/UserList'
//Member
import mlist from '../components/MemberList'
import madd from '../components/MemberItemAdd'
import medit from '../components/MemberItemEdit'
import dash from '../components/Dashboard'
import info from '../components/Information'
import pw from '../components/Password'
const routes = [


  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
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
    path: '/Category/List/:cp?',
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
    path: '/Member/List/:p?',
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