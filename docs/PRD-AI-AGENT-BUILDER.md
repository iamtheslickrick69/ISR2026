# AI Agent Builder - Product Requirements Document

## Executive Summary

The AI Agent Builder is a self-serve SaaS platform that enables SMBs (Small and Medium Businesses) to create custom AI chatbots for their websites in 10-15 minutes. The platform offers an intuitive wizard-based interface for bot creation, knowledge training, and deployment via a single embed script.

---

## 1. Product Purpose

### Vision
Democratize AI chatbot technology by making it accessible, affordable, and easy to deploy for businesses of all sizes.

### Mission
Enable any SMB to deploy a custom-trained AI assistant on their website without technical expertise or developer resources.

### Problem Statement
SMBs need AI-powered customer support but face barriers:
- Enterprise solutions are too expensive ($500-5000/month)
- Technical complexity requires developer resources
- Generic chatbots provide poor, irrelevant responses
- Setup typically takes weeks, not minutes

### Solution
A streamlined platform where businesses can:
1. Create a chatbot in 10-15 minutes via guided wizard
2. Train it on their specific content (website, docs, FAQs)
3. Customize appearance to match their brand
4. Deploy with a single line of code
5. Capture leads and view analytics

---

## 2. Target Users

### Primary Persona: SMB Owner/Operator
- **Company Size**: 1-100 employees
- **Role**: Owner, Marketing Manager, Operations Manager
- **Technical Skill**: Low to moderate (can copy/paste code)
- **Pain Points**:
  - Limited time and resources
  - Can't afford enterprise solutions
  - Needs 24/7 customer support coverage
  - Wants to capture leads automatically

### Industries
- **Equipment Rental** (first customer: St. George Rentals)
- Professional Services (legal, accounting, consulting)
- Home Services (plumbing, HVAC, landscaping)
- Retail/E-commerce
- Healthcare (dental, chiropractic, medical spas)
- Real Estate
- Hospitality

---

## 3. Value Proposition

### For SMBs
| Benefit | Description |
|---------|-------------|
| Speed | Deploy in 15 minutes, not weeks |
| Affordability | $499 setup + $49/month vs. $500-5000/month |
| Customization | Trained on YOUR content, matches YOUR brand |
| Lead Capture | Automatically collect visitor information |
| 24/7 Coverage | AI handles questions when you're unavailable |
| No Code | Single script embed, no developer needed |

### ROI Example
- Average cost of missed lead: $200-500
- If chatbot captures 3 extra leads/month: $600-1500 value
- Monthly subscription: $49
- **ROI: 12-30x return on investment**

---

## 4. Core Features

### 4.1 Bot Creation Wizard (6 Steps)

#### Step 1: Basics
- Bot name (internal reference)
- Website URL (for scraping)
- Industry selection (pre-populates defaults)
- Company description (optional)

#### Step 2: Knowledge Training
- **URL Scraping**: Crawl website pages automatically
- **Text Upload**: Paste FAQ content, policies, etc.
- **File Upload**: PDF, DOCX, TXT documents
- **Manual Entry**: Add Q&A pairs directly
- Progress indicator for training status

#### Step 3: Persona Configuration
- Bot display name (customer-facing)
- Personality/Tone selection:
  - Professional
  - Friendly
  - Casual
  - Custom instructions
