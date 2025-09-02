<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="mb-8">
        <router-link to="/faq" class="text-primary hover:text-primary-dark transition-colors">
          ← Volver a FAQ
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
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Preguntas Relacionadas</h3>
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
          <h3 class="text-lg font-semibold text-gray-900 mb-2">¿Aún Necesitas Ayuda?</h3>
          <p class="text-gray-600 mb-4">
            Si esta respuesta no resuelve tu problema, ¡nuestro equipo de soporte está aquí para ayudarte!
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <router-link to="/contact" class="btn-primary text-center">
              Contactar Soporte
            </router-link>
            <a href="https://discord.gg/uYcmUMwtUr" target="_blank" rel="noopener noreferrer" 
               class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-center flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
                             Preguntar en Discord
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
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Pregunta No Encontrada</h2>
        <p class="text-gray-600 mb-6">
          La pregunta que buscas no existe o ha sido movida.
        </p>
        <router-link to="/faq" class="btn-primary">
          Explorar Todas las Preguntas
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
    products: 'Productos',
    shipping: 'Envíos y Devoluciones',
    community: 'Comunidad',
    technical: 'Soporte Técnico'
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
