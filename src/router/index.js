import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ProductsList from '../views/ProductsList.vue'
import ProductView from '../views/ProductView.vue'
import Contact from '../views/Contact.vue'
import Server from '../views/Server.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/products',
    name: 'ProductsList',
    component: ProductsList
  },
  {
    path: '/product/:id',
    name: 'ProductView',
    component: ProductView,
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/server',
    name: 'Server',
    component: Server
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/' : '/'),
  routes
})

export default router
