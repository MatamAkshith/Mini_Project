import React from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Lightbulb, 
  Brain, 
  Zap, 
  ShieldAlert, 
  ArrowRight,
  Database
} from 'lucide-react';
import { mockInsights, mockUser } from '../data/mockData';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const InsightsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Weekly AI Synthesis Header */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/30 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-500/20 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <h2 className="text-xl font-bold font-heading text-white">AI Weekly Reflection & Cognitive Synthesis</h2>
          </div>
          <Badge variant="purple">Synthesis Window: Sep 28 – Oct 04</Badge>
        </div>

        <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-3xl">
          "{mockInsights.weeklySummary}"
        </p>

        <div className="pt-2 flex flex-wrap gap-4 text-xs text-purple-300">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Emotional Resilience: <strong>88% (+5%)</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <Database className="w-4 h-4 text-indigo-400" />
            Context Memory Anchors: <strong>12 Active Vectors</strong>
          </span>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="space-y-3">
        <h3 className="text-base font-bold font-heading text-slate-100 flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          Key Growth Highlights
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockInsights.highlights.map((h, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel space-y-2">
              <span className={`text-xs font-semibold ${h.color} flex items-center gap-1.5`}>
                ⚡ {h.title}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations Visual Cards */}
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-bold font-heading text-slate-100 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-indigo-400" />
            Personalized Action Recommendations
          </h3>
          <p className="text-xs text-slate-400">Pre-computed guidance matching your past stress & habit patterns</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockInsights.recommendations.map((rec, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="indigo">{rec.type}</Badge>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {rec.impact}
                  </span>
                </div>

                <h4 className="text-base font-bold font-heading text-slate-100">{rec.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  {rec.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                <span className="text-[11px] text-slate-400">Confidence Score: 94%</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  icon={ArrowRight}
                  onClick={() => navigate('/chat')}
                >
                  Discuss with AURA
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Correlation Matrices Table */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel space-y-4">
        <h3 className="text-base font-bold font-heading text-slate-100 flex items-center gap-2">
          <Brain className="w-4 h-4 text-purple-400" />
          Behavioral & Emotional Correlation Metrics
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {mockInsights.correlations.map((c, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 block">{c.metric}</span>
              <span className="text-base font-bold font-heading text-indigo-400">{c.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
