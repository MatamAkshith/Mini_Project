import React, { useState } from 'react';
import { 
  CheckSquare, 
  Flame, 
  Plus, 
  Sparkles, 
  Brain, 
  Dumbbell, 
  BookOpen, 
  Check, 
  Trophy
} from 'lucide-react';
import { mockHabits } from '../data/mockData';
import { HabitCard } from '../components/HabitCard';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Modal } from '../components/Modal';

export const HabitsPage = () => {
  const [habits, setHabits] = useState(mockHabits);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isOpenModal, setIsOpenModal] = useState(false);

  // Form states
  const [newHabitName, setNewHabitName] = useState('');
  const [newCategory, setNewCategory] = useState('Mindfulness');

  const handleToggleDay = (habitId, dayIndex) => {
    setHabits(prev => prev.map(h => {
      if (h.id === habitId) {
        const updatedDays = [...h.completedDays];
        updatedDays[dayIndex] = !updatedDays[dayIndex];
        const newCompletedCount = updatedDays.filter(Boolean).length;
        const newStreak = updatedDays[dayIndex] ? h.streak + 1 : Math.max(0, h.streak - 1);
        return {
          ...h,
          completedDays: updatedDays,
          streak: newStreak
        };
      }
      return h;
    }));
  };

  const handleAddHabit = (e) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;

    const created = {
      id: `h-${Date.now()}`,
      name: newHabitName,
      category: newCategory,
      streak: 1,
      targetDaysPerWeek: 7,
      completedDays: [true, false, false, false, false, false, false],
      timeOfDay: "Morning",
      icon: "Sparkles",
      color: "from-indigo-500 to-violet-500"
    };

    setHabits([...habits, created]);
    setNewHabitName('');
    setIsOpenModal(false);
  };

  const categories = ['All', 'Mindfulness', 'Productivity', 'Health', 'Emotional', 'Learning'];

  const filteredHabits = habits.filter(h => 
    activeCategory === 'All' || h.category === activeCategory
  );

  const totalStreakSum = habits.reduce((acc, curr) => acc + curr.streak, 0);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 glass-panel">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge variant="amber">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              Total Cumulative Streak: {totalStreakSum} Days
            </Badge>
          </div>
          <h2 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-indigo-400" />
            Daily Habit & Ritual Consistency
          </h2>
          <p className="text-xs text-slate-400">
            Click on any day checkmark below to record your daily habit completion in real-time.
          </p>
        </div>

        <Button variant="primary" size="md" icon={Plus} onClick={() => setIsOpenModal(true)}>
          Create Habit Ritual
        </Button>
      </div>

      {/* Category Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer border
              ${activeCategory === cat 
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20' 
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Habit Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHabits.map((habit) => (
          <HabitCard 
            key={habit.id} 
            habit={habit} 
            onToggleDay={handleToggleDay} 
          />
        ))}
      </div>

      {/* Add Habit Modal */}
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title="Add Daily Habit Ritual"
        subtitle="Consistent habits build long-term cognitive resilience and emotional balance."
      >
        <form onSubmit={handleAddHabit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Habit Name</label>
            <input
              type="text"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              placeholder="e.g. Evening De-Screening & Hydration"
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Category</label>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
            >
              <option value="Mindfulness">Mindfulness</option>
              <option value="Productivity">Productivity</option>
              <option value="Health">Health</option>
              <option value="Emotional">Emotional</option>
              <option value="Learning">Learning</option>
            </select>
          </div>

          <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
            <Button type="button" variant="outline" size="sm" onClick={() => setIsOpenModal(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={Check}>
              Add Habit
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
