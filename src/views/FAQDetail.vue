<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="mb-8">
        <router-link to="/faq" class="text-primary hover:text-primary-dark transition-colors">
          ← Back to FAQ
        </router-link>
      </nav>

      <!-- Question Detail -->
      <div v-if="question" class="bg-white rounded-xl shadow-lg p-8">
        <!-- Category Badge -->
        <div class="mb-6">
          <span :class="getCategoryBadgeClass(question.category)" class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
            {{ getCategoryName(question.category) }}
          </span>
        </div>

        <!-- Question Title -->
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {{ question.title }}
        </h1>

        <!-- Question Content -->
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-700 leading-relaxed text-lg">
            {{ question.content }}
          </p>
        </div>

        <!-- Related Questions -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Related Questions</h3>
          <div class="space-y-3">
            <router-link 
              v-for="relatedQuestion in relatedQuestions" 
              :key="relatedQuestion.id"
              :to="`/faq/${relatedQuestion.id}`"
              class="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-all duration-200"
            >
              <h4 class="font-medium text-gray-900 hover:text-primary transition-colors">
                {{ relatedQuestion.title }}
              </h4>
              <p class="text-gray-600 text-sm mt-1">{{ relatedQuestion.excerpt }}</p>
            </router-link>
          </div>
        </div>

        <!-- Help Section -->
        <div class="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Still Need Help?</h3>
          <p class="text-gray-600 mb-4">
            If this answer doesn't solve your problem, our support team is here to help!
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <router-link to="/contact" class="btn-primary text-center">
              Contact Support
            </router-link>
            <a href="https://discord.gg/uYcmUMwtUr" target="_blank" rel="noopener noreferrer" 
               class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-center flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Ask on Discord
            </a>
          </div>
        </div>
      </div>

      <!-- Not Found -->
      <div v-else class="bg-white rounded-xl shadow-lg p-8 text-center">
        <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Question Not Found</h2>
        <p class="text-gray-600 mb-6">
          The question you're looking for doesn't exist or has been moved.
        </p>
        <router-link to="/faq" class="btn-primary">
          Browse All Questions
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// FAQ Data (same as in FAQ.vue)
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

// Find the current question
const question = computed(() => {
  return faqData.find(q => q.id === route.params.id)
})

// Get related questions (same category, excluding current)
const relatedQuestions = computed(() => {
  if (!question.value) return []
  return faqData
    .filter(q => q.category === question.value.category && q.id !== question.value.id)
    .slice(0, 3) // Show max 3 related questions
})

// Helper functions
const getCategoryName = (category) => {
  const names = {
    products: 'Products',
    shipping: 'Shipping & Returns',
    community: 'Community',
    technical: 'Technical Support'
  }
  return names[category] || category
}

const getCategoryBadgeClass = (category) => {
  const classes = {
    products: 'bg-blue-100 text-blue-800',
    shipping: 'bg-green-100 text-green-800',
    community: 'bg-purple-100 text-purple-800',
    technical: 'bg-orange-100 text-orange-800'
  }
  return classes[category] || 'bg-gray-100 text-gray-800'
}
</script>
