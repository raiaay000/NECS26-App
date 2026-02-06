import { TEAM_LOGOS } from '../utils/teamLogos';
import { getGameTextColor } from '../utils/gameColors';
import { Brain, TrendingUp } from 'lucide-react';

const PREDICTIONS = [
  { team1: 'Coldfront', team2: 'Emberfall', winProbability: 67, predictedWinner: 'Coldfront', game: 'Valorant', confidence: 'High' as const },
  { team1: 'Midnight Pulse', team2: 'Neon Circuit', winProbability: 58, predictedWinner: 'Midnight Pulse', game: 'Rocket League', confidence: 'Medium' as const },
  { team1: 'Radiant Vanguard', team2: 'Legacy Apex', winProbability: 73, predictedWinner: 'Radiant Vanguard', game: 'Valorant', confidence: 'High' as const },
  { team1: 'Turbo Drift', team2: 'Apex Ascent', winProbability: 62, predictedWinner: 'Turbo Drift', game: 'Rocket League', confidence: 'Medium' as const },
];

const CONFIDENCE_COLORS = {
  High: '#3E79FF',
  Medium: '#ffa500',
  Low: '#ff4655'
} as const;

export default function Predictions() {
  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="w-6 h-6 text-[#f5c521]" />
          <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk']">AI Predictions</h1>
        </div>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">Powered by advanced machine learning</p>
      </div>

      <div className="space-y-4 mb-6">
        {PREDICTIONS.map((pred, idx) => (
          <PredictionCard key={idx} {...pred} />
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

interface PredictionCardProps {
  team1: keyof typeof TEAM_LOGOS;
  team2: keyof typeof TEAM_LOGOS;
  winProbability: number;
  predictedWinner: string;
  game: string;
  confidence: 'High' | 'Medium' | 'Low';
}

function PredictionCard({ team1, team2, winProbability, predictedWinner, game, confidence }: PredictionCardProps) {
  return (
    <div 
      className="rounded-[20px] p-5 border border-[rgba(62,121,255,0.22)]"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`text-[11px] font-bold font-['Inter'] uppercase tracking-wide ${getGameTextColor(game)}`}>
          {game}
        </span>
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-[#f5c521]" />
          <span className="text-[#f5c521] text-[11px] font-bold font-['Inter']">AI PREDICTION</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="size-[48px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black">
            <img alt={team1} className="w-full h-full object-contain" src={TEAM_LOGOS[team1]} />
          </div>
          <span className={`text-[15px] font-bold font-['Inter'] ${predictedWinner === team1 ? 'text-[#f5c521]' : 'text-white'}`}>
            {team1}
          </span>
        </div>
        <span className="text-[#5d7191] text-[14px] font-bold">VS</span>
        <div className="flex items-center gap-3">
          <span className={`text-[15px] font-bold font-['Inter'] ${predictedWinner === team2 ? 'text-[#f5c521]' : 'text-white'}`}>
            {team2}
          </span>
          <div className="size-[48px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black">
            <img alt={team2} className="w-full h-full object-contain" src={TEAM_LOGOS[team2]} />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#97a8d8] text-[12px] font-['Inter']">Win Probability</span>
          <span className="text-[#f5c521] text-[16px] font-bold font-['Space_Grotesk']">{winProbability}%</span>
        </div>
        <div className="w-full h-[8px] bg-[rgba(62,121,255,0.12)] rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full"
            style={{ 
              width: `${winProbability}%`,
              backgroundImage: "linear-gradient(90deg, #f5c521 0%, #ffa500 100%)"
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[#97a8d8] text-[12px] font-['Inter']">Predicted Winner</span>
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
            {confidence} Confidence
          </div>
        </div>
      </div>
    </div>
  );
}
