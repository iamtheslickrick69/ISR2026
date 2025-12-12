'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Bot,
  Settings,
  BarChart3,
  MessageSquare,
  Users,
  FileText,
  Palette,
  Code,
  Copy,
  Check,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  Clock,
  TrendingUp,
  Zap,
  Globe,
  Edit3,
} from 'lucide-react';

// Mock bot data
const mockBot = {
  id: '1',
  name: 'St. George Rentals Assistant',
  botName: 'Atlas',
  domain: 'stgeorgerentals.com',
  status: 'active',
  industry: 'equipment-rental',
  tone: 'friendly',
  greetingMessage: 'Hi! 👋 How can I help you find the right equipment today?',
  primaryColor: '#3B82F6',
  accentColor: '#60A5FA',
  avatarType: 'orb',
  createdAt: '2024-12-01',
  lastActive: '2 hours ago',
  stats: {
    conversations: 142,
    messages: 1834,
    leads: 23,
    avgResponseTime: '1.2s',
    satisfactionRate: 94,
  },
  knowledgeSources: [
    { type: 'url', value: 'https://stgeorgerentals.com', status: 'completed' },
    { type: 'url', value: 'https://stgeorgerentals.com/equipment', status: 'completed' },
    { type: 'text', value: 'FAQ content...', status: 'completed' },
  ],
};

const tabs = [
  { id: 'overview', name: 'Overview', icon: BarChart3 },
  { id: 'knowledge', name: 'Knowledge', icon: FileText },
  { id: 'appearance', name: 'Appearance', icon: Palette },
  { id: 'settings', name: 'Settings', icon: Settings },
  { id: 'embed', name: 'Embed Code', icon: Code },
];

