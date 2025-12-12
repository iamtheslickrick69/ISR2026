-- AI Agent Builder Database Schema
-- Supabase PostgreSQL with pgvector extension
-- Version: 1.0

-- ============================================
-- EXTENSIONS
-- ============================================

-- Enable pgvector for embeddings storage
CREATE EXTENSION IF NOT EXISTS vector;

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLES
-- ============================================

-- User profiles (extends Supabase auth.users)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    company_name TEXT,
    avatar_url TEXT,

    -- Subscription info
    subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'starter', 'professional', 'business', 'enterprise')),
    subscription_status TEXT DEFAULT 'active' CHECK (subscription_status IN ('active', 'past_due', 'canceled', 'trialing')),
    stripe_customer_id TEXT UNIQUE,
    stripe_subscription_id TEXT UNIQUE,

    -- Usage tracking
    bot_limit INTEGER DEFAULT 1,
    conversation_limit INTEGER DEFAULT 500,
    conversations_used INTEGER DEFAULT 0,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bots table
CREATE TABLE bots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,

    -- Basic info
    name TEXT NOT NULL,
    description TEXT,
    website_url TEXT,
    industry TEXT,

    -- Bot persona
    bot_name TEXT DEFAULT 'AI Assistant',
    tone TEXT DEFAULT 'professional' CHECK (tone IN ('professional', 'friendly', 'casual', 'custom')),
    custom_instructions TEXT,
    welcome_message TEXT DEFAULT 'Hi! How can I help you today?',
    fallback_message TEXT DEFAULT 'I''m not sure about that. Would you like to speak with a human?',
    handoff_message TEXT DEFAULT 'Let me connect you with a team member.',

    -- Status
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'training', 'active', 'paused', 'error')),
    is_published BOOLEAN DEFAULT FALSE,

    -- AI Configuration
    model TEXT DEFAULT 'gpt-4o-mini',
    temperature DECIMAL(2,1) DEFAULT 0.7,
    max_tokens INTEGER DEFAULT 500,

    -- Stats (denormalized for quick access)
    total_conversations INTEGER DEFAULT 0,
    total_leads INTEGER DEFAULT 0,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_trained_at TIMESTAMPTZ,
    published_at TIMESTAMPTZ
);

-- Bot appearance settings
CREATE TABLE bot_appearance (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bot_id UUID NOT NULL REFERENCES bots(id) ON DELETE CASCADE UNIQUE,

    -- Avatar
    avatar_type TEXT DEFAULT 'preset' CHECK (avatar_type IN ('preset', 'upload', 'initials', 'none')),
    avatar_url TEXT,
    avatar_preset TEXT DEFAULT 'bot-1',

    -- Colors
    primary_color TEXT DEFAULT '#3B82F6',
    secondary_color TEXT DEFAULT '#1E40AF',
    background_color TEXT DEFAULT '#FFFFFF',
    text_color TEXT DEFAULT '#1F2937',
    user_bubble_color TEXT DEFAULT '#3B82F6',
    bot_bubble_color TEXT DEFAULT '#F3F4F6',

    -- Position & Size
    position TEXT DEFAULT 'bottom-right' CHECK (position IN ('bottom-right', 'bottom-left')),
    widget_size TEXT DEFAULT 'standard' CHECK (widget_size IN ('compact', 'standard', 'expanded')),

    -- Branding
    show_powered_by BOOLEAN DEFAULT TRUE,
    custom_css TEXT,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lead capture settings
CREATE TABLE lead_capture_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bot_id UUID NOT NULL REFERENCES bots(id) ON DELETE CASCADE UNIQUE,

    -- Enable/disable
    is_enabled BOOLEAN DEFAULT TRUE,

    -- Fields
    collect_name BOOLEAN DEFAULT TRUE,
    name_required BOOLEAN DEFAULT FALSE,
    collect_email BOOLEAN DEFAULT TRUE,
    email_required BOOLEAN DEFAULT TRUE,
    collect_phone BOOLEAN DEFAULT FALSE,
    phone_required BOOLEAN DEFAULT FALSE,
    custom_fields JSONB DEFAULT '[]',

    -- Trigger
    trigger_type TEXT DEFAULT 'after_messages' CHECK (trigger_type IN ('before_first', 'after_messages', 'on_handoff', 'custom')),
    trigger_after_messages INTEGER DEFAULT 2,

    -- Content
    form_title TEXT DEFAULT 'Get in touch',
    form_description TEXT DEFAULT 'Please share your details so we can better assist you.',
    submit_button_text TEXT DEFAULT 'Submit',
    privacy_policy_url TEXT,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Knowledge sources
CREATE TABLE knowledge_sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bot_id UUID NOT NULL REFERENCES bots(id) ON DELETE CASCADE,

    -- Source type
    source_type TEXT NOT NULL CHECK (source_type IN ('url', 'text', 'file', 'qa')),

    -- Source details
    name TEXT NOT NULL,
    url TEXT,
    content TEXT,
    file_url TEXT,
    file_name TEXT,
    file_type TEXT,
    file_size INTEGER,

    -- Q&A specific
    question TEXT,
    answer TEXT,

    -- Processing status
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'error')),
    error_message TEXT,

    -- Stats
    chunk_count INTEGER DEFAULT 0,
    character_count INTEGER DEFAULT 0,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    processed_at TIMESTAMPTZ
);

