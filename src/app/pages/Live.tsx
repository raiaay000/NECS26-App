import { Play, Eye } from 'lucide-react';
import { TEAM_LOGOS, TeamName } from '../utils/teamLogos';
import { getGameBadgeColor } from '../utils/gameColors';

interface LiveMatch {
  id: number;
  game: string;
  team1: TeamName;
  team2: TeamName;
  score1: number;
  score2: number;
  viewers: string;
}

const LIVE_MATCHES: LiveMatch[] = [
  { id: 1, game: 'VALORANT', team1: 'Radiant Vanguard', team2: 'Midnight Pulse', score1: 11, score2: 9, viewers: '24.5K' },
  { id: 2, game: 'ROCKET LEAGUE', team1: 'Turbo Drift', team2: 'Smash Legion', score1: 3, score2: 2, viewers: '18.2K' },
  { id: 3, game: 'SMASH ULTIMATE', team1: 'Coldfront', team2: 'Thunder Alloy', score1: 2, score2: 1, viewers: '15.8K' },
  { id: 4, game: 'VALORANT', team1: 'Legacy Apex', team2: 'Neon Circuit', score1: 8, score2: 6, viewers: '21.4K' },
  { id: 5, game: 'ROCKET LEAGUE', team1: 'Emberfall', team2: 'Apex Ascent', score1: 4, score2: 3, viewers: '12.9K' },
  { id: 6, game: 'SMASH ULTIMATE', team1: 'Prism Wardens', team2: 'Gravity Pulse', score1: 3, score2: 3, viewers: '19.3K' },
];

export default function Live() {
  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk'] mb-2">Live Matches</h1>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">Watch the best matches happening now</p>
      </div>

      <div className="space-y-4">
        {LIVE_MATCHES.map(match => (
          <LiveMatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

function LiveMatchCard({ match }: { match: LiveMatch }) {
  return (
    <div
      className="rounded-[24px] border-2 border-[#f5c521] p-5"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div 
          className="flex gap-[6px] items-center px-[13px] py-[7px] rounded-[999px] border border-[rgba(245,197,33,0.35)]"
          style={{ backgroundImage: "linear-gradient(144.817deg, rgba(245, 197, 33, 0.25) 0%, rgba(8, 26, 54, 0.3) 100%)" }}
        >
          <div className="bg-[#f5c521] rounded-[4px] shadow-[0px_0px_12px_0px_rgba(245,197,33,0.8)] size-[8px]" />
          <span className="text-[#f5c521] text-[11px] font-bold font-['Inter'] tracking-[0.2px] uppercase">LIVE NOW</span>
        </div>
        <span className={`ml-auto px-[11px] py-[5px] rounded-[999px] border ${getGameBadgeColor(match.game)} text-[10px] font-extrabold font-['Inter'] tracking-[1px] uppercase`}>
          {match.game}
        </span>
      </div>

      <div className="flex items-center justify-between mb-5">
        <TeamDisplay name={match.team1} />
        <Score score1={match.score1} score2={match.score2} />
        <TeamDisplay name={match.team2} />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Eye className="w-4 h-4 text-[#97a8d8]" />
        <span className="text-[#97a8d8] text-[13px] font-['Inter']">{match.viewers} watching</span>
      </div>

      <button 
        className="w-full py-[14px] rounded-[16px] flex items-center justify-center gap-2 border border-[rgba(62,121,255,0.45)]"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" }}
      >
        <Play className="w-4 h-4 text-white fill-white" />
        <span className="text-white text-[13px] font-bold font-['Inter'] tracking-[0.4px] uppercase">Watch Live</span>
      </button>
    </div>
  );
}

function TeamDisplay({ name }: { name: TeamName }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="size-[64px] rounded-[16px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black">
        <img alt={name} className="w-full h-full object-contain" src={TEAM_LOGOS[name]} />
      </div>
      <p className="text-white text-[14px] font-bold font-['Inter'] text-center">{name}</p>
    </div>
  );
}

function Score({ score1, score2 }: { score1: number; score2: number }) {
  return (
    <div className="flex items-center gap-3 px-4">
      <span className="text-[#f7f9ff] text-[42px] font-bold font-['Space_Grotesk']">{score1}</span>
      <span className="text-[#324a6d] text-[28px] font-bold font-['Space_Grotesk']">-</span>
      <span className="text-[#f7f9ff] text-[42px] font-bold font-['Space_Grotesk']">{score2}</span>
    </div>
  );
}
