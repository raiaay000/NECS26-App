import { TEAM_LOGOS, TeamName } from '../utils/teamLogos';
import { getGameBadgeColor } from '../utils/gameColors';
import { FilterButton } from '../components/FilterButton';
import { ShowMoreButton } from '../components/ShowMoreButton';
import { Search, Eye } from 'lucide-react';
import { useState, useMemo } from 'react';

type GameFilter = 'All' | 'Valorant' | 'Rocket League' | 'Super Smash Bros';
type MatchStatus = 'LIVE' | 'Completed' | 'Upcoming';

interface Match {
  id: string;
  time: string;
  game: string;
  team1: TeamName;
  team2: TeamName;
  score1?: number;
  score2?: number;
  status: MatchStatus;
  bestOf: string;
  viewers: string;
  day: number;
}

const ALL_MATCHES: Match[] = [
  // Day 1
  { id: 'd1m1', day: 1, time: '10:00 AM', game: 'Valorant', team1: 'Radiant Vanguard', team2: 'Midnight Pulse', score1: 2, score2: 1, status: 'Completed', bestOf: 'Best of 5', viewers: '5.8K' },
  { id: 'd1m2', day: 1, time: '1:00 PM', game: 'Valorant', team1: 'Legacy Apex', team2: 'Neon Circuit', score1: 1, score2: 2, status: 'Completed', bestOf: 'Best of 5', viewers: '4.2K' },
  { id: 'd1m3', day: 1, time: '4:00 PM', game: 'Rocket League', team1: 'Turbo Drift', team2: 'Smash Legion', score1: 3, score2: 2, status: 'Completed', bestOf: 'Best of 5', viewers: '6.5K' },
  { id: 'd1m4', day: 1, time: '7:00 PM', game: 'Rocket League', team1: 'Emberfall', team2: 'Apex Ascent', score1: 2, score2: 3, status: 'Completed', bestOf: 'Best of 5', viewers: '5.1K' },
  // Day 2
  { id: 'd2m1', day: 2, time: '10:00 AM', game: 'Super Smash Bros', team1: 'Coldfront', team2: 'Thunder Alloy', score1: 1, score2: 0, status: 'LIVE', bestOf: 'Best of 3', viewers: '12.4K' },
  { id: 'd2m2', day: 2, time: '11:30 AM', game: 'Super Smash Bros', team1: 'Prism Wardens', team2: 'Gravity Pulse', status: 'Upcoming', bestOf: 'Best of 3', viewers: 'Expected: 8K+' },
  { id: 'd2m3', day: 2, time: '2:00 PM', game: 'Valorant', team1: 'Radiant Vanguard', team2: 'Legacy Apex', status: 'Upcoming', bestOf: 'Best of 5', viewers: 'Expected: 10K+' },
  { id: 'd2m4', day: 2, time: '5:00 PM', game: 'Valorant', team1: 'Midnight Pulse', team2: 'Neon Circuit', status: 'Upcoming', bestOf: 'Best of 5', viewers: 'Expected: 9K+' },
  // Day 3
  { id: 'd3m1', day: 3, time: '1:00 PM', game: 'Rocket League', team1: 'Turbo Drift', team2: 'Apex Ascent', status: 'Upcoming', bestOf: 'Best of 5', viewers: 'Expected: 7K+' },
  { id: 'd3m2', day: 3, time: '3:30 PM', game: 'Rocket League', team1: 'Emberfall', team2: 'Smash Legion', status: 'Upcoming', bestOf: 'Best of 5', viewers: 'Expected: 6.5K+' },
  { id: 'd3m3', day: 3, time: '6:00 PM', game: 'Super Smash Bros', team1: 'Coldfront', team2: 'Prism Wardens', status: 'Upcoming', bestOf: 'Best of 5', viewers: 'Expected: 9K+' },
  { id: 'd3m4', day: 3, time: '8:30 PM', game: 'Super Smash Bros', team1: 'Thunder Alloy', team2: 'Gravity Pulse', status: 'Upcoming', bestOf: 'Best of 5', viewers: 'Expected: 8.5K+' },
  // Day 4
  { id: 'd4m1', day: 4, time: '2:00 PM', game: 'Valorant', team1: 'Radiant Vanguard', team2: 'Midnight Pulse', status: 'Upcoming', bestOf: 'Best of 7', viewers: 'Expected: 15K+' },
  { id: 'd4m2', day: 4, time: '5:00 PM', game: 'Rocket League', team1: 'Turbo Drift', team2: 'Emberfall', status: 'Upcoming', bestOf: 'Best of 7', viewers: 'Expected: 13K+' },
  { id: 'd4m3', day: 4, time: '8:00 PM', game: 'Super Smash Bros', team1: 'Coldfront', team2: 'Thunder Alloy', status: 'Upcoming', bestOf: 'Best of 7', viewers: 'Expected: 14K+' },
  // Day 5
  { id: 'd5m1', day: 5, time: '3:00 PM', game: 'Valorant', team1: 'Radiant Vanguard', team2: 'Legacy Apex', status: 'Upcoming', bestOf: 'Grand Finals - Best of 7', viewers: 'Expected: 25K+' },
  { id: 'd5m2', day: 5, time: '6:00 PM', game: 'Rocket League', team1: 'Turbo Drift', team2: 'Apex Ascent', status: 'Upcoming', bestOf: 'Grand Finals - Best of 7', viewers: 'Expected: 22K+' },
  { id: 'd5m3', day: 5, time: '9:00 PM', game: 'Super Smash Bros', team1: 'Coldfront', team2: 'Prism Wardens', status: 'Upcoming', bestOf: 'Grand Finals - Best of 7', viewers: 'Expected: 20K+' },
];

