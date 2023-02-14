import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/destinations',
    redirect: '/destinations/Moon',
    name: 'destinations',
    component: () => import(/* webpackChunkName: "destinations" */ '../views/Destinations.vue'),
    children: [{
      path: ':destinationName',
      name: 'destination.show',
      component: () => import(/* webpackChunkName: "destination" */ '../components/Destination.vue'),
      props: true
    }]
  },
  {
    path: '/crew',
    name: 'crew',
    component: () => import(/* webpackChunkName: "crew" */ '../views/Crew.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import(/* webpackChunkName: "technology" */ '../views/Technology.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
