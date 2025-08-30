<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <!-- Success Icon -->
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Payment Successful!
        </h2>
        
        <p class="mt-2 text-sm text-gray-600">
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
        </p>
      </div>

      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
            Order Details
          </h3>
          
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-sm font-medium text-gray-500">Order ID:</span>
              <span class="text-sm text-gray-900">{{ orderId }}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="text-sm font-medium text-gray-500">Total Amount:</span>
              <span class="text-sm text-gray-900">{{ totalAmount }}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="text-sm font-medium text-gray-500">Payment Method:</span>
              <span class="text-sm text-gray-900">Credit/Debit Card</span>
            </div>
            
            <div class="flex justify-between">
              <span class="text-sm font-medium text-gray-500">Date:</span>
              <span class="text-sm text-gray-900">{{ orderDate }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <button
          @click="goToProducts"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Continue Shopping
        </button>
        
        <button
          @click="goToDashboard"
          class="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Back to Dashboard
        </button>
      </div>

      <!-- Additional Information -->
      <div class="bg-blue-50 border border-blue-200 rounded-md p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-blue-800">
              What happens next?
            </h3>
            <div class="mt-2 text-sm text-blue-700">
              <p>You'll receive an order confirmation email shortly. We'll notify you when your order ships.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const cartStore = useCartStore()

// Order details (in a real app, these would come from the payment response)
const orderId = ref('')
const totalAmount = ref('')
const orderDate = ref('')

onMounted(() => {
  // Generate demo order details
  orderId.value = `LOMAURII_${Date.now()}`
  totalAmount.value = cartStore.formattedTotal
  orderDate.value = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  // Clear the cart after successful payment
  cartStore.clearCart()
})

const goToProducts = () => {
  router.push('/products')
}

const goToDashboard = () => {
  router.push('/')
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

.focus\:ring-primary {
  --tw-ring-color: #3b82f6;
}
</style>
