# RideApp - Mobile Web App

Fast and secure trotro payments for Ghana.

## 🚀 Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy
1. Push this code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! You'll get a live URL

### Option 2: Vercel CLI
```bash
npm install -g vercel
cd rideapp-web
vercel
```

## 📱 Deploy to Netlify

### Option 1: Drag & Drop
1. Build the project: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder
4. Done!

### Option 2: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 on your phone (make sure you're on the same WiFi)

## 📲 Install as App on iPhone

1. Open the deployed URL in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Enjoy full-screen app experience!

## 🎨 Features

- ✅ Mobile-optimized responsive design
- ✅ PWA support (installable as app)
- ✅ Premium animations and interactions
- ✅ Multiple payment methods (MoMo, Vodafone, Bank)
- ✅ Tap-to-pay simulation
- ✅ Trip history tracking
- ✅ Real-time balance updates

## 📦 Build Configuration

- Framework: React + Vite
- Styling: Tailwind CSS (CDN)
- Icons: Lucide React
- Deployment: Optimized for Vercel/Netlify

## 🔧 Environment

No environment variables needed for demo version.
For production with real payments, add:
- Payment gateway API keys
- Backend API URL
