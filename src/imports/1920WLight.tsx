import svgPaths from "./svg-nbinlan093";
import imgNecs2026Logo from "/src/assets/f915a2bd51169a2aed3ce55db81b448cb38f03c0.png";
import imgColdfrontLogo from "/src/assets/1d2cd256f62c61bdc72f6920a5791df2b9bbd225.png";
import imgEmberfallLogo from "/src/assets/f108e0c8ca28bb006b4331dc8cd5a4b7d40e25a4.png";
import imgTurboDriftLogo from "/src/assets/109ee1d129c15451366169418f88b90e03abbdad.png";
import imgNeonCircuitLogo from "/src/assets/159ede76147efb06ffb96ac690e58cb544a43bc2.png";
import imgValorant from "/src/assets/19969f2649ceaac6a34ab5ffebbd7755deae79b7.png";
import imgRocketLeague from "/src/assets/6125a7d75ee7036a20fac24afb31f96d799c2320.png";
import imgSmashUltimate from "/src/assets/21c413f53c90a0c177637d6c5dcb56ef1a7cc924.png";

function Span() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">9:41</p>
      </div>
    </div>
  );
}

function SpanBattery() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] h-[10px] relative rounded-[3px] shrink-0 w-[24px]" data-name="span.battery">
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[4px] right-[-3px] rounded-br-[2px] rounded-tr-[2px] top-[3px] w-[3px]" data-name="::after" />
    </div>
  );
}

function DivStatusRight() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="div.status-right">
      <div className="bg-[rgba(255,255,255,0.15)] h-[10px] rounded-[3px] shrink-0 w-[18px]" data-name="span.signal" />
      <div className="bg-[rgba(255,255,255,0.15)] h-[10px] rounded-[3px] shrink-0 w-[18px]" data-name="span.wifi" />
      <SpanBattery />
    </div>
  );
}

function DivStatusBar() {
  return (
    <div className="relative shrink-0 w-[369px]" data-name="div.status-bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[10px] pt-[12px] px-[18px] relative w-full">
        <Span />
        <DivStatusRight />
      </div>
    </div>
  );
}

function Necs2026Logo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="NECS 2026 logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[48.21%] left-0 max-w-none top-[25.89%] w-full" src={imgNecs2026Logo} />
      </div>
    </div>
  );
}

function Necs() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="NECS 2026">
      <Necs2026Logo />
    </div>
  );
}

function DivHeaderTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.header-title">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">Live in Music City</p>
      </div>
    </div>
  );
}

function DivHeaderSub() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.header-sub">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Bridgestone Arena • Nashville</p>
      </div>
    </div>
  );
}

function DivHeaderLeft() {
  return (
    <div className="relative shrink-0" data-name="div.header-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative">
        <Necs />
        <DivHeaderTitle />
        <DivHeaderSub />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p24c48f00} fill="var(--fill-0, #3E79FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Music() {
  return (
    <div className="bg-[rgba(15,58,107,0.22)] content-stretch flex items-center justify-center p-[2px] relative rounded-[14px] shrink-0 size-[44px]" data-name="Music">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Component />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p4e65c00} fill="var(--fill-0, #3E79FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notifications() {
  return (
    <div className="bg-[rgba(15,58,107,0.22)] content-stretch flex items-center justify-center p-[2px] relative rounded-[14px] shrink-0 size-[44px]" data-name="Notifications">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Component1 />
    </div>
  );
}

function DivHeaderActions() {
  return (
    <div className="relative shrink-0" data-name="div.header-actions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <Music />
        <Notifications />
      </div>
    </div>
  );
}

function DivAppHeader() {
  return (
    <div className="relative shrink-0 w-[369px]" data-name="div.app-header">
      <div aria-hidden="true" className="absolute border-[rgba(62,121,255,0.32)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[17px] pt-[10px] px-[18px] relative w-full">
        <DivHeaderLeft />
        <DivHeaderActions />
      </div>
    </div>
  );
}

function DivScreenTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.screen-title">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function DivScreenPill() {
  return (
    <div className="bg-[rgba(245,197,33,0.12)] content-stretch flex flex-col items-start px-[11px] py-[7px] relative rounded-[999px] shrink-0" data-name="div.screen-pill">
      <div aria-hidden="true" className="absolute border border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_0px_10px_0px_rgba(245,197,33,0.25)]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Overview</p>
      </div>
    </div>
  );
}

function DivScreenHead() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] right-[18px] top-[16px]" data-name="div.screen-head">
      <DivScreenTitle />
      <DivScreenPill />
    </div>
  );
}

function DivHomeLiveBadge() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[13px] py-[7px] relative rounded-[999px] shrink-0" data-name="div.home-live-badge" style={{ backgroundImage: "linear-gradient(144.817deg, rgba(245, 197, 33, 0.25) 0%, rgba(8, 26, 54, 0.3) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-[#f5c521] rounded-[4px] shadow-[0px_0px_12px_0px_rgba(245,197,33,0.8)] shrink-0 size-[8px]" data-name="span.live-dot" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[11px] tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Live</p>
      </div>
    </div>
  );
}

function SpanGameTag() {
  return (
    <div className="bg-[rgba(255,70,85,0.08)] content-stretch flex flex-col items-start px-[11px] py-[5px] relative rounded-[999px] shrink-0" data-name="span.game-tag">
      <div aria-hidden="true" className="absolute border border-[rgba(255,70,85,0.35)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#ff4655] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Valorant</p>
      </div>
    </div>
  );
}

function DivHomeLiveHeader() {
  return (
    <div className="relative shrink-0 w-[290px]" data-name="div.home-live-header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <DivHomeLiveBadge />
        <SpanGameTag />
      </div>
    </div>
  );
}

function ColdfrontLogo() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px relative" data-name="Coldfront logo">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[85.71%] left-0 max-w-none top-[7.14%] w-full" src={imgColdfrontLogo} />
      </div>
    </div>
  );
}

function DivHomeTeamLogo() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[56px]" data-name="div.home-team-logo" style={{ backgroundImage: "linear-gradient(135deg, rgb(5, 12, 30) 0%, rgba(8, 26, 54, 0.75) 100%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <ColdfrontLogo />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function DivTeamName() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="div.team-name">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Coldfront</p>
      </div>
    </div>
  );
}

function DivTeamNameMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0" data-name="div.team-name:margin">
      <DivTeamName />
    </div>
  );
}

function DivHomeTeam() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-h-px min-w-px relative" data-name="div.home-team">
      <DivHomeTeamLogo />
      <DivTeamNameMargin />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[normal]">4-1</p>
      </div>
    </div>
  );
}

function SpanScoreNum() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="span.score-num">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white tracking-[4px] whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function SpanScoreSep() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-50 relative shrink-0" data-name="span.score-sep">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white tracking-[4px] whitespace-nowrap">
        <p className="leading-[normal]">-</p>
      </div>
    </div>
  );
}

function SpanScoreNum1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="span.score-num">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white tracking-[4px] whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function DivHomeScoreDisplay() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="div.home-score-display">
      <SpanScoreNum />
      <SpanScoreSep />
      <SpanScoreNum1 />
    </div>
  );
}

function DivHomeMatchStatus() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.home-match-status">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative shrink-0 text-[#97a8d8] text-[12px] text-center whitespace-nowrap">
        <p className="mb-0">Map 2 · Round</p>
        <p>16</p>
      </div>
    </div>
  );
}

function DivHomeScoreBlock() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="div.home-score-block">
      <DivHomeScoreDisplay />
      <DivHomeMatchStatus />
    </div>
  );
}

function EmberfallLogo() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px relative" data-name="Emberfall logo">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[71.14%] left-0 max-w-none top-[14.43%] w-full" src={imgEmberfallLogo} />
      </div>
    </div>
  );
}

function DivHomeTeamLogo1() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[56px]" data-name="div.home-team-logo" style={{ backgroundImage: "linear-gradient(135deg, rgb(5, 12, 30) 0%, rgba(8, 26, 54, 0.75) 100%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <EmberfallLogo />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function DivTeamName1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="div.team-name">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Emberfall</p>
      </div>
    </div>
  );
}

function DivTeamNameMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0" data-name="div.team-name:margin">
      <DivTeamName1 />
    </div>
  );
}

function DivHomeTeam1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-h-px min-w-px relative" data-name="div.home-team">
      <DivHomeTeamLogo1 />
      <DivTeamNameMargin1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[normal]">3-2</p>
      </div>
    </div>
  );
}

function DivHomeMatchRow() {
  return (
    <div className="relative shrink-0 w-[290px]" data-name="div.home-match-row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap items-center justify-between relative w-full">
        <DivHomeTeam />
        <DivHomeScoreBlock />
        <DivHomeTeam1 />
      </div>
    </div>
  );
}

function DivHomeMetaItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.home-meta-item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative shrink-0 text-[#97a8d8] text-[0px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="mb-0 text-[11px]">Map</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[14px] text-white">Fracture</p>
      </div>
    </div>
  );
}

function DivHomeMetaItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.home-meta-item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative shrink-0 text-[#97a8d8] text-[0px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="mb-0 text-[11px]">Stage</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[14px] text-white">Playoffs</p>
      </div>
    </div>
  );
}

function DivHomeMetaItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.home-meta-item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative shrink-0 text-[#97a8d8] text-[0px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="mb-0 text-[11px]">Viewers</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[14px] text-white">21.4K</p>
      </div>
    </div>
  );
}

function DivHomeMatchMeta() {
  return (
    <div className="relative shrink-0 w-[290px]" data-name="div.home-match-meta">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <DivHomeMetaItem />
        <DivHomeMetaItem1 />
        <DivHomeMetaItem2 />
      </div>
    </div>
  );
}

function DivHomeLiveCard() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[18px] pl-[24px] pr-[19px] py-[19px] right-[18px] rounded-[20px] top-[58px]" data-name="div.home-live-card" style={{ backgroundImage: "linear-gradient(145.57deg, rgb(8, 20, 43) 0%, rgba(5, 12, 30, 0.85) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[rgba(245,197,33,0.5)] border-b border-l-6 border-r border-solid border-t inset-0 pointer-events-none rounded-[20px] shadow-[0px_30px_80px_0px_rgba(0,0,0,0.45)]" />
      <DivHomeLiveHeader />
      <DivHomeMatchRow />
      <DivHomeMatchMeta />
    </div>
  );
}

function DivHomeStatsIcon() {
  return (
    <div className="bg-[rgba(62,121,255,0.12)] content-stretch flex items-center justify-center p-px relative rounded-[14px] shrink-0 size-[42px]" data-name="div.home-stats-icon">
      <div aria-hidden="true" className="absolute border border-[rgba(62,121,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[normal]">🤖</p>
      </div>
    </div>
  );
}

function DivStatsTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stats-title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">AI Prediction</p>
      </div>
    </div>
  );
}

function DivStatsSubtitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stats-subtitle">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Tap for full analysis</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivStatsTitle />
      <DivStatsSubtitle />
    </div>
  );
}

