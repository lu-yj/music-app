import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/songsheet',
		name: 'songSheetPage',
		component: () => import('../views/songSheetPage.vue')
	},
	{
		path: '/search',
		name: 'searchPage',
		component: () => import('../views/searchPage.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},	
	{
		path: '/me',
		name: 'Me',
		beforeEnter (to, from, next) {
			if (store.state.user.isLogin) {
				next();
			} else {
				next('/login');
			}
		},
		component: () => import('../views/Me.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
