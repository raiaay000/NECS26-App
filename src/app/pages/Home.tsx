import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/svg-nbinlan093';
import imgNecs2026Logo from '/src/assets/abdfe18974432ad381c36af717ed374a5e15bc7a.png';
import imgColdfrontLogo from '/src/assets/1d2cd256f62c61bdc72f6920a5791df2b9bbd225.png';
import imgEmberfallLogo from '/src/assets/f108e0c8ca28bb006b4331dc8cd5a4b7d40e25a4.png';
import imgTurboDriftLogo from '/src/assets/109ee1d129c15451366169418f88b90e03abbdad.png';
import imgNeonCircuitLogo from '/src/assets/159ede76147efb06ffb96ac690e58cb544a43bc2.png';
import imgValorant from '/src/assets/19969f2649ceaac6a34ab5ffebbd7755deae79b7.png';
import imgRocketLeague from '/src/assets/6125a7d75ee7036a20fac24afb31f96d799c2320.png';
import imgSmashUltimate from '/src/assets/21c413f53c90a0c177637d6c5dcb56ef1a7cc924.png';
import imgMidnightPulseLogo from '/src/assets/e9924b6cc2ad57afd43725356f783a6e5446b3b5.png';
import imgPrismWardensLogo from '/src/assets/4581f56c0f1bad3d9c91e7f2d2277684352d17f3.png';
import imgThunderAlloyLogo from '/src/assets/1535ab231d497c498b96578261576032935bdd4d.png';
import imgLegacyApexLogo from '/src/assets/1125f01ad0d81daa20897a216109597cdd9304c2.png';
import { VoteModal } from '../components/VoteModal';
import { FadeIn } from '../components/FadeIn';
import { Trophy, Medal, Music, Bot } from 'lucide-react';
import { useState } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [showVoteModal, setShowVoteModal] = useState(false);

  return (
    <>
      <div className="px-[18px] py-4 pb-24">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-[17px] border-b border-[rgba(62,121,255,0.32)]">
          <div className="flex flex-col gap-[6px]">
            <div className="h-[96px] relative mb-2">
              <img alt="NECS" className="h-full w-auto" src={imgNecs2026Logo} />
            </div>
            <h2 className="text-white text-[20px] font-bold font-['Space_Grotesk'] tracking-[0.2px]">
              Live in Music City
            </h2>
            <p className="text-[#97a8d8] text-[12px] font-['Inter']">
              Bridgestone Arena • Nashville
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <button 
              onClick={() => onNavigate('music-quiz')}
              className="bg-[rgba(15,58,107,0.22)] border-2 border-[rgba(62,121,255,0.32)] rounded-[14px] size-[44px] flex items-center justify-center hover:bg-[rgba(15,58,107,0.35)] hover:border-[rgba(62,121,255,0.5)] active:scale-95 transition-all"
            >
              <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p24c48f00} fill="#3E79FF" />
              </svg>
            </button>
            <button 
              onClick={() => {
                alert('🔔 Notifications\n\n• Match starting in 10 mins!\n• Coldfront vs Emberfall\n• New leaderboard update\n• Shop sale: 20% off jerseys');
              }}
              className="bg-[rgba(15,58,107,0.22)] border-2 border-[rgba(62,121,255,0.32)] rounded-[14px] size-[44px] flex items-center justify-center hover:bg-[rgba(15,58,107,0.35)] hover:border-[rgba(62,121,255,0.5)] active:scale-95 transition-all"
            >
              <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p4e65c00} fill="#3E79FF" />
              </svg>
            </button>
          </div>
        </div>

        {/* Screen Title with Pill */}
        <div className="flex items-center justify-between mb-[16px]">
          <h3 className="text-[#f7f9ff] text-[20px] font-bold font-['Space_Grotesk']">Home</h3>
          <div className="bg-[rgba(245,197,33,0.12)] border border-[rgba(245,197,33,0.35)] rounded-[999px] px-[11px] py-[7px] shadow-[0px_0px_10px_0px_rgba(245,197,33,0.25)]">
            <span className="text-[#f5c521] text-[11px] font-extrabold font-['Inter'] uppercase">Overview</span>
          </div>
        </div>

        {/* Featured Live Match Card */}
        <FadeIn>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-[24px] p-[20px] mb-4 relative border-2 border-[rgba(245,197,33,0.45)]"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <motion.div 
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex gap-[6px] items-center px-[13px] py-[7px] rounded-[999px] border border-[rgba(245,197,33,0.35)]"
                style={{ backgroundImage: "linear-gradient(144.817deg, rgba(245, 197, 33, 0.25) 0%, rgba(8, 26, 54, 0.3) 100%)" }}
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#f5c521] rounded-[4px] shadow-[0px_0px_12px_0px_rgba(245,197,33,0.8)] size-[8px]" 
                />
                <span className="text-[#f5c521] text-[11px] font-bold font-['Inter'] tracking-[0.2px] uppercase">Live</span>
              </motion.div>
              <div className="bg-[rgba(255,70,85,0.08)] border border-[rgba(255,70,85,0.35)] rounded-[999px] px-[11px] py-[5px]">
                <span className="text-[#ff4655] text-[10px] font-extrabold font-['Inter'] tracking-[1px] uppercase">Valorant</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-col items-center gap-3">
                <div className="size-[56px] rounded-[16px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-px bg-black">
                  <img alt="Coldfront" className="w-full h-[85.71%]" src={imgColdfrontLogo} />
                </div>
                <div className="text-center">
                  <p className="text-white text-[13px] font-bold font-['Inter'] mb-[2px]">Coldfront</p>
                  <p className="text-[#5d7191] text-[10px] font-['Inter']">Map 4 - 2</p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-2">
                  <span className="text-[#f7f9ff] text-[48px] font-bold font-['Space_Grotesk']">3</span>
                  <span className="text-[#324a6d] text-[28px] font-bold font-['Space_Grotesk']">-</span>
                  <span className="text-[#f7f9ff] text-[48px] font-bold font-['Space_Grotesk']">2</span>
                </div>
                <p className="text-[#5d7191] text-[11px] font-['Inter'] mt-1">Game 1 • Map 1</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="size-[56px] rounded-[16px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-px bg-black">
                  <img alt="Emberfall" className="w-full h-[85.71%]" src={imgEmberfallLogo} />
                </div>
                <div className="text-center">
                  <p className="text-white text-[13px] font-bold font-['Inter'] mb-[2px]">Emberfall</p>
                  <p className="text-[#5d7191] text-[10px] font-['Inter']">Map 2 - 4</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onNavigate('live')}
              className="w-full py-[14px] rounded-[16px] flex items-center justify-center gap-2 border border-[rgba(62,121,255,0.45)]"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}
            >
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d="M3 2.5v11l10-5.5L3 2.5z" fill="white" />
              </svg>
              <span className="text-white text-[13px] font-bold font-['Inter'] tracking-[0.4px] uppercase">Watch Live</span>
            </button>
          </motion.div>
        </FadeIn>

        {/* Featured Games */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[#f5c521] text-[11px] font-extrabold font-['Inter'] tracking-[0.6px] uppercase">Featured Games</h4>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <GameCard image={imgValorant} title="VALORANT" />
            <GameCard image={imgRocketLeague} title="ROCKET LEAGUE" />
            <GameCard image={imgSmashUltimate} title="SMASH ULTIMATE" />
          </div>
        </div>

        {/* Live Matches */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[#f5c521] text-[11px] font-extrabold font-['Inter'] tracking-[0.6px] uppercase">Live Matches</h4>
            <span className="text-[#5d7191] text-[11px] font-['Inter']">LIVE • 2:40 PM</span>
          </div>
          
          <MatchCard
            team1="Coldfront"
            team1Logo={imgColdfrontLogo}
            team2="Emberfall"
            team2Logo={imgEmberfallLogo}
            score1={7}
            score2={5}
            game="Valorant"
            detail1="Map 4-2"
            detail2="Map 2-4"
          />

          <MatchCard
            team1="Midnight Pulse"
            team1Logo={imgMidnightPulseLogo}
            team2="Prism Wardens"
            team2Logo={imgPrismWardensLogo}
            score1={4}
            score2={2}
            game="Rocket League"
            detail1="Series 3-1"
            detail2="Series 2-3"
          />

          <button 
            onClick={() => onNavigate('live')}
            className="w-full py-[12px] rounded-[16px] border border-[rgba(62,121,255,0.35)] flex items-center justify-center"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
          >
            <span className="text-[#3E79FF] text-[12px] font-bold font-['Inter'] tracking-[0.4px] uppercase">See More Live Matches</span>
          </button>
        </div>

        {/* Upcoming Matches */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[#f5c521] text-[11px] font-extrabold font-['Inter'] tracking-[0.6px] uppercase">Upcoming Matches</h4>
            <span className="text-[#5d7191] text-[11px] font-['Inter']">Today • 4:00 PM</span>
          </div>
          
          <UpcomingMatchCard
            team1="Thunder Alloy"
            team1Logo={imgThunderAlloyLogo}
            team2="Legacy Apex"
            team2Logo={imgLegacyApexLogo}
            game="Smash Bros"
            time="in 1h 20m"
            detail1="Record 5-1"
            detail2="Record 4-2"
          />

          <UpcomingMatchCard
            team1="Turbo Drift"
            team1Logo={imgTurboDriftLogo}
            team2="Neon Circuit"
            team2Logo={imgNeonCircuitLogo}
            game="Rocket League"
            time="in 3h 45m"
            detail1="Record 4-2"
            detail2="Record 3-3"
          />

          <button 
            onClick={() => onNavigate('schedule')}
            className="w-full py-[12px] rounded-[16px] border border-[rgba(62,121,255,0.35)] flex items-center justify-center"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
          >
            <span className="text-[#3E79FF] text-[12px] font-bold font-['Inter'] tracking-[0.4px] uppercase">See More Upcoming Matches</span>
          </button>
        </div>

        {/* AI Predictions */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[#f5c521] text-[11px] font-extrabold font-['Inter'] tracking-[0.6px] uppercase">AI Predictions</h4>
          </div>
          
          <div 
            className="rounded-[20px] p-5 border border-[rgba(245,197,33,0.35)] mb-3"
            style={{ backgroundImage: "linear-gradient(135deg, rgba(245, 197, 33, 0.12) 0%, rgb(10, 18, 33) 100%)" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[#f5c521] text-[12px] font-bold font-['Inter']">COLDFRONT vs EMBERFALL</span>
              <span className="text-[#f5c521] text-[18px] font-bold font-['Space_Grotesk']">67%</span>
            </div>
            <p className="text-[#97a8d8] text-[12px] font-['Inter']">
              AI predicts <span className="text-[#f5c521] font-bold">Coldfront</span> to win with high confidence
            </p>
          </div>

          <button 
            onClick={() => onNavigate('predictions')}
            className="w-full py-[12px] rounded-[16px] border border-[rgba(62,121,255,0.35)] flex items-center justify-center"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
          >
            <span className="text-[#3E79FF] text-[12px] font-bold font-['Inter'] tracking-[0.4px] uppercase">See All</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[#f5c521] text-[11px] font-extrabold font-['Inter'] tracking-[0.6px] uppercase">Quick Actions</h4>
          </div>
          
          <motion.div 
            onClick={() => setShowVoteModal(true)}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rounded-[20px] p-4 mb-3 border border-[rgba(62,121,255,0.22)] relative overflow-hidden cursor-pointer"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f5c521] rounded-l-[20px]" />
            <div className="flex items-center justify-between pl-3">
              <div className="flex items-center gap-3">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="size-[44px] rounded-[12px] bg-[rgba(245,197,33,0.12)] border border-[rgba(245,197,33,0.35)] flex items-center justify-center"
                >
                  <Trophy className="w-5 h-5 text-[#f5c521]" />
                </motion.div>
                <div>
                  <h5 className="text-white text-[14px] font-bold font-['Inter']">Vote Now</h5>
                  <p className="text-[#97a8d8] text-[11px] font-['Inter']">Choose your favorite team</p>
                </div>
              </div>
              <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d="M7 4l6 6-6 6" stroke="#3E79FF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          <motion.div 
            onClick={() => onNavigate('leaderboard')}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rounded-[20px] p-4 border border-[rgba(62,121,255,0.22)] relative overflow-hidden cursor-pointer"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f5c521] rounded-l-[20px]" />
            <div className="flex items-center justify-between pl-3">
              <div className="flex items-center gap-3">
                <motion.div 
                  whileHover={{ rotate: [0, 360], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="size-[44px] rounded-[12px] bg-[rgba(62,121,255,0.12)] border border-[rgba(62,121,255,0.35)] flex items-center justify-center"
                >
                  <Medal className="w-5 h-5 text-[#3E79FF]" />
                </motion.div>
                <div>
                  <h5 className="text-white text-[14px] font-bold font-['Inter']">Leaderboard</h5>
                  <p className="text-[#97a8d8] text-[11px] font-['Inter']">View team rankings</p>
                </div>
              </div>
              <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d="M7 4l6 6-6 6" stroke="#3E79FF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          <motion.div 
            onClick={() => onNavigate('music-quiz')}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rounded-[20px] p-4 border border-[rgba(62,121,255,0.22)] relative overflow-hidden cursor-pointer mb-3"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f5c521] rounded-l-[20px]" />
            <div className="flex items-center justify-between pl-3">
              <div className="flex items-center gap-3">
                <motion.div 
                  whileHover={{ rotate: [0, 360], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="size-[44px] rounded-[12px] bg-[rgba(62,121,255,0.12)] border border-[rgba(62,121,255,0.35)] flex items-center justify-center"
                >
                  <Music className="w-5 h-5 text-[#3E79FF]" />
                </motion.div>
                <div>
                  <h5 className="text-white text-[14px] font-bold font-['Inter']">Music Quiz</h5>
                  <p className="text-[#97a8d8] text-[11px] font-['Inter']">Test your Nashville knowledge</p>
                </div>
              </div>
              <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d="M7 4l6 6-6 6" stroke="#3E79FF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          <motion.div 
            onClick={() => onNavigate('help')}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rounded-[20px] p-4 border border-[rgba(62,121,255,0.22)] relative overflow-hidden cursor-pointer mb-3"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f5c521] rounded-l-[20px]" />
            <div className="flex items-center justify-between pl-3">
              <div className="flex items-center gap-3">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="size-[44px] rounded-[12px] bg-[rgba(62,121,255,0.12)] border border-[rgba(62,121,255,0.35)] flex items-center justify-center"
                >
                  <Bot className="w-5 h-5 text-[#3E79FF]" />
                </motion.div>
                <div>
                  <h5 className="text-white text-[14px] font-bold font-['Inter']">NECS Bot</h5>
                  <p className="text-[#97a8d8] text-[11px] font-['Inter']">AI assistant & help</p>
                </div>
              </div>
              <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d="M7 4l6 6-6 6" stroke="#3E79FF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <VoteModal isOpen={showVoteModal} onClose={() => setShowVoteModal(false)} />
    </>
  );
}

function GameCard({ image, title }: { image: string; title: string }) {
  return (
    <motion.div 
      className="flex-shrink-0 w-[100px]"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="rounded-[16px] overflow-hidden mb-2 border border-[rgba(62,121,255,0.22)]">
        <img src={image} alt={title} className="w-full h-[100px] object-cover" />
      </div>
      <p className="text-white text-[10px] font-bold font-['Inter'] text-center">{title}</p>
    </motion.div>
  );
}

interface MatchCardProps {
  team1: string;
  team1Logo: string;
  team2: string;
  team2Logo: string;
  score1: number;
  score2: number;
  game: string;
  detail1: string;
  detail2: string;
}

function MatchCard({ team1, team1Logo, team2, team2Logo, score1, score2, game, detail1, detail2 }: MatchCardProps) {
  const getGameColor = () => {
    if (game === 'Valorant') return { bg: 'bg-[rgba(255,70,85,0.08)]', border: 'border-[rgba(255,70,85,0.35)]', text: 'text-[#ff4655]' };
    if (game === 'Rocket League') return { bg: 'bg-[rgba(98,70,234,0.08)]', border: 'border-[rgba(98,70,234,0.35)]', text: 'text-[#8b7aff]' };
    return { bg: 'bg-[rgba(255,165,0,0.08)]', border: 'border-[rgba(255,165,0,0.35)]', text: 'text-[#ffa500]' };
  };

  const colors = getGameColor();

  return (
    <FadeIn>
      <div 
        className="rounded-[20px] p-4 mb-3 border border-[rgba(62,121,255,0.22)]"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className={`${colors.bg} border ${colors.border} rounded-[999px] px-[8px] py-[4px]`}>
            <span className={`${colors.text} text-[9px] font-extrabold font-['Inter'] tracking-[0.8px] uppercase`}>{game}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-[56px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black">
              <img alt={team1} className="w-full h-full object-contain" src={team1Logo} />
            </div>
            <div>
              <p className="text-white text-[13px] font-bold font-['Inter']">{team1}</p>
              <p className="text-[#5d7191] text-[10px] font-['Inter']">{detail1}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white text-[22px] font-bold font-['Space_Grotesk']">{score1}</span>
            <span className="text-[#324a6d] text-[18px]">-</span>
            <span className="text-white text-[22px] font-bold font-['Space_Grotesk']">{score2}</span>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-white text-[13px] font-bold font-['Inter'] text-right">{team2}</p>
              <p className="text-[#5d7191] text-[10px] font-['Inter'] text-right">{detail2}</p>
            </div>
            <div className="size-[56px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black">
              <img alt={team2} className="w-full h-full object-contain" src={team2Logo} />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

interface UpcomingMatchCardProps extends Omit<MatchCardProps, 'score1' | 'score2'> {
  time: string;
}

function UpcomingMatchCard({ team1, team1Logo, team2, team2Logo, game, time, detail1, detail2 }: UpcomingMatchCardProps) {
  const getGameColor = () => {
    if (game === 'Valorant') return { bg: 'bg-[rgba(255,70,85,0.08)]', border: 'border-[rgba(255,70,85,0.35)]', text: 'text-[#ff4655]' };
    if (game === 'Rocket League') return { bg: 'bg-[rgba(98,70,234,0.08)]', border: 'border-[rgba(98,70,234,0.35)]', text: 'text-[#8b7aff]' };
    return { bg: 'bg-[rgba(255,165,0,0.08)]', border: 'border-[rgba(255,165,0,0.35)]', text: 'text-[#ffa500]' };
  };

  const colors = getGameColor();

  return (
    <FadeIn>
      <div 
        className="rounded-[20px] p-4 mb-3 border border-[rgba(62,121,255,0.22)]"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className={`${colors.bg} border ${colors.border} rounded-[999px] px-[8px] py-[4px]`}>
            <span className={`${colors.text} text-[9px] font-extrabold font-['Inter'] tracking-[0.8px] uppercase`}>{game}</span>
          </div>
          <span className="text-[#5d7191] text-[10px] font-['Inter']">{time}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-[56px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black">
              <img alt={team1} className="w-full h-full object-contain" src={team1Logo} />
            </div>
            <div>
              <p className="text-white text-[13px] font-bold font-['Inter']">{team1}</p>
              <p className="text-[#5d7191] text-[10px] font-['Inter']">{detail1}</p>
            </div>
          </div>
          <div className="text-[#5d7191] text-[16px] font-bold">VS</div>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-white text-[13px] font-bold font-['Inter'] text-right">{team2}</p>
              <p className="text-[#5d7191] text-[10px] font-['Inter'] text-right">{detail2}</p>
            </div>
            <div className="size-[56px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black">
              <img alt={team2} className="w-full h-full object-contain" src={team2Logo} />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}