const DAY_INFO = [
  { day: 1, title: 'Day 1 - May 6', initialShow: 2 },
  { day: 2, title: 'Day 2 - May 7 (Today)', initialShow: 2 },
  { day: 3, title: 'Day 3 - May 8', initialShow: 2 },
  { day: 4, title: 'Day 4 - May 9', initialShow: 2 },
  { day: 5, title: 'Day 5 - May 10 (Finals)', initialShow: 2 },
];

const FILTERS: GameFilter[] = ['All', 'Valorant', 'Rocket League', 'Super Smash Bros'];

export default function Schedule() {
  const [selectedFilter, setSelectedFilter] = useState<GameFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 2: true });

  const filteredMatches = useMemo(() => {
    let matches = ALL_MATCHES;

    if (selectedFilter !== 'All') {
      matches = matches.filter(match => match.game === selectedFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      matches = matches.filter(match =>
        match.team1.toLowerCase().includes(query) ||
        match.team2.toLowerCase().includes(query) ||
        match.game.toLowerCase().includes(query)
      );
    }

    return matches;
  }, [selectedFilter, searchQuery]);

  const toggleDay = (day: number) => {
    setExpandedDays(prev => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk'] mb-2">Five Days of Competition</h1>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">Detailed Match Schedule</p>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5d7191]" />
        <input
          type="text"
          placeholder="Search teams, games, or dates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[rgba(10,18,33,0.8)] border border-[rgba(62,121,255,0.22)] rounded-[16px] pl-12 pr-4 py-3 text-white text-[14px] font-['Inter'] placeholder:text-[#5d7191] focus:outline-none focus:border-[rgba(62,121,255,0.45)]"
        />
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

      {DAY_INFO.map(({ day, title, initialShow }) => {
        const dayMatches = filteredMatches.filter(m => m.day === day);
        if (dayMatches.length === 0) return null;

        const isExpanded = expandedDays[day];
        const displayedMatches = isExpanded ? dayMatches : dayMatches.slice(0, initialShow);
        const remainingCount = dayMatches.length - displayedMatches.length;

        return (
          <div key={day}>
            <h2 className="text-[#3E79FF] text-[18px] font-bold font-['Space_Grotesk'] mb-4">{title}</h2>
            
            {displayedMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}

            {remainingCount > 0 && (
              <div className="mb-6">
                <ShowMoreButton
                  expanded={isExpanded}
                  onClick={() => toggleDay(day)}
                  moreCount={remainingCount}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function MatchCard({ match }: { match: Match }) {
  const isLive = match.status === 'LIVE';
  const borderColor = isLive ? 'border-[#ff4655] border-2' : 'border-[rgba(62,121,255,0.22)]';

  return (
    <div 
      className={`rounded-[20px] p-4 mb-3 border ${borderColor}`}
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-white text-[14px] font-bold font-['Space_Grotesk']">{match.time}</span>
          <span className={`px-[8px] py-[4px] rounded-[999px] border ${getGameBadgeColor(match.game)} text-[9px] font-extrabold font-['Inter'] uppercase tracking-[0.8px]`}>
            {match.game}
          </span>
        </div>
        {isLive && (
          <div 
            className="flex gap-[6px] items-center px-[10px] py-[5px] rounded-[999px] border border-[rgba(255,70,85,0.35)]"
            style={{ backgroundImage: "linear-gradient(144.817deg, rgba(255, 70, 85, 0.25) 0%, rgba(8, 26, 54, 0.3) 100%)" }}
          >
            <div className="bg-[#ff4655] rounded-[4px] shadow-[0px_0px_12px_0px_rgba(255,70,85,0.8)] size-[8px]" />
            <span className="text-[#ff4655] text-[10px] font-bold font-['Inter'] tracking-[0.2px] uppercase">Live</span>
          </div>
        )}
      </div>

      <div className="space-y-3 mb-4">
        <TeamRow team={match.team1} score={match.score1} />
        <TeamRow team={match.team2} score={match.score2} />
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[rgba(62,121,255,0.22)]">
        <span className="text-[#97a8d8] text-[11px] font-['Inter']">{match.bestOf}</span>
        <div className="flex items-center gap-1">
          <Eye className="w-3 h-3 text-[#97a8d8]" />
          <span className="text-[#97a8d8] text-[11px] font-['Inter']">{match.viewers}</span>
        </div>
      </div>
    </div>
  );
}

function TeamRow({ team, score }: { team: TeamName; score?: number }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="size-[44px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden bg-black p-1">
          <img alt={team} className="w-full h-full object-contain" src={TEAM_LOGOS[team]} />
        </div>
        <span className="text-white text-[15px] font-bold font-['Inter']">{team}</span>
      </div>
      {score !== undefined && (
        <span className="text-white text-[32px] font-bold font-['Space_Grotesk']">{score}</span>
      )}
    </div>
  );
}
