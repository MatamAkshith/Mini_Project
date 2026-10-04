import React, { useState } from 'react';
import { 
  BookOpen, 
  Plus, 
  Search, 
  Calendar, 
  Smile, 
  Tag, 
  Sparkles, 
  Filter,
  Check
} from 'lucide-react';
import { mockJournalEntries } from '../data/mockData';
import { JournalCard } from '../components/JournalCard';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Modal } from '../components/Modal';

const moodOptions = [
  { label: 'Elated', emoji: '😄', score: 9, color: 'text-emerald-400' },
  { label: 'Focused', emoji: '🧠', score: 8, color: 'text-indigo-400' },
  { label: 'Calm', emoji: '😌', score: 7, color: 'text-teal-400' },
  { label: 'Anxious', emoji: '😰', score: 5, color: 'text-amber-400' },
  { label: 'Exhausted', emoji: '😴', score: 4, color: 'text-rose-400' }
];

export const JournalPage = ({ isOpenNew, setIsOpenNew }) => {
  const [entries, setEntries] = useState(mockJournalEntries);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntry, setSelectedEntry] = useState(null);

  // New entry form states
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [selectedMood, setSelectedMood] = useState(moodOptions[0]);
  const [newTags, setNewTags] = useState('Reflections, Productivity');

  const handleSaveEntry = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const created = {
      id: `j-${Date.now()}`,
      date: 'October 04, 2026',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      title: newTitle,
      mood: selectedMood.label,
      moodScore: selectedMood.score,
      content: newContent,
      tags: newTags.split(',').map(t => t.trim()),
      sentiment: selectedMood.score >= 7 ? 'Positive' : 'Reflective',
      extractedEntities: ['Journal Reflection', 'Self-Awareness']
    };

    setEntries([created, ...entries]);
    setNewTitle('');
    setNewContent('');
    setIsOpenNew(false);
  };

  const filteredEntries = entries.filter(e => 
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Top Banner & Action */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800">
        <div>
          <h2 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            "How was your day, Alex?"
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Expressing your daily experiences helps AURA synthesize your emotional resilience over time.
          </p>
        </div>

        <Button variant="primary" size="md" icon={Plus} onClick={() => setIsOpenNew(true)}>
          New Reflection
        </Button>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search entries or #tags..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500/60"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Badge variant="indigo">{filteredEntries.length} Entries Logged</Badge>
        </div>
      </div>

      {/* Journal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEntries.map((entry) => (
          <JournalCard
            key={entry.id}
            entry={entry}
            onClick={() => setSelectedEntry(entry)}
          />
        ))}
      </div>

      {/* New Journal Entry Modal */}
      <Modal
        isOpen={isOpenNew}
        onClose={() => setIsOpenNew(false)}
        title="Create Journal Reflection"
        subtitle="Your thoughts are automatically analyzed for sentiment and memory indexing."
      >
        <form onSubmit={handleSaveEntry} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Select Mood State</label>
            <div className="grid grid-cols-5 gap-2">
              {moodOptions.map((m) => (
                <button
                  type="button"
                  key={m.label}
                  onClick={() => setSelectedMood(m)}
                  className={`
                    p-2 rounded-xl border flex flex-col items-center justify-center text-xs transition-all cursor-pointer
                    ${selectedMood.label === m.label 
                      ? 'bg-indigo-600/20 border-indigo-500 text-white font-bold shadow-sm' 
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'}
                  `}
                >
                  <span className="text-lg">{m.emoji}</span>
                  <span className="text-[10px] mt-1">{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Entry Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g., Breakthrough in Machine Learning Lab..."
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Reflection Content</label>
            <textarea
              rows={5}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Write freely about your day, challenges, gratitude, or achievements..."
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500 leading-relaxed"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Tags (comma separated)</label>
            <input
              type="text"
              value={newTags}
              onChange={(e) => setNewTags(e.target.value)}
              placeholder="Capstone, Mindfulness, Academic"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none"
            />
          </div>

          <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
            <Button type="button" variant="outline" size="sm" onClick={() => setIsOpenNew(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={Check}>
              Save Entry
            </Button>
          </div>
        </form>
      </Modal>

      {/* Entry Detail View Modal */}
      {selectedEntry && (
        <Modal
          isOpen={!!selectedEntry}
          onClose={() => setSelectedEntry(null)}
          title={selectedEntry.title}
          subtitle={`${selectedEntry.date} • ${selectedEntry.time}`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <span className="text-slate-400">Mood State: <strong className="text-slate-200">{selectedEntry.mood} ({selectedEntry.moodScore}/10)</strong></span>
              <Badge variant="indigo">Sentiment: {selectedEntry.sentiment}</Badge>
            </div>

            <p className="text-xs md:text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 whitespace-pre-line">
              {selectedEntry.content}
            </p>

            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 block">Extracted Entities & Themes:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedEntry.extractedEntities.map((ent, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    ⚡ {ent}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <Button variant="secondary" size="sm" onClick={() => setSelectedEntry(null)}>
                Close Window
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
