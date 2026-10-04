import React from 'react';
import { Calendar, Clock, HeartHandshake, Tag, Smile } from 'lucide-react';
import { Badge } from './Badge';

export const JournalCard = ({ entry, onClick }) => {
  const getSentimentVariant = (sentiment) => {
    if (sentiment.includes('Positive') || sentiment.includes('Inspired')) return 'emerald';
    if (sentiment.includes('Reflective') || sentiment.includes('Neutral')) return 'indigo';
    return 'amber';
  };

  return (
    <div 
      onClick={onClick}
      className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-panel-hover cursor-pointer space-y-3 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span>{entry.date}</span>
            <span>•</span>
            <Clock className="w-3 h-3 text-slate-500" />
            <span>{entry.time}</span>
          </div>

          <Badge variant={getSentimentVariant(entry.sentiment)}>
            <Smile className="w-3 h-3 mr-1" />
            {entry.mood} ({entry.moodScore}/10)
          </Badge>
        </div>

        <h3 className="text-base font-bold text-slate-100 font-heading">
          {entry.title}
        </h3>

        <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
          {entry.content}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-[11px] text-indigo-400 hover:underline font-medium">View Entry →</span>
      </div>
    </div>
  );
};
