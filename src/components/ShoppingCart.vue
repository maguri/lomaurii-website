<template>
  <!-- Cart Overlay -->
  <div v-if="cartStore.isOpen" class="fixed inset-0 z-50 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <!-- Background overlay -->
      <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="cartStore.closeCart"></div>
      
      <!-- Cart panel -->
      <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div class="w-screen max-w-md">
          <div class="h-full flex flex-col bg-white shadow-xl">
            <!-- Header -->
            <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900">Shopping Cart</h2>
                <button 
                  @click="cartStore.closeCart"
                  class="ml-3 h-7 flex items-center"
                >
                  <svg class="h-6 w-6 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Cart Items -->
              <div v-if="cartStore.isEmpty" class="mt-8 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                <p class="mt-1 text-sm text-gray-500">Start shopping to add items to your cart.</p>
              </div>

              <div v-else class="mt-8">
                <div class="flow-root">
                  <ul class="-my-6 divide-y divide-gray-200">
                    <li v-for="item in cartStore.items" :key="`${item.id}-${item.selectedSize}-${item.selectedColor}`" class="py-6 flex">
                      <div class="flex-shrink-0 w-24 h-24">
                        <img :src="item.image" :alt="item.name" class="w-full h-full object-cover rounded-md">
                      </div>

                      <div class="ml-4 flex-1 flex flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>{{ item.name }}</h3>
                            <p class="ml-4">{{ formatPrice(item.price * item.quantity) }}</p>
                          </div>
                          <div class="flex items-center mt-1 text-sm text-gray-500">
                            <span v-if="item.selectedSize" class="mr-2">Size: {{ item.selectedSize }}</span>
                            <span v-if="item.selectedColor" class="mr-2">Color: {{ item.selectedColor }}</span>
                          </div>
                        </div>
                        <div class="flex-1 flex items-end justify-between text-sm">
                          <div class="flex items-center">
                            <label class="text-gray-500 mr-2">Qty:</label>
                            <select 
                              :value="item.quantity" 
                              @change="updateQuantity(item, $event.target.value)"
                              class="border border-gray-300 rounded px-2 py-1 text-sm"
                            >
                              <option v-for="qty in Math.min(10, item.maxQuantity)" :key="qty" :value="qty">
                                {{ qty }}
                              </option>
                            </select>
                          </div>

                          <button 
                            @click="removeItem(item)"
                            class="text-primary hover:text-primary-dark"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div v-if="!cartStore.isEmpty" class="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>{{ cartStore.formattedTotal }}</p>
              </div>
              <p class="text-sm text-gray-500 mb-6">
                Shipping and taxes will be calculated at checkout.
              </p>
              <div class="space-y-3">
                <button 
                  @click="goToCheckout"
                  class="w-full bg-primary border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Checkout
                </button>
                <button 
                  @click="cartStore.closeCart"
                  class="w-full bg-gray-100 border border-transparent rounded-md py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

const updateQuantity = (item, newQuantity) => {
  cartStore.updateQuantity(
    item.id, 
    parseInt(newQuantity), 
    item.selectedSize, 
    item.selectedColor
  )
}

const removeItem = (item) => {
  cartStore.removeItem(
    item.id, 
    item.selectedSize, 
    item.selectedColor
  )
}

const goToCheckout = () => {
  cartStore.closeCart()
  router.push('/checkout')
}
</script>

<style scoped>
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

.hover\:text-primary-dark:hover {
  color: #2563eb;
}

.focus\:ring-primary {
  --tw-ring-color: #3b82f6;
}
</style>