-- Knowledge chunks (for RAG)
CREATE TABLE knowledge_chunks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_id UUID NOT NULL REFERENCES knowledge_sources(id) ON DELETE CASCADE,
    bot_id UUID NOT NULL REFERENCES bots(id) ON DELETE CASCADE,

    -- Content
    content TEXT NOT NULL,

    -- Vector embedding (OpenAI text-embedding-3-small = 1536 dimensions)
    embedding vector(1536),

    -- Metadata
    chunk_index INTEGER NOT NULL,
    metadata JSONB DEFAULT '{}',

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Conversations
CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bot_id UUID NOT NULL REFERENCES bots(id) ON DELETE CASCADE,

    -- Session info
    session_id TEXT NOT NULL,
    visitor_id TEXT,

    -- Status
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'resolved', 'handoff', 'abandoned')),

    -- Lead info (if captured)
    lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,

    -- Stats
    message_count INTEGER DEFAULT 0,

    -- Visitor metadata
    visitor_ip TEXT,
    visitor_user_agent TEXT,
    visitor_referrer TEXT,
    visitor_page_url TEXT,
    visitor_country TEXT,
    visitor_city TEXT,

    -- Flags
    is_flagged BOOLEAN DEFAULT FALSE,
    flag_reason TEXT,

    -- Internal notes
    internal_notes TEXT,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_message_at TIMESTAMPTZ DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

-- Messages
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,

    -- Message content
    role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
    content TEXT NOT NULL,

    -- AI metadata
    model TEXT,
    tokens_used INTEGER,
    latency_ms INTEGER,

    -- Source chunks used (for RAG transparency)
    source_chunks JSONB DEFAULT '[]',

    -- Feedback
    feedback TEXT CHECK (feedback IN ('positive', 'negative', NULL)),

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bot_id UUID NOT NULL REFERENCES bots(id) ON DELETE CASCADE,
    conversation_id UUID REFERENCES conversations(id) ON DELETE SET NULL,

    -- Contact info
    name TEXT,
    email TEXT,
    phone TEXT,
    custom_fields JSONB DEFAULT '{}',

    -- Status
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),

    -- Metadata
    source_page TEXT,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily analytics (pre-aggregated for performance)
CREATE TABLE analytics_daily (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bot_id UUID NOT NULL REFERENCES bots(id) ON DELETE CASCADE,
    date DATE NOT NULL,

    -- Conversation metrics
    conversations_total INTEGER DEFAULT 0,
    conversations_resolved INTEGER DEFAULT 0,
    conversations_handoff INTEGER DEFAULT 0,
    conversations_abandoned INTEGER DEFAULT 0,

    -- Message metrics
    messages_total INTEGER DEFAULT 0,
    messages_user INTEGER DEFAULT 0,
    messages_assistant INTEGER DEFAULT 0,
    avg_messages_per_conversation DECIMAL(5,2) DEFAULT 0,

    -- Lead metrics
    leads_captured INTEGER DEFAULT 0,
    lead_conversion_rate DECIMAL(5,2) DEFAULT 0,

    -- Performance metrics
    avg_response_time_ms INTEGER DEFAULT 0,
    avg_tokens_per_response INTEGER DEFAULT 0,

    -- Feedback metrics
    feedback_positive INTEGER DEFAULT 0,
    feedback_negative INTEGER DEFAULT 0,

    -- Cost tracking
    total_tokens_used INTEGER DEFAULT 0,
    estimated_cost_usd DECIMAL(10,4) DEFAULT 0,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    -- Ensure one row per bot per day
    UNIQUE(bot_id, date)
);

