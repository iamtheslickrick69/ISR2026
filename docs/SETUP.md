# AI Agent Builder - Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager
- Supabase account (free tier works)
- OpenAI API key
- Stripe account (optional, for payments)

---

## Step 1: Environment Variables Setup

### 1.1 Supabase Setup

1. Go to https://app.supabase.com
2. Create a new project (or use existing)
3. Wait for project to finish provisioning
4. Go to Project Settings > API
5. Copy these values to `.env.local`:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep secret!)

### 1.2 Database Schema Setup

1. In Supabase dashboard, go to **SQL Editor**
2. Create a new query
3. Copy the contents of `docs/database-schema.sql`
4. Run the query to create all tables and indexes
5. Verify tables were created in **Table Editor**

**Important: Enable pgvector extension**
```sql
CREATE EXTENSION IF NOT EXISTS "vector";
```

### 1.3 OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Create a new API key
3. Copy to `.env.local` → `OPENAI_API_KEY`
4. ⚠️ **Important:** Add billing information to OpenAI account

### 1.4 Stripe Setup (Optional - for payments)

1. Go to https://dashboard.stripe.com
2. Get your API keys from **Developers > API keys**
3. Copy:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`
4. For webhooks (production):
   - Go to **Developers > Webhooks**
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - Copy **Signing secret** → `STRIPE_WEBHOOK_SECRET`

---

## Step 2: Install Dependencies

```bash
cd ~/Desktop/ISR2026
npm install
# or
pnpm install
```

---

## Step 3: Environment File Template

Your `.env.local` should look like this:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# OpenAI
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx

# Stripe (optional)
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3002
```

---

## Step 4: Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Visit: http://localhost:3002/agent-builder

---

## Step 5: Verify Setup

### ✅ Checklist:
- [ ] Supabase project created
- [ ] Database schema applied
- [ ] pgvector extension enabled
- [ ] OpenAI API key added with billing
- [ ] Environment variables set in `.env.local`
- [ ] Dependencies installed
- [ ] Dev server runs without errors
- [ ] Can access `/agent-builder` page

---

## Troubleshooting

### Port already in use
If port 3000 is taken, the app will try 3001, 3002, etc.

### Supabase connection errors
- Verify your project URL is correct
- Check that API keys are copied correctly (no extra spaces)
- Ensure your Supabase project is "Active" status

### OpenAI API errors
- Verify API key is valid
- Check that you have billing set up on OpenAI
- Ensure you're not hitting rate limits

### pgvector not found
Run this in Supabase SQL Editor:
```sql
CREATE EXTENSION IF NOT EXISTS "vector";
```

---

## Next Steps

Once setup is complete:
1. Build backend API routes (see `docs/API_ROUTES.md`)
2. Implement Supabase client integration
3. Add authentication
4. Deploy to Vercel/production
