import React from 'react';

export const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-slate-800 text-slate-300 border-slate-700",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
};
