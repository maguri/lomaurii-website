<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to the most common questions about our products, shipping, and community.
        </p>
      </div>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search questions..."
            class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
          <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- FAQ Categories -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Products Category -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Products</h2>
          </div>
          
          <div class="space-y-4">
            <router-link 
              v-for="question in filteredProductQuestions" 
              :key="question.id"
              :to="`/faq/${question.id}`"
              class="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition-all duration-200 group"
            >
              <h3 class="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {{ question.title }}
              </h3>
              <p class="text-gray-600 text-sm mt-1 line-clamp-2">{{ question.excerpt }}</p>
            </router-link>
          </div>
        </div>

        <!-- Shipping & Returns Category -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-14 0h14" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Shipping & Returns</h2>
          </div>
          
          <div class="space-y-4">
            <router-link 
              v-for="question in filteredShippingQuestions" 
              :key="question.id"
              :to="`/faq/${question.id}`"
              class="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-green-50 transition-all duration-200 group"
            >
              <h3 class="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {{ question.title }}
              </h3>
              <p class="text-gray-600 text-sm mt-1 line-clamp-2">{{ question.excerpt }}</p>
            </router-link>
          </div>
        </div>

        <!-- Community Category -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Community</h2>
          </div>
          
          <div class="space-y-4">
            <router-link 
              v-for="question in filteredCommunityQuestions" 
              :key="question.id"
              :to="`/faq/${question.id}`"
              class="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-purple-50 transition-all duration-200 group"
            >
              <h3 class="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {{ question.title }}
              </h3>
              <p class="text-gray-600 text-sm mt-1 line-clamp-2">{{ question.excerpt }}</p>
            </router-link>
          </div>
        </div>

        <!-- Technical Support Category -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Technical Support</h2>
          </div>
          
          <div class="space-y-4">
            <router-link 
              v-for="question in filteredTechnicalQuestions" 
              :key="question.id"
              :to="`/faq/${question.id}`"
              class="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-orange-50 transition-all duration-200 group"
            >
              <h3 class="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {{ question.title }}
              </h3>
              <p class="text-gray-600 text-sm mt-1 line-clamp-2">{{ question.excerpt }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Contact Support -->
      <div class="mt-16 text-center">
        <div class="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
          <p class="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help!
          </p>
          <router-link to="/contact" class="btn-primary text-lg px-8 py-3">
            Contact Support
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

// FAQ Data
const faqData = [
  // Products
  {
    id: 'product-quality',
    category: 'products',
    title: 'What is the quality of your gaming merchandise?',
    excerpt: 'All our products are made with premium materials and undergo strict quality control...',
    content: 'All our gaming merchandise is crafted with premium materials and undergoes strict quality control processes. We partner with trusted manufacturers who specialize in gaming apparel and accessories. Every product is tested for durability, comfort, and style before being added to our collection. We stand behind the quality of our products with a satisfaction guarantee.'
  },
  {
    id: 'product-sizes',
    category: 'products',
    title: 'What sizes are available for clothing items?',
    excerpt: 'We offer a wide range of sizes from XS to XXL for most clothing items...',
    content: 'We offer a comprehensive size range from XS to XXL for most clothing items. Our size chart is available on each product page to help you find the perfect fit. We recommend measuring yourself and comparing with our size chart for the best fit. If you\'re between sizes, we generally recommend sizing up for a more comfortable fit.'
  },
  {
    id: 'product-customization',
    category: 'products',
    title: 'Can I customize or personalize products?',
    excerpt: 'Some products offer customization options. Contact us for specific requests...',
    content: 'Yes, many of our products can be customized! We offer personalization options including custom text, logos, and designs. Custom orders typically take 2-3 weeks to process and ship. Please contact our support team with your specific customization request, and we\'ll provide you with a quote and timeline.'
  },
  {
    id: 'product-availability',
    category: 'products',
    title: 'How do I know if a product is in stock?',
    excerpt: 'Stock status is clearly displayed on each product page...',
    content: 'Stock status is clearly displayed on each product page. Products marked as "In Stock" are ready to ship immediately. Items marked as "Low Stock" have limited quantities available. "Out of Stock" items will show an estimated restock date. You can also sign up for stock notifications on product pages.'
  },

  // Shipping & Returns
  {
    id: 'shipping-time',
    category: 'shipping',
    title: 'How long does shipping take?',
    excerpt: 'Standard shipping typically takes 3-5 business days within the US...',
    content: 'Standard shipping typically takes 3-5 business days within the US. Express shipping (1-2 business days) is available for an additional fee. International shipping times vary by location but generally take 7-14 business days. You\'ll receive tracking information via email once your order ships.'
  },
  {
    id: 'international-shipping',
    category: 'shipping',
    title: 'Do you ship internationally?',
    excerpt: 'Yes, we ship to most countries worldwide. Shipping times and costs vary by location...',
    content: 'Yes, we ship to most countries worldwide! International shipping costs and delivery times vary by location. You can see the exact cost and estimated delivery time during checkout. We handle all customs documentation, but customers are responsible for any import duties or taxes in their country.'
  },
  {
    id: 'return-policy',
    category: 'shipping',
    title: 'What\'s your return policy?',
    excerpt: 'We offer a 30-day return policy for unused items in original packaging...',
    content: 'We offer a 30-day return policy for unused items in original packaging. To initiate a return, please contact our support team with your order number and reason for return. Return shipping costs are the responsibility of the customer unless the item is defective. Refunds are processed within 5-7 business days of receiving the returned item.'
  },
  {
    id: 'shipping-costs',
    category: 'shipping',
    title: 'How much does shipping cost?',
    excerpt: 'Shipping costs vary based on your location and the shipping method chosen...',
    content: 'Shipping costs vary based on your location and the shipping method chosen. Standard shipping within the US is $5.99 for orders under $50, and FREE for orders $50 and above. Express shipping is available for $12.99. International shipping costs are calculated at checkout based on your location and package weight.'
  },

  // Community
  {
    id: 'discord-join',
    category: 'community',
    title: 'How do I join the Discord community?',
    excerpt: 'Click the "Join Discord" button in our header or footer to join our community...',
    content: 'Joining our Discord community is easy! Simply click the "Join Discord" button in our header or footer, or visit our Discord server directly at discord.gg/uYcmUMwtUr. Once you join, you\'ll have access to exclusive channels, community events, and direct communication with Lomaurii and other community members.'
  },
  {
    id: 'community-events',
    category: 'community',
    title: 'What community events do you host?',
    excerpt: 'We host regular gaming tournaments, Q&A sessions, and exclusive merchandise reveals...',
    content: 'We host a variety of community events including regular gaming tournaments, Q&A sessions with Lomaurii, exclusive merchandise reveals, and special giveaways. Events are announced on our Discord server and social media channels. Community members get early access to new products and exclusive discounts.'
  },
  {
    id: 'streaming-schedule',
    category: 'community',
    title: 'What\'s Lomaurii\'s streaming schedule?',
    excerpt: 'Lomaurii streams regularly on Twitch. Check our social media for the latest schedule...',
    content: 'Lomaurii streams regularly on Twitch with a schedule that varies week to week. You can find the latest streaming schedule on our Discord server, Instagram, and Twitter. Streams typically include gaming content, community interaction, and exclusive merchandise reveals. Follow us on social media for real-time updates!'
  },
  {
    id: 'community-guidelines',
    category: 'community',
    title: 'What are the community guidelines?',
    excerpt: 'We promote a positive, inclusive gaming community. Be respectful and supportive...',
    content: 'Our community is built on respect, inclusivity, and positive gaming culture. We expect all members to be respectful, supportive, and inclusive of others. Harassment, hate speech, and toxic behavior are not tolerated. We encourage constructive discussions, helpful feedback, and positive interactions.'
  },

  // Technical Support
  {
    id: 'website-issues',
    category: 'technical',
    title: 'I\'m having issues with the website. What should I do?',
    excerpt: 'Try refreshing the page or clearing your browser cache. Contact support if issues persist...',
    content: 'If you\'re experiencing website issues, try refreshing the page or clearing your browser cache first. Make sure you\'re using a modern browser like Chrome, Firefox, Safari, or Edge. If issues persist, please contact our support team with details about the problem, including your browser and device information.'
  },
  {
    id: 'order-tracking',
    category: 'technical',
    title: 'How do I track my order?',
    excerpt: 'You\'ll receive tracking information via email once your order ships...',
    content: 'You\'ll receive tracking information via email once your order ships. You can also track your order by logging into your account and visiting the "My Orders" section. If you haven\'t received tracking information within 2-3 business days of placing your order, please contact our support team.'
  },
  {
    id: 'account-issues',
    category: 'technical',
    title: 'I can\'t access my account. Help!',
    excerpt: 'Try resetting your password or contact support for account recovery...',
    content: 'If you can\'t access your account, try using the "Forgot Password" feature to reset your password. If that doesn\'t work, contact our support team with your email address and we\'ll help you recover your account. Make sure to check your spam folder for password reset emails.'
  },
  {
    id: 'payment-issues',
    category: 'technical',
    title: 'I\'m having payment issues. What payment methods do you accept?',
    excerpt: 'We accept major credit cards, PayPal, and other secure payment methods...',
    content: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods. If you\'re experiencing payment issues, make sure your billing address matches your payment method. For additional help, contact our support team or your payment provider.'
  }
]

// Computed properties for filtered questions
const filteredProductQuestions = computed(() => {
  return faqData
    .filter(q => q.category === 'products')
    .filter(q => searchQuery.value === '' || 
      q.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      q.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const filteredShippingQuestions = computed(() => {
  return faqData
    .filter(q => q.category === 'shipping')
    .filter(q => searchQuery.value === '' || 
      q.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      q.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const filteredCommunityQuestions = computed(() => {
  return faqData
    .filter(q => q.category === 'community')
    .filter(q => searchQuery.value === '' || 
      q.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      q.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const filteredTechnicalQuestions = computed(() => {
  return faqData
    .filter(q => q.category === 'technical')
    .filter(q => searchQuery.value === '' || 
      q.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      q.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()))
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