-- API Keys (for embed widget authentication)
CREATE TABLE api_keys (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    bot_id UUID REFERENCES bots(id) ON DELETE CASCADE,

    -- Key info
    key_hash TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,

    -- Permissions
    permissions JSONB DEFAULT '["read", "chat"]',

    -- Rate limiting
    rate_limit INTEGER DEFAULT 100, -- requests per minute

    -- Status
    is_active BOOLEAN DEFAULT TRUE,

    -- Usage
    last_used_at TIMESTAMPTZ,
    total_requests INTEGER DEFAULT 0,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    expires_at TIMESTAMPTZ
);

-- ============================================
-- INDEXES
-- ============================================

-- Bots
CREATE INDEX idx_bots_user_id ON bots(user_id);
CREATE INDEX idx_bots_status ON bots(status);

-- Knowledge sources
CREATE INDEX idx_knowledge_sources_bot_id ON knowledge_sources(bot_id);
CREATE INDEX idx_knowledge_sources_status ON knowledge_sources(status);

-- Knowledge chunks
CREATE INDEX idx_knowledge_chunks_bot_id ON knowledge_chunks(bot_id);
CREATE INDEX idx_knowledge_chunks_source_id ON knowledge_chunks(source_id);

-- Vector similarity search index (IVFFlat for better performance)
CREATE INDEX idx_knowledge_chunks_embedding ON knowledge_chunks
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Conversations
CREATE INDEX idx_conversations_bot_id ON conversations(bot_id);
CREATE INDEX idx_conversations_session_id ON conversations(session_id);
CREATE INDEX idx_conversations_status ON conversations(status);
CREATE INDEX idx_conversations_created_at ON conversations(created_at DESC);

-- Messages
CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);

-- Leads
CREATE INDEX idx_leads_bot_id ON leads(bot_id);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- Analytics
CREATE INDEX idx_analytics_daily_bot_date ON analytics_daily(bot_id, date DESC);

-- API Keys
CREATE INDEX idx_api_keys_user_id ON api_keys(user_id);
CREATE INDEX idx_api_keys_key_hash ON api_keys(key_hash);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to search similar chunks using vector similarity
CREATE OR REPLACE FUNCTION search_similar_chunks(
    p_bot_id UUID,
    p_query_embedding vector(1536),
    p_match_threshold FLOAT DEFAULT 0.7,
    p_match_count INT DEFAULT 5
)
RETURNS TABLE (
    id UUID,
    content TEXT,
    source_id UUID,
    similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        kc.id,
        kc.content,
        kc.source_id,
        1 - (kc.embedding <=> p_query_embedding) AS similarity
    FROM knowledge_chunks kc
    WHERE kc.bot_id = p_bot_id
        AND 1 - (kc.embedding <=> p_query_embedding) > p_match_threshold
    ORDER BY kc.embedding <=> p_query_embedding
    LIMIT p_match_count;
END;
$$;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to increment conversation count
CREATE OR REPLACE FUNCTION increment_bot_conversations()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE bots
    SET total_conversations = total_conversations + 1
    WHERE id = NEW.bot_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to increment lead count
CREATE OR REPLACE FUNCTION increment_bot_leads()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE bots
    SET total_leads = total_leads + 1
    WHERE id = NEW.bot_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- TRIGGERS
-- ============================================

-- Auto-update updated_at for profiles
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for bots
CREATE TRIGGER update_bots_updated_at
    BEFORE UPDATE ON bots
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for bot_appearance
CREATE TRIGGER update_bot_appearance_updated_at
    BEFORE UPDATE ON bot_appearance
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for lead_capture_settings
CREATE TRIGGER update_lead_capture_settings_updated_at
    BEFORE UPDATE ON lead_capture_settings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for knowledge_sources
CREATE TRIGGER update_knowledge_sources_updated_at
    BEFORE UPDATE ON knowledge_sources
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for conversations
CREATE TRIGGER update_conversations_updated_at
    BEFORE UPDATE ON conversations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for leads
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Auto-update updated_at for analytics_daily
CREATE TRIGGER update_analytics_daily_updated_at
    BEFORE UPDATE ON analytics_daily
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Increment bot conversation count on new conversation
CREATE TRIGGER increment_conversations_on_insert
    AFTER INSERT ON conversations
    FOR EACH ROW
    EXECUTE FUNCTION increment_bot_conversations();

-- Increment bot lead count on new lead
CREATE TRIGGER increment_leads_on_insert
    AFTER INSERT ON leads
    FOR EACH ROW
    EXECUTE FUNCTION increment_bot_leads();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bots ENABLE ROW LEVEL SECURITY;
ALTER TABLE bot_appearance ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_capture_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_chunks ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_daily ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can only access their own profile
CREATE POLICY "Users can view own profile"
    ON profiles FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
    ON profiles FOR UPDATE
    USING (auth.uid() = id);

-- Bots: Users can only access their own bots
CREATE POLICY "Users can view own bots"
    ON bots FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own bots"
    ON bots FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bots"
    ON bots FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own bots"
    ON bots FOR DELETE
    USING (auth.uid() = user_id);

-- Bot Appearance: Users can manage appearance for their bots
CREATE POLICY "Users can manage bot appearance"
    ON bot_appearance FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM bots
            WHERE bots.id = bot_appearance.bot_id
            AND bots.user_id = auth.uid()
        )
    );

