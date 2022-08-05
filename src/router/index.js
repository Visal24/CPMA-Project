import { createRouter, createWebHashHistory } from 'vue-router'

//Category

const routes = [


  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue'),
  },

  {
    path: '/Home',
    name: 'home',
    component: () => import(/* webpackChunkName: "login" */ '../components/Home'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/Dashboard',
    name: 'dashboard',
    component:() => import(/* webpackChunkName: "login" */ '../components/Dashboard'),
    meta:{
      requiresAuth: true
    }
  },
  //Category
  {
    path: '/Category/List/:cp?',
    name: 'clist',
    component:() => import(/* webpackChunkName: "login" */ '../components/CategoryList'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/Category/Item/Add',
    name: 'cadd',
    component: () => import(/* webpackChunkName: "login" */ '../components/CategoryItemAdd'),
    meta:{
      requiresAuth: true
    }

  },
  {
    path: '/Category/Item/Edit/:c',
    name: 'cedit',
    component: () => import(/* webpackChunkName: "login" */ '../components/CategoryItemEdit'),
    meta:{
      requiresAuth: true
    }
  },
  //User
  {
    path: '/User/List',
    name: 'ulist',
    component: () => import(/* webpackChunkName: "login" */ '../components/UserList'),
    meta:{
      requiresAuth: true
    }
  },
  //Member
  {
    path: '/Member/List/:p?',
    name: 'mlist',
    component: () => import(/* webpackChunkName: "login" */ '../components/MemberList'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/Member/Item/Add',
    name: 'madd',
    component: () => import(/* webpackChunkName: "login" */ '../components/MemberItemAdd'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/Member/Item/Edit/:i?',
    name: 'medit',
    component: () => import(/* webpackChunkName: "login" */ '../components/MemberItemEdit'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/Password',
    name: 'pw',
    component: () => import(/* webpackChunkName: "login" */ '../components/Password'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/Info',
    name: 'info',
    component: () => import(/* webpackChunkName: "login" */ '../components/Information'),
    meta:{
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && ! localStorage.getItem('User')) next('/')
  else next();
});


export default router