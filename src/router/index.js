import Vue from 'vue'
import VueRouter from 'vue-router'
import GameView from '../views/GameView.vue'
import RulesView from '../views/RulesView.vue'
import TestView from '../views/TestView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/',
    name: 'game',
    component: GameView
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
