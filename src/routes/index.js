import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import Destaque from "@/views/Destaque.vue"

const routes = [
  { 
    path: '/',
    component: Home 
  },
  { 
    path: '/destaque',
    component: Destaque 
  },
/*   { path: '/destaque/1', component: About },
  { path: '/destaque/2', component: About },
  { path: '/destaque/3', component: About },
  { path: '/destaque/4', component: About }, */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router