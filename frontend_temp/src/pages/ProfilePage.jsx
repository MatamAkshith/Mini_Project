import React from 'react';
import { 
  User, 
  Award, 
  Flame, 
  Target, 
  Sparkles, 
  BookOpen, 
  Calendar, 
  Database,
  HeartHandshake
} from 'lucide-react';
import { mockUser, mockGoals } from '../data/mockData';
import { Badge } from '../components/Badge';
import { StatCard } from '../components/StatCard';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* User Bio Header Card */}
      <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-purple-950/60 border border-slate-800 shadow-2xl glass-panel space-y-6 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <img
            src={mockUser.avatar}
            alt={mockUser.name}
            className="w-24 h-24 rounded-2xl object-cover ring-4 ring-indigo-500/40 shadow-xl"
          />

          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold font-heading text-slate-100">{mockUser.name}</h2>
              <Badge variant="indigo">{mockUser.role}</Badge>
              <Badge variant="emerald">Member since {mockUser.joinedDate}</Badge>
            </div>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {mockUser.bio}
            </p>

            {/* Core Values */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-[10px] uppercase font-semibold text-slate-400 self-center">Core Values:</span>
              {mockUser.coreValues.map((val, idx) => (
                <span key={idx} className="px-2.5 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
                  ✦ {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lifetime Growth Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard 
          title="Journals Authored" 
          value={mockUser.stats.totalJournals} 
          change="Consistent" 
          trend="up" 
          icon={BookOpen} 
          color="indigo" 
        />
        <StatCard 
          title="Companion Chats" 
          value={mockUser.stats.conversationsHeld} 
          change="Empathetic" 
          trend="up" 
          icon={Sparkles} 
          color="purple" 
        />
        <StatCard 
          title="Habits Ticked" 
          value={mockUser.stats.habitsCompleted} 
          change="Rituals" 
          trend="up" 
          icon={Flame} 
          color="amber" 
        />
        <StatCard 
          title="Insights Synthesized" 
          value={mockUser.stats.insightsGenerated} 
          change="Reflective" 
          trend="up" 
          icon={Award} 
          color="emerald" 
        />
      </div>

      {/* Active Academic Goals Summary */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-base font-bold font-heading text-slate-100 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            Active Academic & Personal Objectives
          </h3>
          <Button variant="outline" size="sm" onClick={() => navigate('/goals')}>
            Manage Goals →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockGoals.slice(0, 2).map((goal) => (
            <div key={goal.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200">{goal.title}</span>
                <span className="text-[10px] font-bold text-indigo-400">{goal.progress}%</span>
              </div>
              <p className="text-[11px] text-slate-400">{goal.description}</p>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${goal.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