function DivHomeStatsHeader() {
  return (
    <div className="relative shrink-0 w-[299px]" data-name="div.home-stats-header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative w-full">
        <DivHomeStatsIcon />
        <Div />
      </div>
    </div>
  );
}

function DivPredTeamName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.pred-team-name">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Sentinels</p>
      </div>
    </div>
  );
}

function DivPredPct() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.pred-pct">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[22px] whitespace-nowrap">
        <p className="leading-[normal]">67%</p>
      </div>
    </div>
  );
}

function DivPredTeam() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="div.pred-team">
      <DivPredTeamName />
      <DivPredPct />
    </div>
  );
}

function DivPredVs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.pred-vs">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">vs</p>
      </div>
    </div>
  );
}

function DivPredTeamName1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.pred-team-name">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Leviatan</p>
      </div>
    </div>
  );
}

function DivPredPct1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.pred-pct">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[22px] whitespace-nowrap">
        <p className="leading-[normal]">33%</p>
      </div>
    </div>
  );
}

function DivPredTeam1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="div.pred-team">
      <DivPredTeamName1 />
      <DivPredPct1 />
    </div>
  );
}

function DivPredMatchup() {
  return (
    <div className="relative shrink-0 w-[299px]" data-name="div.pred-matchup">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.02px] relative w-full">
        <DivPredTeam />
        <DivPredVs />
        <DivPredTeam1 />
      </div>
    </div>
  );
}

function DivPredBar() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[999px] shrink-0 w-full" data-name="div.pred-bar">
      <div className="bg-[#3e79ff] h-full shrink-0 w-[200.33px]" data-name="div.pred-bar-fill" />
      <div className="bg-[rgba(255,255,255,0.08)] h-full shrink-0 w-[98.65px]" data-name="div.pred-bar-empty" />
    </div>
  );
}

function DivPredBarMargin() {
  return (
    <div className="h-[12px] relative shrink-0 w-[299px]" data-name="div.pred-bar:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <DivPredBar />
      </div>
    </div>
  );
}

function DivHomeStatsCard() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[18px] p-[17px] right-[18px] rounded-[22px] top-[304px]" data-name="div.home-stats-card" style={{ backgroundImage: "linear-gradient(144.639deg, rgba(62, 121, 255, 0.2) 0%, rgba(5, 12, 30, 0.95) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <DivHomeStatsHeader />
      <DivPredMatchup />
      <DivPredBarMargin />
    </div>
  );
}

function SpanSectionTitleMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] pt-[16px] relative shrink-0" data-name="span.section-title:margin">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[13px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Upcoming</p>
      </div>
    </div>
  );
}

function ASectionLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="a.section-link">
      <a className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[0px] tracking-[0.6px] uppercase whitespace-nowrap" href="https://raiaay000.github.io/NECS26-App/">
        <p className="cursor-pointer decoration-solid leading-[normal] text-[12px] underline">See All</p>
      </a>
    </div>
  );
}

function DivSectionHeader() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] right-[18px] top-[473px]" data-name="div.section-header">
      <SpanSectionTitleMargin />
      <ASectionLink />
    </div>
  );
}

function DivUpcomingTimeVal() {
  return (
    <div className="relative shrink-0" data-name="div.upcoming-time-val">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[18px] whitespace-nowrap">
          <p className="leading-[normal]">3:00</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTimeLabel() {
  return (
    <div className="relative shrink-0" data-name="div.upcoming-time-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] whitespace-nowrap">
          <p className="leading-[normal]">PM</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTime() {
  return (
    <div className="bg-[rgba(8,26,54,0.75)] relative rounded-[14px] shrink-0 size-[56px]" data-name="div.upcoming-time">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <DivUpcomingTimeVal />
        <DivUpcomingTimeLabel />
      </div>
    </div>
  );
}

function DivUpcomingMatchup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-matchup">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">G2 vs Moist</p>
      </div>
    </div>
  );
}

function DivUpcomingDetail() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-detail">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Rocket League · Semifinals</p>
      </div>
    </div>
  );
}

function DivUpcomingInfo() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.upcoming-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <DivUpcomingMatchup />
        <DivUpcomingDetail />
      </div>
    </div>
  );
}

function SpanGameTag1() {
  return (
    <div className="bg-[rgba(0,136,255,0.08)] relative rounded-[999px] shrink-0" data-name="span.game-tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,136,255,0.35)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#08f] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">RL</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingItem() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.upcoming-item" style={{ backgroundImage: "linear-gradient(134.901deg, rgba(245, 197, 33, 0.08) 0%, rgba(5, 12, 30, 0.8) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[rgba(245,197,33,0.65)] border-b border-l-6 border-r border-solid border-t inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[15px] py-[13px] relative w-full">
          <DivUpcomingTime />
          <DivUpcomingInfo />
          <SpanGameTag1 />
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTimeVal1() {
  return (
    <div className="relative shrink-0" data-name="div.upcoming-time-val">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[18px] whitespace-nowrap">
          <p className="leading-[normal]">5:00</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTimeLabel1() {
  return (
    <div className="relative shrink-0" data-name="div.upcoming-time-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] whitespace-nowrap">
          <p className="leading-[normal]">PM</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTime1() {
  return (
    <div className="bg-[rgba(8,26,54,0.75)] relative rounded-[14px] shrink-0 size-[56px]" data-name="div.upcoming-time">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <DivUpcomingTimeVal1 />
        <DivUpcomingTimeLabel1 />
      </div>
    </div>
  );
}

function DivUpcomingMatchup1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-matchup">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">NRG vs Cloud9</p>
      </div>
    </div>
  );
}

function DivUpcomingDetail1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-detail">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Valorant · Group Stage</p>
      </div>
    </div>
  );
}

function DivUpcomingInfo1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.upcoming-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <DivUpcomingMatchup1 />
        <DivUpcomingDetail1 />
      </div>
    </div>
  );
}

function SpanGameTag2() {
  return (
    <div className="bg-[rgba(255,70,85,0.08)] relative rounded-[999px] shrink-0" data-name="span.game-tag">
      <div aria-hidden="true" className="absolute border border-[rgba(255,70,85,0.35)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#ff4655] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">VAL</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingItem1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.upcoming-item" style={{ backgroundImage: "linear-gradient(134.901deg, rgba(245, 197, 33, 0.08) 0%, rgba(5, 12, 30, 0.8) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[rgba(245,197,33,0.65)] border-b border-l-6 border-r border-solid border-t inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[15px] py-[13px] relative w-full">
          <DivUpcomingTime1 />
          <DivUpcomingInfo1 />
          <SpanGameTag2 />
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTimeVal2() {
  return (
    <div className="relative shrink-0" data-name="div.upcoming-time-val">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[18px] whitespace-nowrap">
          <p className="leading-[normal]">7:00</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTimeLabel2() {
  return (
    <div className="relative shrink-0" data-name="div.upcoming-time-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] whitespace-nowrap">
          <p className="leading-[normal]">PM</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTime2() {
  return (
    <div className="bg-[rgba(8,26,54,0.75)] relative rounded-[14px] shrink-0 size-[56px]" data-name="div.upcoming-time">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <DivUpcomingTimeVal2 />
        <DivUpcomingTimeLabel2 />
      </div>
    </div>
  );
}

function DivUpcomingMatchup2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-matchup">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">MKLeo vs Glutonny</p>
      </div>
    </div>
  );
}

function DivUpcomingDetail2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-detail">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">SSBU · Winners R1</p>
      </div>
    </div>
  );
}

function DivUpcomingInfo2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.upcoming-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <DivUpcomingMatchup2 />
        <DivUpcomingDetail2 />
      </div>
    </div>
  );
}

function SpanGameTag3() {
  return (
    <div className="bg-[rgba(230,0,18,0.08)] relative rounded-[999px] shrink-0" data-name="span.game-tag">
      <div aria-hidden="true" className="absolute border border-[rgba(230,0,18,0.35)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#e60012] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">SSBU</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingItem2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.upcoming-item" style={{ backgroundImage: "linear-gradient(134.901deg, rgba(245, 197, 33, 0.08) 0%, rgba(5, 12, 30, 0.8) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[rgba(245,197,33,0.65)] border-b border-l-6 border-r border-solid border-t inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[15px] py-[13px] relative w-full">
          <DivUpcomingTime2 />
          <DivUpcomingInfo2 />
          <SpanGameTag3 />
        </div>
      </div>
    </div>
  );
}

function DivUpcomingList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[525px]" data-name="div.upcoming-list">
      <DivUpcomingItem />
      <DivUpcomingItem1 />
      <DivUpcomingItem2 />
    </div>
  );
}

function SpanSectionTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.section-title">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[13px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Quick Actions</p>
      </div>
    </div>
  );
}

function DivSectionHeader1() {
  return (
    <div className="absolute content-stretch flex items-center left-[18px] pb-[10px] pt-[16px] right-[18px] top-[811px]" data-name="div.section-header">
      <SpanSectionTitle />
    </div>
  );
}

function Span1() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[20px] whitespace-nowrap">
          <p className="leading-[normal]">🗳️</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTime3() {
  return (
    <div className="bg-[rgba(62,121,255,0.15)] relative rounded-[14px] shrink-0 size-[56px]" data-name="div.upcoming-time">
      <div aria-hidden="true" className="absolute border border-[rgba(62,121,255,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <Span1 />
      </div>
    </div>
  );
}

function DivUpcomingMatchup3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-matchup">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Vote Now</p>
      </div>
    </div>
  );
}

function DivUpcomingDetail3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-detail">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`MVP & Fan Awards`}</p>
      </div>
    </div>
  );
}

function DivUpcomingInfo3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.upcoming-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <DivUpcomingMatchup3 />
        <DivUpcomingDetail3 />
      </div>
    </div>
  );
}

function SpanSettingsArrow() {
  return (
    <div className="relative shrink-0" data-name="span.settings-arrow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[24px] whitespace-nowrap">
          <p className="leading-[normal]">›</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingItem3() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.upcoming-item" style={{ backgroundImage: "linear-gradient(134.901deg, rgba(245, 197, 33, 0.08) 0%, rgba(5, 12, 30, 0.8) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[rgba(245,197,33,0.65)] border-b border-l-6 border-r border-solid border-t inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[15px] py-[13px] relative w-full">
          <DivUpcomingTime3 />
          <DivUpcomingInfo3 />
          <SpanSettingsArrow />
        </div>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[20px] whitespace-nowrap">
          <p className="leading-[normal]">🏆</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingTime4() {
  return (
    <div className="bg-[rgba(0,136,255,0.16)] relative rounded-[14px] shrink-0 size-[56px]" data-name="div.upcoming-time">
      <div aria-hidden="true" className="absolute border border-[rgba(0,136,255,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <Span2 />
      </div>
    </div>
  );
}

function DivUpcomingMatchup4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-matchup">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Leaderboard</p>
      </div>
    </div>
  );
}

function DivUpcomingDetail4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.upcoming-detail">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Live team rankings</p>
      </div>
    </div>
  );
}

