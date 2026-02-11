import { TEAM_LOGOS } from '../utils/teamLogos';
import { getGameTextColor } from '../utils/gameColors';
import { Brain, TrendingUp, Heart } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Match {
  team1: keyof typeof TEAM_LOGOS;
  team2: keyof typeof TEAM_LOGOS;
  winProbability: number;
  predictedWinner: string;
  game: string;
  confidence: 'High' | 'Medium' | 'Low';
  odds1: string;
  odds2: string;
}

const PREDICTIONS: Match[] = [
  { team1: 'Coldfront', team2: 'Emberfall', winProbability: 67, predictedWinner: 'Coldfront', game: 'Valorant', confidence: 'High', odds1: '1.45', odds2: '2.65' },
  { team1: 'Midnight Pulse', team2: 'Neon Circuit', winProbability: 58, predictedWinner: 'Midnight Pulse', game: 'Rocket League', confidence: 'Medium', odds1: '1.72', odds2: '2.15' },
  { team1: 'Radiant Vanguard', team2: 'Legacy Apex', winProbability: 73, predictedWinner: 'Radiant Vanguard', game: 'Valorant', confidence: 'High', odds1: '1.37', odds2: '3.10' },
  { team1: 'Turbo Drift', team2: 'Apex Ascent', winProbability: 62, predictedWinner: 'Turbo Drift', game: 'Rocket League', confidence: 'Medium', odds1: '1.61', odds2: '2.38' },
];

const CONFIDENCE_COLORS = {
  High: '#3E79FF',
  Medium: '#ffa500',
  Low: '#ff4655'
} as const;

export default function Predictions() {
  const [userPredictions, setUserPredictions] = useState<Record<number, string>>({});
  const [likedPredictions, setLikedPredictions] = useState<Set<number>>(new Set());

  const handlePrediction = (matchIndex: number, team: string) => {
    setUserPredictions(prev => ({
      ...prev,
      [matchIndex]: prev[matchIndex] === team ? '' : team
    }));
  };

  const toggleLike = (matchIndex: number) => {
    setLikedPredictions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(matchIndex)) {
        newSet.delete(matchIndex);
      } else {
        newSet.add(matchIndex);
      }
      return newSet;
    });
  };

  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="w-6 h-6 text-[#f5c521]" />
          <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk']">Predictions</h1>
        </div>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">Make your picks & see AI predictions</p>
      </div>

      <div className="space-y-4 mb-6">
        {PREDICTIONS.map((pred, idx) => (
          <PredictionCard 
            key={idx} 
            {...pred} 
            matchIndex={idx}
            userPrediction={userPredictions[idx]}
            onPrediction={handlePrediction}
            isLiked={likedPredictions.has(idx)}
            onToggleLike={toggleLike}
          />
        ))}
      </div>

      <div 
        className="rounded-[20px] p-5 border border-[rgba(245,197,33,0.35)]"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(245, 197, 33, 0.12) 0%, rgb(10, 18, 33) 100%)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-[#f5c521]" />
          <h3 className="text-[#f5c521] text-[15px] font-bold font-['Inter']">AI Insights</h3>
        </div>
        <p className="text-[#97a8d8] text-[13px] font-['Inter'] leading-relaxed mb-3">
          Our AI analyzes team performance, head-to-head records, recent form, and player statistics to generate match predictions.
        </p>
        <p className="text-[#5d7191] text-[11px] font-['Inter']">
          Predictions are updated in real-time based on the latest data.
        </p>
      </div>
    </div>
  );
}

interface PredictionCardProps extends Match {
  matchIndex: number;
  userPrediction?: string;
  onPrediction: (matchIndex: number, team: string) => void;
  isLiked: boolean;
  onToggleLike: (matchIndex: number) => void;
}

