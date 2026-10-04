import React, { useState } from 'react';
import { 
  Target, 
  Plus, 
  CheckCircle2, 
  Calendar, 
  Layers, 
  Check, 
  Award,
  Sparkles
} from 'lucide-react';
import { mockGoals } from '../data/mockData';
import { GoalCard } from '../components/GoalCard';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Modal } from '../components/Modal';

export const GoalsPage = () => {
  const [goals, setGoals] = useState(mockGoals);
  const [activeTab, setActiveTab] = useState('All');
  const [isOpenModal, setIsOpenModal] = useState(false);

  // Modal inputs
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Learning');
  const [newDeadline, setNewDeadline] = useState('Nov 15, 2026');
  const [newDesc, setNewDesc] = useState('');

  const handleToggleMilestone = (goalId, milestoneIndex) => {
    setGoals(prev => prev.map(g => {
      if (g.id === goalId) {
        const updatedMilestones = [...g.milestones];
        updatedMilestones[milestoneIndex].done = !updatedMilestones[milestoneIndex].done;
        
        const doneCount = updatedMilestones.filter(m => m.done).length;
        const newProgress = Math.round((doneCount / updatedMilestones.length) * 100);

        return {
          ...g,
          milestones: updatedMilestones,
          progress: newProgress,
          status: newProgress === 100 ? 'Completed' : 'In Progress'
        };
      }
      return g;
    }));
  };

  const handleCreateGoal = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const created = {
      id: `g-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      deadline: newDeadline,
      progress: 25,
      status: 'In Progress',
      priority: 'High',
      description: newDesc || 'Academic goal initialized for tracking.',
      milestones: [
        { text: 'Initial outline & requirements research', done: true },
        { text: 'Implementation sprint', done: false },
        { text: 'Final evaluation & review', done: false }
      ]
    };

    setGoals([created, ...goals]);
    setNewTitle('');
    setNewDesc('');
    setIsOpenModal(false);
  };

  const tabs = ['All', 'Learning', 'Career', 'Health', 'Personal', 'Completed'];

  const filteredGoals = goals.filter(g => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Completed') return g.status === 'Completed' || g.progress === 100;
    return g.category === activeTab;
  });

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 glass-panel">
        <div className="space-y-1">
          <Badge variant="indigo">Milestone Driven Growth</Badge>
          <h2 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            Long-Term Goals & Academic Milestones
          </h2>
          <p className="text-xs text-slate-400">
            Click milestone checkboxes inside any goal card to dynamically update its overall progress bar.
          </p>
        </div>

        <Button variant="primary" size="md" icon={Plus} onClick={() => setIsOpenModal(true)}>
          Create New Goal
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer border
              ${activeTab === tab 
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20' 
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGoals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onToggleMilestone={handleToggleMilestone}
          />
        ))}
      </div>

      {/* Create Goal Modal */}
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title="Create New Objective"
        subtitle="Align daily habit execution with overarching personal and academic targets."
      >
        <form onSubmit={handleCreateGoal} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Goal Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Master React & Vector RAG Concepts"
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Category</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
              >
                <option value="Learning">Learning</option>
                <option value="Career">Career</option>
                <option value="Health">Health</option>
                <option value="Personal">Personal</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Target Deadline</label>
              <input
                type="text"
                value={newDeadline}
                onChange={(e) => setNewDeadline(e.target.value)}
                placeholder="Dec 15, 2026"
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Objective Summary</label>
            <textarea
              rows={3}
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="Brief description of key outcome and motivation..."
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
            <Button type="button" variant="outline" size="sm" onClick={() => setIsOpenModal(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={Check}>
              Save Objective
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
