<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Gaming Servers
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Join Lomaurii and the community on our carefully curated gaming servers. 
            Experience the best multiplayer gaming with fellow streamers and gamers.
          </p>
        </div>
      </div>
    </div>

    <!-- Server List Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Norfigame Server Card -->
        <div class="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
          <!-- Server Image -->
          <div class="relative h-48 bg-gradient-to-br from-blue-600 to-purple-700">
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute top-4 right-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                <span class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Online
              </span>
            </div>
            <div class="absolute bottom-4 left-4">
              <h3 class="text-2xl font-bold text-white">Norfigame</h3>
              <p class="text-blue-200">Gaming Community</p>
            </div>
          </div>

          <!-- Server Info -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-xl font-semibold text-white">Norfigame Server</h4>
              <div class="flex items-center space-x-2">
                <span class="text-green-400 text-sm">●</span>
                <span class="text-gray-300 text-sm">Active</span>
              </div>
            </div>

            <p class="text-gray-300 mb-4 leading-relaxed">
              A premier gaming community server where Lomaurii and fellow streamers gather for epic multiplayer sessions. 
              Experience competitive gameplay, community events, and exclusive tournaments.
            </p>

            <!-- Server Stats -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">500+</div>
                <div class="text-xs text-gray-400">Members</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-400">24/7</div>
                <div class="text-xs text-gray-400">Uptime</div>
              </div>
            </div>

            <!-- Features -->
            <div class="mb-6">
              <h5 class="text-white font-medium mb-3">Server Features:</h5>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">Discord Integration</span>
                <span class="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">Tournaments</span>
                <span class="px-3 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">Community Events</span>
                <span class="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded-full">Streamer Support</span>
              </div>
            </div>

            <!-- Lomaurii Connection -->
            <div class="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-4 rounded-lg border border-purple-500/30">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">L</span>
                </div>
                <div>
                  <h6 class="text-white font-medium">Lomaurii's Home Server</h6>
                  <p class="text-purple-300 text-sm">Join Lomaurii's community and participate in exclusive events</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="mt-6 flex space-x-3">
              <button class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                Join Server
              </button>
              <button class="px-4 py-2 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-500/20 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <!-- Coming Soon Card -->
        <div class="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-gray-700/50">
          <div class="p-6 text-center">
            <div class="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-white mb-2">More Servers Coming</h4>
            <p class="text-gray-400 mb-4">
              We're constantly expanding our network of gaming servers. 
              Stay tuned for more exciting communities to join!
            </p>
            <button class="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors duration-200">
              Notify Me
            </button>
          </div>
        </div>
      </div>

      <!-- Community Section -->
      <div class="mt-20 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Join the Community</h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-8">
          Connect with fellow gamers, participate in tournaments, and be part of exclusive events 
          hosted by Lomaurii and the community.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
            Join Discord
          </button>
          <button class="border border-purple-500 text-purple-300 px-8 py-3 rounded-lg hover:bg-purple-500/20 transition-all duration-200">
            Follow Lomaurii
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Custom styles if needed */
</style>
