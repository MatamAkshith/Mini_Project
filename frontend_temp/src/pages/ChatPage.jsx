import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Plus, 
  MessageSquare, 
  Database, 
  Trash2, 
  HelpCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { mockChatConversations, mockPrompts } from '../data/mockData';
import { ChatMessage } from '../components/ChatMessage';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export const ChatPage = () => {
  const [conversations, setConversations] = useState(mockChatConversations);
  const [activeConvId, setActiveConvId] = useState('conv-1');
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const activeConv = conversations.find(c => c.id === activeConvId) || conversations[0];

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = {
      id: `m-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: text
    };

    // Append User Message
    const updatedMessages = [...activeConv.messages, userMsg];
    
    setConversations(prev => prev.map(c => 
      c.id === activeConvId 
        ? { ...c, messages: updatedMessages, lastMessage: text }
        : c
    ));

    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Simulate Instant Mock AI Response
    setTimeout(() => {
      const auraMsg = {
        id: `m-aura-${Date.now()}`,
        sender: 'aura',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `Thank you for sharing that with me, Alex. Based on your long-term memory logs and daily reflection patterns, I recommend focusing on breaking your task into 25-minute Pomodoro sessions. Remember, consistency beats intensity!`,
        contextUsed: ['Mem-101 (Support preference)', 'Mem-104 (Meditation anchor)'],
        emotionDetected: 'Constructive Reflection (Score: 7.8)',
        suggestedActions: ['View Goal Milestones', 'Log Mood Entry']
      };

      setConversations(prev => prev.map(c => 
        c.id === activeConvId 
          ? { ...c, messages: [...updatedMessages, auraMsg], lastMessage: auraMsg.text }
          : c
      ));
      setIsTyping(false);
    }, 1000);
  };

  const handleNewChat = () => {
    const newConv = {
      id: `conv-${Date.now()}`,
      title: 'New Reflective Session',
      lastMessage: 'Session initialized...',
      time: 'Just now',
      unread: false,
      active: true,
      messages: [
        {
          id: `m-init-${Date.now()}`,
          sender: 'aura',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: "Hello Alex! I'm here to listen, reflect, and help you navigate your emotional wellness and growth goals. What's on your mind today?"
        }
      ]
    };
    setConversations([newConv, ...conversations]);
    setActiveConvId(newConv.id);
  };

  return (
    <div className="h-[calc(100vh-6.5rem)] flex flex-col md:flex-row gap-4 overflow-hidden">
      {/* Left Chat Sidebar / History */}
      <div className="w-full md:w-80 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between shrink-0 glass-panel">
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-sm font-heading text-slate-100">Conversations</h3>
            </div>
            <Button variant="primary" size="sm" icon={Plus} onClick={handleNewChat}>
              New Session
            </Button>
          </div>

          {/* Conversations list */}
          <div className="space-y-1.5 overflow-y-auto max-h-[50vh] md:max-h-[60vh] pr-1">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setActiveConvId(conv.id)}
                className={`
                  p-3 rounded-xl border text-left cursor-pointer transition-all duration-150
                  ${conv.id === activeConvId 
                    ? 'bg-gradient-to-r from-indigo-950/80 to-purple-950/40 border-indigo-500/40 text-slate-100 shadow-sm' 
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'}
                `}
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="truncate max-w-[170px] text-slate-200">{conv.title}</span>
                  <span className="text-[10px] text-slate-500">{conv.time}</span>
                </div>
                <p className="text-[11px] text-slate-400 truncate mt-1">
                  {conv.lastMessage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Memory RAG Indicator footer */}
        <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-indigo-300 font-medium">
              <Database className="w-3.5 h-3.5 text-indigo-400" />
              Long-Term Context Active
            </span>
            <Badge variant="emerald">42 Vectors</Badge>
          </div>
          <p className="text-[10px] text-slate-500 leading-tight">
            Conversations automatically retrieve past memories & journal insights.
          </p>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-col justify-between overflow-hidden glass-panel">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-sm font-heading text-slate-100 flex items-center gap-2">
                {activeConv.title}
                <Badge variant="indigo">Mock Companion</Badge>
              </h3>
              <p className="text-[11px] text-slate-400">
                Grounding: Emotion Model v1.2 • Vector Cosine Similarity Threshold: 0.85
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted & Private</span>
          </div>
        </div>

        {/* Chat Stream Window */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
          {activeConv.messages.map((msg) => (
            <ChatMessage 
              key={msg.id} 
              message={msg} 
              onActionClick={(action) => handleSendMessage(`Tell me more about: ${action}`)}
            />
          ))}

          {isTyping && (
            <div className="flex items-center gap-3 text-xs text-indigo-400 animate-pulse py-2">
              <Bot className="w-4 h-4" />
              <span>WaveMind is synthesizing memory context & formulating reply...</span>
            </div>
          )}
        </div>

        {/* Suggested Prompts Bar */}
        <div className="px-4 py-2 bg-slate-950/40 border-t border-slate-800/60 overflow-x-auto flex items-center gap-2 no-scrollbar">
          <span className="text-[10px] uppercase font-semibold text-slate-500 shrink-0">Prompts:</span>
          {mockPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1 text-xs rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-indigo-500/50 shrink-0 transition-all cursor-pointer truncate max-w-xs"
            >
              "{prompt}"
            </button>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Share what's on your mind, how you're feeling, or ask for reflection..."
              className="flex-1 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs md:text-sm text-slate-100 focus:outline-none focus:border-indigo-500/60 transition-colors"
            />
            <Button 
              variant="primary" 
              size="md" 
              icon={Send} 
              type="submit"
              disabled={!inputText.trim()}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
