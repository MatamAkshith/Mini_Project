import React, { useState } from 'react';
import { 
  Database, 
  Search, 
  Sparkles, 
  Tag, 
  Calendar, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  HardDrive
} from 'lucide-react';
import { mockLongTermMemories } from '../data/mockData';
import { MemoryCard } from '../components/MemoryCard';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

export const MemoriesPage = () => {
  const [memories, setMemories] = useState(mockLongTermMemories);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMemory, setActiveMemory] = useState(null);

  const categories = ['All', 'Personal Preferences', 'Goals', 'Important Events', 'Achievements', 'Habits', 'Interests'];

  const filteredMemories = memories.filter(m => {
    const matchCat = selectedCategory === 'All' || m.category === selectedCategory;
    const matchSearch = m.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        m.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Banner Notice explaining RAG Mock representation */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-purple-950/60 border border-indigo-500/30 shadow-2xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold font-heading text-white">Long-Term Memory Vector Index</h2>
          </div>
          <Badge variant="indigo">RAG Semantic Search Representation</Badge>
        </div>

        <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Visual representation of extracted user memories, preferences, and key events. In the proposed system architecture, these memories are embedded into vector space to ground AI companion responses with personal context.
        </p>

        <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <HardDrive className="w-4 h-4" />
            Total Indexed Vectors: {memories.length}
          </span>
          <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
            <Cpu className="w-4 h-4" />
            Similarity Threshold: Cosine 0.82
          </span>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vectors by topic or keyword..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <span className="text-xs text-slate-400 font-mono">
          Showing {filteredMemories.length} / {memories.length} indexed memories
        </span>
      </div>

      {/* Categories Horizontal Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`
              px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer border
              ${selectedCategory === cat 
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20' 
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Memory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMemories.map((mem) => (
          <MemoryCard
            key={mem.id}
            memory={mem}
            onClick={() => setActiveMemory(mem)}
          />
        ))}
      </div>

      {/* Memory Inspector Modal */}
      {activeMemory && (
        <Modal
          isOpen={!!activeMemory}
          onClose={() => setActiveMemory(null)}
          title={`Memory Vector: ${activeMemory.topic}`}
          subtitle={`Extracted on ${activeMemory.extractedDate} • Category: ${activeMemory.category}`}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">Importance Priority</span>
                <span className="font-bold text-indigo-400">{activeMemory.importance}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Model Extraction Confidence</span>
                <span className="font-bold text-emerald-400">{activeMemory.confidence}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-slate-300 block">Synthesized Summary:</span>
              <p className="text-xs text-slate-200 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                "{activeMemory.summary}"
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-slate-300 block">Vector Embedding Metadata:</span>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono space-y-1 text-slate-400">
                <p>Vector ID: <span className="text-slate-200">{activeMemory.id}</span></p>
                <p>Cosine Similarity Score: <span className="text-emerald-400">{activeMemory.vectorSim}</span></p>
                <p>Status: <span className="text-indigo-400">Active RAG Index</span></p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <Button variant="secondary" size="sm" onClick={() => setActiveMemory(null)}>
                Close Inspector
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