function DivUpcomingInfo4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.upcoming-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <DivUpcomingMatchup4 />
        <DivUpcomingDetail4 />
      </div>
    </div>
  );
}

function SpanSettingsArrow1() {
  return (
    <div className="relative shrink-0" data-name="span.settings-arrow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[24px] whitespace-nowrap">
          <p className="leading-[normal]">›</p>
        </div>
      </div>
    </div>
  );
}

function DivUpcomingItem4() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.upcoming-item" style={{ backgroundImage: "linear-gradient(134.901deg, rgba(245, 197, 33, 0.08) 0%, rgba(5, 12, 30, 0.8) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[rgba(245,197,33,0.65)] border-b border-l-6 border-r border-solid border-t inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[15px] py-[13px] relative w-full">
          <DivUpcomingTime4 />
          <DivUpcomingInfo4 />
          <SpanSettingsArrow1 />
        </div>
      </div>
    </div>
  );
}

function DivUpcomingList1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[863px]" data-name="div.upcoming-list">
      <DivUpcomingItem3 />
      <DivUpcomingItem4 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute inset-[0_-10px_0_10px] opacity-0 overflow-auto" data-name="HOME">
      <DivScreenHead />
      <DivHomeLiveCard />
      <DivHomeStatsCard />
      <DivSectionHeader />
      <DivUpcomingList />
      <DivSectionHeader1 />
      <DivUpcomingList1 />
    </div>
  );
}

function DivScreenTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.screen-title">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Live</p>
      </div>
    </div>
  );
}

function DivScreenPill1() {
  return (
    <div className="bg-[rgba(245,197,33,0.12)] content-stretch flex flex-col items-start px-[11px] py-[7px] relative rounded-[999px] shrink-0" data-name="div.screen-pill">
      <div aria-hidden="true" className="absolute border border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_0px_10px_0px_rgba(245,197,33,0.25)]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Now</p>
      </div>
    </div>
  );
}

function DivScreenHead1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] right-[18px] top-[16px]" data-name="div.screen-head">
      <DivScreenTitle1 />
      <DivScreenPill1 />
    </div>
  );
}

function DivLiveStatus() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="div.live-status">
      <div className="bg-[#f5c521] rounded-[4px] shadow-[0px_0px_12px_0px_rgba(245,197,33,0.8)] shrink-0 size-[8px]" data-name="span.live-dot" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[11px] tracking-[1px] whitespace-nowrap">
        <p className="leading-[normal]">LIVE NOW</p>
      </div>
    </div>
  );
}

function DivMatchTime() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.match-time">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Game 1 • Map 1</p>
      </div>
    </div>
  );
}

function DivLiveTop() {
  return (
    <div className="relative shrink-0 w-[297px]" data-name="div.live-top">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <DivLiveStatus />
        <DivMatchTime />
      </div>
    </div>
  );
}

function TurboDriftLogo() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Turbo Drift logo">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.53%] max-w-none top-0 w-[137.06%]" src={imgTurboDriftLogo} />
      </div>
    </div>
  );
}

function DivTeamLogo() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[52px]" data-name="div.team-logo" style={{ backgroundImage: "linear-gradient(135deg, rgb(5, 12, 30) 0%, rgba(8, 26, 54, 0.65) 100%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <TurboDriftLogo />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DivTeamLogoMargin() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start pb-[8px] relative shrink-0 w-[52px]" data-name="div.team-logo:margin">
      <DivTeamLogo />
    </div>
  );
}

function DivTeamName2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="div.team-name">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Turbo Drift</p>
      </div>
    </div>
  );
}

function DivTeamNameMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0" data-name="div.team-name:margin">
      <DivTeamName2 />
    </div>
  );
}

function DivLiveTeam() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.live-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <DivTeamLogoMargin />
        <DivTeamNameMargin2 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[11px] text-center whitespace-nowrap">
          <p className="leading-[normal]">9W - 2L</p>
        </div>
      </div>
    </div>
  );
}

function DivLiveScore() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.live-score">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[31.9px] text-shadow-[0px_0px_25px_rgba(62,121,255,0.55)] tracking-[4px] whitespace-nowrap">
        <p className="leading-[normal]">3 - 2</p>
      </div>
    </div>
  );
}

function DivScoreLabelMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="div.score-label:margin">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Rounds</p>
      </div>
    </div>
  );
}

function DivLiveScoreBox() {
  return (
    <div className="relative shrink-0" data-name="div.live-score-box">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[16px] relative">
        <DivLiveScore />
        <DivScoreLabelMargin />
      </div>
    </div>
  );
}

function NeonCircuitLogo() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Neon Circuit logo">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-9.03%] max-w-none top-0 w-[118.06%]" src={imgNeonCircuitLogo} />
      </div>
    </div>
  );
}

function DivTeamLogo1() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[52px]" data-name="div.team-logo" style={{ backgroundImage: "linear-gradient(135deg, rgb(5, 12, 30) 0%, rgba(8, 26, 54, 0.65) 100%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <NeonCircuitLogo />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DivTeamLogoMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start pb-[8px] relative shrink-0 w-[52px]" data-name="div.team-logo:margin">
      <DivTeamLogo1 />
    </div>
  );
}

function DivTeamName3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="div.team-name">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Neon Circuit</p>
      </div>
    </div>
  );
}

function DivTeamNameMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0" data-name="div.team-name:margin">
      <DivTeamName3 />
    </div>
  );
}

function DivLiveTeam1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.live-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <DivTeamLogoMargin1 />
        <DivTeamNameMargin3 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[11px] text-center whitespace-nowrap">
          <p className="leading-[normal]">8W - 4L</p>
        </div>
      </div>
    </div>
  );
}

function DivLiveTeams() {
  return (
    <div className="relative shrink-0 w-[297px]" data-name="div.live-teams">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[13px] relative w-full">
        <DivLiveTeam />
        <DivLiveScoreBox />
        <DivLiveTeam1 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p428f300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonWatchLive() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[297px]" data-name="button#watchLive" style={{ backgroundImage: "linear-gradient(136.273deg, rgb(5, 10, 28) 0%, rgb(42, 94, 255) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center pb-[14px] pt-[12px] px-[14px] relative w-full">
        <Component2 />
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[13.7px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">Watch Live</p>
        </div>
      </div>
    </div>
  );
}

function DivLiveCard() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[18px] p-[18px] right-[18px] rounded-[16px] top-[58px]" data-name="div.live-card" style={{ backgroundImage: "linear-gradient(144.988deg, rgba(5, 12, 30, 0.9) 0%, rgba(8, 26, 54, 0.65) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DivLiveTop />
      <DivLiveTeams />
      <ButtonWatchLive />
    </div>
  );
}

function DivSectionTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] right-[18px] top-[316px]" data-name="div.section-title">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[13px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Featured Games</p>
      </div>
    </div>
  );
}

function Valorant() {
  return (
    <div className="h-[60px] relative shrink-0 w-[100.33px]" data-name="Valorant">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-3.16%] max-w-none top-0 w-[106.32%]" src={imgValorant} />
      </div>
    </div>
  );
}

function DivGameCardName() {
  return (
    <div className="relative shrink-0 w-[100.33px]" data-name="div.game-card-name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[normal]">Valorant</p>
        </div>
      </div>
    </div>
  );
}

function DivGameCard() {
  return (
    <div className="relative rounded-[12px] self-stretch shrink-0 w-[104.33px]" data-name="div.game-card" style={{ backgroundImage: "linear-gradient(154.997deg, rgba(0, 136, 255, 0.18) 0%, rgba(5, 12, 30, 0.95) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Valorant />
        <DivGameCardName />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function RocketLeague() {
  return (
    <div className="h-[60px] relative shrink-0 w-[100.33px]" data-name="Rocket League">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-3.16%] max-w-none top-0 w-[106.32%]" src={imgRocketLeague} />
      </div>
    </div>
  );
}

function DivGameCardName1() {
  return (
    <div className="relative shrink-0 w-[100.33px]" data-name="div.game-card-name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[normal]">Rocket League</p>
        </div>
      </div>
    </div>
  );
}

function DivGameCard1() {
  return (
    <div className="relative rounded-[12px] self-stretch shrink-0 w-[104.33px]" data-name="div.game-card" style={{ backgroundImage: "linear-gradient(154.997deg, rgba(0, 136, 255, 0.18) 0%, rgba(5, 12, 30, 0.95) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <RocketLeague />
        <DivGameCardName1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function SmashUltimate() {
  return (
    <div className="h-[60px] relative shrink-0 w-[100.33px]" data-name="Smash Ultimate">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-3.08%] max-w-none top-0 w-[106.16%]" src={imgSmashUltimate} />
      </div>
    </div>
  );
}

function DivGameCardName2() {
  return (
    <div className="relative shrink-0 w-[100.33px]" data-name="div.game-card-name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[normal] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="mb-0">Smash</p>
          <p>Ultimate</p>
        </div>
      </div>
    </div>
  );
}

function DivGameCard2() {
  return (
    <div className="relative rounded-[12px] self-stretch shrink-0 w-[104.33px]" data-name="div.game-card" style={{ backgroundImage: "linear-gradient(154.997deg, rgba(0, 136, 255, 0.18) 0%, rgba(5, 12, 30, 0.95) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <SmashUltimate />
        <DivGameCardName2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DivGameShowcase() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start justify-center left-[18px] right-[18px] top-[342px]" data-name="div.game-showcase">
      <DivGameCard />
      <DivGameCard1 />
      <DivGameCard2 />
    </div>
  );
}

function DivSectionTitle1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] right-[18px] top-[466px]" data-name="div.section-title">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[13px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Live Matches</p>
      </div>
    </div>
  );
}

function DivGameBadge() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="div.game-badge">
      <div className="bg-[#ff4655] rounded-[3px] shadow-[0px_0px_6px_0px_#ff4655] shrink-0 size-[6px]" data-name="span.game-dot" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#ff4655] text-[11px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Valorant</p>
      </div>
    </div>
  );
}

function DivMatchTime1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.match-time">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">LIVE • 2:40 PM</p>
      </div>
    </div>
  );
}

function DivMatchHeader() {
  return (
    <div className="relative shrink-0 w-[301px]" data-name="div.match-header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <DivGameBadge />
        <DivMatchTime1 />
      </div>
    </div>
  );
}

function DivTeamMini() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-mini">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[11px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">SEN</p>
      </div>
    </div>
  );
}

function DivTeamFull() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Sentinels</p>
      </div>
    </div>
  );
}

function DivMatchTeam() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="div.match-team">
      <DivTeamMini />
      <DivTeamFull />
    </div>
  );
}

function DivMatchScore() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.match-score">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">7 - 5</p>
      </div>
    </div>
  );
}

function DivTeamMini1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-mini">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[11px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">NRG</p>
      </div>
    </div>
  );
}

