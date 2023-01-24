import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'activepage' ,
    component: () => import ('@/views/activepage.vue')
  },
  {
    path: '/deletedpage',
    name: 'deletedpage' ,
    component: () => import ('@/views/deletedpage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
