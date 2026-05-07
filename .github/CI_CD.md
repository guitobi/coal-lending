# CI/CD Documentation

## Overview

This project uses GitHub Actions for continuous integration and deployment. All workflows are located in `.github/workflows/`.

## Workflows

### 1. CI - Build and Test (`ci.yml`)

**Triggers:**
- Push to `main`, `prod`, `develop` branches
- Pull requests to `main`, `prod`, `develop` branches

**Jobs:**
- ✅ **Client Lint** - ESLint checks for frontend code
- ✅ **Client Build** - Vite build with bundle size analysis
- ✅ **Client Type Check** - TypeScript validation (if applicable)
- ✅ **Server Lint** - ESLint checks for backend code
- ✅ **Server Test** - Run backend tests
- ✅ **Server Build** - Verify server starts correctly
- ✅ **Docker Build** - Build and test Docker image
- ✅ **Security Audit** - npm audit for vulnerabilities

**Artifacts:**
- Client build output (`client/dist`) - retained for 7 days

---

### 2. PR - Quality Checks (`pr-checks.yml`)

**Triggers:**
- Pull request opened, synchronized, or reopened

**Features:**
- 🔍 **Smart Detection** - Only runs checks for changed components
- 💬 **PR Comments** - Automatic comments with build info
- 📊 **Bundle Analysis** - Performance budget checks
- 🔒 **Security Scan** - Dependency vulnerability scanning
- 🐳 **Docker Testing** - Container build and health checks

**Changed Files Detection:**
- `client/**` → Run client checks
- `server/**` → Run server checks
- `.github/workflows/**` → Flag workflow changes

---

### 3. Deploy Client to Vercel (`vercel-deploy.yml`)

**Triggers:**
- Push to `main` branch (client changes)
- Manual workflow dispatch
- After successful CI run on `main`

**Steps:**
1. Install dependencies
2. Run linting
3. Build client with production env vars
4. Check bundle size
5. Deploy to Vercel
6. Verify deployment

**Environment Variables Required:**
- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID

**Deployment URL:** https://vanshare.pl

---

### 4. Deploy Backend to Fly (`fly-deploy.yml`)

**Triggers:**
- Push to `prod` branch (server changes)
- Manual workflow dispatch
- After successful CI run on `prod`

**Steps:**
1. Install dependencies
2. Run pre-deploy validation
3. Deploy to Fly.io
4. Verify health endpoint

**Environment Variables Required:**
- `FLY_API_TOKEN` - Fly.io authentication token

**Deployment URL:** https://coal-lending-backend.fly.dev

---

## Branch Strategy

```
main (production frontend)
  ↓
  └─ Deploys to Vercel automatically

prod (production backend)
  ↓
  └─ Deploys to Fly.io automatically

develop (development)
  ↓
  └─ Runs CI checks only
```

---

## Required Secrets

Configure these in GitHub repository settings → Secrets and variables → Actions:

### Vercel Deployment
```
VERCEL_TOKEN          # Get from Vercel dashboard
VERCEL_ORG_ID         # Found in Vercel project settings
VERCEL_PROJECT_ID     # Found in Vercel project settings
```

### Fly.io Deployment
```
FLY_API_TOKEN         # Get from: flyctl auth token
```

---

## CI/CD Flow Diagram

```
┌─────────────────┐
│   Push/PR       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   CI Checks     │
│  - Lint         │
│  - Build        │
│  - Test         │
│  - Docker       │
│  - Security     │
└────────┬────────┘
         │
         ▼
    ┌────┴────┐
    │ Success?│
    └────┬────┘
         │
    ┌────┴────────────────┐
    │                     │
    ▼                     ▼
┌─────────┐         ┌─────────┐
│  main   │         │  prod   │
│ branch  │         │ branch  │
└────┬────┘         └────┬────┘
     │                   │
     ▼                   ▼
┌─────────┐         ┌─────────┐
│ Vercel  │         │ Fly.io  │
│ Deploy  │         │ Deploy  │
└─────────┘         └─────────┘
```

