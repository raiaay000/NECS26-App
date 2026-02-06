import imgRadiantVanguardLogo from 'figma:asset/89a552dfbe23821f9ddb05fef2a5a6d8d87608d1.png';
import imgMidnightPulseLogo from 'figma:asset/e9924b6cc2ad57afd43725356f783a6e5446b3b5.png';
import imgLegacyApexLogo from 'figma:asset/1125f01ad0d81daa20897a216109597cdd9304c2.png';
import imgNeonCircuitLogo from 'figma:asset/159ede76147efb06ffb96ac690e58cb544a43bc2.png';
import imgTurboDriftLogo from 'figma:asset/109ee1d129c15451366169418f88b90e03abbdad.png';
import imgSmashLegionLogo from 'figma:asset/fa5beb57d13f69aa6cf097fdd2d9017e03b39a81.png';
import imgEmberfallLogo from 'figma:asset/f108e0c8ca28bb006b4331dc8cd5a4b7d40e25a4.png';
import imgApexAscentLogo from 'figma:asset/e5ca10f4026c8a502279fda1adf9ba5ef24c58e3.png';
import imgColdfrontLogo from 'figma:asset/1d2cd256f62c61bdc72f6920a5791df2b9bbd225.png';
import imgThunderAlloyLogo from 'figma:asset/1535ab231d497c498b96578261576032935bdd4d.png';
import imgPrismWardensLogo from 'figma:asset/4581f56c0f1bad3d9c91e7f2d2277684352d17f3.png';
import imgGravityPulseLogo from 'figma:asset/5a3c5fb698c70d8a40366010ffd86135549c2966.png';
import { TrendingUp } from 'lucide-react';

interface Team {
  rank: number;
  name: string;
  logo: string;
  region: string;
  skillRating: number;
  wins: number;
  losses: number;
}

const teams: Team[] = [
  { rank: 1, name: 'Radiant Vanguard', logo: imgRadiantVanguardLogo, region: 'North America', skillRating: 98, wins: 24, losses: 3 },
  { rank: 2, name: 'Midnight Pulse', logo: imgMidnightPulseLogo, region: 'Europe', skillRating: 96, wins: 23, losses: 4 },
  { rank: 3, name: 'Legacy Apex', logo: imgLegacyApexLogo, region: 'Asia', skillRating: 94, wins: 22, losses: 5 },
  { rank: 4, name: 'Neon Circuit', logo: imgNeonCircuitLogo, region: 'South America', skillRating: 92, wins: 21, losses: 6 },
  { rank: 5, name: 'Turbo Drift', logo: imgTurboDriftLogo, region: 'North America', skillRating: 90, wins: 20, losses: 7 },
  { rank: 6, name: 'Smash Legion', logo: imgSmashLegionLogo, region: 'Europe', skillRating: 88, wins: 19, losses: 8 },
  { rank: 7, name: 'Emberfall', logo: imgEmberfallLogo, region: 'Asia', skillRating: 86, wins: 18, losses: 9 },
  { rank: 8, name: 'Apex Ascent', logo: imgApexAscentLogo, region: 'Oceania', skillRating: 84, wins: 17, losses: 10 },
  { rank: 9, name: 'Coldfront', logo: imgColdfrontLogo, region: 'North America', skillRating: 82, wins: 16, losses: 11 },
  { rank: 10, name: 'Thunder Alloy', logo: imgThunderAlloyLogo, region: 'Europe', skillRating: 80, wins: 15, losses: 12 },
  { rank: 11, name: 'Prism Wardens', logo: imgPrismWardensLogo, region: 'Asia', skillRating: 78, wins: 14, losses: 13 },
  { rank: 12, name: 'Gravity Pulse', logo: imgGravityPulseLogo, region: 'South America', skillRating: 76, wins: 13, losses: 14 },
];

export default function Leaderboard() {
  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-6 h-6 text-[#3E79FF]" />
          <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk']">Power Rankings</h1>
        </div>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">Teams ranked by skill rating and recent performance</p>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {teams.map((team) => (
          <TeamRankCard key={team.rank} team={team} />
        ))}
      </div>
    </div>
  );
}

interface TeamRankCardProps {
  team: Team;
}

function TeamRankCard({ team }: TeamRankCardProps) {
  const getRankBadge = (rank: number) => {
    if (rank === 1) return '🏆';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return rank;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return '#f5c521';
    if (rank === 2) return '#9ca3af';
    if (rank === 3) return '#d97706';
    return '#5d7191';
  };

  const getSkillRatingColor = (rating: number) => {
    if (rating >= 95) return '#3E79FF';
    if (rating >= 90) return '#8b7aff';
    return '#5d7191';
  };

  return (
    <div 
      className="rounded-[20px] p-4 border border-[rgba(62,121,255,0.22)]"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="flex items-center gap-4 mb-3">
        <div 
          className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[20px] font-bold font-['Space_Grotesk']"
          style={{ 
            backgroundColor: 'rgba(62, 121, 255, 0.12)',
            color: getRankColor(team.rank),
            border: `1px solid ${getRankColor(team.rank)}40`
          }}
        >
          {getRankBadge(team.rank)}
        </div>
        <div 
          className="size-[48px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden p-1 bg-black"
        >
          <img alt={team.name} className="w-full h-full object-contain" src={team.logo} />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-[15px] font-bold font-['Inter'] mb-1">{team.name}</h3>
          <p className="text-[#97a8d8] text-[11px] font-['Inter']">{team.region}</p>
        </div>
        <div className="text-right">
          <div 
            className="text-[28px] font-bold font-['Space_Grotesk'] mb-1"
            style={{ color: getSkillRatingColor(team.skillRating) }}
          >
            {team.skillRating}
          </div>
          <p className="text-[#5d7191] text-[10px] font-['Inter']">Skill Rating</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-[6px] bg-[rgba(62,121,255,0.12)] rounded-full overflow-hidden mb-3">
        <div 
          className="h-full rounded-full transition-all"
          style={{ 
            width: `${team.skillRating}%`,
            backgroundColor: getSkillRatingColor(team.skillRating)
          }}
        />
      </div>

      {/* Win/Loss Record */}
      <div className="flex items-center justify-end gap-4">
        <div className="text-right">
          <span className="text-[#3E79FF] text-[13px] font-bold font-['Inter']">W: {team.wins}</span>
        </div>
        <div className="text-right">
          <span className="text-[#ff4655] text-[13px] font-bold font-['Inter']">L: {team.losses}</span>
        </div>
      </div>
    </div>
  );
}