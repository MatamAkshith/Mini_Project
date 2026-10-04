import React from 'react';
import { Sparkles, Brain, Dumbbell, BookOpen, BookMarked, Check, Flame } from 'lucide-react';
import { Badge } from './Badge';

const iconMap = {
  Sparkles,
  Brain,
  Dumbbell,
  BookOpen,
  BookMarked
};

const daysLabel = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const HabitCard = ({ habit, onToggleDay }) => {
  const Icon = iconMap[habit.icon] || Sparkles;
  const completedCount = habit.completedDays.filter(Boolean).length;
  const targetPct = Math.round((completedCount / habit.targetDaysPerWeek) * 100);

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl bg-gradient-to-tr ${habit.color} text-white shadow-md shadow-indigo-500/10`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100 font-heading">{habit.name}</h3>
            <p className="text-[11px] text-slate-400">{habit.category} • {habit.timeOfDay}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
          <Flame className="w-3.5 h-3.5 fill-amber-400" />
          <span>{habit.streak}d streak</span>
        </div>
      </div>

      {/* 7 Day completion check grid */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px] text-slate-400 px-1">
          <span>Weekly Target: {completedCount}/{habit.targetDaysPerWeek} days</span>
          <span className="font-semibold text-indigo-400">{targetPct}%</span>
        </div>

        <div className="grid grid-cols-7 gap-1.5 pt-1">
          {habit.completedDays.map((isDone, idx) => (
            <button
              key={idx}
              onClick={() => onToggleDay && onToggleDay(habit.id, idx)}
              className={`
                h-9 rounded-xl flex flex-col items-center justify-center transition-all duration-150 border text-xs
                ${isDone 
                  ? 'bg-gradient-to-b from-indigo-600 to-indigo-700 border-indigo-500 text-white shadow-sm shadow-indigo-600/30' 
                  : 'bg-slate-950/60 border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300'}
              `}
              title={`Toggle day ${idx + 1}`}
            >
              <span className="text-[9px] opacity-70 leading-none">{daysLabel[idx]}</span>
              {isDone ? <Check className="w-3 h-3 mt-0.5" /> : <span className="text-[10px] mt-0.5">•</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