function DivTeamFull1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">NRG</p>
      </div>
    </div>
  );
}

function DivMatchTeam1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="div.match-team">
      <DivTeamMini1 />
      <DivTeamFull1 />
    </div>
  );
}

function DivMatchTeams() {
  return (
    <div className="relative shrink-0 w-[301px]" data-name="div.match-teams">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <DivMatchTeam />
        <DivMatchScore />
        <DivMatchTeam1 />
      </div>
    </div>
  );
}

function DivMatchCard() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[18px] p-[16px] right-[18px] rounded-[14px] top-[492px]" data-name="div.match-card" style={{ backgroundImage: "linear-gradient(144.4deg, rgba(5, 12, 30, 0.9) 0%, rgba(8, 26, 54, 0.65) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <DivMatchHeader />
      <DivMatchTeams />
    </div>
  );
}

function DivGameBadge1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="div.game-badge">
      <div className="bg-[#08f] rounded-[3px] shadow-[0px_0px_6px_0px_#08f] shrink-0 size-[6px]" data-name="span.game-dot" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#08f] text-[11px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Rocket League</p>
      </div>
    </div>
  );
}

function DivMatchTime2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.match-time">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">LIVE • 2:10 PM</p>
      </div>
    </div>
  );
}

function DivMatchHeader1() {
  return (
    <div className="relative shrink-0 w-[301px]" data-name="div.match-header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <DivGameBadge1 />
        <DivMatchTime2 />
      </div>
    </div>
  );
}

function DivTeamMini2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-mini">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[11px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">G2</p>
      </div>
    </div>
  );
}

function DivTeamFull2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">G2 Orbit</p>
      </div>
    </div>
  );
}

function DivMatchTeam2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="div.match-team">
      <DivTeamMini2 />
      <DivTeamFull2 />
    </div>
  );
}

function DivMatchScore1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.match-score">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">2 - 1</p>
      </div>
    </div>
  );
}

function DivTeamMini3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-mini">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[11px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">ABN</p>
      </div>
    </div>
  );
}

function DivTeamFull3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Afterburn</p>
      </div>
    </div>
  );
}

function DivMatchTeam3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="div.match-team">
      <DivTeamMini3 />
      <DivTeamFull3 />
    </div>
  );
}

function DivMatchTeams1() {
  return (
    <div className="relative shrink-0 w-[301px]" data-name="div.match-teams">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <DivMatchTeam2 />
        <DivMatchScore1 />
        <DivMatchTeam3 />
      </div>
    </div>
  );
}

function DivMatchCard1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[18px] p-[16px] right-[18px] rounded-[14px] top-[592px]" data-name="div.match-card" style={{ backgroundImage: "linear-gradient(144.4deg, rgba(5, 12, 30, 0.9) 0%, rgba(8, 26, 54, 0.65) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <DivMatchHeader1 />
      <DivMatchTeams1 />
    </div>
  );
}

function DivGameBadge2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="div.game-badge">
      <div className="bg-[#e60012] rounded-[3px] shadow-[0px_0px_6px_0px_#e60012] shrink-0 size-[6px]" data-name="span.game-dot" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#e60012] text-[11px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Smash</p>
      </div>
    </div>
  );
}

function DivMatchTime3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.match-time">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">LIVE • 1:55 PM</p>
      </div>
    </div>
  );
}

function DivMatchHeader2() {
  return (
    <div className="relative shrink-0 w-[301px]" data-name="div.match-header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <DivGameBadge2 />
        <DivMatchTime3 />
      </div>
    </div>
  );
}

function DivTeamMini4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-mini">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[11px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">FT</p>
      </div>
    </div>
  );
}

function DivTeamFull4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">FrameTrick</p>
      </div>
    </div>
  );
}

function DivMatchTeam4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="div.match-team">
      <DivTeamMini4 />
      <DivTeamFull4 />
    </div>
  );
}

function DivMatchScore2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.match-score">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">2 - 1</p>
      </div>
    </div>
  );
}

function DivTeamMini5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-mini">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[11px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">EG</p>
      </div>
    </div>
  );
}

function DivTeamFull5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.team-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">EdgeGuard</p>
      </div>
    </div>
  );
}

function DivMatchTeam5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="div.match-team">
      <DivTeamMini5 />
      <DivTeamFull5 />
    </div>
  );
}

function DivMatchTeams2() {
  return (
    <div className="relative shrink-0 w-[301px]" data-name="div.match-teams">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <DivMatchTeam4 />
        <DivMatchScore2 />
        <DivMatchTeam5 />
      </div>
    </div>
  );
}

function DivMatchCard2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[18px] p-[16px] right-[18px] rounded-[14px] top-[692px]" data-name="div.match-card" style={{ backgroundImage: "linear-gradient(144.4deg, rgba(5, 12, 30, 0.9) 0%, rgba(8, 26, 54, 0.65) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <DivMatchHeader2 />
      <DivMatchTeams2 />
    </div>
  );
}

function Live() {
  return (
    <div className="absolute inset-0 overflow-auto" data-name="LIVE">
      <DivScreenHead1 />
      <DivLiveCard />
      <DivSectionTitle />
      <DivGameShowcase />
      <DivSectionTitle1 />
      <DivMatchCard />
      <DivMatchCard1 />
      <DivMatchCard2 />
    </div>
  );
}

function DivScreenTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.screen-title">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Players</p>
      </div>
    </div>
  );
}

function DivScreenPill2() {
  return (
    <div className="bg-[rgba(245,197,33,0.12)] content-stretch flex flex-col items-start px-[11px] py-[7px] relative rounded-[999px] shrink-0" data-name="div.screen-pill">
      <div aria-hidden="true" className="absolute border border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_0px_10px_0px_rgba(245,197,33,0.25)]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Tap a player</p>
      </div>
    </div>
  );
}

function DivScreenHead2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.screen-head">
      <DivScreenTitle2 />
      <DivScreenPill2 />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[13.3px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Search players / event...</p>
        </div>
      </div>
    </div>
  );
}

function InputPlayerSearch() {
  return (
    <div className="bg-[rgba(11,36,72,0.32)] relative rounded-[14px] shrink-0 w-full" data-name="input#playerSearch">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[14px] relative w-full">
          <DivPlaceholder />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function DivPlayerAvatar() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">T</p>
      </div>
    </div>
  );
}

function DivPlayerName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">TenZed</p>
      </div>
    </div>
  );
}

function DivPlayerMeta() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Sovereign • Valorant</p>
      </div>
    </div>
  );
}

function DivPlayerInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName />
      <DivPlayerMeta />
    </div>
  );
}

function DivPlayerLeft() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar />
        <DivPlayerInfo />
      </div>
    </div>
  );
}

function DivStatNum() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">1.34</p>
      </div>
    </div>
  );
}

function DivStatLabel() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">K/D</p>
      </div>
    </div>
  );
}

function DivPlayerStat() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum />
        <DivStatLabel />
      </div>
    </div>
  );
}

function KeepTheseGamerTagsExactlyUsedByAppJsLookup() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Keep these gamer tags exactly (used by app.js lookup" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(245, 197, 33, 0.2) 0%, rgba(5, 12, 30, 0.85) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft />
          <DivPlayerStat />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">J</p>
      </div>
    </div>
  );
}

function DivPlayerName1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">JstnLite</p>
      </div>
    </div>
  );
}

function DivPlayerMeta1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Skyline • Rocket League</p>
      </div>
    </div>
  );
}

function DivPlayerInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName1 />
      <DivPlayerMeta1 />
    </div>
  );
}

function DivPlayerLeft1() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar1 />
        <DivPlayerInfo1 />
      </div>
    </div>
  );
}

function DivStatNum1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">3.2</p>
      </div>
    </div>
  );
}

function DivStatLabel1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">GPG</p>
      </div>
    </div>
  );
}

function DivPlayerStat1() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum1 />
        <DivStatLabel1 />
      </div>
    </div>
  );
}

function DivPlayerCard() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(0, 136, 255, 0.25) 0%, rgba(5, 12, 30, 0.9) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,136,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft1 />
          <DivPlayerStat1 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">L</p>
      </div>
    </div>
  );
}

function DivPlayerName2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">LeoPrime</p>
      </div>
    </div>
  );
}

function DivPlayerMeta2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">BracketFox • Super Smash Bros</p>
      </div>
    </div>
  );
}

function DivPlayerInfo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName2 />
      <DivPlayerMeta2 />
    </div>
  );
}

function DivPlayerLeft2() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar2 />
        <DivPlayerInfo2 />
      </div>
    </div>
  );
}

function DivStatNum2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">92%</p>
      </div>
    </div>
  );
}

function DivStatLabel2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Win</p>
      </div>
    </div>
  );
}

function DivPlayerStat2() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum2 />
        <DivStatLabel2 />
      </div>
    </div>
  );
}

function DivPlayerCard1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(5, 12, 30, 0.92) 0%, rgba(255, 255, 255, 0.02) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft2 />
          <DivPlayerStat2 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">H</p>
      </div>
    </div>
  );
}

function DivPlayerName3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">HexNova</p>
      </div>
    </div>
  );
}

function DivPlayerMeta3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">NightShift • Valorant</p>
      </div>
    </div>
  );
}

function DivPlayerInfo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName3 />
      <DivPlayerMeta3 />
    </div>
  );
}

function DivPlayerLeft3() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar3 />
        <DivPlayerInfo3 />
      </div>
    </div>
  );
}

function DivStatNum3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">248</p>
      </div>
    </div>
  );
}

function DivStatLabel3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ACS</p>
      </div>
    </div>
  );
}

function DivPlayerStat3() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum3 />
        <DivStatLabel3 />
      </div>
    </div>
  );
}

function Component13More() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="13 more" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(245, 197, 33, 0.2) 0%, rgba(5, 12, 30, 0.85) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft3 />
          <DivPlayerStat3 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">V</p>
      </div>
    </div>
  );
}

function DivPlayerName4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">VantaRush</p>
      </div>
    </div>
  );
}

function DivPlayerMeta4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">CopperCores • Valorant</p>
      </div>
    </div>
  );
}

function DivPlayerInfo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName4 />
      <DivPlayerMeta4 />
    </div>
  );
}

function DivPlayerLeft4() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar4 />
        <DivPlayerInfo4 />
      </div>
    </div>
  );
}

function DivStatNum4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">27%</p>
      </div>
    </div>
  );
}

function DivStatLabel4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">HS</p>
      </div>
    </div>
  );
}

function DivPlayerStat4() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum4 />
        <DivStatLabel4 />
      </div>
    </div>
  );
}

function DivPlayerCard2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(0, 136, 255, 0.25) 0%, rgba(5, 12, 30, 0.9) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,136,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft4 />
          <DivPlayerStat4 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">O</p>
      </div>
    </div>
  );
}

function DivPlayerName5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">OrbitSage</p>
      </div>
    </div>
  );
}

function DivPlayerMeta5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">ArcUnit • Valorant</p>
      </div>
    </div>
  );
}

