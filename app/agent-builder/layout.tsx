'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  LayoutDashboard,
  Plus,
  Settings,
  BarChart3,
  MessageSquare,
  Users,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Bell,
  Search,
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', href: '/agent-builder', icon: LayoutDashboard },
  { name: 'Create Bot', href: '/agent-builder/new', icon: Plus },
];

const secondaryNavItems: NavItem[] = [
  { name: 'Analytics', href: '/agent-builder/analytics', icon: BarChart3 },
  { name: 'Conversations', href: '/agent-builder/conversations', icon: MessageSquare, badge: 12 },
  { name: 'Leads', href: '/agent-builder/leads', icon: Users, badge: 5 },
];

const bottomNavItems: NavItem[] = [
  { name: 'Settings', href: '/agent-builder/settings', icon: Settings },
  { name: 'Help', href: '/agent-builder/help', icon: HelpCircle },
];

export default function AgentBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/agent-builder') {
      return pathname === '/agent-builder';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarCollapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 top-0 h-screen bg-[#12121a] border-r border-white/5 flex flex-col z-50"
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/5">
          <Link href="/agent-builder" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-semibold text-white text-lg">Agent Builder</span>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-6 overflow-y-auto">
          {/* Main Nav */}
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                isActive={isActive(item.href)}
                collapsed={sidebarCollapsed}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Secondary Nav */}
          <div className="space-y-1">
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-2"
                >
                  Insights
                </motion.p>
              )}
            </AnimatePresence>
            {secondaryNavItems.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                isActive={isActive(item.href)}
                collapsed={sidebarCollapsed}
              />
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-3 space-y-1 border-t border-white/5">
          {bottomNavItems.map((item) => (
            <NavLink
              key={item.name}
              item={item}
              isActive={isActive(item.href)}
              collapsed={sidebarCollapsed}
            />
          ))}

          {/* Upgrade Card */}
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-white">Upgrade to Pro</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  Get unlimited bots and advanced analytics
                </p>
                <button className="w-full py-2 px-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors">
                  Upgrade Now
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-[280px]'
        }`}
      >
        {/* Top Header */}
        <header className="h-16 bg-[#12121a]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search bots, conversations..."
                className="w-80 h-10 pl-10 pr-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-sm font-medium">
                U
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-white">User</p>
                <p className="text-xs text-gray-500">Free Plan</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

// Navigation Link Component
function NavLink({
  item,
  isActive,
  collapsed,
}: {
  item: NavItem;
  isActive: boolean;
  collapsed: boolean;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={`
        flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative
        ${
          isActive
            ? 'bg-blue-500/10 text-blue-400'
            : 'text-gray-400 hover:bg-white/5 hover:text-white'
        }
      `}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-400' : ''}`} />

      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="font-medium text-sm"
          >
            {item.name}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Badge */}
      {item.badge && !collapsed && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="ml-auto px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium"
        >
          {item.badge}
        </motion.span>
      )}

      {/* Active Indicator */}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full"
        />
      )}

      {/* Tooltip for collapsed state */}
      {collapsed && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
          {item.name}
        </div>
      )}
    </Link>
  );
}
