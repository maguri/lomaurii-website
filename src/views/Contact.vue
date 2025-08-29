<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our products or want to collaborate? We'd love to hear from you!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input 
                  id="firstName"
                  v-model="form.firstName" 
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your first name"
                >
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input 
                  id="lastName"
                  v-model="form.lastName" 
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your last name"
                >
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input 
                id="email"
                v-model="form.email" 
                type="email" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
              >
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select 
                id="subject"
                v-model="form.subject" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="product">Product Question</option>
                <option value="order">Order Status</option>
                <option value="support">Technical Support</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea 
                id="message"
                v-model="form.message" 
                rows="6" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <div class="flex items-center">
              <input 
                id="newsletter"
                v-model="form.newsletter" 
                type="checkbox" 
                class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              >
              <label for="newsletter" class="ml-2 block text-sm text-gray-700">
                Subscribe to our newsletter for updates and exclusive offers
              </label>
            </div>

            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-green-800">
                  Thank you for your message! We'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- About Lomaurii -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">About Lomaurii</h2>
            <div class="space-y-4 text-gray-600">
              <p>
                Welcome to the official Lomaurii merchandise store! I'm a passionate gamer and content creator 
                dedicated to bringing you the highest quality gaming gear and accessories.
              </p>
              <p>
                Every product in our collection is carefully selected to meet the needs of gamers, streamers, 
                and content creators who demand both style and performance.
              </p>
              <p>
                Join our growing community and represent Lomaurii with pride!
              </p>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <div class="space-y-4">
              <a href="https://www.twitch.tv/lomaurii" target="_blank" rel="noopener noreferrer" 
                 class="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group">
                <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">🎮</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 group-hover:text-purple-600">Twitch Channel</h3>
                  <p class="text-gray-600">Watch live streams and gaming content</p>
                </div>
                <svg class="w-5 h-5 text-gray-400 ml-auto group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Contact Details -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Email</h3>
                  <p class="text-gray-600">hello@lomaurii.com</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Response Time</h3>
                  <p class="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div class="space-y-4">
              <div class="border-b border-gray-200 pb-4">
                <h3 class="font-semibold text-gray-900 mb-2">How long does shipping take?</h3>
                <p class="text-gray-600">Standard shipping typically takes 3-5 business days within the US.</p>
              </div>
              <div class="border-b border-gray-200 pb-4">
                <h3 class="font-semibold text-gray-900 mb-2">Do you ship internationally?</h3>
                <p class="text-gray-600">Yes, we ship to most countries worldwide. Shipping times and costs vary by location.</p>
              </div>
              <div class="border-b border-gray-200 pb-4">
                <h3 class="font-semibold text-gray-900 mb-2">What's your return policy?</h3>
                <p class="text-gray-600">We offer a 30-day return policy for unused items in original packaging.</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Can I customize products?</h3>
                <p class="text-gray-600">Some products offer customization options. Contact us for specific requests.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      },
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      this.isSubmitting = false
      this.showSuccess = true
      
      // Reset form
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      }
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess = false
      }, 5000)
    }
  }
}
</script>
