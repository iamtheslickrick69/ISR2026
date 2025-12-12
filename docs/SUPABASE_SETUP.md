# Supabase Setup Instructions

This guide will help you set up Supabase for the AI Agent Builder.

## Option 1: Using Supabase Cloud (Recommended for Production)

### Step 1: Create a Supabase Project

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Fill in:
   - Project name: `ISR2026` (or your preferred name)
   - Database password: (generate a strong password and save it)
   - Region: Choose closest to your users
4. Click "Create new project" and wait for provisioning

### Step 2: Run the Database Schema

1. In your Supabase project dashboard, go to the SQL Editor
2. Open the file `docs/database-schema.sql` from this repository
3. Copy the entire contents
4. Paste into the SQL Editor
5. Click "Run" to execute the schema

### Step 3: Get Your API Keys

1. Go to Project Settings > API
2. Copy the following values:
   - **Project URL**: `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role**: `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

### Step 4: Update Environment Variables

Update your `.env.local` file with the actual values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Option 2: Using Local Supabase (For Development)

### Prerequisites

- Docker Desktop installed and running
- Supabase CLI installed (`brew install supabase/tap/supabase`)

### Step 1: Start Local Supabase

```bash
cd /Users/isr/Desktop/ISR2026
supabase start
```

This will:
- Start PostgreSQL, PostgREST, GoTrue, and other Supabase services
- Run the migration in `supabase/migrations/20241212_initial_schema.sql`
- Display your local API credentials

### Step 2: Get Local Credentials

After `supabase start`, you'll see output like:

```
API URL: http://localhost:54321
DB URL: postgresql://postgres:postgres@localhost:54322/postgres
Studio URL: http://localhost:54323
Inbucket URL: http://localhost:54324
anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 3: Update .env.local for Local Development

```bash
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-local-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-local-service-role-key>
```

### Useful Local Commands

```bash
# Stop local Supabase
supabase stop

# Reset database (⚠️  deletes all data)
supabase db reset

# View Studio UI
open http://localhost:54323

# Check status
supabase status
```

## Linking to Cloud Project (Optional)

If you want to sync your local development with a cloud project:

```bash
# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-id

# Push local changes to cloud
supabase db push

# Pull cloud changes to local
supabase db pull
```

## Verifying Setup

1. Start your Next.js dev server: `pnpm dev`
2. Navigate to http://localhost:3002/agent-builder
3. Try creating a new bot
4. Check the Supabase Studio to see if data appears in the `bots` table

## Database Schema Overview

The schema includes:

- **profiles**: User account information
- **bots**: AI chatbot configurations
- **knowledge_sources**: Content sources for RAG
- **knowledge_embeddings**: Vector embeddings for semantic search
- **conversations**: Chat sessions
- **messages**: Individual chat messages
- **leads**: Contact information captured from chats
- **analytics_events**: Usage tracking

## Troubleshooting

### "Invalid supabaseUrl" Error

Make sure your `NEXT_PUBLIC_SUPABASE_URL` is a valid URL starting with `http://` or `https://`.

### Connection Refused (Local)

Make sure Docker is running and Supabase services are started with `supabase start`.

### Migration Errors

If you get errors running the schema:

1. Check PostgreSQL version (requires 14+)
2. Make sure `pgvector` extension is enabled
3. Run migrations one block at a time to identify issues

### RLS Errors

Row Level Security (RLS) is enabled on all tables. If you're getting permission errors:

1. Make sure you're using the `service_role` key for admin operations
2. Check that users are authenticated when accessing protected endpoints
3. Review RLS policies in the schema file

## Next Steps

After setting up Supabase:

1. Set up Anthropic API key for Claude AI
2. Set up OpenAI API key for embeddings
3. (Optional) Set up Stripe for payments
4. Test the AI Agent Builder functionality

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase CLI Reference](https://supabase.com/docs/guides/cli)
- [pgvector Documentation](https://github.com/pgvector/pgvector)
