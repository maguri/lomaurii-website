<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex-shrink-0 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-lg">L</span>
              </div>
              <span class="ml-2 text-xl font-bold text-gray-900">Lomaurii</span>
            </router-link>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="nav-link">Dashboard</router-link>
            <router-link to="/products" class="nav-link">Products</router-link>
            <router-link to="/server" class="nav-link">Server</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
            <a href="https://www.twitch.tv/lomaurii" target="_blank" rel="noopener noreferrer" 
               class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              🎮 Twitch
            </a>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMobileMenu" class="text-gray-600 hover:text-gray-900">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link to="/" @click="mobileMenuOpen = false" class="mobile-nav-link">Dashboard</router-link>
          <router-link to="/products" @click="mobileMenuOpen = false" class="mobile-nav-link">Products</router-link>
          <router-link to="/server" @click="mobileMenuOpen = false" class="mobile-nav-link">Server</router-link>
          <router-link to="/contact" @click="mobileMenuOpen = false" class="mobile-nav-link">Contact</router-link>
          <a href="https://www.twitch.tv/lomaurii" target="_blank" rel="noopener noreferrer" 
             class="block w-full text-left px-3 py-2 text-base font-medium text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-md">
            🎮 Twitch Channel
          </a>
        </div>
      </div>
    </nav>
    
    <main>
      <router-view />
    </main>
    
    <footer class="bg-gray-900 text-white mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Lomaurii</h3>
            <p class="text-gray-400">Gaming merchandise and community gear for true gamers.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><router-link to="/" class="text-gray-400 hover:text-white transition-colors">Dashboard</router-link></li>
              <li><router-link to="/products" class="text-gray-400 hover:text-white transition-colors">Products</router-link></li>
              <li><router-link to="/server" class="text-gray-400 hover:text-white transition-colors">Server</router-link></li>
              <li><router-link to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Connect</h3>
            <div class="flex space-x-4">
              <a href="https://www.twitch.tv/lomaurii" target="_blank" rel="noopener noreferrer" 
                 class="text-gray-400 hover:text-purple-400 transition-colors">
                <span class="sr-only">Twitch</span>
                🎮
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Lomaurii. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  }
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200;
}

.mobile-nav-link {
  @apply block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md;
}

.router-link-active {
  @apply text-primary;
}
</style>
