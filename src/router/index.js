import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/songsheet',
		name: 'songSheetPage',
		component: () => import(/* webpackChunkName: "about" */ '../views/songSheetPage.vue')
	},
	{
		path: '/search',
		name: 'searchPage',
		component: () => import(/* webpackChunkName: "about" */ '../views/searchPage.vue')
	},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
