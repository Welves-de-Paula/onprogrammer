const Auth = () => import('@/views/AuthIndex.vue');


export default [
  {
    path: '/auth',
    name: 'Auth',
    meta: { layout: 'AuthLayout', auth: 'guest' },
    component: Auth
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   meta: { layout: 'AuthLayout', auth: 'guest', },
    //   component: Register,

    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   meta: { layout: 'AuthLayout', auth: 'guest', },
    //   component: Login,

  }
];

