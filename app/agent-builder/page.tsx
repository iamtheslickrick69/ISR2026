'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Plus,
  Bot,
  MessageSquare,
  Users,
  TrendingUp,
  MoreVertical,
  Settings,
  Trash2,
  Pause,
  Play,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  Clock,
} from 'lucide-react';

// Mock data for demonstration
const mockBots = [
  {
    id: '1',
    name: 'St. George Rentals Assistant',
    domain: 'stgeorgerentals.com',
    status: 'active',
    conversations: 142,
    leads: 23,
    lastActive: '2 hours ago',
    avatarType: 'orb',
    primaryColor: '#3B82F6',
  },
  {
    id: '2',
    name: 'Support Bot',
    domain: 'example.com',
    status: 'draft',
    conversations: 0,
    leads: 0,
    lastActive: 'Never',
    avatarType: 'circle',
    primaryColor: '#10B981',
  },
];

const stats = [
  {
    name: 'Total Conversations',
    value: '1,234',
    change: '+12%',
    changeType: 'positive',
    icon: MessageSquare,
  },
  {
    name: 'Leads Captured',
    value: '89',
    change: '+23%',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: 'Response Rate',
    value: '94%',
    change: '+5%',
    changeType: 'positive',
    icon: TrendingUp,
  },
  {
    name: 'Active Bots',
    value: '2',
    change: '0',
    changeType: 'neutral',
    icon: Bot,
  },
];

export default function AgentBuilderDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Manage your AI agents and track performance</p>
        </div>
        <Link
          href="/agent-builder/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/25"
        >
          <Plus className="w-5 h-5" />
          Create New Bot
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10">
                <stat.icon className="w-5 h-5 text-blue-400" />
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.changeType === 'positive'
                    ? 'text-green-400'
                    : stat.changeType === 'negative'
                    ? 'text-red-400'
                    : 'text-gray-400'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-gray-400 mt-1">{stat.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Bots Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Your Bots</h2>
          <Link
            href="/agent-builder/new"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
          >
            View all
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bots Grid */}
        {mockBots.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {mockBots.map((bot, index) => (
              <BotCard key={bot.id} bot={bot} index={index} />
            ))}

            {/* Create New Bot Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: mockBots.length * 0.1 }}
            >
              <Link
                href="/agent-builder/new"
                className="flex flex-col items-center justify-center h-full min-h-[200px] p-6 rounded-2xl border-2 border-dashed border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-200 group"
              >
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-blue-500/10 transition-colors mb-4">
                  <Plus className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-lg font-medium text-gray-400 group-hover:text-white transition-colors">
                  Create New Bot
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Add an AI agent to your website
                </p>
              </Link>
            </motion.div>
          </div>
        ) : (
          <EmptyState />
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <QuickActionCard
          icon={Sparkles}
          title="Quick Setup Guide"
          description="Learn how to create your first AI agent in under 10 minutes"
          href="/agent-builder/guide"
          color="blue"
        />
        <QuickActionCard
          icon={MessageSquare}
          title="View Conversations"
          description="See what your customers are asking your AI agents"
          href="/agent-builder/conversations"
          color="green"
        />
        <QuickActionCard
          icon={Users}
          title="Manage Leads"
          description="Review and export leads captured by your bots"
          href="/agent-builder/leads"
          color="purple"
        />
      </div>
    </div>
  );
}

// Bot Card Component
function BotCard({ bot, index }: { bot: typeof mockBots[0]; index: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmbedCode = () => {
    const code = `<script src="https://haestus.dev/widget/agent.js" data-bot-id="${bot.id}"></script>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Bot Avatar */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${bot.primaryColor}20, ${bot.primaryColor}40)`,
            }}
          >
            <Bot className="w-6 h-6" style={{ color: bot.primaryColor }} />
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
              {bot.name}
            </h3>
            <p className="text-sm text-gray-500">{bot.domain}</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium ${
              bot.status === 'active'
                ? 'bg-green-500/10 text-green-400'
                : 'bg-yellow-500/10 text-yellow-400'
            }`}
          >
            {bot.status === 'active' ? 'Active' : 'Draft'}
          </span>

          {/* More Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {menuOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setMenuOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1 w-48 py-2 rounded-xl bg-[#1a1a24] border border-white/10 shadow-xl z-20">
                  <Link
                    href={`/agent-builder/${bot.id}`}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Edit Bot
                  </Link>
                  <button
                    onClick={copyEmbedCode}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors w-full"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {copied ? 'Copied!' : 'Copy Embed Code'}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors w-full">
                    {bot.status === 'active' ? (
                      <>
                        <Pause className="w-4 h-4" />
                        Pause Bot
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Activate Bot
                      </>
                    )}
                  </button>
                  <div className="h-px bg-white/5 my-2" />
                  <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-colors w-full">
                    <Trash2 className="w-4 h-4" />
                    Delete Bot
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-6 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-400">
            <span className="text-white font-medium">{bot.conversations}</span> conversations
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-400">
            <span className="text-white font-medium">{bot.leads}</span> leads
          </span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-500">{bot.lastActive}</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mt-4">
        <Link
          href={`/agent-builder/${bot.id}`}
          className="flex-1 py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium text-center transition-colors"
        >
          Manage
        </Link>
        <Link
          href={`/agent-builder/${bot.id}/analytics`}
          className="flex-1 py-2 px-4 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-sm font-medium text-center transition-colors"
        >
          View Analytics
        </Link>
      </div>
    </motion.div>
  );
}

// Empty State Component
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-8 rounded-2xl bg-white/[0.02] border border-white/5"
    >
      <div className="p-6 rounded-2xl bg-blue-500/10 mb-6">
        <Bot className="w-12 h-12 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">No bots yet</h3>
      <p className="text-gray-400 text-center max-w-md mb-6">
        Create your first AI agent to start engaging with your website visitors 24/7.
        It only takes 10 minutes!
      </p>
      <Link
        href="/agent-builder/new"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium transition-all duration-200"
      >
        <Plus className="w-5 h-5" />
        Create Your First Bot
      </Link>
    </motion.div>
  );
}

// Quick Action Card Component
function QuickActionCard({
  icon: Icon,
  title,
  description,
  href,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  color: 'blue' | 'green' | 'purple';
}) {
  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-400',
    green: 'bg-green-500/10 text-green-400',
    purple: 'bg-purple-500/10 text-purple-400',
  };

  return (
    <Link
      href={href}
      className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-200 group"
    >
      <div className={`inline-flex p-3 rounded-xl ${colorClasses[color]} mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
    </Link>
  );
}
