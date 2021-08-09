import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'skill',
    component: () => import('../components/skill.vue')
  },
  {
    path: '/',
    name: 'story',
    component: () => import('../components/story.vue')
  },
  {
    path: '/',
    name: 'mapping',
    component: () => import('../components/mapping.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
