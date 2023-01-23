import { createRouter, createWebHistory } from 'vue-router'
import ProjectName from "./components/ProjectName.vue"
import NewTask from './components/NewTask.vue'
import ActiveTask from './components/ActiveTask.vue'
import DeletedTask from './components/DeletedTask.vue'

const routes = [
  {
    path: '/',
    name: 'NewTask' ,
    component: NewTask
  },
  {
    path: '/ProjectName',
    name: 'ProjectName',
    component: ProjectName
  },
  {
    path: '/ActiveTask',
    name: 'ActiveTask' ,
    component: ActiveTask
  },
  {
    path: '/DeletedTask',
    name: 'DeletedTask' ,
    component: DeletedTask
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
