import { Bot, Send, Calendar, MapPin, Ticket, Gamepad2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickQuestions = [
  { icon: Calendar, text: "When is NECS 2026?", query: "When is NECS 2026?" },
  { icon: MapPin, text: "Where is the venue?", query: "Where is the venue?" },
  { icon: Ticket, text: "Ticket prices?", query: "How much are tickets?" },
  { icon: Gamepad2, text: "What games?", query: "What games are featured?" }
];

// Comprehensive knowledge base with basic AND detailed responses
const botResponses: Record<string, { basic: string; detailed?: string }> = {
  // Schedule responses
  "when is necs 2026": {
    basic: "NECS 2026 will take place March 14-16, 2026 at Bridgestone Arena in Nashville, Tennessee! 📅",
    detailed: "**Full NECS 2026 Schedule:**\n\n📅 **Friday, March 14:**\n• 6:00 PM - Opening Ceremonies\n• 7:00 PM - First matches begin\n• 11:00 PM - Day 1 concludes\n\n📅 **Saturday, March 15:**\n• 10:00 AM - Doors open\n• 11:00 AM - Group Stage begins\n• 4:00 PM - Quarterfinals\n• 10:00 PM - Day 2 concludes\n\n📅 **Sunday, March 16:**\n• 12:00 PM - Semifinals\n• 6:00 PM - Grand Finals\n• 8:00 PM - Closing ceremony\n\nAll times are Central Standard Time (CST)."
  },
  
  // Venue responses
  "where is the venue": {
    basic: "The tournament will be held at **Bridgestone Arena** in downtown Nashville, Tennessee! 🏟️\n\n📍 Address: 501 Broadway, Nashville, TN 37203",
    detailed: "**Venue Details - Bridgestone Arena:**\n\n📍 **Location:**\n501 Broadway, Nashville, TN 37203\nHeart of downtown Nashville's honky-tonk district\n\n🏟️ **Capacity:** 17,000+ fans\n\n✨ **Features:**\n• State-of-the-art video screens\n• Three dedicated gaming stages\n• Premium concessions\n• VIP lounges\n• Merchandise booths\n• Meet & greet areas\n\n🚇 **Getting There:**\n• Music City Circuit (free buses)\n• Uber/Lyft drop-off on 5th Ave\n• Multiple parking garages nearby\n• Walking distance from downtown hotels\n\nLearn more: bridgestonearena.com"
  },
  
  // Ticket responses
  "how much are tickets": {
    basic: "🎟️ **Ticket Prices:**\n• General Admission - $45\n• Single Day Pass - $75\n• Weekend Pass (3 days) - $150\n• VIP Pass - $250\n\nEarly bird discount: 15% off before Jan 31st!",
    detailed: "🎟️ **Complete Ticket Breakdown:**\n\n**General Admission - $45**\n• Arena seating (first-come, first-served)\n• Access to all three gaming stages\n• Standard concessions available\n\n**Single Day Pass - $75**\n• Choose Friday, Saturday, OR Sunday\n• Reserved seating section\n• Priority entry line\n\n**Weekend Pass - $150** ⭐ Best Value!\n• All 3 days included\n• Reserved seating\n• 10% off merchandise\n• Priority re-entry\n\n**VIP Pass - $250** 🌟 Ultimate Experience!\n• Premium front-row seating\n• Meet & greets with pro players\n• Exclusive VIP lounge access\n• Free exclusive merchandise pack\n• Backstage tours\n• Complimentary food & drinks\n• Early entry (1 hour before doors)\n\n💰 **Early Bird Special:** Purchase before January 31st and save 15% on all passes!"
  },
  
  // Games responses
  "what games are featured": {
    basic: "🎮 **NECS 2026 Features:**\n• Super Smash Bros. Ultimate (SSBU)\n• Valorant (VAL)\n• Rocket League (RL)\n\nTotal prize pool: **$500,000**!",
    detailed: "🎮 **Complete Game Lineup & Prize Pools:**\n\n**Super Smash Bros. Ultimate (SSBU)**\n💰 Prize Pool: $200,000\n👥 64 players competing\n🏆 1st Place: $80,000\n🥈 2nd Place: $50,000\n🥉 3rd Place: $30,000\n• Main Stage Arena\n• Best-of-5 format for finals\n\n**Valorant (VAL)**\n💰 Prize Pool: $200,000\n🎯 16 teams in group stage\n🏆 1st Place: $80,000\n🥈 2nd Place: $50,000\n🥉 3rd Place: $30,000\n• Tactical Stage\n• Best-of-3 groups, Best-of-5 finals\n\n**Rocket League (RL)**\n💰 Prize Pool: $100,000\n🚗 12 teams competing\n🏆 1st Place: $40,000\n🥈 2nd Place: $25,000\n🥉 3rd Place: $15,000\n• Speed Stage\n• 3v3 format\n\n**Total Prize Pool: $500,000**\nPlus MVP awards and best play bonuses!"
  },
  
  // Teams responses
  "teams": {
    basic: "🏆 **12 Elite Teams Competing:**\n• Coldfront • Emberfall\n• Midnight Pulse • Prism Wardens\n• Thunder Alloy • Legacy Apex\n• Turbo Drift • Neon Circuit\n• Gravity Pulse • Smash Legion\n• Apex Ascent • Radiant Vanguard\n\nCheck the Teams page for full rosters!",
    detailed: "🏆 **Complete Team Breakdown:**\n\n**Top Seeded Teams:**\n1. **Coldfront** - Defending SSBU champions\n2. **Emberfall** - Valorant powerhouse\n3. **Midnight Pulse** - Rising Rocket League stars\n\n**Full Roster:**\n• Coldfront (SSBU/VAL)\n• Emberfall (VAL/RL)\n• Midnight Pulse (RL/SSBU)\n• Prism Wardens (Multi-game)\n• Thunder Alloy (SSBU specialists)\n• Legacy Apex (Valorant legends)\n• Turbo Drift (Rocket League pros)\n• Neon Circuit (Speed demons)\n• Gravity Pulse (Tactical masters)\n• Smash Legion (SSBU dynasty)\n• Apex Ascent (All-rounders)\n• Radiant Vanguard (VAL tacticians)\n\nEach team has 5-8 players across multiple titles. Visit the Teams page in the app to see full rosters, player stats, and team histories!"
  },
  
  // Parking & Transportation
  "parking": {
    basic: "🚗 **Parking Options:**\n• Arena garage: $20-30\n• Public lots: $15-25\n• Street parking: Limited, metered\n\n🚌 Music City Circuit buses are FREE!",
    detailed: "🚗 **Complete Transportation Guide:**\n\n**Parking Garages:**\n• Bridgestone Arena Garage - $30 (closest)\n• 5th & Broadway Garage - $25\n• Nissan Stadium Lots - $20 (shuttle provided)\n• Street parking - $2/hour (limited)\n\n**Public Transit:**\n🚌 Music City Circuit\n• FREE bus service\n• Stops at arena entrance\n• Runs every 15 minutes\n• Operating hours: 6 AM - midnight\n\n**Rideshare:**\n🚕 Uber/Lyft drop-off zone on 5th Avenue\n💲 Estimated cost from airport: $25-35\n\n**Walking:**\n🚶 Downtown hotels within 0.5-1 mile\n🏨 Many attendees walk from Broadway area\n\n**Pro Tips:**\n• Arrive 2 hours early on Saturday (busiest day)\n• Pre-book parking at parkwhiz.com\n• Carpool with friends to save money!"
  },
  
  // Food responses
  "food": {
    basic: "🍔 **Food Options:**\n• Traditional concessions\n• BBQ, pizza, sushi\n• Nashville hot chicken! 🔥\n• Full-service bars\n\nVIP pass holders get exclusive lounge access!",
    detailed: "🍔 **Complete Dining Guide:**\n\n**Arena Concessions:**\n• Hot dogs - $8\n• Nachos - $10\n• Popcorn - $7\n• Soft pretzels - $6\n• Candy & snacks - $4-6\n\n**Premium Vendors:**\n• BBQ Station (pulled pork, brisket) - $12-16\n• Pizza by the slice - $8\n• Sushi bar - $10-18\n• Gourmet burgers - $14\n\n**Nashville Specialties:**\n🔥 Hot Chicken Stand - $12-15\n🥪 Southern Sandwiches - $10-13\n🌮 Taco Bar - $8-12\n\n**Beverages:**\n• Soft drinks - $6\n• Water - $5\n• Beer - $10-12\n• Cocktails - $12-15\n• Energy drinks - $7\n\n**VIP Exclusive:**\n• Complimentary snacks & appetizers\n• Premium bar with top-shelf spirits\n• Buffet-style dining area\n• Unlimited soft drinks\n\n**Outside the Arena:**\nBroadway is 2 blocks away with 100+ restaurants!"
  },
  
  // Streaming responses
  "stream": {
    basic: "📺 **Watch NECS 2026 Online:**\n• Twitch: twitch.tv/necs2026\n• YouTube: NECS Official Channel\n• In-app Live Stream\n\nAll in 4K with pro commentary!",
    detailed: "📺 **Complete Streaming Guide:**\n\n**Official Streams:**\n🟣 **Twitch:** twitch.tv/necs2026\n• Main stage (primary broadcast)\n• Player POV streams\n• Behind-the-scenes channel\n• Chat emotes & drops enabled\n\n🔴 **YouTube Live:** NECS Official\n• 4K streaming quality\n• Multi-language commentary\n• Instant replay features\n• VODs available immediately after\n\n📱 **In-App Stream:**\n• Exclusive mobile experience\n• Live stats integration\n• Multi-view options\n• Interactive polls & predictions\n\n**Stream Schedule:**\n• All matches broadcast live\n• Pre-show coverage 30 mins before\n• Post-match analysis\n• Player interviews\n\n**Features:**\n• 4K/60fps video quality\n• Professional commentary teams\n• Real-time stats overlay\n• Instant replays\n• Watch parties enabled\n\n**Drops & Rewards:**\n• Watch for exclusive in-game items\n• Twitch drops enabled\n• Loyalty points for viewers"
  },
  
  // Merchandise responses
  "merchandise": {
    basic: "👕 **Official NECS Merch:**\n• Team jerseys: $45-65\n• Hoodies: $55\n• Collectible pins: $10\n• Limited posters: $20\n\nShop online in the app!",
    detailed: "👕 **Complete Merchandise Guide:**\n\n**Apparel:**\n• NECS 2026 Official Jerseys - $65\n• Team Jerseys - $45-55\n• Hoodies & Zip-ups - $55-70\n• T-Shirts - $25-30\n• Hats & Beanies - $20-25\n• Socks - $12\n\n**Collectibles:**\n• Limited Edition Pins - $10 each\n• Pin Sets (all 12 teams) - $100\n Autographed Player Cards - $15-50\n• Championship Posters - $20\n• Team Banners - $30\n\n**Accessories:**\n• Lanyards - $8\n• Keychains - $10\n• Phone Cases - $25\n• Mouse Pads - $15\n• Water Bottles - $18\n\n**Premium Items:**\n• Signed Jerseys - $150-300\n• Championship Rings (replica) - $75\n• VIP Gift Pack - $100\n\n**Where to Buy:**\n• Arena merchandise booths (3 locations)\n• Online shop (in the app!)\n• Team-specific pop-up stores\n• Pop-up shop on Broadway\n\n**Exclusive Deals:**\n• Buy 3+ items, get 15% off\n• VIP pass holders: 10% discount always"
  },
  
  // Rules & Policies
  "rules": {
    basic: "📋 **Event Rules:**\n✅ Allowed: Small bags, phones, cameras, signs\n❌ Not Allowed: Large bags, outside food/drinks, weapons\n\nSecurity screening for all attendees.",
    detailed: "📋 **Complete Event Policies:**\n\n**✅ ALLOWED:**\n• Clear bags under 12\" x 12\" x 6\"\n• Small purses/clutches under 6\" x 9\"\n• Phones & personal cameras\n• Signs & posters (nothing offensive)\n• Team merchandise & apparel\n• Medical devices & medications\n• Sealed baby food/formula\n\n**❌ NOT ALLOWED:**\n• Backpacks or large bags\n• Outside food & beverages\n• Alcohol (available for purchase inside)\n• Weapons of any kind\n• Laser pointers\n• Professional camera equipment\n• Drones\n• Noisemakers (air horns, etc.)\n• Illegal substances\n\n**Security Procedures:**\n• All attendees screened at entry\n• Metal detectors at all entrances\n• Bag checks required\n• Valid ID required (18+ for VIP lounge)\n• Wristbands for re-entry\n\n**Code of Conduct:**\n• Respect all players & staff\n• No harassment or hate speech\n• Follow staff instructions\n• Stay in designated areas\n• Violators will be removed without refund"
  },
  
  // Age & Family
  "age": {
    basic: "👨‍👩‍👧‍👦 **Age Policy:**\n• All ages welcome!\n• Kids under 5: FREE (lap seating)\n• Family sections available\n• Supervision recommended for under 13",
    detailed: "👨‍👩‍👧‍👦 **Family & Age Information:**\n\n**Age Requirements:**\n• All ages welcome - no minimum!\n• Kids under 5: Free admission (must sit on lap)\n• Ages 5+: Ticket required\n• No age restriction for VIP passes\n\n**Family-Friendly Features:**\n• Designated family seating sections\n• Kid-friendly concessions\n• Family restrooms\n• Quiet rooms for breaks\n• Nursing rooms available\n\n**Supervision:**\n• Children under 13 must be with adult\n• Teens 13-17 allowed without adult (parents' discretion)\n• Lost child station at Info Desk\n• ID wristbands available for kids\n\n**Educational:**\n• Great introduction to competitive esports\n• STEM learning opportunities\n• Meet pro players (role models)\n• Team strategy lessons\n\n**Parent Tips:**\n• Bring ear protection (arena can be loud)\n• Pack snacks for younger kids\n• Plan bathroom breaks between matches\n• Consider Saturday morning for fewer crowds"
  },
  
  // Contact & Support
  "contact": {
    basic: "📞 **Contact NECS Support:**\n• Email: support@necs2026.com\n• Phone: 1-800-NECS-2026\n• Response: 24-48 hours\n\nFor day-of help, visit Info Desk at arena entrance.",
    detailed: "📞 **Complete Contact Information:**\n\n**Customer Support:**\n📧 Email: support@necs2026.com\n📱 Phone: 1-800-NECS-2026 (toll-free)\n⏰ Hours: Mon-Fri 9 AM - 6 PM CST\n⏱️ Response Time: 24-48 hours\n\n**Social Media:**\n🐦 Twitter: @NECS2026 (fastest responses)\n📘 Facebook: /NECS2026Official\n📸 Instagram: @necs2026\n🎮 Discord: discord.gg/necs2026\n💬 Live Chat: Available in app\n\n**Event Day Support:**\n🎫 Ticket Issues: Ticket window at entrance\nℹ️ Info Desk: Main arena lobby\n🚨 Emergencies: Security stations (6 locations)\n👮 Lost & Found: North entrance desk\n\n**Press Inquiries:**\n📰 press@necs2026.com\n\n**Sponsorship:**\n🤝 sponsors@necs2026.com\n\n**Medical:**\n🏥 First aid stations at all 4 corners\n🚑 EMTs on-site 24/7 during event"
  },
  
  // Nashville attractions
  "nashville": {
    basic: "🎵 **Nashville Highlights:**\n• Broadway honky-tonks (live music 24/7!)\n• Country Music Hall of Fame\n• Hot chicken restaurants\n• Rooftop bars\n\nTry the Music Quiz in the app!",
    detailed: "🎵 **Complete Nashville Guide:**\n\n**Music Scene:**\n• Broadway (honky-tonks with live music)\n• Ryman Auditorium (historic venue)\n• Grand Ole Opry\n• Country Music Hall of Fame\n• Musicians' Hall of Fame\n• Johnny Cash Museum\n• Live music 24/7 downtown!\n\n**Food & Drink:**\n🔥 Hot Chicken: Hattie B's, Prince's\n🍖 BBQ: Martin's, Edley's\n🥃 Whiskey: Nearest Green Distillery\n🍺 Breweries: Yazoo, Jackalope\n☕ Coffee: Barista Parlor, Crema\n\n**Attractions:**\n• Parthenon (full-scale replica!)\n• Frist Art Museum\n• Cheekwood Estate & Gardens\n• Belle Meade Plantation\n• Pedestrian Bridge (great views)\n\n**Neighborhoods:**\n• The Gulch (trendy restaurants/bars)\n• East Nashville (hip/artsy)\n• 12 South (boutique shopping)\n• Germantown (historic charm)\n\n**Tips:**\n• Most downtown attractions walkable\n• Pedal taverns are fun group activity\n• Live music is FREE in most bars\n• Don't miss the Music Quiz in the app!"
  }
};

// Smart NLP function with context awareness
function getBotResponse(userMessage: string, lastTopic?: string): string {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  // Check for follow-up requests
  const followUpPhrases = ["tell me more", "more details", "more info", "more information", "elaborate", "expand", "details", "full info"];
  const isFollowUp = followUpPhrases.some(phrase => lowerMessage.includes(phrase));
  
  if (isFollowUp && lastTopic && botResponses[lastTopic]?.detailed) {
    return botResponses[lastTopic].detailed!;
  }
  
  // Greeting detection
  if (lowerMessage.match(/^(hi|hello|hey|sup|yo|greetings|howdy)[\s!,?]*$/)) {
    return "Hey there! 👋 I'm NECS Bot, your AI assistant for NECS 2026! I can help you with:\n\n• Tournament schedule & dates\n• Venue information\n• Ticket prices\n• Games & prize pools\n• Teams & players\n• Parking & transportation\n• Food, merchandise & more!\n\nJust ask me anything or click a Quick Question above!";
  }
  
  // Thanks detection
  if (lowerMessage.match(/\b(thanks|thank you|thx|ty|tysm|appreciate)\b/)) {
    return "You're very welcome! 😊 I'm here anytime you need help with NECS 2026. Feel free to ask more questions!";
  }
  
  // Keyword pattern matching with priority
  
  // Schedule/Date keywords
  if (lowerMessage.match(/\b(when|date|schedule|time|start|begin|day|days|march)\b/)) {
    return botResponses["when is necs 2026"].basic;
  }
  
  // Venue/Location keywords
  if (lowerMessage.match(/\b(where|venue|location|place|arena|address|bridgestone|directions|how to get)\b/)) {
    return botResponses["where is the venue"].basic;
  }
  
  // Ticket/Price keywords
  if (lowerMessage.match(/\b(ticket|price|cost|how much|buy|purchase|pass|admission|vip|general)\b/)) {
    return botResponses["how much are tickets"].basic;
  }
  
  // Games keywords
  if (lowerMessage.match(/\b(game|games|play|playing|title|competition|valorant|rocket league|smash|ssbu|val|rl|prize pool)\b/)) {
    return botResponses["what games are featured"].basic;
  }
  
  // Teams keywords
  if (lowerMessage.match(/\b(team|teams|roster|player|players|who|competing|coldfront|emberfall)\b/)) {
    return botResponses["teams"].basic;
  }
  
  // Parking keywords
  if (lowerMessage.match(/\b(park|parking|car|drive|transportation|bus|uber|lyft|transit|garage)\b/)) {
    return botResponses["parking"].basic;
  }
  
  // Food keywords
  if (lowerMessage.match(/\b(food|eat|drink|restaurant|dining|concession|hungry|snack|meal)\b/)) {
    return botResponses["food"].basic;
  }
  
  // Streaming keywords
  if (lowerMessage.match(/\b(stream|streaming|watch|online|twitch|youtube|broadcast|viewing)\b/)) {
    return botResponses["stream"].basic;
  }
  
  // Merchandise keywords
  if (lowerMessage.match(/\b(merch|merchandise|shirt|jersey|hoodie|buy|shop|store|clothing)\b/)) {
    return botResponses["merchandise"].basic;
  }
  
  // Rules keywords
  if (lowerMessage.match(/\b(rule|rules|allowed|bring|policy|policies|bag|security|prohibited)\b/)) {
    return botResponses["rules"].basic;
  }
  
  // Age/Family keywords
  if (lowerMessage.match(/\b(age|kid|kids|child|children|family|minor|baby|young)\b/)) {
    return botResponses["age"].basic;
  }
  
  // Contact keywords
  if (lowerMessage.match(/\b(contact|help|support|email|phone|call|reach|assistance)\b/)) {
    return botResponses["contact"].basic;
  }
  
  // Nashville keywords
  if (lowerMessage.match(/\b(nashville|music city|tennessee|attractions|tourist|visit|see|downtown|broadway)\b/)) {
    return botResponses["nashville"].basic;
  }
  
  // Default fallback
  return "I'm not quite sure about that specific question, but I'm here to help! 🤖\n\nI can answer questions about:\n• When & where (dates, venue, schedule)\n• Tickets & pricing\n• Games & prize pools\n• Teams & players\n• Parking & getting there\n• Food & drinks\n• Merchandise\n• Streaming options\n• Rules & policies\n• Nashville attractions\n\nTry asking one of these topics or click a Quick Question above!";
}

// Function to extract topic from response for context tracking
function extractTopicFromMessage(message: string): string | undefined {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("when") || lowerMessage.includes("schedule")) return "when is necs 2026";
  if (lowerMessage.includes("where") || lowerMessage.includes("venue")) return "where is the venue";
  if (lowerMessage.includes("ticket") || lowerMessage.includes("price")) return "how much are tickets";
  if (lowerMessage.includes("game") || lowerMessage.includes("games")) return "what games are featured";
  if (lowerMessage.includes("team")) return "teams";
  if (lowerMessage.includes("park")) return "parking";
  if (lowerMessage.includes("food")) return "food";
  if (lowerMessage.includes("stream")) return "stream";
  if (lowerMessage.includes("merch")) return "merchandise";
  if (lowerMessage.includes("rule")) return "rules";
  if (lowerMessage.includes("age") || lowerMessage.includes("family")) return "age";
  if (lowerMessage.includes("contact")) return "contact";
  if (lowerMessage.includes("nashville")) return "nashville";
  
  return undefined;
}

