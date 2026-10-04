import React from 'react';

export const StatCard = ({ title, value, change, trend = "up", icon: Icon, color = "indigo", subtitle }) => {
  const gradientStyles = {
    indigo: "from-indigo-500/20 via-indigo-500/5 to-transparent border-indigo-500/30 text-indigo-400",
    emerald: "from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-400",
    amber: "from-amber-500/20 via-amber-500/5 to-transparent border-amber-500/30 text-amber-400",
    purple: "from-purple-500/20 via-purple-500/5 to-transparent border-purple-500/30 text-purple-400",
    rose: "from-rose-500/20 via-rose-500/5 to-transparent border-rose-500/30 text-rose-400",
  };

  return (
    <div className={`relative p-5 rounded-2xl bg-gradient-to-br bg-slate-900/90 border backdrop-blur-md overflow-hidden glass-panel-hover ${gradientStyles[color] || gradientStyles.indigo}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">{title}</span>
        {Icon && (
          <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <span className="text-2xl md:text-3xl font-bold font-heading text-slate-100">{value}</span>
        {change && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            trend === 'up' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
          }`}>
            {trend === 'up' ? '↑' : '↓'} {change}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="text-[11px] text-slate-400 mt-2 truncate">{subtitle}</p>
      )}
    </div>
  );
};
