import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { 
  Smile, 
  TrendingUp, 
  Calendar, 
  PieChart as PieIcon, 
  Zap, 
  Check, 
  HeartPulse,
  Sparkles
} from 'lucide-react';
import { mockMoodHistory, mockMoodDistribution } from '../data/mockData';
import { StatCard } from '../components/StatCard';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

const moodSelectors = [
  { label: 'Elated / Inspired', emoji: '🌟', score: 9, color: 'border-pink-500/50 bg-pink-500/10 text-pink-300' },
  { label: 'Focused & Energized', emoji: '🧠', score: 8, color: 'border-indigo-500/50 bg-indigo-500/10 text-indigo-300' },
  { label: 'Calm & Peaceful', emoji: '🧘‍♂️', score: 7, color: 'border-teal-500/50 bg-teal-500/10 text-teal-300' },
  { label: 'Mild Stress / Tired', emoji: '😓', score: 5, color: 'border-amber-500/50 bg-amber-500/10 text-amber-300' },
  { label: 'Anxious / Overwhelmed', emoji: '🌧️', score: 3, color: 'border-rose-500/50 bg-rose-500/10 text-rose-300' },
];

export const MoodPage = () => {
  const [moodLogs, setMoodLogs] = useState(mockMoodHistory);
  const [selectedMood, setSelectedMood] = useState(moodSelectors[1]);
  const [noteText, setNoteText] = useState('');
  const [loggedSuccess, setLoggedSuccess] = useState(false);

  const handleLogMood = (e) => {
    e.preventDefault();
    const newLog = {
      day: "Today",
      date: "Oct 04",
      score: selectedMood.score,
      mood: selectedMood.label.split(' ')[0],
      color: "#6366f1",
      notes: noteText || "Logged via Mood Tracker"
    };

    setMoodLogs([newLog, ...moodLogs]);
    setNoteText('');
    setLoggedSuccess(true);
    setTimeout(() => setLoggedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Mood Selector Banner */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 glass-panel space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-lg font-bold font-heading text-slate-100 flex items-center gap-2">
              <Smile className="w-5 h-5 text-indigo-400" />
              Log Current Emotional State
            </h2>
            <p className="text-xs text-slate-400">Select your current vibe to update long-term emotional analytics.</p>
          </div>
          <Badge variant="indigo">Daily Mood Check-in</Badge>
        </div>

        <form onSubmit={handleLogMood} className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {moodSelectors.map((m) => (
              <button
                type="button"
                key={m.label}
                onClick={() => setSelectedMood(m)}
                className={`
                  p-4 rounded-2xl border flex flex-col items-center justify-center transition-all cursor-pointer text-center space-y-1.5
                  ${selectedMood.label === m.label ? m.color + ' ring-2 ring-indigo-500 scale-105' : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'}
                `}
              >
                <span className="text-2xl">{m.emoji}</span>
                <span className="text-xs font-semibold">{m.label}</span>
                <span className="text-[10px] text-slate-400">Score: {m.score}/10</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Add optional notes (e.g. Finished capstone slides, feeling relieved)..."
              className="flex-1 px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
            />
            <Button type="submit" variant="primary" size="md" icon={Check}>
              Save Mood Check-in
            </Button>
          </div>

          {loggedSuccess && (
            <p className="text-xs text-emerald-400 flex items-center gap-1 font-semibold animate-fadeIn">
              <Sparkles className="w-4 h-4" />
              Emotional state logged! Synced with memory analytics.
            </p>
          )}
        </form>
      </div>

      {/* Mood Key Statistics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard 
          title="Resilience Index" 
          value="88 / 100" 
          change="+4 pts" 
          trend="up" 
          icon={HeartPulse} 
          color="emerald" 
          subtitle="High recovery rate post-stress"
        />
        <StatCard 
          title="7-Day Avg Score" 
          value="7.4 / 10" 
          change="Optimal" 
          trend="up" 
          icon={TrendingUp} 
          color="indigo" 
          subtitle="Stable emotional baseline"
        />
        <StatCard 
          title="Primary Emotional Mode" 
          value="Focused (40%)" 
          change="Productive" 
          trend="up" 
          icon={Zap} 
          color="purple" 
          subtitle="Deep work alignment"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Trend Recharts Area */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold font-heading text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-400" />
              Weekly Mood Score Trajectory
            </h3>
            <span className="text-xs text-slate-400">Oct 2026</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodLogs}>
                <defs>
                  <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#64748b" fontSize={11} />
                <YAxis domain={[0, 10]} stroke="#64748b" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.75rem', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} fill="url(#moodGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mood Distribution Recharts Donut */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold font-heading text-slate-100 flex items-center gap-2">
              <PieIcon className="w-4 h-4 text-purple-400" />
              Emotional Spectrum
            </h3>
            <span className="text-xs text-slate-400">Monthly</span>
          </div>

          <div className="h-48 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockMoodDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {mockMoodDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.75rem', fontSize: '11px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
            {mockMoodDistribution.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: m.color }} />
                  {m.name}
                </span>
                <span className="font-semibold text-slate-200">{m.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mood History Log Table */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel space-y-4">
        <h3 className="text-sm font-bold font-heading text-slate-100">Historical Mood Logs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800 uppercase text-[10px]">
              <tr>
                <th className="p-3">Day / Date</th>
                <th className="p-3">Mood State</th>
                <th className="p-3">Score</th>
                <th className="p-3">Context & Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {moodLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-semibold text-slate-200">{log.day} ({log.date})</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded-full text-[11px] bg-slate-800 border border-slate-700 text-indigo-300 font-medium">
                      {log.mood}
                    </span>
                  </td>
                  <td className="p-3 font-bold text-emerald-400">{log.score} / 10</td>
                  <td className="p-3 text-slate-400">{log.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
