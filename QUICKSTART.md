# 🚀 Quick Start Guide - Mamzi Lash Lounge Website

## What You Have

A complete, professional website with:
- ✅ Modern design in black & pink
- ✅ Service showcase
- ✅ Portfolio gallery
- ✅ Client testimonials
- ✅ Contact & booking integration
- ✅ Mobile responsive
- ✅ SEO optimized

## 3 Steps to Go Live

### STEP 1: Push to GitHub (5 minutes)

1. **Create GitHub account** at github.com (if you don't have one)

2. **Create new repository**:
   - Click "+" → "New repository"
   - Name: `mamzi-lash-lounge`
   - Keep public
   - Don't check any boxes
   - Click "Create repository"

3. **Push your code**:
   ```bash
   cd mamzi-lash-lounge
   git init
   git add .
   git commit -m "Initial website"
   git remote add origin https://github.com/YOUR_USERNAME/mamzi-lash-lounge.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

### STEP 2: Deploy to Vercel (5 minutes)

1. **Go to vercel.com** and sign up (use GitHub account)

2. **Import project**:
   - Click "Add New..." → "Project"
   - Select `mamzi-lash-lounge`
   - Click "Import"
   - Click "Deploy"

3. **Wait 2-3 minutes** - Your site is now live at:
   `mamzi-lash-lounge.vercel.app`

### STEP 3: Custom Domain (Optional, 30 minutes)

1. **Buy domain** in AWS Route 53:
   - Example: `mamzilashlounge.co.za`
   
2. **Add to Vercel**:
   - Project → Settings → Domains
   - Add your domain
   - Vercel shows DNS records

3. **Configure Route 53**:
   - Add A record pointing to Vercel IP
   - Add CNAME for www
   - Wait for DNS to propagate (5-60 mins)

Done! Your site is live! 🎉

## Making Updates

After deployment, to update anything:

```bash
# 1. Make your changes
# 2. Save files
# 3. Push to GitHub:
git add .
git commit -m "Updated pricing"
git push
```

Vercel auto-updates in 2-3 minutes!

## Common Tasks

### Update Prices
Edit `app/page.tsx`, find the `services` array (~line 23)

### Add/Change Images
Replace files in `public/images/`

### Update Contact Info
Edit WhatsApp number/social links in `app/page.tsx`

### Change Colors
Edit `tailwind.config.js`

## Need Help?

- Check `README.md` for detailed docs
- Check `DEPLOYMENT_CHECKLIST.md` for step-by-step
- Vercel docs: vercel.com/docs
- Next.js docs: nextjs.org/docs

## Your Links

📱 WhatsApp: 067 112 5411  
📸 Instagram: @mamzi.lash_lounge  
🎵 TikTok: @mamzi.lash_lounge  
🌐 Website: [Your domain here]

---

**Everything is ready to go!** Follow the 3 steps above and you'll be live in 15 minutes.
