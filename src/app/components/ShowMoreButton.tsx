import { ChevronDown } from 'lucide-react';

interface ShowMoreButtonProps {
  expanded: boolean;
  onClick: () => void;
  moreCount: number;
}

export function ShowMoreButton({ expanded, onClick, moreCount }: ShowMoreButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full py-[12px] rounded-[16px] border border-[rgba(62,121,255,0.22)] flex items-center justify-center gap-2"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      <span className="text-[#3E79FF] text-[12px] font-bold font-['Inter'] uppercase">
        {expanded ? 'Show Less' : `Show More (${moreCount} more)`}
      </span>
      <ChevronDown className={`w-4 h-4 text-[#3E79FF] transition-transform ${expanded ? 'rotate-180' : ''}`} />
    </button>
  );
}
