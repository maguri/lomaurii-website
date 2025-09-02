<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary to-secondary text-white py-20 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="../assets/background.jpeg" alt="Gaming Background" class="w-full h-full object-cover opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="mb-8">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Bienvenido a la comunidad de <span class="text-accent">Lomaurii</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Comunidad gaming y tienda premium para la experiencia de supervivencia definitiva
          </p>
          <!-- Tip Buttons in Hero Section -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
                         <a href="https://www.paypal.com/donate/?hosted_button_id=YOUR_PAYPAL_BUTTON_ID" 
                target="_blank" rel="noopener noreferrer"
                class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-center flex items-center justify-center">
               
               Apoyar con PayPal 💙
             </a>
            <a href="https://discord.gg/uYcmUMwtUr" target="_blank" rel="noopener noreferrer" 
                  class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                 </svg>
                 <span>Join Discord</span>
               </a>
            <!-- <a href="https://www.buymeacoffee.com/lomaurii" 
               target="_blank" rel="noopener noreferrer"
               class="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-center">
              ☕ Buy Me a Coffee
            </a> -->
          </div>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">{{ productsStore.products.length }}+</div>
            <div class="text-blue-100">Productos Premium</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">100%</div>
            <div class="text-blue-100">Calidad Garantizada</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">24/7</div>
            <div class="text-blue-100">Soporte al Cliente</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Productos Destacados
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestro equipo gaming y mercancía más popular, cuidadosamente seleccionado para la experiencia gaming definitiva.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in featuredProducts" :key="product.id" 
               class="card overflow-hidden group cursor-pointer"
               @click="goToProduct(product.id)">
            <div class="relative overflow-hidden">
              <img :src="product.image" :alt="product.name" 
                   class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300">
              <div v-if="!product.inStock" 
                   class="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                Sin Stock
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-primary">${{ product.price }}</span>
                <div class="flex items-center">
                  <div class="flex text-yellow-400">
                    <span v-for="i in 5" :key="i" class="text-sm">
                      {{ i <= Math.floor(product.rating) ? '★' : '☆' }}
                    </span>
                  </div>
                  <span class="text-gray-500 text-sm ml-2">({{ product.reviews }})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/products" class="btn-primary text-lg px-8 py-3">
            Ver Todos los Productos
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Acerca de Lomaurii
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              ¡Bienvenido a la tienda oficial de mercancía de Lomaurii! Como un gamer apasionado y creador de contenido, 
              he curado una colección de equipo gaming premium que cumple con los más altos estándares de calidad y estilo.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Desde ropa gaming cómoda hasta accesorios de alto rendimiento, cada producto está diseñado pensando 
              en los gamers. ¡Únete a nuestra comunidad y representa a Lomaurii con orgullo!
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://www.twitch.tv/lomaurii" target="_blank" rel="noopener noreferrer" 
                 class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                </svg>
                Ver en Twitch
              </a>
              <router-link to="/contact" class="btn-secondary text-center">
                Ponerse en Contacto
              </router-link>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white text-center">
              <div class="text-6xl mb-4">🎮</div>
              <h3 class="text-2xl font-bold mb-2">Transmisión en Vivo</h3>
              <p class="text-blue-100">¡Únete a mí en vivo en Twitch para contenido gaming, interacción comunitaria y revelaciones exclusivas de mercancía!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprar por Categoría
          </h2>
          <p class="text-lg text-gray-600">
            Encuentra exactamente lo que buscas en nuestras categorías de productos organizadas
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div v-for="category in categories" :key="category" 
               class="text-center group cursor-pointer"
               @click="goToCategory(category)">
            <div class="bg-gray-100 hover:bg-primary hover:text-white rounded-xl p-6 mb-4 transition-all duration-300 group-hover:scale-105">
              <div class="text-3xl mb-2">
                {{ getCategoryIcon(category) }}
              </div>
            </div>
            <h3 class="font-semibold text-gray-900">{{ category }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/products'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Dashboard',
  setup() {
    const productsStore = useProductsStore()
    const router = useRouter()
    
    const featuredProducts = computed(() => productsStore.featuredProducts)
    const categories = computed(() => productsStore.categories.filter(cat => cat !== 'All'))
    
    const goToProduct = (id) => {
      router.push(`/product/${id}`)
    }
    
    const goToCategory = (category) => {
      productsStore.setCategory(category)
      router.push('/products')
    }
    
    const getCategoryIcon = (category) => {
      const icons = {
        'Clothing': '👕',
        'Accessories': '🎒',
        'Audio': '🎧',
        'Peripherals': '⌨️',
        'Furniture': '🪑',
        'Survival': '🔦'
      }
      return icons[category] || '🛍️'
    }
    
    return {
      productsStore,
      featuredProducts,
      categories,
      goToProduct,
      goToCategory,
      getCategoryIcon
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
