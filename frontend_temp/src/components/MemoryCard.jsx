import React from 'react';
import { Database, Calendar, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { Badge } from './Badge';

export const MemoryCard = ({ memory, onClick }) => {
  const getImportanceColor = (imp) => {
    switch (imp) {
      case 'Critical': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      case 'High': return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
      case 'Medium': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel-hover cursor-pointer space-y-3 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge variant="indigo">
            <Database className="w-3 h-3 mr-1" />
            {memory.category}
          </Badge>

          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getImportanceColor(memory.importance)}`}>
            {memory.importance} Priority
          </span>
        </div>

        <h3 className="text-sm font-bold text-slate-100 font-heading flex items-center gap-1.5">
          {memory.topic}
        </h3>

        <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
          "{memory.summary}"
        </p>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-slate-400">
            <Calendar className="w-3 h-3 text-indigo-400" />
            {memory.extractedDate}
          </span>
        </div>

        <div className="flex items-center gap-1 text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          <Sparkles className="w-3 h-3" />
          <span>Cosine: {memory.vectorSim}</span>
        </div>
      </div>
    </div>
  );
};
