-- AI Agent Builder Database Schema for Supabase
-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  plan_tier TEXT DEFAULT 'free', -- free, pro, enterprise
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI Agents/Bots table
CREATE TABLE IF NOT EXISTS agents (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Basic Info
  name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  industry TEXT,
  description TEXT,

  -- Persona
  bot_name TEXT NOT NULL DEFAULT 'AI Assistant',
  tone TEXT DEFAULT 'friendly', -- professional, friendly, playful, luxury, technical
  greeting_message TEXT,
  fallback_message TEXT,

  -- Appearance
  avatar_type TEXT DEFAULT 'orb', -- orb, circle, square, custom
  primary_color TEXT DEFAULT '#3B82F6',
  accent_color TEXT DEFAULT '#60A5FA',
  position TEXT DEFAULT 'bottom-right', -- bottom-right, bottom-left
  custom_avatar_url TEXT,

  -- Lead Capture
  lead_capture_enabled BOOLEAN DEFAULT true,
  lead_capture_fields JSONB DEFAULT '["name", "email"]'::jsonb,
  lead_capture_message TEXT,

  -- Status
  status TEXT DEFAULT 'draft', -- draft, active, paused
  is_published BOOLEAN DEFAULT false,

  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_trained_at TIMESTAMP WITH TIME ZONE
);

-- Knowledge Sources table
CREATE TABLE IF NOT EXISTS knowledge_sources (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  agent_id UUID REFERENCES agents(id) ON DELETE CASCADE NOT NULL,

  type TEXT NOT NULL, -- url, text, file
  source_url TEXT,
  content TEXT,
  file_name TEXT,
  file_url TEXT,

  -- Processing
  status TEXT DEFAULT 'pending', -- pending, processing, done, error
  error_message TEXT,
  processed_at TIMESTAMP WITH TIME ZONE,

  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vector embeddings for knowledge
CREATE TABLE IF NOT EXISTS knowledge_embeddings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  knowledge_source_id UUID REFERENCES knowledge_sources(id) ON DELETE CASCADE NOT NULL,
  agent_id UUID REFERENCES agents(id) ON DELETE CASCADE NOT NULL,

  content TEXT NOT NULL,
  embedding vector(1536), -- OpenAI ada-002 dimension
  metadata JSONB,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Conversations table
CREATE TABLE IF NOT EXISTS conversations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  agent_id UUID REFERENCES agents(id) ON DELETE CASCADE NOT NULL,

  visitor_id TEXT, -- Anonymous visitor identifier
  session_id TEXT,

  -- Visitor Info (if captured)
  visitor_name TEXT,
  visitor_email TEXT,
  visitor_phone TEXT,
  visitor_metadata JSONB,

  -- Conversation
  status TEXT DEFAULT 'active', -- active, closed, abandoned
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,

  -- Analytics
  message_count INTEGER DEFAULT 0,
  is_lead_captured BOOLEAN DEFAULT false,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Messages table
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE NOT NULL,
  agent_id UUID REFERENCES agents(id) ON DELETE CASCADE NOT NULL,

  role TEXT NOT NULL, -- user, assistant, system
  content TEXT NOT NULL,

  -- Metadata
  metadata JSONB, -- tokens, latency, etc.
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  agent_id UUID REFERENCES agents(id) ON DELETE CASCADE NOT NULL,
  conversation_id UUID REFERENCES conversations(id) ON DELETE SET NULL,

  -- Lead Info
  name TEXT,
  email TEXT,
  phone TEXT,
  company TEXT,
  custom_fields JSONB,

  -- Source
  source_url TEXT,
  referrer TEXT,

  -- Status
  status TEXT DEFAULT 'new', -- new, contacted, qualified, converted, lost

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics Events table
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  agent_id UUID REFERENCES agents(id) ON DELETE CASCADE NOT NULL,

  event_type TEXT NOT NULL, -- impression, chat_opened, message_sent, lead_captured, etc.
  event_data JSONB,

  session_id TEXT,
  visitor_id TEXT,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_agents_user_id ON agents(user_id);
CREATE INDEX IF NOT EXISTS idx_agents_status ON agents(status);
CREATE INDEX IF NOT EXISTS idx_knowledge_sources_agent_id ON knowledge_sources(agent_id);
CREATE INDEX IF NOT EXISTS idx_knowledge_embeddings_agent_id ON knowledge_embeddings(agent_id);
CREATE INDEX IF NOT EXISTS idx_conversations_agent_id ON conversations(agent_id);
CREATE INDEX IF NOT EXISTS idx_conversations_status ON conversations(status);
CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_leads_agent_id ON leads(agent_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_analytics_events_agent_id ON analytics_events(agent_id);

-- Vector similarity search index
CREATE INDEX IF NOT EXISTS idx_knowledge_embeddings_vector ON knowledge_embeddings
USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- Row Level Security (RLS) Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_embeddings ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Agents policies
CREATE POLICY "Users can view own agents" ON agents
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create agents" ON agents
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own agents" ON agents
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own agents" ON agents
  FOR DELETE USING (auth.uid() = user_id);

-- Knowledge sources policies (inherit from agents)
CREATE POLICY "Users can view knowledge sources for own agents" ON knowledge_sources
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM agents WHERE agents.id = knowledge_sources.agent_id AND agents.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create knowledge sources for own agents" ON knowledge_sources
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM agents WHERE agents.id = knowledge_sources.agent_id AND agents.user_id = auth.uid()
    )
  );

-- Similar policies for other tables...
-- (Add more RLS policies as needed for conversations, messages, leads, etc.)

-- Functions for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_agents_updated_at BEFORE UPDATE ON agents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_knowledge_sources_updated_at BEFORE UPDATE ON knowledge_sources
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_conversations_updated_at BEFORE UPDATE ON conversations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
