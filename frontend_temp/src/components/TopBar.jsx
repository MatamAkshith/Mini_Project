import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { 
  Menu, 
  Bell, 
  Search, 
  Plus, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  X,
  Bot
} from 'lucide-react';
import { mockUser } from '../data/mockData';
import { Button } from './Button';

export const TopBar = ({ toggleSidebar, onOpenQuickAction }) => {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const getPageTitle = (path) => {
    switch (path) {
      case '/': return { title: 'Academic Project Showcase', desc: ' AI Companion Platform Concept' };
      case '/dashboard': return { title: 'Personal Dashboard', desc: 'Welcome back, Alex. Here is your growth synthesis.' };
      case '/chat': return { title: 'AI Emotional Companion', desc: 'Empathetic conversation grounded in long-term memory' };
      case '/journal': return { title: 'Emotional Wellness Journal', desc: 'Reflect on your experiences, emotions & insights' };
      case '/mood': return { title: 'Mood & Emotional Analytics', desc: 'Track emotional state trends & resilience scores' };
      case '/habits': return { title: 'Habit Consistency Tracker', desc: 'Build daily rituals aligned with your core values' };
      case '/goals': return { title: 'Goals & Milestone Management', desc: 'Track progress toward academic & personal objectives' };
      case '/insights': return { title: 'Personal Growth Insights', desc: 'AI-generated reflections based on behavioral data' };
      case '/memories': return { title: 'Long-Term Memory Graph', desc: 'Visual representation of extracted user context' };
      case '/settings': return { title: 'Platform Settings', desc: 'Manage profile preferences & memory privacy controls' };
      case '/profile': return { title: 'User Profile & Bio', desc: 'Overview of personal achievements & core values' };
      default: return { title: 'AURA Platform', desc: 'Personal Growth & Memory Ecosystem' };
    }
  };

  const pageInfo = getPageTitle(location.pathname);

  const mockNotifications = [
    { id: 1, title: 'Habit Milestone', desc: '14-day streak on Morning Meditation achieved!', time: '10m ago', icon: Sparkles, color: 'text-amber-400' },
    { id: 2, title: 'AI Reflection Ready', desc: 'Weekly emotional resilience score updated (+5%).', time: '1h ago', icon: Bot, color: 'text-indigo-400' },
    { id: 3, title: 'Goal Milestone', desc: 'UI Wireframes for Capstone marked completed.', time: '3h ago', icon: CheckCircle2, color: 'text-emerald-400' },
  ];

  return (
    <header className="sticky top-0 z-30 h-16 bg-slate-950/80 border-b border-slate-800/80 backdrop-blur-xl px-4 md:px-8 flex items-center justify-between">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900 md:hidden transition-colors"
          aria-label="Toggle Navigation Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-base md:text-lg font-bold text-slate-100 font-heading leading-tight flex items-center gap-2">
            {pageInfo.title}
          </h1>
          <p className="text-[11px] text-slate-400 hidden sm:block truncate max-w-md">
            {pageInfo.desc}
          </p>
        </div>
      </div>

      {/* Right: Actions, Date, Notifications, User */}
      <div className="flex items-center gap-2.5 sm:gap-4">
        {/* Date pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
          <span>Sunday, Oct 04, 2026</span>
        </div>

        {/* Search button mockup */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
          title="Search memories & journals"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Quick Action Button */}
        <Button 
          variant="primary" 
          size="sm" 
          icon={Plus}
          onClick={onOpenQuickAction}
          className="hidden sm:inline-flex"
        >
          New Entry
        </Button>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 p-4 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-xs font-semibold text-slate-200">System Notifications</h4>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="text-slate-400 hover:text-slate-200 text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-3 space-y-3">
                {mockNotifications.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex gap-3 p-2 rounded-xl hover:bg-slate-800/50 transition-colors">
                      <div className={`p-2 rounded-xl bg-slate-800 shrink-0 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-200">{item.title}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                        <span className="text-[10px] text-indigo-400 mt-1 block">{item.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pt-3 mt-3 border-t border-slate-800 text-center">
                <span className="text-[10px] text-slate-500">All notifications synced with long-term memory</span>
              </div>
            </div>
          )}
        </div>

        {/* User Avatar */}
        <NavLink to="/profile" className="flex items-center gap-2 pl-2 border-l border-slate-800">
          <img 
            src={mockUser.avatar} 
            alt={mockUser.name}
            className="w-8 h-8 rounded-xl object-cover ring-2 ring-indigo-500/30 hover:ring-indigo-500 transition-all"
          />
        </NavLink>
      </div>

      {/* Quick Search Overlay Mockup */}
      {showSearch && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-20 p-4">
          <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl space-y-3">
            <div className="flex items-center gap-3 px-3 py-2 bg-slate-950 rounded-xl border border-slate-800">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search memories, journals, goals or chat logs..." 
                className="w-full bg-transparent text-xs text-slate-100 focus:outline-none"
                autoFocus
              />
              <button onClick={() => setShowSearch(false)} className="text-xs text-slate-400">ESC</button>
            </div>
            <div className="text-[11px] text-slate-400 px-2">
              <p className="font-semibold mb-1 text-slate-300">Quick Filters:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700">#Capstone</span>
                <span className="px-2 py-1 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700">#Meditation</span>
                <span className="px-2 py-1 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700">#Anxiety Triggers</span>
                <span className="px-2 py-1 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700">#DeepWork</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
