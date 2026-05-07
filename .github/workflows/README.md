# GitHub Workflows

This directory contains all GitHub Actions workflows for the VAN SHARE project.

## Workflows Overview

### 🔄 Continuous Integration

#### `ci.yml` - CI Build and Test
**Triggers:** Push/PR to main, prod, develop branches

Comprehensive CI pipeline that runs:
- Client linting (ESLint)
- Client build (Vite)
- Client type checking (TypeScript)
- Server linting
- Server tests
- Server build verification
- Docker image build and test
- Security audit (npm audit)

**Duration:** ~5-8 minutes

---

#### `pr-checks.yml` - Pull Request Quality Checks
**Triggers:** PR opened/synchronized/reopened

Smart PR validation with:
- Changed files detection (only runs checks for modified components)
- Automated PR comments with build info
- Bundle size analysis
- Docker container testing
- Security vulnerability scanning

**Features:**
- 🔍 Intelligent change detection
- 💬 Automatic PR comments
- 📊 Performance metrics
- 🐳 Container validation

---

### 🚀 Deployment

#### `vercel-deploy.yml` - Frontend Deployment
**Triggers:** Push to main, manual dispatch, after CI success

Deploys client to Vercel:
1. Lint and build client
2. Check bundle size
3. Deploy to production
4. Verify deployment health

**Target:** https://vanshare.pl

**Required Secrets:**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

---

#### `fly-deploy.yml` - Backend Deployment
**Triggers:** Push to prod, manual dispatch, after CI success

Deploys server to Fly.io:
1. Install dependencies
2. Pre-deploy validation
3. Deploy to Fly.io
4. Health check verification

**Target:** https://coal-lending-backend.fly.dev

**Required Secrets:**
- `FLY_API_TOKEN`

---

### 🔧 Maintenance

#### `dependency-updates.yml` - Weekly Dependency Check
**Triggers:** Every Monday at 9:00 AM UTC, manual dispatch

Automated dependency monitoring:
- Check for outdated packages
- Run security audits
- Create GitHub issue with findings
- Provide update instructions

**Schedule:** Weekly (Mondays)

---

#### `nightly-build.yml` - Nightly Health Check
**Triggers:** Daily at 2:00 AM UTC, manual dispatch

Comprehensive nightly validation:
- Full client and server builds
- Docker image testing
- Security audits
- Production endpoint health checks
- Dependency reporting
- Auto-create issue on failure

**Schedule:** Daily (2:00 AM UTC)

---

#### `release-notes.yml` - Automated Release Notes
**Triggers:** Tag push (v*.*.*), manual dispatch

Generates release notes with:
- Categorized changelog (features, fixes, docs, etc.)
- Deployment information
- Technology stack details
- Security audit status
- Automatic GitHub release creation

**Tag Format:** `v1.0.0`, `v1.2.3-beta`, etc.

---

## Workflow Dependencies

```
┌─────────────────┐
│   Push/PR       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   ci.yml        │ ← Main CI pipeline
└────────┬────────┘
         │
    ┌────┴────┐
    │ Success?│
    └────┬────┘
         │
    ┌────┴──────────────────┐
    │                       │
    ▼                       ▼
┌──────────────┐    ┌──────────────┐
│vercel-deploy │    │ fly-deploy   │
└──────────────┘    └──────────────┘
```

## Branch Strategy

| Branch | Purpose | Deploys To |
|--------|---------|------------|
| `main` | Production frontend | Vercel (vanshare.pl) |
| `prod` | Production backend | Fly.io |
| `develop` | Development | CI checks only |
| Feature branches | New features | CI checks only |

## Manual Workflow Triggers

All workflows support manual triggering via GitHub UI or CLI:

```bash
# Trigger CI
gh workflow run ci.yml

# Trigger Vercel deployment
gh workflow run vercel-deploy.yml --ref main

# Trigger Fly deployment
gh workflow run fly-deploy.yml --ref prod

# Trigger nightly build
gh workflow run nightly-build.yml

# Create release
gh workflow run release-notes.yml -f tag=v1.0.0
```

## Workflow Permissions

Workflows use the following permissions:
- `contents: read` - Read repository contents
- `issues: write` - Create issues (dependency-updates, nightly-build)
- `pull-requests: write` - Comment on PRs (pr-checks)

## Secrets Configuration

Required secrets in repository settings:

### Vercel
```
VERCEL_TOKEN          # From Vercel dashboard
VERCEL_ORG_ID         # From Vercel project settings
VERCEL_PROJECT_ID     # From Vercel project settings
```

### Fly.io
```
FLY_API_TOKEN         # From: flyctl auth token
```

## Monitoring

### Status Badges

Add to README.md:
```markdown
[![CI](https://github.com/guitobi/coal-lending/workflows/CI%20-%20Build%20and%20Test/badge.svg)](https://github.com/guitobi/coal-lending/actions/workflows/ci.yml)
```

### Notifications

Workflows create GitHub issues for:
- ❌ Nightly build failures
- 📦 Weekly dependency updates
- 🔒 Security vulnerabilities

## Best Practices

1. ✅ **Always wait for CI** before merging PRs
2. ✅ **Review PR comments** from automated checks
3. ✅ **Monitor nightly builds** for early issue detection
4. ✅ **Keep dependencies updated** weekly
5. ✅ **Use semantic versioning** for releases
6. ✅ **Test locally** before pushing

## Troubleshooting

### Workflow Fails

1. Check workflow logs in Actions tab
2. Review error messages
3. Test locally with same commands
4. Check secrets are configured correctly

### Deployment Fails

**Vercel:**
- Verify token is valid
- Check build logs in Vercel dashboard
- Ensure environment variables are set

**Fly.io:**
- Verify API token
- Check Fly.io dashboard
- Review deployment logs

### CI Checks Fail

**Lint errors:**
```bash
cd client
npm run lint -- --fix
```

**Build errors:**
```bash
rm -rf node_modules dist
npm ci
npm run build
```

## Performance

| Workflow | Average Duration |
|----------|------------------|
| CI Build & Test | 5-8 minutes |
| PR Checks | 3-5 minutes |
| Vercel Deploy | 2-3 minutes |
| Fly Deploy | 3-4 minutes |
| Nightly Build | 6-10 minutes |

## Future Enhancements

- [ ] E2E tests with Playwright
- [ ] Visual regression testing
- [ ] Lighthouse CI integration
- [ ] Automated rollback on failure
- [ ] Slack/Discord notifications
- [ ] Performance monitoring
- [ ] Staging environment deployment

---

📖 **[Full CI/CD Documentation](../CI_CD.md)**