export default function Help() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm NECS Bot, your personal AI assistant for NECS 2026! 👋\n\nI can help you with tickets, schedule, teams, venue info, and much more. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [lastTopic, setLastTopic] = useState<string | undefined>(undefined);
  const [showQuickQuestions, setShowQuickQuestions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendBotMessage = (text: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleQuickQuestion = (question: typeof quickQuestions[0]) => {
    handleUserMessage(question.query);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    handleUserMessage(inputValue);
    setInputValue('');
  };

  const handleUserMessage = (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Extract topic from user message for context
    const topic = extractTopicFromMessage(messageText);
    if (topic) setLastTopic(topic);

    // Get bot response with 1.5 second delay for realistic feel
    setTimeout(() => {
      const response = getBotResponse(messageText, lastTopic);
      sendBotMessage(response);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header - More Compact */}
      <div className="px-[18px] pt-4 pb-3 border-b border-[rgba(62,121,255,0.15)]">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}>
            <Bot className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="font-bold font-['Space_Grotesk'] leading-none">
              <span className="text-[#3e79ff] text-[24px]">NECS</span>
              <span className="text-white text-[24px]"> Bot</span>
            </h1>
            <p className="text-[#97a8d8] text-[11px] font-['Inter']">AI-Powered Assistant</p>
          </div>
        </div>
      </div>

      {/* Quick Questions - Collapsible */}
      <div className="border-b border-[rgba(62,121,255,0.15)]">
        <motion.button
          whileHover={{ backgroundColor: "rgba(62,121,255,0.08)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowQuickQuestions(!showQuickQuestions)}
          className="w-full px-[18px] py-2.5 flex items-center justify-between hover:bg-[rgba(62,121,255,0.05)] transition-colors"
        >
          <h3 className="text-white text-[12px] font-bold font-['Inter']">Quick Questions</h3>
          <motion.div
            animate={{ rotate: showQuickQuestions ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {showQuickQuestions ? (
              <ChevronUp className="w-4 h-4 text-[#3e79ff]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#3e79ff]" />
            )}
          </motion.div>
        </motion.button>
        {showQuickQuestions && (
          <div className="px-[18px] pb-3">
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(q)}
                  className="rounded-[12px] p-3 border border-[rgba(62,121,255,0.22)] hover:border-[rgba(62,121,255,0.45)] hover:scale-[1.02] active:scale-95 transition-all"
                  style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
                >
                  <q.icon className="w-4 h-4 text-[#3e79ff] mb-1" />
                  <p className="text-white text-[11px] font-['Inter'] text-left leading-tight">{q.text}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Chat Messages - Takes most space */}
      <div className="flex-1 overflow-y-auto px-[18px] py-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((message, index) => (
            <motion.div 
              key={message.id} 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {message.sender === 'bot' && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}
                >
                  <Bot className="w-4 h-4 text-white" />
                </motion.div>
              )}
              
              <div className={`flex-1 ${message.sender === 'user' ? 'flex justify-end' : ''}`}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-[14px] p-3 ${
                    message.sender === 'bot' 
                      ? 'border border-[rgba(62,121,255,0.22)] max-w-[88%]' 
                      : 'border border-[rgba(245,197,33,0.35)] max-w-[82%]'
                  }`}
                  style={{ 
                    backgroundImage: message.sender === 'bot' 
                      ? "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)"
                      : "linear-gradient(135deg, rgba(245, 197, 33, 0.15) 0%, rgba(245, 197, 33, 0.05) 100%)"
                  }}
                >
                  <pre className="text-white text-[13px] font-['Inter'] leading-relaxed mb-1 whitespace-pre-wrap font-sans">
                    {message.text}
                  </pre>
                  <span className="text-[#97a8d8] text-[9px] font-['Inter']">
                    {formatTime(message.timestamp)}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex gap-2"
          >
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}>
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div 
              className="rounded-[14px] p-3 border border-[rgba(62,121,255,0.22)]"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
            >
              <div className="flex gap-1">
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0 }}
                  className="w-2 h-2 bg-[#3e79ff] rounded-full"
                />
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0, delay: 0.2 }}
                  className="w-2 h-2 bg-[#3e79ff] rounded-full"
                />
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0, delay: 0.4 }}
                  className="w-2 h-2 bg-[#3e79ff] rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field - Fixed at bottom */}
      <div className="px-[18px] pb-[15px] pt-2 border-t border-[rgba(62,121,255,0.15)]">
        <div className="rounded-[14px] border border-[rgba(62,121,255,0.35)] overflow-hidden flex items-center"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask a question..."
            className="flex-1 bg-transparent px-3 py-2.5 text-white text-[13px] font-['Inter'] outline-none placeholder-[#97a8d8]"
          />
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(62,121,255,0.15)" }}
            whileTap={{ scale: 0.9, rotate: 45 }}
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="px-3 py-2.5 hover:bg-[rgba(62,121,255,0.15)] active:bg-[rgba(62,121,255,0.25)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4 text-[#3e79ff]" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}