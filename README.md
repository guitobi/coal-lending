# VAN SHARE - Coal Lending Platform

A modern e-commerce platform for selling premium hardwood charcoal in Poland. Built with React and Express, featuring internationalization, SEO optimization, and comprehensive security measures.

## Project Overview

VAN SHARE is a full-stack web application that enables customers to order high-quality charcoal products online. The platform supports multiple languages (Polish and English), includes analytics tracking, and provides a seamless ordering experience with email notifications.

**Live Application:** https://vanshare.pl  
**Backend API:** https://coal-lending-backend.fly.dev

## Technology Stack

### Frontend
- React 19.2 with React Compiler for automatic optimization
- Vite 7.2 for fast development and building
- Tailwind CSS 4.1 for styling
- React Router 7.13 for navigation
- i18next for internationalization (Polish/English)
- React Hook Form for form management
- Puppeteer for server-side rendering and SEO

### Backend
- Node.js 20 (Alpine Linux)
- Express 5.2 web framework
- Nodemailer 8.0 for email delivery
- Resend API for email service
- Winston for structured logging
- Zod for schema validation
- Helmet for security headers
- Express Rate Limit for DDoS protection

### Infrastructure
- Fly.io for backend hosting
- Vercel for frontend hosting (assumed)
- GitHub Actions for CI/CD
- Docker for containerization

## Project Structure

```
coal-lending/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── features/      # Feature modules (About, Contact, Order, etc.)
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── ui/            # UI primitives
│   │   ├── hooks/         # Custom React hooks
│   │   ├── contexts/      # React context providers
│   │   ├── locales/       # Translation files (pl/en)
│   │   ├── utils/         # Utility functions
│   │   └── seo/           # SEO utilities
│   ├── public/            # Static assets
│   ├── scripts/           # Build automation scripts
│   └── dist/              # Production build output
│
├── server/                # Backend Express application
│   ├── src/
│   │   ├── controllers/   # Business logic
│   │   ├── routes/        # API route definitions
│   │   ├── middleware/    # Express middleware
│   │   ├── schemas/       # Zod validation schemas
│   │   ├── config/        # Configuration files
│   │   └── emails/        # Email templates
│   ├── data/              # File-based storage
│   └── Dockerfile         # Container configuration
│
└── .github/
    └── workflows/         # CI/CD pipelines
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 9.x or higher
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/coal-lending.git
cd coal-lending
```

2. Install client dependencies:
```bash
cd client
npm install
```

3. Install server dependencies:
```bash
cd ../server
npm install
```

### Configuration

#### Client Configuration

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:5000
VITE_SITE_URL=http://localhost:5173
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Server Configuration

Create a `.env` file in the `server` directory:

```env
# Server
PORT=5000
NODE_ENV=development

# CORS
FRONTEND_URL=http://localhost:5173
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:4173

# Email Service (Resend)
RESEND_API_KEY=your-resend-api-key
MAIL_FROM=orders@vanshare.pl
EMAIL_TO=your-email@example.com
CONTACT_EMAIL_TO=your-email@example.com

# Admin Authentication
ADMIN_API_KEY=your-secure-random-key

# Logging
LOG_LEVEL=debug
```

To generate a secure admin API key:
```bash
openssl rand -hex 32
```

### Development

Start the development servers:

1. Start the backend server:
```bash
cd server
npm run dev
```
The API will be available at http://localhost:5000

2. Start the frontend development server:
```bash
cd client
npm run dev
```
The application will be available at http://localhost:5173

### Building for Production

#### Client Build

```bash
cd client
npm run build
```

This will:
1. Build the React application with Vite
2. Generate sitemap.xml
3. Generate robots.txt
4. Prerender pages for SEO

The production files will be in `client/dist/`

#### Server Build

The server runs directly from source. For production deployment:

```bash
cd server
npm ci --omit=dev
npm start
```

## API Documentation

### Public Endpoints

#### POST /api/order/new
Create a new order.

**Rate Limit:** 5 requests per hour per IP

**Request Body:**
```json
{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "phoneNumber": "+48 123 456 789",
  "city": "Warsaw",
  "weightInKg": 500,
  "comment": "Optional comment",
  "lang": "pl"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order received and email sent"
}
```

