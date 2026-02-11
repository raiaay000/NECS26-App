import { motion, AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import Live from './pages/Live';
import Players from './pages/Players';
import Replays from './pages/Replays';
import Brackets from './pages/Brackets';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Teams from './pages/Teams';
import Schedule from './pages/Schedule';
import Venue from './pages/Venue';
import Leaderboard from './pages/Leaderboard';
import Predictions from './pages/Predictions';
import Shop from './pages/Shop';
import MusicQuiz from './pages/MusicQuiz';
import Help from './pages/Help';
import { Home as HomeIcon, PlayCircle, Users, Video, Trophy, MessageCircle, User, MoreHorizontal, X, UsersRound, Calendar, MapPin, TrendingUp, Brain, ShoppingBag, Music, Bot } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type Page = 'home' | 'live' | 'players' | 'replays' | 'brackets' | 'chat' | 'profile' | 'teams' | 'schedule' | 'venue' | 'leaderboard' | 'predictions' | 'shop' | 'music-quiz' | 'help';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'live':
        return <Live key="live" />;
      case 'players':
        return <Players key="players" />;
      case 'replays':
        return <Replays key="replays" />;
      case 'brackets':
        return <Brackets key="brackets" />;
      case 'chat':
        return <Chat key="chat" />;
      case 'profile':
        return <Profile key="profile" />;
      case 'teams':
        return <Teams key="teams" />;
      case 'schedule':
        return <Schedule key="schedule" />;
      case 'venue':
        return <Venue key="venue" />;
      case 'leaderboard':
        return <Leaderboard key="leaderboard" />;
      case 'predictions':
        return <Predictions key="predictions" />;
      case 'shop':
        return <Shop key="shop" />;
      case 'music-quiz':
        return <MusicQuiz key="music-quiz" />;
      case 'help':
        return <Help key="help" />;
      default:
        return <Home key="home" onNavigate={handlePageChange} />;
    }
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    setShowMoreMenu(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Phone Container - Wider version */}
      <div className="relative w-[420px] h-[650px] bg-black rounded-[50px] shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-black z-50 flex items-center justify-between px-8">
          <span className="text-white text-sm">9:41</span>
          <div className="w-32 h-7 bg-black rounded-full"></div>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-gray-700 rounded-sm"></div>
            <div className="w-4 h-4 bg-gray-700 rounded-sm"></div>
            <div className="w-6 h-4 bg-gray-700 rounded-sm"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="h-full pt-11 pb-20 overflow-y-auto bg-gradient-to-b from-gray-900 to-black" ref={scrollContainerRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={currentPage === 'help' ? {} : { opacity: 0, x: 30, y: 10 }}
              animate={currentPage === 'help' ? {} : { opacity: 1, x: 0, y: 0 }}
              exit={currentPage === 'help' ? {} : { opacity: 0, x: -30, y: -10 }}
              transition={currentPage === 'help' ? { duration: 0 } : { duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* More Menu Overlay */}
        <AnimatePresence>
          {showMoreMenu && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 pt-11" 
              onClick={() => setShowMoreMenu(false)}
            >
              <motion.div 
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                exit={{ y: 400 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="absolute bottom-20 left-0 right-0 bg-gray-950 border-t-2 border-blue-500 rounded-t-3xl p-6" 
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">More Options</h3>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowMoreMenu(false)} 
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </motion.button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <MoreMenuItem
                    icon={<Video className="w-6 h-6" />}
                    label="Replays"
                    active={currentPage === 'replays'}
                    onClick={() => handlePageChange('replays')}
                    delay={0}
                  />
                  <MoreMenuItem
                    icon={<Trophy className="w-6 h-6" />}
                    label="Brackets"
                    active={currentPage === 'brackets'}
                    onClick={() => handlePageChange('brackets')}
                    delay={0.05}
                  />
                  <MoreMenuItem
                    icon={<MessageCircle className="w-6 h-6" />}
                    label="Chat"
                    active={currentPage === 'chat'}
                    onClick={() => handlePageChange('chat')}
                    delay={0.1}
                  />
                  <MoreMenuItem
                    icon={<User className="w-6 h-6" />}
                    label="Profile"
                    active={currentPage === 'profile'}
                    onClick={() => handlePageChange('profile')}
                    delay={0.15}
                  />
                  <MoreMenuItem
                    icon={<UsersRound className="w-6 h-6" />}
                    label="Teams"
                    active={currentPage === 'teams'}
                    onClick={() => handlePageChange('teams')}
                    delay={0.2}
                  />
                  <MoreMenuItem
                    icon={<Calendar className="w-6 h-6" />}
                    label="Schedule"
                    active={currentPage === 'schedule'}
                    onClick={() => handlePageChange('schedule')}
                    delay={0.25}
                  />
                  <MoreMenuItem
                    icon={<MapPin className="w-6 h-6" />}
                    label="Venue"
                    active={currentPage === 'venue'}
                    onClick={() => handlePageChange('venue')}
                    delay={0.3}
                  />
                  <MoreMenuItem
                    icon={<TrendingUp className="w-6 h-6" />}
                    label="Leaderboard"
                    active={currentPage === 'leaderboard'}
                    onClick={() => handlePageChange('leaderboard')}
                    delay={0.35}
                  />
                  <MoreMenuItem
                    icon={<Brain className="w-6 h-6" />}
                    label="Predictions"
                    active={currentPage === 'predictions'}
                    onClick={() => handlePageChange('predictions')}
                    delay={0.4}
                  />
                  <MoreMenuItem
                    icon={<ShoppingBag className="w-6 h-6" />}
                    label="Shop"
                    active={currentPage === 'shop'}
                    onClick={() => handlePageChange('shop')}
                    delay={0.45}
                  />
                  <MoreMenuItem
                    icon={<Music className="w-6 h-6" />}
                    label="Music Quiz"
                    active={currentPage === 'music-quiz'}
                    onClick={() => handlePageChange('music-quiz')}
                    delay={0.5}
                  />
                  <MoreMenuItem
                    icon={<Bot className="w-6 h-6" />}
                    label="Help"
                    active={currentPage === 'help'}
                    onClick={() => handlePageChange('help')}
                    delay={0.55}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-950 border-t-2 border-blue-500 z-30">
          <div className="flex items-center justify-around h-full px-4">
            <NavItem
              icon={<HomeIcon className="w-6 h-6" />}
              label="Home"
              active={currentPage === 'home'}
              onClick={() => handlePageChange('home')}
            />
            <NavItem
              icon={<PlayCircle className="w-6 h-6" />}
              label="Live"
              active={currentPage === 'live'}
              onClick={() => handlePageChange('live')}
            />
            <NavItem
              icon={<Users className="w-6 h-6" />}
              label="Players"
              active={currentPage === 'players'}
              onClick={() => handlePageChange('players')}
            />
            <NavItem
              icon={<MoreHorizontal className="w-6 h-6" />}
              label="More"
              active={showMoreMenu}
              onClick={() => setShowMoreMenu(!showMoreMenu)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <motion.button 
      onClick={onClick} 
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center gap-1 transition-colors"
    >
      <motion.div 
        animate={active ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
        className={`${active ? 'text-blue-400' : 'text-gray-400'}`}
      >
        {icon}
      </motion.div>
      <span className={`text-xs ${active ? 'text-blue-400 font-bold' : 'text-gray-400'}`}>
        {label}
      </span>
    </motion.button>
  );
}

interface MoreMenuItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  delay: number;
}

function MoreMenuItem({ icon, label, active, onClick, delay }: MoreMenuItemProps) {
  return (
    <motion.button 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick} 
      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-800 transition-colors"
    >
      <motion.div 
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
        className={`${active ? 'text-blue-400' : 'text-gray-400'}`}
      >
        {icon}
      </motion.div>
      <span className={`text-xs text-center ${active ? 'text-blue-400 font-bold' : 'text-gray-400'}`}>
        {label}
      </span>
    </motion.button>
  );
}