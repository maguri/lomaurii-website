<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Servidores de Juego
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Únete a Lomaurii y la comunidad en nuestros servidores de juego cuidadosamente seleccionados. 
            Experimenta el mejor gaming multijugador con otros streamers y gamers.
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
                En Línea
              </span>
            </div>
            <div class="absolute bottom-4 left-4">
              <h3 class="text-2xl font-bold text-white">Norfigame</h3>
              <p class="text-blue-200">DayZ Server P.V.P.</p>
            </div>
          </div>

          <!-- Server Info -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-xl font-semibold text-white">Servidor Norfigame</h4>
              <div class="flex items-center space-x-2">
                <span class="text-green-400 text-sm">●</span>
                <span class="text-gray-300 text-sm">Activo</span>
              </div>
            </div>

            <p class="text-gray-300 mb-4 leading-relaxed">
              Un servidor de comunidad gaming de primer nivel donde Lomaurii y otros streamers se reúnen para sesiones multijugador épicas. 
              Experimenta gameplay competitivo, eventos comunitarios y torneos exclusivos.
            </p>

            <!-- Server Stats -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-400">1500+</div>
                <div class="text-xs text-gray-400">Miembros</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-400">24/7</div>
                <div class="text-xs text-gray-400">Tiempo Activo</div>
              </div>
            </div>

            <!-- Features -->
            <div class="mb-6">
              <h5 class="text-white font-medium mb-3">Características del Servidor:</h5>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">Integración Discord</span>
                <span class="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">Torneos</span>
                <span class="px-3 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">Eventos Comunitarios</span>
                <span class="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded-full">Soporte para Streamers</span>
              </div>
            </div>

            <!-- Lomaurii Connection -->
            <div class="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-4 rounded-lg border border-purple-500/30">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <div class="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  </div>
                </div>
                <div>
                  <h6 class="text-white font-medium">Servidor DayZ</h6>
                  <p class="text-purple-300 text-sm">Únete a la comunidad de Lomaurii y participa en eventos exclusivos</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="mt-6 space-y-3">
              <div class="flex space-x-3">
                <a href="https://discord.gg/uYcmUMwtUr" target="_blank" rel="noopener noreferrer" 
               class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Discord
            </a>
                <router-link to="/faq" class="px-4 py-2 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-500/20 transition-all duration-200">
                  Aprender Más
                </router-link>
              </div>
              
              <!-- Subscription Button -->
              <a href="https://buy.stripe.com/fZu6oIcVJ42L5Hx6h59IQ0p" target="_blank" rel="noopener noreferrer" 
                 class="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                V.I.P.
              </a>
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
            <h4 class="text-xl font-semibold text-white mb-2">Más Servidores Próximamente</h4>
            <p class="text-gray-400 mb-4">
              Estamos constantemente expandiendo nuestra red de servidores de juego. 
              ¡Mantente atento para más comunidades emocionantes a las que unirte!
            </p>
            <button class="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors duration-200">
              Notificarme
            </button>
          </div>
        </div>
      </div>

      <!-- Community Section -->
      <div class="mt-20 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Bienvenido a esta pequeña Comunidad!</h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-8">
          Conéctate con otros gamers, participa en torneos y sé parte de eventos exclusivos 
          organizados por Lomaurii y la comunidad.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                     <router-link to="/contact" 
                     class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
             Seguir a Lomaurii
           </router-link>
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
