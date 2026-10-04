import React from 'react';
import { Target, Calendar, CheckCircle2, Circle } from 'lucide-react';
import { Badge } from './Badge';

export const GoalCard = ({ goal, onToggleMilestone }) => {
  const getCategoryBadge = (cat) => {
    switch (cat) {
      case 'Learning': return 'indigo';
      case 'Career': return 'purple';
      case 'Health': return 'emerald';
      case 'Personal': return 'amber';
      default: return 'default';
    }
  };

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-4">
      <div>
        <div className="flex items-start justify-between gap-2">
          <Badge variant={getCategoryBadge(goal.category)}>
            {goal.category}
          </Badge>
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-400" />
            {goal.deadline}
          </span>
        </div>

        <h3 className="text-base font-semibold text-slate-100 font-heading mt-3">
          {goal.title}
        </h3>
        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
          {goal.description}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">Progress</span>
          <span className="font-semibold text-indigo-400">{goal.progress}%</span>
        </div>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 rounded-full"
            style={{ width: `${goal.progress}%` }}
          />
        </div>
      </div>

      {/* Milestones list */}
      <div className="pt-3 border-t border-slate-800/80 space-y-2">
        <span className="text-[11px] font-semibold text-slate-400 block">Milestones</span>
        {goal.milestones.map((m, idx) => (
          <div 
            key={idx}
            onClick={() => onToggleMilestone && onToggleMilestone(goal.id, idx)}
            className="flex items-center gap-2 text-xs text-slate-300 hover:text-white cursor-pointer group"
          >
            {m.done ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <Circle className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 shrink-0" />
            )}
            <span className={m.done ? 'line-through text-slate-500' : ''}>{m.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
