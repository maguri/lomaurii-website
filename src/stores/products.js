import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Linterna BH5",
        description: "Linterna BH5 by lomaurii: mini linterna LED recargable de bolsillo, compacta y ligera (71,9 g). Ofrece hasta 1500 lúmenes con 5 modos de uso (Alto, Medio, Bajo, Strobe y SOS). Fabricada en aleación de aluminio, con certificación IP68, ideal para camping y exteriores. Funciona con batería de litio 18350, con autonomía de 6 h y vida útil de 50.000 horas. Potente, resistente y fácil de llevar a cualquier lugar.",
        price: 21.99,
        category: "Survival",
        image: "https://stripe-camo.global.ssl.fastly.net/8f8e3cc3309c07c2252fff6b11deed6fe4e00b1d83e5402960ddb27d271e139f/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536a424f5a32464b596d64565a6c52355155526e66475a7358327870646d5666536a6435614656745257354d566e4675536d7432537a4e6c516e4a30655564433030516441506c6c5037/6d65726368616e745f69643d616363745f314a304e67614a62675566547941446726636c69656e743d5041594d454e545f50414745",
        images: [
          "https://stripe-camo.global.ssl.fastly.net/8f8e3cc3309c07c2252fff6b11deed6fe4e00b1d83e5402960ddb27d271e139f/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536a424f5a32464b596d64565a6c52355155526e66475a7358327870646d5666536a6435614656745257354d566e4675536d7432537a4e6c516e4a30655564433030516441506c6c5037/6d65726368616e745f69643d616363745f314a304e67614a62675566547941446726636c69656e743d5041594d454e545f50414745"
        ],
        inStock: true,
        rating: 4.7,
        reviews: 5,
        featured: true,
        stripePaymentLink: "https://buy.stripe.com/aFa8wQ4pdeHp3zpaxl9IQ0o"
      },
      {
        id: 2,
        name: "Linterna S50",
        description: "Linterna E-SMARTER XQS50La linterna que combina potencia, resistencia y ligereza.Más de 1000 lúmenes con luz blanca de 5000K.Batería recargable 18650 con hasta 6 horas de autonomía.Cuerpo de aleación de aluminio, impermeable IP55.Zoom ajustable y foco láser blanco.Solo 99 g de peso y 10.000 horas de vida útil.Ideal para emergencias, actividades al aire libre y uso diario. ENVIO GRATIS",
        price: 23.99,
        category: "Survival",
        image: "https://stripe-camo.global.ssl.fastly.net/44eddf6c07cd2ca432ddca9fcc03cea7f591718b169c098988c95320008eeb9c/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536a424f5a32464b596d64565a6c52355155526e66475a7358327870646d5666546d4a354f466c594d464178576b38356145396c516d56456347747059334e4630303963374b54794e6d/6d65726368616e745f69643d616363745f314a304e67614a62675566547941446726636c69656e743d5041594d454e545f50414745",
        images: [
          "https://stripe-camo.global.ssl.fastly.net/44eddf6c07cd2ca432ddca9fcc03cea7f591718b169c098988c95320008eeb9c/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536a424f5a32464b596d64565a6c52355155526e66475a7358327870646d5666546d4a354f466c594d464178576b38356145396c516d56456347747059334e4630303963374b54794e6d/6d65726368616e745f69643d616363745f314a304e67614a62675566547941446726636c69656e743d5041594d454e545f50414745"
        ],
        inStock: true,
        rating: 4.5,
        reviews: 6,
        featured: false,
        stripePaymentLink: "https://buy.stripe.com/7sYcN6g7V2YH4DtdJx9IQ0n"
      },
      {
        id: 3,
        name: "Streamer Headset",
        description: "Professional gaming headset with noise-canceling microphone. Perfect for streaming, gaming, and content creation with crystal clear audio quality.",
        price: 79.99,
        category: "Audio",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center"
        ],
        inStock: false,
        rating: 4.9,
        reviews: 203,
        featured: false,
        stripePaymentLink: ""
      },
      {
        id: 4,
        name: "Gaming Hoodie",
        description: "Comfortable and stylish gaming hoodie with Lomaurii embroidery. Made from premium materials for ultimate comfort during long gaming sessions.",
        price: 49.99,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop&crop=center"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Gray", "Navy"],
        inStock: false,
        rating: 4.7,
        reviews: 156,
        featured: false,
        stripePaymentLink: ""
      },
      {
        id: 5,
        name: "Mechanical Gaming Keyboard",
        description: "RGB mechanical gaming keyboard with customizable lighting and premium switches. Perfect for competitive gaming and content creation.",
        price: 129.99,
        category: "Peripherals",
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop&crop=center"
        ],
        inStock: false,
        rating: 4.9,
        reviews: 312,
        featured: false,
        stripePaymentLink: ""
      },
      {
        id: 6,
        name: "Gaming Chair",
        description: "Ergonomic gaming chair with lumbar support and adjustable features. Designed for long gaming sessions and maximum comfort.",
        price: 199.99,
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center"
        ],
        inStock: false,
        rating: 4.5,
        reviews: 78,
        featured: false,
        stripePaymentLink: ""
      },
      {
        id: 7,
        name: "Lomaurii Gaming T-Shirt",
        description: "Premium cotton gaming t-shirt featuring the Lomaurii logo. Perfect for streamers and gamers who want to represent their favorite content creator.",
        price: 29.99,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop&crop=center"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Navy"],
        inStock: false,
        rating: 4.8,
        reviews: 127,
        featured: true,
        stripePaymentLink: ""
      },
      {
        id: 8,
        name: "Gaming Mouse Pad",
        description: "Extra large RGB gaming mouse pad with Lomaurii branding. Features smooth surface for precise mouse movement and stunning LED lighting effects.",
        price: 24.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop&crop=center"
        ],
        inStock: false,
        rating: 4.6,
        reviews: 89,
        featured: true,
        stripePaymentLink: ""
      }
    ],
    categories: ["All", "Clothing", "Accessories", "Audio", "Peripherals", "Furniture", "Survival"],
    selectedCategory: "All"
  }),
  
  getters: {
    featuredProducts: (state) => state.products.filter(product => product.featured),
    filteredProducts: (state) => {
      if (state.selectedCategory === "All") {
        return state.products
      }
      return state.products.filter(product => product.category === state.selectedCategory)
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    }
  },
  
  actions: {
    setCategory(category) {
      this.selectedCategory = category
    }
  }
})
