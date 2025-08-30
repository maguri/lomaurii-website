# Lomaurii E-commerce

A modern Vue.js 3 e-commerce application for gaming merchandise and accessories.

## ✨ Features

- **Modern Vue.js 3** with Composition API
- **Responsive Design** with Tailwind CSS
- **Product Catalog** with search, filtering, and sorting
- **Direct Stripe Integration** - Buy buttons redirect to Stripe checkout
- **Product Details** with size/color selection
- **Mobile-First** responsive design
- **Fast Performance** with Vite build tool

## 🏗️ Architecture

- **Frontend**: Vue.js 3 + Vite + Tailwind CSS
- **State Management**: Pinia
- **Routing**: Vue Router
- **Payment**: Direct Stripe checkout integration
- **Build Tool**: Vite
- **Styling**: Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000`

## 💳 Stripe Integration

The application uses **direct Stripe checkout** instead of a traditional cart system:

### How it works:

1. **Product Selection**: Users browse products and select size/color options
2. **Buy Button**: Clicking "Buy Now" redirects directly to Stripe checkout
3. **Payment**: Users complete payment on Stripe's secure checkout page
4. **Success**: Users are redirected back to your site after successful payment

### Setup Stripe:

1. **Create Stripe Account**: Sign up at [stripe.com](https://stripe.com)
2. **Get API Keys**: Find your publishable and secret keys in the Stripe dashboard
3. **Create Products**: Add your products in Stripe dashboard
4. **Update Product IDs**: Add `stripeProductId` to your product data

### Example Product Data:
```javascript
{
  id: 1,
  name: "Gaming T-Shirt",
  price: 29.99,
  stripeProductId: "prod_1234567890", // Your Stripe product ID
  // ... other properties
}
```

## 📱 Usage

### For Customers:
1. Browse products on the main page
2. Click on a product to view details
3. Select size/color options if available
4. Click "Buy Now" to go to Stripe checkout
5. Complete payment on Stripe's secure page

### For Developers:
- **Products**: Edit `src/stores/products.js`
- **Styling**: Modify Tailwind classes in components
- **Stripe**: Update product IDs and checkout URLs

## 🎨 Customization

### Colors
Update the primary color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6', // Blue
      secondary: '#8b5cf6', // Purple
    }
  }
}
```

### Products
Add/modify products in `src/stores/products.js`:
```javascript
{
  id: 1,
  name: "Product Name",
  price: 29.99,
  description: "Product description",
  category: "Category",
  image: "/path/to/image.jpg",
  stripeProductId: "prod_1234567890",
  inStock: true,
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Black"]
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Environment Variables**
   Add your Stripe keys in Vercel dashboard:
   - `STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`

### Other Platforms

Build the project and deploy the `dist` folder:
```bash
npm run build
# or
yarn build
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Project Structure

```
src/
├── components/          # Reusable components
├── views/              # Page components
├── stores/             # Pinia stores
├── router/             # Vue Router configuration
├── style.css           # Global styles
└── main.js            # App entry point
```

## 🧪 Testing

The application is ready for testing with Stripe's test cards:

- **Test Card**: 4242 4242 4242 4242
- **Expiry**: Any future date
- **CVC**: Any 3 digits

## 📈 Roadmap

- [ ] User authentication
- [ ] Order history
- [ ] Email notifications
- [ ] Inventory management
- [ ] Analytics dashboard
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Create an issue in this repository
- Contact the development team

---

**Built with ❤️ using Vue.js 3 and Tailwind CSS**
