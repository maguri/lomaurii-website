<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex mb-8" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link to="/" class="text-gray-700 hover:text-primary">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              <router-link to="/products" class="text-gray-700 hover:text-primary ml-1">
                Products
              </router-link>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-500 ml-1">{{ product?.name }}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div v-if="product" class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Product Images -->
          <div class="p-6">
            <div class="relative">
              <img :src="selectedImage" :alt="product.name" 
                   class="w-full h-96 object-cover rounded-lg">
              <div v-if="!product.inStock" 
                   class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Out of Stock
              </div>
              <div v-if="product.featured" 
                   class="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            
            <!-- Thumbnail Images -->
            <div v-if="product.images.length > 1" class="flex space-x-2 mt-4">
              <button v-for="(image, index) in product.images" :key="index"
                      @click="selectedImage = image"
                      :class="selectedImage === image ? 'ring-2 ring-primary' : 'ring-1 ring-gray-300'"
                      class="w-20 h-20 rounded-lg overflow-hidden">
                <img :src="image" :alt="`${product.name} ${index + 1}`" 
                     class="w-full h-full object-cover">
              </button>
            </div>
          </div>

          <!-- Product Info -->
          <div class="p-6">
            <div class="mb-6">
              <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
              <div class="flex items-center mb-4">
                <div class="flex text-yellow-400 mr-3">
                  <span v-for="i in 5" :key="i" class="text-lg">
                    {{ i <= Math.floor(product.rating) ? '★' : '☆' }}
                  </span>
                </div>
                <span class="text-gray-600">({{ product.reviews }} reviews)</span>
              </div>
              <p class="text-2xl font-bold text-primary mb-4">${{ product.price }}</p>
              <p class="text-gray-600 text-lg leading-relaxed">{{ product.description }}</p>
            </div>

            <!-- Product Options -->
            <div class="space-y-6">
              <!-- Size Selection -->
              <div v-if="product.sizes" class="space-y-3">
                <label class="block text-sm font-medium text-gray-700">Size</label>
                <div class="flex flex-wrap gap-2">
                  <button v-for="size in product.sizes" :key="size"
                          @click="selectedSize = size"
                          :class="selectedSize === size ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                          class="px-4 py-2 rounded-lg font-medium transition-colors">
                    {{ size }}
                  </button>
                </div>
              </div>

              <!-- Color Selection -->
              <div v-if="product.colors" class="space-y-3">
                <label class="block text-sm font-medium text-gray-700">Color</label>
                <div class="flex flex-wrap gap-2">
                  <button v-for="color in product.colors" :key="color"
                          @click="selectedColor = color"
                          :class="selectedColor === color ? 'ring-2 ring-primary' : 'ring-1 ring-gray-300'"
                          class="px-4 py-2 rounded-lg font-medium transition-colors bg-gray-100 hover:bg-gray-200">
                    {{ color }}
                  </button>
                </div>
              </div>

              <!-- Quantity -->
              <div class="space-y-3">
                <label class="block text-sm font-medium text-gray-700">Quantity</label>
                <div class="flex items-center space-x-3">
                  <button @click="decreaseQuantity" 
                          :disabled="quantity <= 1"
                          class="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span class="text-lg font-medium w-16 text-center">{{ quantity }}</span>
                  <button @click="increaseQuantity" 
                          class="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-3">
                <button v-if="product.inStock" 
                        @click="addToCart"
                        class="w-full btn-primary text-lg py-4">
                  Add to Cart
                </button>
                <button v-else 
                        disabled
                        class="w-full bg-gray-300 text-gray-500 font-semibold py-4 px-6 rounded-lg cursor-not-allowed">
                  Out of Stock
                </button>
                
                <div class="flex space-x-3">
                  <button @click="addToWishlist" 
                          class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
                    <svg class="w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Wishlist
                  </button>
                  <button @click="shareProduct" 
                          class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
                    <svg class="w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            </div>

            <!-- Product Details -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="text-gray-500">Category:</span>
                  <span class="ml-2 text-gray-900">{{ product.category }}</span>
                </div>
                <div>
                  <span class="text-gray-500">SKU:</span>
                  <span class="ml-2 text-gray-900">LOM-{{ product.id.toString().padStart(3, '0') }}</span>
                </div>
                <div>
                  <span class="text-gray-500">Rating:</span>
                  <span class="ml-2 text-gray-900">{{ product.rating }}/5</span>
                </div>
                <div>
                  <span class="text-gray-500">Reviews:</span>
                  <span class="ml-2 text-gray-900">{{ product.reviews }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Not Found -->
      <div v-else class="text-center py-16">
        <div class="text-6xl mb-4">❌</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Product not found</h3>
        <p class="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <router-link to="/products" class="btn-primary">
          Back to Products
        </router-link>
      </div>

      <!-- Related Products -->
      <div v-if="relatedProducts.length > 0" class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" 
               class="card overflow-hidden group cursor-pointer"
               @click="goToProduct(relatedProduct.id)">
            <div class="relative overflow-hidden">
              <img :src="relatedProduct.image" :alt="relatedProduct.name" 
                   class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              <div v-if="!relatedProduct.inStock" 
                   class="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                Out of Stock
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 mb-2">{{ relatedProduct.name }}</h3>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-primary">${{ relatedProduct.price }}</span>
                <div class="flex text-yellow-400 text-sm">
                  <span v-for="i in 5" :key="i">
                    {{ i <= Math.floor(relatedProduct.rating) ? '★' : '☆' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/products'
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'ProductView',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const productsStore = useProductsStore()
    const route = useRoute()
    const router = useRouter()
    
    const selectedImage = ref('')
    const selectedSize = ref('')
    const selectedColor = ref('')
    const quantity = ref(1)
    
    const product = computed(() => productsStore.getProductById(props.id))
    
    const relatedProducts = computed(() => {
      if (!product.value) return []
      return productsStore.products
        .filter(p => p.id !== product.value.id && p.category === product.value.category)
        .slice(0, 4)
    })
    
    onMounted(() => {
      if (product.value && product.value.images.length > 0) {
        selectedImage.value = product.value.images[0]
      }
      if (product.value && product.value.sizes && product.value.sizes.length > 0) {
        selectedSize.value = product.value.sizes[0]
      }
      if (product.value && product.value.colors && product.value.colors.length > 0) {
        selectedColor.value = product.value.colors[0]
      }
    })
    
    const increaseQuantity = () => {
      quantity.value++
    }
    
    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
      }
    }
    
    const addToCart = () => {
      // TODO: Implement cart functionality
      alert(`Added ${quantity.value} ${product.value.name} to cart!`)
    }
    
    const addToWishlist = () => {
      // TODO: Implement wishlist functionality
      alert(`Added ${product.value.name} to wishlist!`)
    }
    
    const shareProduct = () => {
      if (navigator.share) {
        navigator.share({
          title: product.value.name,
          text: product.value.description,
          url: window.location.href
        })
      } else {
        navigator.clipboard.writeText(window.location.href)
        alert('Product link copied to clipboard!')
      }
    }
    
    const goToProduct = (id) => {
      router.push(`/product/${id}`)
    }
    
    return {
      product,
      selectedImage,
      selectedSize,
      selectedColor,
      quantity,
      relatedProducts,
      increaseQuantity,
      decreaseQuantity,
      addToCart,
      addToWishlist,
      shareProduct,
      goToProduct
    }
  }
}
</script>
