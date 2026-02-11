import { TEAM_LOGOS, TeamName } from '../utils/teamLogos';
import { FilterButton } from '../components/FilterButton';
import { getGameTextColor } from '../utils/gameColors';
import { useState, useMemo } from 'react';

type GameFilter = 'All' | 'Valorant' | 'Rocket League' | 'Super Smash Bros';
type GameType = 'Valorant' | 'Rocket League' | 'Super Smash Bros';

interface Team {
  name: TeamName;
  region: string;
  game: GameType;
}

const TEAMS: Team[] = [
  { name: 'Radiant Vanguard', region: 'North America', game: 'Valorant' },
  { name: 'Midnight Pulse', region: 'Europe', game: 'Valorant' },
  { name: 'Legacy Apex', region: 'Asia', game: 'Valorant' },
  { name: 'Neon Circuit', region: 'South America', game: 'Valorant' },
  { name: 'Turbo Drift', region: 'North America', game: 'Rocket League' },
  { name: 'Smash Legion', region: 'Europe', game: 'Rocket League' },
  { name: 'Emberfall', region: 'Asia', game: 'Rocket League' },
  { name: 'Apex Ascent', region: 'Oceania', game: 'Rocket League' },
  { name: 'Coldfront', region: 'North America', game: 'Super Smash Bros' },
  { name: 'Thunder Alloy', region: 'Europe', game: 'Super Smash Bros' },
  { name: 'Prism Wardens', region: 'Asia', game: 'Super Smash Bros' },
  { name: 'Gravity Pulse', region: 'South America', game: 'Super Smash Bros' },
];

const FILTERS: GameFilter[] = ['All', 'Valorant', 'Rocket League', 'Super Smash Bros'];

export default function Teams() {
  const [selectedFilter, setSelectedFilter] = useState<GameFilter>('All');

  const filteredTeams = useMemo(() => {
    if (selectedFilter === 'All') return TEAMS;
    return TEAMS.filter(team => team.game === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk'] mb-2">Competing Teams</h1>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">One Champion</p>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {FILTERS.map(filter => (
          <FilterButton
            key={filter}
            label={filter}
            active={selectedFilter === filter}
            onClick={() => setSelectedFilter(filter)}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredTeams.map(team => (
          <TeamCard key={team.name} team={team} />
        ))}
      </div>
    </div>
  );
}

function TeamCard({ team }: { team: Team }) {
  return (
    <div 
      className="rounded-[20px] border border-[rgba(62,121,255,0.22)] p-4"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="flex flex-col items-center">
        <div className="size-[80px] rounded-[16px] border border-[rgba(255,255,255,0.14)] bg-black flex items-center justify-center overflow-hidden p-2 mb-4">
          <img alt={team.name} className="w-full h-full object-contain" src={TEAM_LOGOS[team.name]} />
        </div>

        <h3 className="text-white text-[15px] font-bold font-['Inter'] text-center mb-2">
          {team.name}
        </h3>
        
        <p className="text-[#97a8d8] text-[11px] font-['Inter'] mb-2">
          {team.region}
        </p>
        
        <span className={`text-[12px] font-bold font-['Inter'] ${getGameTextColor(team.game)}`}>
          {team.game}
        </span>
      </div>
    </div>
  );
}
