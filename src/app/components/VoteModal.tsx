import { X, Trophy } from 'lucide-react';
import { TEAM_LOGOS, TeamName } from '../utils/teamLogos';
import { useState } from 'react';

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TEAMS: TeamName[] = [
  'Radiant Vanguard',
  'Midnight Pulse',
  'Legacy Apex',
  'Neon Circuit',
  'Turbo Drift',
  'Smash Legion',
  'Emberfall',
  'Apex Ascent',
  'Coldfront',
  'Thunder Alloy',
  'Prism Wardens',
  'Gravity Pulse',
];

export function VoteModal({ isOpen, onClose }: VoteModalProps) {
  const [selectedTeam, setSelectedTeam] = useState<TeamName | null>(null);

  if (!isOpen) return null;

  const handleVote = () => {
    if (selectedTeam) {
      alert(`Thank you for voting for ${selectedTeam}! 🎉`);
      onClose();
      setSelectedTeam(null);
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 z-40"
        onClick={onClose}
      />
      
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-h-[80vh] overflow-hidden rounded-[24px] border border-[rgba(62,121,255,0.35)]"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
      >
        <div className="flex flex-col max-h-[80vh]">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[rgba(62,121,255,0.22)]">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#f5c521]" />
              <h2 className="text-white text-[20px] font-bold font-['Space_Grotesk']">Vote Now</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-[12px] hover:bg-[rgba(62,121,255,0.12)] transition-colors"
            >
              <X className="w-5 h-5 text-[#97a8d8]" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5">
            <p className="text-[#97a8d8] text-[14px] font-['Inter'] mb-4 text-center">
              What is your favorite team?
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {TEAMS.map(team => (
                <button
                  key={team}
                  onClick={() => setSelectedTeam(team)}
                  className={`p-4 rounded-[16px] border transition-all ${
                    selectedTeam === team
                      ? 'border-[rgba(245,197,33,0.45)] bg-[rgba(245,197,33,0.12)]'
                      : 'border-[rgba(62,121,255,0.22)] hover:border-[rgba(62,121,255,0.35)]'
                  }`}
                  style={selectedTeam === team ? undefined : { backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-[48px] rounded-[12px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden bg-black p-1">
                      <img alt={team} className="w-full h-full object-contain" src={TEAM_LOGOS[team]} />
                    </div>
                    <span className={`text-[12px] font-bold font-['Inter'] text-center ${
                      selectedTeam === team ? 'text-[#f5c521]' : 'text-white'
                    }`}>
                      {team}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-[rgba(62,121,255,0.22)]">
            <button 
              onClick={handleVote}
              disabled={!selectedTeam}
              className={`w-full py-[14px] rounded-[16px] flex items-center justify-center gap-2 border ${
                selectedTeam 
                  ? 'border-[rgba(62,121,255,0.45)] cursor-pointer' 
                  : 'border-[rgba(62,121,255,0.22)] opacity-50 cursor-not-allowed'
              }`}
              style={selectedTeam ? { backgroundImage: "linear-gradient(135deg, rgb(37, 86, 185) 0%, rgb(21, 65, 150) 100%)" } : undefined}
            >
              <Trophy className="w-4 h-4 text-white" />
              <span className="text-white text-[14px] font-bold font-['Inter'] uppercase">Submit Vote</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
