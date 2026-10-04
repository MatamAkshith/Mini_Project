import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Bot, 
  BookOpen, 
  Smile, 
  CheckSquare, 
  Target, 
  Sparkles, 
  Database, 
  Settings, 
  User, 
  Home,
  X,
  ShieldAlert
} from 'lucide-react';
import { mockUser } from '../data/mockData';

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'AI Companion', path: '/chat', icon: Bot, badge: 'Interactive' },
    { label: 'Journal', path: '/journal', icon: BookOpen },
    { label: 'Mood Tracking', path: '/mood', icon: Smile },
    { label: 'Habits', path: '/habits', icon: CheckSquare },
    { label: 'Goals', path: '/goals', icon: Target },
    { label: 'AI Insights', path: '/insights', icon: Sparkles },
    { label: 'Long-Term Memory', path: '/memories', icon: Database, badge: 'RAG Mock' },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-40 w-64 bg-slate-950/90 border-r border-slate-800/80 backdrop-blur-xl flex flex-col transition-transform duration-300 ease-in-out
        md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-800/60">
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg font-bold tracking-tight text-white">AURA</span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded">v1.0</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-tight">Academic Companion</p>
            </div>
          </NavLink>

          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden text-slate-400 hover:text-slate-200 p-1.5 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prototype Banner Note */}
        <div className="mx-4 mt-3 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-[11px] text-indigo-300 flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <span>Academic Showcase Preview. All data & AI components are mock rendered.</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
            Platform Menu
          </div>

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `
              flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-150 mb-2
              ${isActive 
                ? 'bg-slate-800 text-indigo-400 border border-slate-700' 
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}
            `}
          >
            <Home className="w-4 h-4 text-indigo-400" />
            <span>Landing Page</span>
          </NavLink>

          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-150
                  ${isActive 
                    ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/10 text-white border border-indigo-500/30 shadow-sm' 
                    : 'text-slate-400 hover:bg-slate-900/80 hover:text-slate-200'}
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 transition-colors ${
                    location.pathname === item.path ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-200'
                  }`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* User Profile Mini Footer */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/60">
          <NavLink 
            to="/profile" 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `
              flex items-center gap-3 p-2 rounded-xl transition-all
              ${isActive ? 'bg-indigo-950/40 border border-indigo-500/30' : 'hover:bg-slate-900'}
            `}
          >
            <img 
              src={mockUser.avatar} 
              alt={mockUser.name}
              className="w-9 h-9 rounded-xl object-cover ring-2 ring-indigo-500/30"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-200 truncate">{mockUser.name}</p>
              <p className="text-[10px] text-slate-400 truncate">{mockUser.role}</p>
            </div>
            <User className="w-4 h-4 text-slate-500 shrink-0" />
          </NavLink>
        </div>
      </aside>
    </>
  );
};
