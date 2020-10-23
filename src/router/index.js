import Vue from 'vue'
import VueRouter from 'vue-router'
import Chuck from '../components/Chuck.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chuck',
    name: 'Chuck',
    component: Chuck
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