function DivPlayerInfo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName5 />
      <DivPlayerMeta5 />
    </div>
  );
}

function DivPlayerLeft5() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar5 />
        <DivPlayerInfo5 />
      </div>
    </div>
  );
}

function DivStatNum5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">146</p>
      </div>
    </div>
  );
}

function DivStatLabel5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ADR</p>
      </div>
    </div>
  );
}

function DivPlayerStat5() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum5 />
        <DivStatLabel5 />
      </div>
    </div>
  );
}

function DivPlayerCard3() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(5, 12, 30, 0.92) 0%, rgba(255, 255, 255, 0.02) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft5 />
          <DivPlayerStat5 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">N</p>
      </div>
    </div>
  );
}

function DivPlayerName6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">NeonQuill</p>
      </div>
    </div>
  );
}

function DivPlayerMeta6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Piston5 • Valorant</p>
      </div>
    </div>
  );
}

function DivPlayerInfo6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName6 />
      <DivPlayerMeta6 />
    </div>
  );
}

function DivPlayerLeft6() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar6 />
        <DivPlayerInfo6 />
      </div>
    </div>
  );
}

function DivStatNum6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">0.16</p>
      </div>
    </div>
  );
}

function DivStatLabel6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">FK/R</p>
      </div>
    </div>
  );
}

function DivPlayerStat6() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum6 />
        <DivStatLabel6 />
      </div>
    </div>
  );
}

function DivPlayerCard4() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(245, 197, 33, 0.2) 0%, rgba(5, 12, 30, 0.85) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft6 />
          <DivPlayerStat6 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">P</p>
      </div>
    </div>
  );
}

function DivPlayerName7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">PixelPhantom</p>
      </div>
    </div>
  );
}

function DivPlayerMeta7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Skyline • Rocket League</p>
      </div>
    </div>
  );
}

function DivPlayerInfo7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName7 />
      <DivPlayerMeta7 />
    </div>
  );
}

function DivPlayerLeft7() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar7 />
        <DivPlayerInfo7 />
      </div>
    </div>
  );
}

function DivStatNum7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">1.3</p>
      </div>
    </div>
  );
}

function DivStatLabel7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">GPG</p>
      </div>
    </div>
  );
}

function DivPlayerStat7() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum7 />
        <DivStatLabel7 />
      </div>
    </div>
  );
}

function DivPlayerCard5() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(0, 136, 255, 0.25) 0%, rgba(5, 12, 30, 0.9) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,136,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft7 />
          <DivPlayerStat7 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">B</p>
      </div>
    </div>
  );
}

function DivPlayerName8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">BoostBandit</p>
      </div>
    </div>
  );
}

function DivPlayerMeta8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Afterburn • Rocket League</p>
      </div>
    </div>
  );
}

function DivPlayerInfo8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName8 />
      <DivPlayerMeta8 />
    </div>
  );
}

function DivPlayerLeft8() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar8 />
        <DivPlayerInfo8 />
      </div>
    </div>
  );
}

function DivStatNum8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">1.1</p>
      </div>
    </div>
  );
}

function DivStatLabel8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">GPG</p>
      </div>
    </div>
  );
}

function DivPlayerStat8() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum8 />
        <DivStatLabel8 />
      </div>
    </div>
  );
}

function DivPlayerCard6() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(5, 12, 30, 0.92) 0%, rgba(255, 255, 255, 0.02) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft8 />
          <DivPlayerStat8 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">A</p>
      </div>
    </div>
  );
}

function DivPlayerName9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">AeroMint</p>
      </div>
    </div>
  );
}

function DivPlayerMeta9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Vortex • Rocket League</p>
      </div>
    </div>
  );
}

function DivPlayerInfo9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName9 />
      <DivPlayerMeta9 />
    </div>
  );
}

function DivPlayerLeft9() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar9 />
        <DivPlayerInfo9 />
      </div>
    </div>
  );
}

function DivStatNum9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">3.9</p>
      </div>
    </div>
  );
}

function DivStatLabel9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Shots</p>
      </div>
    </div>
  );
}

function DivPlayerStat9() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum9 />
        <DivStatLabel9 />
      </div>
    </div>
  );
}

function DivPlayerCard7() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(245, 197, 33, 0.2) 0%, rgba(5, 12, 30, 0.85) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft9 />
          <DivPlayerStat9 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar10() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">G</p>
      </div>
    </div>
  );
}

function DivPlayerName10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">GoalGolem</p>
      </div>
    </div>
  );
}

function DivPlayerMeta10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">StoneGate • Rocket League</p>
      </div>
    </div>
  );
}

function DivPlayerInfo10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName10 />
      <DivPlayerMeta10 />
    </div>
  );
}

function DivPlayerLeft10() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar10 />
        <DivPlayerInfo10 />
      </div>
    </div>
  );
}

function DivStatNum10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">1.8</p>
      </div>
    </div>
  );
}

function DivStatLabel10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Demos</p>
      </div>
    </div>
  );
}

function DivPlayerStat10() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum10 />
        <DivStatLabel10 />
      </div>
    </div>
  );
}

function DivPlayerCard8() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(0, 136, 255, 0.25) 0%, rgba(5, 12, 30, 0.9) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,136,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft10 />
          <DivPlayerStat10 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar11() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">T</p>
      </div>
    </div>
  );
}

function DivPlayerName11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">TiltProof</p>
      </div>
    </div>
  );
}

function DivPlayerMeta11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">CleanRotations • Rocket League</p>
      </div>
    </div>
  );
}

function DivPlayerInfo11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName11 />
      <DivPlayerMeta11 />
    </div>
  );
}

function DivPlayerLeft11() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar11 />
        <DivPlayerInfo11 />
      </div>
    </div>
  );
}

function DivStatNum11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">3.0</p>
      </div>
    </div>
  );
}

function DivStatLabel11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Saves</p>
      </div>
    </div>
  );
}

function DivPlayerStat11() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum11 />
        <DivStatLabel11 />
      </div>
    </div>
  );
}

function DivPlayerCard9() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(5, 12, 30, 0.92) 0%, rgba(255, 255, 255, 0.02) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft11 />
          <DivPlayerStat11 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar12() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">F</p>
      </div>
    </div>
  );
}

function DivPlayerName12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">FrameTrick</p>
      </div>
    </div>
  );
}

function DivPlayerMeta12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">BracketFox • Super Smash Bros</p>
      </div>
    </div>
  );
}

function DivPlayerInfo12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName12 />
      <DivPlayerMeta12 />
    </div>
  );
}

function DivPlayerLeft12() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar12 />
        <DivPlayerInfo12 />
      </div>
    </div>
  );
}

function DivStatNum12() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">88%</p>
      </div>
    </div>
  );
}

function DivStatLabel12() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Win</p>
      </div>
    </div>
  );
}

function DivPlayerStat12() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum12 />
        <DivStatLabel12 />
      </div>
    </div>
  );
}

function DivPlayerCard10() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(245, 197, 33, 0.2) 0%, rgba(5, 12, 30, 0.85) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft12 />
          <DivPlayerStat12 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar13() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">E</p>
      </div>
    </div>
  );
}

function DivPlayerName13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">EdgeGuard</p>
      </div>
    </div>
  );
}

function DivPlayerMeta13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">StockCheck • Super Smash Bros</p>
      </div>
    </div>
  );
}

function DivPlayerInfo13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName13 />
      <DivPlayerMeta13 />
    </div>
  );
}

function DivPlayerLeft13() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar13 />
        <DivPlayerInfo13 />
      </div>
    </div>
  );
}

function DivStatNum13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">3.1</p>
      </div>
    </div>
  );
}

function DivStatLabel13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">KOs</p>
      </div>
    </div>
  );
}

function DivPlayerStat13() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum13 />
        <DivStatLabel13 />
      </div>
    </div>
  );
}

function DivPlayerCard11() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(0, 136, 255, 0.25) 0%, rgba(5, 12, 30, 0.9) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,136,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft13 />
          <DivPlayerStat13 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar14() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">D</p>
      </div>
    </div>
  );
}

function DivPlayerName14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">DIWizard</p>
      </div>
    </div>
  );
}

function DivPlayerMeta14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">AirControl • Super Smash Bros</p>
      </div>
    </div>
  );
}

function DivPlayerInfo14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName14 />
      <DivPlayerMeta14 />
    </div>
  );
}

function DivPlayerLeft14() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar14 />
        <DivPlayerInfo14 />
      </div>
    </div>
  );
}

function DivStatNum14() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">5.2</p>
      </div>
    </div>
  );
}

function DivStatLabel14() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Avg</p>
      </div>
    </div>
  );
}

function DivPlayerStat14() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum14 />
        <DivStatLabel14 />
      </div>
    </div>
  );
}

function DivPlayerCard12() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(5, 12, 30, 0.92) 0%, rgba(255, 255, 255, 0.02) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft14 />
          <DivPlayerStat14 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerAvatar15() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" data-name="div.player-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(12, 42, 79) 0%, rgb(2, 4, 12) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">S</p>
      </div>
    </div>
  );
}

function DivPlayerName15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-name">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">StockSniper</p>
      </div>
    </div>
  );
}

function DivPlayerMeta15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.player-meta">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">LastHit • Super Smash Bros</p>
      </div>
    </div>
  );
}

function DivPlayerInfo15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.player-info">
      <DivPlayerName15 />
      <DivPlayerMeta15 />
    </div>
  );
}

function DivPlayerLeft15() {
  return (
    <div className="relative shrink-0" data-name="div.player-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
        <DivPlayerAvatar15 />
        <DivPlayerInfo15 />
      </div>
    </div>
  );
}

function DivStatNum15() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-num">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e79ff] text-[18px] text-right whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function DivStatLabel15() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.stat-label">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">0TD</p>
      </div>
    </div>
  );
}

function DivPlayerStat15() {
  return (
    <div className="relative shrink-0" data-name="div.player-stat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <DivStatNum15 />
        <DivStatLabel15 />
      </div>
    </div>
  );
}

function DivPlayerCard13() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.player-card" style={{ backgroundImage: "linear-gradient(133.798deg, rgba(245, 197, 33, 0.2) 0%, rgba(5, 12, 30, 0.85) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,197,33,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <DivPlayerLeft15 />
          <DivPlayerStat15 />
        </div>
      </div>
    </div>
  );
}

function DivPlayerList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="div#playerList">
      <KeepTheseGamerTagsExactlyUsedByAppJsLookup />
      <DivPlayerCard />
      <DivPlayerCard1 />
      <Component13More />
      <DivPlayerCard2 />
      <DivPlayerCard3 />
      <DivPlayerCard4 />
      <DivPlayerCard5 />
      <DivPlayerCard6 />
      <DivPlayerCard7 />
      <DivPlayerCard8 />
      <DivPlayerCard9 />
      <DivPlayerCard10 />
      <DivPlayerCard11 />
      <DivPlayerCard12 />
      <DivPlayerCard13 />
    </div>
  );
}

