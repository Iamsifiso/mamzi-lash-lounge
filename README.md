# Mamzi Lash Lounge Website

Professional website for Mamzi Lash Lounge - Premium lash extensions, lifts, and tints in Durban, South Africa.

## 🎨 Features

- **Modern, Responsive Design**: Beautiful black & pink color scheme matching your brand
- **Service Showcase**: Detailed information about lash extensions, lifts, and tints
- **Portfolio Gallery**: Showcase your stunning lash work
- **Client Testimonials**: Build trust with reviews
- **Direct Booking**: WhatsApp integration for instant appointments
- **Social Media Links**: Instagram, TikTok, and WhatsApp connections
- **SEO Optimized**: Better visibility in search engines
- **Mobile-First**: Perfect on all devices

## 🚀 Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Beautiful icons

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- Git installed
- Vercel account (free tier works great)
- AWS Route 53 account (if using custom domain)

### Local Development

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site locally.

3. **Build for Production**
```bash
npm run build
```

## 🌐 Deployment Guide

### Step 1: Push to GitHub

1. **Create a new GitHub repository**
   - Go to github.com/new
   - Name it: `mamzi-lash-lounge`
   - Keep it public or private (both work with Vercel)
   - Don't initialize with README (we already have one)

2. **Initialize Git and Push**
```bash
# Navigate to your project folder
cd mamzi-lash-lounge

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Mamzi Lash Lounge website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/mamzi-lash-lounge.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Sign in (use GitHub to simplify)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your `mamzi-lash-lounge` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live at: `mamzi-lash-lounge.vercel.app`

### Step 3: Custom Domain with Route 53

1. **Purchase Domain in Route 53**
   - Go to AWS Console → Route 53
   - Register domain (e.g., `mamzilashlounge.co.za`)
   - Complete registration process

2. **Add Domain to Vercel**
   - In Vercel project → Settings → Domains
   - Add your domain: `mamzilashlounge.co.za`
   - Add with `www`: `www.mamzilashlounge.co.za`

3. **Configure DNS in Route 53**
   - Vercel will show you DNS records to add
   - Go to Route 53 → Hosted Zones → Your domain
   - Create records as shown by Vercel:
     - **A Record**: Point `@` to Vercel IP (e.g., `76.76.21.21`)
     - **CNAME Record**: Point `www` to `cname.vercel-dns.com`

4. **Verify Domain**
   - Wait 5-60 minutes for DNS propagation
   - Vercel will auto-verify and issue SSL certificate
   - Your site is now live at your custom domain! 🎉

## 🔄 Making Updates

After deployment, any changes you push to GitHub will automatically deploy:

```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Update: description of changes"
git push
```

Vercel automatically rebuilds and deploys within 2-3 minutes!

## 📝 Content Updates

### Update Images
Replace files in `public/images/` with your renamed images:
- `classic-lash-extensions-closeup.jpg`
- `volume-lash-extensions-detail.jpg`
- etc.

### Update Contact Information
Edit `app/page.tsx`:
- Line 207: WhatsApp number
- Lines 592-604: Contact section
- Lines 599-615: Social media links

### Update Services & Pricing
Edit the `services` array in `app/page.tsx` (lines 23-52)

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF69B4', // Your pink
  secondary: '#000000', // Black
}
```

## 📱 Social Media Integration

Current links:
- Instagram: https://www.instagram.com/mamzi.lash_lounge
- TikTok: https://www.tiktok.com/@mamzi.lash_lounge
- WhatsApp: 067 112 5411

## 🎯 SEO & Marketing

The site includes:
- Meta descriptions for search engines
- Open Graph tags for social sharing
- Mobile-responsive design
- Fast loading times
- Semantic HTML structure

### Google My Business
Consider adding:
- Google My Business listing
- Location on Google Maps
- Customer reviews

## 📊 Analytics (Optional)

To add Google Analytics:
1. Get your GA4 tracking ID
2. Add to `app/layout.tsx`
3. Redeploy

## 🛠️ Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Ensure images are in `public/images/`
- Check file names match exactly (case-sensitive)
- Run `npm run build` locally first

### DNS Not Resolving
- DNS changes take 5-60 minutes
- Check Route 53 records match Vercel requirements
- Use [whatsmydns.net](https://whatsmydns.net) to check propagation

## 📞 Support

For technical issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create in your repo

## 📄 License

Private project for Mamzi Lash Lounge.

---

**Built with ❤️ for Mamzi Lash Lounge**

For questions or updates, refer to this README or contact your developer.
