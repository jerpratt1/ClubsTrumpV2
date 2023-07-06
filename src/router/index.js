import Vue from 'vue'
import VueRouter from 'vue-router'
import GameView from '../views/GameView.vue'
import RulesView from '../views/RulesView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [


  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/game',
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
