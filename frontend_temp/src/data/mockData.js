// Centralized mock data for WaveMind AI Companion Platform

export const mockUser = {
  name: "Alex Morgan",
  role: "CS Senior & AI Researcher",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
  bio: "Passionate about cognitive AI, mindfulness, and high-performance habits. Working on my capstone project and building consistency in daily reflection.",
  joinedDate: "September 2025",
  streakDays: 14,
  emotionalBalanceScore: 88,
  activeGoalsCount: 6,
  memoriesLogged: 42,
  coreValues: ["Growth Mindset", "Emotional Clarity", "Deep Focus", "Empathy"],
  stats: {
    totalJournals: 48,
    conversationsHeld: 124,
    habitsCompleted: 310,
    insightsGenerated: 36
  }
};

export const mockMoodHistory = [
  { day: "Mon", date: "Sep 29", score: 7, mood: "Focused", color: "#6366f1", notes: "Productive coding session, felt energized." },
  { day: "Tue", date: "Sep 30", score: 6, mood: "Calm", color: "#3b82f6", notes: "Steady progress on research literature." },
  { day: "Wed", date: "Oct 01", score: 5, mood: "Anxious", color: "#f59e0b", notes: "Midterm project presentation pressure." },
  { day: "Thu", date: "Oct 02", score: 8, mood: "Elated", color: "#10b981", notes: "Solved key architectural blocker with AI companion advice." },
  { day: "Fri", date: "Oct 03", score: 7, mood: "Satisfied", color: "#8b5cf6", notes: "Completed weekly goals ahead of schedule." },
  { day: "Sat", date: "Oct 04", score: 9, mood: "Inspired", color: "#ec4899", notes: "Great morning workout and deep reflection." },
  { day: "Sun", date: "Oct 05", score: 8, mood: "Grateful", color: "#14b8a6", notes: "Restful Sunday, ready for next week." }
];

export const mockMoodDistribution = [
  { name: "Inspired & Elated", value: 35, color: "#ec4899" },
  { name: "Focused & Productive", value: 40, color: "#6366f1" },
  { name: "Calm & Rested", value: 15, color: "#14b8a6" },
  { name: "Anxious / Stressed", value: 10, color: "#f59e0b" }
];

export const mockHabits = [
  {
    id: "h1",
    name: "Morning Meditation",
    category: "Mindfulness",
    streak: 14,
    targetDaysPerWeek: 7,
    completedDays: [true, true, true, true, true, true, true],
    timeOfDay: "Morning",
    icon: "Sparkles",
    color: "from-amber-500 to-rose-500"
  },
  {
    id: "h2",
    name: "Deep Work Session (2h)",
    category: "Productivity",
    streak: 8,
    targetDaysPerWeek: 5,
    completedDays: [true, true, false, true, true, true, false],
    timeOfDay: "Morning",
    icon: "Brain",
    color: "from-indigo-500 to-cyan-500"
  },
  {
    id: "h3",
    name: "Physical Exercise / Gym",
    category: "Health",
    streak: 5,
    targetDaysPerWeek: 4,
    completedDays: [true, false, true, true, false, true, true],
    timeOfDay: "Afternoon",
    icon: "Dumbbell",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "h4",
    name: "Daily Journaling & Reflection",
    category: "Emotional",
    streak: 12,
    targetDaysPerWeek: 7,
    completedDays: [true, true, true, true, true, true, true],
    timeOfDay: "Evening",
    icon: "BookOpen",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: "h5",
    name: "Read 20 Pages (Non-Fiction)",
    category: "Learning",
    streak: 4,
    targetDaysPerWeek: 6,
    completedDays: [false, true, true, true, true, false, true],
    timeOfDay: "Evening",
    icon: "BookMarked",
    color: "from-blue-500 to-indigo-500"
  }
];

export const mockGoals = [
  {
    id: "g1",
    title: "Complete Academic Capstone Prototype",
    category: "Learning",
    deadline: "Oct 15, 2026",
    progress: 85,
    status: "In Progress",
    priority: "High",
    description: "Design and present a high-fidelity frontend prototype showcasing emotional companion capabilities.",
    milestones: [
      { text: "UI Wireframes & Component Architecture", done: true },
      { text: "Responsive Dashboard & Navigation", done: true },
      { text: "Interactive Chat & Memory Visualization", done: true },
      { text: "Project Review Presentation Slides", done: false }
    ]
  },
  {
    id: "g2",
    title: "Maintain 14-Day Mindfulness & Stress Buffer",
    category: "Personal",
    deadline: "Oct 30, 2026",
    progress: 70,
    status: "In Progress",
    priority: "Medium",
    description: "Practice evening emotional debriefing with WaveMind to prevent exam burnout.",
    milestones: [
      { text: "Establish 10min daily meditation trigger", done: true },
      { text: "Log weekly mood triggers accurately", done: true },
      { text: "Complete 2 consecutive stress-free weeks", done: false }
    ]
  },
  {
    id: "g3",
    title: "Publish AI Ethics & Emotion Research Draft",
    category: "Career",
    deadline: "Nov 20, 2026",
    progress: 45,
    status: "In Progress",
    priority: "High",
    description: "Synthesize findings on personalized long-term memory models for emotional wellness tools.",
    milestones: [
      { text: "Literature review of 15 papers", done: true },
      { text: "Draft methodology & user study plan", done: false },
      { text: "Final paper submission", done: false }
    ]
  },
  {
    id: "g4",
    title: "10k Run & Stamina Training",
    category: "Health",
    deadline: "Dec 01, 2026",
    progress: 60,
    status: "In Progress",
    priority: "Low",
    description: "Increase weekly distance running while tracking physical energy levels.",
    milestones: [
      { text: "Run 5k under 27 mins", done: true },
      { text: "Reach 8k continuous pace", done: true },
      { text: "Official 10k timed run", done: false }
    ]
  }
];

