import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ProductsList from '../views/ProductsList.vue'
import ProductView from '../views/ProductView.vue'
import Contact from '../views/Contact.vue'
import Server from '../views/Server.vue'
import FAQ from '../views/FAQ.vue'
import FAQDetail from '../views/FAQDetail.vue'

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
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/faq/:id',
    name: 'FAQDetail',
    component: FAQDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/' : '/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (navegación con botones atrás/adelante), úsala
    if (savedPosition) {
      return savedPosition
    }
    
    // Si hay un hash en la URL, haz scroll a ese elemento
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    
    // Por defecto, haz scroll al inicio de la página
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
