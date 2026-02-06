import { Trophy } from 'lucide-react';
import imgRadiantVanguardLogo from 'figma:asset/89a552dfbe23821f9ddb05fef2a5a6d8d87608d1.png';
import imgMidnightPulseLogo from 'figma:asset/e9924b6cc2ad57afd43725356f783a6e5446b3b5.png';
import imgLegacyApexLogo from 'figma:asset/1125f01ad0d81daa20897a216109597cdd9304c2.png';
import imgNeonCircuitLogo from 'figma:asset/159ede76147efb06ffb96ac690e58cb544a43bc2.png';
import imgTurboDriftLogo from 'figma:asset/109ee1d129c15451366169418f88b90e03abbdad.png';
import imgSmashLegionLogo from 'figma:asset/fa5beb57d13f69aa6cf097fdd2d9017e03b39a81.png';
import imgEmberfallLogo from 'figma:asset/f108e0c8ca28bb006b4331dc8cd5a4b7d40e25a4.png';
import imgApexAscentLogo from 'figma:asset/e5ca10f4026c8a502279fda1adf9ba5ef24c58e3.png';

export default function Brackets() {
  return (
    <div className="px-[18px] py-4 pb-24">
      <div className="mb-6">
        <h1 className="text-white text-[28px] font-bold font-['Space_Grotesk'] mb-2">Tournament Brackets</h1>
        <p className="text-[#97a8d8] text-[14px] font-['Inter']">NECS 2026 Championship Path</p>
      </div>

      {/* Bracket Overview */}
      <h2 className="text-white text-[18px] font-bold font-['Space_Grotesk'] mb-4">Bracket Overview</h2>

      {/* Quarter Finals - May 8 */}
      <h3 className="text-[#3E79FF] text-[16px] font-bold font-['Space_Grotesk'] mb-3">Quarter Finals - May 8</h3>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        <BracketMatch
          team1="Radiant Vanguard"
          team1Logo={imgRadiantVanguardLogo}
          team2="Apex Ascent"
          team2Logo={imgApexAscentLogo}
          time="May 8, 2:00 PM"
          status="Upcoming"
        />
        <BracketMatch
          team1="Midnight Pulse"
          team1Logo={imgMidnightPulseLogo}
          team2="Emberfall"
          team2Logo={imgEmberfallLogo}
          time="May 8, 3:30 PM"
          status="Upcoming"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <BracketMatch
          team1="Legacy Apex"
          team1Logo={imgLegacyApexLogo}
          team2="Smash Legion"
          team2Logo={imgSmashLegionLogo}
          time="May 8, 5:00 PM"
          status="Upcoming"
        />
        <BracketMatch
          team1="Neon Circuit"
          team1Logo={imgNeonCircuitLogo}
          team2="Turbo Drift"
          team2Logo={imgTurboDriftLogo}
          time="May 8, 6:30 PM"
          status="Upcoming"
        />
      </div>

      {/* Semi Finals - May 9 */}
      <h3 className="text-[#00ff88] text-[16px] font-bold font-['Space_Grotesk'] mb-3">Semi Finals - May 9</h3>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        <BracketMatchTBD time="May 9, 2:00 PM" />
        <BracketMatchTBD time="May 9, 5:00 PM" />
      </div>

      {/* Grand Finals - May 10 */}
      <h3 className="text-[#f5c521] text-[16px] font-bold font-['Space_Grotesk'] mb-3">Grand Finals - May 10</h3>
      
      <div 
        className="rounded-[24px] border-2 border-[#f5c521] p-6"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
      >
        <div className="text-center mb-5">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Trophy className="w-6 h-6 text-[#f5c521]" />
            <h4 className="text-white text-[20px] font-bold font-['Space_Grotesk']">Championship Match</h4>
            <Trophy className="w-6 h-6 text-[#f5c521]" />
          </div>
        </div>

        <div className="text-center space-y-2 mb-4">
          <div className="flex items-center justify-center gap-2">
            <div className="size-[18px] rounded-[6px] bg-[#ff4655] flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">?</span>
            </div>
            <span className="text-[#97a8d8] text-[14px] font-['Inter']">TBD</span>
          </div>
          <span className="text-[#5d7191] text-[14px] font-bold">VS</span>
          <div className="flex items-center justify-center gap-2">
            <div className="size-[18px] rounded-[6px] bg-[#ff4655] flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">?</span>
            </div>
            <span className="text-[#97a8d8] text-[14px] font-['Inter']">TBD</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#97a8d8] text-[13px] font-['Inter'] mb-1">May 10, 3:00 PM</p>
          <p className="text-[#f5c521] text-[12px] font-bold font-['Inter']">$1M Prize Pool</p>
        </div>
      </div>
    </div>
  );
}

interface BracketMatchProps {
  team1: string;
  team1Logo: string;
  team2: string;
  team2Logo: string;
  time: string;
  status: string;
}

function BracketMatch({ team1, team1Logo, team2, team2Logo, time, status }: BracketMatchProps) {
  return (
    <div 
      className="rounded-[16px] border border-[rgba(62,121,255,0.35)] p-3"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="space-y-2 mb-3">
        {/* Team 1 */}
        <div className="flex items-center gap-2">
          <div className="size-[24px] rounded-[6px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden bg-black p-0.5">
            <img alt={team1} className="w-full h-full object-contain" src={team1Logo} />
          </div>
          <span className="text-white text-[12px] font-bold font-['Inter']">{team1}</span>
        </div>

        {/* Team 2 */}
        <div className="flex items-center gap-2">
          <div className="size-[24px] rounded-[6px] border border-[rgba(255,255,255,0.14)] flex items-center justify-center overflow-hidden bg-black p-0.5">
            <img alt={team2} className="w-full h-full object-contain" src={team2Logo} />
          </div>
          <span className="text-white text-[12px] font-bold font-['Inter']">{team2}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[#97a8d8] text-[10px] font-['Inter']">{time}</span>
        <span className="text-[#ffa500] text-[9px] font-bold font-['Inter'] px-2 py-1 rounded-[999px] bg-[rgba(255,165,0,0.08)] border border-[rgba(255,165,0,0.35)]">
          {status.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

interface BracketMatchTBDProps {
  time: string;
}

function BracketMatchTBD({ time }: BracketMatchTBDProps) {
  return (
    <div 
      className="rounded-[16px] border border-[rgba(62,121,255,0.22)] p-3"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <div className="space-y-2 mb-3">
        {/* TBD 1 */}
        <div className="flex items-center gap-2">
          <div className="size-[24px] rounded-[6px] bg-[#5d7191] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">?</span>
          </div>
          <span className="text-[#5d7191] text-[12px] font-['Inter']">TBD</span>
        </div>

        {/* TBD 2 */}
        <div className="flex items-center gap-2">
          <div className="size-[24px] rounded-[6px] bg-[#5d7191] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">?</span>
          </div>
          <span className="text-[#5d7191] text-[12px] font-['Inter']">TBD</span>
        </div>
      </div>

      <span className="text-[#5d7191] text-[10px] font-['Inter']">{time}</span>
    </div>
  );
}
