import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
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
        inStock: true,
        rating: 4.8,
        reviews: 127,
        featured: true
      },
      {
        id: 2,
        name: "Gaming Mouse Pad",
        description: "Extra large RGB gaming mouse pad with Lomaurii branding. Features smooth surface for precise mouse movement and stunning LED lighting effects.",
        price: 24.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop&crop=center"
        ],
        inStock: true,
        rating: 4.6,
        reviews: 89,
        featured: true
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
        inStock: true,
        rating: 4.9,
        reviews: 203,
        featured: false
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
        inStock: true,
        rating: 4.7,
        reviews: 156,
        featured: false
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
        featured: false
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
        inStock: true,
        rating: 4.5,
        reviews: 78,
        featured: false
      },
      {
        id: 7,
        name: "Linterna Táctica LED",
        description: "Linterna táctica profesional con 1000 lúmenes de potencia. Perfecta para actividades al aire libre, camping, senderismo y emergencias. Resistente al agua y golpes.",
        price: 34.99,
        category: "Survival",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop&crop=center"
        ],
        inStock: true,
        rating: 4.7,
        reviews: 95,
        featured: true
      },
      {
        id: 8,
        name: "Linterna de Cabeza Recargable",
        description: "Linterna de cabeza con batería recargable USB. Ideal para actividades nocturnas, trabajo en espacios oscuros y aventuras al aire libre. Luz ajustable y cómoda de llevar.",
        price: 24.99,
        category: "Survival",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop&crop=center"
        ],
        inStock: true,
        rating: 4.5,
        reviews: 67,
        featured: false
      },
      {
        id: 9,
        name: "Linterna Compacta de Bolsillo",
        description: "Linterna ultra compacta y ligera perfecta para llevar en el bolsillo o mochila. 500 lúmenes de potencia en un diseño minimalista. Ideal para emergencias y uso diario.",
        price: 19.99,
        category: "Survival",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop&crop=center",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=500&fit=crop&crop=center"
        ],
        inStock: true,
        rating: 4.6,
        reviews: 89,
        featured: false
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
