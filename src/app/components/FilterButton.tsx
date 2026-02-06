interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-[14px] border text-[11px] font-bold font-['Inter'] whitespace-nowrap transition-all ${
        active
          ? 'bg-[rgba(62,121,255,0.22)] border-[rgba(62,121,255,0.45)] text-[#3E79FF]'
          : 'bg-[rgba(15,58,107,0.22)] border-[rgba(62,121,255,0.22)] text-[#5d7191] hover:border-[rgba(62,121,255,0.35)]'
      }`}
    >
      {label}
    </button>
  );
}
