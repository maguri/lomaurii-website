#!/bin/bash

echo "🚀 Deploying Lomaurii Ecommerce to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please log in to Vercel..."
    vercel login
fi

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "📝 Don't forget to set environment variables in your Vercel dashboard:"
echo "   - REDSYS_MERCHANT_CODE"
echo "   - REDSYS_TERMINAL"
echo "   - REDSYS_SECRET_KEY"
echo "   - NODE_ENV"
