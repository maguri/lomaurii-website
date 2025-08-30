<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary to-secondary text-white py-20 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="../assets/background.jpeg" alt="Gaming Background" 
             class="w-full h-full object-cover opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="mb-8">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span class="text-accent">Lomaurii</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Premium gaming merchandise for the ultimate gaming experience
          </p>
          <!-- Tip Buttons in Hero Section -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.paypal.com/donate/?hosted_button_id=YOUR_PAYPAL_BUTTON_ID" 
               target="_blank" rel="noopener noreferrer"
               class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-center">
              💙 Support with PayPal
            </a>
            <a href="https://www.buymeacoffee.com/lomaurii" 
               target="_blank" rel="noopener noreferrer"
               class="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-center">
              ☕ Buy Me a Coffee
            </a>
          </div>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">{{ productsStore.products.length }}+</div>
            <div class="text-blue-100">Premium Products</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">100%</div>
            <div class="text-blue-100">Quality Guaranteed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold mb-2">24/7</div>
            <div class="text-blue-100">Customer Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular gaming gear and merchandise, carefully selected for the ultimate gaming experience.
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
                Out of Stock
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
            View All Products
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
              About Lomaurii
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Welcome to the official Lomaurii merchandise store! As a passionate gamer and content creator, 
              I've curated a collection of premium gaming gear that meets the highest standards of quality and style.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              From comfortable gaming apparel to high-performance accessories, every product is designed with 
              gamers in mind. Join our community and represent Lomaurii with pride!
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://www.twitch.tv/lomaurii" target="_blank" rel="noopener noreferrer" 
                 class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center">
                🎮 Follow on Twitch
              </a>
              <router-link to="/contact" class="btn-secondary text-center">
                Get in Touch
              </router-link>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white text-center">
              <div class="text-6xl mb-4">🎮</div>
              <h3 class="text-2xl font-bold mb-2">Live Streaming</h3>
              <p class="text-blue-100">Join me live on Twitch for gaming content, community interaction, and exclusive merchandise reveals!</p>
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
            Shop by Category
          </h2>
          <p class="text-lg text-gray-600">
            Find exactly what you're looking for in our organized product categories
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
        'Furniture': '🪑'
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
