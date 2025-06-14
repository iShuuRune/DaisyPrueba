import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/layouts/MenuLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: ProjectView,
        },
        {
        path: '/project/:id',
        name: 'project-detail',
        component: () => import('@/views/ProjectDetailView.vue'),
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('../views/FeaturesView.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('../views/CardView.vue'),
        },
      ]
    }
  ]
})

export default router