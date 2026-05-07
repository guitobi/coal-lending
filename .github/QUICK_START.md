# CI/CD Quick Start Guide

## 🚀 Getting Started

Your CI/CD pipeline is now configured! Here's what you need to do to activate it:

## Step 1: Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add the following secrets:

### For Vercel Deployment
```
VERCEL_TOKEN          # Get from: https://vercel.com/account/tokens
VERCEL_ORG_ID         # Get from: Vercel project settings
VERCEL_PROJECT_ID     # Get from: Vercel project settings
```

**How to get Vercel credentials:**
1. Go to https://vercel.com/account/tokens
2. Create new token → Copy it
3. Go to your Vercel project → Settings → General
4. Find "Project ID" and "Team ID" (or Org ID)

### For Fly.io Deployment
```
FLY_API_TOKEN         # Get from: flyctl auth token
```

**How to get Fly.io token:**
```bash
flyctl auth token
```

---

## Step 2: Test the Pipeline

### Option A: Create a Test PR
```bash
# Create a test branch
git checkout -b test/ci-pipeline

# Make a small change
echo "# CI/CD Test" >> .github/test.md

# Commit and push
git add .
git commit -m "test: verify CI/CD pipeline"
git push origin test/ci-pipeline

# Create PR on GitHub
# Watch the PR checks run automatically
```

### Option B: Push to Main (Frontend Deploy)
```bash
# Make sure you're on main
git checkout main

# Push changes
git push origin main

# Watch GitHub Actions → CI will run → Vercel will deploy
```

### Option C: Manual Workflow Trigger
1. Go to GitHub → Actions tab
2. Select "CI - Build and Test"
3. Click "Run workflow"
4. Select branch
5. Click "Run workflow" button

---

## Step 3: Verify Everything Works

### Check CI Pipeline
1. Go to GitHub → Actions
2. Find "CI - Build and Test" workflow
3. Verify all jobs pass (green checkmarks)

### Check Deployments
- **Frontend:** https://vanshare.pl
- **Backend:** https://coal-lending-backend.fly.dev/health

### Check Automated Features
- **Nightly Build:** Will run tonight at 2:00 AM UTC
- **Dependency Updates:** Will run next Monday at 9:00 AM UTC

---

## Step 4: Create Your First Release

```bash
# Tag your current version
git tag v1.0.0

# Push the tag
git push origin v1.0.0

# Check GitHub → Releases
# Release notes will be generated automatically
```

---

## 📋 Daily Workflow

### For Developers

**Working on a feature:**
```bash
# 1. Create feature branch
git checkout -b feature/my-feature

# 2. Make changes
# ... code ...

# 3. Commit
git add .
git commit -m "feat: add my feature"

# 4. Push
git push origin feature/my-feature

# 5. Create PR on GitHub
# 6. Wait for CI checks (3-5 minutes)
# 7. Review automated PR comments
# 8. Fix any issues
# 9. Merge when green
```

**Deploying to production:**
```bash
# Frontend (main branch)
git checkout main
git merge feature/my-feature
git push origin main
# → Auto-deploys to Vercel

# Backend (prod branch)
git checkout prod
git merge feature/my-feature
git push origin prod
# → Auto-deploys to Fly.io
```

---

## 🔍 Monitoring

### Check Build Status
- GitHub → Actions tab
- Look for green checkmarks ✅
- Red X means failure ❌

### Check Deployments
- **Vercel:** https://vercel.com/dashboard
- **Fly.io:** https://fly.io/dashboard

### Check Issues
- GitHub → Issues tab
- Look for automated issues:
  - 🚨 Nightly build failures
  - 📦 Dependency updates

---

## 🆘 Troubleshooting

### CI Fails with "Secrets not found"
→ Configure secrets in GitHub repository settings

### Vercel Deploy Fails
```bash
# Check token is valid
# Verify VERCEL_ORG_ID and VERCEL_PROJECT_ID
# Check Vercel dashboard for errors
```

### Fly Deploy Fails
```bash
# Check token is valid
flyctl auth token

# Check Fly.io dashboard
flyctl status --app coal-lending-backend
```

### Lint Errors
```bash
cd client
npm run lint -- --fix
```

### Build Errors
```bash
# Clear and rebuild
rm -rf node_modules dist
npm ci
npm run build
```

---

## 📊 What Happens When

| Action | Triggers | Result |
|--------|----------|--------|
| Push to any branch | CI pipeline | Runs all checks |
| Create PR | PR checks | Smart validation + comments |
| Push to `main` | CI + Vercel deploy | Frontend goes live |
| Push to `prod` | CI + Fly deploy | Backend goes live |
| Push tag `v*.*.*` | Release notes | Creates GitHub release |
| Every day 2:00 AM | Nightly build | Health checks |
| Every Monday 9:00 AM | Dependency check | Creates issue |

---

## ✅ Checklist

Before considering CI/CD complete:

- [ ] GitHub secrets configured
- [ ] Test PR created and checks passed
- [ ] Vercel deployment successful
- [ ] Fly.io deployment successful
- [ ] Health endpoints responding
- [ ] Nightly build scheduled
- [ ] Dependency updates scheduled
- [ ] Team members understand workflow
- [ ] Documentation reviewed

---

## 🎓 Best Practices

1. **Never skip CI** - Always wait for checks to pass
2. **Review PR comments** - Automated feedback is valuable
3. **Keep branches short-lived** - Merge frequently
4. **Use semantic commits** - `feat:`, `fix:`, `docs:`, etc.
5. **Monitor nightly builds** - Address failures promptly
6. **Update dependencies weekly** - Review automated issues
7. **Test locally first** - Don't rely only on CI

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| `.github/CI_CD.md` | Complete CI/CD guide |
| `.github/CI_CD_SUMMARY.md` | Implementation summary |
| `.github/workflows/README.md` | Workflow details |
| This file | Quick start guide |

---

## 🎉 You're All Set!

Your CI/CD pipeline is ready to use. Every push will now:
- ✅ Run automated tests
- ✅ Check code quality
- ✅ Validate security
- ✅ Deploy automatically (on main/prod)
- ✅ Monitor production health

**Next Steps:**
1. Configure GitHub secrets
2. Test with a PR
3. Watch it work! 🚀

---

**Questions?** Check `.github/CI_CD.md` or contact vanshare1@gmail.com

*Last updated: 2026-05-07*
