// Chat message storage utility
// Saves all chat messages to localStorage for persistence

export interface ChatMessage {
  id: string;
  message: string;
  timestamp: number;
  username: string;
  userId: string;
  role?: 'user' | 'admin' | 'bot';
}

const STORAGE_KEY = 'necs_chat_history';

export const ChatStorage = {
  // Save a new message
  saveMessage(message: Omit<ChatMessage, 'id' | 'timestamp'>): ChatMessage {
    const newMessage: ChatMessage = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    };

    const messages = this.getAllMessages();
    messages.push(newMessage);
    
    // Keep only last 500 messages to avoid storage limits
    const trimmedMessages = messages.slice(-500);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedMessages));
    
    return newMessage;
  },

  // Get all messages
  getAllMessages(): ChatMessage[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  // Clear all messages
  clearAll(): void {
    localStorage.removeItem(STORAGE_KEY);
  },

  // Get messages from last N hours
  getRecentMessages(hours: number = 24): ChatMessage[] {
    const cutoffTime = Date.now() - (hours * 60 * 60 * 1000);
    return this.getAllMessages().filter(msg => msg.timestamp >= cutoffTime);
  }
};