- Welcome message customization
- Fallback message (when AI can't answer)
- Human handoff message

#### Step 4: Appearance
- Avatar selection:
  - Upload custom image
  - Choose from presets
  - Use generated avatar
- Color scheme:
  - Primary color (header, buttons)
  - Secondary color (accents)
  - Message bubble colors
- Widget position (bottom-right, bottom-left)
- Widget size (compact, standard, expanded)

#### Step 5: Lead Capture
- Enable/disable lead collection
- Field selection:
  - Name (required/optional)
  - Email (required/optional)
  - Phone (required/optional)
  - Custom fields
- Trigger timing:
  - Before first response
  - After N messages
  - When human handoff requested
- Privacy policy link

#### Step 6: Review & Launch
- Summary of all configurations
- Live preview of bot
- Test conversation interface
- Generate embed code
- Deployment instructions

### 4.2 Dashboard

#### Overview
- Total conversations (24h, 7d, 30d)
- Leads captured
- Response rate / satisfaction
- Active bots count

#### Bot Cards
- Status badge (Active, Paused, Training)
- Quick stats (conversations, leads)
- Quick actions (Edit, Pause, Delete)

#### Quick Actions
- Create new bot
- View all conversations
- Export leads
- Access help/docs

### 4.3 Bot Management

#### Overview Tab
- Performance metrics
- Recent conversations
- Recent leads
- Bot status

#### Knowledge Tab
- View all sources
- Add new sources
- Edit/delete sources
- Retrain bot
- View training status

#### Appearance Tab
- Edit colors
- Change avatar
- Update positioning
- Live preview

#### Settings Tab
- Enable/disable bot
- Lead capture settings
- Notification preferences
- AI model selection
- Rate limiting

#### Embed Tab
- Copy embed code
- Installation instructions
- Test on any URL
- Verify installation

### 4.4 Analytics

#### Conversation Metrics
- Total conversations
- Average duration
- Messages per conversation
- Peak hours

#### Lead Metrics
- Leads captured
- Conversion rate
- Lead quality scoring
- Export functionality

#### AI Performance
- Response accuracy
- Fallback rate
- Sentiment analysis
- Common questions

### 4.5 Conversation View

#### Features
- Real-time conversation list
- Filter by bot, date, status
- Search conversations
- View full transcripts
- Flag/tag conversations
- Export conversations

#### Actions
- Take over conversation (human handoff)
- Send follow-up email
- Mark as resolved
- Add internal notes

---

## 5. Technical Architecture

### 5.1 System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Browser                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ Embed Widget │  │   Dashboard  │  │   Landing Page       │  │
│  │ (vanilla JS) │  │  (Next.js)   │  │    (Next.js)         │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────────────────┘  │
└─────────┼─────────────────┼────────────────────────────────────┘
          │                 │
          ▼                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Next.js API Routes                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ /api/chat    │  │ /api/bots    │  │ /api/embed/config    │  │
│  │ /api/leads   │  │ /api/sources │  │ /api/analytics       │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘  │
└─────────┼─────────────────┼─────────────────────┼──────────────┘
          │                 │                     │
          ▼                 ▼                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Supabase Backend                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │     Auth     │  │   Database   │  │      Storage         │  │
│  │   (GoTrue)   │  │  (Postgres)  │  │   (S3-compatible)    │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                           │                                     │
│                    ┌──────┴──────┐                              │
│                    │  pgvector   │                              │
│                    │ (embeddings)│                              │
│                    └─────────────┘                              │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│                     External Services                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   OpenAI /   │  │    Stripe    │  │     Firecrawl        │  │
│  │   DeepSeek   │  │  (Payments)  │  │   (Web Scraping)     │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, React 19, Tailwind CSS v4 |
| UI Components | shadcn/ui, Radix UI, Lucide Icons |
| Animations | Framer Motion |
| Backend | Next.js API Routes |
| Database | Supabase (PostgreSQL) |
| Vector Store | pgvector (1536 dimensions) |
| Auth | Supabase Auth |
| Storage | Supabase Storage |
| Payments | Stripe |
| AI Models | OpenAI (GPT-4o-mini), DeepSeek (fallback) |
| Web Scraping | Firecrawl |
| Hosting | Vercel |

### 5.3 Embed Widget Architecture

The embed widget is a standalone vanilla JavaScript bundle that:
1. Loads configuration from `/api/embed/config?bot_id=X`
2. Renders chat interface in an iframe
3. Communicates via postMessage API
4. Stores session in localStorage
5. Sends messages to `/api/chat`

```html
<!-- Customer installs this single line -->
<script src="https://app.domain.com/embed.js" data-bot-id="abc123"></script>
```

---

## 6. Database Schema

See `database-schema.sql` for complete schema including:
- User profiles and authentication
- Bot configurations and appearance
- Knowledge sources and vector embeddings
- Conversations and messages
- Lead capture data
- Daily analytics aggregations

---

## 7. API Endpoints

### Authentication
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Sign in
- `POST /api/auth/logout` - Sign out
- `GET /api/auth/user` - Get current user

### Bots
- `GET /api/bots` - List user's bots
- `POST /api/bots` - Create new bot
- `GET /api/bots/:id` - Get bot details
- `PATCH /api/bots/:id` - Update bot
- `DELETE /api/bots/:id` - Delete bot
- `POST /api/bots/:id/publish` - Publish bot
- `POST /api/bots/:id/pause` - Pause bot

### Knowledge
- `GET /api/bots/:id/sources` - List knowledge sources
- `POST /api/bots/:id/sources` - Add source
- `DELETE /api/bots/:id/sources/:sourceId` - Remove source
- `POST /api/bots/:id/train` - Trigger training

### Chat (Public - for embed widget)
- `POST /api/chat` - Send message, get AI response
- `GET /api/embed/config` - Get bot configuration

### Conversations
- `GET /api/conversations` - List conversations
- `GET /api/conversations/:id` - Get conversation details
- `PATCH /api/conversations/:id` - Update status

### Leads
- `GET /api/leads` - List leads
- `GET /api/leads/export` - Export as CSV
- `PATCH /api/leads/:id` - Update lead status

### Analytics
- `GET /api/analytics/overview` - Dashboard stats
- `GET /api/analytics/conversations` - Conversation metrics
- `GET /api/analytics/leads` - Lead metrics

### Payments
- `POST /api/payments/checkout` - Create Stripe session
- `POST /api/payments/webhook` - Handle Stripe events
- `GET /api/payments/subscription` - Get subscription status

---

## 8. Pricing Model

### Pricing Tiers

| Plan | Setup Fee | Monthly | Bots | Conversations | Features |
|------|-----------|---------|------|---------------|----------|
| Starter | $499 | $49 | 1 | 500/mo | Basic features |
| Professional | $499 | $99 | 3 | 2,000/mo | + Analytics, Priority |
| Business | $499 | $199 | 10 | 10,000/mo | + API, White-label |
| Enterprise | Custom | Custom | Unlimited | Unlimited | Custom integration |

### Included in All Plans
- Knowledge training
- Lead capture
- Custom branding
- Email notifications
- Basic analytics

### Setup Fee Covers
- Onboarding call (30 min)
- Initial content audit
- Bot configuration assistance
- First month free
- Priority support (30 days)

---

## 9. Success Metrics

### Product Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to Deploy | < 15 min | Wizard completion time |
| Bot Activation Rate | > 80% | Bots deployed / bots created |
| Monthly Churn | < 5% | Cancellations / active subs |
| NPS Score | > 50 | Quarterly surveys |

### Business Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| CAC | < $200 | Marketing spend / new customers |
| LTV | > $1,000 | Avg revenue per customer |
| MRR Growth | 20%/mo | Monthly recurring revenue |
| Conversion Rate | > 10% | Trials to paid |

### Engagement Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Avg Conversations/Bot | > 50/mo | Total convos / active bots |
| Lead Capture Rate | > 20% | Leads / conversations |
| Dashboard DAU | > 30% | Daily active users / total users |

---

## 10. Roadmap

### Phase 1: Foundation (Current)
- [x] UI/UX Design
- [x] Dashboard layout
- [x] Bot creation wizard
- [x] Bot management pages
- [ ] Supabase integration
- [ ] Authentication flow

### Phase 2: Core Features
- [ ] Knowledge pipeline (scraping, chunking, embeddings)
- [ ] Chat API with RAG
- [ ] Embed widget bundle
- [ ] Lead capture system

### Phase 3: Monetization
- [ ] Stripe integration
- [ ] Subscription management
- [ ] Usage metering
- [ ] Billing dashboard

### Phase 4: Analytics & Insights
- [ ] Conversation analytics
- [ ] Lead analytics
- [ ] AI performance metrics
- [ ] Custom reports

### Phase 5: Advanced Features
- [ ] Multi-language support
- [ ] Voice chat integration
- [ ] CRM integrations (HubSpot, Salesforce)
- [ ] White-label options
- [ ] API access for developers

---

## 11. Security & Compliance

### Data Protection
- All data encrypted at rest (AES-256)
- TLS 1.3 for data in transit
- Row-level security in Supabase
- Regular security audits

### Authentication
- Email/password with email verification
- Magic link authentication
- Session management with secure tokens
- Rate limiting on auth endpoints

### Privacy
- GDPR-compliant data handling
- User data export capability
- Right to deletion
- Clear privacy policy
- Cookie consent management

### API Security
- API key authentication for embed
- Rate limiting per bot/user
- Request validation and sanitization
- CORS configuration

---

## 12. Support & Documentation

### Self-Service
- In-app help tooltips
- Video tutorials
- Knowledge base articles
- FAQ section

### Direct Support
- Email support (< 24h response)
- Chat support (business hours)
- Onboarding calls (paid plans)
- Priority support (first 30 days)

### Documentation
- Getting started guide
- Embed installation guide
- API documentation
- Best practices guide
- Troubleshooting guide

---

## 13. Glossary

| Term | Definition |
|------|------------|
| Bot | An AI chatbot instance configured for a specific business |
| Knowledge Source | Content used to train the bot (website, docs, FAQs) |
| Embed Widget | The chat interface installed on customer websites |
| RAG | Retrieval-Augmented Generation - using knowledge to enhance AI responses |
| Chunk | A segment of text stored with vector embeddings |
| Lead | Visitor contact information captured by the bot |
| Conversation | A chat session between a visitor and the bot |

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2024-01 | Team | Initial PRD |
| 1.1 | 2024-02 | Team | Added pricing, roadmap |
| 2.0 | 2024-12 | AI Agent | Comprehensive rewrite |
