# Deployment Checklist for Mamzi Lash Lounge Website

## ✅ Pre-Deployment Tasks

### 1. Image Preparation
- [ ] Rename all images according to the suggested names:
  - `1.jpeg` → `classic-lash-extensions-closeup.jpg`
  - `2.jpeg` → `volume-lash-extensions-detail.jpg`
  - `3.jpeg` → `client-with-branded-mirror.jpg`
  - `4.jpeg` → `volume-lashes-front-view.jpg`
  - `5.jpeg` → `hybrid-lashes-side-profile.jpg`
  - `6.jpeg` → `classic-lashes-angled-view.jpg`
  - `7.jpeg` → `mega-volume-lash-set.jpg`
  - `8.jpeg` → `mamzi-lash-artist-studio.jpg`
  - `9.jpeg` → `lash-lift-natural-result.jpg`
  - `10.jpeg` → `russian-volume-overhead.jpg`
  - `logo.jpeg` → `mamzi-lash-lounge-logo.png`

- [ ] Optimize images for web (compress without quality loss)
- [ ] Ensure all images are in `public/images/` folder

### 2. Content Review
- [ ] Double-check WhatsApp number: 067 112 5411
- [ ] Verify Instagram handle: @mamzi.lash_lounge
- [ ] Verify TikTok handle: @mamzi.lash_lounge
- [ ] Review service descriptions and pricing
- [ ] Update testimonials with real client reviews (if needed)
- [ ] Check "About" section text

### 3. Local Testing
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and test locally
- [ ] Check all navigation links work
- [ ] Test mobile responsiveness
- [ ] Click all social media links
- [ ] Test WhatsApp booking button
- [ ] Verify all images display correctly
- [ ] Check for any console errors

### 4. Build Test
- [ ] Run `npm run build` successfully
- [ ] Fix any build errors
- [ ] Run `npm start` to test production build

## 📦 GitHub Setup

### 5. Repository Creation
- [ ] Create GitHub account (if needed)
- [ ] Create new repository: `mamzi-lash-lounge`
- [ ] Choose public or private
- [ ] Don't initialize with README

### 6. Push to GitHub
```bash
cd /path/to/mamzi-lash-lounge
git init
git add .
git commit -m "Initial commit: Mamzi Lash Lounge website"
git remote add origin https://github.com/YOUR_USERNAME/mamzi-lash-lounge.git
git branch -M main
git push -u origin main
```

- [ ] Successfully pushed to GitHub
- [ ] Verify all files are visible on GitHub

## 🚀 Vercel Deployment

### 7. Vercel Setup
- [ ] Create Vercel account at vercel.com
- [ ] Connect GitHub account to Vercel
- [ ] Click "New Project"
- [ ] Import `mamzi-lash-lounge` repository

### 8. Project Configuration
- [ ] Framework: Next.js (auto-detected)
- [ ] Root Directory: `./`
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `.next`
- [ ] Install Command: `npm install`
- [ ] Click "Deploy"

### 9. Deployment Verification
- [ ] Wait for deployment to complete (2-3 minutes)
- [ ] Check deployment status shows "Ready"
- [ ] Visit temporary URL: `mamzi-lash-lounge.vercel.app`
- [ ] Test all functionality on live site
- [ ] Check mobile view
- [ ] Test all links and buttons

## 🌐 Custom Domain Setup

### 10. Route 53 Domain Purchase
- [ ] Log into AWS Console
- [ ] Go to Route 53
- [ ] Register new domain (suggested: `mamzilashlounge.co.za`)
- [ ] Complete registration process
- [ ] Wait for registration confirmation email

### 11. Add Domain to Vercel
- [ ] Go to Vercel project
- [ ] Settings → Domains
- [ ] Add domain: `mamzilashlounge.co.za`
- [ ] Add www version: `www.mamzilashlounge.co.za`
- [ ] Note the DNS records Vercel provides

### 12. Configure Route 53 DNS
- [ ] Go to Route 53 → Hosted Zones
- [ ] Select your domain
- [ ] Create A Record:
  - Name: `@` (or leave blank)
  - Type: A
  - Value: [Vercel IP from step 11]
- [ ] Create CNAME Record:
  - Name: `www`
  - Type: CNAME
  - Value: `cname.vercel-dns.com`

### 13. Domain Verification
- [ ] Wait 5-60 minutes for DNS propagation
- [ ] Check whatsmydns.net for propagation status
- [ ] Vercel auto-verifies domain
- [ ] SSL certificate issued automatically
- [ ] Test site at custom domain
- [ ] Test www version redirects properly

## 🎉 Post-Deployment

### 14. Final Checks
- [ ] Visit site at custom domain
- [ ] Test on mobile device
- [ ] Test on desktop browser
- [ ] Click all social media links
- [ ] Test WhatsApp booking button
- [ ] Verify images load properly
- [ ] Check page load speed
- [ ] Test SEO meta tags (view page source)

### 15. Share & Promote
- [ ] Update Instagram bio with website link
- [ ] Update TikTok bio with website link
- [ ] Add to WhatsApp business profile
- [ ] Share on social media
- [ ] Add to Google My Business (if applicable)
- [ ] Print on business cards

### 16. Monitoring Setup (Optional)
- [ ] Set up Google Analytics
- [ ] Set up Google Search Console
- [ ] Monitor Vercel analytics
- [ ] Track conversion rates

## 🔄 Future Updates

### How to Update the Site
1. Make changes locally
2. Test with `npm run dev`
3. Commit changes: `git commit -am "Description"`
4. Push to GitHub: `git push`
5. Vercel auto-deploys in 2-3 minutes

### Regular Maintenance
- [ ] Update portfolio images monthly
- [ ] Add new testimonials
- [ ] Update pricing if needed
- [ ] Check for broken links quarterly
- [ ] Monitor site performance

## 📞 Emergency Contacts

**Vercel Support**: support@vercel.com  
**AWS Support**: Through AWS Console  
**GitHub Support**: support@github.com

## 📝 Notes

Domain Purchased: _______________  
Date Deployed: _______________  
Vercel Project URL: _______________  
Custom Domain: _______________  

---

**Congratulations on your new website! 🎉**

Keep this checklist for future reference and updates.