#### POST /api/problem/new
Submit a contact form message.

**Rate Limit:** 5 requests per hour per IP

**Request Body:**
```json
{
  "subject": "Question about delivery",
  "message": "When can I expect delivery?",
  "email": "customer@example.com",
  "lang": "pl"
}
```

#### POST /api/heatmap/{type}
Store analytics data (click, scroll, mouse, form-focus, form-change).

**Rate Limit:** 1000 requests per 15 minutes per IP

**Request Body:**
```json
{
  "type": "click",
  "x": 150,
  "y": 300,
  "target": "button.order-now",
  "url": "https://vanshare.pl/order",
  "viewport": {
    "width": 1920,
    "height": 1080
  }
}
```

#### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

### Protected Endpoints (Admin)

All admin endpoints require the `X-Admin-Key` header with a valid admin API key.

#### GET /api/heatmap
Get all heatmap data with pagination.

**Query Parameters:**
- `limit` (optional): Number of records (default: 100, max: 1000)
- `offset` (optional): Offset for pagination (default: 0)

**Rate Limit:** 10 requests per hour per IP

#### GET /api/heatmap/:type
Get heatmap data filtered by type.

**Parameters:**
- `type`: One of: click, scroll, mouse, form-focus, form-change

#### DELETE /api/heatmap
Clear all heatmap data.

## Security Features

### Implemented Security Measures

1. **Rate Limiting**
   - General API: 100 requests per 15 minutes
   - Form submissions: 5 requests per hour
   - Heatmap analytics: 1000 requests per 15 minutes
   - Admin endpoints: 10 requests per hour

2. **Input Validation**
   - Zod schema validation on all endpoints
   - Email format validation
   - Phone number format validation (Polish)
   - String length limits
   - XSS protection via sanitization

3. **Security Headers**
   - Content-Security-Policy
   - X-Frame-Options
   - X-Content-Type-Options
   - Strict-Transport-Security
   - X-DNS-Prefetch-Control

4. **CORS Configuration**
   - Whitelist-based origin validation
   - Fails closed in production (requires ALLOWED_ORIGINS)
   - Restricted HTTP methods

5. **Data Privacy**
   - IP addresses are hashed (SHA-256)
   - User agents are sanitized
   - No PII in logs
   - GDPR-compliant consent management

6. **Request Size Limits**
   - JSON body: 10KB maximum
   - Text body: 50KB maximum

## Deployment

### Backend Deployment (Fly.io)

The backend is automatically deployed to Fly.io when changes are pushed to the `prod` branch.

Manual deployment:
```bash
cd server
flyctl deploy
```

Configuration is in `server/fly.toml`

### Frontend Deployment (Vercel)

The frontend can be deployed to Vercel:

```bash
cd client
npm run build
vercel --prod
```

## Environment Variables

### Client Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| VITE_API_URL | Backend API URL | Yes | https://coal-lending-backend.fly.dev |
| VITE_SITE_URL | Frontend site URL | Yes | https://vanshare.pl |
| VITE_GA_MEASUREMENT_ID | Google Analytics ID | No | G-XXXXXXXXXX |

### Server Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| PORT | Server port | No | 5000 |
| NODE_ENV | Environment | No | production |
| FRONTEND_URL | Frontend URL for CORS | Yes | https://vanshare.pl |
| ALLOWED_ORIGINS | Comma-separated allowed origins | Yes | https://vanshare.pl,https://www.vanshare.pl |
| RESEND_API_KEY | Resend API key for emails | Yes | re_xxxxxxxxxx |
| MAIL_FROM | Sender email address | Yes | orders@vanshare.pl |
| EMAIL_TO | Recipient email for orders | Yes | vanshare1@gmail.com |
| CONTACT_EMAIL_TO | Recipient email for contact forms | Yes | vanshare1@gmail.com |
| ADMIN_API_KEY | Admin authentication key | Yes | (generate with openssl) |
| LOG_LEVEL | Logging level | No | info |

## Scripts

### Client Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run analyze` | Analyze bundle size |
| `npm run perf-budget` | Check performance budget |
| `npm run generate-sitemap` | Generate sitemap.xml |
| `npm run generate-robots` | Generate robots.txt |

### Server Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with nodemon |
| `npm start` | Start production server |
| `npm test` | Run tests (not implemented) |

