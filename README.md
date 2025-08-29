# Lomaurii E-commerce Vue.js Application

A modern, responsive e-commerce website built with Vue.js 3, featuring gaming merchandise and community gear for the Lomaurii brand.

## 🎮 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Management**: Complete product catalog with filtering and search
- **Modern UI/UX**: Beautiful, intuitive interface with smooth animations
- **Vue 3 Composition API**: Latest Vue.js features and best practices
- **State Management**: Pinia store for efficient data management
- **Routing**: Vue Router for seamless navigation
- **Responsive Images**: Optimized images for all device sizes

## 📱 Pages

1. **Dashboard** (`/`) - Hero section, featured products, about section
2. **Products List** (`/products`) - Product grid/list view with filters
3. **Product View** (`/product/:id`) - Detailed product information
4. **Contact** (`/contact`) - Contact form and company information

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lomaurii-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
├── views/              # Page components
│   ├── Dashboard.vue   # Home page
│   ├── ProductsList.vue # Products listing
│   ├── ProductView.vue # Individual product view
│   └── Contact.vue     # Contact page
├── stores/             # Pinia stores
│   └── products.js     # Products data management
├── router/             # Vue Router configuration
│   └── index.js        # Route definitions
├── style.css           # Global styles and Tailwind imports
├── main.js             # Application entry point
└── App.vue             # Root component
```

## 🎨 Customization

### Colors
The application uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)  
- **Accent**: `#f59e0b` (Amber)

### Products
Edit `src/stores/products.js` to modify:
- Product information
- Categories
- Pricing
- Images

### Content
Update the following files to customize content:
- `src/views/Dashboard.vue` - Hero text and about section
- `src/views/Contact.vue` - Contact information and FAQ
- `src/App.vue` - Navigation and footer

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🖼️ Images

All product images are sourced from Unsplash for demonstration purposes. In production:
- Replace with actual product photos
- Optimize images for web (WebP format recommended)
- Implement lazy loading for better performance

## 🔗 Social Media Integration

The application includes integration with:
- **Twitch**: Direct link to [Lomaurii's Twitch channel](https://www.twitch.tv/lomaurii)
- **Future**: Easy to add more social platforms

## 🚀 Deployment

### GitHub Pages (Recommended)
1. **Enable GitHub Pages** in your repository settings
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`

2. **Push to main branch** - The workflow will automatically:
   - Build your Vue.js app
   - Deploy to GitHub Pages
   - Your site will be available at: `https://[username].github.io/ecommerce/`

3. **Custom Domain** (Optional)
   - Add your domain in the workflow file: `.github/workflows/deploy.yml`
   - Uncomment and set the `cname` field

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your repository
2. Build command: `npm run build`
3. Output directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web server

## 📝 License

This project is created for Lomaurii's e-commerce needs. All rights reserved.

## 🤝 Contributing

This is a personal project for Lomaurii. For questions or suggestions, please use the contact form on the website.

## 📞 Support

For technical support or questions about products:
- Use the contact form on the website
- Email: hello@lomaurii.com
- Follow [@lomaurii on Twitch](https://www.twitch.tv/lomaurii)

---

**Built with ❤️ for the Lomaurii community**