export default function BotManagementPage() {
  useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [copied, setCopied] = useState(false);

  const bot = mockBot; // In real app, fetch by params.id

  const embedCode = `<script src="https://haestus.dev/widget/agent.js" data-bot-id="${bot.id}" async></script>`;

  const copyCode = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <button
            onClick={() => router.push('/agent-builder')}
            className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors mt-1"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${bot.primaryColor}20, ${bot.accentColor}40)`,
              }}
            >
              <Bot className="w-7 h-7" style={{ color: bot.primaryColor }} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-white">{bot.name}</h1>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    bot.status === 'active'
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-yellow-500/10 text-yellow-400'
                  }`}
                >
                  {bot.status === 'active' ? 'Active' : 'Paused'}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  {bot.domain}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Last active {bot.lastActive}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-colors">
            {bot.status === 'active' ? (
              <>
                <Pause className="w-4 h-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Activate
              </>
            )}
          </button>
          <Link
            href={`/agent-builder/${bot.id}/edit`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            Edit Bot
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard
          icon={MessageSquare}
          label="Conversations"
          value={bot.stats.conversations.toString()}
          color="blue"
        />
        <StatCard
          icon={Zap}
          label="Messages"
          value={bot.stats.messages.toString()}
          color="purple"
        />
        <StatCard
          icon={Users}
          label="Leads"
          value={bot.stats.leads.toString()}
          color="green"
        />
        <StatCard
          icon={Clock}
          label="Avg Response"
          value={bot.stats.avgResponseTime}
          color="orange"
        />
        <StatCard
          icon={TrendingUp}
          label="Satisfaction"
          value={`${bot.stats.satisfactionRate}%`}
          color="cyan"
        />
      </div>

      {/* Tabs */}
      <div className="border-b border-white/5">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white/[0.02] rounded-2xl border border-white/5 p-6">
        {activeTab === 'overview' && <OverviewTab bot={bot} />}
        {activeTab === 'knowledge' && <KnowledgeTab bot={bot} />}
        {activeTab === 'appearance' && <AppearanceTab bot={bot} />}
        {activeTab === 'settings' && <SettingsTab bot={bot} />}
        {activeTab === 'embed' && (
          <EmbedTab
            embedCode={embedCode}
            copied={copied}
            onCopy={copyCode}
          />
        )}
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}) {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500/10 text-blue-400',
    purple: 'bg-purple-500/10 text-purple-400',
    green: 'bg-green-500/10 text-green-400',
    orange: 'bg-orange-500/10 text-orange-400',
    cyan: 'bg-cyan-500/10 text-cyan-400',
  };

  return (
    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
      <div className={`inline-flex p-2 rounded-lg ${colorClasses[color]} mb-3`}>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

// Overview Tab
function OverviewTab({ bot }: { bot: typeof mockBot }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Conversations */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            Recent Conversations
          </h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-medium">
                    V{i}
                  </div>
                  <div>
                    <p className="text-sm text-white">Visitor #{1000 + i}</p>
                    <p className="text-xs text-gray-500">
                      Asked about equipment availability
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{i}h ago</span>
              </div>
            ))}
          </div>
          <Link
            href={`/agent-builder/${bot.id}/conversations`}
            className="block mt-4 text-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all conversations →
          </Link>
        </div>

        {/* Recent Leads */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-green-400" />
            Recent Leads
          </h3>
          <div className="space-y-3">
            {[
              { name: 'John Smith', email: 'john@example.com' },
              { name: 'Sarah Johnson', email: 'sarah@company.com' },
              { name: 'Mike Davis', email: 'mike@business.net' },
            ].map((lead, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-medium">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm text-white">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.email}</p>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-xs">
                  New
                </span>
              </div>
            ))}
          </div>
          <Link
            href={`/agent-builder/${bot.id}/leads`}
            className="block mt-4 text-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all leads →
          </Link>
        </div>
      </div>

      {/* Bot Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <p className="text-sm text-gray-400 mb-1">Bot Name</p>
          <p className="text-white font-medium">{bot.botName}</p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <p className="text-sm text-gray-400 mb-1">Tone</p>
          <p className="text-white font-medium capitalize">{bot.tone}</p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <p className="text-sm text-gray-400 mb-1">Industry</p>
          <p className="text-white font-medium capitalize">
            {bot.industry.replace('-', ' ')}
          </p>
        </div>
      </div>
    </div>
  );
}

// Knowledge Tab
function KnowledgeTab({ bot }: { bot: typeof mockBot }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-white">Knowledge Sources</h3>
          <p className="text-sm text-gray-400">
            Content your bot has been trained on
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors">
          <RefreshCw className="w-4 h-4" />
          Retrain Bot
        </button>
      </div>

      <div className="space-y-3">
        {bot.knowledgeSources.map((source, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5"
          >
            <div className="flex items-center gap-3">
              {source.type === 'url' ? (
                <Globe className="w-5 h-5 text-blue-400" />
              ) : (
                <FileText className="w-5 h-5 text-green-400" />
              )}
              <div>
                <p className="text-white">{source.value}</p>
                <p className="text-xs text-gray-500 capitalize">{source.type}</p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-xs">
              {source.status}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl border border-dashed border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-white transition-colors">
        + Add Knowledge Source
      </button>
    </div>
  );
}

// Appearance Tab
function AppearanceTab({ bot }: { bot: typeof mockBot }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-white">Visual Settings</h3>
        <p className="text-sm text-gray-400">Customize how your bot looks</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <p className="text-sm text-gray-400 mb-2">Avatar Type</p>
          <p className="text-white font-medium capitalize">{bot.avatarType}</p>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <p className="text-sm text-gray-400 mb-2">Colors</p>
          <div className="flex gap-2">
            <div
              className="w-8 h-8 rounded-full"
              style={{ background: bot.primaryColor }}
            />
            <div
              className="w-8 h-8 rounded-full"
              style={{ background: bot.accentColor }}
            />
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
        <p className="text-sm text-gray-400 mb-2">Greeting Message</p>
        <p className="text-white">{bot.greetingMessage}</p>
      </div>

      <Link
        href={`/agent-builder/${bot.id}/edit`}
        className="block text-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
      >
        Edit appearance →
      </Link>
    </div>
  );
}

// Settings Tab
function SettingsTab({ }: { bot: typeof mockBot }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-white">Bot Settings</h3>
        <p className="text-sm text-gray-400">Configure your bot behavior</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <div>
            <p className="text-white font-medium">Lead Capture</p>
            <p className="text-sm text-gray-400">
              Collect visitor contact information
            </p>
          </div>
          <div className="w-12 h-6 rounded-full bg-green-500 relative cursor-pointer">
            <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <div>
            <p className="text-white font-medium">Email Notifications</p>
            <p className="text-sm text-gray-400">Get notified of new leads</p>
          </div>
          <div className="w-12 h-6 rounded-full bg-green-500 relative cursor-pointer">
            <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
          <div>
            <p className="text-white font-medium">Human Handoff</p>
            <p className="text-sm text-gray-400">
              Allow escalation to human support
            </p>
          </div>
          <div className="w-12 h-6 rounded-full bg-white/10 relative cursor-pointer">
            <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white" />
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/5">
        <button className="text-red-400 hover:text-red-300 text-sm transition-colors">
          Delete this bot
        </button>
      </div>
    </div>
  );
}

// Embed Tab
function EmbedTab({
  embedCode,
  copied,
  onCopy,
}: {
  embedCode: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-white">Embed Code</h3>
        <p className="text-sm text-gray-400">
          Add this code to your website to display the chat widget
        </p>
      </div>

      <div className="relative">
        <pre className="p-4 rounded-xl bg-black/50 border border-white/10 overflow-x-auto">
          <code className="text-sm text-green-400">{embedCode}</code>
        </pre>
        <button
          onClick={onCopy}
          className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-sm transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>

      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
        <h4 className="font-medium text-white mb-2">Installation Instructions</h4>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
          <li>Copy the embed code above</li>
          <li>
            Paste it into your website&apos;s HTML, just before the closing{' '}
            <code className="px-1 py-0.5 rounded bg-black/30 text-blue-400">
              &lt;/body&gt;
            </code>{' '}
            tag
          </li>
          <li>Save and refresh your website</li>
          <li>The chat widget will appear in the bottom-right corner</li>
        </ol>
      </div>

      <div className="flex gap-4">
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          WordPress Guide
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Shopify Guide
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Wix Guide
        </a>
      </div>
    </div>
  );
}
