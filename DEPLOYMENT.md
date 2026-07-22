# Deployment Guide

This guide covers deploying your portfolio website to various platforms.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository (GitHub/GitLab/Bitbucket)

## Build for Production

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server (for testing)
npm start
```

## Deployment Options

### 1. Vercel (Recommended - Easiest)

**Automatic Deployment via GitHub:**

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**Manual Deployment:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Environment Variables (if needed):**
- Add in Vercel dashboard under Settings > Environment Variables

### 2. Netlify

**Automatic Deployment:**

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy"

**netlify.toml configuration:**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Using GitHub Actions (already configured):**

The CI/CD pipeline in `.github/workflows/ci-cd.yml` includes deployment steps.

**Setup:**

1. Go to repository Settings > Secrets and add:
   - `VERCEL_TOKEN` - Get from vercel.com/account/tokens
   - `VERCEL_ORG_ID` - Get from Vercel dashboard
   - `VERCEL_PROJECT_ID` - Get from Vercel dashboard

2. Push to main/master branch
3. GitHub Actions will automatically deploy

### 4. Docker Deployment

**Dockerfile:**

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**Build and run:**

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### 5. AWS Amplify

1. Push code to GitHub
2. Visit [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
3. Connect repository
4. Build settings (auto-detected):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Click "Save and Deploy"

### 6. DigitalOcean App Platform

1. Push code to GitHub
2. Visit [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
3. Create App > GitHub > Select repository
4. Configure:
   - Build command: `npm run build`
   - Run command: `npm start`
5. Deploy

## Environment Variables

Create `.env.local` for local development:

```env
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=https://biruhkenayana.com
```

Create `.env.production` for production:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://biruhkenayana.com
```

## Performance Optimization

### Before Deployment:

1. **Optimize Images:**
   - Use WebP/AVIF formats
   - Compress images with tools like TinyPNG
   - Use Next.js Image component (already implemented)

2. **Analyze Bundle Size:**
   ```bash
   npm run build
   # Check .next/analyze for bundle analysis
   ```

3. **Run Lighthouse Audit:**
   ```bash
   npm install -g @lhci/cli
   lhci autorun
   ```

### After Deployment:

1. **Enable CDN** (automatic with Vercel/Netlify)
2. **Configure Custom Domain:**
   - Add domain in hosting platform
   - Update DNS records
   - Enable HTTPS (automatic with most platforms)

3. **Set up Analytics:**
   - Google Analytics
   - Vercel Analytics
   - Netlify Analytics

## SEO Checklist

- ✅ Meta tags configured in `layout.tsx`
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Sitemap.xml (`app/sitemap.ts`)
- ✅ Robots.txt (`public/robots.txt`)
- ✅ Structured data (JSON-LD)
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Canonical URLs

## Monitoring

### Vercel:
- Built-in analytics
- Speed Insights
- Error tracking

### Netlify:
- Analytics
- Form handling
- Split testing

### Custom:
- Google Search Console
- Google Analytics
- Uptime monitoring (UptimeRobot, Pingdom)

## Troubleshooting

### Build Fails:
```bash
# Clear cache
rm -rf .next
npm run build
```

### Images Not Loading:
- Check image paths in `public/` folder
- Verify `next.config.ts` image domains
- Ensure images are optimized

### 404 Errors:
- Check `next.config.ts` redirects
- Verify file paths
- Check basePath configuration

## Maintenance

### Regular Updates:
- Update dependencies: `npm update`
- Security audit: `npm audit`
- Review analytics monthly
- Update content as needed

### Backup:
- Keep Git repository updated
- Export analytics data regularly
- Document any custom configurations

## Support

For issues with:
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Quick Deploy Commands

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod

# Docker
docker build -t portfolio . && docker run -p 3000:3000 portfolio

# PM2 (VPS)
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup