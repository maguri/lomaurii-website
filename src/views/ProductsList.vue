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
             class="card overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
             @click="goToProduct(product.id)">
          <div class="relative overflow-hidden">
            <img :src="product.image" :alt="product.name" 
                 class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
            <div v-if="!product.inStock" 
                 class="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </div>
            <div v-if="product.featured" 
                 class="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ product.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-primary">${{ product.price }}</span>
              <div class="flex items-center">
                <div class="flex text-yellow-400 text-sm">
                  <span v-for="i in 5" :key="i">
                    {{ i <= Math.floor(product.rating) ? '★' : '☆' }}
                  </span>
                </div>
                <span class="text-gray-500 text-xs ml-1">({{ product.reviews }})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Products List -->
      <div v-else class="space-y-4">
        <div v-for="product in filteredProducts" :key="product.id" 
             class="card p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
             @click="goToProduct(product.id)">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="relative flex-shrink-0">
              <img :src="product.image" :alt="product.name" 
                   class="w-32 h-32 object-cover rounded-lg">
              <div v-if="!product.inStock" 
                   class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Out of Stock
              </div>
              <div v-if="product.featured" 
                   class="absolute top-2 left-2 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                Featured
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 class="text-xl font-semibold text-gray-900 mb-2 md:mb-0">{{ product.name }}</h3>
                <span class="text-2xl font-bold text-primary">${{ product.price }}</span>
              </div>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="flex text-yellow-400">
                    <span v-for="i in 5" :key="i" class="text-sm">
                      {{ i <= Math.floor(product.rating) ? '★' : '☆' }}
                    </span>
                  </div>
                  <span class="text-gray-500 text-sm ml-2">({{ product.reviews }})</span>
                </div>
                <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{{ product.category }}</span>
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

<script>
import { useProductsStore } from '../stores/products'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'ProductsList',
  setup() {
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
    
    const goToProduct = (id) => {
      router.push(`/product/${id}`)
    }
    
    const clearFilters = () => {
      searchQuery.value = ''
      selectedCategory.value = 'All'
      productsStore.setCategory('All')
      sortBy.value = 'name'
    }
    
    return {
      productsStore,
      searchQuery,
      selectedCategory,
      sortBy,
      viewMode,
      categories,
      filteredProducts,
      goToProduct,
      clearFilters
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
