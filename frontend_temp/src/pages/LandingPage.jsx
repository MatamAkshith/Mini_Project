import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  HeartHandshake, 
  Database, 
  LineChart, 
  ArrowRight, 
  ShieldCheck, 
  Bot, 
  Target, 
  Compass,
  CheckCircle2,
  Lock,
  Cpu
} from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Landing Top Navbar */}
      <nav className="h-20 border-b border-slate-800/80 px-6 md:px-12 flex items-center justify-between bg-slate-950/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <span className="font-heading text-xl font-bold tracking-tight text-white">AURA</span>
            <span className="ml-2 text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Academic Showcase
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-xs font-semibold text-slate-300 hover:text-indigo-400 transition-colors hidden sm:block"
          >
            Explore Dashboard
          </button>
          <Button 
            variant="primary" 
            size="md" 
            icon={ArrowRight}
            onClick={() => navigate('/dashboard')}
          >
            Launch Prototype
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Glow backdrop decorative blobs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 blur-3xl pointer-events-none rounded-full" />

        <Badge variant="indigo" className="mb-6 px-4 py-1.5 text-xs uppercase tracking-wider font-semibold">
          🎓 Academic Mini Project Showcase
        </Badge>

        <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight max-w-4xl text-slate-100 leading-tight">
          AI-Powered <span className="gradient-text">Emotional Companion</span> & Personal Growth Platform
        </h1>

        <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
          A high-fidelity frontend prototype illustrating long-term memory synthesis, empathetic conversational support, and personalized growth recommendations for student wellness.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button 
            variant="primary" 
            size="lg" 
            icon={ArrowRight}
            onClick={() => navigate('/dashboard')}
            className="w-full sm:w-auto"
          >
            Start Your Journey
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            icon={Bot}
            onClick={() => navigate('/chat')}
            className="w-full sm:w-auto"
          >
            Try AI Companion Demo
          </Button>
        </div>

        {/* Visual Mock Showcase Hero Container */}
        <div className="mt-16 w-full max-w-5xl rounded-3xl p-3 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent border border-slate-700/60 shadow-2xl backdrop-blur-xl animate-float">
          <div className="rounded-2xl bg-slate-900 overflow-hidden border border-slate-800 p-4 md:p-6 text-left space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 font-mono ml-2">aura.academic.internal/prototype/v1</span>
              </div>
              <Badge variant="emerald">Live Visual State</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Current Emotional State</span>
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-xl font-bold font-heading text-emerald-400">Elated & Focused (8/10)</p>
                <p className="text-[11px] text-slate-400">Resilience Index: 88% (+5% this week)</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Active Habit Streak</span>
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                </div>
                <p className="text-xl font-bold font-heading text-indigo-400">14 Days Consecutive</p>
                <p className="text-[11px] text-slate-400">Morning Meditation & Deep Work</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Long-Term Memories</span>
                  <Database className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-xl font-bold font-heading text-purple-400">42 Context Logs</p>
                <p className="text-[11px] text-slate-400">Semantic Indexing & RAG Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Pillars Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-900 w-full">
        <div className="text-center space-y-3 mb-16">
          <Badge variant="purple">Architectural Pillars</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Designed for Student Well-Being</h2>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Combining empathetic conversational interfaces with long-term memory representation and goal tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 glass-panel-hover space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-100">Emotional Awareness</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Real-time mood logging, weekly resilience trend charts, and sentiment breakdown to catch academic stress signals early.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 glass-panel-hover space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-100">Personal Growth</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Habit matrix tracking, milestone completion for learning & health, and daily consistency streaks.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 glass-panel-hover space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-100">Long-Term Context</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Visual representation of a vector memory store indexing user preferences, major events, and core values over time.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 glass-panel-hover space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-100">Personalized Insights</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pre-rendered recommendation cards synthesizing mood triggers with habit productivity to maximize student balance.
            </p>
          </div>
        </div>
      </section>

      {/* Banner / Academic Notice */}
      <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto w-full mb-12">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 border border-indigo-500/30 text-center space-y-4">
          <Badge variant="indigo" className="mx-auto">Prototype Project Scope</Badge>
          <h3 className="text-2xl font-bold font-heading text-slate-100">Ready for Project Presentation</h3>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            This application is constructed strictly as a frontend visual interface for academic evaluation. Navigating through the prototype will reveal all proposed modules in realistic interactive state.
          </p>
          <Button 
            variant="primary" 
            size="md" 
            icon={ArrowRight}
            onClick={() => navigate('/dashboard')}
            className="mt-2"
          >
            Enter Full Dashboard Review
          </Button>
        </div>
      </section>

      {/* Landing Footer */}
      <footer className="mt-auto border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        <p>© 2026 Academic Mini Project • AI-Powered Emotional Companion & Personal Growth Platform</p>
      </footer>
    </div>
  );
};