function Players() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] inset-[0_-10px_-820px_10px] items-start opacity-0 pb-[96px] pt-[16px] px-[18px]" data-name="PLAYERS">
      <DivScreenHead2 />
      <InputPlayerSearch />
      <DivPlayerList />
    </div>
  );
}

function DivScreenTitle3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.screen-title">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Replays</p>
      </div>
    </div>
  );
}

function DivScreenPill3() {
  return (
    <div className="bg-[rgba(245,197,33,0.12)] content-stretch flex flex-col items-start px-[11px] py-[7px] relative rounded-[999px] shrink-0" data-name="div.screen-pill">
      <div aria-hidden="true" className="absolute border border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_0px_10px_0px_rgba(245,197,33,0.25)]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">New</p>
      </div>
    </div>
  );
}

function DivScreenHead3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] right-[18px] top-[16px]" data-name="div.screen-head">
      <DivScreenTitle3 />
      <DivScreenPill3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d="M8 5V19L19 12L8 5Z" fill="var(--fill-0, #00040C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivPlayOverlay() {
  return (
    <div className="absolute bg-[rgba(62,121,255,0.95)] content-stretch flex items-center justify-center left-[139.5px] pl-[15px] pr-[11px] rounded-[25px] shadow-[0px_0px_20px_0px_rgba(62,121,255,0.5)] size-[50px] top-[35px]" data-name="div.play-overlay">
      <Component3 />
    </div>
  );
}

function DivReplayDuration() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] bottom-[9px] content-stretch flex flex-col items-start px-[8px] py-[4px] right-[6.89px] rounded-[4px]" data-name="div.replay-duration">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">12:34</p>
      </div>
    </div>
  );
}

function DivReplayThumb() {
  return (
    <div className="h-[120px] relative shrink-0 w-[329px] z-[2]" data-name="div.replay-thumb" style={{ backgroundImage: "linear-gradient(135deg, rgb(8, 20, 43) 0%, rgba(8, 26, 54, 0.65) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[154.22%] left-0 max-w-none top-[-27.11%] w-full" src={imgValorant} />
        </div>
        <DivPlayOverlay />
        <DivReplayDuration />
      </div>
    </div>
  );
}

function DivReplayTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.replay-title">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">HexNova 1v3 - Semifinals</p>
      </div>
    </div>
  );
}

function SpanReplayGame() {
  return (
    <div className="bg-[rgba(255,70,85,0.2)] content-stretch flex flex-col items-start px-[8px] py-[3px] relative rounded-[4px] shrink-0" data-name="span.replay-game">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#ff4655] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Valorant</p>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">•</p>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">2 hours ago</p>
      </div>
    </div>
  );
}

function DivReplayMeta() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="div.replay-meta">
      <SpanReplayGame />
      <Span3 />
      <Span4 />
    </div>
  );
}

function DivReplayInfo() {
  return (
    <div className="relative shrink-0 w-[329px] z-[1]" data-name="div.replay-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start p-[14px] relative w-full">
        <DivReplayTitle />
        <DivReplayMeta />
      </div>
    </div>
  );
}

function DivReplayCard() {
  return (
    <div className="absolute bg-[#050c1e] left-[18px] right-[18px] rounded-[16px] top-[58px]" data-name="div.replay-card">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-[2px] relative rounded-[inherit] w-full">
        <DivReplayThumb />
        <DivReplayInfo />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d="M8 5V19L19 12L8 5Z" fill="var(--fill-0, #00040C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivPlayOverlay1() {
  return (
    <div className="absolute bg-[rgba(62,121,255,0.95)] content-stretch flex items-center justify-center left-[139.5px] pl-[15px] pr-[11px] rounded-[25px] shadow-[0px_0px_20px_0px_rgba(62,121,255,0.5)] size-[50px] top-[35px]" data-name="div.play-overlay">
      <Component4 />
    </div>
  );
}

function DivReplayDuration1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] bottom-[9px] content-stretch flex flex-col items-start px-[8px] py-[4px] right-[7.14px] rounded-[4px]" data-name="div.replay-duration">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">08:19</p>
      </div>
    </div>
  );
}

function DivReplayThumb1() {
  return (
    <div className="h-[120px] relative shrink-0 w-[329px] z-[2]" data-name="div.replay-thumb" style={{ backgroundImage: "linear-gradient(135deg, rgb(8, 20, 43) 0%, rgba(8, 26, 54, 0.65) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[154.22%] left-0 max-w-none top-[-27.11%] w-full" src={imgRocketLeague} />
        </div>
        <DivPlayOverlay1 />
        <DivReplayDuration1 />
      </div>
    </div>
  );
}

function DivReplayTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.replay-title">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Zero-Second Winner - Rocket League</p>
      </div>
    </div>
  );
}

function SpanReplayGame1() {
  return (
    <div className="bg-[rgba(0,136,255,0.2)] content-stretch flex flex-col items-start px-[8px] py-[3px] relative rounded-[4px] shrink-0" data-name="span.replay-game">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#08f] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Rocket</p>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">•</p>
      </div>
    </div>
  );
}

function Span6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">5 hours ago</p>
      </div>
    </div>
  );
}

function DivReplayMeta1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="div.replay-meta">
      <SpanReplayGame1 />
      <Span5 />
      <Span6 />
    </div>
  );
}

function DivReplayInfo1() {
  return (
    <div className="relative shrink-0 w-[329px] z-[1]" data-name="div.replay-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start p-[14px] relative w-full">
        <DivReplayTitle1 />
        <DivReplayMeta1 />
      </div>
    </div>
  );
}

function DivReplayCard1() {
  return (
    <div className="absolute bg-[#050c1e] left-[18px] right-[18px] rounded-[16px] top-[265px]" data-name="div.replay-card">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-[2px] relative rounded-[inherit] w-full">
        <DivReplayThumb1 />
        <DivReplayInfo1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d="M8 5V19L19 12L8 5Z" fill="var(--fill-0, #00040C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivPlayOverlay2() {
  return (
    <div className="absolute bg-[rgba(62,121,255,0.95)] content-stretch flex items-center justify-center left-[139.5px] pl-[15px] pr-[11px] rounded-[25px] shadow-[0px_0px_20px_0px_rgba(62,121,255,0.5)] size-[50px] top-[35px]" data-name="div.play-overlay">
      <Component5 />
    </div>
  );
}

function DivReplayDuration2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] bottom-[9px] content-stretch flex flex-col items-start px-[8px] py-[4px] right-[7.59px] rounded-[4px]" data-name="div.replay-duration">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">06:02</p>
      </div>
    </div>
  );
}

function DivReplayThumb2() {
  return (
    <div className="h-[120px] relative shrink-0 w-[329px] z-[2]" data-name="div.replay-thumb" style={{ backgroundImage: "linear-gradient(135deg, rgb(8, 20, 43) 0%, rgba(8, 26, 54, 0.65) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[154.45%] left-0 max-w-none top-[-27.22%] w-full" src={imgSmashUltimate} />
        </div>
        <DivPlayOverlay2 />
        <DivReplayDuration2 />
      </div>
    </div>
  );
}

function DivReplayTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.replay-title">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[15px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">EdgeGuard Reverse 3-Stock</p>
      </div>
    </div>
  );
}

function SpanReplayGame2() {
  return (
    <div className="bg-[rgba(230,0,18,0.2)] content-stretch flex flex-col items-start px-[8px] py-[3px] relative rounded-[4px] shrink-0" data-name="span.replay-game">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#e60012] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Smash</p>
      </div>
    </div>
  );
}

function Span7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">•</p>
      </div>
    </div>
  );
}

function Span8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Yesterday</p>
      </div>
    </div>
  );
}

function DivReplayMeta2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="div.replay-meta">
      <SpanReplayGame2 />
      <Span7 />
      <Span8 />
    </div>
  );
}

function DivReplayInfo2() {
  return (
    <div className="relative shrink-0 w-[329px] z-[1]" data-name="div.replay-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start p-[14px] relative w-full">
        <DivReplayTitle2 />
        <DivReplayMeta2 />
      </div>
    </div>
  );
}

function DivReplayCard2() {
  return (
    <div className="absolute bg-[#050c1e] left-[18px] right-[18px] rounded-[16px] top-[472px]" data-name="div.replay-card">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-[2px] relative rounded-[inherit] w-full">
        <DivReplayThumb2 />
        <DivReplayInfo2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Replays() {
  return (
    <div className="absolute inset-[0_-10px_0_10px] opacity-0 overflow-auto" data-name="REPLAYS">
      <DivScreenHead3 />
      <DivReplayCard />
      <DivReplayCard1 />
      <DivReplayCard2 />
    </div>
  );
}

function DivScreenTitle4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.screen-title">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Brackets</p>
      </div>
    </div>
  );
}

function DivScreenPill4() {
  return (
    <div className="bg-[rgba(245,197,33,0.12)] content-stretch flex flex-col items-start px-[11px] py-[7px] relative rounded-[999px] shrink-0" data-name="div.screen-pill">
      <div aria-hidden="true" className="absolute border border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_0px_10px_0px_rgba(245,197,33,0.25)]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Updated</p>
      </div>
    </div>
  );
}

function DivScreenHead4() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] right-[18px] top-[16px]" data-name="div.screen-head">
      <DivScreenTitle4 />
      <DivScreenPill4 />
    </div>
  );
}

function DivBracketTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[16px]" data-name="div.bracket-title">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Valorant Championship</p>
      </div>
    </div>
  );
}

function DivBracketTeam() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">Sovereign</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore() {
  return (
    <div className="bg-[rgba(16,185,129,0.15)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#10b981] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">2</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore1() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">1</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketTeam1() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">NightShift</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketRow() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[16px] pb-[8px] pt-[9px] right-[16px] top-[46px]" data-name="div.bracket-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <DivBracketTeam />
      <DivBracketScore />
      <DivBracketScore1 />
      <DivBracketTeam1 />
    </div>
  );
}

function DivBracketTeam2() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">ArcUnit</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore2() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">0</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore3() {
  return (
    <div className="bg-[rgba(16,185,129,0.15)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#10b981] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">2</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketTeam3() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">CopperCores</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketRow1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[16px] pb-[8px] pt-[9px] right-[16px] top-[98px]" data-name="div.bracket-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <DivBracketTeam2 />
      <DivBracketScore2 />
      <DivBracketScore3 />
      <DivBracketTeam3 />
    </div>
  );
}

function DivBracketTeam4() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">Piston5</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore4() {
  return (
    <div className="bg-[rgba(16,185,129,0.15)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#10b981] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">2</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore5() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">0</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketTeam5() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">SignalZero</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketRow2() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[16px] pb-[8px] pt-[9px] right-[16px] top-[150px]" data-name="div.bracket-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <DivBracketTeam4 />
      <DivBracketScore4 />
      <DivBracketScore5 />
      <DivBracketTeam5 />
    </div>
  );
}

