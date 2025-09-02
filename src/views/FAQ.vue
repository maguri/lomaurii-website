<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Preguntas Frecuentes
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Encuentra respuestas a las preguntas más comunes sobre nuestros productos, envíos y comunidad.
        </p>
      </div>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Buscar preguntas..."
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
            <h2 class="text-2xl font-bold text-gray-900">Productos</h2>
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
            <h2 class="text-2xl font-bold text-gray-900">Envíos y Devoluciones</h2>
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
            <h2 class="text-2xl font-bold text-gray-900">Comunidad</h2>
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
            <h2 class="text-2xl font-bold text-gray-900">Soporte Técnico</h2>
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
          <h3 class="text-2xl font-bold text-gray-900 mb-4">¿Aún Necesitas Ayuda?</h3>
          <p class="text-gray-600 mb-6">
            ¿No encuentras lo que buscas? ¡Nuestro equipo de soporte está aquí para ayudarte!
          </p>
          <router-link to="/contact" class="btn-primary text-lg px-8 py-3">
            Contactar Soporte
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
    title: '¿Cuál es la calidad de tu mercancía gaming?',
    excerpt: 'Todos nuestros productos están hechos con materiales premium y pasan por estrictos controles de calidad...',
    content: 'Toda nuestra mercancía gaming está elaborada con materiales premium y pasa por estrictos procesos de control de calidad. Nos asociamos con fabricantes de confianza que se especializan en ropa y accesorios gaming. Cada producto es probado para durabilidad, comodidad y estilo antes de ser añadido a nuestra colección. Respaldamos la calidad de nuestros productos con una garantía de satisfacción.'
  },
  {
    id: 'product-sizes',
    category: 'products',
    title: '¿Qué tallas están disponibles para las prendas?',
    excerpt: 'Ofrecemos una amplia gama de tallas desde XS hasta XXL para la mayoría de prendas...',
    content: 'Ofrecemos una gama completa de tallas desde XS hasta XXL para la mayoría de prendas. Nuestra tabla de tallas está disponible en cada página de producto para ayudarte a encontrar el ajuste perfecto. Recomendamos medirte y comparar con nuestra tabla de tallas para el mejor ajuste. Si estás entre tallas, generalmente recomendamos subir de talla para un ajuste más cómodo.'
  },
  {
    id: 'product-customization',
    category: 'products',
    title: '¿Puedo personalizar o personalizar productos?',
    excerpt: 'Algunos productos ofrecen opciones de personalización. Contáctanos para solicitudes específicas...',
    content: '¡Sí, muchos de nuestros productos pueden ser personalizados! Ofrecemos opciones de personalización incluyendo texto personalizado, logos y diseños. Los pedidos personalizados típicamente tardan 2-3 semanas en procesarse y enviarse. Por favor contacta a nuestro equipo de soporte con tu solicitud específica de personalización, y te proporcionaremos una cotización y cronograma.'
  },
  {
    id: 'product-availability',
    category: 'products',
    title: '¿Cómo sé si un producto está en stock?',
    excerpt: 'El estado del stock se muestra claramente en cada página de producto...',
    content: 'El estado del stock se muestra claramente en cada página de producto. Los productos marcados como "En Stock" están listos para enviar inmediatamente. Los artículos marcados como "Stock Bajo" tienen cantidades limitadas disponibles. Los artículos "Sin Stock" mostrarán una fecha estimada de reposición. También puedes registrarte para notificaciones de stock en las páginas de productos.'
  },

  // Shipping & Returns
  {
    id: 'shipping-time',
    category: 'shipping',
    title: '¿Cuánto tiempo tarda el envío?',
    excerpt: 'El envío estándar típicamente toma 3-5 días hábiles dentro de los EE.UU...',
    content: 'El envío estándar típicamente toma 3-5 días hábiles dentro de los EE.UU. El envío express (1-2 días hábiles) está disponible por una tarifa adicional. Los tiempos de envío internacional varían según la ubicación pero generalmente toman 7-14 días hábiles. Recibirás información de seguimiento por email una vez que tu pedido sea enviado.'
  },
  {
    id: 'international-shipping',
    category: 'shipping',
    title: '¿Envían internacionalmente?',
    excerpt: 'Sí, enviamos a la mayoría de países del mundo. Los tiempos y costos de envío varían según la ubicación...',
    content: '¡Sí, enviamos a la mayoría de países del mundo! Los costos de envío internacional y tiempos de entrega varían según la ubicación. Puedes ver el costo exacto y tiempo estimado de entrega durante el checkout. Manejamos toda la documentación de aduanas, pero los clientes son responsables de cualquier arancel de importación o impuestos en su país.'
  },
  {
    id: 'return-policy',
    category: 'shipping',
    title: '¿Cuál es tu política de devoluciones?',
    excerpt: 'Ofrecemos una política de devolución de 30 días para artículos sin usar en empaque original...',
    content: 'Ofrecemos una política de devolución de 30 días para artículos sin usar en empaque original. Para iniciar una devolución, por favor contacta a nuestro equipo de soporte con tu número de pedido y razón de la devolución. Los costos de envío de devolución son responsabilidad del cliente a menos que el artículo esté defectuoso. Los reembolsos se procesan dentro de 5-7 días hábiles de recibir el artículo devuelto.'
  },
  {
    id: 'shipping-costs',
    category: 'shipping',
    title: '¿Cuánto cuesta el envío?',
    excerpt: 'Los costos de envío varían según tu ubicación y el método de envío elegido...',
    content: 'Los costos de envío varían según tu ubicación y el método de envío elegido. El envío estándar dentro de los EE.UU. es $5.99 para pedidos menores a $50, y GRATIS para pedidos de $50 y más. El envío express está disponible por $12.99. Los costos de envío internacional se calculan en el checkout según tu ubicación y peso del paquete.'
  },

  // Community
  {
    id: 'discord-join',
    category: 'community',
    title: '¿Cómo me uno a la comunidad de Discord?',
    excerpt: 'Haz clic en el botón "Unirse a Discord" en nuestro header o footer para unirte a nuestra comunidad...',
    content: '¡Unirse a nuestra comunidad de Discord es fácil! Simplemente haz clic en el botón "Unirse a Discord" en nuestro header o footer, o visita nuestro servidor de Discord directamente en discord.gg/uYcmUMwtUr. Una vez que te unas, tendrás acceso a canales exclusivos, eventos comunitarios y comunicación directa con Lomaurii y otros miembros de la comunidad.'
  },
  {
    id: 'community-events',
    category: 'community',
    title: '¿Qué eventos comunitarios organizan?',
    excerpt: 'Organizamos torneos de gaming regulares, sesiones de Q&A y revelaciones exclusivas de mercancía...',
    content: 'Organizamos una variedad de eventos comunitarios incluyendo torneos de gaming regulares, sesiones de Q&A con Lomaurii, revelaciones exclusivas de mercancía y sorteos especiales. Los eventos se anuncian en nuestro servidor de Discord y canales de redes sociales. Los miembros de la comunidad obtienen acceso temprano a nuevos productos y descuentos exclusivos.'
  },
  {
    id: 'streaming-schedule',
    category: 'community',
    title: '¿Cuál es el horario de streaming de Lomaurii?',
    excerpt: 'Lomaurii hace streaming regularmente en Twitch. Revisa nuestras redes sociales para el horario más reciente...',
    content: 'Lomaurii hace streaming regularmente en Twitch con un horario que varía semana a semana. Puedes encontrar el horario de streaming más reciente en nuestro servidor de Discord, Instagram y Twitter. Los streams típicamente incluyen contenido gaming, interacción comunitaria y revelaciones exclusivas de mercancía. ¡Síguenos en redes sociales para actualizaciones en tiempo real!'
  },
  {
    id: 'community-guidelines',
    category: 'community',
    title: '¿Cuáles son las pautas de la comunidad?',
    excerpt: 'Promovemos una comunidad gaming positiva e inclusiva. Sé respetuoso y solidario...',
    content: 'Nuestra comunidad está construida sobre respeto, inclusividad y cultura gaming positiva. Esperamos que todos los miembros sean respetuosos, solidarios e inclusivos con otros. El acoso, discurso de odio y comportamiento tóxico no son tolerados. Fomentamos discusiones constructivas, retroalimentación útil e interacciones positivas.'
  },

  // Technical Support
  {
    id: 'website-issues',
    category: 'technical',
    title: 'Estoy teniendo problemas con el sitio web. ¿Qué debo hacer?',
    excerpt: 'Intenta refrescar la página o limpiar el caché de tu navegador. Contacta soporte si los problemas persisten...',
    content: 'Si estás experimentando problemas con el sitio web, intenta refrescar la página o limpiar el caché de tu navegador primero. Asegúrate de estar usando un navegador moderno como Chrome, Firefox, Safari o Edge. Si los problemas persisten, por favor contacta a nuestro equipo de soporte con detalles sobre el problema, incluyendo información de tu navegador y dispositivo.'
  },
  {
    id: 'order-tracking',
    category: 'technical',
    title: '¿Cómo rastreo mi pedido?',
    excerpt: 'Recibirás información de seguimiento por email una vez que tu pedido sea enviado...',
    content: 'Recibirás información de seguimiento por email una vez que tu pedido sea enviado. También puedes rastrear tu pedido iniciando sesión en tu cuenta y visitando la sección "Mis Pedidos". Si no has recibido información de seguimiento dentro de 2-3 días hábiles de hacer tu pedido, por favor contacta a nuestro equipo de soporte.'
  },
  {
    id: 'account-issues',
    category: 'technical',
    title: 'No puedo acceder a mi cuenta. ¡Ayuda!',
    excerpt: 'Intenta restablecer tu contraseña o contacta soporte para recuperación de cuenta...',
    content: 'Si no puedes acceder a tu cuenta, intenta usar la función "Olvidé mi Contraseña" para restablecer tu contraseña. Si eso no funciona, contacta a nuestro equipo de soporte con tu dirección de email y te ayudaremos a recuperar tu cuenta. Asegúrate de revisar tu carpeta de spam para emails de restablecimiento de contraseña.'
  },
  {
    id: 'payment-issues',
    category: 'technical',
    title: 'Estoy teniendo problemas de pago. ¿Qué métodos de pago aceptan?',
    excerpt: 'Aceptamos tarjetas de crédito principales, PayPal y otros métodos de pago seguros...',
    content: 'Aceptamos tarjetas de crédito principales (Visa, MasterCard, American Express), PayPal y otros métodos de pago seguros. Si estás experimentando problemas de pago, asegúrate de que tu dirección de facturación coincida con tu método de pago. Para ayuda adicional, contacta a nuestro equipo de soporte o tu proveedor de pago.'
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
