# Lomaurii Ecommerce - Redsys Payment Integration

This project demonstrates how to integrate Redsys payments into a Vue.js ecommerce application using Vercel serverless functions, eliminating the need for a traditional backend server.

## 🚀 Features

- **Vue.js 3** frontend with Composition API
- **Pinia** state management for cart and products
- **Tailwind CSS** for modern, responsive design
- **Redsys payment gateway** integration via Vercel Functions
- **Serverless architecture** - no backend server required
- **Shopping cart** with size/color selection
- **Responsive design** for mobile and desktop
- **Payment success/error handling**

## 🏗️ Architecture

```
Frontend (Vue.js) → Vercel Functions → Redsys Payment Gateway
```

- **Frontend**: Vue.js SPA handling UI and user interactions
- **Vercel Functions**: Serverless API endpoints for payment processing
- **Redsys**: Spanish payment gateway for credit/debit card processing

## 📋 Prerequisites

- Node.js 16+ and npm/yarn
- Vercel account (free tier available)
- Redsys merchant account (for production)

## 🛠️ Installation

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

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   REDSYS_MERCHANT_CODE=your_merchant_code
   REDSYS_TERMINAL=your_terminal_id
   REDSYS_SECRET_KEY=your_secret_key
   NODE_ENV=development
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🚀 Deployment to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy the project**
   ```bash
   vercel
   ```

4. **Set environment variables in Vercel dashboard**
   - Go to your project settings
   - Add the same environment variables from `.env.local`
   - Redeploy if needed

## 🔧 Configuration

### Redsys Configuration

The app uses test credentials by default. For production:

1. **Get your Redsys credentials** from your merchant account
2. **Update environment variables** in Vercel dashboard
3. **Change NODE_ENV** to `production` for live payments

### Test Cards (Development)

Use these test card numbers for development:
- **Visa**: 4548812049400004
- **Mastercard**: 5579070000000000
- **Expiry**: Any future date
- **CVV**: Any 3 digits

## 📱 Usage

### Adding Products to Cart

1. Browse products on `/products` page
2. Select size/color if applicable
3. Click "Add to Cart"
4. View cart by clicking the cart icon in navigation

### Checkout Process

1. **Cart Review**: View items and total
2. **Customer Information**: Fill in name, email, phone
3. **Payment Method**: Select Redsys (credit/debit card)
4. **Payment Processing**: Redirected to Redsys secure payment page
5. **Completion**: Redirected back to success/error page

## 🔒 Security Features

- **Server-side signature generation** for Redsys
- **Environment variable protection** for sensitive data
- **HTTPS enforcement** in production
- **Input validation** on all forms
- **CSRF protection** via Vercel's built-in security

## 🧪 Testing

### Local Development

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Test cart functionality**
   - Add products to cart
   - Modify quantities
   - Remove items

3. **Test checkout flow**
   - Navigate to checkout
   - Fill customer information
   - Test payment (will use test environment)

### Production Testing

1. **Deploy to Vercel**
2. **Use test cards** in production environment
3. **Verify webhook handling**
4. **Test error scenarios**

## 📊 Monitoring

### Vercel Dashboard

- **Function logs**: Monitor API calls and errors
- **Performance metrics**: Track response times
- **Error tracking**: Identify and fix issues

### Redsys Dashboard

- **Transaction history**: View all payments
- **Success rates**: Monitor payment completion
- **Error reports**: Identify payment failures

## 🚨 Troubleshooting

### Common Issues

1. **Payment fails immediately**
   - Check Redsys credentials
   - Verify environment variables
   - Check function logs in Vercel

2. **Cart not persisting**
   - Ensure localStorage is enabled
   - Check browser console for errors

3. **Checkout page not loading**
   - Verify route configuration
   - Check component imports

4. **Redsys redirect issues**
   - Verify callback URLs
   - Check CORS settings

### Debug Mode

Enable debug logging by setting:
```env
DEBUG=true
```

## 🔄 Updates and Maintenance

### Regular Tasks

1. **Monitor Vercel function performance**
2. **Update Redsys SDK** when available
3. **Review security best practices**
4. **Test payment flows** regularly

### Security Updates

1. **Rotate Redsys keys** periodically
2. **Update dependencies** for security patches
3. **Monitor Vercel security advisories**

## 📚 Resources

- [Vercel Functions Documentation](https://vercel.com/docs/functions)
- [Redsys Developer Portal](https://pagosonline.redsys.es/entornoPruebas.html)
- [Vue.js 3 Documentation](https://vuejs.org/)
- [Pinia State Management](https://pinia.vuejs.org/)

## 🤝 Support

For technical support:
- **Vercel Issues**: Check Vercel dashboard and logs
- **Redsys Issues**: Contact Redsys merchant support
- **Vue.js Issues**: Check Vue.js documentation and community

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Roadmap

- [ ] PayPal integration
- [ ] Apple Pay / Google Pay support
- [ ] Subscription payments
- [ ] Multi-currency support
- [ ] Advanced fraud detection
- [ ] Analytics dashboard

---

**Note**: This is a demo implementation. For production use, ensure compliance with PCI DSS requirements and implement additional security measures as needed for your specific use case.
