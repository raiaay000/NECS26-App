export type GameType = 'Valorant' | 'Rocket League' | 'Super Smash Bros' | 'VALORANT' | 'ROCKET LEAGUE' | 'SMASH ULTIMATE';

export function getGameBadgeColor(game: string): string {
  const normalizedGame = game.toLowerCase();
  
  if (normalizedGame.includes('valorant')) {
    return 'bg-[rgba(255,70,85,0.08)] border-[rgba(255,70,85,0.35)] text-[#ff4655]';
  }
  
  if (normalizedGame.includes('rocket')) {
    return 'bg-[rgba(98,70,234,0.08)] border-[rgba(98,70,234,0.35)] text-[#8b7aff]';
  }
  
  if (normalizedGame.includes('smash')) {
    return 'bg-[rgba(255,165,0,0.08)] border-[rgba(255,165,0,0.35)] text-[#ffa500]';
  }
  
  return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
}

export function getGameTextColor(game: string): string {
  const normalizedGame = game.toLowerCase();
  
  if (normalizedGame.includes('valorant')) return 'text-[#ff4655]';
  if (normalizedGame.includes('rocket')) return 'text-[#8b7aff]';
  if (normalizedGame.includes('smash')) return 'text-[#ffa500]';
  
  return 'text-blue-400';
}
