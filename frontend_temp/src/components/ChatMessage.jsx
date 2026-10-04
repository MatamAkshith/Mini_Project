import React from 'react';
import { Bot, User, Sparkles, Database, HeartPulse } from 'lucide-react';
import { mockUser } from '../data/mockData';

export const ChatMessage = ({ message, onActionClick }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex gap-3 md:gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-6 group`}>
      {/* Avatar */}
      <div className="shrink-0">
        {isUser ? (
          <img 
            src={mockUser.avatar} 
            alt={mockUser.name}
            className="w-8 h-8 md:w-9 md:h-9 rounded-xl object-cover ring-2 ring-indigo-500/30"
          />
        ) : (
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
          </div>
        )}
      </div>

      {/* Message Content Container */}
      <div className={`max-w-[85%] md:max-w-[75%] space-y-2 ${isUser ? 'items-end' : 'items-start'}`}>
        {/* Header line */}
        <div className={`flex items-center gap-2 text-[11px] text-slate-400 ${isUser ? 'justify-end' : 'justify-start'}`}>
          <span className="font-semibold text-slate-300">{isUser ? mockUser.name : 'WaveMind Companion'}</span>
          <span>•</span>
          <span>{message.timestamp}</span>
        </div>

        {/* Bubble */}
        <div className={`
          p-4 rounded-2xl text-xs md:text-sm leading-relaxed whitespace-pre-line shadow-md
          ${isUser 
            ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-tr-xs border border-indigo-500/30' 
            : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-xs'}
        `}>
          {message.text}
        </div>

        {/* Emotion / Memory context tags for AI message */}
        {!isUser && (
          <div className="space-y-2 pt-1">
            {message.contextUsed && message.contextUsed.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                <span className="text-slate-500 flex items-center gap-1 font-medium">
                  <Database className="w-3 h-3 text-indigo-400" />
                  RAG Memories:
                </span>
                {message.contextUsed.map((ctx, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {ctx}
                  </span>
                ))}
              </div>
            )}

            {message.emotionDetected && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-semibold">
                <HeartPulse className="w-3 h-3" />
                <span>Emotion Context: {message.emotionDetected}</span>
              </div>
            )}

            {/* Suggested actions */}
            {message.suggestedActions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {message.suggestedActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => onActionClick && onActionClick(action)}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 hover:border-indigo-500/50 transition-all cursor-pointer"
                  >
                    ⚡ {action}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