-- Lead Capture Settings: Users can manage settings for their bots
CREATE POLICY "Users can manage lead capture settings"
    ON lead_capture_settings FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM bots
            WHERE bots.id = lead_capture_settings.bot_id
            AND bots.user_id = auth.uid()
        )
    );

-- Knowledge Sources: Users can manage sources for their bots
CREATE POLICY "Users can manage knowledge sources"
    ON knowledge_sources FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM bots
            WHERE bots.id = knowledge_sources.bot_id
            AND bots.user_id = auth.uid()
        )
    );

-- Knowledge Chunks: Users can view chunks for their bots
CREATE POLICY "Users can view knowledge chunks"
    ON knowledge_chunks FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM bots
            WHERE bots.id = knowledge_chunks.bot_id
            AND bots.user_id = auth.uid()
        )
    );

-- Conversations: Users can view conversations for their bots
CREATE POLICY "Users can view conversations"
    ON conversations FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM bots
            WHERE bots.id = conversations.bot_id
            AND bots.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can update conversations"
    ON conversations FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM bots
            WHERE bots.id = conversations.bot_id
            AND bots.user_id = auth.uid()
        )
    );

-- Messages: Users can view messages for their bot conversations
CREATE POLICY "Users can view messages"
    ON messages FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM conversations c
            JOIN bots b ON b.id = c.bot_id
            WHERE c.id = messages.conversation_id
            AND b.user_id = auth.uid()
        )
    );

-- Leads: Users can manage leads for their bots
CREATE POLICY "Users can manage leads"
    ON leads FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM bots
            WHERE bots.id = leads.bot_id
            AND bots.user_id = auth.uid()
        )
    );

-- Analytics: Users can view analytics for their bots
CREATE POLICY "Users can view analytics"
    ON analytics_daily FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM bots
            WHERE bots.id = analytics_daily.bot_id
            AND bots.user_id = auth.uid()
        )
    );

-- API Keys: Users can manage their own API keys
CREATE POLICY "Users can manage own API keys"
    ON api_keys FOR ALL
    USING (auth.uid() = user_id);

-- ============================================
-- SERVICE ROLE POLICIES (for API routes)
-- ============================================

-- Allow service role to insert conversations (from embed widget)
CREATE POLICY "Service role can insert conversations"
    ON conversations FOR INSERT
    WITH CHECK (true);

-- Allow service role to insert messages (from embed widget)
CREATE POLICY "Service role can insert messages"
    ON messages FOR INSERT
    WITH CHECK (true);

-- Allow service role to insert leads (from embed widget)
CREATE POLICY "Service role can insert leads"
    ON leads FOR INSERT
    WITH CHECK (true);

-- Allow service role to read published bots (for embed config)
CREATE POLICY "Anyone can read published bots"
    ON bots FOR SELECT
    USING (is_published = true AND status = 'active');

-- Allow service role to read knowledge chunks (for RAG)
CREATE POLICY "Service role can read chunks for published bots"
    ON knowledge_chunks FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM bots
            WHERE bots.id = knowledge_chunks.bot_id
            AND bots.is_published = true
            AND bots.status = 'active'
        )
    );

-- ============================================
-- INITIAL DATA
-- ============================================

-- Create profile for new users automatically
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO profiles (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION handle_new_user();