function DivBracketCard() {
  return (
    <div className="bg-[#050c1e] h-[218px] relative rounded-[16px] shrink-0 w-full" data-name="div.bracket-card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DivBracketTitle />
      <DivBracketRow />
      <DivBracketRow1 />
      <DivBracketRow2 />
    </div>
  );
}

function DivBracketTitle1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[16px]" data-name="div.bracket-title">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Rocket League Cup</p>
      </div>
    </div>
  );
}

function DivBracketTeam6() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">G2 Orbit</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore6() {
  return (
    <div className="bg-[rgba(16,185,129,0.15)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#10b981] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore7() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">2</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketTeam7() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">Afterburn</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketRow3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[16px] pb-[8px] pt-[9px] right-[16px] top-[46px]" data-name="div.bracket-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <DivBracketTeam6 />
      <DivBracketScore6 />
      <DivBracketScore7 />
      <DivBracketTeam7 />
    </div>
  );
}

function DivBracketTeam8() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">Skyline</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore8() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">1</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore9() {
  return (
    <div className="bg-[rgba(16,185,129,0.15)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#10b981] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketTeam9() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">Vortex</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketRow4() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[16px] pb-[8px] pt-[9px] right-[16px] top-[98px]" data-name="div.bracket-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <DivBracketTeam8 />
      <DivBracketScore8 />
      <DivBracketScore9 />
      <DivBracketTeam9 />
    </div>
  );
}

function DivBracketTeam10() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">StoneGate</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore10() {
  return (
    <div className="bg-[rgba(16,185,129,0.15)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#10b981] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore11() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">0</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketTeam11() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">CleanRotations</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketRow5() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[16px] pb-[8px] pt-[9px] right-[16px] top-[150px]" data-name="div.bracket-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <DivBracketTeam10 />
      <DivBracketScore10 />
      <DivBracketScore11 />
      <DivBracketTeam11 />
    </div>
  );
}

function DivBracketCard1() {
  return (
    <div className="bg-[#050c1e] h-[218px] relative rounded-[16px] shrink-0 w-full" data-name="div.bracket-card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DivBracketTitle1 />
      <DivBracketRow3 />
      <DivBracketRow4 />
      <DivBracketRow5 />
    </div>
  );
}

function DivBracketTitle2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[16px]" data-name="div.bracket-title">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Smash Ultimate Ladder</p>
      </div>
    </div>
  );
}

function DivBracketTeam12() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">FrameTrick</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore12() {
  return (
    <div className="bg-[rgba(16,185,129,0.15)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#10b981] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore13() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">2</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketTeam13() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">EdgeGuard</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketRow6() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[16px] pb-[8px] pt-[9px] right-[16px] top-[46px]" data-name="div.bracket-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <DivBracketTeam12 />
      <DivBracketScore12 />
      <DivBracketScore13 />
      <DivBracketTeam13 />
    </div>
  );
}

function DivBracketTeam14() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">DIWizard</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore14() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">1</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore15() {
  return (
    <div className="bg-[rgba(16,185,129,0.15)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#10b981] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketTeam15() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">StockSniper</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketRow7() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[16px] pb-[8px] pt-[9px] right-[16px] top-[98px]" data-name="div.bracket-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <DivBracketTeam14 />
      <DivBracketScore14 />
      <DivBracketScore15 />
      <DivBracketTeam15 />
    </div>
  );
}

function DivBracketTeam16() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">AirControl</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore16() {
  return (
    <div className="bg-[rgba(16,185,129,0.15)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#10b981] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketScore17() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[10px] shrink-0 w-[28px]" data-name="div.bracket-score">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">0</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketTeam17() {
  return (
    <div className="relative shrink-0 w-[107.5px]" data-name="div.bracket-team">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">LastHit</p>
        </div>
      </div>
    </div>
  );
}

function DivBracketRow8() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[16px] pb-[8px] pt-[9px] right-[16px] top-[150px]" data-name="div.bracket-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <DivBracketTeam16 />
      <DivBracketScore16 />
      <DivBracketScore17 />
      <DivBracketTeam17 />
    </div>
  );
}

function DivBracketCard2() {
  return (
    <div className="bg-[#050c1e] h-[218px] relative rounded-[16px] shrink-0 w-full" data-name="div.bracket-card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DivBracketTitle2 />
      <DivBracketRow6 />
      <DivBracketRow7 />
      <DivBracketRow8 />
    </div>
  );
}

function DivBracketWrap() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[18px] right-[18px] top-[58px]" data-name="div.bracket-wrap">
      <DivBracketCard />
      <DivBracketCard1 />
      <DivBracketCard2 />
    </div>
  );
}

function Brackets() {
  return (
    <div className="absolute inset-[0_-10px_0_10px] opacity-0 overflow-auto" data-name="BRACKETS">
      <DivScreenHead4 />
      <DivBracketWrap />
    </div>
  );
}

function DivScreenTitle5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.screen-title">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Chat</p>
      </div>
    </div>
  );
}

function DivScreenPill5() {
  return (
    <div className="bg-[rgba(245,197,33,0.12)] content-stretch flex flex-col items-start px-[11px] py-[7px] relative rounded-[999px] shrink-0" data-name="div.screen-pill">
      <div aria-hidden="true" className="absolute border border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_0px_10px_0px_rgba(245,197,33,0.25)]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Live</p>
      </div>
    </div>
  );
}

function DivScreenHead5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.screen-head">
      <DivScreenTitle5 />
      <DivScreenPill5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d={svgPaths.p2edb7d00} fill="var(--fill-0, #00040C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivChatRoomIcon() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[44px]" data-name="div.chat-room-icon" style={{ backgroundImage: "linear-gradient(135deg, rgb(62, 121, 255) 0%, rgb(12, 42, 79) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Component6 />
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">General Chat</p>
      </div>
    </div>
  );
}

function PChatOnline() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p#chatOnline">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#10b981] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">1,284 online</p>
      </div>
    </div>
  );
}

function DivChatRoomInfo() {
  return (
    <div className="relative shrink-0" data-name="div.chat-room-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <H />
        <PChatOnline />
      </div>
    </div>
  );
}

function DivChatHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[17px] relative shrink-0 w-full" data-name="div.chat-header">
      <div aria-hidden="true" className="absolute border-[rgba(62,121,255,0.32)] border-b border-solid inset-0 pointer-events-none" />
      <DivChatRoomIcon />
      <DivChatRoomInfo />
    </div>
  );
}

function DivChatHeaderMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="div.chat-header:margin">
      <DivChatHeader />
    </div>
  );
}

function DivChatAvatar() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="div.chat-avatar" style={{ backgroundImage: "linear-gradient(135deg, rgb(62, 121, 255) 0%, rgb(12, 42, 79) 100%)" }}>
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">N</p>
      </div>
    </div>
  );
}

function SpanChatUsername() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.chat-username">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">NECS Mod</p>
      </div>
    </div>
  );
}

function SpanChatTime() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.chat-time">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[10px] whitespace-nowrap">
        <p className="leading-[normal]">2:34 PM</p>
      </div>
    </div>
  );
}

function DivChatUser() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div.chat-user">
      <SpanChatUsername />
      <SpanChatTime />
    </div>
  );
}

function DivChatText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.chat-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[19.6px] not-italic relative shrink-0 text-[#f7f9ff] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Welcome to NECS 2026! Keep chat</p>
        <p>friendly and enjoy the games!</p>
      </div>
    </div>
  );
}

function DivChatBubble() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.295px] items-start min-h-px min-w-px relative self-stretch" data-name="div.chat-bubble">
      <DivChatUser />
      <DivChatText />
    </div>
  );
}

function DivChatMsg() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="div.chat-msg">
      <DivChatAvatar />
      <DivChatBubble />
    </div>
  );
}

function DivChatMessages() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div#chatMessages">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start pr-[8px] relative size-full">
          <DivChatMsg />
        </div>
      </div>
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="relative shrink-0 w-[239px]" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Type a message...</p>
        </div>
      </div>
    </div>
  );
}

function InputChatInput() {
  return (
    <div className="bg-[rgba(11,36,72,0.34)] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[24px]" data-name="input#chatInput">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[18px] py-[15.5px] relative size-full">
          <DivPlaceholder1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(62,121,255,0.32)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p2f69880} fill="var(--fill-0, #00040C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonChatSend() {
  return (
    <div className="relative rounded-[24px] shrink-0 size-[48px]" data-name="button#chatSend" style={{ backgroundImage: "linear-gradient(135deg, rgb(62, 121, 255) 0%, rgb(12, 42, 79) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Component7 />
      </div>
    </div>
  );
}

function DivChatInputWrap() {
  return (
    <div className="content-stretch flex gap-[10px] items-start pt-[17px] relative shrink-0 w-full" data-name="div.chat-input-wrap">
      <div aria-hidden="true" className="absolute border-[rgba(62,121,255,0.32)] border-solid border-t inset-0 pointer-events-none" />
      <InputChatInput />
      <ButtonChatSend />
    </div>
  );
}

function DivChatContainer() {
  return (
    <div className="content-stretch flex flex-col h-[520px] items-start justify-between max-h-[520px] relative shrink-0 w-full" data-name="div.chat-container">
      <DivChatHeaderMargin />
      <DivChatMessages />
      <DivChatInputWrap />
    </div>
  );
}

function Chat() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] inset-[0_-10px_0_10px] items-start opacity-0 overflow-auto pb-[96px] pt-[16px] px-[18px]" data-name="CHAT">
      <DivScreenHead5 />
      <DivChatContainer />
    </div>
  );
}

function DivScreenTitle6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.screen-title">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f7f9ff] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">Profile</p>
      </div>
    </div>
  );
}

function DivScreenPill6() {
  return (
    <div className="bg-[rgba(245,197,33,0.12)] content-stretch flex flex-col items-start px-[11px] py-[7px] relative rounded-[999px] shrink-0" data-name="div.screen-pill">
      <div aria-hidden="true" className="absolute border border-[rgba(245,197,33,0.35)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_0px_10px_0px_rgba(245,197,33,0.25)]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f5c521] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Personal</p>
      </div>
    </div>
  );
}

function DivScreenHead6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.screen-head">
      <DivScreenTitle6 />
      <DivScreenPill6 />
    </div>
  );
}

function ButtonProfileEdit() {
  return (
    <div className="bg-[rgba(62,121,255,0.08)] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[12px] shrink-0" data-name="button#profileEdit">
      <div aria-hidden="true" className="absolute border border-[rgba(62,121,255,0.65)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[13.3px] text-center tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Edit</p>
      </div>
    </div>
  );
}

function ButtonProfileEditAlignFlexStart() {
  return (
    <div className="h-[44px] relative shrink-0" data-name="button#profileEdit:align-flex-start">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start pb-[10px] pt-px relative">
        <ButtonProfileEdit />
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="div">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Nightshade</p>
      </div>
    </div>
  );
}