---

## Local Development

### Running CI Checks Locally

**Client:**
```bash
cd client
npm ci
npm run lint
npm run build
npm run perf-budget
```

**Server:**
```bash
cd server
npm ci
npm test
docker build -t coal-lending-server .
docker run -p 5000:5000 coal-lending-server
```

---

## Troubleshooting

### CI Fails on Lint
```bash
# Fix linting issues automatically
cd client
npm run lint -- --fix
```

### Build Fails
```bash
# Clear cache and rebuild
cd client
rm -rf node_modules dist
npm ci
npm run build
```

### Docker Build Fails
```bash
# Test Docker build locally
cd server
docker build -t test-server .
docker run --rm -p 5000:5000 test-server
```

### Deployment Fails

**Vercel:**
- Check `VERCEL_TOKEN` is valid
- Verify `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`
- Check build logs in Vercel dashboard

**Fly.io:**
- Verify `FLY_API_TOKEN` is valid
- Check Fly.io dashboard for deployment logs
- Run `flyctl logs` locally

---

## Performance Budgets

### Client Bundle Sizes
- **Total JS:** < 400KB (uncompressed)
- **Total CSS:** < 100KB
- **Largest chunk:** < 300KB

### Build Times
- **Client build:** ~30-60 seconds
- **Server Docker build:** ~2-3 minutes
- **Full CI pipeline:** ~5-8 minutes

---

## Monitoring

### Build Status Badges

Add to README.md:

```markdown
![CI](https://github.com/guitobi/coal-lending/workflows/CI%20-%20Build%20and%20Test/badge.svg)
![Vercel](https://github.com/guitobi/coal-lending/workflows/Deploy%20client%20to%20Vercel/badge.svg)
![Fly](https://github.com/guitobi/coal-lending/workflows/Deploy%20backend%20to%20Fly/badge.svg)
```

### Health Checks

**Frontend:** https://vanshare.pl  
**Backend:** https://coal-lending-backend.fly.dev/health

---

## Best Practices

1. ✅ **Always create PRs** - Don't push directly to `main` or `prod`
2. ✅ **Wait for CI** - Ensure all checks pass before merging
3. ✅ **Review bundle size** - Check performance budget warnings
4. ✅ **Test locally first** - Run builds and tests before pushing
5. ✅ **Keep dependencies updated** - Regular `npm audit` and updates
6. ✅ **Monitor deployments** - Check health endpoints after deploy

---

## Manual Deployment

### Trigger via GitHub UI
1. Go to Actions tab
2. Select workflow (Vercel Deploy or Fly Deploy)
3. Click "Run workflow"
4. Select branch
5. Click "Run workflow" button

### Trigger via CLI
```bash
# Trigger Vercel deployment
gh workflow run vercel-deploy.yml --ref main

# Trigger Fly deployment
gh workflow run fly-deploy.yml --ref prod
```

---

## Rollback Procedure

### Frontend (Vercel)
1. Go to Vercel dashboard
2. Select deployment
3. Click "Promote to Production" on previous version

### Backend (Fly.io)
```bash
# List recent deployments
flyctl releases --app coal-lending-backend

# Rollback to specific version
flyctl releases rollback <version> --app coal-lending-backend
```

---

## Future Improvements

- [ ] Add E2E tests with Playwright
- [ ] Implement visual regression testing
- [ ] Add Lighthouse CI for performance monitoring
- [ ] Set up Sentry for error tracking
- [ ] Add automated dependency updates (Dependabot)
- [ ] Implement staging environment
- [ ] Add smoke tests after deployment
- [ ] Set up monitoring alerts (Slack/Discord)

---

## Support

For CI/CD issues:
1. Check workflow logs in GitHub Actions
2. Review this documentation
3. Contact: vanshare1@gmail.com
