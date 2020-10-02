const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'calon-kandidat',
        component: () => import('pages/CalonKetua.vue')
      },
      {
        path: 'calon-kandidat/:id',
        component: () => import('pages/DetailCalonKetua.vue')
      },
      {
        path: 'hasil-vote',
        component: () => import('pages/HasilVote.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