function DivProfileSub() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.profile-sub">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">NECS VIP • Nashville</p>
      </div>
    </div>
  );
}

function DivProfileDetails() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.profile-details">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Div1 />
        <DivProfileSub />
      </div>
    </div>
  );
}

function DivProfileCard() {
  return (
    <div className="max-w-[360px] relative rounded-[16px] shrink-0 w-full" data-name="div.profile-card" style={{ backgroundImage: "linear-gradient(144.479deg, rgb(8, 20, 43) 0%, rgba(8, 26, 54, 0.75) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(62,121,255,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[14px] items-center max-w-[inherit] px-[19px] py-[18px] relative w-full">
          <ButtonProfileEditAlignFlexStart />
          <DivProfileDetails />
        </div>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="relative shrink-0 w-[134.5px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[11px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">Matches watched</p>
        </div>
      </div>
    </div>
  );
}

function Strong() {
  return (
    <div className="relative shrink-0 w-[134.5px]" data-name="strong">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">
          <p className="leading-[normal]">24</p>
        </div>
      </div>
    </div>
  );
}

function DivProfileStat() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col gap-[6px] items-start left-0 p-[13px] right-[172.5px] rounded-[14px] top-0" data-name="div.profile-stat">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div2 />
      <Strong />
    </div>
  );
}

function Div3() {
  return (
    <div className="relative shrink-0 w-[134.5px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[11px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">Replays saved</p>
        </div>
      </div>
    </div>
  );
}

function Strong1() {
  return (
    <div className="relative shrink-0 w-[134.5px]" data-name="strong">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">
          <p className="leading-[normal]">12</p>
        </div>
      </div>
    </div>
  );
}

function DivProfileStat1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col gap-[6px] items-start left-[172.5px] p-[13px] right-0 rounded-[14px] top-0" data-name="div.profile-stat">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div3 />
      <Strong1 />
    </div>
  );
}

function Div4() {
  return (
    <div className="relative shrink-0 w-[134.5px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#97a8d8] text-[11px] uppercase whitespace-nowrap">
          <p className="leading-[normal]">Notifications</p>
        </div>
      </div>
    </div>
  );
}

function Strong2() {
  return (
    <div className="relative shrink-0 w-[134.5px]" data-name="strong">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white uppercase whitespace-nowrap">
          <p className="leading-[normal]">4</p>
        </div>
      </div>
    </div>
  );
}

function DivProfileStat2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col gap-[6px] items-start left-0 p-[13px] right-[172.5px] rounded-[14px] top-[82px]" data-name="div.profile-stat">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div4 />
      <Strong2 />
    </div>
  );
}

function DivProfileStats() {
  return (
    <div className="h-[154px] relative shrink-0 w-full" data-name="div.profile-stats">
      <DivProfileStat />
      <DivProfileStat1 />
      <DivProfileStat2 />
    </div>
  );
}

function DivProfileActivityTitle() {
  return (
    <div className="relative shrink-0 w-[299px]" data-name="div.profile-activity-title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9ff] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Recent actions</p>
        </div>
      </div>
    </div>
  );
}

function Li() {
  return (
    <div className="relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex flex-col items-start pl-[14px] relative w-full">
        <div className="absolute bg-[#f5c521] left-0 rounded-[3px] size-[6px] top-[7px]" data-name="::before" />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(247,249,255,0.9)] whitespace-nowrap">
          <p className="leading-[normal]">Synced Valorant favorites playlist • 09:30 AM</p>
        </div>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex flex-col items-start pl-[14px] relative w-full">
        <div className="absolute bg-[#f5c521] left-0 rounded-[3px] size-[6px] top-[7px]" data-name="::before" />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(247,249,255,0.9)] whitespace-nowrap">
          <p className="mb-0">Added Rocket League replay to watchlist •</p>
          <p>08:15 AM</p>
        </div>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex flex-col items-start pl-[14px] relative w-full">
        <div className="absolute bg-[#f5c521] left-0 rounded-[3px] size-[6px] top-[7px]" data-name="::before" />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(247,249,255,0.9)] whitespace-nowrap">
          <p className="leading-[normal]">Shared bracket photo • 07:55 AM</p>
        </div>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="relative shrink-0 w-[299px]" data-name="ul">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Li />
        <Li1 />
        <Li2 />
      </div>
    </div>
  );
}

function DivProfileActivity() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="div.profile-activity" style={{ backgroundImage: "linear-gradient(144.05deg, rgb(5, 12, 30) 0%, rgba(11, 36, 72, 0.6) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(62,121,255,0.28)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[17px] pt-[21px] px-[17px] relative w-full">
        <DivProfileActivityTitle />
        <Ul />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] inset-[0_-10px_0_10px] items-start opacity-0 overflow-auto pb-[96px] pt-[16px] px-[18px]" data-name="PROFILE">
      <DivScreenHead6 />
      <DivProfileCard />
      <DivProfileStats />
      <DivProfileActivity />
    </div>
  );
}

function DivContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[369px]" data-name="div.content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Home />
        <Live />
        <Players />
        <Replays />
        <Brackets />
        <Chat />
        <Profile />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Component 1">
          <path d={svgPaths.p306d440} fill="var(--fill-0, white)" fillOpacity="0.35" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanNavLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.nav-label">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function DivNavItem() {
  return (
    <div className="h-[58px] relative rounded-[16px] shrink-0 w-[44.61px]" data-name="div.nav-item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center justify-end py-[8px] relative size-full">
        <Component8 />
        <SpanNavLabel />
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Component 1">
          <path d={svgPaths.p170d2600} fill="var(--fill-0, #3E79FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanNavLabel1() {
  return (
    <div className="relative shrink-0" data-name="span.nav-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#3e79ff] text-[10px] tracking-[0.2px] whitespace-nowrap">
          <p className="leading-[normal]">Live</p>
        </div>
      </div>
    </div>
  );
}

function DivNavItem1() {
  return (
    <div className="bg-[rgba(62,121,255,0.12)] h-[58px] relative rounded-[16px] shrink-0 w-[44.63px]" data-name="div.nav-item">
      <div aria-hidden="true" className="absolute border border-[rgba(62,121,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center justify-end px-px py-[9px] relative size-full">
        <Component9 />
        <SpanNavLabel1 />
        <div className="absolute bg-[#f5c521] bottom-[7px] h-[3px] left-[30.9%] right-[30.9%] rounded-[999px]" data-name="::after" />
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Component 1">
          <path d={svgPaths.p3ff45900} fill="var(--fill-0, white)" fillOpacity="0.35" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanNavLabel2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.nav-label">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">Players</p>
      </div>
    </div>
  );
}

function DivNavItem2() {
  return (
    <div className="h-[58px] relative rounded-[16px] shrink-0 w-[44.61px]" data-name="div.nav-item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center justify-end py-[8px] relative size-full">
        <Component10 />
        <SpanNavLabel2 />
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Component 1">
          <path d={svgPaths.p38a75700} fill="var(--fill-0, white)" fillOpacity="0.35" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanNavLabel3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.nav-label">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">Replays</p>
      </div>
    </div>
  );
}

function DivNavItem3() {
  return (
    <div className="h-[58px] relative rounded-[16px] shrink-0 w-[44.63px]" data-name="div.nav-item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center justify-end py-[8px] relative size-full">
        <Component11 />
        <SpanNavLabel3 />
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Component 1">
          <path d={svgPaths.p1ea38600} fill="var(--fill-0, white)" fillOpacity="0.35" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanNavLabel4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.nav-label">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">Brackets</p>
      </div>
    </div>
  );
}

function DivNavItem4() {
  return (
    <div className="h-[58px] relative rounded-[16px] shrink-0 w-[45.3px]" data-name="div.nav-item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center justify-end py-[8px] relative size-full">
        <Component12 />
        <SpanNavLabel4 />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Component 1">
          <path d={svgPaths.p38a08200} fill="var(--fill-0, white)" fillOpacity="0.35" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanNavLabel5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.nav-label">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">Chat</p>
      </div>
    </div>
  );
}

function DivNavItem5() {
  return (
    <div className="h-[58px] relative rounded-[16px] shrink-0 w-[44.61px]" data-name="div.nav-item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center justify-end py-[8px] relative size-full">
        <Component13 />
        <SpanNavLabel5 />
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Component 1">
          <path d={svgPaths.p35433f00} fill="var(--fill-0, white)" fillOpacity="0.35" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanNavLabel6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.nav-label">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">Profile</p>
      </div>
    </div>
  );
}

function DivNavItem6() {
  return (
    <div className="h-[58px] relative rounded-[16px] shrink-0 w-[44.63px]" data-name="div.nav-item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center justify-end py-[8px] relative size-full">
        <Component14 />
        <SpanNavLabel6 />
      </div>
    </div>
  );
}

function NavBottomNav() {
  return (
    <div className="absolute bg-[rgba(18,18,26,0.96)] bottom-[12px] h-[82px] left-[12px] right-[12px]" data-name="nav.bottom-nav">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center pb-[24px] pt-[11px] px-[10px] relative size-full">
        <DivNavItem />
        <DivNavItem1 />
        <DivNavItem2 />
        <DivNavItem3 />
        <DivNavItem4 />
        <DivNavItem5 />
        <DivNavItem6 />
      </div>
    </div>
  );
}

function DivToast() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.85)] bottom-[88px] left-[41.56%] opacity-0 right-[41.56%] rounded-[999px]" data-name="div#toast">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[15px] py-[11px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[normal]">Saved</p>
        </div>
      </div>
    </div>
  );
}

function DivDevice() {
  return (
    <div className="bg-[#00040c] h-[852px] max-h-[852px] max-w-[393px] relative rounded-[54px] shrink-0 w-[393px]" data-name="div.device">
      <div className="content-stretch flex flex-col items-start max-h-[inherit] max-w-[inherit] overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <DivStatusBar />
        <DivAppHeader />
        <DivContent />
        <div className="-translate-x-1/2 absolute bg-[#1c1c1e] h-[28px] left-1/2 rounded-bl-[18px] rounded-br-[18px] top-[20px] w-[140px]" data-name="::before" />
        <NavBottomNav />
        <DivToast />
        <div className="absolute bg-[rgba(0,0,0,0.75)] inset-[12px] opacity-0" data-name="div#overlay" />
      </div>
      <div aria-hidden="true" className="absolute border-12 border-[#1c1c1e] border-solid inset-0 pointer-events-none rounded-[54px] shadow-[0px_50px_100px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function BodyX2DBody() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="body#__x2d_body" style={{ backgroundImage: "linear-gradient(135deg, rgb(26, 15, 10) 0%, rgb(5, 10, 28) 50%, rgb(26, 15, 10) 100%)" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[32px] relative size-full">
          <DivDevice />
        </div>
      </div>
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start justify-center relative size-full" data-name="1920w light">
      <BodyX2DBody />
    </div>
  );
}