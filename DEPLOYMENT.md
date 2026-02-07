# GitHub Pages Deployment Guide

## ✅ What's Been Set Up

Your portfolio is now fully configured for automatic deployment to GitHub Pages!

### Files Created/Modified:

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
2. **`vite.config.ts`** - Updated with correct base path for GitHub Pages
3. **`README.md`** - Updated with deployment instructions and project info

## 🚀 Next Steps

### 1. Enable GitHub Pages

Go to your repository settings and enable GitHub Pages:

1. Visit: https://github.com/Haripriya2-2k5/SARAVANA-PORTFOLIO/settings/pages
2. Under **Source**, select **GitHub Actions**
3. Save the settings

### 2. Verify Deployment

After enabling GitHub Pages:

1. Go to the **Actions** tab: https://github.com/Haripriya2-2k5/SARAVANA-PORTFOLIO/actions
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-3 minutes)
4. Your site will be live at: **https://haripriya2-2k5.github.io/SARAVANA-PORTFOLIO/**

## 🔄 How It Works

### Automatic Deployment

Every time you push to the `main` branch:

1. GitHub Actions automatically triggers
2. Installs dependencies (`npm ci`)
3. Builds the project (`npm run build`)
4. Deploys to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the `main` branch
5. Click "Run workflow" button

## 📝 Making Updates

To update your portfolio:

```bash
# Make your changes to the code
git add .
git commit -m "Your commit message"
git push origin main
```

The site will automatically rebuild and deploy!

## 🛠️ Local Development

To test locally before pushing:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (test the build)
npm run build

# Preview production build
npm run preview
```

## 🔍 Troubleshooting

### Deployment Failed?

1. Check the Actions tab for error messages
2. Ensure all dependencies are in `package.json`
3. Make sure the build completes locally: `npm run build`

### Site Not Loading?

1. Verify GitHub Pages is enabled in repository settings
2. Check that the workflow completed successfully
3. Wait a few minutes for DNS propagation
4. Clear your browser cache

### 404 Errors on Routes?

This is normal for single-page applications on GitHub Pages. The app uses client-side routing, so direct navigation to routes works within the app.

## 📊 Monitoring

- **Actions Tab**: Monitor deployment status
- **Environments**: View deployment history at https://github.com/Haripriya2-2k5/SARAVANA-PORTFOLIO/deployments

## 🎉 Success!

Your portfolio is now:
- ✅ Pushed to GitHub
- ✅ Configured for automatic deployment
- ✅ Ready to go live on GitHub Pages

Just enable GitHub Pages in settings and you're done!
