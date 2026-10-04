import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';
import { 
  Sparkles, 
  Flame, 
  Smile, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Database,
  Calendar,
  Zap
} from 'lucide-react';
import { 
  mockUser, 
  mockMoodHistory, 
  mockGoals, 
  mockHabits, 
  mockJournalEntries,
  mockInsights
} from '../data/mockData';
import { StatCard } from '../components/StatCard';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { JournalCard } from '../components/JournalCard';

export const Dashboard = ({ onOpenQuickAction }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Welcome Banner Card */}
      <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/90 border border-indigo-500/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                AI Growth Assistant Active
              </span>
              <span className="text-xs text-slate-400">Oct 04, 2026</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-white tracking-tight">
              Good evening, {mockUser.name} 👋
            </h2>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              "You've maintained a 14-day meditation streak and solved key blockers for your Capstone review. Your emotional resilience index is up by +5% this week!"
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button 
              variant="primary" 
              size="md" 
              icon={Bot}
              onClick={() => navigate('/chat')}
            >
              Chat with AURA
            </Button>
            <Button 
              variant="secondary" 
              size="md" 
              icon={Plus}
              onClick={onOpenQuickAction}
            >
              Log Entry
            </Button>
          </div>
        </div>
      </div>

      {/* Grid of Key Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Current Mood State"
          value="Elated (8/10)"
          change="Resilient"
          trend="up"
          icon={Smile}
          color="emerald"
          subtitle="Post-meditation focus session"
        />
        <StatCard 
          title="Habit Streak"
          value="14 Days"
          change="+3 vs last wk"
          trend="up"
          icon={Flame}
          color="amber"
          subtitle="Morning Meditation & Deep Work"
        />
        <StatCard 
          title="Goal Progress"
          value="85%"
          change="Capstone On Track"
          trend="up"
          icon={Target}
          color="indigo"
          subtitle="3 of 4 key milestones finished"
        />
        <StatCard 
          title="Memory Index Logs"
          value="42 Logs"
          change="RAG Synced"
          trend="up"
          icon={Database}
          color="purple"
          subtitle="Personal preferences & milestones"
        />
      </div>

      {/* Mood Trend Chart & Today's Targets Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Recharts Weekly Mood Trend */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-bold font-heading text-slate-100 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
                Weekly Mood & Emotional Energy Trend
              </h3>
              <p className="text-xs text-slate-400">7-day self-reported emotional score tracking (1 to 10)</p>
            </div>

            <Badge variant="indigo">Static Mock Graph</Badge>
          </div>

          {/* Recharts Area Chart */}
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockMoodHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} />
                <YAxis domain={[0, 10]} stroke="#64748b" fontSize={11} tickLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    borderColor: '#334155', 
                    borderRadius: '0.75rem',
                    color: '#f8fafc',
                    fontSize: '12px'
                  }}
                  formatter={(value) => [`${value} / 10`, 'Mood Score']}
                />
                <Area 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#6366f1" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorMood)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center text-xs">
            <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Avg Mood</span>
              <span className="font-bold text-slate-200">7.4 / 10</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Peak Emotion</span>
              <span className="font-bold text-emerald-400">Inspired (9/10)</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Lowest Trigger</span>
              <span className="font-bold text-amber-400">Wed Midterm</span>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Today's Action Items & Personal Insight */}
        <div className="space-y-6 flex flex-col justify-between">
          {/* AI Insight Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 border border-purple-500/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
              <Zap className="w-4 h-4 text-purple-400 fill-purple-400" />
              <span>AI Personal Insight Card</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              "{mockInsights.weeklySummary}"
            </p>
            <div className="pt-2 flex justify-end">
              <button 
                onClick={() => navigate('/insights')}
                className="text-xs font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1"
              >
                View Reflection Synthesis →
              </button>
            </div>
          </div>

          {/* Today's Goals preview */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex-1 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold font-heading text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                Today's Core Priorities
              </h3>
              <button onClick={() => navigate('/goals')} className="text-[11px] text-indigo-400 hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-2.5">
              {mockGoals[0].milestones.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${m.done ? 'text-emerald-400' : 'text-slate-600'}`} />
                    <span className={m.done ? 'line-through text-slate-500' : 'text-slate-200 font-medium'}>
                      {m.text}
                    </span>
                  </div>
                  <Badge variant={m.done ? 'emerald' : 'indigo'}>
                    {m.done ? 'Done' : 'Pending'}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Journal Activity Row */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-heading text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              Recent Journal Reflections
            </h3>
            <p className="text-xs text-slate-400">Captured emotional thoughts & auto-extracted themes</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => navigate('/journal')}>
            Journal Page →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockJournalEntries.map((entry) => (
            <JournalCard 
              key={entry.id} 
              entry={entry} 
              onClick={() => navigate('/journal')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
