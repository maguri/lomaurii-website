<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Products
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our complete collection of premium gaming merchandise and accessories
        </p>
      </div>

      <!-- Filters and Search -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Search -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
            <div class="relative">
              <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Search products..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select 
              v-model="selectedCategory" 
              @change="productsStore.setCategory(selectedCategory)"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Sort -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select 
              v-model="sortBy" 
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="name">Name A-Z</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Results Count -->
      <div class="flex justify-between items-center mb-6">
        <p class="text-gray-600">
          Showing {{ filteredProducts.length }} of {{ productsStore.products.length }} products
        </p>
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-600">View:</span>
          <button 
            @click="viewMode = 'grid'" 
            :class="viewMode === 'grid' ? 'text-primary' : 'text-gray-400'"
            class="p-2 hover:text-primary transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button 
            @click="viewMode = 'list'" 
            :class="viewMode === 'list' ? 'text-primary' : 'text-gray-400'"
            class="p-2 hover:text-primary transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Products Grid -->
      <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="product in filteredProducts" :key="product.id" 
             class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div class="relative overflow-hidden">
            <img :src="product.image" :alt="product.name" 
                 class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                 @click="goToProduct(product.id)">
            <div class="absolute top-4 right-4">
              <span v-if="product.featured" class="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                Featured
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-500">{{ product.category }}</span>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-sm text-gray-600 ml-1">{{ product.rating }}</span>
                <span class="text-sm text-gray-400 ml-1">({{ product.reviews }})</span>
              </div>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-900 mb-2 cursor-pointer hover:text-primary transition-colors"
                @click="goToProduct(product.id)">
              {{ product.name }}
            </h3>
            
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
            
            <div class="flex items-center justify-between mb-4">
              <span class="text-2xl font-bold text-gray-900">{{ formatPrice(product.price) }}</span>
              <span v-if="!product.inStock" class="text-red-500 text-sm font-medium">Out of Stock</span>
            </div>

            <!-- Buy Button -->
            <button 
              @click="buyProduct(product)"
              :disabled="!product.inStock"
              class="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span v-if="!product.inStock">Out of Stock</span>
              <span v-else>Buy Now - {{ formatPrice(product.price) }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Products List View -->
      <div v-else class="space-y-6">
        <div v-for="product in filteredProducts" :key="product.id" 
             class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="flex">
            <div class="flex-shrink-0 w-48 h-48">
              <img :src="product.image" :alt="product.name" 
                   class="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                   @click="goToProduct(product.id)">
            </div>
            
            <div class="flex-1 p-6">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center mb-2">
                    <span class="text-sm text-gray-500 mr-4">{{ product.category }}</span>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="text-sm text-gray-600 ml-1">{{ product.rating }}</span>
                      <span class="text-sm text-gray-400 ml-1">({{ product.reviews }})</span>
                    </div>
                  </div>
                  
                  <h3 class="text-xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-primary transition-colors"
                      @click="goToProduct(product.id)">
                    {{ product.name }}
                  </h3>
                  
                  <p class="text-gray-600 mb-4">{{ product.description }}</p>
                </div>
                
                <div class="text-right ml-6">
                  <div class="text-3xl font-bold text-gray-900 mb-4">{{ formatPrice(product.price) }}</div>
                  <div v-if="!product.inStock" class="text-red-500 text-sm font-medium mb-4">Out of Stock</div>
                  
                  <button 
                    @click="buyProduct(product)"
                    :disabled="!product.inStock"
                    class="bg-primary text-white py-2 px-6 rounded-lg font-medium hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <span v-if="!product.inStock">Out of Stock</span>
                    <span v-else>Buy Now - {{ formatPrice(product.price) }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredProducts.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
        <p class="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
        <button @click="clearFilters" class="btn-primary">
          Clear Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const productsStore = useProductsStore()
const router = useRouter()

const searchQuery = ref('')
const selectedCategory = ref('All')
const sortBy = ref('name')
const viewMode = ref('grid')

const categories = computed(() => productsStore.categories)

const filteredProducts = computed(() => {
  let products = productsStore.filteredProducts
  
  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    products = products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    )
  }
  
  // Sort
  switch (sortBy.value) {
    case 'price-low':
      products = [...products].sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      products = [...products].sort((a, b) => b.price - a.price)
      break
    case 'rating':
      products = [...products].sort((a, b) => b.rating - a.rating)
      break
    case 'newest':
      products = [...products].sort((a, b) => b.id - a.id)
      break
    default: // name
      products = [...products].sort((a, b) => a.name.localeCompare(b.name))
  }
  
  return products
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

const buyProduct = (product) => {
  if (!product.inStock) return
  
  // Check if stripePaymentLink is available
  if (product.stripePaymentLink && product.stripePaymentLink.trim() !== '') {
    // Redirect to the Stripe payment link
    window.open(product.stripePaymentLink, '_blank')
  } else {
    // Fallback for demo purposes
    alert(`Stripe payment link not configured for ${product.name}. Please contact support.`)
  }
}

const goToProduct = (id) => {
  router.push(`/product/${id}`)
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'All'
  productsStore.setCategory('All')
  sortBy.value = 'name'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.bg-primary {
  background-color: #3b82f6;
}

.bg-primary-dark {
  background-color: #2563eb;
}

.hover\:bg-primary-dark:hover {
  background-color: #2563eb;
}

.text-primary {
  color: #3b82f6;
}

.hover\:text-primary:hover {
  color: #3b82f6;
}

.focus\:ring-primary {
  --tw-ring-color: #3b82f6;
}

.btn-primary {
  @apply bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors;
}
</style>
