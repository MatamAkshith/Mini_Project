import React from 'react';

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  icon: Icon,
  ...props 
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/20 border border-indigo-500/30",
    secondary: "bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/60 shadow-sm",
    emerald: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/20 border border-emerald-500/30",
    outline: "bg-transparent hover:bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-slate-600",
    ghost: "bg-transparent hover:bg-slate-800/60 text-slate-400 hover:text-slate-200",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-4 py-2.5 text-sm rounded-xl gap-2 font-medium",
    lg: "px-6 py-3.5 text-base rounded-2xl gap-2.5 font-semibold",
  };

  return (
    <button 
      className={`inline-flex items-center justify-center transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
};