## Internationalization

The application supports two languages:
- Polish (pl) - Primary language
- English (en) - Secondary language

Translation files are located in `client/src/locales/`

To add a new language:
1. Create a new JSON file in `client/src/locales/{lang}/`
2. Add translations for all keys
3. Update language detector configuration

## SEO Optimization

The application includes several SEO optimizations:

1. **Server-Side Rendering**
   - Critical pages are prerendered with Puppeteer
   - Improves initial load time and search engine indexing

2. **Sitemap Generation**
   - Automatically generated sitemap.xml
   - Includes all public pages with priorities

3. **Robots.txt**
   - Automatically generated
   - Configured for optimal crawling

4. **Meta Tags**
   - React Helmet for dynamic meta tags
   - Open Graph tags for social sharing
   - Structured data for rich snippets

5. **Performance**
   - Code splitting for faster loads
   - Image optimization (WebP format)
   - Lazy loading for routes

## Analytics

The application includes heatmap analytics tracking:

- Click tracking
- Scroll depth tracking
- Mouse movement tracking
- Form interaction tracking

All analytics data is anonymized:
- IP addresses are hashed
- User agents are sanitized
- No personally identifiable information is stored

## GDPR Compliance

The application is GDPR-compliant:

1. **Consent Management**
   - Cookie consent banner
   - Analytics only loaded after consent

2. **Privacy Policy**
   - Comprehensive privacy policy page
   - Cookie policy page
   - Terms of service page

3. **Data Protection**
   - IP address hashing
   - Data minimization
   - Secure data transmission (HTTPS)

4. **User Rights**
   - Right to access (contact form)
   - Right to erasure (contact form)
   - Right to data portability

## Performance

### Bundle Sizes

- Total JavaScript: ~350KB (uncompressed)
- Total CSS: 71KB
- Largest chunk: vendor-react (257KB)

### Optimization Techniques

1. **Code Splitting**
   - Vendor chunks separated
   - Route-based lazy loading
   - Manual chunk optimization

2. **React Compiler**
   - Automatic memoization
   - Optimized re-renders

3. **Compression**
   - Gzip compression enabled
   - Lightning CSS for minification

4. **Caching**
   - Cache-Control headers
   - Static asset caching

## Troubleshooting

### Common Issues

**Issue: Server fails to start**
- Check that all environment variables are set in `.env`
- Verify that port 5000 is not in use
- Check logs in `server/logs/` directory

**Issue: Emails not sending**
- Verify RESEND_API_KEY is valid
- Check that sender email is verified in Resend
- Review logs for error messages

**Issue: CORS errors in browser**
- Ensure FRONTEND_URL and ALLOWED_ORIGINS are correctly set
- Verify the frontend URL matches exactly (including protocol)
- Check browser console for specific CORS error

**Issue: Rate limit errors**
- Rate limits are per IP address
- Wait for the time window to reset
- For development, consider adjusting limits in `server/src/middleware/rateLimiter.js`

## Contributing

### Development Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Test locally
4. Commit with descriptive messages
5. Push to your branch
6. Create a pull request

### Code Style

- Use ESLint for JavaScript linting
- Follow existing code patterns
- Write descriptive variable and function names
- Add comments for complex logic

### Commit Messages

Follow conventional commits format:
```
feat: add new feature
fix: fix bug in component
docs: update README
style: format code
refactor: refactor function
test: add tests
chore: update dependencies
```

## Testing

Currently, the project does not have automated tests. This is a known gap and contributions are welcome.

To add testing:

1. **Client Testing**
```bash
cd client
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

2. **Server Testing**
```bash
cd server
npm install --save-dev jest supertest
```

## License

This project is proprietary and confidential. All rights reserved.

## Support

For questions or issues:
- Email: vanshare1@gmail.com
- Website: https://vanshare.pl

## Changelog

### Version 1.0.0 (April 2026)
- Initial release
- React 19 with React Compiler
- Express 5 backend
- Internationalization (Polish/English)
- SEO optimization
- GDPR compliance
- Security hardening (rate limiting, validation, headers)
- Analytics tracking
- Email notifications

## Acknowledgments

- React team for React 19 and React Compiler
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- Resend for email delivery service
- Fly.io for backend hosting
