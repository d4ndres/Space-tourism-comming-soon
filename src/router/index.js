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
    redirect: '/crew/Douglas Hurley',
    name: 'crew',
    component: () => import(/* webpackChunkName: "crew" */ '../views/Crew.vue'),
    children: [{
      path: ':memberName',
      name: 'member.show',
      component: () => import(/* webpackChunkName: "member" */ '../components/CrewMember.vue'),
      props: true
    }]
  },
  {
    path: '/technology',
    redirect: '/technology/Launch vehicle',
    name: 'technology',
    component: () => import(/* webpackChunkName: "technology" */ '../views/Technology.vue'),
    children: [{
      path: ':pieceName',
      name: 'piece.show',
      component: () => import(/* webpackChunkName: "piece" */ '../components/TechnologyPiece.vue'),
      props: true
    }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
