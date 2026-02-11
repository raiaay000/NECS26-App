import { useState, useEffect, useRef } from 'react';
import { Send, Hash, Bot, Shield } from 'lucide-react';
import { ChatStorage } from '../utils/chatStorage';

const CHANNELS = [
  { id: 'general', name: 'general', count: 1247 },
  { id: 'valorant', name: 'valorant', count: 856 },
  { id: 'rocket-league', name: 'rocket-league', count: 432 },
  { id: 'smash', name: 'smash', count: 389 }
];

const SAMPLE_MESSAGES = [
  { user: 'ProGamer99', message: 'That clutch was insane!', color: 'text-blue-400', role: 'user' },
  { user: 'EsportsLover', message: 'SEN looking really strong today', color: 'text-purple-400', role: 'user' },
  { user: 'NECS Admin', message: 'Welcome to NECS 2026! Please keep chat respectful and follow tournament rules.', color: 'text-red-400', role: 'admin' },
  { user: 'TacticalGamer', message: 'NRG needs to adjust their defense', color: 'text-green-400', role: 'user' },
  { user: 'MatchAnalyst', message: 'This game is going to map 5 for sure', color: 'text-orange-400', role: 'user' },
  { user: 'FanBoy123', message: 'TenZ carry incoming! 🔥', color: 'text-red-400', role: 'user' },
  { user: 'CompetitiveGuru', message: 'Both teams playing at their peak', color: 'text-cyan-400', role: 'user' }
];

const BOT_MESSAGES = [
  'Match starting in 5 minutes! Get ready!',
  'Current standings: Coldfront in the lead with 3-2!',
  'Don\'t forget to vote for your favorite team in Quick Actions!',
  'Amazing play by Thunder Alloy! 🎮',
  'Halftime score update: 4-2',
  'New prediction posted by AI system - check it out!',
  'Shop update: Limited edition jerseys now available!',
  'Tournament bracket updated - view in Brackets tab',
  'Live match replay available now!',
  'Player of the match poll is open - cast your vote!'
];

export default function Chat() {
  const [message, setMessage] = useState('');
  const [activeChannel, setActiveChannel] = useState('general');
  const [messages, setMessages] = useState(() => ChatStorage.getAllMessages());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear all messages and start fresh with first 4 sample messages on every reload
    ChatStorage.clearAll();
    
    SAMPLE_MESSAGES.slice(0, 4).forEach((msg, idx) => {
      setTimeout(() => {
        ChatStorage.saveMessage({
          message: msg.message,
          username: msg.user,
          userId: msg.user.toLowerCase(),
          role: msg.role
        });
        if (idx === 3) {
          setMessages(ChatStorage.getAllMessages());
        }
      }, idx * 100);
    });

    // Bot messages - send every 15 seconds
    const botInterval = setInterval(() => {
      const randomMessage = BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)];
      const newMsg = ChatStorage.saveMessage({
        message: randomMessage,
        username: 'NECS Bot',
        userId: 'necs_bot',
        role: 'bot'
      });
      setMessages(prev => [...prev, newMsg]);
    }, 15000);

    return () => clearInterval(botInterval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      const newMsg = ChatStorage.saveMessage({
        message: message.trim(),
        username: 'You',
        userId: 'current_user',
        role: 'user'
      });
      setMessages([...messages, newMsg]);
      setMessage('');
    }
  };

  const getInitials = (username: string) => username.substring(0, 2).toUpperCase();
  
  const getColor = (userId: string) => {
    const colors = ['text-blue-400', 'text-purple-400', 'text-green-400', 'text-orange-400', 'text-red-400', 'text-cyan-400'];
    const hash = userId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const getRoleBadge = (role?: string) => {
    if (role === 'admin') {
      return (
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[rgba(220,38,38,0.2)] border border-[rgba(220,38,38,0.4)]">
          <Shield className="w-3 h-3 text-red-400" />
          <span className="text-red-400 text-[9px] font-bold uppercase">Admin</span>
        </div>
      );
    }
    if (role === 'bot') {
      return (
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[rgba(245,197,33,0.2)] border border-[rgba(245,197,33,0.4)]">
          <Bot className="w-3 h-3 text-[#f5c521]" />
          <span className="text-[#f5c521] text-[9px] font-bold uppercase">Bot</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col h-full pb-4">
      {/* Header Section */}
      <div className="px-5 py-4 flex-shrink-0">
        <div className="mb-4">
          <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk'] mb-2">Chat</h1>
          <p className="text-[#97a8d8] text-[14px] font-['Inter']">Join the conversation</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CHANNELS.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setActiveChannel(channel.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-[14px] text-[11px] font-bold font-['Inter'] whitespace-nowrap transition-colors ${
                activeChannel === channel.id
                  ? 'bg-[rgba(62,121,255,0.22)] border border-[rgba(62,121,255,0.45)] text-[#3E79FF]'
                  : 'bg-[rgba(15,58,107,0.22)] border border-[rgba(62,121,255,0.22)] text-[#5d7191]'
              }`}
            >
              <Hash className="w-4 h-4" />
              <span className="uppercase">{channel.name}</span>
              <span className="text-[10px] opacity-70">({channel.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Messages Container - Fixed height with scroll */}
      <div className="flex-1 px-5 overflow-hidden">
        <div 
          className="rounded-[24px] border border-[rgba(245,197,33,0.45)] p-4 h-full overflow-y-auto min-h-[360px]"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
        >
          {messages.map((msg) => (
            <div key={msg.id} className="mb-4 last:mb-0">
              <div className="flex items-start gap-3">
                <div className={`size-10 rounded-[12px] flex items-center justify-center text-[12px] font-bold ${getColor(msg.userId)} bg-[rgba(62,121,255,0.12)] border border-[rgba(62,121,255,0.22)] flex-shrink-0`}>
                  {msg.role === 'bot' ? <Bot className="w-5 h-5" /> : msg.role === 'admin' ? <Shield className="w-5 h-5" /> : getInitials(msg.username)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-[13px] font-bold font-['Inter'] ${getColor(msg.userId)}`}>
                      {msg.username}
                    </span>
                    {getRoleBadge(msg.role)}
                    <span className="text-[#5d7191] text-[10px] font-['Inter']">
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-[#e0e6f5] text-[13px] font-['Inter'] leading-relaxed break-words">
                    {msg.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Section - Fixed at bottom */}
      <div className="px-5 pt-4 pb-4 flex-shrink-0">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`Message #${activeChannel}`}
            className="w-full bg-[rgba(15,58,107,0.22)] border border-[rgba(62,121,255,0.32)] rounded-[16px] pl-4 pr-12 py-3 text-white text-[13px] placeholder-[#5d7191] focus:outline-none focus:border-[rgba(62,121,255,0.55)]"
          />
          <button
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 size-9 rounded-[12px] bg-[rgba(62,121,255,0.22)] border border-[rgba(62,121,255,0.45)] flex items-center justify-center hover:bg-[rgba(62,121,255,0.32)] transition-colors"
          >
            <Send className="w-4 h-4 text-[#3E79FF]" />
          </button>
        </div>
      </div>
    </div>
  );
}