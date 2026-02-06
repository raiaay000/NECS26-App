import { useState, useRef, useEffect } from 'react';
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
import { Home as HomeIcon, PlayCircle, Users, Video, Trophy, MessageCircle, User, MoreHorizontal, X, UsersRound, Calendar, MapPin, TrendingUp, Brain, ShoppingBag } from 'lucide-react';

type Page = 'home' | 'live' | 'players' | 'replays' | 'brackets' | 'chat' | 'profile' | 'teams' | 'schedule' | 'venue' | 'leaderboard' | 'predictions' | 'shop';

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
      case 'home':
        return <Home onNavigate={handlePageChange} />;
      case 'live':
        return <Live />;
      case 'players':
        return <Players />;
      case 'replays':
        return <Replays />;
      case 'brackets':
        return <Brackets />;
      case 'chat':
        return <Chat />;
      case 'profile':
        return <Profile />;
      case 'teams':
        return <Teams />;
      case 'schedule':
        return <Schedule />;
      case 'venue':
        return <Venue />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'predictions':
        return <Predictions />;
      case 'shop':
        return <Shop />;
      default:
        return <Home onNavigate={handlePageChange} />;
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
          {renderPage()}
        </div>

        {/* More Menu Overlay */}
        {showMoreMenu && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 pt-11" onClick={() => setShowMoreMenu(false)}>
            <div className="absolute bottom-20 left-0 right-0 bg-gray-950 border-t-2 border-blue-500 rounded-t-3xl p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-lg">More Options</h3>
                <button onClick={() => setShowMoreMenu(false)} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <MoreMenuItem
                  icon={<Video className="w-6 h-6" />}
                  label="Replays"
                  active={currentPage === 'replays'}
                  onClick={() => handlePageChange('replays')}
                />
                <MoreMenuItem
                  icon={<Trophy className="w-6 h-6" />}
                  label="Brackets"
                  active={currentPage === 'brackets'}
                  onClick={() => handlePageChange('brackets')}
                />
                <MoreMenuItem
                  icon={<MessageCircle className="w-6 h-6" />}
                  label="Chat"
                  active={currentPage === 'chat'}
                  onClick={() => handlePageChange('chat')}
                />
                <MoreMenuItem
                  icon={<User className="w-6 h-6" />}
                  label="Profile"
                  active={currentPage === 'profile'}
                  onClick={() => handlePageChange('profile')}
                />
                <MoreMenuItem
                  icon={<UsersRound className="w-6 h-6" />}
                  label="Teams"
                  active={currentPage === 'teams'}
                  onClick={() => handlePageChange('teams')}
                />
                <MoreMenuItem
                  icon={<Calendar className="w-6 h-6" />}
                  label="Schedule"
                  active={currentPage === 'schedule'}
                  onClick={() => handlePageChange('schedule')}
                />
                <MoreMenuItem
                  icon={<MapPin className="w-6 h-6" />}
                  label="Venue"
                  active={currentPage === 'venue'}
                  onClick={() => handlePageChange('venue')}
                />
                <MoreMenuItem
                  icon={<TrendingUp className="w-6 h-6" />}
                  label="Leaderboard"
                  active={currentPage === 'leaderboard'}
                  onClick={() => handlePageChange('leaderboard')}
                />
                <MoreMenuItem
                  icon={<Brain className="w-6 h-6" />}
                  label="Predictions"
                  active={currentPage === 'predictions'}
                  onClick={() => handlePageChange('predictions')}
                />
                <MoreMenuItem
                  icon={<ShoppingBag className="w-6 h-6" />}
                  label="Shop"
                  active={currentPage === 'shop'}
                  onClick={() => handlePageChange('shop')}
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-950 border-t border-gray-800 flex items-center justify-around px-4 z-30">
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
            active={showMoreMenu || ['replays', 'brackets', 'chat', 'profile', 'teams', 'schedule', 'venue', 'leaderboard', 'predictions', 'shop'].includes(currentPage)}
            onClick={() => setShowMoreMenu(!showMoreMenu)}
          />
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
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 transition-colors"
    >
      <div className={active ? 'text-blue-500' : 'text-gray-500'}>
        {icon}
      </div>
      <span className={`text-[10px] ${active ? 'text-blue-500' : 'text-gray-500'}`}>
        {label}
      </span>
    </button>
  );
}

interface MoreMenuItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

function MoreMenuItem({ icon, label, active, onClick }: MoreMenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2"
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
        active 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
      }`}>
        {icon}
      </div>
      <span className={`text-xs ${active ? 'text-blue-500' : 'text-gray-400'}`}>
        {label}
      </span>
    </button>
  );
}