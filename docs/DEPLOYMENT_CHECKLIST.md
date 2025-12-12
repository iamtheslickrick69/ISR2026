# Production Deployment Checklist

## Pre-Deployment

### Code & Dependencies
- [ ] All dependencies installed and up to date
- [ ] No console errors or warnings
- [ ] TypeScript compilation passes
- [ ] Build succeeds locally (`npm run build`)
- [ ] All environment variables documented
- [ ] `.env.local` added to `.gitignore`
- [ ] No hardcoded secrets in code

### Database
- [ ] Supabase project created (production instance)
- [ ] Database schema applied to production DB
- [ ] pgvector extension enabled
- [ ] Row Level Security (RLS) policies tested
- [ ] Database backups configured
- [ ] Connection pooling configured (if needed)

### API Keys & Services
- [ ] Production OpenAI API key obtained
- [ ] OpenAI billing limits configured
- [ ] Production Stripe keys obtained (if using payments)
- [ ] Stripe webhooks configured for production domain
- [ ] All third-party service rate limits reviewed

### Security
- [ ] CORS policies configured
- [ ] API rate limiting implemented
- [ ] Input validation on all forms
- [ ] SQL injection prevention (use Supabase client)
- [ ] XSS protection enabled
- [ ] CSRF protection implemented
- [ ] Sensitive data encrypted
- [ ] Service role key kept server-side only

---

## Deployment Platform Setup (Vercel Recommended)

### Vercel Configuration
- [ ] Vercel account created
- [ ] GitHub repository connected
- [ ] Environment variables added in Vercel dashboard
- [ ] Build command: `npm run build`
- [ ] Output directory: `.next`
- [ ] Install command: `npm install`
- [ ] Node.js version: 18.x or higher

### Environment Variables in Vercel
Add these in: Project Settings > Environment Variables

**Production:**
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... (encrypted)
OPENAI_API_KEY=sk-proj-... (encrypted)
STRIPE_SECRET_KEY=sk_live_... (encrypted)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_... (encrypted)
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

---

## Domain & DNS

- [ ] Custom domain purchased
- [ ] Domain DNS configured to point to Vercel
- [ ] SSL certificate provisioned (automatic with Vercel)
- [ ] www redirect configured
- [ ] Domain verified in Vercel

---

## Post-Deployment Testing

### Functional Testing
- [ ] Homepage loads correctly
- [ ] Agent builder dashboard accessible
- [ ] Can create new agent (test flow)
- [ ] Forms submit without errors
- [ ] Database writes working
- [ ] API routes responding
- [ ] Authentication flow works
- [ ] Lead capture works
- [ ] Analytics tracking works

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] Page load time < 3s
- [ ] Time to Interactive < 5s
- [ ] Core Web Vitals passing
- [ ] Images optimized
- [ ] Font loading optimized

### Security Testing
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] No exposed secrets in client code
- [ ] RLS policies prevent unauthorized access
- [ ] Rate limiting working
- [ ] CORS configured correctly

### Browser Testing
- [ ] Chrome/Edge latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Mobile Safari
- [ ] Mobile Chrome

---

## Monitoring & Analytics

### Error Tracking
- [ ] Sentry or similar error tracking configured
- [ ] Error alerts set up
- [ ] Source maps uploaded for debugging

### Analytics
- [ ] Google Analytics / Plausible configured
- [ ] Custom events tracked
- [ ] Conversion funnels set up
- [ ] Performance monitoring enabled

### Logging
- [ ] Application logs configured
- [ ] Database query logging
- [ ] API request logging
- [ ] Error logging

---

## Backup & Recovery

- [ ] Database backup schedule configured
- [ ] Backup restoration tested
- [ ] Git tags for releases
- [ ] Rollback procedure documented
- [ ] Incident response plan created

---

## Documentation

- [ ] README updated with deployment info
- [ ] API documentation complete
- [ ] Environment variables documented
- [ ] Architecture diagram created
- [ ] Onboarding guide for team members

---

## Go-Live

- [ ] All checklist items above completed
- [ ] Staging environment tested
- [ ] Production deployment scheduled
- [ ] Team notified of deployment
- [ ] Monitoring dashboards ready
- [ ] Support team briefed

### Post-Launch Monitoring (First 24h)
- [ ] Monitor error rates
- [ ] Check response times
- [ ] Verify database connections
- [ ] Monitor API usage/costs
- [ ] Check user feedback channels
- [ ] Review analytics data

---

## Rollback Plan

If issues arise:
1. Revert to previous Vercel deployment
2. Check error logs in Vercel/Sentry
3. Verify environment variables
4. Test database connections
5. Contact support if needed

---

## Maintenance

### Weekly
- [ ] Review error logs
- [ ] Check API costs
- [ ] Monitor performance metrics
- [ ] Review user feedback

### Monthly
- [ ] Update dependencies
- [ ] Review security patches
- [ ] Backup verification
- [ ] Performance optimization review

### Quarterly
- [ ] Security audit
- [ ] Cost optimization review
- [ ] Feature usage analysis
- [ ] Database optimization