function PredictionCard({ team1, team2, winProbability, predictedWinner, game, confidence, odds1, odds2, matchIndex, userPrediction, onPrediction, isLiked, onToggleLike }: PredictionCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: matchIndex * 0.1 }}
      className="rounded-[20px] p-5 border border-[rgba(62,121,255,0.22)]"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`text-[11px] font-bold font-['Inter'] uppercase tracking-wide ${getGameTextColor(game)}`}>
          {game}
        </span>
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => onToggleLike(matchIndex)}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {isLiked ? (
                <motion.div
                  key="liked"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <Heart className="w-5 h-5 text-[#ff4655] fill-[#ff4655]" />
                  <motion.div
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Heart className="w-5 h-5 text-[#ff4655] fill-[#ff4655]" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="unliked"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Heart className="w-5 h-5 text-[#5d7191]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-[#f5c521]" />
            <span className="text-[#f5c521] text-[11px] font-bold font-['Inter']">AI</span>
          </div>
        </div>
      </div>

      {/* Teams with odds */}
      <div className="flex items-center justify-between mb-4">
        <motion.button
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ 
            scale: 0.92, 
            rotate: [0, -5, 5, -5, 0],
            transition: { type: "spring", stiffness: 500, damping: 15 }
          }}
          onClick={() => onPrediction(matchIndex, team1)}
          className={`flex flex-col items-center gap-2 px-3 py-2 rounded-[12px] border transition-all ${
            userPrediction === team1 
              ? 'border-[#f5c521] bg-[rgba(245,197,33,0.12)]' 
              : 'border-[rgba(255,255,255,0.14)]'
          }`}
          animate={userPrediction === team1 ? {
            boxShadow: [
              "0 0 0 0 rgba(245, 197, 33, 0)",
              "0 0 0 6px rgba(245, 197, 33, 0.3)",
              "0 0 0 0 rgba(245, 197, 33, 0)"
            ]
          } : {}}
          transition={{ duration: 1.2, repeat: userPrediction === team1 ? Infinity : 0 }}
        >
          <div className="size-[48px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black">
            <img alt={team1} className="w-full h-full object-contain" src={TEAM_LOGOS[team1]} />
          </div>
          <span className={`text-[13px] font-bold font-['Inter'] ${predictedWinner === team1 ? 'text-[#f5c521]' : 'text-white'}`}>
            {team1}
          </span>
          <div className="bg-[rgba(62,121,255,0.22)] border border-[rgba(62,121,255,0.35)] px-2 py-1 rounded-[8px]">
            <span className="text-[#3E79FF] text-[11px] font-bold font-['Inter']">{odds1}</span>
          </div>
        </motion.button>

        <span className="text-[#5d7191] text-[14px] font-bold">VS</span>

        <motion.button
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ 
            scale: 0.92, 
            rotate: [0, 5, -5, 5, 0],
            transition: { type: "spring", stiffness: 500, damping: 15 }
          }}
          onClick={() => onPrediction(matchIndex, team2)}
          className={`flex flex-col items-center gap-2 px-3 py-2 rounded-[12px] border transition-all ${
            userPrediction === team2 
              ? 'border-[#f5c521] bg-[rgba(245,197,33,0.12)]' 
              : 'border-[rgba(255,255,255,0.14)]'
          }`}
          animate={userPrediction === team2 ? {
            boxShadow: [
              "0 0 0 0 rgba(245, 197, 33, 0)",
              "0 0 0 6px rgba(245, 197, 33, 0.3)",
              "0 0 0 0 rgba(245, 197, 33, 0)"
            ]
          } : {}}
          transition={{ duration: 1.2, repeat: userPrediction === team2 ? Infinity : 0 }}
        >
          <div className="size-[48px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black">
            <img alt={team2} className="w-full h-full object-contain" src={TEAM_LOGOS[team2]} />
          </div>
          <span className={`text-[13px] font-bold font-['Inter'] ${predictedWinner === team2 ? 'text-[#f5c521]' : 'text-white'}`}>
            {team2}
          </span>
          <div className="bg-[rgba(62,121,255,0.22)] border border-[rgba(62,121,255,0.35)] px-2 py-1 rounded-[8px]">
            <span className="text-[#3E79FF] text-[11px] font-bold font-['Inter']">{odds2}</span>
          </div>
        </motion.button>
      </div>

      {/* User Prediction Status */}
      {userPrediction && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-3 p-3 rounded-[12px] bg-[rgba(245,197,33,0.08)] border border-[rgba(245,197,33,0.25)]"
        >
          <p className="text-[#f5c521] text-[12px] font-bold font-['Inter']">
            Your Pick: {userPrediction}
          </p>
        </motion.div>
      )}

      {/* AI Probability */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#97a8d8] text-[12px] font-['Inter']">AI Win Probability</span>
          <span className="text-[#f5c521] text-[16px] font-bold font-['Space_Grotesk']">{winProbability}%</span>
        </div>
        <div className="w-full h-[8px] bg-[rgba(62,121,255,0.12)] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${winProbability}%` }}
            transition={{ duration: 1, delay: matchIndex * 0.1 + 0.3 }}
            className="h-full rounded-full"
            style={{ 
              backgroundImage: "linear-gradient(90deg, #f5c521 0%, #ffa500 100%)"
            }}
          />
        </div>
      </div>

      {/* AI Prediction */}
      <div className="flex items-center justify-between">
        <span className="text-[#97a8d8] text-[12px] font-['Inter']">AI Prediction</span>
        <div className="flex items-center gap-2">
          <span className="text-white text-[13px] font-bold font-['Inter']">{predictedWinner}</span>
          <div 
            className="px-2 py-1 rounded-full text-[10px] font-bold font-['Inter']"
            style={{ 
              backgroundColor: `${CONFIDENCE_COLORS[confidence]}20`,
              color: CONFIDENCE_COLORS[confidence],
              border: `1px solid ${CONFIDENCE_COLORS[confidence]}40`
            }}
          >
            {confidence}
          </div>
        </div>
      </div>
    </motion.div>
  );
}