export const mockJournalEntries = [
  {
    id: "j1",
    date: "October 04, 2026",
    time: "09:30 PM",
    title: "Overcoming Mid-Week Fatigue & Project Breakthroughs",
    mood: "Elated",
    moodScore: 8,
    content: "Today started off a bit heavy with deadlines looming for our Mini Project review. However, after engaging in a 15-minute morning meditation and breaking down the UI design into structured components, momentum shifted fast. The WaveMind interface layout looks remarkably crisp with dark glass cards!",
    tags: ["Academic", "Productivity", "Mindfulness"],
    sentiment: "Positive",
    extractedEntities: ["Capstone Project", "Design System", "Meditation"]
  },
  {
    id: "j2",
    date: "October 02, 2026",
    time: "10:15 PM",
    title: "Reflecting on Group Collaboration & Stress Signals",
    mood: "Anxious",
    moodScore: 5,
    content: "Felt overwhelmed during the morning team sync due to conflicting priorities between thesis prep and frontend deliverables. Worked through breathing exercises recommended by WaveMind. Realized that my stress spikes when I lack a clear prioritized task list.",
    tags: ["Stress Management", "Teamwork", "Self-Awareness"],
    sentiment: "Neutral / Reflective",
    extractedEntities: ["Team Sync", "Thesis", "Priority List"]
  },
  {
    id: "j3",
    date: "September 29, 2026",
    time: "08:45 PM",
    title: "Deep Focus Session & Clarity on Long-Term Goals",
    mood: "Focused",
    moodScore: 9,
    content: "Achieved 3 hours of unbroken deep work this afternoon. Completed the goal hierarchy map for Q4. I feel aligned when my daily habits mirror my long-term vision of becoming a empathetic AI researcher.",
    tags: ["Deep Work", "Vision", "Learning"],
    sentiment: "Highly Inspired",
    extractedEntities: ["Research", "Q4 Goals", "Focus"]
  }
];

export const mockLongTermMemories = [
  {
    id: "mem-101",
    category: "Personal Preferences",
    topic: "Communication & Support Style",
    summary: "Alex prefers direct, encouraging feedback and structured action points when feeling overwhelmed, rather than passive sympathy.",
    importance: "High",
    confidence: "98%",
    extractedDate: "Sep 12, 2026",
    vectorSim: "0.94",
    tags: ["Interaction Style", "Support Preference"]
  },
  {
    id: "mem-102",
    category: "Goals",
    topic: "Academic Capstone Distinction",
    summary: "Aims to achieve top marks in Mini Project 5th semester presentation and publish paper on empathetic companion systems.",
    importance: "High",
    confidence: "99%",
    extractedDate: "Sep 15, 2026",
    vectorSim: "0.91",
    tags: ["Career", "Academic"]
  },
  {
    id: "mem-103",
    category: "Important Events",
    topic: "Capstone Review Presentation",
    summary: "Key evaluation scheduled for October 05. Requires polished UI preview demonstrating memory, mood tracking, and goal synergy.",
    importance: "Critical",
    confidence: "100%",
    extractedDate: "Oct 01, 2026",
    vectorSim: "0.97",
    tags: ["Deadline", "Presentation"]
  },
  {
    id: "mem-104",
    category: "Habits",
    topic: "Morning Meditation Anchor",
    summary: "Meditation followed immediately by coffee creates the strongest habit loop for sustained morning focus.",
    importance: "Medium",
    confidence: "92%",
    extractedDate: "Sep 20, 2026",
    vectorSim: "0.88",
    tags: ["Habit Loop", "Mindfulness"]
  },
  {
    id: "mem-105",
    category: "Interests",
    topic: "Cognitive Neuroscience & AI",
    summary: "Deep interest in bio-feedback loops, emotion analysis algorithms, and ethical human-AI co-existence models.",
    importance: "Medium",
    confidence: "95%",
    extractedDate: "Aug 28, 2026",
    vectorSim: "0.85",
    tags: ["Research", "Neuroscience"]
  },
  {
    id: "mem-106",
    category: "Achievements",
    topic: "14-Day Journaling Consistency",
    summary: "Maintained daily emotional reflection for two consecutive weeks, resulting in a 24% reduction in self-reported anxiety.",
    importance: "High",
    confidence: "96%",
    extractedDate: "Oct 03, 2026",
    vectorSim: "0.90",
    tags: ["Milestone", "Wellness"]
  }
];

