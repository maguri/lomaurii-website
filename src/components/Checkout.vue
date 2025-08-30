<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
        <p class="text-gray-600">Complete your purchase securely</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Order Summary -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
          
          <div class="space-y-4 mb-6">
            <div v-for="item in cartStore.items" :key="`${item.id}-${item.selectedSize}-${item.selectedColor}`" 
                 class="flex items-center space-x-4">
              <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded-lg">
              <div class="flex-1">
                <h3 class="font-medium text-gray-900">{{ item.name }}</h3>
                <div class="text-sm text-gray-500">
                  <span v-if="item.selectedSize">Size: {{ item.selectedSize }}</span>
                  <span v-if="item.selectedColor" class="ml-2">Color: {{ item.selectedColor }}</span>
                </div>
                <div class="text-sm text-gray-600">
                  Qty: {{ item.quantity }} × {{ formatPrice(item.price) }}
                </div>
              </div>
              <div class="text-right">
                <div class="font-medium text-gray-900">{{ formatPrice(item.price * item.quantity) }}</div>
              </div>
            </div>
          </div>

          <div class="border-t pt-4">
            <div class="flex justify-between text-lg font-semibold text-gray-900">
              <span>Total</span>
              <span>{{ cartStore.formattedTotal }}</span>
            </div>
          </div>
        </div>

        <!-- Payment Form -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Payment Details</h2>
          
          <form @submit.prevent="processPayment" class="space-y-4">
            <!-- Customer Information -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                v-model="customerInfo.fullName" 
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                v-model="customerInfo.email" 
                type="email" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input 
                v-model="customerInfo.phone" 
                type="tel" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your phone number"
              >
            </div>

            <!-- Payment Method Selection -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input 
                    v-model="paymentMethod" 
                    type="radio" 
                    value="redsys" 
                    class="mr-2 text-primary focus:ring-primary"
                  >
                  <span class="text-sm text-gray-700">Credit/Debit Card (Redsys)</span>
                </label>
                <label class="flex items-center">
                  <input 
                    v-model="paymentMethod" 
                    type="radio" 
                    value="paypal" 
                    class="mr-2 text-primary focus:ring-primary"
                  >
                  <span class="text-sm text-gray-700">PayPal</span>
                </label>
              </div>
            </div>

            <!-- Terms and Conditions -->
            <div class="flex items-start">
              <input 
                v-model="acceptedTerms" 
                type="checkbox" 
                required
                class="mt-1 mr-2 text-primary focus:ring-primary rounded"
              >
              <span class="text-sm text-gray-600">
                I agree to the 
                <a href="#" class="text-primary hover:underline">Terms and Conditions</a> 
                and 
                <a href="#" class="text-primary hover:underline">Privacy Policy</a>
              </span>
            </div>

            <!-- Payment Button -->
            <button 
              type="submit" 
              :disabled="isProcessing || !acceptedTerms || cartStore.isEmpty"
              class="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span v-if="isProcessing" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
              <span v-else>
                Pay {{ cartStore.formattedTotal }}
              </span>
            </button>
          </form>

          <!-- Security Notice -->
          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-blue-700">
                Your payment is processed securely through Redsys, a trusted payment gateway.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Redsys Payment Form (Hidden) -->
    <div v-html="redsysForm" v-if="redsysForm"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

// Form data
const customerInfo = ref({
  fullName: '',
  email: '',
  phone: ''
})

const paymentMethod = ref('redsys')
const acceptedTerms = ref(false)
const isProcessing = ref(false)
const redsysForm = ref('')

// Computed properties
const orderDescription = computed(() => {
  const items = cartStore.items.map(item => `${item.name} (${item.quantity})`).join(', ')
  return `Lomaurii Store - ${items}`
})

// Methods
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

const processPayment = async () => {
  if (!acceptedTerms.value || cartStore.isEmpty) return

  isProcessing.value = true

  try {
    if (paymentMethod.value === 'redsys') {
      await processRedsysPayment()
    } else if (paymentMethod.value === 'paypal') {
      // PayPal integration would go here
      console.log('PayPal payment selected')
    }
  } catch (error) {
    console.error('Payment error:', error)
    alert('Payment failed. Please try again.')
  } finally {
    isProcessing.value = false
  }
}

const processRedsysPayment = async () => {
  try {
    const response = await fetch('/api/redsys-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: cartStore.totalAmount,
        orderId: `LOMAURII_${Date.now()}`,
        description: orderDescription.value,
        currency: 'EUR'
      })
    })

    if (!response.ok) {
      throw new Error('Payment request failed')
    }

    const data = await response.json()
    
    if (data.success) {
      // Store the form and submit it
      redsysForm.value = data.form
      
      // Wait for the next tick to ensure the form is rendered
      await nextTick()
      
      // Submit the form to Redsys
      const form = document.getElementById('redsys-form')
      if (form) {
        form.submit()
      }
    } else {
      throw new Error(data.error || 'Payment failed')
    }
  } catch (error) {
    console.error('Redsys payment error:', error)
    throw error
  }
}
</script>

<style scoped>
.bg-primary {
  background-color: #3b82f6;
}

.bg-primary-dark {
  background-color: #2563eb;
}

.ring-primary {
  --tw-ring-color: #3b82f6;
}

.text-primary {
  color: #3b82f6;
}

.hover\:bg-primary-dark:hover {
  background-color: #2563eb;
}

.hover\:underline:hover {
  text-decoration: underline;
}
</style>
