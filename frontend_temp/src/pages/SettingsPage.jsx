import React, { useState } from 'react';
import { 
  Settings, 
  User, 
  Moon, 
  Bell, 
  ShieldCheck, 
  Database, 
  Sliders, 
  Check,
  Save
} from 'lucide-react';
import { mockUser } from '../data/mockData';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  // Interactive UI states
  const [darkMode, setDarkMode] = useState(true);
  const [accentColor, setAccentColor] = useState('Indigo');
  const [dailyReminders, setDailyReminders] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [autoMemoryExtraction, setAutoMemoryExtraction] = useState(true);
  const [memoryRetentionMonths, setMemoryRetentionMonths] = useState(12);
  const [anonymizeData, setAnonymizeData] = useState(true);

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const navTabs = [
    { label: 'Profile', icon: User },
    { label: 'Appearance', icon: Moon },
    { label: 'Notifications', icon: Bell },
    { label: 'Memory Preferences', icon: Database },
    { label: 'Privacy & Security', icon: ShieldCheck },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 glass-panel">
        <div>
          <h2 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-400" />
            Platform & Privacy Settings
          </h2>
          <p className="text-xs text-slate-400">Configure visual themes, AI companion memory bounds, and privacy controls.</p>
        </div>
        <Badge variant="indigo">UI Prototype Controls</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="space-y-1 bg-slate-900/90 border border-slate-800 rounded-2xl p-3 glass-panel">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left
                  ${activeTab === tab.label 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Settings Form Panel */}
        <div className="md:col-span-3 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 glass-panel space-y-6">
          <form onSubmit={handleSaveSettings} className="space-y-6">
            {activeTab === 'Profile' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold font-heading text-slate-100">User Profile Summary</h3>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <img src={mockUser.avatar} alt="Avatar" className="w-12 h-12 rounded-xl object-cover ring-2 ring-indigo-500" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">{mockUser.name}</h4>
                    <p className="text-xs text-slate-400">{mockUser.role}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Display Name</label>
                    <input type="text" defaultValue={mockUser.name} className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Academic Role</label>
                    <input type="text" defaultValue={mockUser.role} className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Appearance' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold font-heading text-slate-100">Theme & Visuals</h3>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div>
                    <p className="text-xs font-bold text-slate-200">Dark Ambient Mode</p>
                    <p className="text-[11px] text-slate-400">High-contrast slate glassmorphism theme</p>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setDarkMode(!darkMode)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-indigo-600' : 'bg-slate-700'}`}
                  >
                    <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${darkMode ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'Notifications' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold font-heading text-slate-100">Notification Alerts</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div>
                      <p className="text-xs font-bold text-slate-200">Daily Journal & Habit Reminders</p>
                      <p className="text-[11px] text-slate-400">Receive gentle evening reflection prompts at 9:00 PM</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setDailyReminders(!dailyReminders)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${dailyReminders ? 'bg-indigo-600' : 'bg-slate-700'}`}
                    >
                      <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${dailyReminders ? 'right-1' : 'left-1'}`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Memory Preferences' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold font-heading text-slate-100">AI Vector Memory Engine Controls</h3>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div>
                    <p className="text-xs font-bold text-slate-200">Automatic Memory Extraction</p>
                    <p className="text-[11px] text-slate-400">Automatically index user goals and core preferences into vector DB</p>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setAutoMemoryExtraction(!autoMemoryExtraction)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${autoMemoryExtraction ? 'bg-indigo-600' : 'bg-slate-700'}`}
                  >
                    <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${autoMemoryExtraction ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Memory Retention Window ({memoryRetentionMonths} Months)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={memoryRetentionMonths}
                    onChange={(e) => setMemoryRetentionMonths(e.target.value)}
                    className="w-full accent-indigo-500"
                  />
                </div>
              </div>
            )}

            {activeTab === 'Privacy & Security' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold font-heading text-slate-100">Data Privacy & Encryption</h3>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <p className="text-xs font-bold text-emerald-400">Zero-Backend Demonstration Mode</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    All data in this prototype remains stored locally within your browser state. No data is transmitted to external servers.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              {savedSuccess && (
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Check className="w-4 h-4" /> Preferences saved!
                </span>
              )}
              <Button type="submit" variant="primary" size="md" icon={Save} className="ml-auto">
                Save Preferences
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