export const mockChatConversations = [
  {
    id: "conv-1",
    title: "Preparing for Capstone Review",
    lastMessage: "I've structured your 3-step prep checklist based on your past project milestones.",
    time: "2 hours ago",
    unread: false,
    active: true,
    messages: [
      {
        id: "m1",
        sender: "user",
        timestamp: "10:14 AM",
        text: "Hey WaveMind, I'm feeling a bit anxious about the upcoming capstone review presentation tomorrow. I want to make sure I present the vision clearly."
      },
      {
        id: "m2",
        sender: "wavemind",
        timestamp: "10:15 AM",
        text: "Good morning Alex! It's completely natural to feel pre-presentation jitters, especially considering how much dedication you've put into your capstone over the past weeks.\n\nFrom our long-term memory logs, I recall that you thrive when breaking complex presentations into clear narrative arcs: **Problem ➔ Emotional Solution ➔ Visual Prototype**.",
        contextUsed: ["Mem-101 (Direct support style)", "Mem-103 (Capstone evaluation date)"],
        emotionDetected: "Focused Anxiety (Score: 6.2)"
      },
      {
        id: "m3",
        sender: "user",
        timestamp: "10:17 AM",
        text: "That's spot on. What key points should I highlight during the demonstration to show the value of emotional companion systems?"
      },
      {
        id: "m4",
        sender: "wavemind",
        timestamp: "10:18 AM",
        text: "Here are 3 core pillars you can emphasize:\n\n1. **Long-Term Memory Synthesis**: Show how past journal entries and habit records continuously inform personalized insights.\n2. **Holistic Growth Tracking**: Demonstrate the synergy between mood trends, daily habits, and long-term academic goals.\n3. **Empathetic Interaction Design**: Highlight the calm, distraction-free UI created to lower anxiety and foster regular self-reflection.",
        suggestedActions: ["View Memory Graph", "Review Goal Progress", "Practice 2-min Breathing"]
      }
    ]
  },
  {
    id: "conv-2",
    title: "Weekly Habit Optimization",
    lastMessage: "Your morning meditation streak reached 14 days! Keep up the momentum.",
    time: "Yesterday",
    unread: false,
    active: false,
    messages: []
  },
  {
    id: "conv-3",
    title: "Managing Academic Stress",
    lastMessage: "Remember to take micro-breaks during deep coding blocks.",
    time: "3 days ago",
    unread: false,
    active: false,
    messages: []
  }
];

export const mockInsights = {
  weeklySummary: "You demonstrated remarkable emotional resilience this week! Despite elevated academic pressure on Wednesday, your consistent meditation and journaling helped restore emotional balance by Thursday.",
  highlights: [
    { title: "Peak Emotional State", desc: "Saturday morning post-exercise achieved your highest positivity score (9/10).", icon: "Sun", color: "text-amber-400" },
    { title: "Habit Synergies", desc: "Completing Morning Meditation increased your probability of completing Deep Work by 82%.", icon: "Zap", color: "text-indigo-400" },
    { title: "Memory Synthesis", desc: "4 new core memories index-linked to Academic Goals.", icon: "Database", color: "text-emerald-400" }
  ],
  recommendations: [
    {
      type: "Rest & Recovery",
      title: "Schedule Post-Presentation Unwind Buffer",
      description: "Based on past midterm stress patterns, plan 45 minutes of light walking or reading immediately after your review session.",
      impact: "High Impact on Energy Renewal"
    },
    {
      type: "Habit Alignment",
      title: "Pair Reading with Evening De-Screening",
      description: "You logged feeling restless when reading on digital screens after 9:30 PM. Switching to paper books could improve sleep depth by 18%.",
      impact: "Sleep & Focus Optimization"
    }
  ],
  correlations: [
    { metric: "Meditation + Journaling", score: "89% Positive Days" },
    { metric: "Late Night Work (>11pm)", score: "64% Anxiety Risk" },
    { metric: "Regular Exercise (4x/wk)", score: "94% Energy Retention" }
  ]
};

export const mockPrompts = [
  "How can I better manage my project deadlines without feeling overwhelmed?",
  "Synthesize my mood patterns from the past 7 days.",
  "Give me an encouraging reflection based on my long-term memory logs.",
  "What habits should I prioritize to achieve my academic goals this month?"
];
