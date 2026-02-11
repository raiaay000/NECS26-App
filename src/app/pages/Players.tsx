import { FilterButton } from '../components/FilterButton';
import { ShowMoreButton } from '../components/ShowMoreButton';
import { Trophy, TrendingUp, Search } from 'lucide-react';
import { TEAM_LOGOS } from '../utils/teamLogos';
import { getGameBadgeColor } from '../utils/gameColors';
import { useState, useMemo } from 'react';

type GameFilter = 'All Games' | 'Valorant' | 'Rocket League' | 'Smash';

interface Player {
  id: number;
  name: string;
  team: keyof typeof TEAM_LOGOS;
  game: 'VALORANT' | 'ROCKET LEAGUE' | 'SMASH ULTIMATE';
  rank: number;
  rating: number;
  kd: string;
}

const ALL_PLAYERS: Player[] = [
  { id: 1, name: 'Phoenix', team: 'Radiant Vanguard', game: 'VALORANT', rank: 1, rating: 98, kd: '1.52' },
  { id: 2, name: 'Viper', team: 'Midnight Pulse', game: 'VALORANT', rank: 2, rating: 97, kd: '1.48' },
  { id: 3, name: 'Jett', team: 'Legacy Apex', game: 'VALORANT', rank: 3, rating: 96, kd: '1.45' },
  { id: 4, name: 'Sage', team: 'Neon Circuit', game: 'VALORANT', rank: 4, rating: 95, kd: '1.41' },
  { id: 5, name: 'Velocity', team: 'Turbo Drift', game: 'ROCKET LEAGUE', rank: 5, rating: 94, kd: '1.38' },
  { id: 6, name: 'Rocket', team: 'Smash Legion', game: 'ROCKET LEAGUE', rank: 6, rating: 93, kd: '1.35' },
  { id: 7, name: 'Nitro', team: 'Emberfall', game: 'ROCKET LEAGUE', rank: 7, rating: 92, kd: '1.32' },
  { id: 8, name: 'Turbo', team: 'Apex Ascent', game: 'ROCKET LEAGUE', rank: 8, rating: 91, kd: '1.30' },
  { id: 9, name: 'Frost', team: 'Coldfront', game: 'SMASH ULTIMATE', rank: 9, rating: 90, kd: '2.15' },
  { id: 10, name: 'Thunder', team: 'Thunder Alloy', game: 'SMASH ULTIMATE', rank: 10, rating: 89, kd: '2.08' },
  { id: 11, name: 'Prism', team: 'Prism Wardens', game: 'SMASH ULTIMATE', rank: 11, rating: 88, kd: '2.05' },
  { id: 12, name: 'Gravity', team: 'Gravity Pulse', game: 'SMASH ULTIMATE', rank: 12, rating: 87, kd: '2.01' },
  { id: 13, name: 'Cypher', team: 'Radiant Vanguard', game: 'VALORANT', rank: 13, rating: 86, kd: '1.28' },
  { id: 14, name: 'Reyna', team: 'Midnight Pulse', game: 'VALORANT', rank: 14, rating: 85, kd: '1.26' },
  { id: 15, name: 'Boost', team: 'Turbo Drift', game: 'ROCKET LEAGUE', rank: 15, rating: 84, kd: '1.25' },
  { id: 16, name: 'Drift', team: 'Smash Legion', game: 'ROCKET LEAGUE', rank: 16, rating: 83, kd: '1.23' },
  { id: 17, name: 'Blaze', team: 'Emberfall', game: 'ROCKET LEAGUE', rank: 17, rating: 82, kd: '1.21' },
  { id: 18, name: 'Ice', team: 'Coldfront', game: 'SMASH ULTIMATE', rank: 18, rating: 81, kd: '1.98' },
  { id: 19, name: 'Bolt', team: 'Thunder Alloy', game: 'SMASH ULTIMATE', rank: 19, rating: 80, kd: '1.95' },
];

const FILTERS: GameFilter[] = ['All Games', 'Valorant', 'Rocket League', 'Smash'];

