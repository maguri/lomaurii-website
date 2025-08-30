import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false
  }),

  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    
    totalAmount: (state) => state.items.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0),
    
    formattedTotal: (state) => {
      const total = state.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
      }).format(total)
    },
    
    isEmpty: (state) => state.items.length === 0
  },

  actions: {
    addItem(product, quantity = 1, selectedSize = null, selectedColor = null) {
      const existingItem = this.items.find(item => 
        item.id === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      )

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          selectedSize,
          selectedColor,
          maxQuantity: product.inStock ? 10 : 0
        })
      }
    },

    removeItem(itemId, selectedSize = null, selectedColor = null) {
      const index = this.items.findIndex(item => 
        item.id === itemId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      )
      
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    updateQuantity(itemId, quantity, selectedSize = null, selectedColor = null) {
      const item = this.items.find(item => 
        item.id === itemId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      )
      
      if (item) {
        if (quantity <= 0) {
          this.removeItem(itemId, selectedSize, selectedColor)
        } else if (quantity <= item.maxQuantity) {
          item.quantity = quantity
        }
      }
    },

    clearCart() {
      this.items = []
    },

    toggleCart() {
      this.isOpen = !this.isOpen
    },

    openCart() {
      this.isOpen = true
    },

    closeCart() {
      this.isOpen = false
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'lomaurii-cart',
        storage: localStorage
      }
    ]
  }
})