export default function Players() {
  const [selectedFilter, setSelectedFilter] = useState<GameFilter>('All Games');
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlayers = useMemo(() => {
    let players = ALL_PLAYERS;

    // Apply game filter
    if (selectedFilter !== 'All Games') {
      players = players.filter(player => {
        if (selectedFilter === 'Valorant') return player.game === 'VALORANT';
        if (selectedFilter === 'Rocket League') return player.game === 'ROCKET LEAGUE';
        if (selectedFilter === 'Smash') return player.game === 'SMASH ULTIMATE';
        return true;
      });
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      players = players.filter(player =>
        player.name.toLowerCase().includes(query) ||
        player.team.toLowerCase().includes(query) ||
        player.game.toLowerCase().includes(query)
      );
    }

    return players;
  }, [selectedFilter, searchQuery]);

  const displayedPlayers = showMore ? filteredPlayers : filteredPlayers.slice(0, 12);
  const remainingCount = filteredPlayers.length - displayedPlayers.length;

  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk'] mb-2">Top Players</h1>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">The best competitors in NECS</p>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5d7191]" />
        <input
          type="text"
          placeholder="Search players, teams..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowMore(false);
          }}
          className="w-full bg-[rgba(10,18,33,0.8)] border border-[rgba(62,121,255,0.22)] rounded-[16px] pl-12 pr-4 py-3 text-white text-[14px] font-['Inter'] placeholder:text-[#5d7191] focus:outline-none focus:border-[rgba(62,121,255,0.45)]"
        />
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {FILTERS.map(filter => (
          <FilterButton
            key={filter}
            label={filter}
            active={selectedFilter === filter}
            onClick={() => {
              setSelectedFilter(filter);
              setShowMore(false);
            }}
          />
        ))}
      </div>

      <div className="space-y-3">
        {displayedPlayers.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      {remainingCount > 0 && (
        <div className="mt-4">
          <ShowMoreButton
            expanded={showMore}
            onClick={() => setShowMore(!showMore)}
            moreCount={remainingCount}
          />
        </div>
      )}
    </div>
  );
}

function PlayerCard({ player }: { player: Player }) {
  return (
    <div
      className="rounded-[20px] border border-[rgba(62,121,255,0.22)] p-4"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="flex items-center gap-4">
        <div 
          className="flex items-center justify-center w-10 h-10 rounded-[12px]"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(245, 197, 33) 0%, rgb(255, 165, 0) 100%)" }}
        >
          <span className="text-white text-[14px] font-bold font-['Space_Grotesk']">#{player.rank}</span>
        </div>

        <div className="w-14 h-14 rounded-[12px] overflow-hidden border-2 border-[#3E79FF] bg-black p-2">
          <img alt={player.team} className="w-full h-full object-contain" src={TEAM_LOGOS[player.team]} />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white text-[15px] font-bold font-['Inter']">{player.name}</h3>
            {player.rank === 1 && <Trophy className="w-4 h-4 text-[#f5c521]" />}
          </div>
          <div className="flex items-center gap-2 mb-1">
            <div className="size-[20px] rounded-[6px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden bg-black p-0.5">
              <img alt={player.team} className="w-full h-full object-contain" src={TEAM_LOGOS[player.team]} />
            </div>
            <p className="text-[#97a8d8] text-[12px] font-['Inter']">{player.team}</p>
          </div>
          <span className={`inline-block px-[8px] py-[4px] rounded-[999px] border ${getGameBadgeColor(player.game)} text-[9px] font-extrabold font-['Inter'] uppercase tracking-[0.8px]`}>
            {player.game}
          </span>
        </div>

        <div className="text-right">
          <div className="flex items-center gap-1 justify-end mb-1">
            <span className="text-white font-bold text-[20px] font-['Space_Grotesk']">{player.rating}</span>
            <TrendingUp className="w-4 h-4 text-[#00ff88]" />
          </div>
          <p className="text-[#5d7191] text-[11px] font-['Inter']">K/D {player.kd}</p>
        </div>
      </div>
    </div>
  );
}
